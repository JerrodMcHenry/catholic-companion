import type { Metadata } from "next";
import Link from "next/link";
import { BackLink } from "@/components/cards";
import { startHere, topicsFor } from "@/content";

export const metadata: Metadata = { title: "Start here" };

export default function StartPage() {
  return (
    <>
      <BackLink href="/" label="Home" />
      <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink">New to Catholicism?</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Welcome. These short guides answer the questions people usually ask first. Read them in
        order, or begin with whichever you are most curious about.
      </p>

      <ol className="mt-8 space-y-3">
        {topicsFor(startHere).map((topic, index) => (
          <li key={topic.slug}>
            <Link
              href={`/topic/${topic.slug}`}
              className="flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-gold"
            >
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg font-semibold text-gold-ink"
              >
                {index + 1}
              </span>
              <span className="font-medium text-ink">{topic.question}</span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}
