// Generates the prerecorded narration in public/audio/ from the text in content/mass.ts.
//
//   node --env-file=.env.local scripts/generate-narration.mjs          generate missing or stale files
//   node scripts/generate-narration.mjs --check                        list missing or stale files (no API calls)
//
// Each recording is the moment's explanation plus its posture note, or its listening cue: the same
// text the page shows. scripts/narration-manifest.json stores a hash of everything that shapes a
// recording (text, model, voice, instructions). A file is regenerated when it is missing or its hash
// no longer matches. Audio is written to a temporary file and renamed only after a valid response,
// and the manifest is updated only after the file is in place, so a failure never looks like success.
//
// The app only knows the folder names in public/audio/. It never calls OpenAI, and the API key
// (read from the environment, never printed) is used only here.
//
// OpenAI's speech models shut down on January 6, 2027 (https://developers.openai.com/api/docs/deprecations).
// After that date this script needs a new provider or model; the folder layout stays the same.

import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { INTRODUCTORY_RITES } from "../content/mass.ts";

const ROOT = new URL("../", import.meta.url);
const MANIFEST = new URL("scripts/narration-manifest.json", ROOT);
const MODEL = "gpt-4o-mini-tts";

const PERSONA =
  "Voice: a warm, knowledgeable Catholic teacher helping someone understand Mass for the first time. " +
  "Tone: friendly, patient, and welcoming; reverent but not formal. " +
  "Delivery: natural and conversational, unhurried, with gentle pauses between sentences. " +
  "Never theatrical, preachy, or robotic.";

const NARRATORS = {
  en: {
    folder: "en-US-marin",
    voice: "marin",
    instructions: `${PERSONA} Speak natural American English.`,
    greek: "Pronounce “Kyrie, eleison” and “Christe, eleison” as the traditional Greek liturgical acclamations: KEE-ree-eh, eh-LAY-ee-sohn; KREE-steh, eh-LAY-ee-sohn.",
  },
  es: {
    folder: "es-MX-cedar",
    voice: "cedar",
    instructions: `${PERSONA} Speak natural Mexican Spanish with a neutral Mexican accent.`,
    greek: "Pronounce “Kyrie, eleison” and “Christe, eleison” as the traditional Greek liturgical acclamations: KÍ-ri-e, e-LÉI-son; KRÍS-te, e-LÉI-son.",
  },
};

// Every recording the app can request: public/audio/<folder>/<moment id>-<explanation|cue>.mp3
const recordings = [];
for (const moment of INTRODUCTORY_RITES) {
  for (const [lang, narrator] of Object.entries(NARRATORS)) {
    const tracks = { explanation: `${moment.explanation[lang]} ${moment.posture.note[lang]}` };
    if (moment.cue) tracks.cue = moment.cue[lang];
    for (const [track, input] of Object.entries(tracks)) {
      const instructions = input.includes("eleison") ? `${narrator.instructions} ${narrator.greek}` : narrator.instructions;
      const request = { model: MODEL, voice: narrator.voice, input, instructions, response_format: "mp3" };
      const hash = createHash("sha256").update(JSON.stringify(request)).digest("hex");
      recordings.push({ path: `${narrator.folder}/${moment.id}-${track}.mp3`, request, hash });
    }
  }
}

const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
const fileFor = (path) => new URL(`public/audio/${path}`, ROOT);
const stale = recordings.filter((r) => manifest[r.path]?.hash !== r.hash || !existsSync(fileFor(r.path)));

console.log(`${recordings.length} recordings, ${stale.length} missing or stale.`);
for (const r of stale) console.log(`  ${r.path}`);

if (process.argv.includes("--check")) process.exit(stale.length ? 1 : 0);
if (!stale.length) process.exit(0);

const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error("OPENAI_API_KEY is not set. Run: node --env-file=.env.local scripts/generate-narration.mjs");
  process.exit(1);
}

// An MP3 starts with an ID3 tag or an MPEG frame header.
const looksLikeMp3 = (b) => b.length > 1024 && (b.toString("latin1", 0, 3) === "ID3" || (b[0] === 0xff && (b[1] & 0xe0) === 0xe0));

let failures = 0;
for (const r of stale) {
  const file = fileFor(r.path);
  const partial = new URL(`${file.href}.partial`);
  try {
    const res = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(r.request),
      signal: AbortSignal.timeout(120_000),
    });
    if (!res.ok) {
      // OpenAI's 401 message echoes part of the key, so it is never printed.
      const message =
        res.status === 401 ? "check OPENAI_API_KEY" : await res.json().then((j) => j.error?.message ?? "", () => "");
      throw new Error(`HTTP ${res.status} ${message}`);
    }
    const audio = Buffer.from(await res.arrayBuffer());
    if (!looksLikeMp3(audio)) throw new Error(`response is not MP3 audio (${audio.length} bytes)`);

    await mkdir(new URL(".", file), { recursive: true });
    await writeFile(partial, audio);
    await rename(partial, file);
    manifest[r.path] = { hash: r.hash, model: MODEL, voice: r.request.voice, bytes: audio.length };
    await writeFile(MANIFEST, `${JSON.stringify(sortKeys(manifest), null, 2)}\n`);
    console.log(`Wrote public/audio/${r.path}`);
  } catch (error) {
    failures++;
    await rm(partial, { force: true });
    console.error(`FAILED public/audio/${r.path}: ${error.message}`);
  }
}

if (failures) {
  console.error(`${failures} recording(s) failed. They remain marked as stale; run the script again.`);
  process.exit(1);
}

function sortKeys(object) {
  return Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
}
