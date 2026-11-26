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
import { spiritualWarfare } from "./spiritual-warfare";

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
  ...spiritualWarfare,
  ...faithAndReason,
  ...historyTopics,
  ...apologeticsTopics,
];

// "I'm curious about Catholicism": the approved "new to Catholicism" pathway, in reading order.
export const startHere = [
  "what-do-catholics-believe",
  "who-is-god",
  "salvation-history",
  "original-sin",
  "who-is-jesus",
  "divinity-of-jesus",
  "why-did-jesus-die",
  "resurrection",
  "how-are-we-saved",
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

// "Common arguments and Catholic responses" on the Common Questions page: objections people
// often meet, each answered in an existing topic. Also indexed for search.
export const commonArguments: { group: string; items: { claim: string; slug: string }[] }[] = [
  {
    group: "Scripture and authority",
    items: [
      { claim: "Catholics follow man-made traditions instead of the Bible.", slug: "what-is-sacred-tradition" },
      { claim: "Scripture alone is the authority for Christians.", slug: "sola-scriptura" },
      { claim: "Catholics added books to the Bible.", slug: "catholic-bible-books" },
      { claim: "The Catholic Church changed the Ten Commandments.", slug: "ten-commandments" },
      { claim: "The papacy has no biblical basis, and Peter was not the first pope.", slug: "peter-the-rock" },
      { claim: "No human being can be infallible.", slug: "papal-infallibility" },
    ],
  },
  {
    group: "Mary and the saints",
    items: [
      { claim: "Catholics worship Mary.", slug: "why-honor-mary" },
      { claim: "Catholics worship the saints, and praying to them is unbiblical.", slug: "praying-to-saints" },
      { claim: "Jesus is the only mediator, so asking saints to pray for us is wrong.", slug: "praying-directly-to-god" },
      { claim: "Catholics worship statues and idols.", slug: "statues-and-images" },
      { claim: "Mary had other children.", slug: "who-is-mary" },
      { claim: "The Immaculate Conception is unbiblical.", slug: "immaculate-conception" },
    ],
  },
  {
    group: "Salvation and forgiveness",
    items: [
      { claim: "Catholics aren't Christians.", slug: "are-catholics-christians" },
      { claim: "Catholics try to earn salvation by works; we are saved by faith alone.", slug: "faith-and-works" },
      { claim: "Once saved, always saved.", slug: "how-are-we-saved" },
      { claim: "Only God can forgive sins, not priests.", slug: "why-confess-to-a-priest" },
      { claim: "Purgatory is unbiblical.", slug: "purgatory" },
      { claim: "Indulgences let Catholics buy forgiveness.", slug: "purgatory" },
      { claim: "The Catholic Church teaches that all non-Catholics go to hell.", slug: "salvation-of-non-christians" },
    ],
  },
  {
    group: "The Mass, sacraments, and practices",
    items: [
      { claim: "The Eucharist is only a symbol.", slug: "real-presence" },
      { claim: "The Mass sacrifices Jesus again and again.", slug: "mass-as-sacrifice" },
      { claim: "Infant Baptism is unbiblical.", slug: "infant-baptism" },
      { claim: "Baptism is only a symbol, and only immersion counts.", slug: "baptism" },
      { claim: "Repeated prayers like the Rosary go against Jesus' teaching.", slug: "the-rosary" },
      { claim: "Jesus forbade calling priests ‘Father.’", slug: "bishops-priests-deacons" },
      { claim: "The Catholic Church has too many rules.", slug: "after-becoming-catholic" },
    ],
  },
  {
    group: "Church history and credibility",
    items: [
      { claim: "The Catholic Church departed from original Christianity.", slug: "early-church" },
      { claim: "Constantine founded the Catholic Church, and it adopted pagan practices.", slug: "early-church" },
      { claim: "The Council of Nicaea invented the divinity of Jesus.", slug: "council-of-nicaea" },
      { claim: "The Church has changed its doctrines over time.", slug: "what-is-dogma" },
      { claim: "How can I trust a Church whose leaders covered up abuse?", slug: "what-is-the-church" },
      { claim: "A personal relationship with Jesus makes the Church unnecessary.", slug: "what-is-the-church" },
      { claim: "Why believe the Catholic Church is the Church Jesus founded?", slug: "did-jesus-found-a-church" },
      { claim: "Why become Catholic rather than Eastern Orthodox?", slug: "catholic-and-orthodox-differences" },
    ],
  },
  {
    group: "Questions about God and Christianity",
    items: [
      { claim: "There is no evidence that God exists.", slug: "does-god-exist" },
      { claim: "Jesus never claimed to be God.", slug: "divinity-of-jesus" },
      { claim: "The Trinity is a man-made doctrine.", slug: "trinity-in-scripture" },
      { claim: "Science contradicts Christianity.", slug: "faith-and-science" },
      { claim: "A loving God would not allow suffering.", slug: "problem-of-evil" },
      { claim: "All religions lead to God.", slug: "do-all-religions-lead-to-god" },
      { claim: "Catholic moral teaching is out of step with modern society.", slug: "how-catholics-decide-right-and-wrong" },
    ],
  },
];
