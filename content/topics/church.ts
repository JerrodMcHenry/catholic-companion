// Learn › The Church: the Church, Sacred Tradition, and Church authority.
// "Is the Bible the only authority?" lives in apologetics.ts because it carries a debate section.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const church: Topic[] = [
  {
    slug: "what-is-the-church",
    title: "The Church",
    question: "What is the Church?",
    alsoKnownAs: ["Body of Christ", "People of God", "Ecclesia"],
    category: "church",
    keywords: ["Church", "what is the church", "Body of Christ", "People of God", "ecclesia", "Catholic Church", "community of believers"],
    summary:
      "The word “church” means an assembly of people called together; for Christians it is the people God gathers in Christ throughout the world. The Church is at once the liturgical assembly, the local community, and the worldwide family of believers. Catholics believe the Church is the People of God and the Body of Christ, with Christ as its head.",
    explanation: [
      "The Greek word ekklesia, a “convocation,” was used in the Greek Old Testament for Israel gathered before God. The first Christians took it for themselves, seeing the Church as the heir of that assembly.",
      "God chose to save people not merely as individuals but by making them into a people. He prepared that people in Israel and gathered it anew in Christ.",
      "St. Paul calls the Church the Body of Christ: “Now you are Christ’s body” (1 Corinthians 12:27). Christ is its head, and the Church is united to him and draws its life from him, above all in the Eucharist.",
      "Catholics believe Christ founded the Church on the apostles, with Peter at their head, and that it continues in the bishops in communion with the pope. The related questions explain this further.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "751–752", url: ccc("__P27") },
        { paragraphs: "781–796", url: ccc("__P28") },
      ],
      scripture: [
        { passage: "Matthew 16:18", url: bible("matthew/16") },
        { passage: "1 Corinthians 12:12–27", url: bible("1corinthians/12") },
        { passage: "Ephesians 1:22–23", url: bible("ephesians/1") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-what-catholics-believe"],
    related: ["what-is-the-pope", "bishops-priests-deacons", "what-is-sacred-tradition", "what-does-catholic-mean"],
  },
  {
    slug: "what-is-sacred-tradition",
    title: "Sacred Tradition",
    question: "What is Sacred Tradition?",
    alsoKnownAs: ["Apostolic Tradition", "Tradition and traditions"],
    category: "church",
    keywords: ["Tradition", "Sacred Tradition", "oral tradition", "apostolic tradition", "traditions of men", "Scripture and Tradition", "handing on the faith"],
    summary:
      "Sacred Tradition is the living handing on of the Gospel that comes from the apostles, through the Church, by the power of the Holy Spirit. The apostles passed on what they received from Christ both by preaching and example and in writing, in the Scriptures. Catholics believe Scripture and Tradition flow from the same divine source and together form one deposit of God's word, entrusted to the Church.",
    explanation: [
      "Christ commanded the apostles to preach the Gospel. They handed it on in two ways: by word of mouth, example, and the institutions they established, and in writing. To keep the Gospel whole and alive, they left bishops as their successors.",
      "This living transmission is called Tradition. The first Christians did not yet have a written New Testament, and the New Testament itself shows the process: St. Paul tells believers to “hold fast to the traditions” he handed on, whether by word or by letter (2 Thessalonians 2:15).",
      "Apostolic Tradition is different from the many theological, liturgical, and devotional traditions that grow up in local churches. Those customs can be kept, changed, or set aside under the Church's guidance; the Tradition that comes from the apostles cannot.",
      "The Church's teaching office does not stand above Scripture and Tradition. It “is not above the word of God, but serves it” (Dei Verbum 10).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "75–79", url: ccc("__PK") },
        { paragraphs: "80–83", url: ccc("__PL") },
      ],
      scripture: [
        { passage: "2 Thessalonians 2:15", url: bible("2thessalonians/2") },
        { passage: "1 Corinthians 11:2", url: bible("1corinthians/11") },
        { passage: "2 Timothy 2:2", url: bible("2timothy/2") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["ca-scripture-and-tradition"],
    related: ["sola-scriptura", "divine-revelation", "what-is-dogma"],
  },
  {
    slug: "what-is-the-pope",
    title: "The Pope",
    question: "What is the pope?",
    alsoKnownAs: ["Papacy", "Bishop of Rome", "Successor of Peter", "Vicar of Christ"],
    category: "church",
    keywords: ["pope", "papacy", "Bishop of Rome", "Vatican", "Holy Father", "Peter", "Vicar of Christ", "papal authority"],
    summary:
      "The pope is the Bishop of Rome and the successor of St. Peter, whom Jesus made the “rock” of his Church. He is the visible source and foundation of unity for the bishops and for all the faithful. The Church teaches that he has full, supreme, and universal authority to shepherd the whole Church, which he exercises together with the bishops in communion with him.",
    explanation: [
      "Jesus gave Simon the name Peter, meaning “rock”: “you are Peter, and upon this rock I will build my church” (Matthew 16:18). He gave Peter the keys of the kingdom, asked him to strengthen his brothers (Luke 22:32), and after the Resurrection told him, “Feed my sheep” (John 21:17).",
      "Catholics believe Peter's role continues in his successors as Bishop of Rome. Just as Peter and the other apostles formed one college, the pope and the bishops form one college today.",
      "When the pope, as supreme teacher of all the faithful, proclaims by a definitive act a doctrine of faith or morals, the Church teaches that he does so infallibly. Infallibility concerns this kind of definitive teaching; it does not mean the pope is sinless or that everything he says is infallible.",
      "How Scripture and the early Church support the papacy, and how Orthodox and Protestant Christians see it, are covered in Apologetics.",
    ],
    teaching: {
      catechism: [{ paragraphs: "880–882, 891", url: ccc("__P2A") }],
      scripture: [
        { passage: "Matthew 16:13–19", url: bible("matthew/16") },
        { passage: "Luke 22:31–32", url: bible("luke/22") },
        { passage: "John 21:15–17", url: bible("john/21") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-what-catholics-believe-about-the-pope"],
    related: ["what-is-the-church", "bishops-priests-deacons", "what-is-dogma"],
  },
  {
    slug: "bishops-priests-deacons",
    title: "Bishops, Priests, and Deacons",
    question: "What do bishops, priests, and deacons do?",
    alsoKnownAs: ["Holy Orders", "Clergy", "Hierarchy"],
    category: "church",
    keywords: ["bishop", "priest", "deacon", "clergy", "ordination", "Holy Orders", "diocese", "presbyter", "ordained ministry"],
    summary:
      "Bishops, priests, and deacons are the three degrees of the Sacrament of Holy Orders. Bishops are successors of the apostles, each shepherding a local Church, or diocese, in communion with the pope. Priests are their co-workers, who preach, celebrate the sacraments, and lead parishes. Deacons are ordained for service: they assist at the liturgy and distribute Communion, proclaim the Gospel and preach, bless marriages, preside at funerals, and serve in works of charity.",
    explanation: [
      "The New Testament already shows the apostles appointing leaders: seven men chosen to serve in Jerusalem (Acts 6:1–6), presbyters appointed in every church (Acts 14:23; Titus 1:5), and instructions for bishops and deacons (1 Timothy 3).",
      "Early in the second century, St. Ignatius of Antioch told the churches he addressed to follow the bishop, the presbytery, and the deacons, an early witness to this threefold ministry.",
      "Bishops receive the fullness of the sacrament. Priests share in their ministry, above all in celebrating the Eucharist. Deacons are ordained “not unto the priesthood, but unto the ministry.”",
      "In the Latin Church, ordained ministers other than permanent deacons are normally chosen from among men who live a celibate life. Since the Second Vatican Council, the Latin Church has restored the permanent diaconate, which married men may receive; the Eastern Churches had always kept it.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "874–879, 886", url: ccc("__P2A") },
        { paragraphs: "1554–1571", url: ccc("__P4U") },
        { paragraphs: "1579", url: ccc("__P4X") },
      ],
      scripture: [
        { passage: "Acts 6:1–6", url: bible("acts/6") },
        { passage: "Acts 14:23", url: bible("acts/14") },
        { passage: "1 Timothy 3:1–13", url: bible("1timothy/3") },
        { passage: "Titus 1:5–9", url: bible("titus/1") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-bishop-priest-deacon"],
    related: ["what-is-the-pope", "what-is-the-church", "what-is-sacred-tradition"],
  },
];
