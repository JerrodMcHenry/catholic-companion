import type { Category, Pillar } from "./types";

export const pillars: Pillar[] = [
  {
    id: "learn",
    title: "Learn",
    description: "What Catholics believe and why: God, the Bible, the sacraments, and the Mass.",
  },
  {
    id: "apologetics",
    title: "Apologetics",
    subtitle: "Questions & Objections",
    description: "Fair, honest answers to common challenges to the Catholic faith.",
  },
  {
    id: "live",
    title: "Live the Faith",
    description: "Becoming Catholic, prayer, and growing closer to God day by day.",
  },
  {
    id: "resources",
    title: "Resources",
    description: "Trusted articles, videos, and official Church documents.",
  },
];

export const categories: Category[] = [
  {
    slug: "beliefs",
    pillar: "learn",
    title: "What Catholics Believe",
    description: "God, Jesus Christ, the Church, and the Creed.",
  },
  {
    slug: "church",
    pillar: "learn",
    title: "The Church",
    description: "What the Church is, the pope and bishops, and how the faith is handed on.",
  },
  {
    slug: "sacraments",
    pillar: "learn",
    title: "The Sacraments",
    description: "The seven sacred rites, from Baptism to Marriage, through which Christ acts.",
  },
  {
    slug: "mass",
    pillar: "learn",
    title: "The Mass",
    description: "What happens at Mass, and why it is the center of Catholic life.",
  },
  {
    slug: "bible",
    pillar: "learn",
    title: "The Bible",
    description: "How Catholics read and understand Sacred Scripture.",
  },
  {
    slug: "history",
    pillar: "learn",
    title: "Church History",
    description: "Two thousand years, from the apostles to today.",
  },
  {
    slug: "mary-and-the-saints",
    pillar: "learn",
    title: "Mary and the Saints",
    description: "Who they are, and why Catholics honor them.",
  },
  {
    slug: "morality",
    pillar: "learn",
    title: "Moral Life",
    description: "How Catholics understand right and wrong, and living well.",
  },
  {
    slug: "faith-and-reason",
    pillar: "learn",
    title: "Faith and Reason",
    description: "Does God exist? Faith, science, and the big questions.",
  },
  {
    slug: "objections",
    pillar: "apologetics",
    title: "Common Objections",
    description: "Challenges from other Christians, other religions, and skeptics.",
  },
  {
    slug: "becoming-catholic",
    pillar: "live",
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
];
