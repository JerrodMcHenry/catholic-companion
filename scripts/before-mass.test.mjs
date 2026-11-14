// Checks that keep the Before Mass experience playable and faithful. Run with `npm test`.
// Uses only Node's built-in test runner; no dependencies.
//
// 1. The app's narration (content/before-mass.ts) matches the approved document word for word.
// 2. Every cue points at a sentence that exists, so labels and scene changes appear on time; every
//    mapped illustration exists, and no draft image is used.
// 3. Every recording exists and has caption timings for its *current* version: one start time per
//    caption sentence, in order, beginning at 0, and a duration (the playback timeline is built from
//    them). The priest's recordings have durations too.

import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { BEFORE_MASS, BEFORE_MASS_IMAGES, PLACEHOLDER_SCENES, narrationFile, sentencesOf } from "../content/before-mass.ts";

const root = new URL("../", import.meta.url);
const read = async (path) => readFile(new URL(path, root), "utf8");

test("narration matches the approved transcript in docs/before-mass-narration.md", async () => {
  const doc = await read("docs/before-mass-narration.md");
  const transcript = doc.split("## 11. Final uninterrupted narration transcript")[1];
  assert.ok(transcript, "transcript section not found");
  const sections = transcript.split(/\n\*\*B\d\. [^*]+\*\*\n/).slice(1);
  assert.equal(sections.length, BEFORE_MASS.length);
  BEFORE_MASS.forEach((moment, i) => {
    const paragraphs = sections[i].split("\n").map((line) => line.trim()).filter(Boolean);
    assert.deepEqual(moment.paragraphs, paragraphs, `${moment.id} differs from the document`);
  });
});

test("every cue matches a sentence, and every scene exists", async () => {
  const realScenes = (await read("content/mass.ts")).match(/export type SceneId =([^;]+);/)[1];
  const sceneExists = (scene) => scene in PLACEHOLDER_SCENES || realScenes.includes(`"${scene}"`);
  for (const moment of BEFORE_MASS) {
    const sentences = sentencesOf(moment);
    assert.ok(sceneExists(moment.scene), `${moment.id}: unknown scene ${moment.scene}`);
    for (const cue of moment.cues) {
      assert.ok(sentences.some((s) => s.includes(cue.at)), `${moment.id}: no sentence contains "${cue.at}"`);
      if (cue.scene) assert.ok(sceneExists(cue.scene), `${moment.id}: unknown scene ${cue.scene}`);
    }
  }
  for (const [scene, image] of Object.entries(BEFORE_MASS_IMAGES)) {
    assert.ok(scene in PLACEHOLDER_SCENES, `image for unknown scene ${scene}`);
    assert.ok(!/draft/i.test(image.src), `${scene} uses a draft image: ${image.src}`);
    assert.ok(existsSync(new URL(`public${image.src}`, root)), `${image.src} is missing`);
    assert.ok(image.alt.length > 20, `${scene} needs descriptive alt text`);
  }
});

test("each recording exists and has current caption timings", async () => {
  const manifest = JSON.parse(await read("scripts/narration-manifest.json"));
  const timings = JSON.parse(await read("content/narration-timings.json"));
  for (const moment of BEFORE_MASS) {
    const file = narrationFile(moment);
    assert.ok(existsSync(new URL(`public/audio/${file}`, root)), `${file} is missing`);
    const entry = timings[file];
    assert.ok(entry, `${file} has no timings`);
    assert.equal(entry.hash, manifest[file]?.hash, `${file}: timings belong to a different recording`);
    const { starts } = entry;
    assert.equal(starts.length, sentencesOf(moment).length, `${file}: one start time per caption sentence`);
    assert.equal(starts[0], 0);
    starts.slice(1).forEach((t, i) => assert.ok(t > starts[i], `${file}: start times must increase`));
    // The Experience Mass timeline is built from these durations.
    assert.ok(entry.duration > starts.at(-1), `${file}: needs a duration longer than its last sentence start`);
  }
  for (const file of ["priest-en-US-onyx/sign-of-the-cross-invocation.mp3", "priest-es-MX-onyx/sign-of-the-cross-invocation.mp3"]) {
    assert.equal(timings[file]?.hash, manifest[file]?.hash, `${file}: timing belongs to a different recording`);
    assert.ok(timings[file]?.duration > 1, `${file}: needs a duration for the timeline`);
  }
});
