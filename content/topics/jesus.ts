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
    keywords: ["did Jesus exist", "historical Jesus", "Jesus myth", "evidence for Jesus", "Tacitus", "Josephus", "history", "mythicism", "mythicist", "Christ myth"],
    summary:
      "Yes: historians, including many who are not Christians, broadly accept that Jesus of Nazareth was a real Jewish teacher who was crucified under Pontius Pilate. Besides the New Testament, which includes letters written within a few decades of his death, ancient non-Christian writers such as the Roman historian Tacitus and the Jewish historian Josephus mention him.",
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
    resources: ["ca-did-jesus-exist", "ca-four-reasons-jesus-existed", "ehrman-did-jesus-exist", "tacitus-annals-15"],
    related: ["who-is-jesus", "resurrection", "divinity-of-jesus"],
    debate: {
      catholicPosition: {
        summary:
          "Jesus of Nazareth is a real historical person who taught in Galilee and Judea and was crucified under Pontius Pilate; the Creed's words “under Pontius Pilate” anchor the faith in history. The Church holds that the Gospels “faithfully hand on what Jesus Christ … really did and taught” (Dei Verbum 19). History can show that Jesus lived; recognizing him as the Son of God is an act of faith.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "atheism",
          position:
            "Most historians, believers or not, accept that Jesus existed, but a small number of writers known as mythicists argue that he did not. Richard Carrier proposes that Christianity may have begun as “an apocalyptic cult inspired by visions of a heavenly being” that later “historicized its celestial savior,” noting that the earliest Christian letters speak of Jesus chiefly as a heavenly figure known by revelation.",
          variations:
            "Many non-Christian scholars reject mythicism. The New Testament scholar Bart Ehrman writes that “virtually every sane historian on the planet” has concluded that Jesus existed and that “Jesus certainly existed.” Rejecting mythicism does not mean accepting Christian beliefs about Jesus.",
          arguments: [
            {
              claim: "No Roman records from Jesus' own lifetime mention him.",
              response:
                "Ehrman notes that the Roman sources of the time “mention scarcely anyone from his time and place,” not even Pontius Pilate in some cases. Within a few years of Jesus' death, Paul knew his closest disciple Peter and his brother James (Galatians 1:18–19), and later Tacitus and Josephus mention him.",
              authority: "apologetic-argument",
            },
            {
              claim: "The story of Jesus was modeled on pagan gods who were born of virgins, died, and rose again.",
              response:
                "Ehrman judges that such alleged parallels “in most instances reside in the modern imagination.” He also points out that no Jews before Christianity expected a crucified messiah, so it is not the kind of figure someone inventing a savior would create.",
              authority: "apologetic-argument",
            },
            {
              claim: "The sources about Jesus are Christian and therefore biased.",
              response:
                "Ehrman answers that “historians can never dismiss sources simply because they are biased”; they sift biased sources for reliable information, as they do for any ancient figure.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["carrier-historicity"],
        },
      ],
    },
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
    keywords: ["why did Jesus die", "crucifixion", "cross", "atonement", "sacrifice", "salvation", "died for our sins", "Good Friday", "redemption", "atonement", "penal substitution", "why couldn't God just forgive"],
    summary:
      "Catholics believe Jesus freely gave his life on the cross out of love, to save us from sin and reconcile us with God. His death was not an accident but part of God's plan, foretold in the Scriptures. As the Lamb of God, Jesus offered the one perfect sacrifice that takes away the sin of the world and opens the way to new life.",
    explanation: [
      "Jesus said he came “to give his life as a ransom for many” (Mark 10:45). The earliest Christian creed, passed on by St. Paul, says “that Christ died for our sins in accordance with the scriptures” (1 Corinthians 15:3), recalling Isaiah's suffering Servant: “by his wounds we were healed” (Isaiah 53:5).",
      "The cross reveals God's love: Christ died for us “while we were still sinners” (Romans 5:8). The Father gave his Son, and the Son freely offered himself in obedience and love, in place of our disobedience.",
      "Christ's sacrifice is unique: it completes and surpasses all the sacrifices of the Old Testament. It is his love “to the end” that gives his death its power to save, and because he is a divine person, his offering embraces every human being.",
      "The Church teaches that responsibility for Jesus' death cannot be laid on the Jewish people as a whole. Rather, all sinners share responsibility for his sufferings, and Christians bear the gravest responsibility of all.",
      "An early witness: in the fourth century, St. Athanasius explained that the Word took a human body and, “because all were under penalty of the corruption of death He gave it over to death in the stead of all, and offered it to the Father — doing this, moreover, of His loving-kindness” (On the Incarnation 8).",
      "Was the Father punishing his Son? Some critics call the Cross cruel, and Christians explain the atonement in different ways. The Catholic Church teaches that the Father and the Son act in one love. God's plan is “one of benevolent love, prior to any merit on our part” (CCC 604), and “it is love ‘to the end’ that confers on Christ's sacrifice its value as redemption and reparation, as atonement and satisfaction” (CCC 616). Jesus “did not experience reprobation as if he himself had sinned” (CCC 603), and he laid down his life freely (John 10:17–18). “In this is love: not that we have loved God, but that he loved us and sent his Son as expiation for our sins” (1 John 4:10).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "597–618", url: ccc("__P1O") },
      ],
      scripture: [
        { passage: "Mark 10:45", url: bible("mark/10") },
        { passage: "Isaiah 53:4–6", url: bible("isaiah/53") },
        { passage: "Romans 5:6–8", url: bible("romans/5") },
        { passage: "1 Corinthians 15:3", url: bible("1corinthians/15") },
        { passage: "John 10:11–18", url: bible("john/10") },
        { passage: "1 John 4:9–10", url: bible("1john/4") },
      ],
    },
    resources: ["video-why-jesus-had-to-die", "ca-why-jesus-died", "athanasius-on-the-incarnation"],
    related: ["incarnation", "resurrection", "who-is-jesus"],
  },
  {
    slug: "was-jesus-crucified",
    title: "The Crucifixion",
    question: "Was Jesus really crucified?",
    alsoKnownAs: ["Crucifixion of Jesus", "Death of Jesus"],
    category: "beliefs",
    keywords: ["crucifixion", "was Jesus crucified", "did Jesus die on the cross", "Pontius Pilate", "Tacitus", "Quran 4:157", "swoon theory", "substitution", "Good Friday", "historical Jesus"],
    summary:
      "Yes. That Jesus was crucified under Pontius Pilate is one of the best-attested facts about him: it is reported by all four Gospels and by St. Paul, and by the Roman historian Tacitus. Christians believe more than the historical fact: that in his death Jesus freely gave his life for the salvation of the world. Muslims, following the Qur'an, generally hold that Jesus was not crucified.",
    explanation: [
      "The earliest witness: around the year 56, St. Paul handed on what he had received: “that Christ died for our sins in accordance with the scriptures; that he was buried; that he was raised on the third day” (1 Corinthians 15:3–4). All four Gospels narrate the crucifixion under Pontius Pilate (Mark 15; John 19).",
      "A Roman witness: describing Nero's persecution of Christians, the historian Tacitus writes that “Christus, the founder of the name, had undergone the death penalty in the reign of Tiberius, by sentence of the procurator Pontius Pilatus” (Annals 15.44).",
      "Not something followers would invent: Paul admits that “Christ crucified” was “a stumbling block to Jews and foolishness to Gentiles” (1 Corinthians 1:23). The New Testament scholar Bart Ehrman notes that before Christianity “there were no Jews at all, of any kind whatsoever, who thought that there would be a future crucified messiah.” (This paragraph summarizes historical arguments, not Church teaching.)",
      "What faith adds: history can establish that Jesus was crucified; faith understands why. Jesus' death was “not the result of chance” but part of God's plan (CCC 599), and Jesus “freely accepted his Passion and death” out of love for the Father and for us (CCC 609). See “Why did Jesus die on the cross?”",
      "No collective blame: the Church teaches that responsibility for Jesus' death cannot be laid on the Jews of his time as a whole, nor on Jews today (CCC 597; Nostra Aetate 4).",
      "Muslims honor Jesus as a prophet but, following the Qur'an, generally hold that he was not crucified. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "571–573", url: ccc("__P1M") },
        { paragraphs: "595–609", url: ccc("__P1O") },
      ],
      scripture: [
        { passage: "Mark 15:15–39", url: bible("mark/15") },
        { passage: "John 19:16–37", url: bible("john/19") },
        { passage: "1 Corinthians 15:3–8", url: bible("1corinthians/15") },
        { passage: "1 Corinthians 1:18–25", url: bible("1corinthians/1") },
      ],
      documents: ["nostra-aetate"],
    },
    resources: ["ehrman-did-jesus-exist", "tacitus-annals-15"],
    related: ["why-did-jesus-die", "resurrection", "did-jesus-exist", "divinity-of-jesus"],
    debate: {
      catholicPosition: {
        summary:
          "Jesus truly suffered, died on the cross under Pontius Pilate, and was buried. Christians believe that his death was not a defeat but the free gift of his life for the salvation of the world, “accomplished ‘once for all’ by the redemptive death of his Son” (CCC 571, 609).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "islam",
          position:
            "The Qur'an says of Jesus: “they neither killed nor crucified him—it was only made to appear so,” and “Allah raised him up to Himself” (4:157–158). Muslims generally hold that Jesus did not die on the cross and was taken up to God.",
          variations:
            "Muslim interpreters understand “it was only made to appear so” in different ways. A view reported by al-Tabari and Ibn Kathir, which SeekersGuidance calls the strongest position, is that God “cast the likeness of Isa upon another,” who was crucified in his place, while Jesus was raised. Wahiduddin Khan's commentary stresses that God protected his messenger against the plots of his enemies without describing how. The Ahmadiyya Muslim Community teaches that Jesus was put on the cross but did not die there, and rejects the substitution theory.",
          arguments: [
            {
              claim: "Jesus was not crucified at all; it was only made to appear so.",
              response:
                "Catholics respect the Qur'an's concern to honor Jesus, but the crucifixion is attested by the earliest Christian writings, including Paul's letters, written within about twenty-five years (1 Corinthians 15:3), and by the Roman historian Tacitus, who records that “Christus … had undergone the death penalty in the reign of Tiberius, by sentence of the procurator Pontius Pilatus” (Annals 15.44).",
              authority: "apologetic-argument",
            },
            {
              claim: "God would not abandon his prophet to such a death.",
              response:
                "Christians believe that Jesus was not overcome by death but went to it freely: “No one takes it from me, but I lay it down on my own” (John 10:18). They see God's vindication of Jesus in the Resurrection, not in his escape from the cross (see “Did Jesus really rise from the dead?”).",
              authority: "doctrine",
            },
          ],
          sources: ["quran-4-157", "seekers-4-157", "ibn-kathir-4-157", "alislam-death-of-jesus"],
        },
      ],
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Trallians, Chapter 9 (c. 107)",
          note: "Jesus “was truly persecuted under Pontius Pilate; He was truly crucified, and [truly] died.”",
          url: "https://www.newadvent.org/fathers/0106.htm",
        },
      ],
    },
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
    debate: {
      catholicPosition: {
        summary:
          "Jesus truly rose from the dead in his own body, now glorified. The Church holds that the Resurrection is a real event with manifestations that were historically verified, the empty tomb and the appearances, and at the same time a mystery of faith that “transcends and surpasses history”: no one saw it happen or can say how it came about (CCC 639, 647).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "atheism",
          position:
            "Skeptics hold that a resurrection from the dead cannot be established historically, because a miracle will always be the least likely explanation of the evidence. The philosopher David Hume argued that “a miracle is a violation of the laws of nature,” and that “no testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish” (Enquiry, Section X).",
          arguments: [
            {
              claim: "Dead people do not rise; no historical evidence could be strong enough to prove a miracle.",
              response:
                "Catholics agree that resurrection is not a natural process and that historical study alone cannot prove a miracle. The Church distinguishes what historians can examine, such as the empty tomb and the disciples' encounters with the risen Christ, from the conclusion of faith that God raised him, which “transcends and surpasses history” (CCC 647). Whether the evidence is best explained by a resurrection depends partly on whether one believes God exists and can act.",
              authority: "apologetic-argument",
            },
            {
              claim: "The disciples had visions born of grief and hope.",
              response:
                "The Gospels show disciples who were not expecting a resurrection: they were “demoralized” and frightened, and dismissed the women's report as “an idle tale” (CCC 643). Paul lists appearances to individuals and groups, including more than five hundred at once, “most of whom are still living” (1 Corinthians 15:6). Catholics argue that grief visions do not easily explain group appearances, the empty tomb, or the conversion of a persecutor like Paul.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["hume-of-miracles"],
        },
        {
          tradition: "islam",
          position:
            "Islam teaches that Jesus was not killed or crucified but that “Allah raised him up to Himself” (Qur'an 4:158). Muslims therefore do not believe in his death and resurrection as Christians do; many hold that Jesus was raised alive to God. The interpretations of these verses are set out under “Was Jesus really crucified?”",
          arguments: [
            {
              claim: "God would not let his messenger die a shameful death; he rescued Jesus instead.",
              response:
                "Christians believe God's power was shown not in sparing Jesus from death but in raising him from it. Jesus foretold that he must suffer, be killed, and rise after three days (Mark 8:31), and he “freely accepted his Passion and death” out of love (CCC 609).",
              authority: "doctrine",
            },
          ],
          sources: ["quran-4-157", "seekers-4-157"],
        },
      ],
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Smyrnaeans, Chapter 3 (c. 107)",
          note: "“I know that after His resurrection also He was still possessed of flesh.”",
          url: "https://www.newadvent.org/fathers/0109.htm",
        },
      ],
    },
  },
];
