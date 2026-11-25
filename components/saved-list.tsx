"use client";

// The Saved page's list. Saved ids come from this browser; titles and links come from
// the content lookup the server page passes in.

import { useRef, useState, useSyncExternalStore } from "react";
import { CardLink } from "@/components/cards";
import { SaveButton, useBookmarks } from "@/components/save-button";
import { bookmarkKey, readBookmarks, saveBookmarks, storageAvailable, type BookmarkKind } from "@/lib/bookmarks";
import type { SavedItem } from "@/content";

const groups: { kind: BookmarkKind; title: string }[] = [
  { kind: "topic", title: "Topics and questions" },
  { kind: "tradition", title: "Religious traditions" },
  { kind: "resource", title: "Resources" },
];

const noop = () => () => {};

export function SavedList({ items }: { items: Record<string, SavedItem> }) {
  const bookmarks = useBookmarks();
  const [announcement, setAnnouncement] = useState("");
  const hint = useRef<HTMLParagraphElement>(null);
  // Saved items live only in the browser, so render nothing until it has been read.
  const inBrowser = useSyncExternalStore(noop, () => true, () => false);
  if (!inBrowser) return null;

  const found = bookmarks.filter((b) => items[bookmarkKey(b)]);
  const missing = bookmarks.length - found.length;

  // A removed item disappears along with its button, so move focus somewhere stable and
  // say what happened. After the last item, the hint goes too, so use the page heading.
  const removed = (title: string) => {
    setAnnouncement(`Removed ${title} from saved.`);
    (found.length > 1 ? hint.current : document.querySelector<HTMLElement>("main h1"))?.focus();
  };

  return (
    <>
      {!storageAvailable() && (
        <p className="mt-6 rounded-2xl bg-tint px-5 py-4 leading-relaxed">
          This browser is blocking storage, so items you save will be forgotten when you close this tab.
        </p>
      )}

      <p role="status" className="sr-only">
        {announcement}
      </p>

      {found.length > 0 && (
        <p ref={hint} tabIndex={-1} className="mt-2 text-ink-soft">
          Tap a filled bookmark to remove an item.
        </p>
      )}

      {found.length === 0 && (
        <div className="mt-6 rounded-2xl bg-tint px-5 py-5 leading-relaxed">
          <p className="font-medium">Nothing saved yet.</p>
          <p className="mt-1 text-ink-soft">
            Tap <span className="font-medium text-ink">Save</span> on any topic, religious tradition, or
            resource to keep it here for later.
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <CardLink href="/start" title="New to Catholicism? Start here" />
            </li>
            <li>
              <CardLink href="/explore" title="Explore all subjects" />
            </li>
          </ul>
        </div>
      )}

      {groups.map(({ kind, title }) => {
        const saved = found.filter((b) => b.kind === kind);
        if (!saved.length) return null;
        return (
          <section key={kind} aria-labelledby={`saved-${kind}`} className="mt-10">
            <h2 id={`saved-${kind}`} className="mb-4 font-serif text-3xl font-semibold">
              {title}
            </h2>
            <ul className="space-y-3">
              {saved.map((b) => {
                const item = items[bookmarkKey(b)];
                return (
                  <li key={bookmarkKey(b)} className="flex gap-2">
                    <div className="min-w-0 flex-1">
                      <CardLink
                        href={item.href}
                        title={item.title}
                        eyebrow={item.label}
                        description={item.description}
                        external={item.external}
                      />
                    </div>
                    <SaveButton
                      kind={b.kind}
                      id={b.id}
                      title={item.title}
                      compact
                      onToggle={(saved) => !saved && removed(item.title)}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}

      {missing > 0 && (
        <p className="mt-8 leading-relaxed text-ink-soft">
          {missing === 1 ? "One saved item is" : `${missing} saved items are`} no longer available.{" "}
          <button
            type="button"
            onClick={() => saveBookmarks(readBookmarks().filter((b) => items[bookmarkKey(b)]))}
            className="inline-flex min-h-11 items-center font-medium text-accent underline underline-offset-4"
          >
            Remove {missing === 1 ? "it" : "them"}
          </button>
        </p>
      )}

      <p className="mt-10 text-sm text-ink-soft">Saved items are kept only in this browser, on this device.</p>
    </>
  );
}
