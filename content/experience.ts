// The timeline for "Experience Mass" after the Before Mass narration (content/before-mass.ts): the
// opening of the Introductory Rites, played as one continuous sequence. Content only; the player is
// app/experience/player.tsx. This part is still the Milestone 6A prototype: descriptive captions and
// one priest line, not yet the full narrated Mass.
//
// The Mass is a flat list of beats. The player shows each beat's scene, posture, and caption,
// plays its priest audio (if any) to the end, holds for `hold` ms, and moves on. After a
// `peopleAnswer` beat it first shows the people's response (from content/mass.ts) for a moment.
// Nothing waits for the learner: there is no microphone and no typing in Experience Mass.
//
// Only imports types, so scripts/generate-narration.mjs can read this file with Node directly.
//
// LITURGICAL TEXT. The only words given to the priest are the opening Trinitarian invocation.
// The English matches the Order of Mass (The Roman Missal, 2010 ICEL translation) and the
// Spanish matches the Misal Romano. The exact same wording is also in public-domain texts (see
// README.md, "Licensing questions"): it is a short formula from Matthew 28:19, not ICEL's or the
// Misal's own writing. No other official dialogue is included; the prototype ends before the
// Greeting. `description` captions are our own words describing the scene, never spoken dialogue.

import type { MomentId, Posture, SceneId, Text } from "./mass";

export type Beat = {
  moment: MomentId; // the content/mass.ts moment this beat belongs to ("What's happening?")
  scene: SceneId;
  posture: { position: Posture; note: Text };
  caption: { speaker: "priest" | "description"; text: Text }; // priest captions are exactly what the audio says
  audio?: string; // priest recording: public/audio/<PRIEST_VOICE[lang]>/<audio>.mp3
  hold: number; // ms to stay on this beat, counted after the audio has ended
  peopleAnswer?: true; // after the hold, show the people's response to `moment` briefly, then continue
};

// The simulated priest: a fictional AI-generated voice, distinct from the teacher narrators.
export const PRIEST_VOICE = { en: "priest-en-US-onyx", es: "priest-es-MX-onyx" } as const;

export const EXPERIENCE: Beat[] = [
  {
    moment: "entrance",
    scene: "entrance-procession",
    posture: {
      position: "stand",
      note: { en: "Everyone stands as the procession begins.", es: "Todos se ponen de pie al comenzar la procesión." },
    },
    caption: {
      speaker: "description",
      text: {
        en: "The entrance hymn is sung as the procession comes up the aisle.",
        es: "Se canta el canto de entrada mientras la procesión avanza por el pasillo.",
      },
    },
    hold: 5000,
  },
  {
    moment: "reverence",
    scene: "altar-reverence",
    posture: {
      position: "stand",
      note: { en: "Keep standing.", es: "Sigue de pie." },
    },
    caption: {
      speaker: "description",
      text: {
        en: "The priest bows and kisses the altar, then goes to his chair.",
        es: "El sacerdote se inclina y besa el altar, y luego va a la sede.",
      },
    },
    hold: 4500,
  },
  {
    moment: "sign-of-the-cross",
    scene: "sign-of-the-cross",
    posture: {
      position: "stand",
      note: {
        en: "Make the Sign of the Cross with the priest.",
        es: "Haz la señal de la cruz con el sacerdote.",
      },
    },
    caption: {
      speaker: "priest",
      text: {
        en: "In the name of the Father, and of the Son, and of the Holy Spirit.",
        es: "En el nombre del Padre, y del Hijo, y del Espíritu Santo.",
      },
    },
    audio: "sign-of-the-cross-invocation",
    hold: 700,
    peopleAnswer: true,
  },
  {
    moment: "greeting",
    scene: "opening-greeting",
    posture: {
      position: "stand",
      note: { en: "Keep standing.", es: "Sigue de pie." },
    },
    caption: {
      speaker: "description",
      text: {
        en: "The priest opens his hands to greet the people, and they will answer him.",
        es: "El sacerdote abre las manos para saludar al pueblo, y el pueblo le responderá.",
      },
    },
    hold: 5000,
  },
];
