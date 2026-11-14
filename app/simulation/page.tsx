"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { LANGUAGES, readLanguage, subscribeToLanguage, type Language } from "../language";

const text = {
  en: {
    heading: "Your First Mass",
    playerTitle: "Illustrated Mass guide",
    playerBody:
      "The step-by-step illustrated guide to the Mass will appear here. It is still being prepared.",
    changeLanguage: "Change language",
    returnHome: "Return home",
  },
  es: {
    heading: "Tu primera Misa",
    playerTitle: "Guía ilustrada de la Misa",
    playerBody:
      "Aquí aparecerá la guía ilustrada de la Misa, paso a paso. Todavía la estamos preparando.",
    changeLanguage: "Cambiar idioma",
    returnHome: "Volver al inicio",
  },
};

// Shows English, Spanish, or both (English first, Spanish beneath).
function Bilingual({ language, pick }: { language: Language; pick: (t: typeof text.en) => string }) {
  if (language === "es") return <span lang="es">{pick(text.es)}</span>;
  if (language === "en") return <>{pick(text.en)}</>;
  return (
    <>
      {pick(text.en)}
      <span lang="es" className="mt-1 block opacity-75">
        {pick(text.es)}
      </span>
    </>
  );
}

export default function SimulationPage() {
  // undefined = not yet read (server render); null = no preference saved.
  const language = useSyncExternalStore(subscribeToLanguage, readLanguage, () => undefined);

  if (language === undefined) {
    return <div className="min-h-96" aria-busy="true" />;
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

  return (
    <>
      <p className="text-sm font-medium tracking-[0.15em] text-gold-deep uppercase">
        {LANGUAGES.find((l) => l.value === language)?.label}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
        <Bilingual language={language} pick={(t) => t.heading} />
      </h1>

      {/* Placeholder for the future illustrated Mass player. */}
      <section
        aria-labelledby="player-title"
        className="mt-8 flex aspect-[4/5] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gold/60 bg-cream/70 p-8 text-center sm:aspect-[4/3]"
      >
        <span aria-hidden="true" className="font-serif text-5xl text-gold">
          ✠
        </span>
        <h2 id="player-title" className="mt-4 font-serif text-2xl font-semibold">
          <Bilingual language={language} pick={(t) => t.playerTitle} />
        </h2>
        <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
          <Bilingual language={language} pick={(t) => t.playerBody} />
        </p>
        <span className="mt-6 rounded-full bg-ivory px-3 py-1 text-xs font-medium tracking-wider text-ink-soft uppercase">
          Placeholder
        </span>
      </section>

      <nav aria-label="Simulation" className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-burgundy px-6 font-medium text-ivory hover:bg-burgundy-deep"
        >
          <span>
            <Bilingual language={language} pick={(t) => t.returnHome} />
          </span>
        </Link>
        <Link
          href="/onboarding"
          className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border-2 border-burgundy px-6 font-medium text-burgundy hover:bg-cream"
        >
          <span>
            <Bilingual language={language} pick={(t) => t.changeLanguage} />
          </span>
        </Link>
      </nav>
    </>
  );
}
