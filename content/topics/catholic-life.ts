// Live the Faith › Catholic Life.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const catholicLife: Topic[] = [
  {
    slug: "returning-after-mortal-sin",
    title: "Mortal Sin and Going to Mass",
    question: "I've committed a mortal sin. Can I still go to Mass?",
    alsoKnownAs: ["Going to Mass in mortal sin", "Spiritual communion", "Not receiving Communion"],
    category: "catholic-life",
    keywords: ["can I go to Mass in mortal sin", "mortal sin and Mass", "should I still go to Mass", "not receiving communion", "can't receive communion", "spiritual communion", "go to confession first", "perfect contrition", "embarrassed not to receive communion", "staying in the pew"],
    summary:
      "Yes: you should still go to Mass, and the Sunday obligation still applies. What you should not do is receive Holy Communion until you have been to Confession. Staying in the pew during Communion is normal and nobody should assume anything about it. Pray, make an act of sorrow, ask Christ for a spiritual communion, and go to Confession as soon as you can.",
    explanation: [
      "Keep going to Mass: Catholics are obliged to take part in Mass on Sundays and holy days unless excused for a serious reason (CCC 2180–2181; canon 1247). The obligation does not lapse because of sin; hearing God's word and praying with the Church is part of the way back.",
      "Wait to receive Communion: “Anyone aware of having sinned mortally must not receive communion without having received absolution in the sacrament of penance” (CCC 1415; canon 916). Canon 916 allows a narrow exception when there is a grave reason to receive and no opportunity to confess; it is explained in “How do I receive Communion?”",
      "Not sure it was mortal? A sin is mortal only when it is grave matter, committed with full knowledge and deliberate consent (CCC 1857). If you are unsure, it is wise to confess it and ask the priest. See “What is the difference between mortal and venial sin?”",
      "Sorrow now: an act of perfect contrition, sorrow out of love for God, obtains forgiveness even of mortal sins if it includes the firm resolution to go to Confession as soon as possible (CCC 1452). Pray it as soon as you realize what you have done; it does not replace Confession before Communion.",
      "Spiritual communion: when you cannot receive the sacrament, you can still unite yourself to Christ by desire. St. John Paul II recommended the practice of “spiritual communion” (Ecclesia de Eucharistia 34).",
      "No one should judge: many people stay in the pew for many reasons, including fasting, not being Catholic, or simply personal prayer. Like the tax collector who prayed, “O God, be merciful to me a sinner” (Luke 18:13), the one who waits in humility is close to God.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1385", url: ccc("__P42") },
        { paragraphs: "1415", url: ccc("__P44") },
        { paragraphs: "1452", url: ccc("__P4D") },
        { paragraphs: "1857", url: ccc("__P6C") },
        { paragraphs: "2180–2181", url: ccc("__P7O") },
      ],
      scripture: [
        { passage: "Luke 18:9–14", url: bible("luke/18") },
        { passage: "1 Corinthians 11:27–29", url: bible("1corinthians/11") },
        { passage: "Psalm 51", url: bible("psalms/51") },
      ],
      documents: ["canon-law-eucharist", "canon-law-sunday", "ecclesia-de-eucharistia"],
    },
    resources: ["ca-attending-mass-mortal-sin", "osv-receive-communion"],
    related: ["mortal-and-venial-sin", "how-to-go-to-confession", "returning-to-the-church", "who-can-receive-communion"],
  },
];
