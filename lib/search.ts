// Local search: text normalization, a small in-memory index, and ranking.
// Pure functions with no dependencies, so they run anywhere and are easy to test.

export type SearchKind = "topic" | "tradition" | "category" | "resource";

export type SearchEntry = {
  kind: SearchKind;
  title: string;
  href: string;
  label: string; // What the result is: "The Mass", "Apologetics", "Video · Catholic Answers".
  description?: string;
  external?: boolean;
  fields: [text: string, weight: number][]; // Searchable text; higher weight is a stronger signal.
};

export type SearchResult = { entry: SearchEntry; score: number };

// Field weights, strongest first. Shared with the code that builds entries.
export const WEIGHT = { title: 10, alias: 8, keyword: 6, context: 3, summary: 2, detail: 1 } as const;

// Words too common to signal meaning. Ignored unless the query has nothing else.
const STOP_WORDS = new Set(
  "a about an and are as at be by can could did do does for from has have how i if in into is it its me my of on or our should so than that the their them then there these they this to us was we were what when where which who why will with would you your".split(
    " ",
  ),
);

// Lowercase, strip accents, drop apostrophes (straight or curly), and turn all
// other punctuation into spaces: "Jehovah’s Witnesses" → "jehovahs witnesses".
export function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['‘’ʼ`´]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const tokenize = (text: string) => normalize(text).split(" ").filter(Boolean);

// Damerau-Levenshtein distance (insert, delete, substitute, swap neighbors).
function editDistance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array<number>(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[a.length][b.length];
}

// How well one query term matches one word of content, from 0 to 1.
// Typos are forgiven only for terms that appear nowhere in the content, so a real
// word ("Baptist") is never treated as a misspelling of another ("baptism").
function matchQuality(term: string, word: string, fuzzy: boolean): number {
  if (word === term) return 1;
  if (term.length >= 2 && word.startsWith(term)) return 0.8; // Partial word: "euchar" → "eucharist".
  if (word.length >= 4 && term.startsWith(word) && term.length - word.length <= 2) return 0.8; // "muslims" → "muslim".
  // One typo for words of 5+ letters, two for 9+: "athiest" → "atheist".
  if (fuzzy && term.length >= 5 && Math.abs(term.length - word.length) <= 2) {
    if (editDistance(term, word) <= (term.length >= 9 ? 2 : 1)) return 0.6;
  }
  return 0;
}

type IndexedEntry = { entry: SearchEntry; fields: { text: string; words: string[]; weight: number }[] };
export type SearchIndex = { items: IndexedEntry[]; vocabulary: string[] };

export function buildIndex(entries: SearchEntry[]): SearchIndex {
  const items = entries.map((entry) => ({
    entry,
    fields: entry.fields.map(([text, weight]) => ({ text: normalize(text), words: tokenize(text), weight })),
  }));
  const vocabulary = [...new Set(items.flatMap((i) => i.fields.flatMap((f) => f.words)))];
  return { items, vocabulary };
}

export function search({ items, vocabulary }: SearchIndex, query: string): SearchResult[] {
  const phrase = normalize(query);
  const allTerms = [...new Set(phrase.split(" ").filter(Boolean))];
  const meaningful = allTerms.filter((t) => !STOP_WORDS.has(t));
  const terms = meaningful.length ? meaningful : allTerms;
  if (!terms.length) return [];

  const known = terms.map((term) => vocabulary.some((w) => w.startsWith(term)));

  // Best weighted match for each term in each entry.
  const scores = items.map((item) =>
    terms.map((term, t) => {
      // Numbers ("6", "1374") only count in titles and reference fields, not in running text.
      const isNumber = /^\d+$/.test(term);
      let best = 0;
      for (const field of item.fields) {
        if (isNumber && field.weight < WEIGHT.context) continue;
        for (const word of field.words) best = Math.max(best, matchQuality(term, word, !known[t]) * field.weight);
      }
      return best;
    }),
  );

  // Terms that match fewer entries say more (inverse document frequency).
  const rarity = terms.map((_, i) => {
    const matches = scores.filter((row) => row[i] > 0).length;
    return matches ? Math.log(1 + items.length / matches) : 0;
  });

  const ranked: (SearchResult & { base: number })[] = [];
  items.forEach((item, k) => {
    const matched = scores[k].filter((s) => s > 0).length;
    if (!matched) return;
    // Favor results that match more of the query, without requiring all of it.
    const base = (scores[k].reduce((sum, s, i) => sum + s * rarity[i], 0) * matched) / terms.length;
    let bonus = 0;
    for (const field of item.fields) {
      if (field.weight < WEIGHT.alias) continue; // Phrase bonuses only for titles, questions, and alternative names.
      if (field.text === phrase) bonus = Math.max(bonus, 60);
      else if (phrase.length >= 4 && field.text.includes(phrase)) bonus = Math.max(bonus, 20);
    }
    ranked.push({ entry: item.entry, score: base + bonus, base });
  });

  ranked.sort((a, b) => b.score - a.score);
  // Drop weak, incidental matches. The cutoff ignores phrase bonuses, so an exact
  // title match ranks first without hiding other relevant results.
  const topBase = Math.max(0, ...ranked.map((r) => r.base));
  return ranked.filter((r) => r.base >= topBase * 0.2).map(({ entry, score }) => ({ entry, score }));
}
