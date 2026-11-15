// Checks for the Introductory Rites in Experience Mass. Run with `npm test` (Node's built-in runner).
//
// 1. The app's narration (content/experience.ts) matches the approved script word for word.
// 2. All eight moments of content/mass.ts are present, in order, each as one run of beats.
// 3. Only CLEARED words are voiced from tracked files; official-text beats have no words or audio here,
//    and name their source and speaker (their words live only in the git-ignored public/local/).
// 4. Every recording exists and has timing for its current version (duration; sentence starts for narration).

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { splitSentences } from "../content/before-mass.ts";
import { EXPERIENCE } from "../content/experience.ts";
import { INTRODUCTORY_RITES } from "../content/mass.ts";

const root = new URL("../", import.meta.url);
const read = async (path) => readFile(new URL(path, root), "utf8");
const paths = (beat) => (beat.audio === undefined ? [] : typeof beat.audio === "string" ? [beat.audio] : Object.values(beat.audio));

test("narration matches the approved script (docs/introductory-rites-narration.md §4)", async () => {
  const doc = await read("docs/introductory-rites-narration.md");
  const transcript = doc.split("\n## 4. Narration transcript")[1].split("\n---\n")[0];
  const approved = transcript
    .split("\n")
    .slice(1)
    .filter((line) => line.trim() && !line.startsWith("**") && !line.startsWith("The words the narrator records"));
  const inApp = EXPERIENCE.flatMap((beat) => beat.narration ?? []);
  assert.deepEqual(inApp, approved);
});

test("all eight moments, in curriculum order, each one contiguous run of beats", () => {
  const order = EXPERIENCE.map((beat) => beat.moment).filter((m, i, all) => i === 0 || all[i - 1] !== m);
  assert.deepEqual(order, INTRODUCTORY_RITES.map((m) => m.id));
  const ids = EXPERIENCE.map((beat) => beat.id);
  assert.equal(new Set(ids).size, ids.length, "beat ids must be unique");
});

test("only cleared words are voiced; pending lines are silent placeholders", () => {
  const cleared = new Set([
    "Amen.", "Amén.", "Kyrie, eleison.", "Christe, eleison.",
    "In the name of the Father, and of the Son, and of the Holy Spirit.",
    "En el nombre del Padre, y del Hijo, y del Espíritu Santo.",
  ]);
  for (const beat of EXPERIENCE) {
    if (["priest", "leader", "people"].includes(beat.role)) {
      assert.ok(cleared.has(beat.text.en) && cleared.has(beat.text.es), `${beat.id}: voices text that is not cleared`);
      assert.ok(paths(beat).length > 0, `${beat.id}: should be audible`);
    }
    if (beat.role === "pending") {
      assert.equal(beat.audio, undefined, `${beat.id}: a LICENSING PENDING line must not have audio`);
      assert.equal(beat.text, undefined, `${beat.id}: a LICENSING PENDING line must not carry words`);
      assert.ok(beat.pending?.source.length > 10 && beat.pending.what.en, `${beat.id}: must name what is pending and its source`);
      assert.ok(["priest", "people"].includes(beat.pending.speaker), `${beat.id}: must say who speaks it`);
    }
    if (beat.role === "silence") assert.equal(beat.audio, undefined, `${beat.id}: silence has no audio`);
    if (beat.role === "narrator") assert.ok(beat.narration?.length && paths(beat).length === 1, `${beat.id}: narration needs one recording`);
  }
});

test("every recording exists and has current timing", async () => {
  const manifest = JSON.parse(await read("scripts/narration-manifest.json"));
  const timings = JSON.parse(await read("content/narration-timings.json"));
  for (const beat of EXPERIENCE) {
    for (const file of paths(beat)) {
      assert.ok(existsSync(new URL(`public/audio/${file}`, root)), `${file} is missing`);
      assert.equal(timings[file]?.hash, manifest[file]?.hash, `${file}: timing belongs to a different recording`);
      assert.ok(timings[file].duration > 0.5, `${file}: needs a duration`);
      if (beat.role === "narrator") assert.equal(timings[file].starts.length, splitSentences(beat.narration).length, `${file}: one start per caption sentence`);
    }
  }
});
