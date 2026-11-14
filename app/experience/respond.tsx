"use client";

// The people's response in Experience Mass: shown when the Mass waits for the learner. They speak
// or type, and a correct answer lets the Mass continue by itself. It never times out.
//
// Reuses the speech helpers of app/simulation/practice.tsx (normalizing, recognizer lookup, error
// mapping). The microphone starts only when the learner presses Speak: one short session, never
// restarted automatically. Only the final result is used (interim results are off). If it exactly
// matches the expected words after normalizing, the Mass continues; otherwise it stays in the box
// to edit, and is never marked wrong. Typed answers are checked only on Enter or the Respond button.
//
// The player unmounts this component on pause, restart, language change, and when the page is
// hidden; unmounting aborts recognition, and a session counter ignores any late callbacks.
// Nothing is stored or sent by this app. The draft lives in the player's memory only so a pause
// doesn't erase what was typed.

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ERRORS,
  RECOGNITION_LANG,
  normalize,
  recognitionClass,
  type Recognition,
  type RecognitionError,
} from "../simulation/practice";
import type { MassMoment, Text } from "../../content/mass";

type Mic = "idle" | "starting" | "listening" | "processing";
type Notice = "heard" | "notYet" | "empty" | RecognitionError | null;

const ui = {
  heading: { en: "Your response", es: "Tu respuesta" },
  prompt: {
    en: "The priest has finished. Answer together with everyone.",
    es: "El sacerdote ha terminado. Responde junto con todos.",
  },
  label: { en: "Say or type your response", es: "Di o escribe tu respuesta" },
  respond: { en: "Respond", es: "Responder" },
  speak: { en: "Speak", es: "Hablar" },
  cancel: { en: "Cancel", es: "Cancelar" },
  starting: {
    en: "Starting the microphone… If your browser asks, allow microphone access.",
    es: "Iniciando el micrófono… Si tu navegador lo pide, permite el acceso al micrófono.",
  },
  listening: { en: "Listening… say your response now.", es: "Escuchando… di tu respuesta ahora." },
  processing: { en: "Processing…", es: "Procesando…" },
  heard: {
    en: "Here’s what was heard. Edit it if needed, then press Respond.",
    es: "Esto es lo que se escuchó. Corrígelo si hace falta y luego pulsa Responder.",
  },
  notYet: {
    en: "Not quite yet, and that’s all right. Edit your answer, or try the hint.",
    es: "Todavía no, y no pasa nada. Corrige tu respuesta o mira la pista.",
  },
  empty: { en: "Say or type your response first.", es: "Primero di o escribe tu respuesta." },
  permission: {
    en: "Microphone access is blocked. Allow it for this site in your browser settings, or type your answer.",
    es: "El acceso al micrófono está bloqueado. Permítelo para este sitio en la configuración del navegador, o escribe tu respuesta.",
  },
  noSpeech: {
    en: "No speech was heard. Try again, or type your answer.",
    es: "No se escuchó ninguna voz. Inténtalo de nuevo, o escribe tu respuesta.",
  },
  noMic: { en: "No microphone was found. You can type your answer.", es: "No se encontró un micrófono. Puedes escribir tu respuesta." },
  network: {
    en: "Your browser’s speech service couldn’t be reached. Try again, or type your answer.",
    es: "No se pudo conectar con el servicio de voz de tu navegador. Inténtalo de nuevo, o escribe tu respuesta.",
  },
  other: {
    en: "Speech recognition stopped unexpectedly. Try again, or type your answer.",
    es: "El reconocimiento de voz se detuvo inesperadamente. Inténtalo de nuevo, o escribe tu respuesta.",
  },
  hint: { en: "Hint", es: "Pista" },
  reveal: { en: "Show answer", es: "Mostrar la respuesta" },
  skip: { en: "Continue without answering", es: "Continuar sin responder" },
  answerIs: { en: "The people answer:", es: "El pueblo responde:" },
  privacy: {
    en: "Catholic Companion doesn’t record or save your voice or answers. Speech-to-text is done by your browser; some browsers, such as Chrome, send your voice to their provider’s speech service.",
    es: "Catholic Companion no graba ni guarda tu voz ni tus respuestas. La conversión de voz a texto la hace tu navegador; algunos, como Chrome, envían tu voz al servicio de voz de su proveedor.",
  },
};

const buttonClass =
  "inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-cream bg-white/60 px-4 text-sm font-medium text-burgundy hover:border-gold disabled:cursor-not-allowed disabled:opacity-40";

export default function Respond({
  moment,
  words,
  meaning,
  spoken,
  t,
  draft,
  onDraft,
  onAnswered,
}: {
  moment: MassMoment;
  words: Text; // the people's expected words
  meaning: Text;
  spoken: "en" | "es";
  t: (text: Text) => ReactNode;
  draft: string;
  onDraft: (value: string) => void;
  onAnswered: () => void;
}) {
  const Recognizer = recognitionClass();
  const [mic, setMic] = useState<Mic>("idle");
  const [notice, setNotice] = useState<Notice>(null);
  const [hint, setHint] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const recognizer = useRef<Recognition | null>(null);
  const session = useRef(0); // increments to ignore callbacks from a stopped session
  const answered = useRef(false); // one answer only, however fast the presses
  const headingRef = useRef<HTMLHeadingElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const accepted = [normalize(words.en), normalize(words.es)];
  const matches = (text: string) => accepted.includes(normalize(text));

  // It's the learner's turn: move focus here (not to the microphone, which never starts by itself).
  useEffect(() => {
    const heading = headingRef.current;
    heading?.focus({ preventScroll: true });
    heading?.parentElement?.scrollIntoView({ block: "nearest" }); // the whole bar, not just its heading
  }, []);

  // Abort recognition when this goes away (pause, restart, language change, hidden page, leaving).
  useEffect(() => {
    const current = session;
    return () => {
      current.current++;
      recognizer.current?.abort();
      recognizer.current = null;
    };
  }, []);

  function stopListening() {
    session.current++;
    recognizer.current?.abort();
    recognizer.current = null;
    setMic("idle");
  }

  function finish() {
    if (answered.current) return;
    answered.current = true;
    stopListening();
    onAnswered();
  }

  function listen() {
    if (!Recognizer || recognizer.current || answered.current) return; // one session at a time
    const id = ++session.current;
    const current = () => id === session.current;
    let heard = false;
    let failed = false;

    const recognition = new Recognizer();
    recognition.lang = RECOGNITION_LANG[spoken];
    recognition.continuous = false;
    recognition.interimResults = false; // final results only
    recognition.maxAlternatives = 1;
    recognition.onstart = () => current() && setMic("listening");
    recognition.onspeechend = () => current() && setMic("processing");
    recognition.onresult = (event) => {
      if (!current()) return;
      heard = true;
      const transcript = event.results[0]?.[0]?.transcript.trim() ?? "";
      onDraft(transcript);
      if (matches(transcript)) finish();
      else setNotice("heard");
    };
    recognition.onerror = (event) => {
      if (!current() || event.error === "aborted") return;
      failed = true;
      setNotice(ERRORS[event.error] ?? "other");
    };
    recognition.onend = () => {
      if (!current()) return;
      recognizer.current = null;
      setMic("idle");
      if (heard) requestAnimationFrame(() => inputRef.current?.focus());
      else if (!failed) setNotice("noSpeech");
    };

    recognizer.current = recognition;
    setNotice(null);
    setMic("starting");
    try {
      recognition.start();
    } catch {
      recognizer.current = null;
      setMic("idle");
      setNotice("other");
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (mic !== "idle") return;
    if (!draft.trim()) setNotice("empty");
    else if (matches(draft)) finish();
    else setNotice("notYet");
  }

  const listening = mic !== "idle";

  return (
    <section aria-labelledby="respond-heading" className="mt-3 rounded-2xl border-2 border-gold bg-white/60 p-4">
      <h2 id="respond-heading" ref={headingRef} tabIndex={-1} className="font-medium text-burgundy">
        {t(ui.heading)}
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-ink-soft">{t(ui.prompt)}</p>

      <form onSubmit={submit} className="mt-3">
        <label htmlFor="respond-answer" className="sr-only">
          {t(ui.label)}
        </label>
        {/* On phones the box has its own row, with Speak and Respond beneath it. */}
        <div className="flex flex-wrap gap-2 sm:flex-nowrap">
          <input
            ref={inputRef}
            id="respond-answer"
            type="text"
            value={draft}
            placeholder={spoken === "es" ? "Escribe aquí…" : "Type here…"}
            onChange={(event) => {
              onDraft(event.target.value);
              setNotice(null);
            }}
            // Enter that confirms an IME composition must not submit.
            onKeyDown={(event) => event.key === "Enter" && event.nativeEvent.isComposing && event.preventDefault()}
            disabled={listening}
            autoComplete="off"
            autoCapitalize="none"
            spellCheck={false}
            lang={spoken}
            className="min-h-11 w-full min-w-0 rounded-xl border-2 border-cream bg-white px-3 text-base sm:w-auto sm:flex-1"
          />
          {Recognizer &&
            (listening ? (
              <button type="button" onClick={stopListening} className={buttonClass}>
                <span aria-hidden="true">■ </span>
                <span>{t(ui.cancel)}</span>
              </button>
            ) : (
              <button type="button" onClick={listen} className={buttonClass}>
                <span aria-hidden="true">🎙 </span>
                <span>{t(ui.speak)}</span>
              </button>
            ))}
          <button type="submit" disabled={listening} className={buttonClass}>
            <span>{t(ui.respond)}</span>
          </button>
        </div>
      </form>

      <p role="status" className="mt-2 min-h-5 text-sm leading-relaxed">
        {mic === "starting" && t(ui.starting)}
        {mic === "listening" && (
          <span className="font-medium text-burgundy">
            <span aria-hidden="true">● </span>
            {t(ui.listening)}
          </span>
        )}
        {mic === "processing" && t(ui.processing)}
        {!listening && notice && t(ui[notice])}
      </p>

      {hint && moment.practice && (
        <p className="mt-2 rounded-xl bg-cream/60 px-4 py-3 text-sm leading-relaxed">{t(moment.practice.hint)}</p>
      )}
      {revealed && (
        <div className="mt-2 rounded-xl border border-gold px-4 py-3">
          <p className="text-xs font-medium tracking-wider text-gold-deep uppercase">{t(ui.answerIs)}</p>
          <p className="mt-1 font-serif text-2xl font-semibold">{t(words)}</p>
          <p className="text-sm text-ink-soft">{t(meaning)}</p>
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {!hint && moment.practice && !revealed && (
          <button type="button" onClick={() => setHint(true)} className={buttonClass}>
            <span>{t(ui.hint)}</span>
          </button>
        )}
        {!revealed && (
          <button type="button" onClick={() => setRevealed(true)} className={buttonClass}>
            <span>{t(ui.reveal)}</span>
          </button>
        )}
        <button type="button" onClick={finish} className={buttonClass}>
          <span>{t(ui.skip)}</span>
        </button>
      </div>

      {Recognizer && (
        <p className="mt-3 text-xs leading-relaxed text-ink-soft">
          {t(ui.privacy)}
        </p>
      )}
    </section>
  );
}
