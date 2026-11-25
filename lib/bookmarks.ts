// Saved items ("bookmarks"), kept in this browser's localStorage.
// Only stable identifiers are stored; titles and links are looked up in the content
// registries when displayed, so saved items never go stale.

export type BookmarkKind = "topic" | "tradition" | "resource";
export type Bookmark = { kind: BookmarkKind; id: string };

const KINDS: readonly string[] = ["topic", "tradition", "resource"];
const STORAGE_KEY = "catholic-companion:saved:v1";
const CHANGE_EVENT = "catholic-companion:saved-change";

export const bookmarkKey = (b: Bookmark) => `${b.kind}:${b.id}`;

// Reads stored text defensively: anything malformed is skipped, duplicates are removed.
export function parseBookmarks(raw: string | null): Bookmark[] {
  let data: unknown;
  try {
    data = JSON.parse(raw ?? "[]");
  } catch {
    return [];
  }
  if (!Array.isArray(data)) return [];
  const seen = new Set<string>();
  const result: Bookmark[] = [];
  for (const item of data) {
    if (typeof item !== "object" || item === null) continue;
    const { kind, id } = item as Record<string, unknown>;
    if (typeof kind !== "string" || !KINDS.includes(kind) || typeof id !== "string" || !id) continue;
    const bookmark = { kind: kind as BookmarkKind, id };
    if (seen.has(bookmarkKey(bookmark))) continue;
    seen.add(bookmarkKey(bookmark));
    result.push(bookmark);
  }
  return result;
}

// Adds the item to the front, or removes it if already saved. Never creates duplicates.
export function toggleBookmark(list: Bookmark[], item: Bookmark): Bookmark[] {
  const key = bookmarkKey(item);
  return list.some((b) => bookmarkKey(b) === key)
    ? list.filter((b) => bookmarkKey(b) !== key)
    : [{ kind: item.kind, id: item.id }, ...list];
}

// --- Browser storage -------------------------------------------------------
// If storage is blocked (some private modes), saving still works for this visit.

let memory: string | null = null;

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return memory;
  }
}

export function storageAvailable(): boolean {
  try {
    window.localStorage.setItem(`${STORAGE_KEY}:test`, "1");
    window.localStorage.removeItem(`${STORAGE_KEY}:test`);
    return true;
  } catch {
    return false;
  }
}

// useSyncExternalStore needs the same array back until the data changes.
let cachedRaw: string | null | undefined;
let cachedList: Bookmark[] = [];
export function readBookmarks(): Bookmark[] {
  const raw = readRaw();
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    cachedList = parseBookmarks(raw);
  }
  return cachedList;
}

export function saveBookmarks(list: Bookmark[]) {
  const raw = JSON.stringify(list);
  try {
    window.localStorage.setItem(STORAGE_KEY, raw);
  } catch {
    memory = raw;
  }
  window.dispatchEvent(new Event(CHANGE_EVENT)); // "storage" events only reach other tabs.
}

// Lets components re-read saved items when they change, in this tab or another.
export function subscribeToBookmarks(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}
