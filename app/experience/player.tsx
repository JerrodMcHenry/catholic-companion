"use client";

// The Experience Mass player. One continuous sequence that plays on its own, and that the learner can
// also navigate: a seekable timeline, ±15 s, previous/next moment, and chapters by section of the Mass.
//
//   1. Before Mass: six narrated moments (content/before-mass.ts). Each plays one recording; captions
//      follow it one sentence at a time, using the sentence start times in content/narration-timings.json.
//      Cues change the scene, a label, or the posture chip at particular sentences.
//   2. The opening of Mass (content/experience.ts, the Milestone 6A prototype): scenes with descriptive
//      captions and the simulated priest's opening invocation. The people's "Amen" is shown
//      automatically; nothing waits for the learner, and no microphone is used.
//
// Both are "steps" in one list, played by one reducer and one <audio> element:
//
//   ready ─Begin/Resume─▶ playing ─step done─▶ playing (next step) … ─last step─▶ ended
//                          │  ▲                  │ step with the people's answer
//                  Pause / │  │ Resume           ▼
//            tab hidden /  ▼  │            acknowledging ─1.8 s─▶ playing (next step)
//            Learn more  paused  (also from acknowledging; resumes to the same state)
//   playing ─audio failed─▶ audioError ─Play again─▶ playing   (or Continue without audio)
//   jump(step, offset): seek, ±15 s, previous/next, chapter. Keeps paused if paused; otherwise plays.
//
// The timeline. Every step has a known length: its recording (durations from narration-timings.json),
// then its hold, then (for the priest's line) the people's answer. Adding them up places every moment on
// one timeline, so seeking can land anywhere and the bar can mark where each moment begins.
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
  type BeforeMassMoment,
  type PlaceholderScene,
} from "../../content/before-mass";
import { EXPERIENCE, PRIEST_VOICE, type Beat } from "../../content/experience";
import { INTRODUCTORY_RITES, MASS_PARTS, SCENE_ALT, type MassMoment, type MomentId, type SceneId, type Text } from "../../content/mass";
import TIMINGS from "../../content/narration-timings.json";

type Spoken = "en" | "es";
type SceneKey = SceneId | PlaceholderScene;
type Active = "playing" | "acknowledging";
type Status = "ready" | Active | "paused" | "audioError" | "ended";
// `offset`: seconds into the step at which the current take starts (0 unless the learner jumped).
type State = { status: Status; index: number; offset: number; resumeTo: Active; take: number };
type Action =
  | { type: "begin"; index: number; offset: number } // Begin, Resume, Restart
  | { type: "jump"; index: number; offset: number } // seek, ±15 s, previous/next, chapter
  | { type: "stepDone"; take: number } // audio ended (if any) and the hold elapsed
  | { type: "audioFailed"; take: number }
  | { type: "retryAudio" }
  | { type: "skipAudio" }
  | { type: "ackDone"; take: number }
  | { type: "pause" }
  | { type: "resume" };

// A Before Mass moment, with its captions and cues worked out once.
type Narrated = {
  kind: "before";
  moment: BeforeMassMoment;
  number: number; // 1–6
  sentences: string[];
  starts?: number[]; // when each sentence starts, if timings exist for this recording
  cues: (BeforeMassMoment["cues"][number] & { sentence: number })[];
};
type Step = Narrated | { kind: "mass"; beat: Beat };

const timings = TIMINGS as Record<string, { hash: string; duration?: number; starts: number[] } | undefined>;

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
  ...EXPERIENCE.map((beat): Step => ({ kind: "mass", beat })),
];

const ACKNOWLEDGE_MS = 1800;
const GAP_MS = 1000; // silence after each Before Mass recording, while the next scene fades in
const END_GUARD = 1.5; // a seek never lands closer than this to the end of a recording or a timed scene
const LAST = STEPS.length - 1;

function next(state: State): State {
  if (state.index === LAST) return { ...state, status: "ended" };
  return { ...state, status: "playing", index: state.index + 1, offset: 0, take: state.take + 1 };
}

// After a step's audio and hold: show the people's answer if the step has one, otherwise move on.
function afterStep(state: State): State {
  const step = STEPS[state.index];
  return step.kind === "mass" && step.beat.peopleAnswer ? { ...state, status: "acknowledging" } : next(state);
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "begin":
      return { status: "playing", index: action.index, offset: action.offset, resumeTo: "playing", take: state.take + 1 };
    case "jump":
      return {
        status: state.status === "paused" ? "paused" : "playing",
        index: action.index,
        offset: action.offset,
        resumeTo: "playing",
        take: state.take + 1,
      };
    case "stepDone":
      return state.status === "playing" && action.take === state.take ? afterStep(state) : state;
    case "audioFailed":
      return state.status === "playing" && action.take === state.take ? { ...state, status: "audioError" } : state;
    case "retryAudio":
      return state.status === "audioError" ? { ...state, status: "playing", offset: 0, take: state.take + 1 } : state;
    case "skipAudio":
      return state.status === "audioError" ? afterStep(state) : state;
    case "ackDone":
      return state.status === "acknowledging" && action.take === state.take ? next(state) : state;
    case "pause":
      return state.status === "playing" || state.status === "acknowledging"
        ? { ...state, status: "paused", resumeTo: state.status }
        : state;
    case "resume":
      return state.status === "paused" ? { ...state, status: state.resumeTo } : state;
  }
}

// The recording for a step, or null. Before Mass is English-only for now, in every language mode.
function audioFor(step: Step, spoken: Spoken): string | null {
  if (step.kind === "before") return `/audio/${narrationFile(step.moment)}`;
  return step.beat.audio ? `/audio/${PRIEST_VOICE[spoken]}/${step.beat.audio}.mp3` : null;
}

const holdOf = (step: Step) => (step.kind === "before" ? GAP_MS : step.beat.hold);

// Each step's place on the timeline, in seconds: its recording, then its hold, then the people's answer.
type Span = { start: number; audio: number; hold: number; ack: number; end: number };
function timeline(spoken: Spoken): { spans: Span[]; total: number } {
  let t = 0;
  const spans = STEPS.map((step) => {
    const file = audioFor(step, spoken);
    const audio = file ? (timings[file.replace("/audio/", "")]?.duration ?? 0) : 0;
    const hold = holdOf(step) / 1000;
    const ack = step.kind === "mass" && step.beat.peopleAnswer ? ACKNOWLEDGE_MS / 1000 : 0;
    const span = { start: t, audio, hold, ack, end: t + audio + hold + ack };
    t = span.end;
    return span;
  });
  return { spans, total: t };
}
const TIMELINES = { en: timeline("en"), es: timeline("es") };

// Where a seek to time T on the timeline should go. Never into the last moments of a recording or timed
// scene (so a seek can't trigger an immediate advance); a seek into the silence between Before Mass
// moments goes to the start of the next moment.
function resolveSeek(spoken: Spoken, target: number): { index: number; offset: number } {
  const { spans, total } = TIMELINES[spoken];
  const t = Math.min(Math.max(target, 0), total);
  let index = spans.findLastIndex((span) => span.start <= t);
  if (index < 0) index = 0;
  const span = spans[index];
  let local = t - span.start;
  if (span.audio > 0) {
    if (local >= span.audio) {
      if (span.ack === 0 && index < LAST) return { index: index + 1, offset: 0 };
      local = span.audio;
    }
    return { index, offset: Math.max(0, Math.min(local, span.audio - END_GUARD)) };
  }
  return { index, offset: Math.max(0, Math.min(local, span.hold - END_GUARD)) };
}

// Which sentence is being spoken at time t. Uses the measured start times; without them, spreads the
// sentences over the recording by length.
function sentenceAt(step: Narrated, t: number, duration: number): number {
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
const FIRST_AUDIO = audioFor(STEPS[0], "en");
const momentFor = (id: MomentId) => INTRODUCTORY_RITES.find((m) => m.id === id) as MassMoment;
const isPlaceholder = (scene: SceneKey): scene is PlaceholderScene => scene in PLACEHOLDER_SCENES;
// Which section of the Mass a step belongs to.
const partOf = (step: Step) => (step.kind === "before" ? "before-mass" : "introductory-rites");

// Saved progress: a step id and a second. Nothing else.
const PROGRESS_KEY = "catholic-companion:experience-progress";
const stepId = (step: Step) => (step.kind === "before" ? `before:${step.moment.id}` : `mass:${step.beat.moment}`);
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
    en: "Walk into a Catholic church with a guide beside you. We begin at the door, before Mass, and then step into the start of Mass itself. Everything plays on its own; just listen and watch.",
    es: "Entra en una iglesia católica con un guía a tu lado. Comenzamos en la puerta, antes de la Misa, y luego entramos al inicio de la Misa. Todo avanza solo; solo escucha y observa.",
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
    en: "The Before Mass narration is in English for now; Spanish is being prepared.",
    es: "Por ahora, la narración de «Antes de la Misa» está en inglés; la versión en español está en preparación.",
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
  preview: { en: "preview", es: "vista previa" },
  narrator: { en: "Guide", es: "Guía" },
  priest: { en: "Priest", es: "Sacerdote" },
  aiVoice: { en: "simulated AI voice", es: "voz simulada por IA" },
  people: { en: "People", es: "Pueblo" },
  scene: { en: "Scene description", es: "Descripción de la escena" },
  loadingAudio: { en: "Loading audio…", es: "Cargando el audio…" },
  audioError: {
    en: "The audio couldn’t play. Check your sound and connection, then try again. The words are shown above.",
    es: "No se pudo reproducir el audio. Revisa el sonido y la conexión, e inténtalo de nuevo. Las palabras aparecen arriba.",
  },
  tryAgain: { en: "Play again", es: "Reproducir de nuevo" },
  continueWithout: { en: "Continue without audio", es: "Continuar sin audio" },
  inProgress: { en: "Illustration in progress", es: "Ilustración en preparación" },
  endTitle: { en: "The guided Mass pauses here for now", es: "La Misa guiada se detiene aquí por ahora" },
  endBody: {
    en: "You’ve walked from the church door to the Sign of the Cross. Next, the priest greets the people and they answer him. The rest of the guided Mass, from the Greeting to the dismissal, is still being prepared.",
    es: "Has recorrido el camino desde la puerta de la iglesia hasta la señal de la cruz. Luego, el sacerdote saluda al pueblo y el pueblo le responde. El resto de la Misa guiada, desde el saludo hasta la despedida, todavía se está preparando.",
  },
  restartExperience: { en: "Restart Experience", es: "Reiniciar la experiencia" },
  learnGreeting: { en: "Learn about the Greeting", es: "Aprende sobre el saludo" },
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

export default function Player({ language: saved }: { language: Language | null }) {
  const [state, dispatch] = useReducer(reducer, { status: "ready", index: 0, offset: 0, resumeTo: "playing", take: 0 });
  const [massLang, setMassLang] = useState<Spoken>("en"); // bilingual mode only: the language the priest speaks
  const [pos, setPos] = useState({ key: "", local: 0 }); // where we are in the current step, in seconds
  const [scrub, setScrub] = useState<number | null>(null); // timeline position while the thumb is dragged
  const [savedProgress] = useState(readProgress); // offered on the start screen
  const [buffering, setBuffering] = useState(false);
  const [about, setAbout] = useState<Step | "greeting" | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const loaded = useRef<string | null>(null); // which take and file the <audio> source belongs to
  const holdRef = useRef({ key: "", start: 0, elapsed: 0 }); // the hold of the current step, once started
  const ackRef = useRef({ take: -1, start: 0, elapsed: 0 }); // the people's answer, once started
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
  const { spans, total } = TIMELINES[spoken];
  const span = spans[index];
  const local = pos.key === stepKey ? pos.local : offset;
  const time = scrub ?? (status === "ended" ? total : span.start + local);

  // What the screen shows now (while dragging the timeline, it previews the place being dragged to).
  const view = scrub !== null ? resolveSeek(spoken, scrub) : { index, offset: local };
  const viewStep = STEPS[view.index];
  const sentence = viewStep.kind === "before" ? sentenceAt(viewStep, view.offset, spans[view.index].audio) : 0;
  const cue = viewStep.kind === "before" ? cuesAt(viewStep, sentence) : null;
  const scene: SceneKey = cue ? cue.scene : viewStep.kind === "mass" ? viewStep.beat.scene : "church-exterior";
  const moment = viewStep.kind === "mass" ? momentFor(viewStep.beat.moment) : null;
  const people = moment?.response?.find((line) => line.speaker === "people" && line.words);

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
      // Resuming a hold continues it; a jump into a timed scene starts that far in.
      const prior = holdRef.current.key === key ? holdRef.current.elapsed : file ? 0 : offset * 1000;
      holdRef.current = { key, start: performance.now() - prior, elapsed: prior };
      timer = window.setTimeout(() => dispatch({ type: "stepDone", take }), Math.max(0, holdOf(current) - prior));
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
  // the recording's time, then the hold, then the people's answer.
  useEffect(() => {
    if (status !== "playing" && status !== "acknowledging") return;
    const file = audioFor(STEPS[index], spoken);
    const key = `${take}:${file}`;
    const s = TIMELINES[spoken].spans[index];
    const id = window.setInterval(() => {
      const now = performance.now();
      let at: number;
      if (status === "acknowledging" && ackRef.current.take === take) at = s.audio + s.hold + (now - ackRef.current.start) / 1000;
      else if (holdRef.current.key === key) at = (file ? s.audio : 0) + (now - holdRef.current.start) / 1000;
      else at = audioRef.current?.currentTime ?? 0;
      setPos({ key, local: Math.min(at, s.end - s.start) });
    }, 250);
    return () => window.clearInterval(id);
  }, [status, index, take, spoken]);

  // While a recording plays, load the next one in the background so it starts without a delay. The
  // detached element is never played and is dropped right away; the browser keeps the downloaded file.
  // The single <audio> element below is the only thing that ever plays.
  useEffect(() => {
    if (status !== "playing" || index === LAST) return;
    const following = audioFor(STEPS[index + 1], spoken);
    if (!following) return;
    const warm = new Audio();
    warm.preload = "auto";
    warm.src = following;
    return () => warm.removeAttribute("src");
  }, [status, index, spoken]);

  // A short pause on the people's answer before the Mass continues. Pausing here and resuming continues it.
  useEffect(() => {
    if (status !== "acknowledging") return;
    const prior = ackRef.current.take === take ? ackRef.current.elapsed : 0;
    ackRef.current = { take, start: performance.now() - prior, elapsed: prior };
    const timer = window.setTimeout(() => dispatch({ type: "ackDone", take }), Math.max(0, ACKNOWLEDGE_MS - prior));
    return () => {
      window.clearTimeout(timer);
      ackRef.current = { ...ackRef.current, elapsed: performance.now() - ackRef.current.start };
    };
  }, [status, take]);

  // Save progress every 5 s while playing, and right away on pause; forget it at the end.
  useEffect(() => {
    if (status === "paused") saveProgress(latest.current.index, latest.current.local);
    if (status === "ended") clearProgress();
    if (status !== "playing" && status !== "acknowledging") return;
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

  function openAbout(what: Step | "greeting") {
    if (status === "playing" || status === "acknowledging") {
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
  const showPeople =
    viewStep === step && (status === "acknowledging" || (paused && state.resumeTo === "acknowledging"));
  const postureLabel = cue ? cue.posture : viewStep.kind === "mass" ? short(ui[viewStep.beat.posture.position]) : undefined;

  // Navigation by section of the Mass. Moment titles come from the content itself: BEFORE_MASS for Before
  // Mass and INTRODUCTORY_RITES for the Introductory Rites (moments not yet in Experience Mass are listed
  // as not yet available). Later sections have no content yet and are shown as not yet available.
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
          return { key: m.id, title: short(m.title), index: i >= 0 ? i : undefined, note: i >= 0 ? short(ui.preview) : undefined };
        }),
      };
    return { id: part.id, title: short(part.title), available: false, items: [] };
  });
  const partTitle = (s: Step) => short(MASS_PARTS.find((p) => p.id === partOf(s))!.title);
  const marks = spans.slice(1).map((s, i) => ({
    at: s.start,
    section: partOf(STEPS[i + 1]) !== partOf(STEPS[i]),
    label: `${partTitle(STEPS[i + 1])} · ${titleOf(STEPS[i + 1])}`,
  }));

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
            const image = isPlaceholder(key) ? BEFORE_MASS_IMAGES[key] : undefined;
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
              const placeholder = PLACEHOLDER_SCENES[key];
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
                alt={current ? (language === "es" ? SCENE_ALT[key].es : SCENE_ALT[key].en) : ""}
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
                {partTitle(STEPS[savedProgress.index])} · <span lang={STEPS[savedProgress.index].kind === "before" ? "en" : undefined}>{titleOf(STEPS[savedProgress.index])}</span> ·{" "}
                {formatTime(spans[savedProgress.index].start + savedProgress.offset)}
              </p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <button type="button" onClick={() => begin(resolveSeek(spoken, spans[savedProgress.index].start + savedProgress.offset))} className={`${primaryButton} flex-1`}>
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
            {partTitle(viewStep)}
            {viewStep.kind === "before" ? ` · ${viewStep.number} ${short(ui.of)} ${BEFORE_MASS.length}` : ` · ${short(ui.preview)}`}
            <span className="sr-only">: </span>
            <span lang={viewStep.kind === "before" ? "en" : undefined} className="block normal-case tracking-normal text-ink-soft">
              {titleOf(viewStep)}
            </span>
          </p>

          {viewStep.kind === "before" ? (
            // The narration is heard, so screen readers are not asked to read each caption as well;
            // the full text is available under Learn more.
            <div className="mt-3 min-h-28">
              <p className="text-xs font-medium tracking-wider text-gold-deep uppercase">{short(ui.narrator)}</p>
              <p lang="en" className="mt-1 font-serif text-2xl leading-snug font-semibold">
                {viewStep.sentences[sentence]}
              </p>
              {language !== "en" && <p className="mt-2 text-xs text-ink-soft">{t(ui.englishOnly)}</p>}
            </div>
          ) : (
            // What is said or seen now in the Mass. Announced politely as it changes.
            <div aria-live="polite" className="mt-3 min-h-28">
              {viewStep.beat.caption.speaker === "priest" ? (
                <p>
                  <span className="block text-xs font-medium tracking-wider text-gold-deep uppercase">
                    {short(ui.priest)} <span className="normal-case tracking-normal">({short(ui.aiVoice)})</span>
                  </span>
                  <span className="mt-1 block font-serif text-2xl leading-snug font-semibold">{t(viewStep.beat.caption.text)}</span>
                </p>
              ) : (
                <p className="leading-relaxed text-ink-soft italic">
                  <span className="sr-only">{t(ui.scene)}: </span>
                  {t(viewStep.beat.caption.text)}
                </p>
              )}
              {showPeople && people?.words && (
                <p className="mt-3">
                  <span className="block text-xs font-medium tracking-wider text-gold-deep uppercase">{short(ui.people)}</span>
                  <span className="mt-1 block font-serif text-2xl font-semibold text-burgundy">{t(people.words)}</span>
                </p>
              )}
              <p className="mt-2 text-sm text-ink-soft">{t(viewStep.beat.posture.note)}</p>
            </div>
          )}

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
          currentIndex={index}
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
          onPrevious={() => jump({ index: local > 3 || index === 0 ? index : index - 1, offset: 0 })}
          onNext={() => index < LAST && jump({ index: index + 1, offset: 0 })}
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
            <button type="button" onClick={() => openAbout("greeting")} className={secondaryButton}>
              <span>{t(ui.learnGreeting)}</span>
            </button>
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
          {about !== "greeting" && about.kind === "before" ? (
            <BeforeMassAbout step={about} t={t} />
          ) : (
            <MassAbout moment={momentFor(about === "greeting" ? "greeting" : about.beat.moment)} t={t} />
          )}
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

// "What's happening?" for a moment of the Mass itself: the existing explanation from content/mass.ts.
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
      {moment.deeper && (
        <details className="mt-4 rounded-2xl bg-cream/60 p-4">
          <summary className="cursor-pointer font-medium text-burgundy">{t(ui.deeper)}</summary>
          <p className="mt-3 leading-relaxed">{t(moment.deeper)}</p>
        </details>
      )}
    </>
  );
}
