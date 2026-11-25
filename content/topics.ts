import type { Topic } from "./types";

// Catechism links go to the official Vatican text. Each page holds the paragraphs cited.
const ccc = (page: string) => `https://www.vatican.va/archive/ENG0015/${page}.HTM`;
const bible = (bookAndChapter: string) => `https://bible.usccb.org/bible/${bookAndChapter}`;

export const topics: Topic[] = [
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

// The beginner path behind "New to Catholicism? Start here", in reading order.
export const startHere = ["how-to-become-catholic", "what-happens-at-mass", "real-presence"];

// Shown on the homepage.
export const commonQuestions = ["how-to-become-catholic", "what-happens-at-mass", "real-presence"];
