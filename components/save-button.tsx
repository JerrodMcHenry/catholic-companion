"use client";

// The Save control, and the hook that keeps every Save control and the Saved page in sync.

import { useSyncExternalStore } from "react";
import {
  bookmarkKey,
  readBookmarks,
  saveBookmarks,
  subscribeToBookmarks,
  toggleBookmark,
  type Bookmark,
} from "@/lib/bookmarks";

const none: Bookmark[] = []; // Nothing is saved on the server; the browser fills this in.

export function useBookmarks() {
  return useSyncExternalStore(subscribeToBookmarks, readBookmarks, () => none);
}

function BookmarkIcon({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
      <path d="M6.5 3.5h11v17l-5.5-4-5.5 4z" />
    </svg>
  );
}

type Props = Bookmark & {
  title: string; // Names the item for screen readers when the button shows only an icon.
  compact?: boolean; // Icon-only, for use beside a card.
  onToggle?: (saved: boolean) => void; // Lets the Saved page manage focus after a removal.
};

export function SaveButton({ kind, id, title, compact, onToggle }: Props) {
  const saved = useBookmarks().some((b) => bookmarkKey(b) === bookmarkKey({ kind, id }));
  const toggle = () => {
    saveBookmarks(toggleBookmark(readBookmarks(), { kind, id }));
    onToggle?.(!saved);
  };
  const state = saved ? "border-accent bg-accent text-on-accent hover:bg-accent-strong" : "border-line bg-card text-accent hover:border-gold";

  if (compact) {
    return (
      <button
        type="button"
        aria-pressed={saved}
        aria-label={`Save ${title}`}
        title={saved ? "Saved" : "Save"}
        onClick={toggle}
        className={`flex w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors ${state}`}
      >
        <BookmarkIcon filled={saved} />
      </button>
    );
  }
  return (
    <button
      type="button"
      aria-pressed={saved}
      onClick={toggle}
      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 font-medium transition-colors ${state}`}
    >
      <BookmarkIcon filled={saved} />
      {saved ? "Saved" : "Save"}
    </button>
  );
}
