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

// "I'm curious about Catholicism": the approved "new to Catholicism" pathway, in reading order.
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

// On Common Questions: the comparisons with other Christians come first, then the other religions.
export const comparisonTopics = ["catholic-and-protestant-differences", "catholic-and-orthodox-differences", "catholics-and-muslims", "do-all-religions-lead-to-god"];

// Listed first on Common Questions, in this order.
export const commonQuestions = [
  "are-catholics-christians", "why-honor-mary", "praying-to-saints", "statues-and-images", "what-is-the-pope",
  "what-is-sacred-tradition", "catholic-bible-books", "why-confess-to-a-priest", "infant-baptism", "real-presence",
  "faith-and-works", "purgatory", "problem-of-evil",
];

// "I'm becoming Catholic": the approved OCIA pathway (8.2), with finding a parish and the Mass added.
export const becomingPath = [
  "how-to-become-catholic", "what-is-ocia", "finding-a-parish", "stages-of-ocia", "catechumen-or-candidate", "what-happens-at-mass",
  "what-is-the-creed", "what-is-the-trinity", "what-is-sacred-tradition", "sola-scriptura", "seven-sacraments", "baptism",
  "confirmation", "real-presence", "how-to-go-to-confession", "why-honor-mary", "what-happens-when-we-die", "ten-commandments",
  "easter-vigil", "after-becoming-catholic",
];

// "I'm a new Catholic": practical next steps after reception into the Church.
export const newCatholicPath = [
  "after-becoming-catholic", "why-go-to-mass-on-sunday", "how-to-receive-communion", "how-to-go-to-confession", "how-to-pray",
  "basic-catholic-prayers", "liturgical-year", "holy-days-of-obligation", "fasting-and-abstinence", "finding-a-parish",
];
