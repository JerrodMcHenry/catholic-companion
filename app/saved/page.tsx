import type { Metadata } from "next";
import { CardLink } from "@/components/cards";

export const metadata: Metadata = { title: "Saved" };

// Temporary page: bookmarks are built in a later phase.
export default function SavedPage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Saved</h1>
      <p className="mt-6 rounded-2xl bg-tint px-5 py-5 leading-relaxed text-ink">
        <strong className="font-semibold">Saving topics is coming soon.</strong> You will be able to
        keep topics here on this device, with no account needed.
      </p>
      <ul className="mt-6 space-y-3">
        <li>
          <CardLink href="/explore" title="Explore all subjects" />
        </li>
      </ul>
    </>
  );
}
