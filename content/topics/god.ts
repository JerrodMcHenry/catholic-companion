// Learn › What Catholics Believe: God and the Holy Trinity.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const god: Topic[] = [
  {
    slug: "who-is-god",
    title: "God",
    question: "Who is God?",
    alsoKnownAs: ["The one God", "Divine nature"],
    category: "beliefs",
    keywords: ["God", "one God", "monotheism", "Creator", "I AM", "YHWH", "God is love", "what is God like"],
    summary:
      "Catholics believe there is only one God, the Creator of everything that exists. God revealed his name to Moses as “I am who I am,” showing that he alone simply is, without beginning or end. He is truth and faithfulness itself, and, as St. John wrote, “God is love.” Christians believe this one God is Father, Son, and Holy Spirit.",
    explanation: [
      "Belief in one God is the foundation of the Creed. It is rooted in God's revelation to Israel, summed up in the prayer that begins “Hear, O Israel” (Deuteronomy 6:4).",
      "God's name, revealed to Moses at the burning bush (Exodus 3:14), is both a name and a reminder that God is infinitely beyond what we can understand. Yet the same God draws close to his people.",
      "God is always faithful and true; his word can be trusted. The deepest truth about him is that “God is love” (1 John 4:8). In sending his Son and the Spirit, God revealed that he is an eternal exchange of love, and he invites us to share in it.",
    ],
    teaching: {
      catechism: [{ paragraphs: "199–221", url: ccc("__P16") }],
      scripture: [
        { passage: "Exodus 3:13–15", url: bible("exodus/3") },
        { passage: "Deuteronomy 6:4–5", url: bible("deuteronomy/6") },
        { passage: "1 John 4:7–16", url: bible("1john/4") },
      ],
    },
    resources: ["ca-one-true-god"],
    related: ["what-is-the-trinity", "who-is-jesus", "problem-of-evil"],
  },
  {
    slug: "what-is-the-trinity",
    title: "The Holy Trinity",
    question: "What is the Trinity?",
    alsoKnownAs: ["Holy Trinity", "Triune God", "Blessed Trinity"],
    category: "beliefs",
    keywords: ["Trinity", "three persons", "one God", "Father Son and Holy Spirit", "three in one", "consubstantial", "Godhead"],
    summary:
      "The Trinity is the central mystery of the Christian faith: there is one God in three persons, the Father, the Son, and the Holy Spirit. Christians do not believe in three gods. Each person is fully God, and the three are really distinct from one another in their relationships: the Son is begotten of the Father, and the Holy Spirit proceeds.",
    explanation: [
      "Christians are baptized “in the name of the Father, and of the Son, and of the holy Spirit” (Matthew 28:19). The Catechism calls the Trinity “the central mystery of Christian faith and life,” the source of all the other mysteries of faith.",
      "The three persons do not divide the one divinity among themselves: each of them is God whole and entire. They are distinct not as three separate beings, but in their relations to one another.",
      "The Trinity is a mystery in the strict sense: we could never discover it by reason alone. God revealed it by sending his Son and the Holy Spirit. It is not a contradiction, because God is one in nature and three in persons.",
      "Because God is a communion of love, the Christian life is an invitation to share in the life of the Trinity.",
    ],
    teaching: {
      catechism: [{ paragraphs: "232–237, 253–255", url: ccc("__P17") }],
      scripture: [
        { passage: "Matthew 28:19", url: bible("matthew/28") },
        { passage: "2 Corinthians 13:13", url: bible("2corinthians/13") },
      ],
    },
    resources: ["ca-explaining-the-trinity", "ca-early-church-trinity"],
    related: ["who-is-god", "who-is-the-holy-spirit", "divinity-of-jesus"],
  },
  {
    slug: "who-is-the-holy-spirit",
    title: "The Holy Spirit",
    question: "Who is the Holy Spirit?",
    alsoKnownAs: ["Paraclete", "Advocate", "Holy Ghost", "Spirit of truth"],
    category: "beliefs",
    keywords: ["Holy Spirit", "Holy Ghost", "Paraclete", "Advocate", "Pentecost", "third person", "Spirit of God"],
    summary:
      "The Holy Spirit is the third person of the Holy Trinity: truly God, worshiped and glorified together with the Father and the Son. Jesus promised to send the Spirit as an Advocate who would remain with his disciples, and the Spirit came upon them at Pentecost. The Spirit awakens faith, makes Christ present in the Church, and makes us children of God.",
    explanation: [
      "“Spirit” translates the Hebrew word ruah, meaning breath or wind. Jesus also called the Spirit the Paraclete, “the one called to one's side,” and the Spirit of truth (John 14:16–17).",
      "The Spirit is a person, not an impersonal force: the Church professes that “with the Father and the Son he is worshipped and glorified.”",
      "At Pentecost the apostles “were all filled with the holy Spirit” (Acts 2:4) and began to proclaim the Gospel. The Spirit continues to act through Scripture, the sacraments, prayer, and the gifts he gives.",
      "The Spirit is the one who first awakens faith in us. Through him we can call God “Abba, Father!” (Romans 8:15).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "683–686", url: ccc("__P1Y") },
        { paragraphs: "691–693", url: ccc("__P21") },
      ],
      scripture: [
        { passage: "John 14:15–26", url: bible("john/14") },
        { passage: "Acts 2:1–4", url: bible("acts/2") },
        { passage: "Romans 8:14–16", url: bible("romans/8") },
      ],
      documents: ["dominum-et-vivificantem"],
    },
    resources: ["ca-who-is-the-holy-spirit", "ca-divinity-of-the-holy-spirit"],
    related: ["what-is-the-trinity", "who-is-jesus", "what-is-the-church"],
  },
];
