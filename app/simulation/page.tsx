"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { readLanguage, saveLanguage, subscribeToLanguage, type Language } from "../language";
import Listen from "./listen";
import Practice from "./practice";
import {
  INTRODUCTORY_RITES,
  SCENE_ALT,
  SOURCES,
  TYPICAL_PATH,
  type MomentId,
  type ResponseLine,
  type Text,
} from "../../content/mass";

// Interface wording. Liturgical content lives in content/mass.ts.
const ui = {
  heading: { en: "Your First Mass", es: "Tu primera Misa" },
  part: { en: "The Introductory Rites", es: "Los Ritos iniciales" },
  loading: { en: "Loading your guide…", es: "Cargando tu guía…" },
  when: { en: "When this happens", es: "Cuándo ocurre" },
  posture: { en: "Posture", es: "Postura" },
  practice: { en: "Practice the responses", es: "Practica las respuestas" },
  cue: { en: "Your cue", es: "Tu señal" },
  placeholder: {
    en: "Official text not yet included. What is said:",
    es: "Texto oficial aún no incluido. Lo que se dice:",
  },
  deeper: { en: "Go deeper", es: "Profundiza" },
  variations: { en: "How this can vary", es: "Cómo puede variar" },
  sources: { en: "Sources", es: "Fuentes" },
  back: { en: "Back", es: "Atrás" },
  next: { en: "Next", es: "Siguiente" },
  finish: { en: "Finish", es: "Terminar" },
  startOver: { en: "Start over", es: "Empezar de nuevo" },
  confirmRestart: { en: "Start again from the beginning?", es: "¿Empezar otra vez desde el principio?" },
  confirmYes: { en: "Yes, start over", es: "Sí, empezar de nuevo" },
  cancel: { en: "Cancel", es: "Cancelar" },
  completeTitle: {
    en: "You’ve walked through the Introductory Rites",
    es: "Has recorrido los Ritos iniciales",
  },
  completeBody: {
    en: "The people are gathered and prepared. Next at Mass comes the Liturgy of the Word, when everyone sits to listen to the Scriptures. That part of the guide is still being prepared.",
    es: "El pueblo está reunido y preparado. Lo siguiente en la Misa es la Liturgia de la Palabra, cuando todos se sientan para escuchar las Escrituras. Esa parte de la guía todavía se está preparando.",
  },
  returnHome: { en: "Return home", es: "Volver al inicio" },
  speaker: {
    priest: { en: "Priest", es: "Sacerdote" },
    people: { en: "People", es: "Pueblo" },
    all: { en: "All", es: "Todos" },
  },
  stand: { en: "Stand", es: "De pie" },
  sit: { en: "Sit", es: "Sentados" },
  kneel: { en: "Kneel", es: "De rodillas" },
};

const LANGUAGE_BUTTONS: { value: Language; label: string }[] = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "bilingual", label: "EN + ES" },
];

// Shows English, Spanish, or both (English first, Spanish beneath).
function Bilingual({ language, text }: { language: Language; text: Text }) {
  if (language === "es") return <span lang="es">{text.es}</span>;
  if (language === "en" || text.en === text.es) return <>{text.en}</>;
  return (
    <>
      {text.en}
      <span lang="es" className="mt-1 block opacity-75">
        {text.es}
      </span>
    </>
  );
}

// Progress: only the current moment (or "complete") is saved.
type Position = MomentId | "complete";
const PROGRESS_KEY = "catholic-companion:introductory-rites";

function readProgress(): Position {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored === "complete" || INTRODUCTORY_RITES.some((m) => m.id === stored)) {
      return stored as Position;
    }
  } catch {
    // Storage unavailable: start at the beginning.
  }
  return INTRODUCTORY_RITES[0].id;
}

function saveProgress(position: Position) {
  try {
    localStorage.setItem(PROGRESS_KEY, position);
  } catch {
    // If storage is unavailable, progress simply isn't remembered.
  }
}

const primaryButton =
  "inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-burgundy px-6 font-medium text-ivory hover:bg-burgundy-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-burgundy";
const secondaryButton =
  "inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-burgundy px-6 font-medium text-burgundy hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent";

export default function SimulationPage() {
  // undefined = not yet read (server render); null = no preference saved.
  const language = useSyncExternalStore(subscribeToLanguage, readLanguage, () => undefined);

  if (language === undefined) {
    return (
      <div role="status" className="text-center">
        <p className="font-serif text-4xl font-semibold">
          Your First Mass
          <span lang="es" className="mt-1 block text-2xl opacity-75">
            Tu primera Misa
          </span>
        </p>
        <div className="mt-8 flex aspect-[3/2] animate-pulse motion-reduce:animate-none flex-col items-center justify-center rounded-3xl bg-cream/70">
          <span aria-hidden="true" className="font-serif text-5xl text-gold">
            ✠
          </span>
          <p className="mt-4 text-ink-soft">
            Loading your guide… · <span lang="es">Cargando tu guía…</span>
          </p>
        </div>
      </div>
    );
  }

  if (language === null) {
    return (
      <div className="text-center">
        <h1 className="font-serif text-4xl font-semibold">Choose a language first</h1>
        <p lang="es" className="mt-2 text-lg text-ink-soft">
          Primero elige un idioma
        </p>
        <Link
          href="/onboarding"
          className="mt-8 inline-flex min-h-14 items-center rounded-full bg-burgundy px-8 text-lg font-medium text-ivory hover:bg-burgundy-deep"
        >
          Choose language · Elegir idioma
        </Link>
      </div>
    );
  }

  return <Player language={language} />;
}

// Only rendered in the browser (after the language is read), so it can read progress directly.
function Player({ language }: { language: Language }) {
  const [position, setPosition] = useState<Position>(readProgress);
  const [confirmingRestart, setConfirmingRestart] = useState(false);
  // Counts navigations. Used as part of the audio panel's key so any navigation (including a
  // restart while already on step 1) remounts the panel, which stops speech.
  const [visit, setVisit] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const t = (text: Text) => <Bilingual language={language} text={text} />;

  // Moves to another moment, saves it, and moves focus to the new heading.
  function goTo(next: Position) {
    flushSync(() => {
      setPosition(next);
      setConfirmingRestart(false);
      setVisit((v) => v + 1);
    });
    saveProgress(next);
    headingRef.current?.focus();
  }

  const total = INTRODUCTORY_RITES.length;
  const index = INTRODUCTORY_RITES.findIndex((m) => m.id === position);
  const moment = INTRODUCTORY_RITES[index]; // undefined when complete
  const isLast = index === total - 1;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="group" aria-label="Language · Idioma" className="flex rounded-full bg-cream p-1">
          {LANGUAGE_BUTTONS.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-pressed={language === option.value}
              onClick={() => saveLanguage(option.value)}
              className={`min-h-10 rounded-full px-3 text-sm font-medium ${
                language === option.value ? "bg-burgundy text-ivory" : "text-ink-soft hover:text-ink"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        {moment && (
          <button
            type="button"
            onClick={() => setConfirmingRestart(true)}
            className="min-h-10 rounded px-2 text-sm font-medium text-burgundy underline underline-offset-4"
          >
            {t(ui.startOver)}
          </button>
        )}
      </div>

      {confirmingRestart && (
        <div role="alert" className="mt-4 rounded-2xl border-2 border-gold bg-cream p-4">
          <p className="font-medium">{t(ui.confirmRestart)}</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={() => goTo(INTRODUCTORY_RITES[0].id)} className={primaryButton}>
              <span>{t(ui.confirmYes)}</span>
            </button>
            <button type="button" onClick={() => setConfirmingRestart(false)} className={secondaryButton}>
              <span>{t(ui.cancel)}</span>
            </button>
          </div>
        </div>
      )}

      <p className="mt-8 text-sm font-medium tracking-[0.15em] text-gold-deep uppercase">{t(ui.heading)}</p>
      <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">{t(ui.part)}</h1>

      {moment ? (
        <article className="mt-6">
          <p className="text-sm leading-relaxed text-ink-soft">{t(TYPICAL_PATH)}</p>

          <p className="mt-6 text-sm font-medium text-ink-soft">
            {t({ en: `Step ${moment.order} of ${total}`, es: `Paso ${moment.order} de ${total}` })}
          </p>
          <progress
            value={moment.order}
            max={total}
            aria-label="Progress · Progreso"
            className="mt-2 h-2 w-full appearance-none overflow-hidden rounded-full bg-cream [&::-moz-progress-bar]:bg-burgundy [&::-webkit-progress-bar]:bg-cream [&::-webkit-progress-value]:bg-burgundy"
          />

          {/* Fixed 3:2 frame (matching the 1536×1024 scenes) so the page never shifts while the image loads. */}
          <figure className="mt-6 overflow-hidden rounded-3xl bg-cream">
            <div className="relative aspect-[3/2]">
              <Image
                src={`/scenes/${moment.illustration.id}.webp`}
                alt={language === "es" ? SCENE_ALT[moment.illustration.id].es : SCENE_ALT[moment.illustration.id].en}
                fill
                sizes="(min-width: 672px) 632px, calc(100vw - 40px)"
                loading="eager"
                className="object-cover"
              />
            </div>
            <figcaption className="px-4 py-3 text-center text-sm text-ink-soft">
              {t(moment.illustration.caption)}
            </figcaption>
          </figure>

          <h2 ref={headingRef} tabIndex={-1} className="mt-8 font-serif text-3xl font-semibold">
            {t(moment.title)}
          </h2>

          <Listen key={`${moment.id}-${language}-${visit}`} moment={moment} language={language} t={t} />

          {moment.condition && (
            <p className="mt-3 rounded-xl border-l-4 border-gold bg-cream/60 px-4 py-3 text-sm leading-relaxed">
              <strong className="font-medium">{t(ui.when)}: </strong>
              {t(moment.condition)}
            </p>
          )}

          <p className="mt-4 text-lg leading-relaxed">{t(moment.explanation)}</p>

          <section aria-labelledby="posture-heading" className="mt-6 rounded-2xl bg-burgundy/5 p-5">
            <h3 id="posture-heading" className="text-sm font-medium tracking-wider text-burgundy uppercase">
              {t(ui.posture)}
            </h3>
            <p className="mt-1 font-serif text-2xl font-semibold">{t(ui[moment.posture.position])}</p>
            <p className="mt-1 leading-relaxed text-ink-soft">{t(moment.posture.note)}</p>
          </section>

          {moment.response && (
            <section aria-labelledby="practice-heading" className="mt-6 rounded-2xl border-2 border-cream p-5">
              <h3 id="practice-heading" className="text-sm font-medium tracking-wider text-burgundy uppercase">
                {t(ui.practice)}
              </h3>
              {moment.cue && (
                <p className="mt-3 rounded-xl bg-cream/60 px-4 py-3 leading-relaxed">
                  <strong className="block text-xs font-medium tracking-wider text-gold-deep uppercase">
                    {t(ui.cue)}
                  </strong>
                  {t(moment.cue)}
                </p>
              )}
              <ol className="mt-3 space-y-4">
                {moment.response.map((line, i) => (
                  <ResponseItem key={i} line={line} t={t} />
                ))}
              </ol>
            </section>
          )}

          {moment.practice && (
            <Practice key={`practice-${moment.id}-${language}-${visit}`} moment={moment} language={language} t={t} />
          )}

          {moment.deeper && (
            <details className="mt-6 rounded-2xl bg-cream/60 p-5">
              <summary className="cursor-pointer font-medium text-burgundy">{t(ui.deeper)}</summary>
              <p className="mt-3 leading-relaxed">{t(moment.deeper)}</p>
            </details>
          )}
          {moment.variations && (
            <details className="mt-3 rounded-2xl bg-cream/60 p-5">
              <summary className="cursor-pointer font-medium text-burgundy">{t(ui.variations)}</summary>
              <p className="mt-3 leading-relaxed">{t(moment.variations)}</p>
            </details>
          )}

          <p className="mt-4 text-xs text-ink-soft">
            {t(ui.sources)}: {moment.sources.join(" · ")}
          </p>

          <nav aria-label="Simulation" className="mt-8 flex gap-3">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => goTo(INTRODUCTORY_RITES[index - 1].id)}
              className={secondaryButton}
            >
              <span>{t(ui.back)}</span>
            </button>
            <button
              type="button"
              onClick={() => goTo(isLast ? "complete" : INTRODUCTORY_RITES[index + 1].id)}
              className={primaryButton}
            >
              <span>{t(isLast ? ui.finish : ui.next)}</span>
            </button>
          </nav>
        </article>
      ) : (
        <section className="mt-8 rounded-3xl bg-cream/70 p-6 sm:p-8">
          <span aria-hidden="true" className="font-serif text-4xl text-gold">
            ✦
          </span>
          <h2 ref={headingRef} tabIndex={-1} className="mt-2 font-serif text-3xl font-semibold">
            {t(ui.completeTitle)}
          </h2>
          <ol className="mt-5 space-y-2">
            {INTRODUCTORY_RITES.map((m) => (
              <li key={m.id} className="flex gap-3">
                <span aria-hidden="true" className="text-gold-deep">
                  ✓
                </span>
                <span>{t(m.title)}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 leading-relaxed text-ink-soft">{t(ui.completeBody)}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => goTo(INTRODUCTORY_RITES[0].id)} className={primaryButton}>
              <span>{t(ui.startOver)}</span>
            </button>
            <Link href="/" className={secondaryButton}>
              <span>{t(ui.returnHome)}</span>
            </Link>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink-soft">
            {t(ui.sources)}:{" "}
            {SOURCES.map((s, i) => (
              <span key={s.url}>
                {i > 0 && " · "}
                <a href={s.url} className="underline underline-offset-2">
                  {s.label}
                </a>
              </span>
            ))}
          </p>
        </section>
      )}
    </>
  );
}

function ResponseItem({ line, t }: { line: ResponseLine; t: (text: Text) => ReactNode }) {
  return (
    <li>
      <p className="text-xs font-medium tracking-wider text-gold-deep uppercase">{t(ui.speaker[line.speaker])}</p>
      {line.words ? (
        <>
          <p className="mt-1 font-serif text-2xl font-semibold">{t(line.words)}</p>
          <p className="text-sm text-ink-soft">{t(line.meaning)}</p>
        </>
      ) : (
        <div className="mt-1 rounded-lg border border-dashed border-gold px-3 py-2">
          <p className="text-xs text-ink-soft italic">{t(ui.placeholder)}</p>
          <p className="mt-1 leading-relaxed">{t(line.meaning)}</p>
        </div>
      )}
    </li>
  );
}
