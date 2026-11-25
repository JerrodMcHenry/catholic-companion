// Focused tests for search normalization and ranking. Run with `npm test`.

import assert from "node:assert/strict";
import { test } from "node:test";
import { buildIndex, normalize, search, WEIGHT, type SearchEntry } from "./search.ts";

const entry = (title: string, fields: [string, number][]): SearchEntry => ({
  kind: "topic",
  title,
  href: "/",
  label: "",
  fields: [[title, WEIGHT.title], ...fields],
});

const index = buildIndex([
  entry("What is the Real Presence of Jesus in the Eucharist?", [["Communion, transubstantiation", WEIGHT.keyword]]),
  entry("Is the Bible the only authority?", [["Sola Scriptura", WEIGHT.alias]]),
  entry("Jehovah’s Witnesses", [["Watchtower", WEIGHT.keyword]]),
  entry("Why does God allow suffering?", [["pain, evil", WEIGHT.keyword]]),
  entry("What happens during Mass?", [["Communion is received at the end of Mass.", WEIGHT.summary]]),
]);

const top = (query: string) => search(index, query)[0]?.entry.title;

test("normalize folds case, accents, apostrophes, and punctuation", () => {
  assert.equal(normalize("Jehovah’s  WITNESSES"), "jehovahs witnesses");
  assert.equal(normalize("Jehovah's Witnesses"), "jehovahs witnesses");
  assert.equal(normalize("ʿĪsā — Qur’an 4:171"), "isa quran 4 171");
});

test("matches partial words, plurals, and single typos", () => {
  assert.equal(top("euchar"), "What is the Real Presence of Jesus in the Eucharist?");
  assert.equal(top("transubstantation"), "What is the Real Presence of Jesus in the Eucharist?");
  assert.equal(top("jehovah"), "Jehovah’s Witnesses");
  assert.equal(top("suffring"), "Why does God allow suffering?");
});

test("does not treat a real word as a typo of another", () => {
  const words = buildIndex([entry("Baptist", []), entry("Baptism", [])]);
  assert.deepEqual(search(words, "baptist").map((r) => r.entry.title), ["Baptist"]);
});

test("ranks strong fields above passing mentions", () => {
  assert.equal(top("communion"), "What is the Real Presence of Jesus in the Eucharist?");
  assert.equal(top("sola scriptura"), "Is the Bible the only authority?");
  assert.equal(top("Is the Bible the only authority?"), "Is the Bible the only authority?");
});

test("ignores common words and does not require every word", () => {
  assert.equal(top("why does God allow pain"), "Why does God allow suffering?");
  assert.ok(search(index, "what is").length > 0); // A query of only common words still searches them.
  assert.deepEqual(search(index, "   "), []);
  assert.deepEqual(search(index, "xylophone"), []);
});

test("an exact title match does not hide other relevant results", () => {
  const traditions = buildIndex([
    entry("Islam", [["Muslim", WEIGHT.alias]]),
    entry("Is Jesus truly God?", [["Islam, Jehovah’s Witnesses", WEIGHT.context]]),
  ]);
  assert.deepEqual(
    search(traditions, "islam").map((r) => r.entry.title),
    ["Islam", "Is Jesus truly God?"],
  );
});

test("keywords outrank passing mentions in summaries", () => {
  const results = search(index, "communion").map((r) => r.entry.title);
  assert.deepEqual(results, ["What is the Real Presence of Jesus in the Eucharist?", "What happens during Mass?"]);
});

test("numbers match references, not running text", () => {
  const refs = buildIndex([
    entry("Real Presence", [["John 6:22–71", WEIGHT.context]]),
    entry("Divinity", [["John 1:1–18", WEIGHT.context], ["As Philippians 2:6 says", WEIGHT.detail]]),
  ]);
  assert.equal(search(refs, "John 6")[0].entry.title, "Real Presence");
});

