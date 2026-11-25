"use client";

// The interactive search page: a field, live results, and a shareable /search?q= URL.
// The index arrives as props from the server page, so no data is fetched here.

import { useDeferredValue, useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CardLink } from "@/components/cards";
import { buildIndex, search, type SearchEntry, type SearchKind, type SearchResult } from "@/lib/search";

const groupTitles: Record<SearchKind, string> = {
  topic: "Topics and questions",
  tradition: "Religious traditions",
  category: "Categories",
  resource: "Resources",
};

const suggestions = [
  "How do I become Catholic?",
  "Communion",
  "Is the Bible the only authority?",
  "Islam",
  "Why does God allow suffering?",
];

const field =
  "min-h-14 w-full rounded-full border-2 border-line bg-card pr-14 pl-13 text-lg text-ink placeholder:text-ink-soft focus:border-gold-ink focus:outline-none";

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute top-1/2 left-5 size-6 -translate-y-1/2 text-gold-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m20.5 20.5-4.5-4.5" />
    </svg>
  );
}

// Shown in the static HTML until the page hydrates. A plain form, so it still works without JavaScript.
export function SearchFallback() {
  return (
    <form role="search" action="/search" className="relative mt-6">
      <SearchIcon />
      <label htmlFor="q" className="sr-only">Search Catholic Companion</label>
      <input id="q" name="q" type="search" placeholder="Search a question or topic" className={field} />
    </form>
  );
}

// Results grouped by kind; the group holding the best match comes first.
function group(results: SearchResult[]) {
  const groups = new Map<SearchKind, SearchResult[]>();
  for (const r of results) groups.set(r.entry.kind, [...(groups.get(r.entry.kind) ?? []), r]);
  return [...groups.entries()];
}

export function Search({ entries }: { entries: SearchEntry[] }) {
  const initial = useSearchParams().get("q") ?? "";
  const [query, setQuery] = useState(initial);
  const input = useRef<HTMLInputElement>(null);
  const index = useMemo(() => buildIndex(entries), [entries]);
  const deferred = useDeferredValue(query); // Keeps typing smooth while results update.
  const results = useMemo(() => search(index, deferred), [index, deferred]);
  const hasQuery = deferred.trim().length > 0;

  // Keep the URL shareable, and restore the query when returning with Back. Updated after
  // a short pause, because browsers throttle pages that rewrite the URL on every keystroke.
  useEffect(() => {
    const timer = setTimeout(() => {
      window.history.replaceState(null, "", query.trim() ? `/search?q=${encodeURIComponent(query)}` : "/search");
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);


  return (
    <>
      <form
        role="search"
        action="/search"
        className="relative mt-6"
        onSubmit={(e) => {
          e.preventDefault();
          input.current?.blur(); // On phones, closing the keyboard reveals the results.
        }}
      >
        <SearchIcon />
        <label htmlFor="q" className="sr-only">Search Catholic Companion</label>
        <input
          ref={input}
          id="q"
          name="q"
          type="search"
          enterKeyHint="search"
          autoComplete="off"
          autoFocus={!initial}
          placeholder="Search a question or topic"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={field}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            onClick={() => {
              setQuery("");
              input.current?.focus();
            }}
            className="absolute top-1/2 right-2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full text-ink-soft hover:bg-tint"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        )}
      </form>

      <p role="status" className="mt-4 min-h-6 text-ink-soft">
        {hasQuery && results.length > 0 && `${results.length} ${results.length === 1 ? "result" : "results"}`}
        {hasQuery && results.length === 0 && <span className="sr-only">No results</span>}
      </p>

      {hasQuery && results.length === 0 && (
        <div className="mt-2 rounded-2xl bg-tint px-5 py-5 leading-relaxed">
          <p className="font-medium">No results for “{deferred.trim()}”.</p>
          <p className="mt-1 text-ink-soft">
            Try fewer or different words, or one of the searches below. Catholic Companion is still
            growing, so some subjects are not covered yet.
          </p>
        </div>
      )}

      {hasQuery &&
        group(results).map(([kind, items]) => (
          <section key={kind} aria-labelledby={`results-${kind}`} className="mt-8">
            <h2 id={`results-${kind}`} className="mb-3 font-serif text-2xl font-semibold">
              {groupTitles[kind]}
            </h2>
            <ul className="space-y-3">
              {items.map(({ entry }) => (
                <li key={entry.href + entry.title}>
                  <CardLink
                    href={entry.href}
                    title={entry.title}
                    eyebrow={entry.label}
                    description={entry.description}
                    external={entry.external}
                  />
                </li>
              ))}
            </ul>
          </section>
        ))}

      {(!hasQuery || results.length === 0) && (
        <section aria-labelledby="try" className="mt-8">
          <h2 id="try" className="mb-3 font-serif text-2xl font-semibold">
            Try searching for
          </h2>
          <ul className="flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <li key={s}>
                <button
                  type="button"
                  onClick={() => setQuery(s)}
                  className="min-h-11 rounded-full border border-line bg-card px-4 text-left font-medium text-accent hover:border-gold"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}
