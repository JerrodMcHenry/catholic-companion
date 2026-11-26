// Learn › The Bible.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const bibleTopics: Topic[] = [
  {
    slug: "what-is-the-bible",
    title: "The Bible",
    question: "What is the Bible?",
    alsoKnownAs: ["Sacred Scripture", "Holy Bible", "Word of God", "Old and New Testaments"],
    category: "bible",
    keywords: ["Bible", "Scripture", "Old Testament", "New Testament", "how many books are in the Bible", "73 books", "Gospels", "canon", "word of God", "what is in the Bible"],
    summary:
      "The Bible is the collection of sacred books that the Church recognizes as the inspired word of God, written by human authors under the inspiration of the Holy Spirit. The Catholic Bible has 73 books: 46 in the Old Testament, which prepares for Christ, and 27 in the New Testament, which tells of his life and the early Church. Its center is Jesus Christ, and the four Gospels hold first place.",
    explanation: [
      "God's word in human words: in Scripture God speaks to us in human language, much as the eternal Word took on human flesh (CCC 101). Through all its words, the Church says, God speaks “only one single Word,” his Son (CCC 102).",
      "Two Testaments: the Old Testament is “an indispensable part of Sacred Scripture,” and its books “retain a permanent value” (CCC 121). It prepares for Christ, and the New Testament fulfills it; “the New Testament lies hidden in the Old and the Old Testament is unveiled in the New” (CCC 129, 140). The Church has always rejected the idea that the New Testament makes the Old void (CCC 123).",
      "The Gospels: Matthew, Mark, Luke, and John are “the heart of all the Scriptures” because they are the principal source for the life and teaching of Jesus (CCC 125). The Church affirms their historicity: they faithfully hand on what Jesus really did and taught (CCC 126).",
      "Who decided the books? The Church discerned the list of sacred books, called the canon, through the apostolic Tradition (CCC 120). Why Catholic Bibles have seven more Old Testament books than most Protestant Bibles is explained in “Why do Catholic Bibles have more books?”",
      "Scripture and Tradition: Catholics do not treat Christianity as a “religion of the book.” It is the religion of the Word of God, “not a written and mute word, but incarnate and living” (CCC 108). The Church reads Scripture together with Sacred Tradition, “as the supreme rule of faith” (Dei Verbum 21).",
      "For everyone: the Church wants Scripture to be open wide to the faithful (CCC 131) and quotes St. Jerome: “Ignorance of the Scriptures is ignorance of Christ” (CCC 133; Dei Verbum 25).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "101–104", url: ccc("__PO") },
        { paragraphs: "105–108", url: ccc("__PP") },
        { paragraphs: "120–130", url: ccc("__PR") },
        { paragraphs: "131–133", url: ccc("__PS") },
        { paragraphs: "134–141", url: ccc("__PT") },
      ],
      scripture: [
        { passage: "2 Timothy 3:14–17", url: bible("2timothy/3") },
        { passage: "Hebrews 1:1–2", url: bible("hebrews/1") },
        { passage: "John 20:30–31", url: bible("john/20") },
      ],
      documents: ["dei-verbum", "verbum-domini"],
    },
    resources: ["ca-how-to-read-the-bible", "ascension-bible-in-a-year"],
    related: ["catholic-bible-books", "inspiration-of-scripture", "how-to-read-the-bible", "where-to-start-reading-the-bible", "what-is-sacred-tradition"],
  },
  {
    slug: "catholic-bible-books",
    title: "The Books of the Catholic Bible",
    question: "Why do Catholic Bibles have more books?",
    alsoKnownAs: ["Deuterocanon", "Deuterocanonical books", "Apocrypha", "Biblical canon"],
    category: "bible",
    keywords: ["deuterocanonical", "apocrypha", "why is the Catholic Bible bigger", "73 books", "66 books", "Tobit", "Judith", "Maccabees", "Wisdom", "Sirach", "Baruch", "canon of Scripture", "Septuagint", "Council of Trent", "Luther removed books"],
    summary:
      "Catholic Bibles have 46 Old Testament books; most Protestant Bibles have 39. The difference is seven books, Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, and Baruch, plus parts of Esther and Daniel, which Catholics call deuterocanonical (“second canon”) and Protestants usually call the Apocrypha. The Catholic Church received these books as Scripture from early Christian use and solemnly defined the full list at the Council of Trent in 1546. The New Testament is the same in both.",
    explanation: [
      "What Catholics believe: “It was by the apostolic Tradition that the Church discerned which writings are to be included in the list of the sacred books” (CCC 120). The Church accepts as inspired 46 Old Testament books and 27 New Testament books (CCC 138). The Council of Trent listed them, including Tobit, Judith, Wisdom, Sirach, Baruch, and two books of Maccabees, and taught that God is the author of both Testaments (Session 4, 1546). The canon is therefore a matter of defined Catholic teaching.",
      "Early witnesses: the African Council of Carthage of 419 listed Tobit, Judith, and two books of Maccabees among the books to be read in church as Scripture (canon 24), recording what it had “received from our fathers.” The Church also adopted the ancient Greek translation of the Old Testament, the Septuagint, which contained these books (Dei Verbum 22).",
      "Why “deuterocanonical”: the name reflects that some early writers questioned these books and that their place in the canon was settled after the others. It does not mean they are less inspired.",
      "Where Protestants differ: the Reformers adopted the shorter Old Testament of the Hebrew Bible, and Protestant traditions differ in how they regard these books. Catholics and Protestants agree on the New Testament. Their views and the Catholic responses are set out below.",
      "Why it matters: these books contain passages that bear on Catholic teaching and prayer, such as Judas Maccabeus' prayer for the dead (2 Maccabees 12:43–46; CCC 1032), and they are read at Mass. Scholars on both sides continue to discuss the history, including the role of the Septuagint and how the Jewish canon took shape.",
      "Before Trent: a century earlier, the Council of Florence’s bull of union with the Copts (4 February 1442) already listed the same books, including Tobit, Judith, Wisdom, Ecclesiasticus (Sirach), Baruch, and two books of Maccabees. Trent did not add them; it defined a list the Church already used.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "120", url: ccc("__PR") },
        { paragraphs: "138", url: ccc("__PT") },
        { paragraphs: "1032", url: ccc("__P2N") },
      ],
      scripture: [
        { passage: "2 Maccabees 12:38–46", url: bible("2maccabees/12") },
        { passage: "Wisdom 2:12–20", url: bible("wisdom/2") },
        { passage: "Tobit 12:6–15", url: bible("tobit/12") },
      ],
      documents: ["dei-verbum", "trent-session-4", "council-of-carthage-419", "florence-decree-copts"],
    },
    resources: ["ca-council-that-wasnt", "westminster-confession"],
    related: ["what-is-the-bible", "sola-scriptura", "what-is-sacred-tradition", "which-bible-translation"],
    debate: {
      catholicPosition: {
        summary:
          "The Old Testament has 46 books, including Tobit, Judith, 1 and 2 Maccabees, Wisdom, Sirach, and Baruch. The Church discerned the canon of Scripture through apostolic Tradition (CCC 120) and defined the full list at the Council of Trent in 1546.",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants hold that the Old Testament canon is the shorter Old Testament of the Hebrew Bible, which does not include the deuterocanonical books. The Westminster Confession teaches that “the books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture, and therefore are of no authority in the church of God” (1.3).",
          variations:
            "Protestant traditions differ in how they regard and use these books. Catholics and Protestants agree on the 27 books of the New Testament.",
          arguments: [
            {
              claim: "The Church added these books to the Bible at the Council of Trent.",
              response:
                "Trent defined the list but did not create it. Centuries earlier, the African Council of Carthage of 419 listed Tobit, Judith, and two books of Maccabees among the Scriptures, as it had “received from our fathers,” and St. Augustine's list of canonical books includes them (On Christian Doctrine 2.8). The apostolic Church used the Greek Old Testament, the Septuagint, which contained these books (Dei Verbum 22).",
              authority: "apologetic-argument",
            },
            {
              claim: "Some early Christian writers did not accept these books as fully canonical.",
              response:
                "That is true, and it is why they are called “deuterocanonical”: their place in the canon was settled after the others. The Catholic Church holds that the question was resolved by the Church's received use and teaching, and finally defined at Trent; “deuterocanonical” does not mean less inspired.",
              authority: "apologetic-argument",
            },
            {
              claim: "These books contain teachings, such as prayer for the dead, that support Catholic doctrine, which is why Catholics keep them.",
              response:
                "The Church received these books long before the controversies of the Reformation, and her teaching on prayer for the dead rests on Tradition and the Church's practice as well as on 2 Maccabees (CCC 1032). Scholars on both sides continue to discuss the history of the canon, including the role of the Septuagint and how the Jewish canon took shape.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession"],
        },
      ],
      fathers: [
        {
          name: "St. Augustine of Hippo",
          work: "On Christian Doctrine, Book 2, Chapter 8 (c. 397)",
          note: "Lists the canonical books, including Tobit, Judith, the two books of Maccabees, Wisdom, and Ecclesiasticus (Sirach).",
          url: "https://www.newadvent.org/fathers/12022.htm",
        },
      ],
    },
  },
  {
    slug: "inspiration-of-scripture",
    title: "The Inspiration of Scripture",
    question: "How is the Bible the word of God?",
    alsoKnownAs: ["Inspiration", "Biblical inspiration", "God as author of Scripture"],
    category: "bible",
    keywords: ["inspiration", "inspired by God", "God-breathed", "who wrote the Bible", "human authors", "did God dictate the Bible", "2 Timothy 3:16", "without error", "inerrancy", "word of God in human words", "inerrancy", "errors in the Bible", "contradictions in the Bible", "Dei Verbum 11"],
    summary:
      "Catholics believe God is the author of Sacred Scripture because he inspired its human authors. God did not simply dictate: he chose people who used their own abilities, styles, and knowledge, and acted in and through them so that, as true authors, they wrote what he wanted written. For this reason the Bible teaches, firmly and without error, the truth God wanted put into it for the sake of our salvation.",
    explanation: [
      "God and human authors together: the Second Vatican Council taught that the books of both Testaments, “in their entirety, with all their parts,” are sacred because they were written under the inspiration of the Holy Spirit and “have God as their author.” God chose human writers who “made use of their powers and abilities,” so that “as true authors” they wrote “everything and only those things which He wanted” (Dei Verbum 11; CCC 105–106).",
      "Not dictation: inspiration does not erase the writers' personalities. Luke researched his Gospel carefully (Luke 1:1–4); Paul wrote letters to real churches with real problems. Their human styles and literary forms are part of how God speaks (CCC 109–110).",
      "In Scripture itself: “All scripture is inspired by God and is useful for teaching, for refutation, for correction, and for training in righteousness” (2 Timothy 3:16). Prophecy came as “human beings moved by the holy Spirit spoke under the influence of God” (2 Peter 1:21).",
      "Without error: since what the inspired authors assert is asserted by the Holy Spirit, Scripture teaches “solidly, faithfully and without error that truth which God wanted put into sacred writings for the sake of salvation” (Dei Verbum 11; CCC 107). How to understand this, especially in passages that raise questions of history or science, is the subject of a separate topic on inerrancy, and depends on reading each text according to its literary form (CCC 110).",
      "Living and active: because it is God's word, Scripture is not only a record of the past. “The word of God is living and effective” (Hebrews 4:12), and in it “the Father who is in heaven meets His children with great love and speaks with them” (Dei Verbum 21).",
      "How far does inerrancy extend? Dei Verbum 11 teaches that Scripture teaches “solidly, faithfully and without error that truth which God wanted put into sacred writings for the sake of salvation.” Interpreters disagree about that last phrase. Some read it as limiting inerrancy to matters of faith and morals; others read it as describing the saving purpose of all Scripture, so that whatever the sacred authors truly assert is without error. Earlier teaching rejected restricting inspiration to faith and morals: Pope Leo XIII called it “absolutely wrong and forbidden, either to narrow inspiration to certain parts only of Holy Scripture, or to admit that the sacred writer has erred” (Providentissimus Deus 20). What the Church plainly teaches is that the books are inspired “in their entirety, with all their parts” and that what the authors assert is asserted by the Holy Spirit (CCC 105, 107).",
      "Apparent errors and contradictions: much depends on the kind of writing. “Truth is set forth and expressed differently in texts which are variously historical, prophetic, poetic, or of other forms of discourse” (Dei Verbum 12). Poetry, parables, round numbers, ancient ways of describing nature, and Gospel accounts that tell the same events differently are not errors in what the author meant to assert. Catholics are free to study genuine difficulties honestly, reading each text according to its literary form and within the whole of Scripture and Tradition (CCC 109–113).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "101–104", url: ccc("__PO") },
        { paragraphs: "105–108", url: ccc("__PP") },
        { paragraphs: "109–110, 111–113", url: ccc("__PQ") },
        { paragraphs: "135–136", url: ccc("__PT") },
      ],
      scripture: [
        { passage: "2 Timothy 3:14–17", url: bible("2timothy/3") },
        { passage: "2 Peter 1:19–21", url: bible("2peter/1") },
        { passage: "Luke 1:1–4", url: bible("luke/1") },
        { passage: "Hebrews 4:12", url: bible("hebrews/4") },
      ],
      documents: ["dei-verbum", "verbum-domini", "providentissimus-deus"],
    },
    resources: ["ca-how-to-read-the-bible"],
    related: ["what-is-the-bible", "how-to-read-the-bible", "divine-revelation", "what-is-sacred-tradition"],
  },
  {
    slug: "how-to-read-the-bible",
    title: "Reading the Bible as a Catholic",
    question: "How should Catholics read the Bible?",
    alsoKnownAs: ["Senses of Scripture", "Biblical interpretation", "Exegesis", "Literal and spiritual sense"],
    category: "bible",
    keywords: ["how to read the Bible", "interpret the Bible", "four senses of Scripture", "literal sense", "spiritual sense", "allegorical", "moral sense", "anagogical", "literary genre", "context", "typology", "do Catholics take the Bible literally", "private interpretation"],
    summary:
      "Catholics read the Bible as both a human and a divine book. First, ask what the human author meant, paying attention to the time, culture, and kind of writing, whether history, poetry, prophecy, or letter. Then read it in the light of the Holy Spirit who inspired it: as one story centered on Christ, within the living Tradition of the Church, and in harmony with the whole faith. And read it prayerfully, to meet God.",
    explanation: [
      "The human author's meaning: to understand Scripture, the reader must attend to what the human authors truly wanted to affirm, taking account of their time and culture and the literary genres they used, “for truth is differently presented and expressed in the various types of historical writing, in prophetical and poetical texts” (CCC 109–110; Dei Verbum 12).",
      "Three guides from the Church: read with attention to “the content and unity of the whole Scripture,” whose center is Christ; within “the living Tradition of the whole Church”; and according to the “analogy of faith,” the coherence of the truths of faith with one another (CCC 111–114).",
      "The senses of Scripture: an ancient tradition distinguishes the literal sense, the meaning of the words found by sound interpretation, on which all other senses are based, and the spiritual sense. The spiritual sense has three aspects: allegorical (how events point to Christ: the crossing of the Red Sea as a sign of Baptism), moral (how we should act), and anagogical (how things point to our eternal destiny) (CCC 115–118). This is the Church's teaching on interpretation, not a code that unlocks hidden meanings.",
      "Not alone: when Philip asked the Ethiopian official, “Do you understand what you are reading?” he answered, “How can I, unless someone instructs me?” (Acts 8:30–31). Catholics read personally and freely, but within the Church, whose teaching office serves the word of God (CCC 119). Footnotes in a Catholic edition, a good commentary, and the readings at Mass all help.",
      "Pray it: the Church especially recommends lectio divina, a slow, prayerful reading that moves from reading to meditation, prayer, and contemplation (Verbum Domini 86–87). The goal is not only to learn about God but to meet him: on the road to Emmaus, Jesus “interpreted to them what referred to him in all the scriptures” (Luke 24:27).",
    ],
    teaching: {
      catechism: [{ paragraphs: "109–119", url: ccc("__PQ") }],
      scripture: [
        { passage: "Acts 8:26–35", url: bible("acts/8") },
        { passage: "Luke 24:13–35", url: bible("luke/24") },
        { passage: "2 Peter 3:15–16", url: bible("2peter/3") },
      ],
      documents: ["dei-verbum", "verbum-domini"],
    },
    resources: ["ca-how-to-read-the-bible", "ascension-bible-in-a-year"],
    related: ["what-is-the-bible", "inspiration-of-scripture", "where-to-start-reading-the-bible", "sola-scriptura"],
  },
  {
    slug: "which-bible-translation",
    title: "Choosing a Bible Translation",
    question: "Which Bible translation should Catholics use?",
    alsoKnownAs: ["NABRE", "RSV-2CE", "Catholic Bible translations", "Catholic edition"],
    category: "bible",
    keywords: ["Bible translation", "best Catholic Bible", "NABRE", "New American Bible", "RSV", "RSV-2CE", "RSV-CE", "NRSV", "New Jerusalem Bible", "Douay-Rheims", "imprimatur", "study Bible", "can Catholics use a Protestant Bible", "King James"],
    summary:
      "Choose a complete Catholic edition: one that includes all 73 books and has been approved by the Church, often noted by an imprimatur. In the United States the New American Bible, Revised Edition (NABRE) is the U.S. bishops' translation and the one on their website; the Revised Standard Version, Catholic Edition (RSV-CE or RSV-2CE) is a widely used, more literal alternative. The best translation is the one you will actually read.",
    explanation: [
      "Approval: Church law requires that editions of Scripture, and translations into modern languages, be approved by the Apostolic See or a bishops' conference and provided with suitable notes (canon 825). The Council asked for “suitable and correct translations,” especially from the original languages, and allowed for translations made together with other Christians (Dei Verbum 22).",
      "Complete: a Catholic edition includes the deuterocanonical books. Many Bibles sold in general bookstores do not.",
      "Different styles: some translations are more literal (closer to the wording of the original), others more readable. A Catholic study guide describes the NABRE as a “formal equivalent” translation with extensive notes, and the RSV-2CE as a literal, traditional-sounding revision often preferred for study; the New Jerusalem Bible is another approved option. Each has critics and admirers.",
      "Study Bibles: notes and introductions matter as much as the translation, so look at the notes before buying. Catholic study Bibles exist for several translations.",
      "Other Christians' Bibles: Protestant translations can be helpful for comparison and many are excellent, but most lack the deuterocanonical books and have not been approved for Catholic use with their notes.",
      "Online: the U.S. bishops publish the NABRE free at bible.usccb.org, which this app links to for every Scripture reference.",
    ],
    teaching: {
      catechism: [{ paragraphs: "131–133", url: ccc("__PS") }],
      scripture: [{ passage: "Nehemiah 8:1–8", url: bible("nehemiah/8") }],
      documents: ["dei-verbum", "canon-law-teaching"],
    },
    resources: ["ca-study-bible", "usccb-daily-readings"],
    related: ["catholic-bible-books", "where-to-start-reading-the-bible", "what-is-the-bible"],
  },
  {
    slug: "where-to-start-reading-the-bible",
    title: "Where to Start Reading the Bible",
    question: "Where should a beginner start reading the Bible?",
    alsoKnownAs: ["Bible reading plan", "Reading the Bible for the first time", "Bible in a year"],
    category: "bible",
    keywords: ["where to start reading the Bible", "beginner Bible", "Bible reading plan", "read the Bible in a year", "start with a Gospel", "Gospel of Mark", "Gospel of Luke", "Psalms", "Acts", "daily readings", "lectio divina"],
    summary:
      "Start with Jesus: read one of the Gospels, Mark for a short, fast-paced account or Luke for a fuller one, then the Acts of the Apostles. Add a psalm a day for prayer. Many Catholics also follow the daily Mass readings or a guided plan such as The Bible in a Year. Read a little each day, with a Catholic edition, and begin with a short prayer.",
    explanation: [
      "Why start with the Gospels: the Church calls them “the heart of all the Scriptures” because they tell the life and teaching of Jesus (CCC 125). The rest of the Bible makes the most sense in relation to him (CCC 112, 129). These suggestions are practical advice, not Church rules.",
      "A simple path: a Gospel; then Acts, the story of the early Church; then Genesis and Exodus for the beginning of God's story with his people; the Psalms for prayer; and short letters such as Philippians or James. Leave books like Leviticus and Revelation until you have more background and a good guide.",
      "Daily readings: every day the Church assigns readings for Mass, published by the U.S. bishops. Reading them is a simple way to read along with the whole Church.",
      "A guided plan: The Bible in a Year podcast with Fr. Mike Schmitz reads through the whole Bible in 365 episodes, following a timeline of salvation history developed by Jeff Cavins, with commentary and prayer.",
      "How to read: begin with a short prayer to the Holy Spirit, read a manageable passage slowly, notice what strikes you, and talk to God about it. The Church encourages this prayerful reading, called lectio divina (Verbum Domini 86–87). “Your word is a lamp for my feet, a light for my path” (Psalm 119:105).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "112", url: ccc("__PQ") },
        { paragraphs: "125, 129", url: ccc("__PR") },
        { paragraphs: "131–133", url: ccc("__PS") },
      ],
      scripture: [
        { passage: "Psalm 119:105", url: bible("psalms/119") },
        { passage: "John 20:30–31", url: bible("john/20") },
        { passage: "Acts 17:11", url: bible("acts/17") },
      ],
      documents: ["dei-verbum", "verbum-domini"],
    },
    resources: ["ascension-bible-in-a-year", "usccb-daily-readings", "ca-study-bible"],
    related: ["how-to-read-the-bible", "which-bible-translation", "what-is-the-bible", "mass-first-reading"],
  },
];
