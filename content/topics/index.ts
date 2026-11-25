// All topics, one file per subject, gathered into the shared registry.

import { apologeticsTopics } from "./apologetics";
import { becomingCatholic } from "./becoming-catholic";
import { catholicLife } from "./catholic-life";
import { church } from "./church";
import { foundations } from "./foundations";
import { god } from "./god";
import { jesus } from "./jesus";
import { mass } from "./mass";
import { massOrder, massParts } from "./mass-parts";
import { sacraments } from "./sacraments";

export const topics = [
  ...foundations,
  ...god,
  ...jesus,
  ...church,
  ...sacraments,
  ...mass,
  ...massParts,
  ...becomingCatholic,
  ...catholicLife,
  ...apologeticsTopics,
];

// The beginner path behind "New to Catholicism? Start here", in reading order
// (the approved "new to Catholicism" pathway, limited to topics that exist so far).
export const startHere = [
  "what-do-catholics-believe",
  "who-is-god",
  "who-is-jesus",
  "why-did-jesus-die",
  "resurrection",
  "what-is-the-church",
  "what-happens-at-mass",
  "how-to-become-catholic",
];

export { massOrder };

// Shown on the homepage.
export const commonQuestions = ["how-to-become-catholic", "what-happens-at-mass", "real-presence"];
