// Live the Faith › Becoming Catholic.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const becomingCatholic: Topic[] = [
  {
    slug: "how-to-become-catholic",
    title: "Becoming Catholic",
    question: "How do I become Catholic?",
    category: "becoming-catholic",
    keywords: [
      "OCIA",
      "RCIA",
      "becoming Catholic",
      "become Catholic",
      "convert",
      "conversion",
      "join the Church",
      "join the Catholic Church",
      "baptism",
      "confirmation",
      "catechumen",
      "candidate",
      "sponsor",
      "godparent",
      "Easter Vigil",
      "classes",
    ],
    summary:
      "Most adults become Catholic through a parish process called OCIA, the Order of Christian Initiation of Adults. You begin simply by contacting a local Catholic parish. Over a season of learning, prayer, and getting to know the parish community, often about a year, you prepare to receive the sacraments, usually at the Easter Vigil, the night before Easter. Starting the process does not commit you to joining.",
    explanation: [
      "The Church has welcomed new members this way since the time of the apostles: through a journey in stages that includes hearing the Gospel, turning toward God, professing the faith, Baptism, the gift of the Holy Spirit, and receiving the Eucharist.",
      "If you have never been baptized, you become a catechumen. After a time of inquiry, a period of formation, and a final preparation during Lent, you receive Baptism, Confirmation, and the Eucharist together, normally at the Easter Vigil.",
      "If you are already a baptized Christian, you are not baptized again: the Church recognizes Baptism celebrated in other Christian communities. Instead you prepare to be received into full communion, usually by making a profession of faith and receiving Confirmation and your first Communion. Your preparation takes into account what you already know and practice.",
      "Along the way, a sponsor or godparent, a practicing Catholic, walks with you. Every parish and every person is different, so your parish will help you discern the preparation that is right for you.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1229–1233", url: ccc("__P3J") },
        { paragraphs: "1247–1249", url: ccc("__P3K") },
        { paragraphs: "1271", url: ccc("__P3N") },
      ],
      scripture: [
        { passage: "Matthew 28:19–20", url: bible("matthew/28") },
        { passage: "Acts 2:37–42", url: bible("acts/2") },
      ],
      documents: ["usccb-ocia"],
    },
    resources: ["ca-ocia-guide", "video-where-do-i-start", "ascension-become-catholic"],
    related: ["what-happens-at-mass", "real-presence"],
  },
];
