"use client";

// Experience Mass: a continuous, simulated Mass the learner takes part in. See ./player.tsx.
// This page only waits until the saved language can be read in the browser, and until the private
// local copy of the official texts (if any) has been looked for.

import { useEffect, useState, useSyncExternalStore } from "react";
import { readLanguage, subscribeToLanguage } from "../language";
import Player, { loadOfficialTexts } from "./player";

export default function ExperiencePage() {
  // undefined = not yet read (server render); null = no preference saved (chosen on the start screen).
  const language = useSyncExternalStore(subscribeToLanguage, readLanguage, () => undefined);
  const [official, setOfficial] = useState(false);
  useEffect(() => {
    loadOfficialTexts().then(() => setOfficial(true));
  }, []);

  if (language === undefined || !official) {
    return (
      <div role="status" className="text-center">
        <p className="font-serif text-4xl font-semibold">
          Experience Mass
          <span lang="es" className="mt-1 block text-2xl opacity-75">
            Vive la Misa
          </span>
        </p>
        <div className="mt-8 flex aspect-[3/2] animate-pulse flex-col items-center justify-center rounded-3xl bg-cream/70 motion-reduce:animate-none">
          <span aria-hidden="true" className="font-serif text-5xl text-gold">
            ✠
          </span>
          <p className="mt-4 text-ink-soft">
            Loading… · <span lang="es">Cargando…</span>
          </p>
        </div>
      </div>
    );
  }

  return <Player language={language} />;
}
