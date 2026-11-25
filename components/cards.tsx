// The small set of building blocks every page shares.

import Link from "next/link";
import { resourceTypeLabel, type Resource, type Topic } from "@/content";

const card =
  "flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-gold";

const icon = { "aria-hidden": true, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" } as const;

type CardLinkProps = {
  href: string;
  title: string;
  description?: string;
  eyebrow?: string; // Small label above the title: what kind of thing this is.
  external?: boolean; // External links open in a new tab so the reader keeps their place.
};

// A link drawn as a card. Used for topics, categories, resources, and search results.
export function CardLink({ href, title, description, eyebrow, external }: CardLinkProps) {
  const body = (
    <>
      <span className="flex-1">
        {eyebrow && (
          <span className="mb-1 block text-xs font-semibold tracking-wider text-gold-ink uppercase">{eyebrow}</span>
        )}
        <span className="block font-medium text-ink">{title}</span>
        {description && <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-soft">{description}</span>}
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </span>
      {external ? (
        <svg {...icon} className="size-5 shrink-0 text-gold-ink">
          <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
        </svg>
      ) : (
        <svg {...icon} className="size-5 shrink-0 text-gold-ink">
          <path d="m9 6 6 6-6 6" />
        </svg>
      )}
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={card}>
      {body}
    </a>
  ) : (
    <Link href={href} className={card}>
      {body}
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

export function ResourceList({ resources }: { resources: Resource[] }) {
  return (
    <ul className="space-y-3">
      {resources.map((r) => (
        <li key={r.id}>
          <CardLink
            href={r.url}
            external
            eyebrow={`${resourceTypeLabel[r.type]} · ${r.source}`}
            title={r.title}
            description={r.note}
          />
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
      <svg {...icon} className="size-5">
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
