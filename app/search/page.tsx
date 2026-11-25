import type { Metadata } from "next";
import { Suspense } from "react";
import { Search, SearchFallback } from "@/components/search";
import { searchEntries } from "@/content/search-entries";

export const metadata: Metadata = { title: "Search" };

// The page stays static: the index is built at build time and sent with the page.
// Only the search box reads the ?q= parameter, in the browser, inside a Suspense
// boundary, which is what keeps the rest of the page prerendered.
export default function SearchPage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Search</h1>
      <Suspense fallback={<SearchFallback />}>
        <Search entries={searchEntries()} />
      </Suspense>
    </>
  );
}
