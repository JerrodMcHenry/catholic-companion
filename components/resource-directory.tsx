"use client";

// The Resources directory: one alphabetical list that can be narrowed by subject, format,
// and title or publisher. Subjects come from the server page (derived from the topics that cite
// each resource), so nothing here is maintained by hand. Each resource appears at most once.

import { useMemo, useRef, useState } from "react";
import { ResourceList } from "@/components/cards";
import { resourceTypeLabel, type Resource, type ResourceType } from "@/content/types";
import { normalize } from "@/lib/search";

export type DirectoryItem = { resource: Resource; subjects: string[] };

const control =
  "min-h-12 w-full rounded-xl border-2 border-line bg-card px-4 text-base text-ink focus:border-gold-ink focus:outline-none";
const label = "mb-1.5 block text-[0.9375rem] font-medium text-ink";

// Results are shown a page at a time so the list stays short on phones.
const PAGE = 24;

export function ResourceDirectory({ items, subjects, formats }: { items: DirectoryItem[]; subjects: string[]; formats: ResourceType[] }) {
  const [query, setQuery] = useState("");
  const [subject, setSubject] = useState("");
  const [format, setFormat] = useState("");
  const [shown, setShown] = useState(PAGE);
  const input = useRef<HTMLInputElement>(null);
  // Any change to the filters starts again from the first page.
  const update = (set: (value: string) => void) => (value: string) => {
    set(value);
    setShown(PAGE);
  };

  // The searchable text of each resource, normalized once: title, author, and publisher.
  const haystacks = useMemo(() => items.map((i) => normalize(`${i.resource.title} ${i.resource.source}`)), [items]);
  const terms = normalize(query).split(" ").filter(Boolean);

  const matches = (i: number, skip?: "subject" | "format") => {
    const item = items[i];
    if (skip !== "subject" && subject && !item.subjects.includes(subject)) return false;
    if (skip !== "format" && format && item.resource.type !== format) return false;
    return terms.every((t) => haystacks[i].includes(t));
  };
  const count = (skip: "subject" | "format", test: (item: DirectoryItem) => boolean) =>
    items.filter((item, i) => test(item) && matches(i, skip)).length;

  const results = items.filter((_, i) => matches(i)).map((i) => i.resource);
  const filtered = Boolean(query || subject || format);
  const clear = () => {
    setQuery("");
    setSubject("");
    setFormat("");
    setShown(PAGE);
    // The Clear button disappears, so keep keyboard focus somewhere useful.
    input.current?.focus();
  };

  return (
    <div>
      <div role="search" aria-label="Find resources" className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="resource-query" className={label}>Title or publisher</label>
          <input
            id="resource-query"
            ref={input}
            type="search"
            value={query}
            onChange={(e) => update(setQuery)(e.target.value)}
            placeholder="For example: Catechism, Ascension, Vatican"
            className={`${control} rounded-full placeholder:text-ink-soft`}
          />
        </div>
        <div>
          <label htmlFor="resource-subject" className={label}>Subject</label>
          <select id="resource-subject" value={subject} onChange={(e) => update(setSubject)(e.target.value)} className={control}>
            <option value="">All subjects ({count("subject", () => true)})</option>
            {subjects.map((s) => (
              <option key={s} value={s}>
                {s} ({count("subject", (item) => item.subjects.includes(s))})
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="resource-format" className={label}>Format</label>
          <select id="resource-format" value={format} onChange={(e) => update(setFormat)(e.target.value)} className={control}>
            <option value="">All formats ({count("format", () => true)})</option>
            {formats.map((f) => (
              <option key={f} value={f}>
                {resourceTypeLabel[f]} ({count("format", (item) => item.resource.type === f)})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex min-h-11 items-center justify-between gap-4">
        <p role="status" className="text-ink-soft">
          Showing <span className="font-medium text-ink">{results.length}</span> of {items.length} resources
        </p>
        {filtered && (
          <button type="button" onClick={clear} className="min-h-11 rounded-full border border-line bg-card px-4 font-medium text-accent hover:border-gold">
            Clear filters
          </button>
        )}
      </div>

      <div className="mt-4">
        {results.length > 0 ? (
          <>
            <ResourceList resources={results.slice(0, shown)} />
            {results.length > shown && (
              <button
                type="button"
                onClick={() => setShown(shown + PAGE)}
                className="mt-6 min-h-12 w-full rounded-full border border-line bg-card px-5 font-medium text-accent hover:border-gold"
              >
                Show more ({results.length - shown} remaining)
              </button>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-line bg-card p-6 text-center">
            <p className="text-ink">No resources match these filters.</p>
            <button type="button" onClick={clear} className="mt-4 min-h-11 rounded-full bg-accent px-5 font-medium text-on-accent hover:bg-accent-strong">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
