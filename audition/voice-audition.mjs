// One-off OpenAI voice audition. Not part of the app: nothing here is imported, bundled, or served.
//
// Reads the approved Entrance Procession explanation from content/mass.ts (no copy of the text)
// and writes four MP3 samples next to this script.
//
// Run from the project root:
//   node --env-file=.env.local audition/voice-audition.mjs
//
// The API key is read from the environment only and is never printed.

import { writeFile } from "node:fs/promises";
import { INTRODUCTORY_RITES } from "../content/mass.ts";

const key = process.env.OPENAI_API_KEY;
if (!key) {
  console.error("OPENAI_API_KEY is not set. Run with: node --env-file=.env.local audition/voice-audition.mjs");
  process.exit(1);
}

const entrance = INTRODUCTORY_RITES.find((m) => m.id === "entrance");
if (!entrance) throw new Error("Entrance Procession not found in content/mass.ts");

const PERSONA =
  "Voice: a warm, knowledgeable Catholic teacher helping someone understand Mass for the first time. " +
  "Tone: friendly, patient, and welcoming; reverent but not formal. " +
  "Delivery: natural and conversational, unhurried, with gentle pauses between sentences. " +
  "Never theatrical, preachy, or robotic.";

const LANGS = {
  "en-US": { text: entrance.explanation.en, instructions: `${PERSONA} Speak natural American English.` },
  "es-MX": {
    text: entrance.explanation.es,
    instructions: `${PERSONA} Speak natural Mexican Spanish with a neutral Mexican accent.`,
  },
};
const VOICES = ["marin", "cedar"];

for (const [lang, { text, instructions }] of Object.entries(LANGS)) {
  for (const voice of VOICES) {
    const file = new URL(`entrance_${lang}_${voice}.mp3`, import.meta.url);
    const res = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ model: "gpt-4o-mini-tts", voice, input: text, instructions, response_format: "mp3" }),
    });
    if (!res.ok) {
      let message = "";
      try {
        message = (await res.json()).error?.message ?? "";
      } catch {}
      console.error(`Failed: ${lang} ${voice}: HTTP ${res.status} ${message}`);
      process.exit(1);
    }
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log(`Wrote audition/entrance_${lang}_${voice}.mp3`);
  }
}
