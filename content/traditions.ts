import type { Tradition } from "./types";

// Religious traditions and worldviews. Only entries with an overview get a page;
// the rest are listed as "coming soon".
export const traditions: Tradition[] = [
  // Christian traditions
  {
    slug: "protestantism",
    name: "Protestantism",
    group: "christian",
    keywords: ["Protestant", "Protestants", "Reformation", "Martin Luther", "John Calvin", "denominations"],
    overview: [
      "Protestantism began with the Reformation of the sixteenth century, when reformers such as Martin Luther and John Calvin sought to reform the Western Church and, in the end, separated from Rome. Today it includes many different churches and traditions around the world.",
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
    related: ["catholic-and-protestant-differences", "real-presence"],
  },
  { slug: "baptist", name: "Baptist", group: "christian", parent: "protestantism" },
  { slug: "lutheran", name: "Lutheran", group: "christian", parent: "protestantism" },
  { slug: "reformed", name: "Reformed and Presbyterian", group: "christian", parent: "protestantism" },
  { slug: "anglican", name: "Anglican", group: "christian", parent: "protestantism" },
  { slug: "methodist", name: "Methodist", group: "christian", parent: "protestantism" },
  { slug: "pentecostal", name: "Pentecostal", group: "christian", parent: "protestantism" },
  {
    slug: "evangelical",
    name: "Evangelical and non-denominational",
    group: "christian",
    parent: "protestantism",
    keywords: ["evangelical", "evangelicals", "non-denominational", "born again", "Bible church", "nondenominational"],
    overview: [
      "Evangelical Christians take their name from the Greek word for “good news,” the Gospel. The National Association of Evangelicals describes them as a diverse group “found in many churches, denominations and nations,” bringing together Reformed, Holiness, Anabaptist, Pentecostal, Charismatic, and other traditions. Many worship in independent or non-denominational churches.",
      "Evangelicals are often summarized by four emphases identified by the historian David Bebbington: conversion (lives transformed through a “born-again” experience), the Bible as the ultimate authority, active mission and service, and the cross of Christ as the center of redemption. The NAE Statement of Faith confesses the Bible as “the only infallible, authoritative Word of God,” the Trinity, the deity of Christ and his atoning death and bodily resurrection, and that “regeneration by the Holy Spirit is absolutely essential” for salvation.",
      "Catholics share much of this faith: the Trinity, the divinity of Christ, his saving death and resurrection, the inspiration of Scripture, and the call to personal conversion and to proclaim the Gospel. The Catholic Church regards baptized evangelicals as brothers and sisters in Christ.",
    ],
    differences: [
      "Authority: the Bible alone, or Scripture and Tradition interpreted by the Church's teaching office",
      "The Church: independent congregations, or one Church founded on the apostles",
      "Baptism and the Lord's Supper: for many evangelicals, ordinances and symbols; for Catholics, sacraments that give grace",
      "Salvation: how faith, Baptism, and perseverance relate, and what assurance a believer can have",
      "Mary and the saints",
    ],
    sources: ["nae-what-is-an-evangelical", "nae-statement-of-faith", "lausanne-covenant", "baptist-faith-message"],
    resources: ["unitatis-redintegratio", "ca-are-catholics-christian", "ca-assurance-of-salvation", "ca-scripture-and-tradition"],
    related: ["catholic-and-protestant-differences", "did-jesus-found-a-church", "faith-and-works", "how-are-we-saved", "infant-baptism", "real-presence"],
  },
  { slug: "eastern-orthodoxy", name: "Eastern Orthodoxy", group: "christian" },
  { slug: "oriental-orthodoxy", name: "Oriental Orthodoxy", group: "christian" },
  { slug: "latter-day-saints", name: "Latter-day Saints", group: "christian" },
  {
    slug: "jehovahs-witnesses",
    name: "Jehovah’s Witnesses",
    group: "christian",
    keywords: ["Jehovah’s Witness", "JW", "Watchtower", "Kingdom Hall", "New World Translation"],
    overview: [
      "Jehovah’s Witnesses grew out of the Bible Student movement led by Charles Taze Russell in the United States in the 1870s. Witnesses are known for their door-to-door ministry, their use of God’s name, Jehovah, and their own translation of the Bible, the New World Translation. They are guided by a Governing Body.",
      "According to their publications, Jehovah alone is Almighty God, Jesus is God’s Son and the first of his creations, and the holy spirit is God’s active force rather than a person.",
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
    keywords: ["Muslim", "Muslims", "Qur’an", "Koran", "Allah", "Muhammad"],
    overview: [
      "Islam teaches that God (in Arabic, Allah) revealed the Qur’an to the Prophet Muhammad in seventh-century Arabia, calling people to worship the one God proclaimed by earlier prophets. It is one of the world’s largest religions; its two main branches are Sunni and Shia.",
      "The Qur’an honors Jesus as a prophet and the Messiah, born of the Virgin Mary, but teaches that he is not God or the Son of God.",
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
    keywords: ["atheist", "atheists", "nonbeliever", "unbeliever", "does God exist"],
    overview: [
      "Atheism is the view that God does not exist, or more broadly the absence of belief in God. People come to it by many different paths, and atheists hold a wide range of philosophical views.",
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
    keywords: ["agnostic", "agnostics", "doubt", "unsure about God"],
    overview: [
      "Agnosticism is the view that we do not, or cannot, know whether God exists. The term was coined in the late nineteenth century by the English biologist T. H. Huxley.",
      "Some agnostics hold that the question can never be answered; others have simply not found the arguments on either side convincing.",
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
