// Learn › The Mass: one page per part of the Mass, in the order it happens.
// The overview ("What happens during Mass?") lives in mass.ts and links here through `massOrder`.
//
// Short people's responses are quoted from the Roman Missal (2010 ICEL translation, U.S. edition);
// longer prayers (the I confess, the Gloria, the Creed) are described and linked, not reproduced.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

// The parts in Mass order, grouped as the Missal groups them. Later batches append sections.
// Validated in content/index.ts: every slug must be a Mass topic and appear once.
export const massOrder: { section: string; slugs: string[] }[] = [
  { section: "Before Mass", slugs: ["mass-arriving", "mass-holy-water", "mass-genuflection", "mass-quiet-prayer"] },
  {
    section: "Introductory Rites",
    slugs: ["mass-entrance", "mass-sign-of-the-cross", "mass-greeting", "mass-penitential-act", "mass-kyrie", "mass-gloria", "mass-collect"],
  },
  {
    section: "Liturgy of the Word",
    slugs: [
      "mass-first-reading",
      "mass-responsorial-psalm",
      "mass-second-reading",
      "mass-gospel-acclamation",
      "mass-gospel",
      "mass-homily",
      "mass-creed",
      "mass-universal-prayer",
    ],
  },
];

export const massParts: Topic[] = [
  // Before Mass
  {
    slug: "mass-arriving",
    title: "Arriving at Mass",
    question: "How do I prepare for Mass before it begins?",
    alsoKnownAs: ["Preparing for Mass", "Before Mass"],
    category: "mass",
    keywords: ["before Mass", "arrive early", "how early to arrive", "fasting before Communion", "one hour fast", "Eucharistic fast", "confession before Mass", "silence before Mass", "preparing for Communion"],
    summary:
      "Preparing for Mass starts before you walk in. Catholics who will receive Communion fast for an hour beforehand and, if they are aware of grave sin, go to Confession first. Many people arrive a few minutes early to settle in and pray. Inside, the Church encourages silence so that everyone can prepare.",
    explanation: [
      "The fast: anyone who will receive Communion abstains from food and drink, except water and medicine, for at least one hour before Communion (not before Mass begins). The elderly, the sick, and those who care for them are exempt (canon 919).",
      "Conscience: St. Paul tells Christians to examine themselves before sharing the Lord's Supper (1 Corinthians 11:28). Catholics conscious of grave sin go to Confession before receiving Communion; Receiving Communion explains the rule and its exceptions.",
      "Arriving: coming a few minutes early is a courtesy, not a rule. It gives time to find a seat, look over the readings, and pray. The Church's instruction on the Mass calls it commendable to keep silence in the church even before the celebration begins (GIRM 45).",
      "Clothing and manners are customs that vary from place to place. The Catechism asks only that our bearing and clothing show “the respect, solemnity, and joy” of meeting Christ (CCC 1387).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1385, 1387", url: ccc("__P42") }],
      scripture: [{ passage: "1 Corinthians 11:27–29", url: bible("1corinthians/11") }],
      documents: ["girm", "canon-law-eucharist"],
    },
    resources: ["catholicculture-gestures-of-worship"],
    related: ["mass-etiquette", "how-to-receive-communion", "first-time-at-mass"],
  },
  {
    slug: "mass-holy-water",
    title: "Holy Water",
    question: "Why do Catholics bless themselves with holy water?",
    alsoKnownAs: ["Holy water font", "Blessing yourself"],
    category: "mass",
    keywords: ["holy water", "holy water font", "stoup", "blessing yourself", "entering church", "dip fingers", "remembering baptism", "sacramental"],
    summary:
      "Near the doors of a Catholic church there is a font, or basin, of holy water. On the way in, Catholics dip their fingers in it and make the Sign of the Cross. The gesture recalls Baptism, when they were washed in water and entered the Church. Holy water is a sacramental: a sacred sign that disposes us to receive God's grace.",
    explanation: [
      "Why water: Baptism is the door to the Christian life. St. Paul writes that we were “buried with him through baptism” so that we might live a new life (Romans 6:4). The Catechism explains that a church has a holy water font to foster remembrance of our baptismal promises (CCC 1185).",
      "What it is: holy water is water blessed by a priest or deacon with a prayer of the Church. It is a sacramental. Unlike the sacraments, sacramentals do not give grace by themselves; through the Church's prayer they prepare us to receive grace and to cooperate with it (CCC 1670).",
      "What to do: touch the water with the fingers of your right hand and make the Sign of the Cross. Some people bless themselves again on the way out. This is a devotion rather than a rule of the Mass, and visitors are free to do it or not.",
      "On some Sundays, especially in Easter Time, the priest may bless water during Mass and sprinkle the people with it in place of the Penitential Act, for the same reason: to recall Baptism (GIRM 51).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1185", url: ccc("__P3A") },
        { paragraphs: "1667–1670", url: ccc("__P58") },
      ],
      scripture: [{ passage: "Romans 6:3–4", url: bible("romans/6") }],
    },
    resources: ["catholicculture-gestures-of-worship"],
    related: ["mass-sign-of-the-cross", "mass-penitential-act", "mass-gestures"],
  },
  {
    slug: "mass-genuflection",
    title: "Genuflecting",
    question: "Why do Catholics genuflect before entering the pew?",
    alsoKnownAs: ["Genuflection", "Tabernacle"],
    category: "mass",
    keywords: ["genuflect", "genuflection", "kneel on one knee", "tabernacle", "sanctuary lamp", "red candle", "bow to the altar", "entering the pew", "Blessed Sacrament"],
    summary:
      "Catholics genuflect, bending the right knee to the floor, toward the tabernacle, where the consecrated Hosts are kept. It is a sign of adoration, because Catholics believe Christ is truly present in the Blessed Sacrament. If the tabernacle is not in the main part of the church, people bow to the altar instead. Anyone who cannot genuflect can make a bow.",
    explanation: [
      "Why: the Church's instruction on the Mass says a genuflection “signifies adoration” and is reserved for the Blessed Sacrament (and for the Cross on Good Friday). It also says that everyone who passes before the Blessed Sacrament genuflects, unless moving in procession (GIRM 274).",
      "Where is the tabernacle? It is a locked box or cabinet in a prominent place, sometimes in the sanctuary and sometimes in a side chapel (GIRM 314–315). A lamp, often in red glass, burns near it to show and honor Christ's presence (GIRM 316).",
      "What to do: before entering your pew, face the tabernacle, bend your right knee to the floor, and rise. Many people make the Sign of the Cross as they do. If the tabernacle is in a separate chapel, the common practice is to bow to the altar. If you cannot kneel, a bow from the waist is enough.",
      "During Mass itself the ministers do not genuflect to the tabernacle as they move around the sanctuary; the priest genuflects after the consecration and before Communion (GIRM 274).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1378–1379", url: ccc("__P41") }],
      scripture: [{ passage: "Philippians 2:10", url: bible("philippians/2") }],
      documents: ["girm"],
    },
    resources: ["catholicculture-gestures-of-worship", "ncr-catholic-calisthenics"],
    related: ["real-presence", "mass-gestures", "mass-quiet-prayer"],
  },
  {
    slug: "mass-quiet-prayer",
    title: "Praying Before Mass",
    question: "What should I do in the pew before Mass starts?",
    alsoKnownAs: ["Silence before Mass", "Prayer before Mass"],
    category: "mass",
    keywords: ["before Mass begins", "silence in church", "kneel and pray", "prayer before Mass", "what to pray", "recollection", "talking in church"],
    summary:
      "Once in the pew, many Catholics kneel or sit for a few minutes of quiet prayer. It is a time to place yourself in God's presence, bring your intentions, and get ready to listen. The Church recommends silence in the church before Mass so that everyone can prepare. Greet the people around you quietly.",
    explanation: [
      "The Church's instruction on the Mass says it is commendable to keep silence in the church before the celebration, so that all can prepare to take part devoutly (GIRM 45). The prophet Habakkuk puts it simply: “silence before him, all the earth!” (Habakkuk 2:20).",
      "How to pray: there is no set prayer. You might thank God, ask for help in a need, offer the Mass for someone, or read the day's readings. Kneeling is a common custom for this prayer; sitting is just as fine.",
      "Conversation: a church is also a place where friends meet, and a warm, quiet greeting is welcome. Longer conversations are best kept for the entrance or after Mass, since others may be praying.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1185", url: ccc("__P3A") }],
      scripture: [{ passage: "Habakkuk 2:20", url: bible("habakkuk/2") }],
      documents: ["girm"],
    },
    resources: ["catholicculture-gestures-of-worship"],
    related: ["mass-arriving", "mass-etiquette", "mass-genuflection"],
  },

  // Introductory Rites
  {
    slug: "mass-entrance",
    title: "The Entrance",
    question: "What happens at the beginning of Mass?",
    alsoKnownAs: ["Entrance procession", "Entrance chant", "Opening hymn", "Introit"],
    category: "mass",
    keywords: ["opening hymn", "entrance song", "procession", "Introit", "entrance antiphon", "beginning of Mass", "altar servers", "processional cross", "kiss the altar"],
    summary:
      "Mass begins as the priest and ministers walk in procession to the altar while everyone stands and sings. The song, called the Entrance Chant, opens the celebration, unites the people, and introduces the feast or season. When they reach the sanctuary, the priest and deacon reverence the altar, the symbol of Christ, with a kiss.",
    explanation: [
      "Why: the Introductory Rites help the people who have gathered become one assembly and prepare to hear God's word and celebrate the Eucharist (GIRM 46). The Entrance Chant opens the celebration, fosters unity, introduces the mystery of the day or season, and accompanies the procession (GIRM 47).",
      "The procession: servers usually carry the cross and candles, followed by the reader or the deacon with the Book of the Gospels, and the priest. At the sanctuary, they bow to the altar, and the priest and deacon kiss it; the priest may also incense the cross and the altar (GIRM 49).",
      "What the congregation does: stand and join in the singing. In the United States, the chant may be the antiphon from the Missal, a psalm, or another suitable song approved by the bishops (GIRM 48). If there is no singing, the people, a reader, or the priest recites the antiphon printed in the Missal.",
      "The Psalms sang of going up to God's house: “I rejoiced when they said to me, ‘Let us go to the house of the LORD’” (Psalm 122:1).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1156–1158", url: ccc("__P38") },
        { paragraphs: "1348", url: ccc("__P40") },
      ],
      scripture: [{ passage: "Psalm 122", url: bible("psalms/122") }],
      documents: ["girm"],
    },
    resources: ["usccb-introductory-rites"],
    related: ["what-happens-at-mass", "mass-sign-of-the-cross", "mass-postures"],
  },
  {
    slug: "mass-sign-of-the-cross",
    title: "The Sign of the Cross",
    question: "Why does Mass begin with the Sign of the Cross?",
    alsoKnownAs: ["In the name of the Father"],
    category: "mass",
    keywords: ["sign of the cross", "in the name of the Father", "crossing yourself", "how to make the sign of the cross", "Trinity", "Amen", "beginning of Mass"],
    summary:
      "After the opening song, the priest and everyone present make the Sign of the Cross as the priest says the words “In the name of the Father, and of the Son, and of the Holy Spirit,” and the people answer “Amen.” Christians are baptized in that name, and the cross is the sign of Christ's saving death, so the Mass begins by placing everything under the Trinity and the cross.",
    explanation: [
      "What happens: at the chair, the priest makes the Sign of the Cross together with the whole assembly (GIRM 50). Everyone stands.",
      "How to make it: with your right hand, touch your forehead, your chest, your left shoulder, and then your right shoulder.",
      "Meaning: the words come from Jesus' command to baptize “in the name of the Father, and of the Son, and of the holy Spirit” (Matthew 28:19). The Catechism notes that Christians begin their day, their prayers, and their activities with this sign, dedicating them to God (CCC 2157), and that the cross marks those who belong to Christ (CCC 1235).",
      "The people's “Amen” makes the prayer their own. The Mass ends with the same sign at the final blessing.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1235", url: ccc("__P3J") },
        { paragraphs: "2157", url: ccc("__P7K") },
      ],
      scripture: [{ passage: "Matthew 28:19", url: bible("matthew/28") }],
      documents: ["girm"],
    },
    resources: ["usccb-introductory-rites"],
    related: ["what-is-the-trinity", "mass-greeting", "mass-gestures"],
  },
  {
    slug: "mass-greeting",
    title: "The Greeting",
    question: "What does “And with your spirit” mean?",
    alsoKnownAs: ["Greeting at Mass", "The Lord be with you"],
    category: "mass",
    keywords: ["the Lord be with you", "and with your spirit", "and also with you", "greeting", "grace of our Lord Jesus Christ", "new translation", "et cum spiritu tuo"],
    summary:
      "After the Sign of the Cross, the priest greets the people with words from Scripture, such as “The Lord be with you,” and the people answer “And with your spirit.” The greeting expresses that the Lord is present among his people as they gather. “And with your spirit” is a faithful translation of the ancient Latin response, which echoes St. Paul's letters.",
    explanation: [
      "What the priest says: one of three greetings, “The grace of our Lord Jesus Christ …” (from 2 Corinthians 13:13), “Grace to you and peace …,” or “The Lord be with you.” By this greeting and the people's response, the instruction on the Mass says, the mystery of the Church gathered together is made manifest (GIRM 50).",
      "What the people say: “And with your spirit.” The response translates the Latin Et cum spiritu tuo and echoes Scripture: St. Paul closes his letters with “The grace of our Lord Jesus Christ be with your spirit” (Galatians 6:18) and “The Lord be with your spirit” (2 Timothy 4:22). An earlier English translation used “And also with you.”",
      "Even older roots: when Boaz greeted his harvesters, “The LORD be with you!” they answered with a blessing in return (Ruth 2:4).",
      "After the greeting, the priest, the deacon, or another minister may briefly introduce the Mass of the day (GIRM 50). Everyone stands.",
    ],
    teaching: {
      scripture: [
        { passage: "2 Corinthians 13:13", url: bible("2corinthians/13") },
        { passage: "Galatians 6:18", url: bible("galatians/6") },
        { passage: "2 Timothy 4:22", url: bible("2timothy/4") },
        { passage: "Ruth 2:4", url: bible("ruth/2") },
      ],
      documents: ["girm"],
    },
    resources: ["usccb-introductory-rites", "liturgy-office-order-of-mass"],
    related: ["mass-responses", "mass-penitential-act", "mass-sign-of-the-cross"],
  },
  {
    slug: "mass-penitential-act",
    title: "The Penitential Act",
    question: "Why do Catholics confess their sins at the start of Mass?",
    alsoKnownAs: ["I confess", "Confiteor", "Act of Penitence", "Sprinkling rite", "Asperges"],
    category: "mass",
    keywords: ["I confess", "Confiteor", "through my fault", "striking the breast", "beat your breast", "penitential rite", "Act of Penitence", "sprinkling", "Asperges", "does it forgive sins"],
    summary:
      "Near the start of Mass, the priest invites everyone to acknowledge their sins and ask for God's mercy, so that they can celebrate the sacred mysteries well. After a moment of silence, the people confess together, most often with the prayer called the I confess (Confiteor), and the priest asks God to have mercy on all. This prayer does not replace the Sacrament of Confession.",
    explanation: [
      "Three forms: the priest chooses one. The I confess, said by all; a short exchange between priest and people asking for God's mercy; or a series of invocations addressed to Christ, each answered with “Lord, have mercy” or “Christ, have mercy.” The full texts are in the Order of Mass linked below.",
      "Striking the breast: during the I confess, at the words admitting fault (“through my fault …”), the Missal directs everyone to strike their breast. It is the gesture of the tax collector in Jesus' parable, who “beat his breast” and prayed, “O God, be merciful to me a sinner” (Luke 18:13).",
      "The absolution: the priest concludes, “May almighty God have mercy on us …,” and the people answer “Amen.” The instruction on the Mass is clear that this prayer lacks the effect of the Sacrament of Penance (GIRM 51). Venial sins are forgiven through the Eucharist and acts of love (CCC 1394), but grave sins need Confession.",
      "The sprinkling rite: on Sundays, especially in Easter Time, the priest may instead bless water and sprinkle the people to recall their Baptism (GIRM 51). People often make the Sign of the Cross as the water reaches them.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1393–1395", url: ccc("__P42") }],
      scripture: [
        { passage: "Luke 18:9–14", url: bible("luke/18") },
        { passage: "James 5:16", url: bible("james/5") },
      ],
      documents: ["girm"],
    },
    resources: ["liturgy-office-order-of-mass", "ewtn-breast-beating-confiteor"],
    related: ["mass-kyrie", "mass-gestures", "mass-holy-water"],
  },
  {
    slug: "mass-kyrie",
    title: "Lord, Have Mercy (Kyrie)",
    question: "What does “Kyrie, eleison” mean?",
    alsoKnownAs: ["Kyrie", "Kyrie eleison", "Lord, have mercy", "Christe eleison"],
    category: "mass",
    keywords: ["Kyrie", "Kyrie eleison", "Christe eleison", "Lord have mercy", "Christ have mercy", "Greek in the Mass", "litany"],
    summary:
      "“Kyrie, eleison” is Greek for “Lord, have mercy.” After the Penitential Act, the congregation acclaims Christ and asks for his mercy: “Lord, have mercy; Christ, have mercy; Lord, have mercy.” It may be sung or said in English or in Greek, the language of the earliest Christians.",
    explanation: [
      "Meaning: the Kyrie is a chant by which the faithful acclaim the Lord and implore his mercy, so it is ordinarily done by everyone, people with the choir or cantor (GIRM 52). It is as much praise of Christ as a plea for forgiveness.",
      "How it goes: the priest, cantor, or choir sings or says each invocation and the people repeat it. As a rule each is sung or said twice, though it can be repeated more often, especially when sung (GIRM 52).",
      "When it is left out: if the Penitential Act already used the invocations with “Lord, have mercy,” the Kyrie is not repeated (GIRM 52).",
      "In the Gospels, people in need cried out to Jesus in the same way: “Lord, Son of David, have pity on us!” (Matthew 20:30). Everyone stands.",
    ],
    teaching: {
      scripture: [{ passage: "Matthew 20:29–34", url: bible("matthew/20") }],
      documents: ["girm"],
    },
    resources: ["liturgy-office-order-of-mass", "usccb-introductory-rites"],
    related: ["mass-penitential-act", "mass-gloria", "mass-responses"],
  },
  {
    slug: "mass-gloria",
    title: "The Gloria",
    question: "What is the Gloria?",
    alsoKnownAs: ["Glory to God in the highest", "Gloria in excelsis"],
    category: "mass",
    keywords: ["Gloria", "Glory to God", "Glory to God in the highest", "hymn of praise", "angels' song", "no Gloria in Lent", "no Gloria in Advent"],
    summary:
      "The Gloria is an ancient hymn of praise that begins with the song of the angels at Christ's birth: “Glory to God in the highest.” It glorifies the Father and the Lamb of God and asks for his mercy. It is sung or said on Sundays outside Advent and Lent and on solemnities and feasts.",
    explanation: [
      "Meaning: the instruction on the Mass calls it a very ancient and venerable hymn in which the Church, gathered in the Holy Spirit, glorifies and entreats God the Father and the Lamb (GIRM 53). Its first line is the angels' song in Luke 2:14.",
      "When: Sundays outside Advent and Lent, solemnities and feasts, and other solemn celebrations. It is omitted in Advent and Lent, so its return at Christmas and Easter is all the more joyful.",
      "Who sings it: the priest, a cantor, or the choir begins it; it is sung by everyone together, by the people alternating with the choir, or by the choir alone. If it is not sung, everyone recites it. Its text may not be replaced by any other song (GIRM 53).",
      "Everyone stands. The full text is in the Order of Mass linked below.",
    ],
    teaching: {
      catechism: [{ paragraphs: "2639–2643", url: ccc("__P9A") }],
      scripture: [{ passage: "Luke 2:13–14", url: bible("luke/2") }],
      documents: ["girm"],
    },
    resources: ["liturgy-office-order-of-mass", "usccb-introductory-rites"],
    related: ["mass-kyrie", "mass-collect", "mass-responses"],
  },
  {
    slug: "mass-collect",
    title: "The Collect",
    question: "What is the opening prayer at Mass?",
    alsoKnownAs: ["Collect", "Opening Prayer", "Let us pray"],
    category: "mass",
    keywords: ["collect", "opening prayer", "let us pray", "prayer of the day", "Amen", "pause for silence", "through our Lord Jesus Christ"],
    summary:
      "The Introductory Rites end with a prayer called the Collect. The priest says “Let us pray,” and everyone pauses in silence to become aware of God's presence and bring their own intentions. The priest then says the prayer of the day, which expresses the character of the celebration, and the people make it their own with “Amen.”",
    explanation: [
      "Why the silence: the pause after “Let us pray” is part of the rite, so that all may be conscious of being in God's presence and form their own petitions (GIRM 54). The priest then “collects” those prayers into one.",
      "Its shape: following ancient tradition, the Collect is usually addressed to God the Father, through Christ, in the Holy Spirit, and ends with a Trinitarian conclusion (GIRM 54). Christian prayer goes to the Father in the name of Jesus (CCC 2664).",
      "Each Mass has its own Collect, so it changes with the day, feast, or season.",
      "Everyone stands. After the Amen, everyone sits for the readings (GIRM 128).",
    ],
    teaching: {
      catechism: [{ paragraphs: "2664", url: ccc("__P9F") }],
      documents: ["girm"],
    },
    resources: ["usccb-introductory-rites"],
    related: ["mass-gloria", "mass-first-reading", "mass-postures"],
  },

  // Liturgy of the Word
  {
    slug: "mass-first-reading",
    title: "The First Reading",
    question: "What is the first reading at Mass?",
    alsoKnownAs: ["Old Testament reading", "Liturgy of the Word", "Lector"],
    category: "mass",
    keywords: ["first reading", "Old Testament reading", "lector", "reader", "ambo", "lectionary", "The word of the Lord", "Thanks be to God", "readings at Mass", "Sunday readings", "Liturgy of the Word"],
    summary:
      "The Liturgy of the Word begins with the first reading, usually from the Old Testament (in Easter Time, from the Acts of the Apostles). A reader proclaims it from the ambo while everyone sits and listens. At the end the reader says “The word of the Lord,” and the people answer “Thanks be to God.” A short silence may follow.",
    explanation: [
      "Why it matters: the Church teaches that in the readings God himself speaks to his people. In the readings, the instruction on the Mass says, “the table of God's word is prepared for the faithful” (GIRM 57). Christ is present in his word, “since it is he himself who speaks when the holy Scriptures are read in the Church” (CCC 1088).",
      "Who reads: proclaiming the readings is a ministry, usually done by a lay reader (lector), not by the priest (GIRM 59). Readings are proclaimed from the ambo, the place set apart for God's word (GIRM 309). Only biblical texts may be read (GIRM 57).",
      "Which reading: the readings come from the Lectionary, the book of readings for Mass. On Sundays they follow a three-year cycle, and the first reading is often chosen to echo the Gospel of the day.",
      "What the people do: sit, listen, and answer “Thanks be to God.” Many people read along in a missal; others prefer simply to listen. Brief silence afterward lets the word sink in (GIRM 56, 128).",
      "In the Old Testament, when Ezra read the law to the people, they stood to listen, and the Levites explained it “so that all could understand what was read” (Nehemiah 8:8).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1088", url: ccc("__P2W") },
        { paragraphs: "1100–1102", url: ccc("__P2X") },
        { paragraphs: "1349", url: ccc("__P40") },
      ],
      scripture: [{ passage: "Nehemiah 8:1–8", url: bible("nehemiah/8") }],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-word", "usccb-daily-readings", "lectionary-overview"],
    related: ["mass-responsorial-psalm", "mass-in-scripture", "what-happens-at-mass"],
  },
  {
    slug: "mass-responsorial-psalm",
    title: "The Responsorial Psalm",
    question: "What is the Responsorial Psalm?",
    alsoKnownAs: ["Psalm response", "Gradual"],
    category: "mass",
    keywords: ["responsorial psalm", "psalm", "psalm response", "refrain", "cantor", "psalmist", "sung psalm", "Psalms"],
    summary:
      "After the first reading, a cantor or reader sings or says a psalm, and the people respond after each verse with a short refrain. The psalm helps everyone meditate on the word of God just heard, using the prayer book of Israel that Jesus himself prayed. It is preferably sung, at least the people's response.",
    explanation: [
      "Why: the Responsorial Psalm is an integral part of the Liturgy of the Word because it fosters meditation on God's word (GIRM 61). It usually answers the first reading. The Catechism calls the Psalter the book in which “the Word of God becomes man's prayer” (CCC 2587).",
      "How it goes: the psalmist or cantor sings the verses from the ambo or another suitable place; the people remain seated and sing the refrain. If it cannot be sung, it is recited. To help the people sing, a seasonal psalm and response may be used instead of the one assigned for the day (GIRM 61).",
      "The psalm is the word of God, so it may not be replaced by a non-biblical song (GIRM 57).",
      "The first Christians also prayed the psalms together: “singing psalms, hymns, and spiritual songs with gratitude in your hearts to God” (Colossians 3:16).",
    ],
    teaching: {
      catechism: [{ paragraphs: "2585–2589", url: ccc("__P91") }],
      scripture: [{ passage: "Colossians 3:16", url: bible("colossians/3") }],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-word", "usccb-daily-readings"],
    related: ["mass-first-reading", "mass-second-reading", "mass-responses"],
  },
  {
    slug: "mass-second-reading",
    title: "The Second Reading",
    question: "What is the second reading at Mass?",
    alsoKnownAs: ["Epistle", "New Testament reading"],
    category: "mass",
    keywords: ["second reading", "epistle", "letters of Paul", "New Testament reading", "St. Paul", "weekday Mass one reading", "lector"],
    summary:
      "On Sundays and solemnities there is a second reading before the Gospel, usually from one of the New Testament letters written by apostles such as St. Paul. A reader proclaims it, everyone sits and listens, and it ends with the same response as the first reading: “The word of the Lord.” “Thanks be to God.” Weekday Masses usually have only one reading before the Gospel.",
    explanation: [
      "From the beginning, apostolic letters were written to be read aloud to the gathered Church. Paul tells the Thessalonians that “this letter be read to all the brothers” (1 Thessalonians 5:27) and asks the Colossians to share theirs with the church of the Laodiceans (Colossians 4:16).",
      "On Sundays in Ordinary Time, the second reading often moves through one letter over several weeks, so it does not always share a theme with the other readings.",
      "The reader proclaims it from the ambo (GIRM 130); everyone sits, listens, and responds. A few moments of silence may follow.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1349", url: ccc("__P40") }],
      scripture: [
        { passage: "1 Thessalonians 5:27", url: bible("1thessalonians/5") },
        { passage: "Colossians 4:16", url: bible("colossians/4") },
      ],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-word", "lectionary-overview"],
    related: ["mass-responsorial-psalm", "mass-gospel-acclamation", "mass-first-reading"],
  },
  {
    slug: "mass-gospel-acclamation",
    title: "The Alleluia",
    question: "Why do Catholics stand and sing Alleluia?",
    alsoKnownAs: ["Gospel Acclamation", "Verse before the Gospel", "Sequence"],
    category: "mass",
    keywords: ["Alleluia", "Hallelujah", "Gospel acclamation", "no Alleluia in Lent", "Lenten acclamation", "Sequence", "Easter Sequence", "Pentecost Sequence"],
    summary:
      "Before the Gospel, everyone stands and sings “Alleluia,” a Hebrew word meaning “Praise the Lord.” The acclamation welcomes Christ, who is about to speak in the Gospel, and professes faith in him. In Lent the Alleluia is not sung, and another acclamation, the verse before the Gospel, takes its place.",
    explanation: [
      "Meaning: the acclamation is a rite in itself, by which the assembly welcomes and greets the Lord who is about to speak to it in the Gospel (GIRM 62). In the Book of Revelation, the multitude in heaven cries “Alleluia!” in praise of God (Revelation 19:1–6).",
      "How it goes: all stand and sing; a choir or cantor leads and sings the verse, and the people repeat the Alleluia. In Lent, a different acclamation is sung. At Masses with only one reading before the Gospel, it may be left out if it is not sung (GIRM 63).",
      "The Sequence: on Easter Sunday and Pentecost, a special hymn called the Sequence is sung before the Alleluia; on a few other days it is optional (GIRM 64).",
      "Meanwhile, the priest may put incense in the thurible. A deacon who will proclaim the Gospel bows and asks the priest's blessing; a priest proclaiming it himself bows before the altar and quietly asks God to cleanse his heart (GIRM 132, 175).",
    ],
    teaching: {
      scripture: [{ passage: "Revelation 19:1–6", url: bible("revelation/19") }],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-word", "lectionary-overview"],
    related: ["mass-gospel", "mass-postures", "mass-second-reading"],
  },
  {
    slug: "mass-gospel",
    title: "The Gospel",
    question: "Why is the Gospel treated differently from the other readings?",
    alsoKnownAs: ["Gospel reading", "Book of the Gospels", "Three small crosses"],
    category: "mass",
    keywords: ["Gospel", "Gospel reading", "Glory to you O Lord", "Praise to you Lord Jesus Christ", "sign of the cross on forehead lips and heart", "three crosses", "Book of the Gospels", "deacon", "stand for the Gospel", "incense"],
    summary:
      "The reading of the Gospel is the high point of the Liturgy of the Word, because it tells of the life and words of Christ himself. A deacon or priest proclaims it while everyone stands. As the reading is announced, everyone traces a small cross on the forehead, lips, and breast. At the end, the people acclaim Christ, who has spoken to them.",
    explanation: [
      "Marks of honor: the Gospel is set apart by who reads it (a deacon or a priest, who first prepares with a blessing or prayer), by the people standing, by their acclamations, and by the reverence shown to the Book of the Gospels, which may be carried with candles and incensed (GIRM 60, 133).",
      "The dialogue: the deacon or priest says “The Lord be with you,” and the people answer “And with your spirit.” He announces “A reading from the holy Gospel according to …,” and everyone answers “Glory to you, O Lord.” At the end he says “The Gospel of the Lord,” and all answer “Praise to you, Lord Jesus Christ.”",
      "Three small crosses: as he announces the reading, the deacon or priest signs the book and then his forehead, mouth, and breast with his thumb, “which everyone else does as well” (GIRM 134). A common explanation is that we ask for God's word to be in our minds, on our lips, and in our hearts.",
      "Posture: everyone stands and turns toward the ambo as a sign of reverence for the Gospel of Christ (GIRM 133). Afterward the priest or deacon kisses the book (GIRM 134).",
      "Jesus himself read Scripture in the synagogue at Nazareth and said, “Today this scripture passage is fulfilled in your hearing” (Luke 4:21).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1088", url: ccc("__P2W") },
        { paragraphs: "1154", url: ccc("__P38") },
      ],
      scripture: [{ passage: "Luke 4:16–21", url: bible("luke/4") }],
      documents: ["girm"],
    },
    resources: ["ewtn-gestures-at-the-gospel", "usccb-daily-readings"],
    related: ["mass-homily", "mass-gestures", "mass-gospel-acclamation"],
  },
  {
    slug: "mass-homily",
    title: "The Homily",
    question: "What is the homily?",
    alsoKnownAs: ["Sermon", "Preaching"],
    category: "mass",
    keywords: ["homily", "sermon", "preaching", "who can preach", "deacon homily", "how long is the homily", "dismissal of catechumens", "OCIA dismissal", "catechumens leave"],
    summary:
      "After the Gospel, the priest or deacon preaches the homily, explaining the readings or the prayers of the Mass and applying them to the lives of the people. The homily is part of the liturgy itself, not an interruption of it. It is required at Sunday Masses and on holy days. Everyone sits to listen, and a short silence may follow.",
    explanation: [
      "Purpose: the homily should explain some aspect of the readings or of the texts of the Mass, taking into account the mystery being celebrated and the needs of the listeners (GIRM 65). The Catechism calls it an exhortation to accept the readings as what they truly are, the Word of God, and to put it into practice (CCC 1349).",
      "Who preaches: ordinarily the priest celebrant; he may entrust it to a concelebrating priest or, at times, to the deacon, but never to a lay person (GIRM 66). There must be a homily at Sunday and holy day Masses with a congregation, and it may be omitted only for a serious reason; on other days it is recommended (GIRM 66).",
      "Scripture shows the pattern: after Ezra read the law, the Levites interpreted it for the people (Nehemiah 8:8), and the risen Jesus “interpreted to them what referred to him in all the scriptures” (Luke 24:27).",
      "Catechumens: in many U.S. parishes, people preparing for Baptism through OCIA are dismissed with a catechist after the homily to reflect together on the word of God. The U.S. bishops call this “praiseworthy,” at least on Sundays (National Statutes for the Christian Initiation of Adults, Norm 10). They first receive the Eucharist when they complete their initiation, usually at the Easter Vigil.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1349", url: ccc("__P40") }],
      scripture: [
        { passage: "Nehemiah 8:8", url: bible("nehemiah/8") },
        { passage: "Luke 24:27", url: bible("luke/24") },
      ],
      documents: ["girm", "homiletic-directory", "usccb-nscia"],
    },
    related: ["mass-gospel", "mass-creed", "how-to-become-catholic", "bishops-priests-deacons"],
  },
  {
    slug: "mass-creed",
    title: "The Creed at Mass",
    question: "Why do Catholics say the Creed at Mass?",
    alsoKnownAs: ["Profession of Faith", "Nicene Creed", "Credo", "I believe in one God"],
    category: "mass",
    keywords: ["Creed at Mass", "Nicene Creed", "Apostles' Creed", "profession of faith", "I believe in one God", "consubstantial", "bow during the Creed", "Credo", "why I believe and not we believe"],
    summary:
      "On Sundays and solemnities, after the homily, everyone stands and professes the Creed together. It is the assembly's response to the word of God it has just heard, and a summary of the great mysteries of the faith that are about to be celebrated in the Eucharist. Usually it is the Nicene Creed; the Apostles' Creed may be used instead, especially in Lent and Easter Time.",
    explanation: [
      "Purpose: the instruction on the Mass says the Creed lets the whole people respond to the word of God proclaimed in the readings and explained in the homily, and call to mind the great mysteries of the faith before they are celebrated in the Eucharist (GIRM 67).",
      "When: it is sung or said by the priest and people together on Sundays and solemnities, and may be used at other solemn celebrations (GIRM 68).",
      "The bow: at the words about the Son of God becoming man (“and by the Holy Spirit was incarnate of the Virgin Mary, and became man”), everyone makes a profound bow. On Christmas and the Annunciation, everyone genuflects instead (GIRM 137). With the Apostles' Creed, all bow at the words about his conception and birth.",
      "“I believe”: the Missal's English text begins “I believe,” following the Latin Credo. The Catechism explains that “I believe” is each believer's personal faith, and “We believe” is the faith of the Church; each implies the other (CCC 167).",
      "Everyone stands. The full texts of both creeds are in the Order of Mass linked below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "167", url: ccc("__PY") },
        { paragraphs: "185–197", url: ccc("__P14") },
      ],
      scripture: [{ passage: "Romans 10:9–10", url: bible("romans/10") }],
      documents: ["girm"],
    },
    resources: ["liturgy-office-order-of-mass", "wof-i-believe"],
    related: ["what-is-the-creed", "mass-universal-prayer", "mass-gestures"],
  },
  {
    slug: "mass-universal-prayer",
    title: "The Prayer of the Faithful",
    question: "What is the Prayer of the Faithful?",
    alsoKnownAs: ["Universal Prayer", "General Intercessions", "Prayers of the Faithful", "Petitions"],
    category: "mass",
    keywords: ["prayer of the faithful", "prayers of the faithful", "universal prayer", "general intercessions", "petitions", "intercessions", "Lord hear our prayer", "intentions"],
    summary:
      "The Liturgy of the Word ends with the Prayer of the Faithful. A deacon, cantor, or reader announces a series of intentions, and the people respond to each one, usually with a short spoken or sung response such as “Lord, hear our prayer.” In this prayer the baptized exercise their priesthood by praying for the whole world.",
    explanation: [
      "Meaning: the people respond to the word of God they have received and, exercising their baptismal priesthood, offer prayers for the salvation of all (GIRM 69). St. Paul asks “that supplications, prayers, petitions, and thanksgivings be offered for everyone” (1 Timothy 2:1).",
      "The order of intentions: as a rule, for the needs of the Church; for public authorities and the salvation of the world; for those burdened by any difficulty; and for the local community. At weddings, funerals, and similar Masses they may reflect the occasion more closely (GIRM 70).",
      "Who does what: the priest introduces the prayer and concludes it with a prayer from the chair. The intentions are announced by a deacon, cantor, reader, or other lay person. The people stand and respond after each intention, or pray in silence (GIRM 71, 138).",
      "The response varies from parish to parish; listen to how the first intention ends and follow along. After the concluding prayer and its Amen, everyone sits for the Preparation of the Gifts.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1349", url: ccc("__P40") },
        { paragraphs: "2636", url: ccc("__P98") },
      ],
      scripture: [{ passage: "1 Timothy 2:1–4", url: bible("1timothy/2") }],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-word"],
    related: ["mass-creed", "what-happens-at-mass", "mass-responses"],
  },
];
