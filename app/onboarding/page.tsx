"use client";

import { useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { LANGUAGES, readLanguage, saveLanguage, subscribeToLanguage, type Language } from "../language";

export default function OnboardingPage() {
  const router = useRouter();
  // The previously saved choice (null on the server, where storage doesn't exist).
  const savedLanguage = useSyncExternalStore(subscribeToLanguage, readLanguage, () => null);
  const [choice, setChoice] = useState<Language | null>(null);
  const selected = choice ?? savedLanguage;

  function handleContinue() {
    if (!selected) return;
    saveLanguage(selected);
    router.push("/simulation");
  }

  return (
    <>
      <h1 className="text-center font-serif text-4xl font-semibold sm:text-5xl">
        How would you like to learn?
      </h1>
      <p lang="es" className="mt-3 text-center text-lg text-ink-soft">
        ¿Cómo te gustaría aprender?
      </p>

      <fieldset className="mt-10">
        <legend className="sr-only">Language preference</legend>
        <div className="space-y-3">
          {LANGUAGES.map((language) => {
            const isSelected = selected === language.value;
            return (
              <label
                key={language.value}
                className={`flex min-h-20 cursor-pointer items-center gap-4 rounded-2xl border-2 p-5 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-gold-deep ${
                  isSelected ? "border-burgundy bg-cream" : "border-cream bg-white/60 hover:border-gold"
                }`}
              >
                <input
                  type="radio"
                  name="language"
                  value={language.value}
                  checked={isSelected}
                  onChange={() => setChoice(language.value)}
                  className="size-5 shrink-0 accent-burgundy"
                />
                <span>
                  <span className="block font-serif text-2xl font-semibold">{language.label}</span>
                  <span lang={language.value === "es" ? "es" : undefined} className="block text-ink-soft">
                    {language.description}
                  </span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <button
        type="button"
        onClick={handleContinue}
        disabled={!selected}
        className="mt-10 min-h-14 w-full rounded-full bg-burgundy px-8 text-lg font-medium text-ivory shadow-sm transition-colors hover:bg-burgundy-deep disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-burgundy"
      >
        Continue · Continuar
      </button>
      <p className="mt-4 text-center text-sm text-ink-soft">
        You can change this at any time. Your choice is saved only on this device.
      </p>
    </>
  );
}
