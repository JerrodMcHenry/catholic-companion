// Generates the prerecorded audio in public/audio/: the teacher narration from content/mass.ts, the
// simulated priest's lines from content/experience.ts, and the Before Mass narration (one recording
// per moment) from content/before-mass.ts.
//
//   node --env-file=.env.local scripts/generate-narration.mjs          generate missing or stale files
//   node scripts/generate-narration.mjs --check                        list missing or stale files (no API calls)
//
// Each narration recording is the moment's explanation plus its posture note, or its listening cue:
// the same text the page shows. Each priest recording is exactly a priest caption in Experience Mass.
//
// Timing (Before Mass and the priest's lines): after such a recording is made, it is transcribed once
// with word timestamps (OpenAI whisper-1) and aligned with the script's sentences. Its duration and
// the start time of each sentence are saved in content/narration-timings.json, keyed by file and
// recording hash. The player uses them for captions and for the Experience Mass timeline, and the
// alignment doubles as a check that the voice said the approved words. `--check` also reports
// missing or stale timings. scripts/narration-manifest.json stores a hash of everything that shapes a
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
import { BEFORE_MASS, narrationFile, sentencesOf } from "../content/before-mass.ts";
import { EXPERIENCE, PRIEST_VOICE } from "../content/experience.ts";
import { INTRODUCTORY_RITES } from "../content/mass.ts";

const ROOT = new URL("../", import.meta.url);
const MANIFEST = new URL("scripts/narration-manifest.json", ROOT);
const TIMINGS = new URL("content/narration-timings.json", ROOT);
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

// The simulated priest for Experience Mass: a fictional AI voice, separate from the teacher narrators.
// Each recording says exactly the priest caption of a beat in content/experience.ts, and nothing else.
const PRIEST_PERSONA =
  "Voice: a fictional Catholic priest, a calm middle-aged man, beginning Mass in a parish church. " +
  "He speaks the words aloud to the congregation while making the Sign of the Cross; he does not sing or chant. " +
  "Tone: reverent, prayerful, and warm; sincere, not performed. " +
  "Delivery: steady and unhurried, with a brief natural pause at each comma. " +
  "Never theatrical, dramatic, or preachy. No music or sound effects. Say exactly the given words and nothing else.";
const PRIEST = {
  en: { voice: "onyx", instructions: `${PRIEST_PERSONA} Speak natural American English.` },
  es: { voice: "onyx", instructions: `${PRIEST_PERSONA} Speak natural Mexican Spanish with a neutral Mexican accent.` },
};

// public/audio/<PRIEST_VOICE[lang]>/<beat audio id>.mp3
for (const beat of EXPERIENCE) {
  if (!beat.audio) continue;
  for (const [lang, priest] of Object.entries(PRIEST)) {
    const request = {
      model: MODEL,
      voice: priest.voice,
      input: beat.caption.text[lang],
      instructions: priest.instructions,
      response_format: "mp3",
    };
    const hash = createHash("sha256").update(JSON.stringify(request)).digest("hex");
    // Timed too: the check confirms the exact words, and the duration places the line on the timeline.
    recordings.push({ path: `${PRIEST_VOICE[lang]}/${beat.audio}.mp3`, request, hash, sentences: [beat.caption.text[lang]], language: lang });
  }
}

// Before Mass: one recording per moment, read by the same English narrator. A separate instruction (not
// PERSONA itself, which would invalidate the existing recordings) asks for a slower, calm pace.
const BEFORE_MASS_INSTRUCTIONS =
  `${PERSONA} Speak natural American English. ` +
  "Pace: calm and unhurried, a little slower than usual, with a natural pause between paragraphs. " +
  "This walks a first-time visitor into a church before Mass; never sound like an advertisement. No music or sound effects.";
// The Before Mass recordings use the 2025-03-20 snapshot of the same model: in testing (Milestone 7B) the
// current gpt-4o-mini-tts version repeatedly dropped the final sentence of these longer inputs, and this
// snapshot did not. The caption-timing check below rejects any recording that is missing a sentence.
const BEFORE_MASS_MODEL = "gpt-4o-mini-tts-2025-03-20";
for (const moment of BEFORE_MASS) {
  const request = {
    model: BEFORE_MASS_MODEL,
    voice: NARRATORS.en.voice,
    input: moment.paragraphs.join("\n\n"),
    instructions: BEFORE_MASS_INSTRUCTIONS,
    response_format: "mp3",
  };
  const hash = createHash("sha256").update(JSON.stringify(request)).digest("hex");
  recordings.push({ path: narrationFile(moment), request, hash, sentences: sentencesOf(moment), language: "en" });
}

const manifest = existsSync(MANIFEST) ? JSON.parse(await readFile(MANIFEST, "utf8")) : {};
const fileFor = (path) => new URL(`public/audio/${path}`, ROOT);
const stale = recordings.filter((r) => manifest[r.path]?.hash !== r.hash || !existsSync(fileFor(r.path)));

console.log(`${recordings.length} recordings, ${stale.length} missing or stale.`);
for (const r of stale) console.log(`  ${r.path}`);

const timings = existsSync(TIMINGS) ? JSON.parse(await readFile(TIMINGS, "utf8")) : {};
const untimed = recordings.filter((r) => r.sentences && (timings[r.path]?.hash !== r.hash || timings[r.path]?.duration == null));
console.log(`${untimed.length} caption timing(s) missing or stale.`);
for (const r of untimed) console.log(`  ${r.path}`);

if (process.argv.includes("--check")) process.exit(stale.length || untimed.length ? 1 : 0);
if (!stale.length && !untimed.length) process.exit(0);

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
    manifest[r.path] = { hash: r.hash, model: r.request.model, voice: r.request.voice, bytes: audio.length };
    await writeFile(MANIFEST, `${JSON.stringify(sortKeys(manifest), null, 2)}\n`);
    console.log(`Wrote public/audio/${r.path}`);
  } catch (error) {
    failures++;
    await rm(partial, { force: true });
    console.error(`FAILED public/audio/${r.path}: ${error.message}`);
  }
}

// Caption timing for recordings that are now up to date but have no timing for that version.
for (const r of untimed) {
  if (manifest[r.path]?.hash !== r.hash || !existsSync(fileFor(r.path))) continue; // its generation failed
  try {
    const result = await alignCaptions(r);
    timings[r.path] = { hash: r.hash, duration: result.duration, starts: result.starts };
    await writeFile(TIMINGS, `${JSON.stringify(sortKeys(timings), null, 2)}\n`);
    console.log(`Timed ${r.path}: ${r.sentences.length} sentences, ${(result.matched * 100).toFixed(1)}% of words matched.`);
    for (const line of result.differences) console.log(`    ${line}`);
  } catch (error) {
    failures++;
    console.error(`FAILED timing ${r.path}: ${error.message}`);
    if (error.incomplete) {
      // The recording itself is wrong (for example the voice stopped before the last sentence, which
      // this model sometimes does). Forget it, so the next run records it again.
      delete manifest[r.path];
      await writeFile(MANIFEST, `${JSON.stringify(sortKeys(manifest), null, 2)}\n`);
      console.error(`  The recording will be made again on the next run.`);
    }
  }
}

if (failures) {
  console.error(`${failures} step(s) failed. Failed files stay marked as stale; run the script again.`);
  process.exit(1);
}

// Transcribes a recording with word timestamps and finds when each script sentence starts. Words are
// aligned in order (longest common subsequence), so a few mismatched words don't shift the rest. A
// recording fails (and is re-recorded next run) if fewer than 95% of the script's words were heard, if
// any sentence was not heard at all, or if most of the last sentence is missing: these mean the audio
// does not say the approved text.
async function alignCaptions(r) {
  const form = new FormData();
  form.append("file", new Blob([await readFile(fileFor(r.path))], { type: "audio/mpeg" }), "narration.mp3");
  form.append("model", "whisper-1");
  form.append("language", r.language);
  form.append("response_format", "verbose_json");
  form.append("timestamp_granularities[]", "word");
  const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}` },
    body: form,
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.status === 401 ? "check OPENAI_API_KEY" : ""}`);
  const json = await res.json();
  const heard = json.words ?? [];

  const norm = (w) => w.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]/g, "");
  const script = r.sentences.flatMap((sentence, i) => sentence.split(/\s+/).map((w) => ({ w: norm(w), i }))).filter((x) => x.w);
  const said = heard.map((x) => ({ w: norm(x.word), start: x.start })).filter((x) => x.w);

  // Longest common subsequence of the two word lists.
  const n = script.length, m = said.length;
  const table = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let a = n - 1; a >= 0; a--)
    for (let b = m - 1; b >= 0; b--)
      table[a][b] = script[a].w === said[b].w ? table[a + 1][b + 1] + 1 : Math.max(table[a + 1][b], table[a][b + 1]);
  const timeOf = new Array(n).fill(null);
  const differences = [];
  for (let a = 0, b = 0; a < n || b < m; ) {
    if (a < n && b < m && script[a].w === said[b].w) { timeOf[a] = said[b].start; a++; b++; }
    else if (b < m && (a === n || table[a][b + 1] >= table[a + 1][b])) differences.push(`heard but not in script: "${said[b++].w}"`);
    else differences.push(`in script but not heard: "${script[a++].w}"`);
  }
  const matched = timeOf.filter((t) => t !== null).length / n;
  const heardIn = (i) => script.filter((x, k) => x.i === i && timeOf[k] !== null).length / script.filter((x) => x.i === i).length;
  const silent = r.sentences.findIndex((_, i) => heardIn(i) === 0);
  const problem =
    matched < 0.95 ? `only ${(matched * 100).toFixed(1)}% of the script's words were heard`
    : silent !== -1 ? `sentence ${silent + 1} was not heard: "${r.sentences[silent]}"`
    : heardIn(r.sentences.length - 1) < 0.5 ? `the last sentence is missing: "${r.sentences.at(-1)}"`
    : null;
  if (problem) throw Object.assign(new Error(`${problem}. ${differences.slice(0, 6).join("; ")}`), { incomplete: true });

  const starts = r.sentences.map((_, i) => {
    const first = script.findIndex((x, k) => x.i === i && timeOf[k] !== null);
    return first === -1 ? null : timeOf[first];
  });
  starts[0] = 0;
  for (let i = 1; i < starts.length; i++) {
    if (starts[i] !== null && starts[i] >= starts[i - 1]) continue;
    const nextKnown = starts.slice(i + 1).find((t) => t !== null && t > starts[i - 1]);
    starts[i] = nextKnown !== undefined ? (starts[i - 1] + nextKnown) / 2 : starts[i - 1] + 1;
  }
  return { starts: starts.map((t) => Math.round(t * 100) / 100), duration: Math.round(json.duration * 100) / 100, matched, differences };
}

function sortKeys(object) {
  return Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
}
