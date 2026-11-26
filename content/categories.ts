import type { Category, Pillar } from "./types";

export const pillars: Pillar[] = [
  { id: "discover", title: "Discover Catholicism", description: "What Catholics believe about God, Jesus, the Church, the Bible, and the sacraments." },
  { id: "becoming", title: "Becoming Catholic", description: "OCIA, finding a parish, and the path into the Church." },
  { id: "mass", title: "Understanding the Mass", description: "What happens at Mass, what to say and do, and what each part means." },
  { id: "live", title: "Living the Faith", description: "Prayer, the Church year, the moral life, and everyday Catholic practice." },
  { id: "apologetics", title: "Common Questions and Arguments", description: "Clear answers to common questions, and Catholic responses to common arguments." },
  { id: "deeper", title: "Go Deeper", description: "Church history, faith and reason, and other Christian traditions and religions." },
  { id: "resources", title: "Trusted Resources", description: "Articles, videos, and official Church documents worth your time." },
];

export const categories: Category[] = [
  {
    slug: "beliefs",
    pillar: "discover",
    title: "What Catholics Believe",
    description: "God, Jesus Christ, the Church, and the Creed.",
  },
  {
    slug: "church",
    pillar: "discover",
    title: "The Church",
    description: "What the Church is, the pope and bishops, and how the faith is handed on.",
  },
  {
    slug: "sacraments",
    pillar: "discover",
    title: "The Sacraments",
    description: "The seven sacred rites, from Baptism to Marriage, through which Christ acts.",
  },
  {
    slug: "mass",
    pillar: "mass",
    title: "The Mass",
    description: "What happens at Mass, and why it is the center of Catholic life.",
  },
  {
    slug: "bible",
    pillar: "discover",
    title: "The Bible",
    description: "How Catholics read and understand Sacred Scripture.",
  },
  {
    slug: "history",
    pillar: "deeper",
    title: "Church History",
    description: "Two thousand years, from the apostles to today.",
  },
  {
    slug: "mary-and-the-saints",
    pillar: "discover",
    title: "Mary and the Saints",
    description: "Who they are, and why Catholics honor them.",
  },
  {
    slug: "faith-and-reason",
    pillar: "deeper",
    title: "Faith and Reason",
    description: "Does God exist? Faith, science, and the big questions.",
  },
  {
    slug: "objections",
    pillar: "apologetics",
    title: "Common Questions",
    description: "Challenges from other Christians, other religions, and skeptics.",
  },
  {
    slug: "becoming-catholic",
    pillar: "becoming",
    title: "Becoming Catholic",
    description: "OCIA and the path into the Church.",
  },
  {
    slug: "prayer",
    pillar: "live",
    title: "Prayer",
    description: "How to pray, and the prayers Catholics share.",
  },
  {
    slug: "spiritual-life",
    pillar: "live",
    title: "Spiritual Life",
    description: "Growing in faith, hope, and love in everyday life.",
  },
  {
    slug: "church-year",
    pillar: "live",
    title: "The Church Year",
    description: "Advent, Christmas, Lent, Easter, and the feasts in between.",
  },
  {
    slug: "catholic-life",
    pillar: "live",
    title: "Catholic Life",
    description: "Everyday practices, marriage and family, and vocations.",
  },
  {
    slug: "morality",
    pillar: "live",
    title: "Moral Life",
    description: "How Catholics understand right and wrong, and living well.",
  },
];
