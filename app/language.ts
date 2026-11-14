// The learner's language preference, stored in the browser.

export type Language = "en" | "es" | "bilingual";

export const LANGUAGES: { value: Language; label: string; description: string }[] = [
  { value: "en", label: "English", description: "Guide me through Mass in English." },
  { value: "es", label: "Español", description: "Guíame en la Misa en español." },
  {
    value: "bilingual",
    label: "Bilingual · Bilingüe",
    description: "English and Spanish side by side.",
  },
];

const STORAGE_KEY = "catholic-companion:language";
const CHANGE_EVENT = "catholic-companion:language-change";

export function readLanguage(): Language | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return LANGUAGES.some((l) => l.value === stored) ? (stored as Language) : null;
  } catch {
    return null; // Storage can be unavailable (e.g. blocked in private browsing).
  }
}

export function saveLanguage(language: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    // If storage is unavailable, the choice simply isn't remembered.
  }
  // "storage" events only reach other tabs, so tell this tab too.
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

// Lets components re-read the preference when it changes, in this tab or another.
export function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}
