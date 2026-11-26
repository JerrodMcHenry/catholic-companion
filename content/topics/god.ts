// Learn › What Catholics Believe: God and the Holy Trinity.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const god: Topic[] = [
  {
    slug: "who-is-god",
    title: "God",
    question: "Who is God?",
    alsoKnownAs: ["The one God", "Divine nature"],
    category: "beliefs",
    keywords: ["God", "one God", "monotheism", "Creator", "I AM", "YHWH", "God is love", "what is God like"],
    summary:
      "Catholics believe there is only one God, the Creator of everything that exists. God revealed his name to Moses as “I am who I am,” showing that he alone simply is, without beginning or end. He is truth and faithfulness itself, and, as St. John wrote, “God is love.” Christians believe this one God is Father, Son, and Holy Spirit.",
    explanation: [
      "Belief in one God is the foundation of the Creed. It is rooted in God's revelation to Israel, summed up in the prayer that begins “Hear, O Israel” (Deuteronomy 6:4).",
      "God's name, revealed to Moses at the burning bush (Exodus 3:14), is both a name and a reminder that God is infinitely beyond what we can understand. Yet the same God draws close to his people.",
      "God is always faithful and true; his word can be trusted. The deepest truth about him is that he is love (1 John 4:8). In sending his Son and the Spirit, God revealed that he is an eternal exchange of love, and he invites us to share in it.",
    ],
    teaching: {
      catechism: [{ paragraphs: "199–221", url: ccc("__P16") }],
      scripture: [
        { passage: "Exodus 3:13–15", url: bible("exodus/3") },
        { passage: "Deuteronomy 6:4–5", url: bible("deuteronomy/6") },
        { passage: "1 John 4:7–16", url: bible("1john/4") },
      ],
    },
    resources: ["ca-one-true-god"],
    related: ["what-is-the-trinity", "who-is-jesus", "problem-of-evil"],
  },
  {
    slug: "what-is-the-trinity",
    title: "The Holy Trinity",
    question: "What is the Trinity?",
    alsoKnownAs: ["Holy Trinity", "Triune God", "Blessed Trinity"],
    category: "beliefs",
    keywords: ["Trinity", "three persons", "one God", "Father Son and Holy Spirit", "three in one", "consubstantial", "Godhead"],
    summary:
      "The Trinity is the central mystery of the Christian faith: there is one God in three persons, the Father, the Son, and the Holy Spirit. Christians do not believe in three gods. Each person is fully God, and the three are really distinct from one another in their relationships: the Son is begotten of the Father, and the Holy Spirit proceeds.",
    explanation: [
      "Christians are baptized in the name of the Father, the Son, and the Holy Spirit (Matthew 28:19). The Catechism calls the Trinity “the central mystery of Christian faith and life,” the source of all the other mysteries of faith.",
      "The three persons do not divide the one divinity among themselves: each of them is God whole and entire. They are distinct not as three separate beings, but in their relations to one another.",
      "The Trinity is a mystery in the strict sense: we could never discover it by reason alone. God revealed it by sending his Son and the Holy Spirit. It is not a contradiction, because God is one in nature and three in persons.",
      "Because God is a communion of love, the Christian life is an invitation to share in the life of the Trinity.",
    ],
    teaching: {
      catechism: [{ paragraphs: "232–237, 253–255", url: ccc("__P17") }],
      scripture: [
        { passage: "Matthew 28:19", url: bible("matthew/28") },
        { passage: "2 Corinthians 13:13", url: bible("2corinthians/13") },
      ],
    },
    resources: ["ca-explaining-the-trinity", "ca-early-church-trinity"],
    related: ["who-is-god", "who-is-the-holy-spirit", "divinity-of-jesus"],
  },
  {
    slug: "trinity-in-scripture",
    title: "The Trinity in Scripture",
    question: "Is the Trinity in the Bible?",
    alsoKnownAs: ["Biblical basis of the Trinity"],
    category: "beliefs",
    keywords: ["Trinity in the Bible", "is the Trinity biblical", "word Trinity not in the Bible", "Father Son and Holy Spirit", "Matthew 28:19", "2 Corinthians 13:13", "John 1:1", "one God three persons", "Godhead", "Shema", "Trinity before Nicaea", "early Church Trinity", "Theophilus"],
    summary:
      "The word “Trinity” does not appear in the Bible, but Catholics believe the truth it names is revealed there. Scripture teaches that there is only one God, and it also presents the Father, the Son, and the Holy Spirit as each truly God and as distinct from one another. The Church later developed precise terms, such as “person” and “substance,” to express faithfully what Scripture reveals.",
    explanation: [
      "One God: Israel's great confession is the Shema, which proclaims that the Lord is Israel's God and that the Lord alone is God (Deuteronomy 6:4), and Jesus repeats it as the first commandment (Mark 12:29). Christians do not believe in three gods.",
      "The Son: John's Gospel opens by saying that the Word existed in the beginning, was with God, and was God (John 1:1). After the Resurrection, Thomas confesses Jesus as his Lord and his God (John 20:28). See “Is Jesus truly God?”",
      "The Holy Spirit: Peter tells Ananias that in lying to the Holy Spirit he has lied not to people but to God (Acts 5:3–4). Jesus promises to send the Spirit as another Advocate who will teach the disciples (John 14:16, 26). See “Who is the Holy Spirit?”",
      "Father, Son, and Spirit together: Jesus sends the apostles to baptize in the name (singular) of the Father, the Son, and the Holy Spirit (Matthew 28:19), one name for three. Paul blesses the Corinthians with the grace of the Lord Jesus Christ, the love of God, and the fellowship of the Holy Spirit (2 Corinthians 13:13), words the Church still uses at Mass (CCC 249).",
      "Revealed in Christ: the Catechism says God left “traces of his Trinitarian being” in creation and the Old Testament, but his inmost being as Trinity was “inaccessible to reason alone or even to Israel's faith” before the Incarnation and the sending of the Spirit (CCC 237).",
      "Words for the mystery: to articulate this faith, the Church “had to develop her own terminology” with terms such as “substance,” “person,” and “relation” (CCC 251), especially at the Councils of Nicaea (325) and Constantinople (381). Jews, Muslims, Jehovah's Witnesses, and Latter-day Saints read these passages differently; their views are set out below. This page does not rely on the longer wording of 1 John 5:7–8 that some older translations contain; modern Catholic translations such as the NABRE mention only three witnesses on earth: the Spirit, the water, and the blood.",
      "Before Nicaea: the faith defined at Nicaea in 325 was confessed long before it. The Didache, an early Christian manual often dated to the late first century, tells Christians to “baptize into the name of the Father, and of the Son, and of the Holy Spirit” (Didache 7). Around 180, St. Theophilus of Antioch gives the earliest surviving use of the Greek word trias (“triad”), naming God, his Word, and his Wisdom; the standard English translation renders it “the Trinity, of God, and His Word, and His wisdom” (To Autolycus 2.15). The word may already have been in use before him. Theophilus's terms are not yet the later technical vocabulary. The Latin trinitas appears soon after in Tertullian, who early in the third century defended “the mystery of the dispensation... which distributes the Unity into a Trinity, placing in their order the three Persons — the Father, the Son, and the Holy Ghost” (Against Praxeas 2). The precise formulation, one God in three distinct persons sharing one divine nature, was worked out at the Councils of Nicaea (325) and Constantinople (381) (CCC 245–256). Early writers did not always speak with that later precision, but faith in Father, Son, and Spirit as the one God did not begin at Nicaea.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "232–237, 245, 249–256", url: ccc("__P17") },
      ],
      scripture: [
        { passage: "Deuteronomy 6:4", url: bible("deuteronomy/6") },
        { passage: "Matthew 28:16–20", url: bible("matthew/28") },
        { passage: "John 1:1–14", url: bible("john/1") },
        { passage: "John 14:16–26", url: bible("john/14") },
        { passage: "Acts 5:1–4", url: bible("acts/5") },
        { passage: "2 Corinthians 13:13", url: bible("2corinthians/13") },
      ],
      documents: [],
    },
    resources: ["ca-explaining-the-trinity", "ca-early-church-trinity", "didache", "theophilus-to-autolycus-2", "tertullian-against-praxeas"],
    related: ["what-is-the-trinity", "divinity-of-jesus", "who-is-the-holy-spirit", "who-is-god"],
    debate: {
      catholicPosition: {
        summary:
          "The Catholic Church professes one God in three really distinct persons, Father, Son, and Holy Spirit, each of whom is God whole and entire; the persons are distinguished by their relations of origin, not by dividing the one divine nature (CCC 253–255). This is a dogma of faith, revealed in Scripture and defined in terms developed at the councils of Nicaea and Constantinople.",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "jehovahs-witnesses",
          position:
            "Jehovah's Witnesses teach that God, Jehovah, is not a Trinity. Jesus “was created by Jehovah God before everything else,” which is why he is called “the firstborn of all creation,” and the holy spirit is “God's power in action, his active force,” not a person. They translate John 1:1 as “the Word was a god.”",
          arguments: [
            {
              claim: "Scripture calls Jesus the firstborn of all creation (Colossians 1:15), so he is a creature.",
              response:
                "The next verse says that all things in heaven and on earth were created in him (Colossians 1:16), placing the Son on the Creator's side. Catholics read “firstborn” as a title of preeminence, as when God calls Israel his firstborn son (Exodus 4:22).",
              authority: "apologetic-argument",
            },
            {
              claim: "John 1:1 should read “the Word was a god.”",
              response:
                "Most translations render the final clause of John 1:1 as saying that the Word was God, and the Gospel ends with Thomas confessing Jesus as his Lord and his God (John 20:28). A second, lesser god would also conflict with Scripture's insistence that there is only one God (Deuteronomy 6:4).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["jw-trinity", "jw-who-is-jesus", "jw-holy-spirit", "jw-john-1-1"],
        },
        {
          tradition: "islam",
          position:
            "The Qur'an affirms God's absolute oneness: “He is Allah—One ˹and Indivisible˺ … He has never had offspring, nor was He born” (Qur'an 112). It addresses Christians directly: “do not say, ‘Trinity.’ Stop!—for your own good. Allah is only One God. Glory be to Him! He is far above having a son!” (Qur'an 4:171).",
          arguments: [
            {
              claim: "Calling Jesus the Son of God, or speaking of three, compromises God's oneness.",
              response:
                "Christians agree that God is one and do not confess three gods (CCC 253). “Son” does not mean that God had offspring in a physical sense; it names an eternal relation within the one God (CCC 254–255).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["quran-112", "quran-4-171", "quran-5-116"],
        },
        {
          tradition: "judaism",
          position:
            "Judaism's central confession is the Shema: “Hear O' Israel, the Lord is our God, the Lord is One.” Maimonides teaches that “this God is one. He is not two or more, but one, unified in a manner which [surpasses] any unity that is found in the world” (Mishneh Torah, Foundations of the Torah 1:7). Jews do not accept Jesus as divine.",
          arguments: [
            {
              claim: "The Shema teaches that God is one, which excludes any plurality in God.",
              response:
                "Christians pray the same Shema; Jesus himself called it the first commandment (Mark 12:29). Catholic teaching holds that God's oneness is not numerical sameness of persons but the unity of one divine nature, which the Trinity does not divide (CCC 253–254). Catholics also acknowledge that this understanding of God was revealed fully only in Christ and was “inaccessible to … Israel's faith” before the Incarnation (CCC 237).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["mjl-shema", "sefaria-mt-foundations-1-7"],
        },
        {
          tradition: "latter-day-saints",
          position:
            "The Church of Jesus Christ of Latter-day Saints teaches that God the Father, Jesus Christ, and the Holy Ghost make up the Godhead and are “three separate beings”: “The Father and the Son have tangible bodies of flesh and bones, and the Holy Ghost is a personage of spirit.” They are “one in purpose and doctrine.” Latter-day Saints hold that the true doctrine of the Godhead was lost in the apostasy and restored through Joseph Smith.",
          variations:
            "Latter-day Saints and Jehovah's Witnesses both reject the Trinity, but for different reasons: Witnesses hold that only the Father is God, while Latter-day Saints hold that Father, Son, and Holy Ghost are three distinct divine beings.",
          arguments: [
            {
              claim: "The Father, Son, and Holy Ghost are separate beings, united in purpose.",
              response:
                "Catholic teaching agrees that the three are really distinct, but holds that they are one God, not three: each is “that supreme reality, viz., the divine substance, essence or nature” (CCC 253). Scripture insists there is only one God (Deuteronomy 6:4; Isaiah 45:5). In 2001 the Congregation for the Doctrine of the Faith judged the difference so great that it does not recognize Latter-day Saint baptism as valid.",
              authority: "doctrine",
            },
            {
              claim: "God the Father has a glorified physical body (Doctrine and Covenants 130:22).",
              response:
                "Catholics believe that God is spirit (John 4:24), indeed “pure spirit” (CCC 370), and that only the Son took a human body, at the Incarnation (CCC 461–463).",
              authority: "doctrine",
            },
          ],
          sources: ["lds-godhead", "lds-articles-of-faith", "lds-dc-130"],
        },
      ],
    },
  },
  {
    slug: "who-is-the-holy-spirit",
    title: "The Holy Spirit",
    question: "Who is the Holy Spirit?",
    alsoKnownAs: ["Paraclete", "Advocate", "Holy Ghost", "Spirit of truth"],
    category: "beliefs",
    keywords: ["Holy Spirit", "Holy Ghost", "Paraclete", "Advocate", "Pentecost", "third person", "Spirit of God"],
    summary:
      "The Holy Spirit is the third person of the Holy Trinity: truly God, worshiped and glorified together with the Father and the Son. Jesus promised to send the Spirit as an Advocate who would remain with his disciples, and the Spirit came upon them at Pentecost. The Spirit awakens faith, makes Christ present in the Church, and makes us children of God.",
    explanation: [
      "“Spirit” translates the Hebrew word ruah, meaning breath or wind. Jesus also called the Spirit the Paraclete, literally “he who is called to one's side” (CCC 692), and the Spirit of truth (John 14:16–17).",
      "The Spirit is a person, not an impersonal force: the Church professes that “with the Father and the Son he is worshipped and glorified.”",
      "At Pentecost the apostles were all filled with the Holy Spirit (Acts 2:4) and began to proclaim the Gospel. The Spirit continues to act through Scripture, the sacraments, prayer, and the gifts he gives.",
      "The Spirit is the one who first awakens faith in us. Through him we can call God “Abba,” Father (Romans 8:15).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "683–686", url: ccc("__P1Y") },
        { paragraphs: "691–693", url: ccc("__P21") },
      ],
      scripture: [
        { passage: "John 14:15–26", url: bible("john/14") },
        { passage: "Acts 2:1–4", url: bible("acts/2") },
        { passage: "Romans 8:14–16", url: bible("romans/8") },
      ],
      documents: ["dominum-et-vivificantem"],
    },
    resources: ["ca-who-is-the-holy-spirit", "ca-divinity-of-the-holy-spirit"],
    related: ["what-is-the-trinity", "who-is-jesus", "what-is-the-church"],
    debate: {
      catholicPosition: {
        summary:
          "The Holy Spirit is the third person of the Holy Trinity, truly God, consubstantial with the Father and the Son: “with the Father and the Son he is worshipped and glorified” (CCC 685, 689). The Spirit is a person who acts, not an impersonal power.",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "jehovahs-witnesses",
          position:
            "Jehovah's Witnesses teach that “the holy spirit is God's power in action, his active force,” and that it is not a person. They note that the Bible refers to God's spirit as his “hands,” “fingers,” or “breath” and compares it to water, which they take to show its impersonal nature.",
          arguments: [
            {
              claim: "The Bible calls the spirit God's hand, finger, or breath, so it is a force God uses, not a person.",
              response:
                "Scripture also describes the Spirit acting as only a person can: the Spirit teaches and reminds the disciples (John 14:26), speaks (Acts 13:2), can be lied to (Acts 5:3), and can be grieved (Ephesians 4:30). Figurative images do not make the Spirit impersonal, any more than calling God a rock makes him a stone.",
              authority: "apologetic-argument",
            },
            {
              claim: "The words about “the Father, the Word, and the Holy Ghost” in 1 John 5:7 (King James Version) were added later, so the Trinity has no real biblical support.",
              response:
                "Catholics agree that those words are a later addition; the NABRE does not include them, and the Church does not rely on them. It points instead to passages such as Matthew 28:19, which joins Father, Son, and Spirit in one name, and Acts 5:3–4, where lying to the Holy Spirit is described as lying not to people but to God.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["jw-holy-spirit"],
        },
      ],
    },
  },
];
