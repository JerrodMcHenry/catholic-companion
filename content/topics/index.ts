// All topics, one file per subject, gathered into the shared registry.

import { apologeticsTopics } from "./apologetics";
import { becomingCatholic } from "./becoming-catholic";
import { bibleTopics } from "./bible";
import { catholicLife } from "./catholic-life";
import { churchYear } from "./church-year";
import { church } from "./church";
import { creationTopics } from "./creation";
import { faithAndReason } from "./faith-and-reason";
import { foundations } from "./foundations";
import { god } from "./god";
import { historyTopics } from "./history";
import { jesus } from "./jesus";
import { maryAndSaints } from "./mary-and-saints";
import { mass } from "./mass";
import { massOrder, massParts } from "./mass-parts";
import { morality } from "./morality";
import { prayerTopics } from "./prayer";
import { sacraments } from "./sacraments";
import { salvation } from "./salvation";

export const topics = [
  ...foundations,
  ...god,
  ...creationTopics,
  ...jesus,
  ...salvation,
  ...church,
  ...maryAndSaints,
  ...bibleTopics,
  ...sacraments,
  ...mass,
  ...massParts,
  ...becomingCatholic,
  ...catholicLife,
  ...prayerTopics,
  ...churchYear,
  ...morality,
  ...faithAndReason,
  ...historyTopics,
  ...apologeticsTopics,
];

// The beginner path behind "New to Catholicism? Start here", in reading order
// (the approved "new to Catholicism" pathway, limited to topics that exist so far).
export const startHere = [
  "what-do-catholics-believe",
  "who-is-god",
  "who-is-jesus",
  "divinity-of-jesus",
  "why-did-jesus-die",
  "resurrection",
  "what-is-the-church",
  "what-is-the-bible",
  "seven-sacraments",
  "what-happens-at-mass",
  "how-to-pray",
  "how-to-become-catholic",
];

export { massOrder };

// "Comparing traditions" on the Apologetics page: comparison topics, which live under The Church.
export const comparisonTopics = ["catholic-and-protestant-differences", "catholic-and-orthodox-differences", "catholics-and-muslims", "do-all-religions-lead-to-god"];

// Shown on the homepage.
export const commonQuestions = ["how-to-become-catholic", "what-happens-at-mass", "real-presence"];
