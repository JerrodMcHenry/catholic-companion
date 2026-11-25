// Learn › The Mass.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const mass: Topic[] = [
  {
    slug: "what-happens-at-mass",
    title: "The Mass",
    question: "What happens during Mass?",
    category: "mass",
    keywords: [
      "Mass",
      "church service",
      "Sunday service",
      "worship",
      "liturgy",
      "readings",
      "homily",
      "sermon",
      "parts of the Mass",
      "order of Mass",
      "what to expect",
      "first time at Mass",
    ],
    summary:
      "The Mass is the Church’s central act of worship. Catholics gather to hear God’s word and to celebrate the Eucharist, as Jesus commanded at the Last Supper. It has two main parts: the Liturgy of the Word, with readings from the Bible and a homily, and the Liturgy of the Eucharist, in which bread and wine are offered and become the Body and Blood of Christ, and the faithful receive Communion. Short opening and closing rites frame these two parts.",
    explanation: [
      "The basic shape of the Mass is very old. Around the year 155, St. Justin Martyr described Christians gathering on Sunday to hear the writings of the apostles and prophets, pray together, and share the Eucharist, an outline the Church still follows today.",
      "The Introductory Rites gather the people: an entrance procession, the Sign of the Cross, a greeting, a moment to acknowledge our sins and ask for God’s mercy, the Gloria on most Sundays, and an opening prayer.",
      "In the Liturgy of the Word on Sundays, there is a first reading, usually from the Old Testament; a psalm; a second reading from the New Testament; and a reading from one of the Gospels. The priest or deacon then preaches a homily, and the people profess their faith in the Creed and pray for the needs of the Church and the world.",
      "In the Liturgy of the Eucharist, bread and wine are brought to the altar. In the Eucharistic Prayer, the heart of the Mass, the priest gives thanks to God and repeats the words of Jesus at the Last Supper. After the Lord’s Prayer and the sign of peace, Catholics who are prepared receive Communion. The Mass ends with a blessing and a sending forth into the world.",
      "Anyone is welcome to attend Mass. Holy Communion is received by Catholics who are prepared to receive it; visitors are welcome to remain in the pew in prayer.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1324", url: ccc("__P3X") },
        { paragraphs: "1345–1355", url: ccc("__P40") },
      ],
      scripture: [
        { passage: "Luke 24:13–35", url: bible("luke/24") },
        { passage: "Acts 2:42", url: bible("acts/2") },
        { passage: "1 Corinthians 11:23–26", url: bible("1corinthians/11") },
      ],
      documents: ["sacrosanctum-concilium", "girm"],
    },
    resources: ["usccb-order-of-mass", "video-mass-explained-arlington", "video-mass-pitre"],
    related: ["real-presence", "how-to-become-catholic"],
  },
];
