"use client";

// Optional response practice for one Mass moment: the learner says or types the people's response
// and gets gentle feedback. Collapsed until opened; it never blocks navigation.
//
// Speaking uses the browser's speech recognition (SpeechRecognition / webkitSpeechRecognition).
// One short session per button press, never restarted automatically. The recognized text is shown
// in an editable box, and nothing is checked until the learner presses Check, so a wrong
// transcription is never graded. Typing always works, with or without speech recognition.
//
// Nothing is stored or sent by this app: answers live only in this component's state. The parent
// remounts it (via `key`) on every navigation and language change; unmounting aborts recognition.

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { Language } from "../language";
import type { MassMoment, Text } from "../../content/mass";

type Spoken = "en" | "es";
type Mode = "speak" | "type";
type Mic = "idle" | "starting" | "listening" | "processing";
type RecognitionError = "permission" | "noSpeech" | "noMic" | "network" | "other";
type Feedback = "correct" | "guidance" | "empty" | RecognitionError | null;

// The parts of the Web Speech recognition API used here (not in TypeScript's DOM types).
type Recognition = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onstart: (() => void) | null;
  onspeechend: (() => void) | null;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void;
  abort(): void;
};
type RecognitionClass = new () => Recognition;

function recognitionClass(): RecognitionClass | undefined {
  if (typeof window === "undefined") return undefined;
  const w = window as unknown as { SpeechRecognition?: RecognitionClass; webkitSpeechRecognition?: RecognitionClass };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition;
}

const RECOGNITION_LANG: Record<Spoken, string> = { en: "en-US", es: "es-MX" };

// Lowercase, without accents, punctuation, or extra spaces: "¡Amén!" → "amen".
function normalize(text: string) {
  return text
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/[^\p{L}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const ui = {
  open: { en: "Practice your response", es: "Practica tu respuesta" },
  intro: {
    en: "Optional. Say or type the people’s response. Take your time; this isn’t a test.",
    es: "Opcional. Di o escribe la respuesta del pueblo. Tómate tu tiempo; no es un examen.",
  },
  speak: { en: "Speak", es: "Hablar" },
  type: { en: "Type", es: "Escribir" },
  mode: { en: "Answer by", es: "Responder" },
  practiceLang: { en: "Practice language", es: "Idioma de práctica" },
  start: { en: "Start speaking", es: "Empezar a hablar" },
  cancel: { en: "Cancel", es: "Cancelar" },
  starting: {
    en: "Starting the microphone… If your browser asks, allow microphone access.",
    es: "Iniciando el micrófono… Si tu navegador lo pide, permite el acceso al micrófono.",
  },
  listening: { en: "Listening… say your response now.", es: "Escuchando… di tu respuesta ahora." },
  processing: { en: "Processing…", es: "Procesando…" },
  heard: {
    en: "Here’s what was heard. Correct it if needed, then press Check.",
    es: "Esto es lo que se escuchó. Corrígelo si hace falta y luego pulsa Comprobar.",
  },
  response: { en: "Your response", es: "Tu respuesta" },
  check: { en: "Check", es: "Comprobar" },
  retry: { en: "Try again", es: "Intentar de nuevo" },
  reveal: { en: "Show answer", es: "Mostrar la respuesta" },
  skip: { en: "Skip practice", es: "Omitir la práctica" },
  done: { en: "Close practice", es: "Cerrar la práctica" },
  answerIs: { en: "The people answer:", es: "El pueblo responde:" },
  correct: { en: "That’s right!", es: "¡Así es!" },
  guidance: {
    en: "Not quite, and that’s all right. Here’s a hint:",
    es: "Todavía no, y no pasa nada. Aquí tienes una pista:",
  },
  empty: { en: "Say or type your response first.", es: "Primero di o escribe tu respuesta." },
  notGraded: { en: "Your answer wasn’t checked.", es: "Tu respuesta no se comprobó." },
  permission: {
    en: "Microphone access is blocked. To speak, allow the microphone for this site in your browser settings, or type your answer.",
    es: "El acceso al micrófono está bloqueado. Para hablar, permite el micrófono para este sitio en la configuración del navegador, o escribe tu respuesta.",
  },
  noSpeech: {
    en: "No speech was heard. Try again a little closer to the microphone, or type your answer.",
    es: "No se escuchó ninguna voz. Inténtalo de nuevo un poco más cerca del micrófono, o escribe tu respuesta.",
  },
  noMic: {
    en: "No microphone was found. You can type your answer instead.",
    es: "No se encontró un micrófono. Puedes escribir tu respuesta.",
  },
  network: {
    en: "Your browser’s speech service couldn’t be reached. Check your connection and try again, or type your answer.",
    es: "No se pudo conectar con el servicio de voz de tu navegador. Revisa tu conexión e inténtalo de nuevo, o escribe tu respuesta.",
  },
  other: {
    en: "Speech recognition stopped unexpectedly. Try again, or type your answer.",
    es: "El reconocimiento de voz se detuvo inesperadamente. Inténtalo de nuevo, o escribe tu respuesta.",
  },
  unsupported: {
    en: "Speaking isn’t available in this browser. You can type your answer.",
    es: "Hablar no está disponible en este navegador. Puedes escribir tu respuesta.",
  },
  privacyApp: {
    en: "Catholic Companion does not record, save, or upload your voice or your answers.",
    es: "Catholic Companion no graba, guarda ni sube tu voz ni tus respuestas.",
  },
  privacyBrowser: {
    en: "Speech-to-text is done by your browser. Some browsers, such as Chrome, send your voice to their provider’s speech service to turn it into text, under that provider’s privacy policy.",
    es: "La conversión de voz a texto la hace tu navegador. Algunos navegadores, como Chrome, envían tu voz al servicio de voz de su proveedor para convertirla en texto, según la política de privacidad de ese proveedor.",
  },
};

const ERRORS: Record<string, RecognitionError> = {
  "not-allowed": "permission",
  "service-not-allowed": "permission",
  "no-speech": "noSpeech",
  "audio-capture": "noMic",
  network: "network",
};

export default function Practice({
  moment,
  language,
  t,
}: {
  moment: MassMoment;
  language: Language;
  t: (text: Text) => ReactNode;
}) {
  const people = moment.response?.find((line) => line.speaker === "people" && line.words);
  const Recognizer = recognitionClass();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>(Recognizer ? "speak" : "type");
  const [practiceLang, setPracticeLang] = useState<Spoken>("en"); // used in bilingual mode only
  const [answer, setAnswer] = useState("");
  const [mic, setMic] = useState<Mic>("idle");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [revealed, setRevealed] = useState(false);
  const recognizer = useRef<Recognition | null>(null);
  // Increments to ignore callbacks from a recognition session that was stopped or replaced.
  const session = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const startRef = useRef<HTMLButtonElement>(null);

  const spoken: Spoken = language === "bilingual" ? practiceLang : language;

  // Abort recognition when this panel goes away (navigation, language change, leaving).
  useEffect(() => {
    const current = session;
    return () => {
      current.current++;
      recognizer.current?.abort();
      recognizer.current = null;
    };
  }, []);

  if (!moment.practice || !people?.words) return null;
  const practice = moment.practice;
  const accepted = [normalize(people.words.en), normalize(people.words.es)];

  // Moves focus after React has rendered the element (it may be new or just re-enabled).
  const focusSoon = (ref: { current: HTMLElement | null }) => requestAnimationFrame(() => ref.current?.focus());

  function stopListening() {
    session.current++;
    recognizer.current?.abort();
    recognizer.current = null;
    setMic("idle");
  }

  function listen() {
    if (!Recognizer || recognizer.current) return; // one session at a time
    // Pause any narration so the microphone doesn't hear it.
    document.querySelectorAll("audio").forEach((audio) => audio.pause());
    const id = ++session.current;
    const current = () => id === session.current;
    let heard = false;
    let failed = false;

    const recognition = new Recognizer();
    recognition.lang = RECOGNITION_LANG[spoken];
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => current() && setMic("listening");
    recognition.onspeechend = () => current() && setMic("processing");
    recognition.onresult = (event) => {
      if (!current()) return;
      heard = true;
      setAnswer(event.results[0]?.[0]?.transcript.trim() ?? "");
    };
    recognition.onerror = (event) => {
      if (!current() || event.error === "aborted") return;
      failed = true;
      setFeedback(ERRORS[event.error] ?? "other");
    };
    recognition.onend = () => {
      if (!current()) return;
      recognizer.current = null;
      setMic("idle");
      if (heard) focusSoon(inputRef);
      else if (!failed) setFeedback("noSpeech");
    };

    recognizer.current = recognition;
    setAnswer("");
    setFeedback(null);
    setMic("starting"); // "listening" once the browser reports the microphone has started
    try {
      recognition.start();
    } catch {
      recognizer.current = null;
      setMic("idle");
      setFeedback("other");
    }
  }

  function check(event: FormEvent) {
    event.preventDefault();
    if (!answer.trim()) setFeedback("empty");
    else setFeedback(accepted.includes(normalize(answer)) ? "correct" : "guidance");
  }

  function chooseMode(next: Mode) {
    stopListening();
    setMode(next);
    setFeedback(null);
  }

  function choosePracticeLang(next: Spoken) {
    stopListening();
    setPracticeLang(next);
  }

  function retry() {
    stopListening();
    setAnswer("");
    setFeedback(null);
    setRevealed(false);
    focusSoon(mode === "speak" ? startRef : inputRef);
  }

  function close() {
    stopListening();
    setAnswer("");
    setFeedback(null);
    setRevealed(false);
    setOpen(false);
    toggleRef.current?.focus();
  }

  const listeningNow = mic !== "idle";
  const recognitionFailed = feedback !== null && !["correct", "guidance", "empty"].includes(feedback);

  return (
    <section aria-labelledby="try-heading" className="mt-6 rounded-2xl border-2 border-cream p-5">
      <h3 id="try-heading">
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="try-panel"
          onClick={() => (open ? close() : setOpen(true))}
          className="flex min-h-11 w-full items-center justify-between gap-3 text-left font-medium text-burgundy"
        >
          <span>{t(ui.open)}</span>
          <span aria-hidden="true" className="text-xl">
            {open ? "−" : "+"}
          </span>
        </button>
      </h3>

      {open && (
        <div id="try-panel" className="mt-3">
          <p className="text-sm text-ink-soft">{t(ui.intro)}</p>
          <p className="mt-3 leading-relaxed">{t(practice.prompt)}</p>

          {Recognizer ? (
            <div role="group" aria-label="Answer by · Responder" className="mt-4 flex items-center gap-2 text-sm">
              <span aria-hidden="true" className="text-ink-soft">
                {t(ui.mode)}:
              </span>
              {(["speak", "type"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={mode === option}
                  onClick={() => chooseMode(option)}
                  className={`min-h-10 rounded-full px-4 font-medium ${
                    mode === option ? "bg-burgundy text-ivory" : "bg-cream text-ink-soft hover:text-ink"
                  }`}
                >
                  {t(ui[option])}
                </button>
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-xl bg-cream/60 px-4 py-3 text-sm">{t(ui.unsupported)}</p>
          )}

          {mode === "speak" && language === "bilingual" && (
            <div
              role="group"
              aria-label="Practice language · Idioma de práctica"
              className="mt-3 flex items-center gap-2 text-sm"
            >
              <span aria-hidden="true" className="text-ink-soft">
                {t(ui.practiceLang)}:
              </span>
              {(["en", "es"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={practiceLang === option}
                  onClick={() => choosePracticeLang(option)}
                  className={`min-h-10 rounded-full px-3 font-medium ${
                    practiceLang === option ? "bg-burgundy text-ivory" : "bg-cream text-ink-soft hover:text-ink"
                  }`}
                >
                  {option === "en" ? "English" : "Español"}
                </button>
              ))}
            </div>
          )}

          {mode === "speak" && (
            <div className="mt-4">
              <div className="flex flex-wrap items-center gap-2">
                {listeningNow ? (
                  <button
                    type="button"
                    onClick={() => {
                      stopListening();
                      focusSoon(startRef);
                    }}
                    className={buttonClass}
                  >
                    <span aria-hidden="true">■ </span>
                    <span>{t(ui.cancel)}</span>
                  </button>
                ) : (
                  <button ref={startRef} type="button" onClick={listen} className={buttonClass}>
                    <span aria-hidden="true">🎙 </span>
                    <span>{t(ui.start)}</span>
                  </button>
                )}
              </div>
              <p role="status" className="mt-2 min-h-5 text-sm font-medium text-burgundy">
                {mic === "listening" && (
                  <>
                    <span aria-hidden="true">● </span>
                    {t(ui.listening)}
                  </>
                )}
                {mic === "starting" && t(ui.starting)}
                {mic === "processing" && t(ui.processing)}
                {mic === "idle" && answer && !feedback && t(ui.heard)}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t(ui.privacyApp)}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t(ui.privacyBrowser)}</p>
            </div>
          )}

          {(mode === "type" || answer) && (
            <form onSubmit={check} className="mt-4">
              <label htmlFor="practice-answer" className="text-sm font-medium">
                {t(ui.response)}
              </label>
              <div className="mt-1 flex gap-2">
                <input
                  ref={inputRef}
                  id="practice-answer"
                  type="text"
                  value={answer}
                  onChange={(event) => {
                    setAnswer(event.target.value);
                    setFeedback(null);
                  }}
                  disabled={listeningNow}
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  lang={spoken}
                  className="min-h-11 min-w-0 flex-1 rounded-xl border-2 border-cream bg-white px-3 text-base"
                />
                <button type="submit" disabled={listeningNow} className={buttonClass}>
                  {t(ui.check)}
                </button>
              </div>
            </form>
          )}

          <div role="status" className="mt-4">
            {feedback === "correct" && (
              <div className="rounded-xl bg-burgundy/5 px-4 py-3 leading-relaxed">
                <p className="font-medium text-burgundy">
                  <span aria-hidden="true">✓ </span>
                  {t(ui.correct)}
                </p>
                <p className="mt-1">{t(practice.success)}</p>
              </div>
            )}
            {feedback === "guidance" && (
              <div className="rounded-xl bg-cream/60 px-4 py-3 leading-relaxed">
                <p className="font-medium">{t(ui.guidance)}</p>
                <p className="mt-1">{t(practice.hint)}</p>
              </div>
            )}
            {feedback === "empty" && <p className="text-sm">{t(ui.empty)}</p>}
            {recognitionFailed && (
              <div className="rounded-xl bg-cream/60 px-4 py-3 text-sm leading-relaxed">
                <p>{t(ui[feedback as RecognitionError])}</p>
                <p className="mt-1 text-ink-soft">{t(ui.notGraded)}</p>
              </div>
            )}
          </div>

          {revealed && (
            <div className="mt-4 rounded-xl border border-gold px-4 py-3">
              <p className="text-xs font-medium tracking-wider text-gold-deep uppercase">{t(ui.answerIs)}</p>
              <p className="mt-1 font-serif text-2xl font-semibold">{t(people.words)}</p>
              <p className="text-sm text-ink-soft">{t(people.meaning)}</p>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-2">
            {feedback && feedback !== "correct" && (
              <button type="button" onClick={retry} className={buttonClass}>
                <span aria-hidden="true">↺ </span>
                <span>{t(ui.retry)}</span>
              </button>
            )}
            {recognitionFailed && mode === "speak" && (
              <button type="button" onClick={() => chooseMode("type")} className={buttonClass}>
                {t(ui.type)}
              </button>
            )}
            {!revealed && feedback !== "correct" && (
              <button type="button" onClick={() => setRevealed(true)} className={buttonClass}>
                {t(ui.reveal)}
              </button>
            )}
            <button type="button" onClick={close} className={buttonClass}>
              {t(feedback === "correct" ? ui.done : ui.skip)}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const buttonClass =
  "inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-cream bg-white/60 px-4 text-sm font-medium text-burgundy hover:border-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-cream";
