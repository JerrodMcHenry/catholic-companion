// The small set of building blocks every page shares.

import Link from "next/link";
import type { Resource, ResourceType, Topic } from "@/content";

const card =
  "flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-gold";

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

// A link to anywhere in the app, drawn as a card with a title and optional description.
export function CardLink({ href, title, description }: { href: string; title: string; description?: string }) {
  return (
    <Link href={href} className={card}>
      <span className="flex-1">
        <span className="block font-medium text-ink">{title}</span>
        {description && <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-soft">{description}</span>}
      </span>
      <Chevron />
    </Link>
  );
}

export function TopicList({ topics }: { topics: Topic[] }) {
  return (
    <ul className="space-y-3">
      {topics.map((topic) => (
        <li key={topic.slug}>
          <CardLink href={`/topic/${topic.slug}`} title={topic.question} />
        </li>
      ))}
    </ul>
  );
}

const typeLabel: Record<ResourceType, string> = {
  document: "Church document",
  article: "Article",
  video: "Video",
  podcast: "Podcast",
  book: "Book",
  course: "Course",
};

// External resources open in a new tab so the reader keeps their place here.
export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <ul className="space-y-3">
      {resources.map((r) => (
        <li key={r.id}>
          <a href={r.url} target="_blank" rel="noopener noreferrer" className={card}>
            <span className="flex-1">
              <span className="block text-xs font-semibold tracking-wider text-gold-ink uppercase">
                {typeLabel[r.type]} · {r.source}
              </span>
              <span className="mt-1 block font-medium text-ink">{r.title}</span>
              {r.note && <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-soft">{r.note}</span>}
              <span className="sr-only">(opens in a new tab)</span>
            </span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="-ml-2 inline-flex min-h-11 items-center gap-1 rounded-full px-2 font-medium text-accent hover:underline"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m15 6-6 6 6 6" />
      </svg>
      {label}
    </Link>
  );
}

// Section heading used inside pages.
export function SectionTitle({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="mb-4 font-serif text-3xl font-semibold text-ink">
      {children}
    </h2>
  );
}
