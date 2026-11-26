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
      "Yes: please keep coming to Mass, and the Sunday obligation still applies. Going to Mass and receiving Holy Communion are different: you are welcome at Mass, but you should not receive Communion until you have been to Confession. Staying in the pew during Communion is normal, and nobody should assume anything about it. Pray, tell God you are sorry, unite yourself to Christ in a spiritual communion, and go to Confession as soon as you can.",
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
  {
    slug: "fasting-and-abstinence",
    title: "Fasting and Abstinence",
    question: "What are the rules for fasting and abstinence?",
    alsoKnownAs: ["Friday abstinence", "Lenten fasting"],
    category: "catholic-life",
    keywords: ["fasting", "abstinence", "no meat on Fridays", "Friday abstinence", "Lenten fasting rules", "fast on Ash Wednesday", "Good Friday fast", "who has to fast", "age for fasting", "excused from fasting", "fish on Fridays", "penance"],
    summary:
      "In the United States, Latin Catholics fast and abstain from meat on Ash Wednesday and Good Friday, and abstain from meat on the Fridays of Lent. Fasting binds those aged 18 to 59 and allows one full meal and two smaller meals; abstinence binds those 14 and older. Every Friday of the year remains a day of penance. The sick, pregnant or nursing women, and others with serious reasons are excused.",
    explanation: [
      "Why Catholics fast: “The divine law binds all the Christian faithful to do penance each in his or her own way,” and common penitential days unite the Church (canon 1249). These days “help us acquire mastery over our instincts and freedom of heart” (CCC 2043).",
      "The rules in the United States: “Ash Wednesday and Good Friday are obligatory days of fasting and abstinence for Catholics. In addition, Fridays during Lent are obligatory days of abstinence.” Fasting binds from age 18 until age 59; “a person is permitted to eat one full meal, as well as two smaller meals that together are not equal to a full meal.” Abstinence from meat binds from age 14 onwards (USCCB).",
      "What abstinence means: abstaining from meat; eggs, milk products, and condiments made from animal fat are not forbidden (Paenitemini, norm III). When a solemnity falls on a Friday, abstinence is not required (canon 1251).",
      "Fridays all year: every Friday is a penitential day (canon 1250). The U.S. bishops ended the year-round law of Friday abstinence in 1966 but said that “Friday itself remains a special day of penitential observance throughout the year,” giving “first place” to voluntary abstinence from meat while allowing other works of penance and charity (Pastoral Statement on Penance and Abstinence 22–24; canon 1253).",
      "Who is excused: the U.S. bishops list the physically or mentally ill, including people with chronic illnesses such as diabetes, and pregnant or nursing women. Members of the Eastern Catholic Churches follow the law of their own Church. Parents and pastors should teach children the meaning of penance even before they are bound (canon 1252).",
      "Health first: fasting is a spiritual practice, not a diet. If fasting could harm your health, including if you have or have had an eating disorder, speak with a doctor and a priest. On Good Friday, many continue the fast until the Easter Vigil as the “paschal fast” (USCCB).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1434–1438", url: ccc("__P4B") },
        { paragraphs: "2041–2043", url: ccc("__P75") },
      ],
      scripture: [
        { passage: "Matthew 6:16–18", url: bible("matthew/6") },
        { passage: "Matthew 4:1–2", url: bible("matthew/4") },
        { passage: "Isaiah 58:6–7", url: bible("isaiah/58") },
      ],
      documents: ["canon-law-sunday", "paenitemini", "usccb-penance-abstinence"],
    },
    resources: ["usccb-fast-abstinence"],
    related: ["lent", "ash-wednesday", "holy-week", "how-to-go-to-confession"],
  },
];
