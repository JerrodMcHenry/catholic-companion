"use client";

// Optional prerecorded narration for one Mass moment, played with a native <audio> element.
// Nothing downloads or plays until the user presses a button.
//
// - "Listen to explanation" plays the moment's explanation and posture note.
// - "Listen for your cue" plays the moment's listening cue.
// Everything spoken is already visible as text on the page.
//
// Recordings live in public/audio/<narrator>/<moment id>-<explanation|cue>.mp3 and are made by
// scripts/generate-narration.mjs from the text in content/mass.ts. The parent remounts this
// component (via `key`) whenever the moment, language, or position changes, and unmounting
// stops playback.

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Language } from "../language";
import type { MassMoment, Text } from "../../content/mass";

type Track = "explanation" | "cue";
type Status = "idle" | "loading" | "playing" | "paused" | "finished" | "error";
type Spoken = "en" | "es";

// The one narrator recorded for each language.
const AUDIO_DIR: Record<Spoken, string> = { en: "/audio/en-US-marin", es: "/audio/es-MX-cedar" };

const ui = {
  heading: { en: "Listen", es: "Escuchar" },
  note: {
    en: "Narrated with an AI-generated voice. This explains the Mass; it is not a recording of the priest or of the official prayers.",
    es: "Narrado con una voz generada por inteligencia artificial. Explica la Misa; no es una grabación del sacerdote ni de las oraciones oficiales.",
  },
  explanation: { en: "Listen to explanation", es: "Escuchar la explicación" },
  cue: { en: "Listen for your cue", es: "Escuchar tu señal" },
  pause: { en: "Pause", es: "Pausa" },
  resume: { en: "Resume", es: "Continuar" },
  replay: { en: "Replay", es: "Repetir" },
  narration: { en: "Narration language", es: "Idioma de la narración" },
  loading: { en: "Loading audio…", es: "Cargando el audio…" },
  playing: {
    explanation: { en: "Playing the explanation…", es: "Reproduciendo la explicación…" },
    cue: { en: "Playing your cue…", es: "Reproduciendo tu señal…" },
  },
  paused: { en: "Paused.", es: "En pausa." },
  finished: { en: "Finished.", es: "Terminado." },
  error: {
    en: "The recording couldn’t be played. Check your connection and try again. The same words are shown on this page.",
    es: "No se pudo reproducir la grabación. Revisa tu conexión e inténtalo de nuevo. Las mismas palabras aparecen en esta página.",
  },
};

export default function Listen({
  moment,
  language,
  t,
}: {
  moment: MassMoment;
  language: Language;
  t: (text: Text) => ReactNode;
}) {
  const audio = useRef<HTMLAudioElement>(null);
  const [narrationLang, setNarrationLang] = useState<Spoken>("en"); // used in bilingual mode only
  const [track, setTrack] = useState<Track | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const spoken: Spoken = language === "bilingual" ? narrationLang : language;

  // Stop when the page is hidden (including pages kept in the back/forward cache) or this panel goes away.
  useEffect(() => {
    const element = audio.current;
    const stop = () => element?.pause();
    window.addEventListener("pagehide", stop);
    return () => {
      window.removeEventListener("pagehide", stop);
      stop();
    };
  }, []);

  // Plays a track. A new track starts at the beginning; `restart` rewinds the current one.
  function play(which: Track, restart: boolean) {
    const element = audio.current;
    if (!element) return;
    const src = `${AUDIO_DIR[spoken]}/${moment.id}-${which}.mp3`;
    if (element.getAttribute("src") !== src) element.src = src;
    else if (restart) element.currentTime = 0;
    setTrack(which);
    setStatus("loading");
    element.play().catch((error: DOMException) => {
      // AbortError means playback was paused or replaced before it started.
      if (error.name !== "AbortError") setStatus("error");
    });
  }

  function pause() {
    audio.current?.pause();
    setStatus("paused");
  }

  function chooseNarration(next: Spoken) {
    audio.current?.pause();
    setNarrationLang(next);
    setTrack(null);
    setStatus("idle");
  }

  // The button for one track: Listen → Pause → Resume.
  function trackButton(which: Track, label: Text) {
    const active = track === which;
    const busy = active && (status === "playing" || status === "loading");
    const onClick = busy ? pause : () => play(which, !(active && status === "paused"));
    const text = busy ? ui.pause : active && status === "paused" ? ui.resume : label;
    return (
      <button type="button" onClick={onClick} className={`${buttonClass} ${active ? "border-burgundy" : ""}`}>
        <span aria-hidden="true">{busy ? "❚❚ " : "▶ "}</span>
        <span>{t(text)}</span>
      </button>
    );
  }

  return (
    <section aria-labelledby="listen-heading" className="mt-4 rounded-2xl border-2 border-cream p-4">
      <h3 id="listen-heading" className="text-sm font-medium tracking-wider text-burgundy uppercase">
        {t(ui.heading)}
      </h3>
      <p className="mt-1 text-xs leading-relaxed text-ink-soft">{t(ui.note)}</p>

      {language === "bilingual" && (
        <div role="group" aria-label="Narration language · Idioma de la narración" className="mt-3 flex items-center gap-2 text-sm">
          <span aria-hidden="true" className="text-ink-soft">
            {t(ui.narration)}:
          </span>
          {(["en", "es"] as const).map((option) => (
            <button
              key={option}
              type="button"
              aria-pressed={narrationLang === option}
              onClick={() => chooseNarration(option)}
              className={`min-h-10 rounded-full px-3 font-medium ${
                narrationLang === option ? "bg-burgundy text-ivory" : "bg-cream text-ink-soft hover:text-ink"
              }`}
            >
              {option === "en" ? "English" : "Español"}
            </button>
          ))}
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2">
        {trackButton("explanation", ui.explanation)}
        {moment.cue && trackButton("cue", ui.cue)}
        <button type="button" disabled={!track} onClick={() => track && play(track, true)} className={buttonClass}>
          <span aria-hidden="true">↺ </span>
          <span>{t(ui.replay)}</span>
        </button>
      </div>

      <audio
        ref={audio}
        preload="none"
        onPlaying={() => setStatus("playing")}
        onWaiting={() => setStatus((s) => (s === "playing" ? "loading" : s))}
        // Paused outside the app (lock screen, headphone controls, another app); the end is handled by onEnded.
        onPause={(event) =>
          !event.currentTarget.ended && setStatus((s) => (s === "playing" || s === "loading" ? "paused" : s))
        }
        onEnded={() => setStatus("finished")}
        onError={() => setStatus("error")}
      />

      <p role="status" className="mt-2 min-h-5 text-sm text-ink-soft">
        {status === "loading" && t(ui.loading)}
        {status === "playing" && track && t(ui.playing[track])}
        {status === "paused" && t(ui.paused)}
        {status === "finished" && t(ui.finished)}
        {status === "error" && t(ui.error)}
      </p>
    </section>
  );
}

const buttonClass =
  "inline-flex min-h-11 items-center gap-1 rounded-full border-2 border-cream bg-white/60 px-4 text-sm font-medium text-burgundy hover:border-gold disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-cream";
