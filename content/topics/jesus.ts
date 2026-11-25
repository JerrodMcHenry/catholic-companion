// Learn › What Catholics Believe: Jesus Christ.
// "Is Jesus truly God?" lives in apologetics.ts because it carries a debate section.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const jesus: Topic[] = [
  {
    slug: "who-is-jesus",
    title: "Jesus Christ",
    question: "Who is Jesus?",
    alsoKnownAs: ["Jesus Christ", "Christology"],
    category: "beliefs",
    keywords: ["Jesus", "Christ", "Messiah", "Son of God", "Lord", "Savior", "Jesus of Nazareth"],
    summary:
      "Catholics believe that Jesus of Nazareth, a Jew born in Bethlehem and crucified under Pontius Pilate, is the eternal Son of God made man. His name means “God saves.” He is the Christ, the Messiah anointed by God; the Son of God; and the Lord. By his life, death, and resurrection he reconciles us to God.",
    explanation: [
      "Jesus was a real man of history: born of the Virgin Mary in the time of King Herod and the emperor Caesar Augustus, a carpenter by trade, who died on a cross in Jerusalem. Christians believe this same man is the eternal Son of God.",
      "His names tell us who he is. “Jesus” means “God saves.” “Christ” comes from the Greek translation of the Hebrew “Messiah,” meaning “anointed.” “Son of God” in his case means God's unique, eternal Son. And “Lord,” the title the Greek Old Testament used for God's own name, is given to Jesus in the New Testament to recognize his divinity.",
      "When Jesus asked his disciples who they thought he was, Peter answered, “You are the Messiah” (Mark 8:29). Christians have been answering that question ever since.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "423", url: ccc("__P1D") },
        { paragraphs: "430–435", url: ccc("__P1E") },
        { paragraphs: "436–440", url: ccc("__P1F") },
        { paragraphs: "441–445", url: ccc("__P1G") },
        { paragraphs: "446–451", url: ccc("__P1H") },
      ],
      scripture: [
        { passage: "Mark 8:27–30", url: bible("mark/8") },
        { passage: "John 1:1–18", url: bible("john/1") },
      ],
    },
    resources: ["ncr-christology-101", "ca-god-became-man"],
    related: ["divinity-of-jesus", "incarnation", "why-did-jesus-die", "resurrection"],
  },
  {
    slug: "did-jesus-exist",
    title: "The Historical Jesus",
    question: "Did Jesus really exist?",
    alsoKnownAs: ["Historical Jesus"],
    category: "beliefs",
    keywords: ["did Jesus exist", "historical Jesus", "Jesus myth", "evidence for Jesus", "Tacitus", "Josephus", "history"],
    summary:
      "Yes. Historians, including many who are not Christians, broadly accept that Jesus of Nazareth was a real Jewish teacher who was crucified under Pontius Pilate. Besides the New Testament, which includes letters written within a few decades of his death, ancient non-Christian writers such as the Roman historian Tacitus and the Jewish historian Josephus mention him.",
    explanation: [
      "The earliest Christian writings about Jesus are St. Paul's letters. Around the year 56, Paul passed on to the Corinthians a summary of the faith that he had himself received: that Christ died, was buried, rose, and appeared to many witnesses (1 Corinthians 15:3–8).",
      "Roman and Jewish writers also mention him. Describing Nero's persecution of Christians, the historian Tacitus writes that “Christus, from whom the name had its origin, suffered the extreme penalty during the reign of Tiberius” under the procurator Pontius Pilate (Annals 15.44). The Jewish historian Josephus refers to James as “the brother of Jesus, who was called Christ” (Antiquities 20.9.1).",
      "Historians debate many details of Jesus' life, and accepting that he existed is not the same as believing that he is the Son of God. But the claim that Jesus never existed has very little support among scholars. (This paragraph summarizes historical evidence, not Church teaching.)",
      "Christian faith rests on the witness of the apostles handed on in the Church, but it is faith in someone who truly lived in history, “under Pontius Pilate,” as the Creed says.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "423", url: ccc("__P1D") },
        { paragraphs: "639", url: ccc("__P1S") },
      ],
      scripture: [{ passage: "1 Corinthians 15:3–8", url: bible("1corinthians/15") }],
    },
    resources: ["ca-did-jesus-exist", "ca-four-reasons-jesus-existed"],
    related: ["who-is-jesus", "resurrection", "divinity-of-jesus"],
  },
  {
    slug: "incarnation",
    title: "The Incarnation",
    question: "Why did God become man?",
    alsoKnownAs: ["Incarnation", "The Word made flesh"],
    category: "beliefs",
    keywords: ["Incarnation", "God became man", "Word became flesh", "Christmas", "true God and true man", "why did Jesus come"],
    summary:
      "Catholics believe the eternal Son of God became a man, Jesus Christ, without ceasing to be God. The Church calls this the Incarnation, from John's words “the Word became flesh.” The Catechism gives four reasons: to save us by reconciling us with God, to show us God's love, to be our model of holiness, and to make us sharers in the divine nature.",
    explanation: [
      "The Son of God “emptied himself” and took the form of a servant (Philippians 2:7). He came, as the Nicene Creed says, “for us men and for our salvation.”",
      "He came to save us: our fallen nature needed to be healed and raised up. And he came so that we might know God's love: “For God so loved the world that he gave his only Son” (John 3:16).",
      "He came to be our model, showing what a fully human life looks like when it is lived in love for the Father and for others. And he came so that we might “share in the divine nature” (2 Peter 1:4). St. Athanasius put it boldly: the Son of God became man so that we might become God, that is, share by grace in God's own life.",
      "Jesus is not part God and part man, nor a mixture of the two. He is truly God and truly man, a truth the Church defended against early heresies.",
    ],
    teaching: {
      catechism: [{ paragraphs: "456–469", url: ccc("__P1J") }],
      scripture: [
        { passage: "John 1:14", url: bible("john/1") },
        { passage: "Philippians 2:5–11", url: bible("philippians/2") },
        { passage: "John 3:16–17", url: bible("john/3") },
        { passage: "2 Peter 1:3–4", url: bible("2peter/1") },
      ],
    },
    resources: ["ca-god-became-man", "athanasius-on-the-incarnation"],
    related: ["who-is-jesus", "divinity-of-jesus", "why-did-jesus-die"],
  },
  {
    slug: "why-did-jesus-die",
    title: "The Cross",
    question: "Why did Jesus die on the cross?",
    alsoKnownAs: ["Atonement", "Redemption", "Paschal Mystery"],
    category: "beliefs",
    keywords: ["why did Jesus die", "crucifixion", "cross", "atonement", "sacrifice", "salvation", "died for our sins", "Good Friday", "redemption"],
    summary:
      "Catholics believe Jesus freely gave his life on the cross out of love, to save us from sin and reconcile us with God. His death was not an accident but part of God's plan, foretold in the Scriptures. As the Lamb of God, Jesus offered the one perfect sacrifice that takes away the sin of the world and opens the way to new life.",
    explanation: [
      "Jesus said he came “to give his life as a ransom for many” (Mark 10:45). The earliest Christian creed, passed on by St. Paul, says “that Christ died for our sins in accordance with the scriptures” (1 Corinthians 15:3), recalling Isaiah's suffering Servant: “by his wounds we were healed” (Isaiah 53:5).",
      "The cross reveals God's love: Christ died for us “while we were still sinners” (Romans 5:8). The Father gave his Son, and the Son freely offered himself in obedience and love, in place of our disobedience.",
      "Christ's sacrifice is unique: it completes and surpasses all the sacrifices of the Old Testament. It is his love “to the end” that gives his death its power to save, and because he is a divine person, his offering embraces every human being.",
      "The Church teaches that responsibility for Jesus' death cannot be laid on the Jewish people as a whole. Rather, all sinners share responsibility for his sufferings, and Christians bear the gravest responsibility of all.",
    ],
    teaching: {
      catechism: [{ paragraphs: "597–618", url: ccc("__P1O") }],
      scripture: [
        { passage: "Mark 10:45", url: bible("mark/10") },
        { passage: "Isaiah 53:4–6", url: bible("isaiah/53") },
        { passage: "Romans 5:6–8", url: bible("romans/5") },
        { passage: "1 Corinthians 15:3", url: bible("1corinthians/15") },
      ],
    },
    resources: ["video-why-jesus-had-to-die", "ca-why-jesus-died"],
    related: ["incarnation", "resurrection", "who-is-jesus"],
  },
  {
    slug: "resurrection",
    title: "The Resurrection",
    question: "Did Jesus really rise from the dead?",
    alsoKnownAs: ["Resurrection", "Easter"],
    category: "beliefs",
    keywords: ["resurrection", "rose from the dead", "empty tomb", "Easter", "risen", "appearances", "evidence for the resurrection"],
    summary:
      "Catholics believe that on the third day after his death, Jesus truly rose from the dead in his own body, now glorified, and appeared to his disciples. The Resurrection is the crowning truth of the Christian faith; St. Paul wrote that faith would be in vain “if Christ has not been raised.” It confirms Jesus' teaching and divinity and is the source of our own future resurrection.",
    explanation: [
      "The Church teaches that the Resurrection is a real event with manifestations that were historically verified, as the New Testament bears witness. It is also more than a return to ordinary life: Jesus passed into a new, glorified life.",
      "The New Testament gives two kinds of evidence: the empty tomb, found by the women who came to anoint his body, and the appearances of the risen Jesus to Peter, to the Twelve, and to many others (1 Corinthians 15:3–8; Luke 24).",
      "The disciples were not expecting it. The Gospels record their fear and doubt even when they saw him, so the Catechism notes that the Resurrection cannot be explained as something the apostles produced out of their own faith or credulity.",
      "For Christians, Easter changes everything: it confirms that Jesus is who he said he was, opens the way to new life now, and is the promise that our bodies too will rise.",
    ],
    teaching: {
      catechism: [{ paragraphs: "638–655", url: ccc("__P1S") }],
      scripture: [
        { passage: "1 Corinthians 15:3–20", url: bible("1corinthians/15") },
        { passage: "Luke 24:1–12", url: bible("luke/24") },
        { passage: "John 20:24–29", url: bible("john/20") },
      ],
    },
    resources: ["ca-resurrection-reasonable", "video-barron-resurrection"],
    related: ["why-did-jesus-die", "did-jesus-exist", "who-is-jesus"],
  },
];
