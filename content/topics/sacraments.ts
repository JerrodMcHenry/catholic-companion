// Learn › The Sacraments.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const sacraments: Topic[] = [
  {
    slug: "real-presence",
    title: "The Real Presence",
    question: "What is the Real Presence of Jesus in the Eucharist?",
    category: "sacraments",
    keywords: [
      "Eucharist",
      "Communion",
      "Holy Communion",
      "host",
      "bread and wine",
      "body and blood",
      "transubstantiation",
      "Real Presence",
      "is it a symbol",
      "Blessed Sacrament",
      "adoration",
      "tabernacle",
      "Lord’s Supper",
      "John 6",
    ],
    summary:
      "Catholics believe that in the Eucharist the bread and wine truly become the Body and Blood of Jesus Christ, not merely a symbol of him. Although they still look and taste like bread and wine, Christ himself is present, whole and entire: body, blood, soul, and divinity. This is why the Church calls the Eucharist “the source and summit of the Christian life.”",
    explanation: [
      "Jesus is present to his Church in many ways: in Scripture, in prayer, in the poor, and in all the sacraments. But the Church teaches that he is present “most especially” in the Eucharist. This presence is called “real” not because the others are unreal, but because it is presence in the fullest sense: Christ is “truly, really, and substantially” present.",
      "The Council of Trent named this change transubstantiation. At the consecration, the whole substance of the bread and wine becomes the substance of Christ’s Body and Blood, while the appearances of bread and wine remain. Christ stays present as long as those appearances remain, and he is wholly present in every part.",
      "Catholics root this belief in the words of Jesus: “I am the living bread that came down from heaven… the bread that I will give is my flesh for the life of the world” (John 6:51), and at the Last Supper, “This is my body that is for you” (1 Corinthians 11:24). St. Paul warns that anyone who eats “without discerning the body” brings judgment on himself (1 Corinthians 11:29).",
      "Because Christ is present, Catholics genuflect toward the tabernacle, where the Eucharist is kept, spend time in prayer before it in adoration, and prepare carefully before receiving Communion.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1324", url: ccc("__P3X") },
        { paragraphs: "1373–1381", url: ccc("__P41") },
        { paragraphs: "1385", url: ccc("__P42") },
      ],
      scripture: [
        { passage: "John 6:22–71", url: bible("john/6") },
        { passage: "Luke 22:14–20", url: bible("luke/22") },
        { passage: "1 Corinthians 11:23–29", url: bible("1corinthians/11") },
      ],
      documents: ["usccb-real-presence", "ecclesia-de-eucharistia"],
    },
    resources: ["ca-christ-in-the-eucharist", "video-barron-real-presence"],
    related: ["what-happens-at-mass", "how-to-become-catholic"],
  },
];
