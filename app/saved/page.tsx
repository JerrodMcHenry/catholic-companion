import type { Metadata } from "next";
import { SavedList } from "@/components/saved-list";
import { savableItems } from "@/content";

export const metadata: Metadata = { title: "Saved" };

// Static page: the lookup of savable items is built at build time; which ones are
// saved is read from this browser by the list.
export default function SavedPage() {
  return (
    <>
      <h1 tabIndex={-1} className="font-serif text-5xl font-semibold text-ink focus:outline-none">
        Saved
      </h1>
      <p className="mt-3 leading-relaxed text-ink-soft">Topics, traditions, and resources you have saved.</p>
      <SavedList items={savableItems()} />
    </>
  );
}
