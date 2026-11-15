// Generates the prerecorded audio in public/audio/: the teacher narration from content/mass.ts; the
// Before Mass narration (one recording per moment) from content/before-mass.ts; and, from
// content/experience.ts, the Introductory Rites narration, the simulated priest's and Kyrie leader's
// CLEARED lines, and the simulated congregation's CLEARED responses (several voices mixed into one WAV).
// The official texts of the pending beats are never in a tracked file: see "Official texts" below.
// They are recorded only from your git-ignored local copy, into the git-ignored public/local/.
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
import { BEFORE_MASS, narrationFile, sentencesOf, splitSentences } from "../content/before-mass.ts";
import { EXPERIENCE } from "../content/experience.ts";
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

// The simulated priest for Experience Mass: a fictional AI voice, separate from the teacher narrators.
// Each recording says exactly the CLEARED words of a priest beat in content/experience.ts, and nothing else.
// (LICENSING PENDING beats have no audio and are never sent to any voice.)
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
// The same priest voice leading the Kyrie (Greek, said rather than sung), one recording for every language.
const LEADER_INSTRUCTIONS =
  "Voice: a fictional Catholic priest, a calm middle-aged man, leading the congregation in the Kyrie at Mass. " +
  "He says the line clearly and prayerfully, at an unhurried pace, so the people can repeat it; he does not sing or chant. " +
  `Never theatrical. No music or sound effects. Say exactly the given words and nothing else. ${NARRATORS.en.greek}`;

// The simulated congregation: several different AI voices saying the same CLEARED response, mixed into one
// WAV file (no extra tools: each voice is requested as raw 24 kHz PCM and mixed below). Fixed offsets and
// levels make it sound like a room of people rather than a choir, and keep the result reproducible.
const CONGREGATION = {
  voices: ["alloy", "ash", "ballad", "coral", "sage", "verse"],
  offsetsMs: [0, 70, 30, 120, 50, 95],
  gains: [1, 0.85, 0.9, 0.8, 0.95, 0.85],
};
const congregationInstructions = (lang, greek) =>
  "You are one member of a Catholic congregation at Mass, answering the priest together with everyone around you. " +
  "Say only the given words, once, plainly and reverently, at a natural congregational pace; not performed, not sung. No music. " +
  (lang === "es" ? "Speak natural Mexican Spanish." : "Speak natural American English.") +
  (greek ? ` ${NARRATORS.en.greek}` : "");

// Narrated beats of the Introductory Rites: the same English narrator and snapshot as Before Mass.
const INTRO_INSTRUCTIONS =
  `${PERSONA} Speak natural American English. ` +
  "Pace: calm and unhurried, a little slower than usual, with a natural pause between paragraphs. " +
  "This guides a first-time visitor through the opening of Mass; never sound like an advertisement. No music or sound effects.";

const seen = new Set();
const once = (path) => !seen.has(path) && seen.add(path);
for (const beat of EXPERIENCE) {
  if (!beat.audio) continue;
  const paths = typeof beat.audio === "string" ? { en: beat.audio } : beat.audio;
  for (const [lang, path] of Object.entries(paths)) {
    if (!once(path)) continue;
    const text = beat.text?.[lang];
    let request;
    if (beat.role === "priest") {
      request = { model: MODEL, voice: PRIEST[lang].voice, input: text, instructions: PRIEST[lang].instructions, response_format: "mp3" };
    } else if (beat.role === "leader") {
      request = { model: MODEL, voice: PRIEST.en.voice, input: text, instructions: LEADER_INSTRUCTIONS, response_format: "mp3" };
    } else if (beat.role === "narrator") {
      const input = beat.narration.join("\n\n");
      const instructions = input.includes("eleison") ? `${INTRO_INSTRUCTIONS} ${NARRATORS.en.greek}` : INTRO_INSTRUCTIONS;
      request = { model: BEFORE_MASS_MODEL, voice: NARRATORS.en.voice, input, instructions, response_format: "mp3" };
    } else if (beat.role === "people") {
      const instructions = congregationInstructions(lang, text.includes("eleison"));
      request = { kind: "congregation", model: MODEL, input: text, instructions, ...CONGREGATION };
    } else {
      throw new Error(`${beat.id}: a ${beat.role} beat must not have audio`);
    }
    const hash = createHash("sha256").update(JSON.stringify(request)).digest("hex");
    const sentences = beat.role === "narrator" ? splitSentences(beat.narration) : [text];
    // Timed too: the check confirms the exact words, and the duration places the line on the timeline.
    recordings.push({ path, request, hash, sentences, language: lang === "es" && !text.includes("eleison") ? "es" : "en" });
  }
}

// Official texts (private, local only). The official words of the pending beats are never in a tracked
// file. You paste them, from your own Missal or the USCCB's published text, into the git-ignored
// public/local/liturgical-texts.json. This script creates that file as an empty template (one entry
// per pending beat, naming its source), adds entries for new pending beats, and never changes your
// words. Each filled-in text is recorded by the priest or the congregation into public/local/, and
// checked word for word like every other recording. Its manifest and its timings (with the verified
// text, which the player shows as captions) are kept in public/local/ too: nothing derived from an
// official text is written to a tracked file. The whole folder is in .gitignore.
// The same priest and congregation voices, on the snapshot model (longer texts such as the Gloria are where
// the current model drops final sentences), and a priest persona not tied to the Sign of the Cross.
const OFFICIAL_PRIEST_PERSONA =
  "Voice: a fictional Catholic priest, a calm middle-aged man, praying aloud at Mass in a parish church. " +
  "He speaks the words to God and to the congregation; he does not sing or chant. " +
  "Tone: reverent, prayerful, and warm; sincere, not performed. Delivery: steady and unhurried, with natural pauses. " +
  "Never theatrical, dramatic, or preachy. No music or sound effects. Say exactly the given words and nothing else.";
const OFFICIAL_PRIEST = {
  en: `${OFFICIAL_PRIEST_PERSONA} Speak natural American English.`,
  es: `${OFFICIAL_PRIEST_PERSONA} Speak natural Mexican Spanish with a neutral Mexican accent.`,
};
const LOCAL = new URL("public/local/", ROOT);
const LOCAL_TEXTS = new URL("liturgical-texts.json", LOCAL);
const texts = existsSync(LOCAL_TEXTS) ? JSON.parse(await readFile(LOCAL_TEXTS, "utf8")) : {};
let templateChanged = !existsSync(LOCAL_TEXTS);
for (const beat of EXPERIENCE.filter((b) => b.role === "pending")) {
  if (texts[beat.id]) continue;
  const { what, source, speaker } = beat.pending;
  texts[beat.id] = { what: what.en, source, speaker, en: "", es: "" };
  templateChanged = true;
}
if (templateChanged && !process.argv.includes("--check")) {
  await mkdir(LOCAL, { recursive: true });
  await writeFile(LOCAL_TEXTS, `${JSON.stringify(texts, null, 2)}\n`);
  console.log("Wrote the template public/local/liturgical-texts.json (git-ignored). Paste the official words into its \"en\" / \"es\" fields.");
}
for (const beat of EXPERIENCE.filter((b) => b.role === "pending")) {
  const speaker = beat.pending.speaker;
  for (const lang of ["en", "es"]) {
    const text = texts[beat.id]?.[lang]?.trim();
    if (!text) continue;
    const request =
      speaker === "priest"
        ? { model: BEFORE_MASS_MODEL, voice: PRIEST[lang].voice, input: text, instructions: OFFICIAL_PRIEST[lang], response_format: "mp3" }
        : { kind: "congregation", model: BEFORE_MASS_MODEL, input: text, instructions: congregationInstructions(lang, false), ...CONGREGATION };
    const hash = createHash("sha256").update(JSON.stringify(request)).digest("hex");
    const path = `${beat.id}-${lang}.${speaker === "priest" ? "mp3" : "wav"}`;
    recordings.push({ path, request, hash, sentences: splitSentences([text]), language: lang, local: true, text });
  }
}


// Two stores, each a manifest and a timings file: the tracked ones, and the git-ignored ones in public/local/.
const loadJson = async (url) => (existsSync(url) ? JSON.parse(await readFile(url, "utf8")) : {});
const LOCAL_MANIFEST = new URL("manifest.json", LOCAL);
const LOCAL_TIMINGS = new URL("timings.json", LOCAL);
const stores = {
  tracked: { manifest: await loadJson(MANIFEST), manifestUrl: MANIFEST, timings: await loadJson(TIMINGS), timingsUrl: TIMINGS },
  local: { manifest: await loadJson(LOCAL_MANIFEST), manifestUrl: LOCAL_MANIFEST, timings: await loadJson(LOCAL_TIMINGS), timingsUrl: LOCAL_TIMINGS },
};
const storeOf = (r) => (r.local ? stores.local : stores.tracked);
const save = (url, object) => writeFile(url, `${JSON.stringify(sortKeys(object), null, 2)}\n`);
const fileFor = (r) => (r.local ? new URL(r.path, LOCAL) : new URL(`public/audio/${r.path}`, ROOT));
const label = (r) => (r.local ? `public/local/${r.path}` : `public/audio/${r.path}`);
const stale = recordings.filter((r) => storeOf(r).manifest[r.path]?.hash !== r.hash || !existsSync(fileFor(r)));

console.log(`${recordings.length} recordings, ${stale.length} missing or stale.`);
for (const r of stale) console.log(`  ${label(r)}`);

const untimed = recordings.filter((r) => r.sentences && (storeOf(r).timings[r.path]?.hash !== r.hash || storeOf(r).timings[r.path]?.duration == null));
console.log(`${untimed.length} caption timing(s) missing or stale.`);
for (const r of untimed) console.log(`  ${label(r)}`);

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
  const { manifest, manifestUrl } = storeOf(r);
  const file = fileFor(r);
  const partial = new URL(`${file.href}.partial`);
  try {
    let audio;
    if (r.request.kind === "congregation") {
      const { voices, offsetsMs, gains, model, input, instructions } = r.request;
      const tracks = [];
      for (const voice of voices) tracks.push(await speak({ model, voice, input, instructions, response_format: "pcm" }));
      audio = mixToWav(tracks, offsetsMs, gains);
    } else {
      audio = await speak(r.request);
      if (!looksLikeMp3(audio)) throw new Error(`response is not MP3 audio (${audio.length} bytes)`);
    }

    await mkdir(new URL(".", file), { recursive: true });
    await writeFile(partial, audio);
    await rename(partial, file);
    manifest[r.path] = { hash: r.hash, model: r.request.model, voice: r.request.voice ?? r.request.voices.join("+"), bytes: audio.length };
    await save(manifestUrl, manifest);
    console.log(`Wrote ${label(r)}`);
  } catch (error) {
    failures++;
    await rm(partial, { force: true });
    console.error(`FAILED ${label(r)}: ${error.message}`);
  }
}

// Caption timing for recordings that are now up to date but have no timing for that version.
for (const r of untimed) {
  const { manifest, manifestUrl, timings, timingsUrl } = storeOf(r);
  if (manifest[r.path]?.hash !== r.hash || !existsSync(fileFor(r))) continue; // its generation failed
  try {
    const result = await alignCaptions(r);
    // A local (official) recording keeps its verified text, for the player's captions.
    timings[r.path] = { hash: r.hash, duration: result.duration, starts: result.starts, ...(r.local && { text: r.text }) };
    await save(timingsUrl, timings);
    console.log(`Timed ${label(r)}: ${r.sentences.length} sentences, ${(result.matched * 100).toFixed(1)}% of words matched.`);
    for (const line of result.differences) console.log(`    ${line}`);
  } catch (error) {
    failures++;
    console.error(`FAILED timing ${label(r)}: ${error.message}`);
    if (error.incomplete) {
      // The recording itself is wrong (for example the voice stopped before the last sentence, which
      // this model sometimes does). Forget it, so the next run records it again.
      delete manifest[r.path];
      await save(manifestUrl, manifest);
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
  const wav = r.path.endsWith(".wav");
  form.append("file", new Blob([await readFile(fileFor(r))], { type: wav ? "audio/wav" : "audio/mpeg" }), wav ? "audio.wav" : "audio.mp3");
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

// One text-to-speech request. OpenAI's 401 message echoes part of the key, so it is never printed.
async function speak(request) {
  const res = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(request),
    signal: AbortSignal.timeout(120_000),
  });
  if (!res.ok) {
    const message = res.status === 401 ? "check OPENAI_API_KEY" : await res.json().then((j) => j.error?.message ?? "", () => "");
    throw new Error(`HTTP ${res.status} ${message}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

// Mixes raw 24 kHz, 16-bit mono PCM tracks into one WAV: each track starts a little later and is a little
// quieter or louder than the others, then the sum is normalized. 0.15 s of silence before the voices;
// the near-silent tail the voices leave (up to 1.7 s) is cut to 0.25 s after the last audible sound.
function mixToWav(tracks, offsetsMs, gains) {
  const RATE = 24000;
  const pcm = tracks.map((b) => {
    if (b.length < RATE * 0.2) throw new Error(`a voice returned almost no audio (${b.length} bytes)`);
    return new Int16Array(b.buffer, b.byteOffset, Math.floor(b.length / 2));
  });
  const pad = Math.round(0.15 * RATE);
  const at = offsetsMs.map((ms) => pad + Math.round((ms * RATE) / 1000));
  const full = Math.max(...pcm.map((t, i) => at[i] + t.length));
  const sum = new Float32Array(full);
  pcm.forEach((t, i) => t.forEach((v, k) => (sum[at[i] + k] += (v / 32768) * gains[i])));
  const peak = sum.reduce((m, v) => Math.max(m, Math.abs(v)), 0) || 1;
  let last = full - 1;
  while (last > 0 && Math.abs(sum[last] / peak) * 0.8 < 0.01) last--;
  const length = Math.min(full, last + Math.round(0.25 * RATE));
  const out = Buffer.alloc(44 + length * 2);
  out.write("RIFF", 0); out.writeUInt32LE(36 + length * 2, 4); out.write("WAVE", 8);
  out.write("fmt ", 12); out.writeUInt32LE(16, 16); out.writeUInt16LE(1, 20); out.writeUInt16LE(1, 22);
  out.writeUInt32LE(RATE, 24); out.writeUInt32LE(RATE * 2, 28); out.writeUInt16LE(2, 32); out.writeUInt16LE(16, 34);
  out.write("data", 36); out.writeUInt32LE(length * 2, 40);
  for (let k = 0; k < length; k++) out.writeInt16LE(Math.round(Math.max(-1, Math.min(1, (sum[k] / peak) * 0.8)) * 32767), 44 + k * 2);
  return out;
}

function sortKeys(object) {
  return Object.fromEntries(Object.entries(object).sort(([a], [b]) => a.localeCompare(b)));
}
