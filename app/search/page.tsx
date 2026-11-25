import type { Metadata } from "next";
import { CardLink } from "@/components/cards";

export const metadata: Metadata = { title: "Search" };

// Temporary page: search is built in a later phase.
export default function SearchPage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Search</h1>
      <p className="mt-6 rounded-2xl bg-tint px-5 py-5 leading-relaxed text-ink">
        <strong className="font-semibold">Search is coming soon.</strong> Until then, every topic can
        be found from Explore.
      </p>
      <ul className="mt-6 space-y-3">
        <li>
          <CardLink href="/explore" title="Explore all subjects" />
        </li>
        <li>
          <CardLink href="/start" title="New to Catholicism? Start here" />
        </li>
      </ul>
    </>
  );
}
