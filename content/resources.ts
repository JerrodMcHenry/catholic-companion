import type { Resource } from "./types";

// The shared resource registry. Every URL here was opened and checked by hand.
export const resources: Resource[] = [
  // Official Church documents
  {
    id: "usccb-ocia",
    type: "document",
    title: "Order of Christian Initiation of Adults (OCIA)",
    source: "USCCB",
    url: "https://www.usccb.org/committees/evangelization-catechesis/ocia",
    note: "The U.S. bishops’ overview of each stage of becoming Catholic.",
  },
  {
    id: "sacrosanctum-concilium",
    type: "document",
    title: "Sacrosanctum Concilium (Constitution on the Sacred Liturgy)",
    source: "Second Vatican Council, 1963",
    url: "https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19631204_sacrosanctum-concilium_en.html",
    note: "The Council’s teaching on the meaning of the liturgy and the Mass.",
  },
  {
    id: "girm",
    type: "document",
    title: "General Instruction of the Roman Missal",
    source: "USCCB",
    url: "https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal",
    note: "The official guide to how Mass is celebrated, part by part.",
  },
  {
    id: "usccb-real-presence",
    type: "document",
    title: "The Real Presence of Jesus Christ in the Sacrament of the Eucharist: Basic Questions and Answers",
    source: "USCCB, 2001",
    url: "https://www.usccb.org/resources/real-presence-jesus-christ-sacrament-eucharist",
    note: "The U.S. bishops answer the most common questions about the Eucharist.",
  },
  {
    id: "ecclesia-de-eucharistia",
    type: "document",
    title: "Ecclesia de Eucharistia (On the Eucharist in Its Relationship to the Church)",
    source: "Pope John Paul II, 2003",
    url: "https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_20030417_eccl-de-euch.html",
  },

  // Articles
  {
    id: "ca-ocia-guide",
    type: "article",
    title: "OCIA: Catholic Answers Guide to Becoming Catholic",
    source: "Catholic Answers",
    url: "https://www.catholic.com/tract/ocia-catholic-answers-guide-to-becoming-catholic",
    note: "A clear walk through the process, with answers to common worries.",
  },
  {
    id: "ascension-become-catholic",
    type: "article",
    title: "How to Become Catholic (Step-by-Step)",
    source: "Ascension",
    url: "https://ascensionpress.com/blogs/articles/how-to-become-catholic-step-by-step",
  },
  {
    id: "usccb-order-of-mass",
    type: "article",
    title: "Order of Mass",
    source: "USCCB",
    url: "https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass",
    note: "Each part of the Mass, in order, with a short explanation.",
  },
  {
    id: "ca-christ-in-the-eucharist",
    type: "article",
    title: "Christ in the Eucharist",
    source: "Catholic Answers",
    url: "https://www.catholic.com/tract/christ-in-the-eucharist",
    note: "What Scripture and the early Christians say about the Real Presence.",
  },

  // Videos
  {
    id: "video-where-do-i-start",
    type: "video",
    title: "How to Become Catholic: Where Do I Start?",
    source: "Catholic Central",
    url: "https://www.youtube.com/watch?v=Hq-N-ImjTvM",
    note: "A short, friendly introduction for beginners.",
  },
  {
    id: "video-mass-explained-arlington",
    type: "video",
    title: "The Mass Explained: All Parts",
    source: "Catholic Diocese of Arlington",
    url: "https://www.youtube.com/watch?v=NQfiwW52tmI",
    note: "A priest walks through every part of the Mass and its meaning.",
  },
  {
    id: "video-mass-pitre",
    type: "video",
    title: "The Mass Explained: Roman Catholic Worship in the Bible and Tradition",
    source: "Dr. Brant Pitre, Catholic Productions",
    url: "https://www.youtube.com/watch?v=6luvJekWHxc",
    note: "For deeper study: the biblical roots of the Mass.",
  },
  {
    id: "video-barron-real-presence",
    type: "video",
    title: "The Real Presence of Jesus in the Eucharist",
    source: "Bishop Robert Barron",
    url: "https://www.youtube.com/watch?v=UzCPu_lEhe8",
    note: "A full-length talk on what the Church believes and why.",
  },
];
