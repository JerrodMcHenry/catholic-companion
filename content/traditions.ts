import type { Tradition } from "./types";

// Religious traditions and worldviews. Only entries with an overview get a page;
// the rest are listed as "coming soon".
export const traditions: Tradition[] = [
  // Christian traditions
  {
    slug: "protestantism",
    name: "Protestantism",
    group: "christian",
    overview: [
      "Protestantism began with the Reformation of the sixteenth century, when reformers such as Martin Luther and John Calvin sought to reform the Western Church and, in the end, separated from Rome. Today it includes hundreds of millions of Christians in many different churches and traditions.",
      "Protestants differ widely among themselves, so no single description fits them all. Most share a great deal with Catholics: faith in the Trinity, in Jesus Christ as true God and true man, in the authority of Scripture, and in salvation through Christ.",
      "The Catholic Church regards baptized Protestants as fellow Christians, brothers and sisters in Christ who are in real, though imperfect, communion with the Catholic Church.",
    ],
    differences: [
      "Authority: Scripture alone, or Scripture and Tradition interpreted by the Church’s teaching office",
      "Salvation: how faith, grace, and good works relate",
      "The sacraments, especially the Eucharist and confession",
      "The pope and the authority of bishops",
      "The role of Mary and the saints",
    ],
    sources: ["westminster-confession", "formula-of-concord"],
    resources: ["unitatis-redintegratio", "ca-scripture-and-tradition"],
    related: ["real-presence"],
  },
  { slug: "baptist", name: "Baptist", group: "christian", parent: "protestantism" },
  { slug: "lutheran", name: "Lutheran", group: "christian", parent: "protestantism" },
  { slug: "reformed", name: "Reformed and Presbyterian", group: "christian", parent: "protestantism" },
  { slug: "anglican", name: "Anglican", group: "christian", parent: "protestantism" },
  { slug: "methodist", name: "Methodist", group: "christian", parent: "protestantism" },
  { slug: "pentecostal", name: "Pentecostal", group: "christian", parent: "protestantism" },
  { slug: "evangelical", name: "Evangelical and non-denominational", group: "christian", parent: "protestantism" },
  { slug: "eastern-orthodoxy", name: "Eastern Orthodoxy", group: "christian" },
  { slug: "oriental-orthodoxy", name: "Oriental Orthodoxy", group: "christian" },
  { slug: "latter-day-saints", name: "Latter-day Saints", group: "christian" },
  {
    slug: "jehovahs-witnesses",
    name: "Jehovah’s Witnesses",
    group: "christian",
    overview: [
      "Jehovah’s Witnesses grew out of the Bible Student movement led by Charles Taze Russell in the United States in the 1870s. Witnesses are known for their door-to-door ministry, their use of God’s name, Jehovah, and their own translation of the Bible, the New World Translation. They are guided by a Governing Body.",
      "Witnesses see themselves as restoring the original Christianity of the first century. They teach that Jehovah alone is Almighty God, that Jesus is God’s Son and the first of his creations, and that the holy spirit is God’s active force rather than a person.",
    ],
    differences: [
      "Who Jesus is: God’s first creation, or the eternal Son, true God and true man",
      "The Trinity, and whether the Holy Spirit is a person",
      "The soul and life after death",
      "Authority: the Governing Body, or the Church founded on the apostles",
    ],
    sources: ["jw-who-is-jesus", "jw-michael"],
    resources: ["ca-god-of-the-jws"],
  },

  // Other religions
  { slug: "judaism", name: "Judaism", group: "religion" },
  {
    slug: "islam",
    name: "Islam",
    group: "religion",
    overview: [
      "Muslims believe that God (in Arabic, Allah) revealed the Qur’an to the Prophet Muhammad in seventh-century Arabia, renewing the faith in one God taught by all the prophets. With close to two billion followers, Islam is the world’s second-largest religion. Its two main branches are Sunni and Shia.",
      "Muslims honor Jesus as one of the greatest prophets and as the Messiah, born of the Virgin Mary. But they hold that he is not God or the Son of God.",
      "The Catholic Church regards Muslims with esteem. The Second Vatican Council noted that they worship the one, merciful God, the Creator of heaven and earth, revere Jesus as a prophet, honor his virgin mother Mary, and await the day of judgment.",
    ],
    differences: [
      "Who Jesus is: a great prophet, or the eternal Son of God made man",
      "The Trinity",
      "Whether Jesus was crucified and rose from the dead",
      "Revelation: the Qur’an as God’s final word, or Jesus Christ as God’s definitive Word",
    ],
    sources: ["quran-4-171", "quran-112"],
    resources: ["nostra-aetate"],
  },
  { slug: "hinduism", name: "Hinduism", group: "religion" },
  { slug: "buddhism", name: "Buddhism", group: "religion" },
  { slug: "sikhism", name: "Sikhism", group: "religion" },
  { slug: "other-religions", name: "Other religions", group: "religion" },

  // Worldviews
  {
    slug: "atheism",
    name: "Atheism",
    group: "worldview",
    overview: [
      "Atheism is the view that God does not exist, or more broadly the absence of belief in God. Atheists hold many different philosophical positions, and come to their view for many different reasons: questions about evidence, science, suffering, or their experience of religion.",
      "The Church teaches that rejecting God goes against the virtue of religion, while recognizing that personal responsibility can be greatly reduced by intentions and circumstances. It also admits that believers themselves can hide the face of God by the way they live.",
    ],
    differences: [
      "Whether God exists",
      "Whether the universe needs an explanation beyond itself",
      "The foundation of morality and human dignity",
      "Whether there is life after death",
    ],
    sources: ["sep-atheism-agnosticism", "sep-problem-of-evil"],
    resources: ["gaudium-et-spes"],
  },
  {
    slug: "agnosticism",
    name: "Agnosticism",
    group: "worldview",
    overview: [
      "Agnosticism is the view that we do not, or cannot, know whether God exists. The term was coined in the late nineteenth century by the English biologist T. H. Huxley.",
      "Agnostics range from people who think the question can never be answered to people who simply have not found the arguments on either side convincing. Many remain open and searching.",
    ],
    differences: [
      "Whether God’s existence can be known",
      "Whether faith can be reasonable",
      "What to make of suffering and of God’s seeming silence",
    ],
    sources: ["sep-atheism-agnosticism"],
    resources: ["gaudium-et-spes"],
  },
  { slug: "other-worldviews", name: "Other worldviews", group: "worldview" },
];
