// Learn › What Catholics Believe: Foundations of Catholicism.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const foundations: Topic[] = [
  {
    slug: "what-do-catholics-believe",
    title: "Catholic Beliefs",
    question: "What do Catholics believe, in a nutshell?",
    alsoKnownAs: ["Deposit of faith"],
    category: "beliefs",
    keywords: ["Catholic beliefs", "Catholic faith", "Catholicism", "basics", "overview", "teachings", "four pillars", "what is Catholicism"],
    summary:
      "Catholics believe in one God, who is Father, Son, and Holy Spirit, and in Jesus Christ, God's Son, who became man, died for our sins, and rose from the dead. They believe Christ founded the Church to hand on his teaching and his life, especially through the sacraments. The Catechism gathers the whole faith into four parts: what Catholics believe (the Creed), how they celebrate it (the sacraments), how they live it (the Commandments), and how they pray (the Lord's Prayer).",
    explanation: [
      "Catholic faith is first a response to God, who has made himself known and invites everyone into friendship with him. Its content is summed up in the Creed, the short statement of belief that Christians have professed since the early centuries.",
      "The story in brief: God, who needs nothing, created us “in a plan of sheer goodness” to share his own life (CCC 1). Our first parents turned away from him, and sin and death entered the world (CCC 397–400). God did not abandon us: he made covenants with Noah, Abraham, and Moses, formed Israel as his people, and through the prophets promised a Savior (CCC 54–64). In Jesus Christ, the Son of God became man, died for our sins, and rose from the dead. Through faith, conversion, and Baptism we receive his grace and begin a new life of faith, hope, and charity, loving God with all our heart and our neighbor as ourselves (CCC 1813, 2055). Christ nourishes that life in the Church through the sacraments and prayer, and calls us to grow in holiness until we share the life of heaven, “the ultimate end and fulfillment of the deepest human longings” (CCC 1024).",
      "At the center is Jesus Christ. Catholics believe he is truly God and truly man, that his death and resurrection save us from sin and death, and that he sends the Holy Spirit to make us children of God.",
      "Catholics believe that God's revelation reaches us through Sacred Scripture and Sacred Tradition, entrusted to the Church, and that the Church's teaching office serves that revelation faithfully.",
      "Faith is not only something to know but a life to live: through the sacraments, a moral life shaped by love of God and neighbor, and prayer. These are the four “pillars” on which the Catechism is built.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "13–17", url: ccc("__P5") },
        { paragraphs: "26", url: ccc("__P8") },
        { paragraphs: "185–197", url: ccc("__P14") },
      ],
      scripture: [
        { passage: "John 3:16", url: bible("john/3") },
        { passage: "1 Corinthians 15:3–4", url: bible("1corinthians/15") },
        { passage: "Matthew 28:19–20", url: bible("matthew/28") },
      ],
      documents: ["catechism-vatican", "compendium-ccc"],
    },
    resources: ["ca-what-catholics-believe"],
    related: ["what-is-the-creed", "who-is-jesus", "what-is-the-church", "how-to-become-catholic"],
  },
  {
    slug: "what-does-catholic-mean",
    title: "The Word “Catholic”",
    question: "What does “Catholic” mean?",
    alsoKnownAs: ["Catholicity", "Universal Church"],
    category: "beliefs",
    keywords: ["meaning of catholic", "universal", "Roman Catholic", "why called Catholic", "Catholic Church name", "Ignatius of Antioch"],
    summary:
      "“Catholic” means “universal,” in the sense of “according to the whole.” The Church calls itself catholic for two reasons: Christ is present in it with the fullness of the means of salvation, and it is sent to all people in every place and age. The name is ancient: early in the second century, St. Ignatius of Antioch already wrote of “the Catholic Church.”",
    explanation: [
      "The Church is catholic, first, because it is whole: Christ gives it the complete profession of faith, the full sacramental life, and ordained ministry handed down from the apostles.",
      "It is catholic, second, because it is for everyone. Christ sent the apostles to make disciples of all nations, so the Church is meant to embrace people of every culture, language, and time.",
      "St. Ignatius of Antioch, writing on his way to martyrdom, said that “wherever Jesus Christ is, there is the Catholic Church.” It is one of the earliest known uses of the phrase.",
      "In English, “Roman Catholic” is a common name, but the Church usually calls itself simply the Catholic Church, as in the title of the Catechism of the Catholic Church.",
    ],
    teaching: {
      catechism: [{ paragraphs: "830–831", url: ccc("__P29") }],
      scripture: [{ passage: "Matthew 28:19–20", url: bible("matthew/28") }],
    },
    resources: ["ca-catholic-akin"],
    related: ["are-catholics-christians", "what-is-the-church", "what-do-catholics-believe"],
  },
  {
    slug: "are-catholics-christians",
    title: "Catholics and Christianity",
    question: "Are Catholics Christians?",
    category: "beliefs",
    keywords: ["are Catholics Christian", "Catholic vs Christian", "Catholic or Christian", "Christianity", "Protestant", "born again"],
    summary:
      "Yes: a Christian is someone who believes in Jesus Christ and is baptized into him, and Catholics are baptized believers who profess faith in Christ in the words of the ancient Creeds. The Catholic Church traces its history back to the apostles. Every Catholic is a Christian, though not every Christian is Catholic.",
    explanation: [
      "The name goes back to the first generation of believers: the disciples were first called Christians at Antioch (Acts 11:26). What makes someone a Christian is faith in Christ and Baptism, which the Catechism calls “the basis of the whole Christian life.”",
      "Catholics profess the Nicene Creed, which the Catechism notes is common to the great Churches of East and West: one God in three persons, and Jesus Christ, true God and true man, who died and rose for our salvation.",
      "The Catholic Church also recognizes other baptized believers as Christians. The Catechism teaches that those who believe in Christ and are properly baptized “have a right to be called Christians” and are brothers and sisters to Catholics, even though they are not in full communion with the Catholic Church.",
      "When someone asks whether Catholics are Christians, the real disagreement is usually about particular beliefs, such as the Church, the sacraments, or salvation. Common objections and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1213", url: ccc("__P3G") },
        { paragraphs: "1271", url: ccc("__P3N") },
        { paragraphs: "818, 838", url: ccc("__P29") },
      ],
      scripture: [{ passage: "Acts 11:19–26", url: bible("acts/11") }],
      documents: ["unitatis-redintegratio"],
    },
    resources: ["ca-are-catholics-christian"],
    related: ["catholic-and-protestant-differences", "what-does-catholic-mean", "what-is-the-creed", "sola-scriptura"],
    debate: {
      catholicPosition: {
        summary:
          "Catholics are Christians: they are baptized into Christ and profess the faith of the ancient Creeds, in the Church that traces its history to the apostles. The Catholic Church also recognizes all who believe in Christ and are properly baptized as Christians, brothers and sisters in the Lord, in real though imperfect communion with her.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestant confessions share the faith of the ancient Creeds with Catholics, and many Protestants regard Catholics as fellow Christians. Their disagreement is over whether Catholic teaching on matters such as justification, the Mass, and the papacy is faithful to the Gospel. The Lutheran reformers, presenting the Augsburg Confession in 1530, held that their teaching did not vary “from the Scriptures, or from the Church Catholic, or from the Church of Rome as known from its writers,” and that the dispute concerned “certain abuses.”",
          variations:
            "Protestant judgments differ. The Westminster Confession teaches that the visible church “consists of all those throughout the world that profess the true religion” (25.2), yet warns that some churches “have so degenerated, as to become no churches of Christ” (25.5) and denies that the pope can “in any sense” be head of the Church (25.6). Evangelical statements of faith stress personal faith in Christ and the new birth (NAE Statement of Faith).",
          arguments: [
            {
              claim: "Catholics add works, sacraments, and the Church to Christ, so they do not trust in Christ alone for salvation.",
              response:
                "Catholics believe salvation is God's free gift in Christ: “no one can merit the initial grace of forgiveness and justification” (CCC 2010). Catholics and Lutherans confessed together that “by grace alone, in faith in Christ's saving work and not because of any merit on our part, we are accepted by God” (Joint Declaration 15). The sacraments are Christ's own actions, not human achievements. See “How are we saved?” and “Are we saved by faith or by works?”",
              authority: "doctrine",
            },
            {
              claim: "Catholics give to Mary and the saints honor that belongs to God alone.",
              response:
                "The Church teaches that devotion to Mary “differs essentially from the adoration” given to God (CCC 971), and that veneration of images is “not the adoration due to God alone” (CCC 2132). Catholics worship God alone. See “Do Catholics worship Mary?”",
              authority: "doctrine",
            },
            {
              claim: "Being Catholic is about rituals and membership, not a personal relationship with Jesus.",
              response:
                "Catholics agree that faith must be personal. The Catechism defines faith as “a personal adherence of the whole man to God who reveals himself” (CCC 176) and says the faithful are to live “in a vital and personal relationship with the living and true God” (CCC 2558). Catholics would add that a sacramental, liturgical life is one of the ways that relationship is lived.",
              authority: "doctrine",
            },
          ],
          sources: ["augsburg-confession", "westminster-confession", "nae-statement-of-faith"],
        },
      ],
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Smyrnaeans, Chapter 8 (c. 107)",
          note: "The earliest surviving use of “the Catholic Church”: “wherever Jesus Christ is, there is the Catholic Church.”",
          url: "https://www.newadvent.org/fathers/0109.htm",
        },
      ],
    },
  },
  {
    slug: "what-is-the-creed",
    title: "The Creed",
    question: "What is the Creed?",
    alsoKnownAs: ["Nicene Creed", "Apostles' Creed", "Profession of faith", "Symbol of faith"],
    category: "beliefs",
    keywords: ["creed", "Credo", "I believe", "statement of faith", "Nicene", "Apostles Creed", "Council of Nicaea", "Constantinople"],
    summary:
      "A creed is a short summary of the Christian faith; the word comes from the Latin credo, “I believe.” Catholics use two main creeds: the Apostles' Creed, the ancient baptismal creed of the Church of Rome, and the Nicene Creed, which comes from the first two ecumenical councils, in 325 and 381, and is professed at Sunday Mass.",
    explanation: [
      "From the beginning, the Church gathered the essentials of the faith into brief formulas, especially for people preparing for Baptism. These summaries are called professions of faith, creeds, or “symbols” of faith: a symbol was a token used to recognize a friend, and the Creed is a sign of recognition and communion among believers.",
      "The Apostles' Creed takes its name from being a faithful summary of the apostles' faith. The Nicene Creed grew out of the councils of Nicaea (325) and Constantinople (381), which defended faith in the divinity of the Son and of the Holy Spirit, and it remains common to the great Churches of East and West.",
      "Both creeds follow the three persons of the Trinity: the Father and creation, the Son and our redemption, and the Holy Spirit, the source of our sanctification. To pray the Creed with faith is to enter into communion with God and with the whole Church that professes it.",
    ],
    teaching: {
      catechism: [{ paragraphs: "185–197", url: ccc("__P14") }],
      scripture: [
        { passage: "1 Corinthians 15:3–5", url: bible("1corinthians/15") },
        { passage: "Matthew 28:19", url: bible("matthew/28") },
      ],
    },
    resources: ["ca-nicene-creed", "ca-which-creed-first"],
    related: ["what-do-catholics-believe", "what-is-the-trinity", "divinity-of-jesus"],
  },
  {
    slug: "what-is-faith",
    title: "Faith",
    question: "What is faith?",
    alsoKnownAs: ["Theological virtue of faith"],
    category: "beliefs",
    keywords: ["faith", "believe", "belief", "trust in God", "faith and reason", "doubt", "gift of faith", "doubt", "doubts about faith", "I have doubts", "losing my faith", "struggling to believe"],
    summary:
      "For Catholics, faith is our response to God who reveals himself: trusting him personally and accepting as true what he has revealed. It is a gift of God's grace and also a free, fully human act. Faith is not opposed to reason; the same God gives both, so truth cannot contradict truth.",
    explanation: [
      "Faith has two sides that belong together: personal commitment to God, and assent to the truth he has revealed. We believe not because revealed truths are proved by our own reasoning, but because of the authority of God, who “can neither deceive nor be deceived.”",
      "Faith is a gift: no one can believe without the help of the Holy Spirit, who moves the heart and opens the mind. Yet believing is also a free human act. Trusting God is no more contrary to our dignity than trusting the word of someone we love.",
      "Faith seeks understanding. Believers want to know better the One they trust, and the Church teaches that genuine scientific research can never truly conflict with faith, because the same God made the world and revealed himself.",
      "Faith can grow or be lost. The Catechism encourages nourishing it with the word of God, with prayer, with love for others, and within the faith of the Church.",
      "Questions and doubts: not every question is a crisis of faith. Intellectual questions and difficulty understanding a teaching are normal; in St. John Henry Newman's words, “Ten thousand difficulties do not make one doubt” (CCC 157). The Catechism distinguishes involuntary doubt, “hesitation in believing, difficulty in overcoming objections connected with the faith, or also anxiety aroused by it,” from voluntary doubt, which refuses to hold as true what God has revealed (CCC 2088). Feeling uncertain is not the same as rejecting the faith.",
      "Faith is not a feeling: faith rests on God who reveals himself, not on how certain we feel at a given moment (CCC 157). Scripture is honest about this. A father cried to Jesus, “I do believe, help my unbelief!” (Mark 9:24), and even when the apostles saw the risen Lord, “they worshiped, but they doubted” (Matthew 28:17). Bring your questions to someone who can help, such as a priest or OCIA leader, read good books, and keep praying and going to Mass while you look for answers (CCC 162).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "142–143", url: ccc("__PU") },
        { paragraphs: "150", url: ccc("__PW") },
        { paragraphs: "153–165", url: ccc("__PX") },
        { paragraphs: "2088", url: ccc("__P7C") },
      ],
      scripture: [
        { passage: "Hebrews 11:1–6", url: bible("hebrews/11") },
        { passage: "John 20:24–29", url: bible("john/20") },
        { passage: "Mark 9:14–29", url: bible("mark/9") },
        { passage: "Matthew 28:16–20", url: bible("matthew/28") },
      ],
      documents: ["lumen-fidei", "dei-verbum"],
    },
    resources: ["video-aquinas101-faith-reason", "wof-i-believe"],
    related: ["divine-revelation", "what-do-catholics-believe", "what-is-the-creed"],
  },
  {
    slug: "salvation-history",
    title: "Salvation History and the Covenants",
    question: "What is the story of the Bible?",
    alsoKnownAs: ["Salvation history", "God's covenants", "The story of salvation"],
    category: "beliefs",
    keywords: ["salvation history", "covenant", "covenants", "story of the Bible", "Old Testament and New Testament", "big picture of the Bible", "Noah", "Abraham", "Moses", "David", "new covenant", "typology", "Old Testament fulfilled", "Pentecost", "new creation"],
    summary:
      "The Bible tells one story. God creates the world out of love; humanity turns away; and God patiently sets out to rescue us. Through covenants with Noah, Abraham, Moses and Israel, and David, and through the prophets' promise of a new covenant, God prepares for Jesus Christ. In Jesus' death and resurrection the new covenant is sealed, the Holy Spirit gathers the Church, and the story ends in a new creation where God dwells with his people forever.",
    explanation: [
      "Creation and the Fall: God made all things, and “God looked at everything he had made, and found it very good” (Genesis 1:31). He made human beings in his image to share his life (CCC 1). Our first parents' sin broke that friendship, but God at once promised that the serpent's power would be crushed by the woman's offspring (Genesis 3:15), a promise the Church calls the “first gospel” (CCC 410). See Original Sin.",
      "Covenants: a covenant is a sacred bond in which God binds himself to his people and calls them to faithfulness. After the flood God established with Noah “the everlasting covenant between God and every living creature” (Genesis 9:16; CCC 71). He called Abraham and promised, “All the families of the earth will find blessing in you” (Genesis 12:3; CCC 59). After freeing Israel from slavery, he made them his own people at Sinai and gave the Law through Moses (Exodus 19:5–6; CCC 62). To David he promised, “Your house and your kingdom are firm forever before me; your throne shall be firmly established forever” (2 Samuel 7:16).",
      "The prophets and a new covenant: Israel repeatedly broke the covenant, and the prophets called the people back while promising something greater (CCC 64). Jeremiah announced, “See, days are coming—oracle of the LORD—when I will make a new covenant with the house of Israel and the house of Judah,” in which God would “write it upon their hearts” (Jeremiah 31:31, 33). Isaiah spoke of a servant who would bear the people's sins (Isaiah 53) and of a salvation that would “reach to the ends of the earth” (Isaiah 49:6).",
      "Jesus Christ: the New Testament opens by calling Jesus “the son of David, the son of Abraham” (Matthew 1:1). At the Last Supper he said, “This cup is the new covenant in my blood, which will be shed for you” (Luke 22:20), and the Letter to the Hebrews explicitly identifies this covenant with Jeremiah's promise (Hebrews 8:8–13). In Christ, God has said everything: he is “the Father's one, perfect and unsurpassable Word” (CCC 65).",
      "Death, resurrection, Pentecost, and the Church: in Jesus' death and resurrection God defeats sin and death. At Pentecost the Holy Spirit was poured out, as Peter said Joel had foretold (Acts 2:16–21), and the Church was sent to bring the new covenant to all nations (Matthew 28:19). The sacraments make Christ's saving work present today, and the liturgy rereads the great events of salvation history, above all at the Easter Vigil (CCC 1093–1095).",
      "The end of the story: the Bible ends where it began, with creation, now made new: “Behold, God's dwelling is with the human race,” and “Behold, I make all things new” (Revelation 21:3, 5). The Church speaks of God's plan reaching its fulfillment when “God [will] be everything to everyone” (CCC 130; 1 Corinthians 15:28).",
      "How the Testaments fit together: some connections are stated outright in the New Testament. Paul calls Adam “the type of the one who was to come” (Romans 5:14), and Peter says the flood “prefigured baptism” (1 Peter 3:20–21). Others are readings developed by the Fathers and the liturgy: around 96, Clement of Rome saw in the scarlet cord Rahab hung from her window a sign “that redemption should flow through the blood of the Lord” (1 Clement 12; Joshua 2:18). Readings like that are interpretations, not statements of the original text. The Church reads the Old Testament “in the light of Christ crucified and risen,” while insisting that it “retains its own intrinsic value as Revelation” (CCC 129). Against those who rejected the Old Testament, St. Irenaeus insisted around 180 that the Lord “did not teach that he who brought forth the old was one, and he that brought forth the new, another; but that they were one and the same” (Against Heresies 4.9.1). As an old saying puts it, “the New Testament lies hidden in the Old and the Old Testament is unveiled in the New” (CCC 129).",
      "Where salvation fits: Catholics understand salvation as being brought into God's covenant family. Through faith and Baptism we become children of God and members of Christ's body, share the life of the Holy Spirit, and are called to live the new covenant's law of love until we reach the new creation (CCC 1972, 1987). See How are we saved?",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1", url: ccc("__P2") },
        { paragraphs: "54–64", url: ccc("__PG") },
        { paragraphs: "65–67", url: ccc("__PH") },
        { paragraphs: "70–73", url: ccc("__PI") },
        { paragraphs: "128–130", url: ccc("__PR") },
        { paragraphs: "410", url: ccc("__P1C") },
        { paragraphs: "1093–1095", url: ccc("__P2X") },
      ],
      scripture: [
        { passage: "Genesis 1:26–31", url: bible("genesis/1") },
        { passage: "Genesis 9:8–17", url: bible("genesis/9") },
        { passage: "Genesis 12:1–3", url: bible("genesis/12") },
        { passage: "Exodus 19:3–8", url: bible("exodus/19") },
        { passage: "2 Samuel 7:8–16", url: bible("2samuel/7") },
        { passage: "Jeremiah 31:31–34", url: bible("jeremiah/31") },
        { passage: "Luke 22:14–20", url: bible("luke/22") },
        { passage: "Hebrews 8:6–13", url: bible("hebrews/8") },
        { passage: "Acts 2:1–21", url: bible("acts/2") },
        { passage: "Revelation 21:1–5", url: bible("revelation/21") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["irenaeus-against-heresies-4-9", "clement-1-corinthians"],
    related: ["divine-revelation", "original-sin", "who-is-jesus", "how-are-we-saved", "what-is-the-bible"],
  },
  {
    slug: "divine-revelation",
    title: "Divine Revelation",
    question: "How has God revealed himself?",
    alsoKnownAs: ["Divine revelation", "Public revelation", "Private revelation"],
    category: "beliefs",
    keywords: ["revelation", "how do we know God", "word of God", "Scripture and Tradition", "private revelation", "apparitions", "visions"],
    summary:
      "Catholics believe we can know that God exists through reason and the world he made, but that God has also chosen to reveal himself and his plan, step by step, through words and deeds in the history of Israel and fully in Jesus Christ. Christ is God's complete Word, so no new public revelation is expected before his return. Revelation is handed on through Sacred Scripture and Sacred Tradition.",
    explanation: [
      "By natural reason, people can come to know God with certainty from the things he has made. But God's inner life and his plan to save us are beyond what we could discover on our own, so he revealed them.",
      "God revealed himself gradually: to our first parents, in his covenant with Noah, through Abraham and the people of Israel, and through the prophets. In Jesus Christ that revelation reaches its fullness: “In times past, God spoke in partial and various ways… in these last days, he spoke to us through a son” (Hebrews 1:1–2).",
      "Revelation is complete, but it has not been made completely explicit; the Church keeps growing in its understanding over the centuries.",
      "So-called private revelations, including those the Church has recognized, can help people live the faith more fully in a particular time. But they do not belong to the deposit of faith, and they do not improve on or complete Christ's revelation.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "50", url: ccc("__PE") },
        { paragraphs: "51–53", url: ccc("__PF") },
        { paragraphs: "54–64", url: ccc("__PG") },
        { paragraphs: "65–67", url: ccc("__PH") },
      ],
      scripture: [
        { passage: "Hebrews 1:1–2", url: bible("hebrews/1") },
        { passage: "John 1:18", url: bible("john/1") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["ca-revelation-public-private"],
    related: ["what-is-sacred-tradition", "inspiration-of-scripture", "what-is-faith", "sola-scriptura"],
  },
  {
    slug: "what-is-the-catechism",
    title: "The Catechism",
    question: "What is the Catechism?",
    alsoKnownAs: ["Catechism of the Catholic Church", "CCC", "Compendium"],
    category: "beliefs",
    keywords: ["catechism", "CCC", "Catholic teaching book", "Compendium", "summary of Catholic teaching", "where to find Church teaching"],
    summary:
      "The Catechism of the Catholic Church is the official summary of Catholic belief and practice, published by Pope John Paul II in 1992. It presents the faith in four parts: the Creed, the sacraments, the moral life, and prayer. It draws on Scripture, the Church Fathers, the liturgy, and the Church's teaching, and it is freely available from the Vatican.",
    explanation: [
      "Pope John Paul II approved the Catechism in the apostolic constitution Fidei Depositum (1992), calling it “a sure norm for teaching the faith.” It is written first for bishops and teachers, but anyone can read it.",
      "Its paragraphs are numbered, so Catholics cite it by number, for example “CCC 1324.” Catholic Companion links every Catechism reference to the official Vatican text.",
      "The Catechism contains teaching of different weights, from defined dogma to explanation and application. A citation alone does not show how binding a statement is (see “What is a dogma?”).",
      "For a shorter version, the Compendium of the Catechism (2005) presents the same teaching as questions and answers.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "11–12", url: ccc("__P4") },
        { paragraphs: "13–17", url: ccc("__P5") },
      ],
      documents: ["catechism-vatican", "fidei-depositum", "compendium-ccc"],
    },
    related: ["what-is-dogma", "what-do-catholics-believe"],
  },
  {
    slug: "what-is-dogma",
    title: "Dogma and Doctrine",
    question: "What is a dogma, and how is it different from opinion?",
    alsoKnownAs: ["Dogma", "Doctrine", "Infallible teaching", "Hierarchy of truths", "Ordinary and universal Magisterium"],
    category: "beliefs",
    keywords: ["dogma", "doctrine", "infallible", "infallibility", "levels of teaching", "theological opinion", "what must Catholics believe", "binding teaching", "ex cathedra", "Church changed doctrine", "development of doctrine", "doctrine changes"],
    summary:
      "A dogma is a truth that the Church teaches infallibly as revealed by God, which Catholics believe with faith. The Church teaches some truths infallibly by a solemn definition, such as a council's decree, and others through the ordinary and universal teaching of the bishops in communion with the pope. Other teachings are authoritative without being infallible, and many questions remain open to legitimate theological opinion.",
    explanation: [
      "The Church distinguishes levels of teaching. Truths taught as divinely revealed are believed with faith. Truths the Church proposes definitively, because they are closely connected with revelation, are to be firmly accepted and held. Authentic teaching that is not proposed definitively calls for “religious submission of will and intellect.”",
      "Infallible teaching is not limited to solemn definitions. The Second Vatican Council taught that the bishops, even while dispersed throughout the world, teach infallibly when, in communion with one another and with the pope, they agree that a matter of faith or morals is to be held definitively (Lumen Gentium 25).",
      "Solemn definitions include the Immaculate Conception, proclaimed by Pope Pius IX in 1854, and the Assumption of Mary, defined by Pope Pius XII in 1950.",
      "Not every question is settled, and faithful theologians may disagree where the Church has not decided. The Church also speaks of a “hierarchy of truths,” because some truths are closer than others to the heart of the faith. In its apologetics sections, Catholic Companion labels each claim so readers can tell Church teaching from opinion and argument.",
      "Hasn't the Church changed its doctrines? The Church teaches that revelation is complete but “has not been made completely explicit,” so that understanding of it grows over the centuries (CCC 66, 94). In the fifth century St. Vincent of Lérins described true progress as growth “in the same doctrine, in the same sense, and in the same meaning,” like a child growing into an adult (Commonitorium 23), and the First Vatican Council taught that the meaning of a dogma once declared must never be abandoned “under the pretext or in the name of a more profound understanding” (Dei Filius, ch. 4). Disciplines, such as the rules for fasting, can change. Critics point to particular teachings they regard as reversals; those claims are best examined case by case.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "66", url: ccc("__PH") },
        { paragraphs: "88–90, 94", url: ccc("__PM") },
        { paragraphs: "888–892", url: ccc("__P2A") },
      ],
      documents: ["lumen-gentium", "professio-fidei", "vatican-i-dei-filius"],
    },
    resources: ["ca-dogma", "ca-infallible-teachings", "vincent-commonitorium"],
    related: ["what-is-the-magisterium", "what-is-the-catechism", "papal-infallibility", "what-is-sacred-tradition"],
  },
];
