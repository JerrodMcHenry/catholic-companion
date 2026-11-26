import type { Category, Pillar } from "./types";

export const pillars: Pillar[] = [
  { id: "discover", title: "Discover Catholicism", description: "God and his love, Jesus Christ, the Church, Mary and the saints, salvation, and eternal life." },
  { id: "scripture", title: "The Bible & Sacred Tradition", description: "Salvation history, reading Scripture, the canon, Sacred Tradition, and the Church Fathers." },
  { id: "apologetics", title: "Common Questions & Objections", description: "Clear answers to common questions, and Catholic responses to common objections." },
  { id: "becoming", title: "Becoming Catholic", description: "OCIA, finding a parish, and the practical path into the Church." },
  { id: "mass", title: "Understanding the Mass", description: "What happens at Mass, what to say and do, and what each part means." },
  { id: "sacraments", title: "The Sacraments", description: "All seven sacraments, including how to go to Confession." },
  { id: "live", title: "Living the Catholic Faith", description: "Prayer, virtue and holiness, the moral life, the Church year, and everyday practice." },
  { id: "spiritual-warfare", title: "Spiritual Warfare", description: "Christ's victory over evil, angels, temptation, the capital sins, discernment, and spiritual protection." },
  { id: "deeper", title: "Go Deeper", description: "Church history, faith and reason, and other Christian traditions and religions." },
  { id: "resources", title: "Trusted Resources", description: "Scripture, Church documents, the Fathers, books, articles, and videos." },
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
    pillar: "sacraments",
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
    pillar: "scripture",
    title: "The Bible and Sacred Tradition",
    description: "The story of salvation, how to read Scripture, the canon, and Sacred Tradition.",
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
  {
    slug: "spiritual-warfare",
    pillar: "spiritual-warfare",
    title: "Spiritual Warfare",
    description: "Understand temptation, resist evil, strengthen your spiritual life, and grow in holiness through Jesus Christ.",
  },
];
