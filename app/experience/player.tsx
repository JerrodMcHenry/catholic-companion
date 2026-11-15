"use client";

// The Experience Mass player. One continuous sequence that plays on its own, and that the learner can
// also navigate: a seekable timeline, ±15 s, previous/next moment, and chapters by section of the Mass.
//
//   1. Before Mass: six narrated moments (content/before-mass.ts). Each plays one recording; captions
//      follow it one sentence at a time, using the sentence start times in content/narration-timings.json.
//      Cues change the scene, a label, or the posture chip at particular sentences.
//   2. The Introductory Rites (content/experience.ts): the eight moments of content/mass.ts, each a few
//      beats: narration (captioned by sentence, like Before Mass), the simulated priest or Kyrie leader,
//      the simulated congregation, silences, and the official texts (ICEL / Misal Romano). An official
//      text is voiced only from your private local copy (see "Official texts" below); without one, it is
//      a labeled, silent placeholder. Nothing waits for the learner, and no microphone is used.
//
// Both are "steps" in one list, played by one reducer and one <audio> element:
//
//   ready ─Begin/Resume─▶ playing ─step done─▶ playing (next step) … ─last step─▶ ended
//                          │  ▲
//   Pause / tab hidden /   ▼  │ Resume
//   Learn more           paused
//   playing ─audio failed─▶ audioError ─Play again─▶ playing   (or Continue without audio)
//   jump(step, offset): seek, ±15 s, previous/next, chapter. Keeps paused if paused; otherwise plays.
//
// The timeline. Every step has a known length: its recording (durations from narration-timings.json),
// then its hold. Adding them up places every step on one timeline, so seeking can land anywhere and the
// bar can mark where each moment begins.
//
// `take` increases every time a step starts afresh (a new step, a jump, Begin, Play again). Timers and
// audio callbacks carry the take they were started for, and the reducer ignores them if it has changed,
// so a stale callback never advances the sequence after a seek, restart, pause, or language change.
//
// Saved locally: only the current step and the second within it (catholic-companion:experience-progress),
// every 5 s while playing, on pause, on navigation, and when the page is left. Cleared at the end.

import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useRef, useState, type ReactNode, type RefObject } from "react";
import { saveLanguage, type Language } from "../language";
import Controls, { formatTime, type ChapterSection } from "./controls";
import {
  BEFORE_MASS,
  BEFORE_MASS_IMAGES,
  PLACEHOLDER_SCENES,
  narrationFile,
  sentencesOf,
  splitSentences,
  type BeforeMassMoment,
  type PlaceholderScene,
} from "../../content/before-mass";
import { EXPERIENCE, MASS_PLACEHOLDERS, type Beat, type MassPlaceholder } from "../../content/experience";
import { INTRODUCTORY_RITES, MASS_PARTS, SCENE_ALT, type MassMoment, type MomentId, type SceneId, type Text } from "../../content/mass";
import TIMINGS from "../../content/narration-timings.json";

type Spoken = "en" | "es";
type SceneKey = SceneId | PlaceholderScene | MassPlaceholder;
type Status = "ready" | "playing" | "paused" | "audioError" | "ended";
// `offset`: seconds into the step at which the current take starts (0 unless the learner jumped).
type State = { status: Status; index: number; offset: number; take: number };
type Action =
  | { type: "begin"; index: number; offset: number } // Begin, Resume, Restart
  | { type: "jump"; index: number; offset: number } // seek, ±15 s, previous/next, chapter
  | { type: "stepDone"; take: number } // audio ended (if any) and the hold elapsed
  | { type: "audioFailed"; take: number }
  | { type: "retryAudio" }
  | { type: "skipAudio" }
  | { type: "pause" }
  | { type: "resume" };

// Captions one sentence at a time, timed by the recording (Before Mass moments and narrator beats).
type Captioned = { sentences: string[]; starts?: number[] };
// A Before Mass moment, with its captions and cues worked out once.
type Narrated = Captioned & {
  kind: "before";
  moment: BeforeMassMoment;
  number: number; // 1–6
  cues: (BeforeMassMoment["cues"][number] & { sentence: number })[];
};
// A beat of the Introductory Rites; `sentences` only for narrator beats.
type MassStep = Partial<Captioned> & { kind: "mass"; beat: Beat; number: number };
type Step = Narrated | MassStep;

const timings = TIMINGS as Record<string, { hash: string; duration?: number; starts: number[] } | undefined>;
const beatAudioPath = (beat: Beat, spoken: Spoken) =>
  beat.audio === undefined ? null : typeof beat.audio === "string" ? beat.audio : beat.audio[spoken];

const STEPS: Step[] = [
  ...BEFORE_MASS.map((moment, i): Narrated => {
    const sentences = sentencesOf(moment);
    const starts = timings[narrationFile(moment)]?.starts;
    return {
      kind: "before",
      moment,
      number: i + 1,
      sentences,
      starts: starts?.length === sentences.length ? starts : undefined,
      cues: moment.cues
        .map((cue) => ({ ...cue, sentence: sentences.findIndex((s) => s.includes(cue.at)) }))
        .filter((cue) => cue.sentence !== -1),
    };
  }),
  ...EXPERIENCE.map((beat): MassStep => {
    const number = INTRODUCTORY_RITES.findIndex((m) => m.id === beat.moment) + 1;
    if (!beat.narration) return { kind: "mass", beat, number };
    const sentences = splitSentences(beat.narration);
    const starts = timings[beatAudioPath(beat, "en")!]?.starts;
    return { kind: "mass", beat, number, sentences, starts: starts?.length === sentences.length ? starts : undefined };
  }),
];

// Official texts (private, local only). Their words and recordings are never in the app's tracked files:
// scripts/generate-narration.mjs records them from your git-ignored public/local/liturgical-texts.json
// into public/local/, with public/local/timings.json (duration, sentence starts, and the verified text).
// The page loads that file once, before the player starts (loadOfficialTexts); if it is absent, every
// official text stays a placeholder. A text recorded only in English is also used in Spanish mode.
type Official = { file: string; text: string; sentences: string[]; starts: number[]; duration: number; lang: Spoken };
let OFFICIAL: Record<string, { hash: string; duration: number; starts: number[]; text: string } | undefined> = {};
let timelinesCache: Record<Spoken, { spans: Span[]; total: number }> | null = null;
export async function loadOfficialTexts() {
  try {
    const res = await fetch("/local/timings.json", { cache: "no-store" });
    OFFICIAL = res.ok ? await res.json() : {};
  } catch {
    OFFICIAL = {};
  }
  timelinesCache = null;
}
function officialFor(step: Step, spoken: Spoken): Official | null {
  if (step.kind !== "mass" || step.beat.role !== "pending") return null;
  const ext = step.beat.pending!.speaker === "priest" ? "mp3" : "wav";
  for (const lang of [spoken, "en"] as const) {
    const file = `${step.beat.id}-${lang}.${ext}`;
    const entry = OFFICIAL[file];
    if (entry?.text) {
      const sentences = splitSentences([entry.text]);
      const starts = entry.starts?.length === sentences.length ? entry.starts : [];
      return { file, text: entry.text, sentences, starts, duration: entry.duration, lang };
    }
  }
  return null;
}

const GAP_MS = 1000; // silence after each Before Mass recording, while the next scene fades in
const END_GUARD = 1.5; // a seek never lands closer than this to the end of a recording or a timed scene
const LAST = STEPS.length - 1;

function next(state: State): State {
  if (state.index === LAST) return { ...state, status: "ended" };
  return { ...state, status: "playing", index: state.index + 1, offset: 0, take: state.take + 1 };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "begin":
      return { status: "playing", index: action.index, offset: action.offset, take: state.take + 1 };
    case "jump":
      return {
        status: state.status === "paused" ? "paused" : "playing",
        index: action.index,
        offset: action.offset,
        take: state.take + 1,
      };
    case "stepDone":
      return state.status === "playing" && action.take === state.take ? next(state) : state;
    case "audioFailed":
      return state.status === "playing" && action.take === state.take ? { ...state, status: "audioError" } : state;
    case "retryAudio":
      return state.status === "audioError" ? { ...state, status: "playing", offset: 0, take: state.take + 1 } : state;
    case "skipAudio":
      return state.status === "audioError" ? next(state) : state;
    case "pause":
      return state.status === "playing" ? { ...state, status: "paused" } : state;
    case "resume":
      return state.status === "paused" ? { ...state, status: "playing" } : state;
  }
}

// The recording for a step, or null. Narration is English-only for now, in every language mode.
function audioFor(step: Step, spoken: Spoken): string | null {
  if (step.kind === "before") return `/audio/${narrationFile(step.moment)}`;
  const official = officialFor(step, spoken);
  if (official) return `/local/${official.file}`;
  const path = beatAudioPath(step.beat, spoken);
  return path ? `/audio/${path}` : null;
}

const OFFICIAL_HOLD = 600; // after an official text's recording, as after the priest's other lines
const holdOf = (step: Step, spoken: Spoken) =>
  step.kind === "before" ? GAP_MS : officialFor(step, spoken) ? OFFICIAL_HOLD : step.beat.hold;

// Each step's place on the timeline, in seconds: its recording, then its hold.
type Span = { start: number; audio: number; hold: number; end: number };
function timeline(spoken: Spoken): { spans: Span[]; total: number } {
  let t = 0;
  const spans = STEPS.map((step) => {
    const file = audioFor(step, spoken);
    const audio = officialFor(step, spoken)?.duration ?? (file ? (timings[file.replace("/audio/", "")]?.duration ?? 0) : 0);
    const hold = holdOf(step, spoken) / 1000;
    const span = { start: t, audio, hold, end: t + audio + hold };
    t = span.end;
    return span;
  });
  return { spans, total: t };
}
// Computed on first use, after the official texts are loaded.
const timelines = () => (timelinesCache ??= { en: timeline("en"), es: timeline("es") });

// Where a seek to time T on the timeline should go. Never into the last moments of a recording or timed
// beat (so a seek can't trigger an immediate advance); a seek into the short pause after a recording
// goes to the start of the next step.
function resolveSeek(spoken: Spoken, target: number): { index: number; offset: number } {
  const { spans, total } = timelines()[spoken];
  const t = Math.min(Math.max(target, 0), total);
  let index = spans.findLastIndex((span) => span.start <= t);
  if (index < 0) index = 0;
  const span = spans[index];
  const local = t - span.start;
  if (span.audio > 0) {
    if (local >= span.audio && index < LAST) return { index: index + 1, offset: 0 };
    return { index, offset: Math.max(0, Math.min(local, span.audio - END_GUARD)) };
  }
  return { index, offset: Math.max(0, Math.min(local, span.hold - END_GUARD)) };
}

// Which sentence is being spoken at time t. Uses the measured start times; without them, spreads the
// sentences over the recording by length.
function sentenceAt(step: Captioned, t: number, duration: number): number {
  let starts = step.starts;
  if (!starts) {
    const lengths = step.sentences.map((s) => s.length);
    const total = lengths.reduce((a, b) => a + b, 0);
    let sum = 0;
    starts = lengths.map((n) => (((sum += n) - n) / total) * duration);
  }
  let i = 0;
  while (i + 1 < starts.length && starts[i + 1] <= t + 0.15) i++;
  return i;
}

// The scene, label, and posture in effect at a sentence: the latest cue of each kind so far.
function cuesAt(step: Narrated, sentence: number) {
  let scene: SceneKey = step.moment.scene;
  let label: string | undefined;
  let posture: string | undefined;
  for (const cue of step.cues) {
    if (cue.sentence > sentence) break;
    if (cue.scene) scene = cue.scene;
    if (cue.label) label = cue.label;
    if (cue.posture) posture = cue.posture;
  }
  return { scene, label, posture };
}

// Positions a recording; before its metadata has loaded, as soon as it has.
function seekAudio(audio: HTMLAudioElement, seconds: number) {
  if (audio.readyState >= 1) audio.currentTime = seconds;
  else audio.addEventListener("loadedmetadata", () => (audio.currentTime = seconds), { once: true });
}

// Every scene used anywhere, once, so they can be stacked and crossfaded.
const SCENES = [
  ...new Set<SceneKey>([
    ...STEPS.flatMap((step) =>
      step.kind === "before" ? [step.moment.scene, ...step.cues.flatMap((c) => (c.scene ? [c.scene] : []))] : [step.beat.scene],
    ),
  ]),
];
const PLACEHOLDERS: Record<string, { title: string; description: string }> = { ...PLACEHOLDER_SCENES, ...MASS_PLACEHOLDERS };
const FIRST_AUDIO = audioFor(STEPS[0], "en");
const momentFor = (id: MomentId) => INTRODUCTORY_RITES.find((m) => m.id === id) as MassMoment;
const isPlaceholder = (scene: SceneKey): scene is PlaceholderScene | MassPlaceholder => scene in PLACEHOLDERS;
// Which section of the Mass a step belongs to, and which moment (chapter).
const partOf = (step: Step) => (step.kind === "before" ? "before-mass" : "introductory-rites");
const momentKey = (step: Step) => (step.kind === "before" ? `before:${step.moment.id}` : `mass:${step.beat.moment}`);
const MOMENT_START = STEPS.map((step) => STEPS.findIndex((s) => momentKey(s) === momentKey(step)));
const nextMomentStart = (i: number) => STEPS.findIndex((s, j) => j > i && momentKey(s) !== momentKey(STEPS[i]));
// Moments that still contain a placeholder (an official text with no local recording) in this language.
const pendingMoments = (spoken: Spoken) =>
  new Set(STEPS.flatMap((s) => (s.kind === "mass" && s.beat.role === "pending" && !officialFor(s, spoken) ? [s.beat.moment] : [])));

// Saved progress: a step id and a second. Nothing else.
const PROGRESS_KEY = "catholic-companion:experience-progress";
const stepId = (step: Step) => (step.kind === "before" ? `before:${step.moment.id}` : `mass:${step.beat.id}`);
function readProgress(): { index: number; offset: number } | null {
  try {
    const saved = JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? "null");
    const index = STEPS.findIndex((step) => stepId(step) === saved?.step);
    return index >= 0 && Number.isFinite(saved.offset) ? { index, offset: Math.max(0, saved.offset) } : null;
  } catch {
    return null; // storage unavailable or unreadable: start fresh
  }
}
function saveProgress(index: number, offset: number) {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify({ step: stepId(STEPS[index]), offset: Math.floor(offset) }));
  } catch {
    // If storage is unavailable, progress simply isn't remembered.
  }
}
function clearProgress() {
  try {
    localStorage.removeItem(PROGRESS_KEY);
  } catch {}
}

const ui = {
  title: { en: "Experience Mass", es: "Vive la Misa" },
  intro: {
    en: "Walk into a Catholic church with a guide beside you. We begin at the door, before Mass, and then go through the opening of Mass itself, the Introductory Rites. Everything plays on its own; just listen and watch.",
    es: "Entra en una iglesia católica con un guía a tu lado. Comenzamos en la puerta, antes de la Misa, y luego recorremos el inicio de la Misa, los Ritos iniciales. Todo avanza solo; solo escucha y observa.",
  },
  disclosure: {
    en: "This is an educational simulation using AI-generated voices. It is not a celebration of Mass.",
    es: "Esta es una simulación educativa con voces generadas por inteligencia artificial. No es una celebración de la Misa.",
  },
  sound: {
    en: "Turn your sound on. Nothing is asked of you: no microphone, no questions.",
    es: "Activa el sonido. No se te pide nada: ni micrófono ni preguntas.",
  },
  englishOnly: {
    en: "The narration is in English for now; Spanish is being prepared.",
    es: "Por ahora, la narración está en inglés; la versión en español está en preparación.",
  },
  chooseLanguage: { en: "Choose a language to begin.", es: "Elige un idioma para comenzar." },
  begin: { en: "Begin Mass", es: "Comenzar la Misa" },
  resumeTitle: { en: "Pick up where you left off", es: "Continúa donde lo dejaste" },
  resumeAction: { en: "Resume", es: "Continuar" },
  startOver: { en: "Start from the beginning", es: "Empezar desde el principio" },
  stepByStep: { en: "Prefer to go step by step? Learn the Mass", es: "¿Prefieres ir paso a paso? Aprende la Misa" },
  massLanguage: { en: "Mass in", es: "Misa en" },
  restart: { en: "Restart", es: "Reiniciar" },
  learnMore: { en: "Learn more", es: "Saber más" },
  paused: { en: "Paused", es: "En pausa" },
  of: { en: "of", es: "de" },
  narrator: { en: "Guide", es: "Guía" },
  priest: { en: "Priest (simulated AI voice)", es: "Sacerdote (voz simulada por IA)" },
  leader: { en: "Priest or cantor (simulated AI voice)", es: "Sacerdote o cantor (voz simulada por IA)" },
  people: { en: "People (simulated congregation, AI voices)", es: "Pueblo (asamblea simulada, voces de IA)" },
  silence: { en: "Silence", es: "Silencio" },
  pendingBadge: { en: "Official text · not in your local copy", es: "Texto oficial · no está en tu copia local" },
  pendingBody: {
    en: "The official words are never included in the app. Add them from your own Missal to your private local copy (public/local/liturgical-texts.json) and record them to hear them here.",
    es: "Las palabras oficiales nunca se incluyen en la aplicación. Agrégalas desde tu propio Misal a tu copia local privada (public/local/liturgical-texts.json) y grábalas para escucharlas aquí.",
  },
  officialLocal: {
    en: "Official text from your private local copy (not included in the app).",
    es: "Texto oficial de tu copia local privada (no incluido en la aplicación).",
  },
  someTextsPending: { en: "some texts pending", es: "algunos textos pendientes" },
  loadingAudio: { en: "Loading audio…", es: "Cargando el audio…" },
  audioError: {
    en: "The audio couldn’t play. Check your sound and connection, then try again. The words are shown above.",
    es: "No se pudo reproducir el audio. Revisa el sonido y la conexión, e inténtalo de nuevo. Las palabras aparecen arriba.",
  },
  tryAgain: { en: "Play again", es: "Reproducir de nuevo" },
  continueWithout: { en: "Continue without audio", es: "Continuar sin audio" },
  inProgress: { en: "Illustration in progress", es: "Ilustración en preparación" },
  endTitle: { en: "The Introductory Rites are complete", es: "Los Ritos iniciales han terminado" },
  endBody: {
    en: "You’ve walked from the church door through the opening of Mass. Next comes the Liturgy of the Word, which is still being prepared. Some prayers of the Introductory Rites are shown as placeholders until permission to use their official words is confirmed.",
    es: "Has recorrido el camino desde la puerta de la iglesia hasta el inicio de la Misa. Luego viene la Liturgia de la Palabra, que todavía se está preparando. Algunas oraciones de los Ritos iniciales aparecen como marcadores provisionales hasta confirmar el permiso para usar sus palabras oficiales.",
  },
  restartExperience: { en: "Restart Experience", es: "Reiniciar la experiencia" },
  home: { en: "Return Home", es: "Volver al inicio" },
  close: { en: "Close", es: "Cerrar" },
  deeper: { en: "Go deeper", es: "Profundiza" },
  narration: { en: "Read the narration", es: "Leer la narración" },
  references: { en: "References", es: "Referencias" },
  learnMass: { en: "Learn the Mass step by step", es: "Aprende la Misa paso a paso" },
  // Playback controls
  position: { en: "Position in the Mass", es: "Posición en la Misa" },
  chapters: { en: "Chapters", es: "Capítulos" },
  previous: { en: "Previous moment", es: "Momento anterior" },
  next: { en: "Next moment", es: "Momento siguiente" },
  back15: { en: "Back 15 seconds", es: "Retroceder 15 segundos" },
  forward15: { en: "Forward 15 seconds", es: "Avanzar 15 segundos" },
  play: { en: "Play", es: "Reproducir" },
  pause: { en: "Pause", es: "Pausa" },
  notYet: { en: "not yet available", es: "aún no disponible" },
  now: { en: "Now", es: "Ahora" },
  sectionNotYet: { en: "Not yet available.", es: "Aún no disponible." },
  stand: { en: "Stand", es: "De pie" },
  sit: { en: "Sit", es: "Sentados" },
  kneel: { en: "Kneel", es: "De rodillas" },
};

const LANGUAGE_BUTTONS: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "bilingual", label: "EN + ES" },
];

// English, Spanish, or both (English first, Spanish beneath).
function show(language: Language, text: Text): ReactNode {
  if (language === "es") return <span lang="es">{text.es}</span>;
  if (language === "en" || text.en === text.es) return text.en;
  return (
    <>
      {text.en}
      <span lang="es" className="mt-1 block opacity-75">
        {text.es}
      </span>
    </>
  );
}

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full bg-burgundy px-6 font-medium text-ivory hover:bg-burgundy-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-burgundy";
const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-full border-2 border-burgundy px-6 font-medium text-burgundy hover:bg-cream";
const controlButton =
  "inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-cream bg-white/60 px-4 text-sm font-medium text-burgundy hover:border-gold";
const chip = "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";
const roleLabel = "block text-xs font-medium tracking-wider text-gold-deep uppercase";

export default function Player({ language: saved }: { language: Language | null }) {
  const [state, dispatch] = useReducer(reducer, { status: "ready", index: 0, offset: 0, take: 0 });
  const [massLang, setMassLang] = useState<Spoken>("en"); // bilingual mode only: the language the priest and people speak
  const [pos, setPos] = useState({ key: "", local: 0 }); // where we are in the current step, in seconds
  const [scrub, setScrub] = useState<number | null>(null); // timeline position while the thumb is dragged
  const [savedProgress] = useState(readProgress); // offered on the start screen
  const [buffering, setBuffering] = useState(false);
  const [about, setAbout] = useState<Step | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const loaded = useRef<string | null>(null); // which take and file the <audio> source belongs to
  const holdRef = useRef({ key: "", start: 0, elapsed: 0 }); // the hold of the current step, once started
  const latest = useRef({ started: false, index: 0, local: 0 }); // for saving progress from timers
  const pausedByDialog = useRef(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const stageRef = useRef<HTMLHeadingElement>(null);
  const endRef = useRef<HTMLHeadingElement>(null);

  const language: Language = saved ?? "bilingual"; // before a choice, show both
  const spoken: Spoken = saved === "es" ? "es" : saved === "en" ? "en" : massLang;
  const t = (text: Text) => show(language, text);
  // Short labels on one line: "Priest · Sacerdote".
  const short = (text: Text) => (language === "bilingual" ? `${text.en} · ${text.es}` : text[language]);
  const { status, index, take, offset } = state;
  const step = STEPS[index];
  const src = audioFor(step, spoken);
  const stepKey = `${take}:${src}`;
  const { spans, total } = timelines()[spoken];
  const local = pos.key === stepKey ? pos.local : offset;
  const time = scrub ?? (status === "ended" ? total : spans[index].start + local);

  // What the screen shows now (while dragging the timeline, it previews the place being dragged to).
  const view = scrub !== null ? resolveSeek(spoken, scrub) : { index, offset: local };
  const viewStep = STEPS[view.index];
  const captioned = viewStep.kind === "before" ? viewStep : viewStep.sentences ? (viewStep as Captioned) : null;
  const sentence = captioned ? sentenceAt(captioned, view.offset, spans[view.index].audio) : 0;
  const cue = viewStep.kind === "before" ? cuesAt(viewStep, sentence) : null;
  const scene: SceneKey = cue ? cue.scene : viewStep.kind === "mass" ? viewStep.beat.scene : "church-exterior";

  useEffect(() => {
    latest.current = { started: status !== "ready" && status !== "ended", index, local };
  });

  // Plays the current step: positions its recording (also while paused, so a jump shows the new place),
  // then, while playing, plays it to the real `ended` event, then holds.
  useEffect(() => {
    if (status !== "playing" && status !== "paused") return;
    const current = STEPS[index];
    const file = audioFor(current, spoken);
    const audio = audioRef.current;
    const key = `${take}:${file}`;
    if (file && audio && loaded.current !== key) {
      if (audio.getAttribute("src") !== file) audio.src = file;
      loaded.current = key;
      seekAudio(audio, offset);
    }
    if (status !== "playing") return;

    let timer: number | undefined;
    let held = false;
    const hold = () => {
      if (held) return;
      held = true;
      // Resuming a hold continues it; a jump into a timed beat starts that far in.
      const prior = holdRef.current.key === key ? holdRef.current.elapsed : file ? 0 : offset * 1000;
      holdRef.current = { key, start: performance.now() - prior, elapsed: prior };
      timer = window.setTimeout(() => dispatch({ type: "stepDone", take }), Math.max(0, holdOf(current, spoken) - prior));
    };
    const stop = () => {
      window.clearTimeout(timer);
      if (held) holdRef.current = { ...holdRef.current, elapsed: performance.now() - holdRef.current.start };
    };
    if (!file || !audio) {
      hold();
      return stop;
    }

    const onEnded = () => hold();
    const onError = () => dispatch({ type: "audioFailed", take });
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    if (audio.ended) hold(); // paused during the hold after the audio finished
    else
      audio.play().catch((error: DOMException) => {
        // AbortError: paused or replaced before it started (handled elsewhere).
        if (error.name !== "AbortError") dispatch({ type: "audioFailed", take });
      });
    return () => {
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.pause();
      stop();
    };
  }, [status, index, take, spoken, offset]);

  // While playing, keep the position up to date (four times a second) for the timeline and captions:
  // the recording's time, then the hold.
  useEffect(() => {
    if (status !== "playing") return;
    const file = audioFor(STEPS[index], spoken);
    const key = `${take}:${file}`;
    const s = timelines()[spoken].spans[index];
    const id = window.setInterval(() => {
      const at =
        holdRef.current.key === key
          ? (file ? s.audio : 0) + (performance.now() - holdRef.current.start) / 1000
          : (audioRef.current?.currentTime ?? 0);
      setPos({ key, local: Math.min(at, s.end - s.start) });
    }, 250);
    return () => window.clearInterval(id);
  }, [status, index, take, spoken]);

  // While a recording plays, load the next one in the background so it starts without a delay. The
  // detached element is never played and is dropped right away; the browser keeps the downloaded file.
  // The single <audio> element below is the only thing that ever plays.
  useEffect(() => {
    if (status !== "playing" || index === LAST) return;
    const upcoming = STEPS.slice(index + 1).find((s) => audioFor(s, spoken));
    const following = upcoming && audioFor(upcoming, spoken);
    if (!following) return;
    const warm = new Audio();
    warm.preload = "auto";
    warm.src = following;
    return () => warm.removeAttribute("src");
  }, [status, index, spoken]);

  // Save progress every 5 s while playing, and right away on pause; forget it at the end.
  useEffect(() => {
    if (status === "paused") saveProgress(latest.current.index, latest.current.local);
    if (status === "ended") clearProgress();
    if (status !== "playing") return;
    const id = window.setInterval(() => saveProgress(latest.current.index, latest.current.local), 5000);
    return () => window.clearInterval(id);
  }, [status]);

  // Pause (and save) when the page is hidden or left; stop audio for good when the player goes away.
  useEffect(() => {
    const audio = audioRef.current;
    const onVisibility = () => document.hidden && dispatch({ type: "pause" });
    const onPageHide = () => {
      if (latest.current.started) saveProgress(latest.current.index, latest.current.local);
      dispatch({ type: "pause" });
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pagehide", onPageHide);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pagehide", onPageHide);
      audio?.pause();
    };
  }, []);

  // Focus the closing heading at the end.
  useEffect(() => {
    if (status === "ended") endRef.current?.focus();
  }, [status]);

  // The Learn more dialog opens once its content is rendered.
  useEffect(() => {
    if (about) dialogRef.current?.showModal();
  }, [about]);

  function begin(at = { index: 0, offset: 0 }) {
    // Begin, Resume, and Restart are user gestures: play the first recording muted for a moment here, so
    // that browsers that require a gesture (iOS Safari) allow audio to play next.
    const audio = audioRef.current;
    if (audio && FIRST_AUDIO) {
      audio.muted = true;
      audio.src = FIRST_AUDIO;
      loaded.current = null;
      audio
        .play()
        .then(() => loaded.current === null && audio.pause()) // unless a step has already taken over
        .catch(() => {}) // if it fails here, the step itself reports the error and offers recovery
        .finally(() => (audio.muted = false));
    }
    setBuffering(false);
    saveProgress(at.index, at.offset);
    dispatch({ type: "begin", index: at.index, offset: at.offset });
    requestAnimationFrame(() => stageRef.current?.focus());
  }

  // Go to a step and a second within it, keeping play or pause as it is.
  function jump(to: { index: number; offset: number }) {
    setScrub(null);
    setPos({ key: "", local: 0 });
    saveProgress(to.index, to.offset);
    dispatch({ type: "jump", ...to });
  }
  const seek = (seconds: number) => jump(resolveSeek(spoken, seconds));

  function openAbout(what: Step) {
    if (status === "playing") {
      pausedByDialog.current = true;
      dispatch({ type: "pause" });
    }
    setAbout(what);
  }

  function closedAbout() {
    setAbout(null);
    if (pausedByDialog.current) dispatch({ type: "resume" });
    pausedByDialog.current = false;
  }

  const started = status !== "ready";
  const paused = status === "paused";
  const postureLabel = cue
    ? cue.posture
    : viewStep.kind === "mass"
      ? short(viewStep.beat.chip ?? ui[viewStep.beat.posture.position])
      : undefined;

  // Navigation by section of the Mass. Moment titles come from the content itself: BEFORE_MASS for Before
  // Mass and INTRODUCTORY_RITES for the Introductory Rites. Moments that still contain a
  // placeholder (no local official text) say so. Later sections have no content yet and are shown as not yet available.
  const titleOf = (s: Step): string => (s.kind === "before" ? s.moment.title : momentFor(s.beat.moment).title[language === "es" ? "es" : "en"]);
  const sections: ChapterSection[] = MASS_PARTS.map((part) => {
    if (part.id === "before-mass")
      return {
        id: part.id,
        title: short(part.title),
        available: true,
        items: STEPS.flatMap((s, i) => (s.kind === "before" ? [{ key: s.moment.id, title: s.moment.title, index: i, lang: "en" }] : [])),
      };
    if (part.id === "introductory-rites")
      return {
        id: part.id,
        title: short(part.title),
        available: true,
        items: INTRODUCTORY_RITES.map((m) => {
          const i = STEPS.findIndex((s) => s.kind === "mass" && s.beat.moment === m.id);
          return {
            key: m.id,
            title: short(m.title),
            index: i >= 0 ? i : undefined,
            note: pendingMoments(spoken).has(m.id) ? short(ui.someTextsPending) : undefined,
          };
        }),
      };
    return { id: part.id, title: short(part.title), available: false, items: [] };
  });
  const partTitle = (s: Step) => short(MASS_PARTS.find((p) => p.id === partOf(s))!.title);
  const marks = spans.flatMap((s, i) =>
    i > 0 && momentKey(STEPS[i]) !== momentKey(STEPS[i - 1])
      ? [{ at: s.start, section: partOf(STEPS[i]) !== partOf(STEPS[i - 1]), label: `${partTitle(STEPS[i])} · ${titleOf(STEPS[i])}` }]
      : [],
  );
  // Previous: the start of this moment, or of the previous moment if we're within 3 s of the start.
  const momentStart = MOMENT_START[index];
  const goPrevious = () => {
    const intoMoment = spans[index].start + local - spans[momentStart].start;
    jump({ index: intoMoment > 3 || momentStart === 0 ? momentStart : MOMENT_START[momentStart - 1], offset: 0 });
  };
  const goNext = () => {
    const nextStart = nextMomentStart(index);
    if (nextStart > 0) jump({ index: nextStart, offset: 0 });
  };

  const languageSwitch = (
    <div className="flex flex-wrap items-center gap-2">
      <div role="group" aria-label="Language · Idioma" className="flex rounded-full bg-cream p-1">
        {LANGUAGE_BUTTONS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={saved === option.value}
            onClick={() => saveLanguage(option.value)}
            className={`min-h-10 rounded-full px-3 text-sm font-medium ${
              saved === option.value ? "bg-burgundy text-ivory" : "text-ink-soft hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {saved === "bilingual" && (
        <div role="group" aria-label="Mass in · Misa en" className="flex items-center gap-1 text-sm">
          <span aria-hidden="true" className="text-ink-soft">
            {ui.massLanguage.en} · <span lang="es">{ui.massLanguage.es}</span>:
          </span>
          {(["en", "es"] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={massLang === option}
              onClick={() => setMassLang(option)}
              className={`min-h-10 rounded-full px-3 font-medium ${
                massLang === option ? "bg-burgundy text-ivory" : "bg-cream text-ink-soft hover:text-ink"
              }`}
            >
              {option === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>
      )}
    </div>
  );

  // What is said or shown now, by role.
  const caption = (() => {
    if (captioned) {
      // The narration is heard, so screen readers are not asked to read each caption as well; the full
      // text is under Learn more (Before Mass) or in the script.
      return (
        <div className="mt-3 min-h-28">
          <p className="text-xs font-medium tracking-wider text-gold-deep uppercase">{short(ui.narrator)}</p>
          <p lang="en" className="mt-1 font-serif text-2xl leading-snug font-semibold">
            {captioned.sentences[sentence]}
          </p>
          {language !== "en" && <p className="mt-2 text-xs text-ink-soft">{t(ui.englishOnly)}</p>}
        </div>
      );
    }
    const beat = (viewStep as MassStep).beat;
    const official = officialFor(viewStep, spoken);
    if (official) {
      // An official text from the private local copy, captioned by sentence like the narration.
      const at = sentenceAt({ sentences: official.sentences, starts: official.starts.length ? official.starts : undefined }, view.offset, official.duration);
      return (
        <div className="mt-3 min-h-28">
          <p className={roleLabel}>{short(beat.pending!.speaker === "priest" ? ui.priest : ui.people)}</p>
          <p lang={official.lang} className={`mt-1 font-serif text-2xl leading-snug font-semibold ${beat.pending!.speaker === "people" ? "text-burgundy" : ""}`}>
            {official.sentences[at]}
          </p>
          <p className="mt-2 text-xs text-ink-soft">{t(ui.officialLocal)}</p>
        </div>
      );
    }
    if (beat.role === "pending")
      return (
        <div aria-live="polite" className="mt-3 min-h-28 rounded-2xl border-2 border-dashed border-gold-deep/60 bg-cream/50 p-4">
          <p className="inline-flex rounded-full bg-gold-deep px-2 py-0.5 text-[0.7rem] font-semibold tracking-wider text-ivory uppercase">
            {short(ui.pendingBadge)}
          </p>
          <p className="mt-2 font-serif text-xl font-semibold">{t(beat.pending!.what)}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t(ui.pendingBody)}</p>
          <p lang="en" className="mt-1 text-xs text-ink-soft">
            {beat.pending!.source}
          </p>
        </div>
      );
    if (beat.role === "silence")
      return (
        <div aria-live="polite" className="mt-3 min-h-28">
          <p className={roleLabel}>{short(ui.silence)}</p>
          <p className="mt-1 leading-relaxed text-ink-soft italic">{t(beat.text!)}</p>
        </div>
      );
    const label = beat.role === "priest" ? ui.priest : beat.role === "leader" ? ui.leader : ui.people;
    return (
      <div className="mt-3 min-h-28">
        <p className={roleLabel}>{short(label)}</p>
        <p className={`mt-1 font-serif text-2xl leading-snug font-semibold ${beat.role === "people" ? "text-burgundy" : ""}`}>{t(beat.text!)}</p>
      </div>
    );
  })();

  return (
    <>
      {started ? languageSwitch : null}

      {/* The church: every scene is stacked and the current one fades in (instantly with reduced motion). */}
      <section aria-labelledby="stage-heading" className={started ? "mt-4" : ""}>
        <h1
          id="stage-heading"
          ref={stageRef}
          tabIndex={-1}
          className={started ? "sr-only" : "font-serif text-4xl font-semibold sm:text-5xl"}
        >
          {t(ui.title)}
        </h1>

        <div className={`relative aspect-[3/2] overflow-hidden rounded-3xl bg-cream ${started ? "" : "mt-6"}`}>
          {SCENES.map((key) => {
            const current = key === scene;
            const fade = `transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
              current ? "opacity-100" : "opacity-0"
            }`;
            const image = key in BEFORE_MASS_IMAGES ? BEFORE_MASS_IMAGES[key as PlaceholderScene] : undefined;
            if (image) {
              // A finished Before Mass illustration (16:9, cover-cropped into the 3:2 stage around `focus`).
              return (
                <Image
                  key={key}
                  src={image.src}
                  alt={current ? image.alt : ""}
                  lang="en"
                  aria-hidden={!current}
                  fill
                  sizes="(min-width: 672px) 632px, calc(100vw - 40px)"
                  loading="eager"
                  fetchPriority={key === BEFORE_MASS[0].scene ? "high" : undefined}
                  className={`object-cover ${fade}`}
                  style={image.focus ? { objectPosition: image.focus } : undefined}
                />
              );
            }
            if (isPlaceholder(key)) {
              const placeholder = PLACEHOLDERS[key];
              return (
                <div
                  key={key}
                  role={current ? "img" : undefined}
                  aria-label={current ? `${ui.inProgress.en}: ${placeholder.title}. ${placeholder.description}` : undefined}
                  aria-hidden={!current}
                  className={`absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-cream via-ivory to-gold/30 p-5 text-center ${fade}`}
                >
                  <span aria-hidden="true" className="font-serif text-3xl text-gold sm:text-5xl">
                    ✠
                  </span>
                  <p lang="en" className="mt-2 font-serif text-xl leading-tight font-semibold text-ink sm:text-3xl">
                    {placeholder.title}
                  </p>
                  <p lang="en" className="mt-1 max-w-sm text-xs text-ink-soft sm:text-sm">
                    {placeholder.description}
                  </p>
                  <p className="mt-3 rounded-full border border-gold-deep/40 px-3 py-0.5 text-[0.7rem] font-medium tracking-wider text-gold-deep uppercase">
                    {short(ui.inProgress)}
                  </p>
                </div>
              );
            }
            return (
              <Image
                key={key}
                src={`/scenes/${key}.webp`}
                alt={current ? (language === "es" ? SCENE_ALT[key as SceneId].es : SCENE_ALT[key as SceneId].en) : ""}
                aria-hidden={!current}
                fill
                sizes="(min-width: 672px) 632px, calc(100vw - 40px)"
                loading="eager"
                className={`object-cover ${fade}`}
              />
            );
          })}
          {paused && (
            <p className="absolute top-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-sm font-medium text-ivory">
              <span aria-hidden="true">❚❚ </span>
              {short(ui.paused)}
            </p>
          )}
        </div>

        {/* Posture and label for this moment: supplements to the narration, which says the same. */}
        {started && status !== "ended" && (
          <div className="mt-2 flex min-h-8 flex-wrap items-center gap-2">
            {postureLabel && (
              <span className={`${chip} bg-ink/80 text-ivory`}>
                <span aria-hidden="true">●&nbsp;</span>
                {postureLabel}
              </span>
            )}
            {cue?.label && (
              <span lang="en" className={`${chip} border border-gold-deep/40 bg-cream text-gold-deep`}>
                {cue.label}
              </span>
            )}
          </div>
        )}
        <p className="mt-2 text-xs leading-relaxed text-ink-soft">{t(ui.disclosure)}</p>
      </section>

      {!started && (
        <section className="mt-6">
          <p className="text-lg leading-relaxed">{t(ui.intro)}</p>
          <div className="mt-6">{languageSwitch}</div>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{t(ui.sound)}</p>
          {saved && saved !== "en" && <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t(ui.englishOnly)}</p>}
          {savedProgress && saved ? (
            <div className="mt-6 rounded-2xl border-2 border-gold bg-cream/70 p-4">
              <p className="font-medium">{t(ui.resumeTitle)}</p>
              <p className="mt-1 text-sm text-ink-soft">
                {partTitle(STEPS[savedProgress.index])} ·{" "}
                <span lang={STEPS[savedProgress.index].kind === "before" ? "en" : undefined}>{titleOf(STEPS[savedProgress.index])}</span> ·{" "}
                {formatTime(spans[savedProgress.index].start + savedProgress.offset)}
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => begin(resolveSeek(spoken, spans[savedProgress.index].start + savedProgress.offset))}
                  className={`${primaryButton} flex-1`}
                >
                  <span>{t(ui.resumeAction)}</span>
                </button>
                <button type="button" onClick={() => begin()} className={`${secondaryButton} flex-1`}>
                  <span>{t(ui.startOver)}</span>
                </button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => begin()} disabled={!saved} className={`${primaryButton} mt-6 w-full text-lg`}>
              <span aria-hidden="true">✠&nbsp;</span>
              <span>{t(ui.begin)}</span>
            </button>
          )}
          {!saved && <p className="mt-2 text-center text-sm text-ink-soft">{t(ui.chooseLanguage)}</p>}
          <p className="mt-6 text-center text-sm">
            <Link href="/simulation" className="text-burgundy underline underline-offset-4">
              {t(ui.stepByStep)}
            </Link>
          </p>
        </section>
      )}

      {started && status !== "ended" && (
        <>
          <p className="mt-5 text-xs font-medium tracking-[0.15em] text-gold-deep uppercase">
            {partTitle(viewStep)} · {viewStep.number} {short(ui.of)} {viewStep.kind === "before" ? BEFORE_MASS.length : INTRODUCTORY_RITES.length}
            <span className="sr-only">: </span>
            <span lang={viewStep.kind === "before" ? "en" : undefined} className="block normal-case tracking-normal text-ink-soft">
              {titleOf(viewStep)}
            </span>
          </p>

          {caption}

          <p role="status" className="mt-2 min-h-5 text-sm font-medium text-burgundy">
            {status === "playing" && buffering && t(ui.loadingAudio)}
            {paused && t(ui.paused)}
          </p>

          {status === "audioError" && (
            <div role="alert" className="mt-3 rounded-2xl border-2 border-gold bg-cream p-4">
              <p className="leading-relaxed">{t(ui.audioError)}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button type="button" onClick={() => dispatch({ type: "retryAudio" })} className={controlButton}>
                  <span aria-hidden="true">▶ </span>
                  <span>{t(ui.tryAgain)}</span>
                </button>
                <button type="button" onClick={() => dispatch({ type: "skipAudio" })} className={controlButton}>
                  <span>{t(ui.continueWithout)}</span>
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {started && (
        <Controls
          time={time}
          total={total}
          marks={marks}
          currentIndex={momentStart}
          currentSection={partOf(step)}
          sections={sections}
          paused={paused}
          disabled={status === "audioError"}
          ended={status === "ended"}
          labels={{
            position: short(ui.position),
            positionText: `${formatTime(time)} ${short(ui.of)} ${formatTime(total)}: ${partTitle(viewStep)}, ${titleOf(viewStep)}`,
            chapters: short(ui.chapters),
            previous: short(ui.previous),
            next: short(ui.next),
            back15: short(ui.back15),
            forward15: short(ui.forward15),
            play: short(ui.play),
            pause: short(ui.pause),
            notYet: short(ui.notYet),
            now: short(ui.now),
            sectionNotYet: short(ui.sectionNotYet),
          }}
          onScrub={setScrub}
          onSeek={seek}
          onBack={() => seek(time - 15)}
          onForward={() => seek(time + 15)}
          onPrevious={goPrevious}
          onNext={goNext}
          onToggle={() => dispatch({ type: paused ? "resume" : "pause" })}
          onChapter={(i) => jump({ index: i, offset: 0 })}
        />
      )}

      {started && status !== "ended" && (
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => begin()} className={controlButton}>
            <span aria-hidden="true">↺ </span>
            <span>{t(ui.restart)}</span>
          </button>
          <button type="button" onClick={() => openAbout(step)} className={controlButton}>
            <span aria-hidden="true">ⓘ </span>
            <span>{t(ui.learnMore)}</span>
          </button>
        </div>
      )}

      {status === "ended" && (
        <section className="mt-6 rounded-3xl bg-cream/70 p-6 sm:p-8">
          <span aria-hidden="true" className="font-serif text-4xl text-gold">
            ✦
          </span>
          <h2 ref={endRef} tabIndex={-1} className="mt-2 font-serif text-3xl font-semibold">
            {t(ui.endTitle)}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">{t(ui.endBody)}</p>
          <div className="mt-6 flex flex-col gap-3">
            <button type="button" onClick={() => begin()} className={primaryButton}>
              <span>{t(ui.restartExperience)}</span>
            </button>
            <Link href="/simulation" className={secondaryButton}>
              <span>{t(ui.learnMass)}</span>
            </Link>
            <Link href="/" className={secondaryButton}>
              <span>{t(ui.home)}</span>
            </Link>
          </div>
        </section>
      )}

      {/* The one audio element: never two sounds at once. */}
      <audio
        ref={audioRef}
        preload="auto"
        onTimeUpdate={(event) => {
          // During the recording itself (also while paused, after a seek). The hold is tracked by the interval.
          if (!event.currentTarget.ended) setPos({ key: loaded.current ?? "", local: event.currentTarget.currentTime });
        }}
        onWaiting={() => setBuffering(true)}
        onPlaying={() => setBuffering(false)}
        onPause={() => setBuffering(false)}
      />

      {about && (
        <AboutDialog dialogRef={dialogRef} closeLabel={t(ui.close)} onClose={closedAbout}>
          {about.kind === "before" ? <BeforeMassAbout step={about} t={t} /> : <MassAbout moment={momentFor(about.beat.moment)} t={t} />}
          <p className="mt-4 text-xs leading-relaxed text-ink-soft">{t(ui.disclosure)}</p>
          <Link href="/simulation" className="mt-3 inline-block text-sm text-burgundy underline underline-offset-4">
            {t(ui.learnMass)}
          </Link>
        </AboutDialog>
      )}
    </>
  );
}

// On-request explanations in a modal dialog. Opening it pauses playback; closing resumes from the
// same place (the audio element keeps its position).
function AboutDialog({
  dialogRef,
  closeLabel,
  onClose,
  children,
}: {
  dialogRef: RefObject<HTMLDialogElement | null>;
  closeLabel: ReactNode;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="about-heading"
      onClose={onClose}
      className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl bg-ivory p-6 text-ink backdrop:bg-ink/60"
    >
      {children}
      <form method="dialog" className="mt-5">
        <button type="submit" className={primaryButton}>
          <span>{closeLabel}</span>
        </button>
      </form>
    </dialog>
  );
}

// Learn more for a Before Mass moment: the deeper explanation, references, and the full narration.
function BeforeMassAbout({ step, t }: { step: Narrated; t: (text: Text) => ReactNode }) {
  return (
    <div lang="en">
      <h2 id="about-heading" className="font-serif text-3xl font-semibold">
        {step.moment.title}
      </h2>
      {step.moment.learnMore.map((paragraph) => (
        <p key={paragraph} className="mt-3 leading-relaxed">
          {paragraph}
        </p>
      ))}
      <p className="mt-4 text-xs leading-relaxed text-ink-soft">
        {t(ui.references)}: {step.moment.references}
      </p>
      <details className="mt-4 rounded-2xl bg-cream/60 p-4">
        <summary className="cursor-pointer font-medium text-burgundy">{t(ui.narration)}</summary>
        {step.moment.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-3 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </details>
    </div>
  );
}

// Learn more for a moment of the Mass itself: the existing explanation from content/mass.ts.
function MassAbout({ moment, t }: { moment: MassMoment; t: (text: Text) => ReactNode }) {
  return (
    <>
      <h2 id="about-heading" className="font-serif text-3xl font-semibold">
        {t(moment.title)}
      </h2>
      <p className="mt-3 text-lg leading-relaxed">{t(moment.explanation)}</p>
      <p className="mt-4 rounded-2xl bg-burgundy/5 p-4 leading-relaxed">
        <strong className="font-medium">{t(ui[moment.posture.position])}. </strong>
        {t(moment.posture.note)}
      </p>
      {moment.condition && (
        <p className="mt-4 rounded-2xl border-l-4 border-gold bg-cream/60 p-4 text-sm leading-relaxed">{t(moment.condition)}</p>
      )}
      {moment.deeper && (
        <details className="mt-4 rounded-2xl bg-cream/60 p-4">
          <summary className="cursor-pointer font-medium text-burgundy">{t(ui.deeper)}</summary>
          <p className="mt-3 leading-relaxed">{t(moment.deeper)}</p>
        </details>
      )}
      {moment.variations && (
        <details className="mt-3 rounded-2xl bg-cream/60 p-4">
          <summary className="cursor-pointer font-medium text-burgundy">{t({ en: "How this can vary", es: "Cómo puede variar" })}</summary>
          <p className="mt-3 leading-relaxed">{t(moment.variations)}</p>
        </details>
      )}
    </>
  );
}
