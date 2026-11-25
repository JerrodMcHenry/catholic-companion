// Focused tests for saved-item parsing and toggling. Run with `npm test`.

import assert from "node:assert/strict";
import { test } from "node:test";
import { parseBookmarks, toggleBookmark, type Bookmark } from "./bookmarks.ts";

const mass: Bookmark = { kind: "topic", id: "what-happens-at-mass" };
const islam: Bookmark = { kind: "tradition", id: "islam" };

test("toggling saves an item, and toggling again removes it", () => {
  const saved = toggleBookmark([], mass);
  assert.deepEqual(saved, [mass]);
  assert.deepEqual(toggleBookmark(saved, mass), []);
});

test("newest items come first and nothing is duplicated", () => {
  const list = toggleBookmark(toggleBookmark([], mass), islam);
  assert.deepEqual(list, [islam, mass]);
  assert.deepEqual(parseBookmarks(JSON.stringify([mass, mass, islam])), [mass, islam]);
});

test("missing or corrupted storage yields an empty list", () => {
  assert.deepEqual(parseBookmarks(null), []);
  assert.deepEqual(parseBookmarks("not json"), []);
  assert.deepEqual(parseBookmarks('{"kind":"topic"}'), []);
});

test("malformed entries are skipped, valid ones kept", () => {
  const raw = JSON.stringify([null, 42, { kind: "folder", id: "x" }, { kind: "topic", id: "" }, { kind: "topic" }, mass]);
  assert.deepEqual(parseBookmarks(raw), [mass]);
});
