// Turns the content registries into search entries. Nothing here is maintained by hand:
// add a topic, tradition, or resource and it becomes searchable automatically.

import { WEIGHT, type SearchEntry } from "@/lib/search";
import {
  categories,
  getCategory,
  getTradition,
  hasPage,
  pillars,
  resources,
  resourceLabel,
  resourcesFor,
  resourceTypeLabel,
  topics,
  topicsIn,
  traditions,
} from "./index";

const firstSentence = (text = "") => text.match(/^.*?[.?!](\s|$)/)?.[0].trim() ?? text;

// "309–314, 324" → "309 310 311 312 313 314 324", so a search for "311" finds it.
function expandParagraphs(paragraphs: string) {
  return paragraphs
    .split(",")
    .flatMap((part) => {
      const [from, to = from] = part.split("–").map((n) => Number(n.trim()));
      return Array.from({ length: to - from + 1 }, (_, i) => from + i);
    })
    .join(" ");
}

const groupLabel = { christian: "Christian tradition", religion: "Religion", worldview: "Worldview" };

export function searchEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  for (const t of topics) {
    const perspectives = t.debate?.perspectives ?? [];
    const traditionNames = perspectives.map((p) => {
      const tradition = getTradition(p.tradition)!;
      return [tradition.name, ...(tradition.keywords ?? [])].join(" ");
    });
    entries.push({
      kind: "topic",
      title: t.question,
      href: `/topic/${t.slug}`,
      label: getCategory(t.category)!.title,
      description: firstSentence(t.summary),
      fields: [
        [t.question, WEIGHT.title],
        [t.title, WEIGHT.title],
        [(t.alsoKnownAs ?? []).join(" "), WEIGHT.alias],
        [t.keywords.join(" "), WEIGHT.keyword],
        [t.debate ? `${getCategory(t.category)!.title} common questions objections apologetics` : getCategory(t.category)!.title, WEIGHT.context],
        [traditionNames.join(" "), WEIGHT.context],
        [(t.teaching.scripture ?? []).map((s) => s.passage).join(" "), WEIGHT.context],
        [`Catechism CCC ${(t.teaching.catechism ?? []).map((c) => expandParagraphs(c.paragraphs)).join(" ")}`, WEIGHT.context],
        [t.summary, WEIGHT.summary],
        [resourcesFor(t.teaching.documents).map((r) => r.title).join(" "), WEIGHT.summary],
        [
          [
            ...(t.explanation ?? []),
            ...perspectives.flatMap((p) => [p.position, ...p.arguments.flatMap((a) => [a.claim, a.response])]),
          ].join(" "),
          WEIGHT.detail,
        ],
      ],
    });
  }

  for (const t of traditions) {
    const parent = t.parent ? getTradition(t.parent) : undefined;
    const target = hasPage(t) ? t : parent && hasPage(parent) ? parent : undefined;
    if (!target) continue; // No page to send anyone to yet.
    entries.push({
      kind: "tradition",
      title: t.name,
      href: `/apologetics/${target.slug}`,
      label: parent ? `${parent.name} tradition` : groupLabel[t.group],
      description: hasPage(t) ? firstSentence(t.overview![0]) : `Covered on the ${parent!.name} page for now.`,
      fields: [
        [t.name, WEIGHT.title],
        [(t.keywords ?? []).join(" "), WEIGHT.alias],
        [parent?.name ?? "", WEIGHT.context],
        [[...(t.overview ?? []), ...(t.differences ?? [])].join(" "), WEIGHT.detail],
      ],
    });
  }

  for (const p of pillars) {
    const href = p.id === "apologetics" ? "/apologetics" : p.id === "resources" ? "/resources" : `/explore#${p.id}`;
    entries.push({
      kind: "category",
      title: p.subtitle ? `${p.title}: ${p.subtitle}` : p.title,
      href,
      label: "Section",
      description: p.description,
      fields: [
        [p.title, WEIGHT.title],
        [p.subtitle ?? "", WEIGHT.alias],
        [p.description, WEIGHT.summary],
      ],
    });
  }

  // Empty categories are left out until they have topics.
  for (const c of categories.filter((c) => c.pillar !== "apologetics" && topicsIn(c.slug).length > 0)) {
    entries.push({
      kind: "category",
      title: c.title,
      href: `/category/${c.slug}`,
      label: "Category",
      description: c.description,
      fields: [
        [c.title, WEIGHT.title],
        [c.description, WEIGHT.summary],
      ],
    });
  }

  for (const r of resources) {
    entries.push({
      kind: "resource",
      title: r.title,
      href: r.url,
      external: true,
      label: resourceLabel(r),
      description: r.note,
      fields: [
        [r.title, WEIGHT.resourceTitle],
        [r.source, WEIGHT.keyword],
        [resourceTypeLabel[r.type], WEIGHT.context],
        [r.note ?? "", WEIGHT.summary],
      ],
    });
  }

  // Drop empty fields so the index carries only text that can match.
  return entries.map((e) => ({ ...e, fields: e.fields.filter(([text]) => text.trim()) }));
}
