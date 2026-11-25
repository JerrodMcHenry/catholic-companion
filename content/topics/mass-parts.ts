// Learn › The Mass: one page per part of the Mass, in the order it happens.
// The overview ("What happens during Mass?") lives in mass.ts and links here through `massOrder`.
//
// Short people's responses are quoted from the Roman Missal (2010 ICEL translation, U.S. edition);
// longer prayers (the I confess, the Gloria, the Creed) are described and linked, not reproduced.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

// The parts in Mass order, grouped as the Missal groups them. Inside the Eucharistic Prayer the order
// is that of Eucharistic Prayers II–IV; the topics themselves explain how other prayers differ.
// Validated in content/index.ts: every slug must be a Mass topic and appear once.
export const massOrder: { section: string; slugs: string[] }[] = [
  { section: "Before Mass", slugs: ["mass-arriving", "mass-holy-water", "mass-genuflection", "mass-quiet-prayer"] },
  {
    section: "Introductory Rites",
    slugs: ["mass-entrance", "mass-reverence-to-the-altar", "mass-sign-of-the-cross", "mass-greeting", "mass-penitential-act", "mass-kyrie", "mass-gloria", "mass-collect"],
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
  {
    section: "Liturgy of the Eucharist",
    slugs: [
      "mass-preparation-of-the-gifts",
      "mass-prayer-over-the-offerings",
      "mass-preface-dialogue",
      "mass-preface",
      "mass-sanctus",
      "mass-eucharistic-prayer",
      "mass-epiclesis",
      "mass-consecration",
      "mass-mystery-of-faith",
      "mass-intercessions",
      "mass-great-amen",
    ],
  },
  {
    section: "Communion Rite",
    slugs: [
      "mass-lords-prayer",
      "mass-sign-of-peace",
      "mass-lamb-of-god",
      "mass-invitation-to-communion",
      "mass-communion",
      "mass-thanksgiving-after-communion",
      "mass-prayer-after-communion",
    ],
  },
  { section: "Concluding Rites", slugs: ["mass-final-blessing", "mass-dismissal", "mass-recessional"] },
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
      "The procession: servers usually carry the cross and candles, followed by the reader or the deacon with the Book of the Gospels, and the priest. At the sanctuary, the ministers reverence the altar, explained in the next part (GIRM 49).",
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
    slug: "mass-reverence-to-the-altar",
    title: "Reverencing the Altar",
    question: "Why does the priest kiss the altar?",
    alsoKnownAs: ["Reverence to the altar", "Veneration of the altar", "Altar kiss", "Incensing the altar"],
    category: "mass",
    keywords: ["kiss the altar", "priest kisses the altar", "bow to the altar", "profound bow", "incense", "incensing the altar", "altar", "relics in the altar", "altar stone", "why is the altar important", "altar cloth"],
    summary:
      "When the entrance procession reaches the sanctuary, the priest, the deacon, and the other ministers make a profound bow to the altar, and the priest and deacon kiss it. On more solemn occasions the priest also incenses the cross and the altar. The altar is honored because it is the place where Christ's sacrifice is made present and the table of the Lord, and because the Church sees in it a symbol of Christ himself.",
    explanation: [
      "What happens: the ministers bow deeply to the altar; then, “as an expression of veneration,” the priest and deacon kiss it, and the priest may incense the cross and the altar (GIRM 49, 123, 173). If the tabernacle is in the sanctuary, the ministers genuflect to the Blessed Sacrament as they approach and leave the altar (GIRM 274). If the deacon carries the Book of the Gospels, he places it on the altar first (GIRM 173).",
      "Why the altar: the Catechism calls the altar “the center of the church,” where the sacrifice of the Cross is made present under sacramental signs, and “the table of the Lord, to which the People of God are invited” (CCC 1182). It is also “the symbol of Christ himself”; St. Ambrose asked, “For what is the altar of Christ if not the image of the Body of Christ?” (CCC 1383). A fixed altar signifies Christ, “the living stone” (GIRM 298).",
      "Why a kiss and incense: kissing the altar is a traditional sign of veneration; where it does not suit a culture, the bishops' conference may establish another sign (GIRM 273). Incense expresses reverence and prayer, as Scripture says: “Let my prayer be incense before you” (Psalm 141:2; Revelation 8:3–4; GIRM 276).",
      "What the congregation does: stand and continue singing. There is nothing for the people to say; you can unite yourself with the priest's gesture of love for Christ, in the spirit of the Psalm: “That I may come to the altar of God, to God, my joy, my delight” (Psalm 43:4).",
      "You may also see: many altars contain relics of saints: the Church “fittingly” keeps the ancient practice of placing relics under an altar when it is dedicated (GIRM 302). The altar is covered with at least one white cloth and has candles and a crucifix on or near it (GIRM 117, 304, 307–308). The same kiss and bow are repeated at the end of Mass.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1182", url: ccc("__P3A") },
        { paragraphs: "1383", url: ccc("__P42") },
      ],
      scripture: [
        { passage: "Psalm 43:3–4", url: bible("psalms/43") },
        { passage: "Psalm 141:2", url: bible("psalms/141") },
        { passage: "Revelation 8:3–4", url: bible("revelation/8") },
        { passage: "Hebrews 13:10", url: bible("hebrews/13") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-altar-kiss", "usccb-introductory-rites"],
    related: ["mass-entrance", "mass-recessional", "mass-gestures", "mass-preparation-of-the-gifts"],
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
    title: "The Gospel Acclamation",
    question: "Why do Catholics stand and sing Alleluia?",
    alsoKnownAs: ["Alleluia", "Lenten Gospel Acclamation", "Verse before the Gospel", "Sequence"],
    category: "mass",
    keywords: ["Alleluia", "Hallelujah", "Gospel acclamation", "no Alleluia in Lent", "Lenten acclamation", "Sequence", "Easter Sequence", "Pentecost Sequence"],
    summary:
      "Before the Gospel, everyone stands to sing the Gospel Acclamation, welcoming Christ, who is about to speak in the Gospel. For most of the year it is the Alleluia, a Hebrew word meaning “Praise the Lord.” During Lent the Alleluia is not sung; a different acclamation praising Christ is used instead, with a verse before the Gospel.",
    explanation: [
      "Meaning: the acclamation is a rite in itself, by which the assembly welcomes and greets the Lord who is about to speak to it in the Gospel (GIRM 62). In the Book of Revelation, the multitude in heaven cries “Alleluia!” in praise of God (Revelation 19:1–6).",
      "How it goes: all stand and sing; a choir or cantor leads and sings the verse, and the people repeat the Alleluia (GIRM 62). At Masses with only one reading before the Gospel, it may be left out if it is not sung (GIRM 63).",
      "Alleluia or Lenten acclamation: the Alleluia is sung in every season except Lent. In Lent, the Church sets aside this joyful word until Easter, and the people instead sing one of several short acclamations that praise Christ by name, while the cantor sings the verse before the Gospel from the Lectionary (GIRM 62). Both are the Gospel Acclamation; only the words change with the season.",
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
    resources: ["ec-homily", "ec-engage-homily"],
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

  // Liturgy of the Eucharist
  {
    slug: "mass-preparation-of-the-gifts",
    title: "The Preparation of the Gifts",
    question: "What happens when the bread and wine are brought to the altar?",
    alsoKnownAs: ["Offertory", "Presentation of the gifts", "Collection"],
    category: "mass",
    keywords: ["offertory", "offertory hymn", "collection", "gifts procession", "bread and wine", "water and wine", "Blessed be God for ever", "washing of hands", "lavabo", "incense", "altar"],
    summary:
      "The Liturgy of the Eucharist begins as the altar is prepared and the bread and wine are brought forward, often by members of the congregation, while a collection is taken for the Church and the poor. The priest places the gifts on the altar with prayers of blessing, mixes a little water into the wine, and washes his hands. The people sit, sing, and offer themselves with the gifts.",
    explanation: [
      "Why: Christ at the Last Supper “took bread” and the cup. The Church arranges the Liturgy of the Eucharist to match his actions: the gifts are taken and prepared, thanks is given over them, and they are broken and given (GIRM 72). The bread and wine will be offered in the Eucharistic sacrifice and become Christ's Body and Blood (CCC 1350).",
      "The collection: from the beginning, Christians brought gifts for those in need along with the bread and wine (CCC 1351). Money and other gifts are received and placed apart from the altar (GIRM 73). “God loves a cheerful giver” (2 Corinthians 9:7).",
      "What the priest does: he holds up the bread and then the chalice, blessing God for these gifts of creation and human work. If there is no singing, he may say these prayers aloud, and the people answer “Blessed be God for ever” (GIRM 142). He adds a little water to the wine, praying quietly that we may share in the divinity of Christ, who shared our humanity. He may incense the gifts, the altar, and the people, a sign of prayer rising to God (GIRM 75; Psalm 141:2). He then washes his hands, expressing a desire for inner purification (GIRM 76).",
      "What the people do: sit, join the Offertory song, and give to the collection. Bringing up the gifts is a privilege the instruction on the Mass calls praiseworthy (GIRM 73). Interiorly, this is the moment to place your own life, work, and needs on the altar with the gifts.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1350–1351", url: ccc("__P40") }],
      scripture: [
        { passage: "Malachi 1:11", url: bible("malachi/1") },
        { passage: "2 Corinthians 9:7", url: bible("2corinthians/9") },
        { passage: "Psalm 141:2", url: bible("psalms/141") },
      ],
      documents: ["girm"],
    },
    resources: ["usccb-liturgy-of-the-eucharist", "ec-collection-and-procession"],
    related: ["mass-in-scripture", "mass-postures", "what-happens-at-mass"],
  },
  {
    slug: "mass-prayer-over-the-offerings",
    title: "Pray, Brethren",
    question: "What does “my sacrifice and yours” mean?",
    alsoKnownAs: ["Prayer over the Offerings", "Orate, fratres", "Invitation to prayer"],
    category: "mass",
    keywords: ["pray brethren", "my sacrifice and yours", "may the Lord accept the sacrifice at your hands", "prayer over the offerings", "secret", "stand up", "offering ourselves"],
    summary:
      "After preparing the gifts, the priest invites the people: “Pray, brethren (brothers and sisters), that my sacrifice and yours may be acceptable to God, the almighty Father.” Everyone stands and answers, asking the Lord to accept the sacrifice “for our good and the good of all his holy Church.” The priest then says the Prayer over the Offerings, and the people answer “Amen.”",
    explanation: [
      "“My sacrifice and yours”: the priest offers the sacrifice in the person of Christ, but he does not offer it alone. The Second Vatican Council taught that the faithful offer the spotless Victim “not only through the hands of the priest, but also with him,” and so learn to offer themselves (Sacrosanctum Concilium 48). The Catechism says the lives of the faithful, “their praise, sufferings, prayer, and work,” are united with Christ's offering (CCC 1368).",
      "The people's response: “May the Lord accept the sacrifice at your hands for the praise and glory of his name, for our good and the good of all his holy Church.” The full text is in the Order of Mass linked below.",
      "The Prayer over the Offerings changes with each Mass. It concludes the Preparation of the Gifts and prepares for the Eucharistic Prayer; the people make it their own with “Amen” (GIRM 77).",
      "Posture: everyone stands at the invitation “Pray, brethren” (GIRM 43, 146) and remains standing through the Holy, Holy, Holy. St. Paul urges Christians to offer their bodies “as a living sacrifice” to God (Romans 12:1).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1368", url: ccc("__P41") }],
      scripture: [{ passage: "Romans 12:1", url: bible("romans/12") }],
      documents: ["girm", "sacrosanctum-concilium"],
    },
    resources: ["ec-prayer-over-the-offerings", "liturgy-office-order-of-mass"],
    related: ["mass-eucharistic-prayer", "mass-preparation-of-the-gifts", "mass-responses"],
  },
  {
    slug: "mass-preface-dialogue",
    title: "Lift Up Your Hearts",
    question: "Why does the priest say “Lift up your hearts”?",
    alsoKnownAs: ["Preface Dialogue", "Sursum corda"],
    category: "mass",
    keywords: ["lift up your hearts", "we lift them up to the Lord", "it is right and just", "preface dialogue", "Sursum corda", "let us give thanks", "thanksgiving"],
    summary:
      "The Eucharistic Prayer opens with an ancient dialogue. The priest says “The Lord be with you,” “Lift up your hearts,” and “Let us give thanks to the Lord our God,” and the people answer “And with your spirit,” “We lift them up to the Lord,” and “It is right and just.” The priest then prays the Preface, giving thanks to the Father for the work of salvation.",
    explanation: [
      "Why: the Eucharistic Prayer is the center and summit of the Mass, a prayer of thanksgiving and sanctification. In the dialogue, the priest invites the people to lift up their hearts to the Lord in prayer and thanksgiving and unites them with himself in the prayer he addresses to God the Father (GIRM 78). The word “Eucharist” itself means thanksgiving.",
      "The dialogue leads straight into the Preface, the priest's prayer of thanksgiving that changes with the day and season, explained in the next part (GIRM 79; CCC 1352).",
      "In Scripture: “Let us lift up our hearts as well as our hands toward God in heaven!” (Lamentations 3:41).",
      "Everyone stands. The priest extends and raises his hands during the dialogue (GIRM 148).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1352", url: ccc("__P40") }],
      scripture: [{ passage: "Lamentations 3:41", url: bible("lamentations/3") }],
      documents: ["girm"],
    },
    resources: ["ec-the-preface", "liturgy-office-order-of-mass"],
    related: ["mass-sanctus", "mass-eucharistic-prayer", "mass-responses"],
  },
  {
    slug: "mass-preface",
    title: "The Preface",
    question: "What is the Preface at Mass?",
    alsoKnownAs: ["Preface", "Prefaces of the Roman Missal", "It is truly right and just"],
    category: "mass",
    keywords: ["preface", "what is the preface", "it is truly right and just", "thanksgiving", "proper preface", "common preface", "Advent preface", "Easter preface", "preface of the Eucharistic Prayer", "why does the preface change", "with the angels and archangels"],
    summary:
      "The Preface is the priest's great prayer of thanksgiving that opens the Eucharistic Prayer, right after “Lift up your hearts.” In the name of the whole Church, he praises God the Father for the work of salvation, or for the particular mystery of the day or season, and then invites everyone to join the angels and saints in singing the Holy, Holy, Holy. The Missal contains many Prefaces, so its words change through the year.",
    explanation: [
      "What it is: the first element of the Eucharistic Prayer is thanksgiving, “expressed especially in the Preface,” in which the priest, in the name of the entire holy people, glorifies the Father and gives thanks for the whole work of salvation or some aspect of it that fits the day, feast, or season (GIRM 79). The Church gives thanks “for all his works: creation, redemption, and sanctification” (CCC 1352).",
      "Why so many: the many Prefaces of the Roman Missal bring out more fully the reasons for thanksgiving and the different facets of the mystery of salvation (GIRM 364). There are Prefaces for Advent, Christmas, Lent, Easter, Sundays in Ordinary Time, Mary and the saints, Masses for the dead, and more.",
      "Not always a free choice: some Eucharistic Prayers come with their own Preface. Eucharistic Prayer IV has an unchangeable Preface; Eucharistic Prayer II has its own Preface but may also be used with others; Eucharistic Prayer III may be said with any Preface (GIRM 365).",
      "Its shape: many Prefaces begin by echoing the people's last response, saying it is truly right and just to give God thanks, then name a reason for thanksgiving from salvation history, and end by joining the praise of heaven. That final invitation leads straight into the Sanctus.",
      "What the people do: stand and listen. The priest prays the Preface with hands extended (GIRM 148). It is a good moment to notice the theme of the day and make that thanksgiving your own, in the spirit of St. Paul: “In all circumstances give thanks” (1 Thessalonians 5:18).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1352", url: ccc("__P40") }],
      scripture: [
        { passage: "1 Thessalonians 5:16–18", url: bible("1thessalonians/5") },
        { passage: "Revelation 4:8–11", url: bible("revelation/4") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-preface-as-thanksgiving", "usccb-liturgy-of-the-eucharist"],
    related: ["mass-preface-dialogue", "mass-sanctus", "mass-eucharistic-prayer"],
  },
  {
    slug: "mass-sanctus",
    title: "Holy, Holy, Holy (Sanctus)",
    question: "What is the “Holy, Holy, Holy”?",
    alsoKnownAs: ["Sanctus", "Holy, Holy, Holy", "Hosanna"],
    category: "mass",
    keywords: ["Holy Holy Holy", "Sanctus", "Hosanna", "Lord God of hosts", "Benedictus", "blessed is he who comes", "angels", "heavenly liturgy", "kneel after the Holy Holy Holy"],
    summary:
      "At the end of the Preface, the whole congregation joins the angels' hymn of praise: “Holy, Holy, Holy Lord God of hosts.” Its words come from Isaiah's vision of God's throne and the crowds' welcome of Jesus into Jerusalem. It is part of the Eucharistic Prayer itself and is sung or said by everyone with the priest. In the United States, the people kneel after it.",
    explanation: [
      "Meaning: in the Sanctus the congregation, “joining with the heavenly powers,” sings or says this acclamation with the priest; it is part of the Eucharistic Prayer itself (GIRM 79). The Church on earth joins the unending praise of the angels and saints in heaven (CCC 1352).",
      "Scripture: the first part echoes the seraphim in Isaiah's vision, “Holy, holy, holy is the LORD of hosts!” (Isaiah 6:3), and the living creatures around God's throne in Revelation 4:8. The second part, “Blessed is he who comes in the name of the Lord. Hosanna in the highest,” is the crowds' welcome of Jesus into Jerusalem (Matthew 21:9).",
      "Posture: everyone stands to sing it. In the United States, the people kneel after the Holy, Holy, Holy until after the Amen that ends the Eucharistic Prayer, unless prevented by health, lack of space, or another good reason; those who do not kneel make a profound bow when the priest genuflects after the consecration (GIRM 43).",
      "The full text is in the Order of Mass linked below.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1352", url: ccc("__P40") }],
      scripture: [
        { passage: "Isaiah 6:1–3", url: bible("isaiah/6") },
        { passage: "Revelation 4:8", url: bible("revelation/4") },
        { passage: "Matthew 21:9", url: bible("matthew/21") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-sanctus", "ewtn-sanctus", "book-lambs-supper"],
    related: ["mass-preface-dialogue", "mass-eucharistic-prayer", "mass-postures"],
  },
  {
    slug: "mass-eucharistic-prayer",
    title: "The Eucharistic Prayer",
    question: "What is the Eucharistic Prayer?",
    alsoKnownAs: ["Anaphora", "Canon of the Mass", "Roman Canon"],
    category: "mass",
    keywords: ["Eucharistic Prayer", "anaphora", "Roman Canon", "Eucharistic Prayer II", "Eucharistic Prayer III", "different Eucharistic Prayers", "doxology", "heart of the Mass", "why kneel", "bells at Mass", "in persona Christi"],
    summary:
      "The Eucharistic Prayer is the center and summit of the Mass: the great prayer of thanksgiving and consecration that the priest addresses to God the Father, through Christ, in the Holy Spirit. In it, the bread and wine become the Body and Blood of Christ, and the Church offers Christ's sacrifice to the Father. The priest alone says it, by virtue of his ordination; the people pray it with him in faith and silence and join in its acclamations.",
    explanation: [
      "Its parts: the instruction on the Mass names its chief elements: thanksgiving (the Preface); the acclamation (Holy, Holy, Holy); the epiclesis, calling down the Holy Spirit; the institution narrative and consecration; the anamnesis, or memorial; the offering; the intercessions; and the final doxology with the people's Amen (GIRM 79; CCC 1352–1355). Each has its own page in “The Mass, step by step.”",
      "One prayer, several forms: these elements belong to every Eucharistic Prayer, but not always in the same order. In Eucharistic Prayers II, III, and IV the Holy Spirit is invoked on the gifts before the consecration and on the communicants after it, and the intercessions follow the consecration; the Roman Canon places some intercessions and a list of saints before the consecration; and some liturgical traditions put the epiclesis after the anamnesis (CCC 1353). The pages on each part follow the order of Eucharistic Prayers II–IV and note the differences.",
      "A sacrifice: the Eucharistic Prayer makes present the one sacrifice Christ offered “once for all” on the cross (Hebrews 10:10), without repeating it or adding to it; the sacrifice of Christ and the sacrifice of the Eucharist are “one single sacrifice” (CCC 1366–1367). This is explained in “Is the Mass a sacrifice?”",
      "Who prays what: the Eucharistic Prayer by its nature is said only by the priest, in virtue of his ordination. The people associate themselves with him in faith and in silence, and through their parts: the Preface dialogue, the Holy, Holy, Holy, the acclamation after the consecration, and the Great Amen (GIRM 147). The whole assembly joins Christ in offering the sacrifice, and offers itself with him (GIRM 78–79).",
      "Options: the Missal contains several Eucharistic Prayers, including the ancient Roman Canon (Eucharistic Prayer I); the priest chooses one according to the rubrics (GIRM 147).",
      "Posture: in the United States the people kneel from after the Holy, Holy, Holy until after the Great Amen; those who cannot kneel make a profound bow when the priest genuflects after the consecration (GIRM 43). A bell may be rung shortly before the consecration and, by local custom, at the elevations (GIRM 150).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1105–1106", url: ccc("__P2X") },
        { paragraphs: "1352–1355", url: ccc("__P40") },
        { paragraphs: "1362–1372", url: ccc("__P41") },
      ],
      scripture: [
        { passage: "1 Corinthians 11:23–26", url: bible("1corinthians/11") },
        { passage: "Hebrews 10:10–14", url: bible("hebrews/10") },
      ],
      documents: ["girm", "ecclesia-de-eucharistia"],
    },
    resources: ["ec-the-eucharistic-prayer", "clj-roman-canon", "stpaul-re-presentation-of-calvary"],
    related: ["mass-consecration", "mass-as-sacrifice", "real-presence", "mass-in-scripture"],
  },
  {
    slug: "mass-epiclesis",
    title: "The Epiclesis",
    question: "What is the epiclesis?",
    alsoKnownAs: ["Epiclesis", "Calling down the Holy Spirit", "Invocation of the Holy Spirit"],
    category: "mass",
    keywords: ["epiclesis", "calling down the Holy Spirit", "invocation of the Spirit", "hands over the gifts", "priest extends hands over the bread and wine", "bell before the consecration", "Holy Spirit at Mass", "consecratory epiclesis", "communion epiclesis", "send down your Spirit"],
    summary:
      "The epiclesis (from the Greek for “calling upon”) is the part of the Eucharistic Prayer in which the Church asks the Father to send the Holy Spirit on the bread and wine so that they become the Body and Blood of Christ, and on those who will receive them so that they become one body in Christ. The priest says it; the people pray silently, kneeling.",
    explanation: [
      "What it asks: by particular invocations, the Church “implores the power of the Holy Spirit” that the gifts offered by human hands be consecrated, and that the Victim received in Communion be for the salvation of those who receive (GIRM 79). The Catechism calls it the intercession in which the priest begs the Father to send the Spirit, the Sanctifier, so that the offerings become Christ's Body and Blood and the faithful, receiving them, become a living offering to God (CCC 1105).",
      "Why the Holy Spirit: Christ's words and the power of the Holy Spirit together bring about the change (CCC 1353). An ancient explanation the Catechism quotes compares it to the Incarnation: as the Lord took flesh of the Virgin by the Holy Spirit, so by the Spirit the bread becomes his Body (CCC 1106; Luke 1:35).",
      "Not the same in every prayer: in Eucharistic Prayers II, III, and IV, the Holy Spirit is invoked on the gifts just before the institution narrative, and again after the consecration on those who will receive Communion, asking that they be gathered into one. The Roman Canon (Eucharistic Prayer I) asks God to bless and accept the offering so that it may become Christ's Body and Blood, without naming the Spirit at that point; the Catechism notes the epiclesis may ask for the Spirit “or the power of his blessing.” And “some liturgical traditions put the epiclesis after the anamnesis”: in many Eastern liturgies it comes after the words of institution (CCC 1353).",
      "What you may see and hear: in the Roman Missal the priest holds his hands outstretched over the bread and wine and then makes the Sign of the Cross over them. A server may ring a bell “a little before the consecration” (GIRM 150). The people kneel (GIRM 43).",
      "Praying along: this is a good moment to ask the Holy Spirit to transform you, too, as the gifts are transformed, so that you become what you receive.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1105–1106", url: ccc("__P2X") },
        { paragraphs: "1353", url: ccc("__P40") },
      ],
      scripture: [
        { passage: "Luke 1:35", url: bible("luke/1") },
        { passage: "Romans 15:16", url: bible("romans/15") },
        { passage: "1 Corinthians 12:13", url: bible("1corinthians/12") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-epiclesis", "usccb-liturgy-of-the-eucharist"],
    related: ["mass-eucharistic-prayer", "mass-consecration", "who-is-the-holy-spirit"],
  },
  {
    slug: "mass-consecration",
    title: "The Consecration",
    question: "What happens at the consecration?",
    alsoKnownAs: ["Institution narrative", "Words of institution", "Elevation"],
    category: "mass",
    keywords: ["consecration", "this is my body", "this is my blood", "words of institution", "elevation", "transubstantiation", "bread becomes the body of Christ", "bells", "genuflect", "Real Presence", "when does the bread become Jesus"],
    summary:
      "At the heart of the Eucharistic Prayer, the priest repeats the words and actions of Jesus at the Last Supper over the bread and the wine: “This is my Body… This is the chalice of my Blood.” Catholics believe that by the power of Christ's words and the Holy Spirit, the bread and wine become the Body and Blood of Christ. The priest shows the Host and the chalice to the people, and genuflects in adoration.",
    explanation: [
      "What the Church believes: by the consecration, the whole substance of the bread becomes the substance of Christ's Body, and the whole substance of the wine becomes the substance of his Blood; the Church calls this change transubstantiation (CCC 1376, quoting the Council of Trent). The appearances of bread and wine remain, but Christ is truly, really, and substantially present, Body and Blood, soul and divinity (CCC 1374).",
      "Christ himself acts: the priest speaks in the person of Christ, but it is Christ's words and the power of the Holy Spirit that bring about the change (CCC 1353, 1375). Christ's presence begins at the consecration and lasts as long as the appearances of bread and wine remain; he is whole and entire in every part (CCC 1377).",
      "A sacrifice: in these words Christ offered his Body “given up for you” and his Blood “poured out” for the forgiveness of sins. The consecration makes present that same sacrifice, offered once for all on the cross (GIRM 72, 79; CCC 1366–1367).",
      "What the people do: kneel and look at the Host and chalice as each is raised, in silent adoration. Many people pray quietly, as St. Thomas did, “My Lord and my God” (John 20:28); this is a devotion, not a rubric. A bell may be rung, and incense may be used (GIRM 150). The priest genuflects after showing each (GIRM 274).",
      "Many Protestant Christians understand the Lord's Supper differently. The Catholic belief and the questions people raise about it are explained in “What is the Real Presence?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1353", url: ccc("__P40") },
        { paragraphs: "1366–1367, 1373–1377", url: ccc("__P41") },
      ],
      scripture: [
        { passage: "Matthew 26:26–28", url: bible("matthew/26") },
        { passage: "Luke 22:19–20", url: bible("luke/22") },
        { passage: "1 Corinthians 11:23–26", url: bible("1corinthians/11") },
        { passage: "John 6:51–58", url: bible("john/6") },
      ],
      documents: ["girm", "usccb-real-presence", "mysterium-fidei"],
    },
    resources: ["ec-transubstantiation", "video-barron-real-presence", "stpaul-re-presentation-of-calvary"],
    related: ["real-presence", "mass-eucharistic-prayer", "mass-mystery-of-faith", "mass-genuflection"],
  },
  {
    slug: "mass-mystery-of-faith",
    title: "The Mystery of Faith",
    question: "What is the “mystery of faith” acclamation?",
    alsoKnownAs: ["Memorial Acclamation", "Mysterium fidei"],
    category: "mass",
    keywords: ["mystery of faith", "memorial acclamation", "we proclaim your death O Lord", "when we eat this bread", "save us Savior of the world", "Christ has died", "anamnesis"],
    summary:
      "Right after the consecration, the priest says “The mystery of faith,” and the people respond with one of three acclamations proclaiming Christ's death and Resurrection until he comes again. It is the congregation's response of faith to what has just taken place on the altar.",
    explanation: [
      "The three acclamations: one begins “We proclaim your Death, O Lord,” another “When we eat this Bread and drink this Cup,” and the third “Save us, Savior of the world.” All three are in the Order of Mass linked below. The people sing or say one of the approved formulas (GIRM 151).",
      "Meaning: the words echo St. Paul: “as often as you eat this bread and drink the cup, you proclaim the death of the Lord until he comes” (1 Corinthians 11:26). The Eucharist is the memorial of Christ's Passover, making present his sacrifice, and points ahead to his return (CCC 1362–1364).",
      "The older English acclamation “Christ has died, Christ is risen, Christ will come again” is not among the acclamations in the current translation of the Missal.",
      "Posture: the people remain kneeling (GIRM 43).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1362–1364", url: ccc("__P41") }],
      scripture: [{ passage: "1 Corinthians 11:26", url: bible("1corinthians/11") }],
      documents: ["girm"],
    },
    resources: ["ec-anamnesis", "liturgy-office-order-of-mass"],
    related: ["mass-consecration", "mass-great-amen", "mass-responses"],
  },
  {
    slug: "mass-intercessions",
    title: "Remembering, Offering, Interceding",
    question: "What happens in the Eucharistic Prayer after the consecration?",
    alsoKnownAs: ["Anamnesis", "Oblation", "Intercessions", "Commemoration of the saints", "Prayer for the dead at Mass"],
    category: "mass",
    keywords: ["anamnesis", "memorial", "offering", "oblation", "intercessions", "Eucharistic Prayer intercessions", "pope and bishop named at Mass", "prayer for the dead", "remember our brothers and sisters", "saints named at Mass", "Mary and Joseph", "Roman Canon saints", "Mass intention"],
    summary:
      "After the consecration and the Mystery of Faith, the Eucharistic Prayer remembers Christ's Passion, Resurrection, and Ascension; offers him, the spotless Victim, to the Father, together with the Church's own self-offering; and prays for the whole Church, living and dead, in communion with Mary and all the saints. The pope and the local bishop are named. The priest says these prayers; the people pray silently, kneeling.",
    explanation: [
      "Remembering (anamnesis): fulfilling Christ's command, the Church “keeps the memorial of Christ,” recalling especially his Passion, Resurrection, and Ascension (GIRM 79). In the Bible a memorial makes the saving event present, which is why the Mass is the memorial of Christ's sacrifice (CCC 1362–1364).",
      "Offering: in this memorial the Church offers the spotless Victim to the Father in the Holy Spirit. The Church's intention is that the faithful “not only offer this spotless Victim but also learn to offer themselves” (GIRM 79; CCC 1368). This is the moment to place your own life, needs, and intentions on the altar with Christ's offering.",
      "Interceding: the intercessions express that the Eucharist is celebrated in communion with the whole Church of heaven and earth, and that it is offered for all her members, living and dead (GIRM 79). The pope and the diocesan bishop are named as signs of the Church's unity (CCC 1369). The Church offers the sacrifice in communion with Mary and the saints (CCC 1370) and for the faithful departed who are not yet wholly purified (CCC 1371). Praying for the dead is a practice already found in Scripture (2 Maccabees 12:43–46; CCC 1032).",
      "Not the same in every prayer: in Eucharistic Prayers II, III, and IV, these prayers follow the consecration in this order. The Roman Canon (Eucharistic Prayer I) is arranged differently: it prays for the Church, for the living, and in communion with a list of saints before the consecration, and for the dead and with a second list of saints after it. Some prayers allow a special remembrance of a person who has died (GIRM 365).",
      "Posture: the people remain kneeling until after the Great Amen (GIRM 43).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1032", url: ccc("__P2N") },
        { paragraphs: "1354", url: ccc("__P40") },
        { paragraphs: "1362–1364, 1368–1371", url: ccc("__P41") },
      ],
      scripture: [
        { passage: "Luke 22:19", url: bible("luke/22") },
        { passage: "Romans 12:1", url: bible("romans/12") },
        { passage: "Hebrews 12:1", url: bible("hebrews/12") },
        { passage: "2 Maccabees 12:43–46", url: bible("2maccabees/12") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-offering", "ec-intercessions", "clj-roman-canon"],
    related: ["mass-eucharistic-prayer", "mass-great-amen", "mass-as-sacrifice", "mass-universal-prayer"],
  },
  {
    slug: "mass-great-amen",
    title: "The Great Amen",
    question: "What is the Great Amen?",
    alsoKnownAs: ["Final doxology", "Through him, and with him, and in him"],
    category: "mass",
    keywords: ["Great Amen", "doxology", "through him and with him and in him", "end of the Eucharistic Prayer", "Amen", "elevation of the chalice and host"],
    summary:
      "The Eucharistic Prayer ends as the priest raises the consecrated Host and the chalice and sings or says the doxology, “Through him, and with him, and in him…,” giving all glory and honor to the Father. The people answer with the Great Amen, their “yes” to the whole Eucharistic Prayer.",
    explanation: [
      "What the priest does: he lifts the paten with the Host and the chalice and sings or says the doxology alone (GIRM 151). The doxology expresses the glorification of God and is confirmed and concluded by the people's acclamation (GIRM 79).",
      "Why “Great”: it is the people's assent to everything prayed in their name: the thanksgiving, the consecration, the offering, and the intercessions. Many parishes sing it, sometimes repeated, to show its importance.",
      "Scripture: “For from him and through him and for him are all things. To him be glory forever. Amen” (Romans 11:36). St. Paul says Christians utter “the Amen” to God's glory through Christ (2 Corinthians 1:20).",
      "Posture: the people kneel until after the Amen, then stand for the Lord's Prayer (GIRM 43). The doxology belongs to the priest; the people's part is the Amen.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1355", url: ccc("__P40") }],
      scripture: [
        { passage: "Romans 11:36", url: bible("romans/11") },
        { passage: "2 Corinthians 1:20", url: bible("2corinthians/1") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-great-amen"],
    related: ["mass-eucharistic-prayer", "mass-lords-prayer", "mass-responses"],
  },

  // Communion Rite
  {
    slug: "mass-lords-prayer",
    title: "The Lord's Prayer at Mass",
    question: "Why do Catholics pray the Our Father before Communion?",
    alsoKnownAs: ["Our Father", "Pater Noster", "Embolism", "For the kingdom, the power and the glory"],
    category: "mass",
    keywords: ["Our Father", "Lord's Prayer", "daily bread", "deliver us Lord we pray", "for the kingdom the power and the glory", "why no Amen after the Our Father", "doxology", "holding hands Our Father", "orans"],
    summary:
      "The Communion Rite begins with the prayer Jesus taught his disciples. Everyone stands and prays or sings the Our Father together. The priest alone continues with a prayer asking deliverance from evil, and the people conclude: “For the kingdom, the power and the glory are yours now and for ever.” Because the priest's prayer follows, there is no Amen right after “deliver us from evil.”",
    explanation: [
      "Why here: in the Lord's Prayer we ask for daily bread, which for Christians means above all the Eucharistic bread, and for forgiveness of sins, so that what is holy may be given to those who are holy (GIRM 81). The Catechism says the Our Father, placed between the Eucharistic Prayer and Communion, sums up all the Church's petitions and knocks at the door of the banquet of the kingdom (CCC 2770).",
      "How it goes: the priest invites everyone to pray; all pray the Our Father; then the priest alone says the embolism, a prayer expanding on the last petition and asking deliverance from evil for the whole community; the people conclude with the doxology (GIRM 81, 152–153).",
      "The doxology: “For the kingdom, the power and the glory are yours” is an ancient Christian acclamation; the Catechism explains that it takes up the first three petitions of the prayer as adoration and thanksgiving (CCC 2855).",
      "Gestures: the Missal gives no gesture to the people during the Our Father. Holding hands or raising hands are customs not found in the liturgical books, and practice varies from parish to parish. Everyone stands.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2770", url: ccc("__P9Z") },
        { paragraphs: "2855", url: ccc("__PAD") },
      ],
      scripture: [{ passage: "Matthew 6:9–13", url: bible("matthew/6") }],
      documents: ["girm"],
    },
    resources: ["ec-lords-prayer", "liturgy-office-order-of-mass"],
    related: ["mass-sign-of-peace", "mass-great-amen", "mass-gestures"],
  },
  {
    slug: "mass-sign-of-peace",
    title: "The Sign of Peace",
    question: "What is the sign of peace at Mass?",
    alsoKnownAs: ["Rite of Peace", "Kiss of peace", "Peace be with you"],
    category: "mass",
    keywords: ["sign of peace", "peace be with you", "handshake at Mass", "kiss of peace", "rite of peace", "the peace of the Lord be with you always", "do I have to shake hands"],
    summary:
      "Before Communion, the priest prays for the peace and unity of the Church, then says “The peace of the Lord be with you always,” and the people answer “And with your spirit.” Then, when it is invited, people offer a sign of peace to those near them, usually a handshake in the United States, with words such as “Peace be with you.”",
    explanation: [
      "Meaning: in the Rite of Peace the Church asks for peace and unity for herself and the whole human family, and the faithful express their communion and charity toward one another before receiving the Sacrament (GIRM 82). Jesus said, “Peace I leave with you; my peace I give to you” (John 14:27), and taught reconciliation before bringing a gift to the altar (Matthew 5:23–24).",
      "What to do: offer the sign only to those nearest you, in a sober manner (GIRM 82). The form is set by each bishops' conference according to local culture; in the United States people commonly shake hands, and a nod or a bow is also fine. The priest remains in the sanctuary (GIRM 154).",
      "Options: the deacon, or the priest, invites the exchange of peace “if it is appropriate,” so on some occasions it may be omitted (GIRM 154, 181).",
      "Everyone stands.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1396–1398", url: ccc("__P42") }],
      scripture: [
        { passage: "John 14:27", url: bible("john/14") },
        { passage: "Matthew 5:23–24", url: bible("matthew/5") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-rite-of-peace"],
    related: ["mass-lamb-of-god", "mass-lords-prayer", "mass-etiquette"],
  },
  {
    slug: "mass-lamb-of-god",
    title: "Lamb of God (Agnus Dei)",
    question: "Why do Catholics sing “Lamb of God” as the Host is broken?",
    alsoKnownAs: ["Agnus Dei", "Fraction", "Breaking of the bread"],
    category: "mass",
    keywords: ["Lamb of God", "Agnus Dei", "breaking of the bread", "fraction", "grant us peace", "commingling", "why does the priest break the host", "kneel after the Lamb of God"],
    summary:
      "After the sign of peace, the priest breaks the consecrated Host while the congregation sings or says the Lamb of God, asking Christ, “who takes away the sins of the world,” for mercy and peace. The priest places a small piece of the Host into the chalice. In the United States, the people kneel after the Lamb of God.",
    explanation: [
      "The breaking of the bread: Jesus broke bread at the Last Supper, and in apostolic times the whole Eucharist was called “the breaking of the bread.” The gesture shows that the many faithful are made one body by sharing the one Bread of Life (GIRM 83; 1 Corinthians 10:17). It is reserved to the priest and deacon.",
      "The commingling: the priest drops a small piece of the Host into the chalice, signifying the unity of the Body and Blood of the Lord in the work of salvation, the living and glorious Body of Christ (GIRM 83).",
      "The Lamb of God: John the Baptist pointed to Jesus and said, “Behold, the Lamb of God, who takes away the sin of the world” (John 1:29). The chant accompanies the breaking of the bread and may be repeated as long as it takes, always ending with “grant us peace” (GIRM 83).",
      "Posture: everyone stands for the chant. In the United States the people kneel after it, unless the diocesan bishop determines otherwise (GIRM 43).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1329", url: ccc("__P3Y") }],
      scripture: [
        { passage: "John 1:29", url: bible("john/1") },
        { passage: "1 Corinthians 10:16–17", url: bible("1corinthians/10") },
        { passage: "Revelation 5:6–14", url: bible("revelation/5") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-lamb-of-god", "liturgy-office-order-of-mass"],
    related: ["mass-invitation-to-communion", "mass-in-scripture", "mass-postures"],
  },
  {
    slug: "mass-invitation-to-communion",
    title: "Lord, I Am Not Worthy",
    question: "What does “Lord, I am not worthy” mean?",
    alsoKnownAs: ["Invitation to Communion", "Behold the Lamb of God", "Ecce Agnus Dei"],
    category: "mass",
    keywords: ["Lord I am not worthy", "under my roof", "only say the word", "my soul shall be healed", "behold the Lamb of God", "supper of the Lamb", "centurion", "Ecce Agnus Dei"],
    summary:
      "The priest raises the Host and says, “Behold the Lamb of God, behold him who takes away the sins of the world. Blessed are those called to the supper of the Lamb.” Together with the priest, the people answer in the words of a Roman centurion from the Gospel: “Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.”",
    explanation: [
      "Before this, the priest prays quietly to receive Christ fruitfully, and the faithful do the same in silence (GIRM 84).",
      "The invitation joins John the Baptist's words (John 1:29) with the angel's words in Revelation: “Blessed are those who have been called to the wedding feast of the Lamb” (Revelation 19:9). Communion is a foretaste of the marriage supper of heaven.",
      "The response: the centurion asked Jesus to heal his servant without coming to his house: “I am not worthy to have you enter under my roof; only say the word” (Matthew 8:8). Jesus marveled at his faith. Catholics borrow his words to express both humility and trust as Christ comes to them in Communion; the priest says them with the people (GIRM 84).",
      "Posture: in the United States the people are kneeling. Some people strike their breast at these words; it is a personal custom, not called for by the Missal.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1386", url: ccc("__P42") }],
      scripture: [
        { passage: "Matthew 8:5–13", url: bible("matthew/8") },
        { passage: "John 1:29", url: bible("john/1") },
        { passage: "Revelation 19:9", url: bible("revelation/19") },
      ],
      documents: ["girm"],
    },
    resources: ["ascension-lord-i-am-not-worthy", "ec-showing-the-host"],
    related: ["mass-communion", "mass-lamb-of-god", "how-to-receive-communion"],
  },
  {
    slug: "mass-communion",
    title: "Holy Communion",
    question: "What happens at Communion during Mass?",
    alsoKnownAs: ["Communion procession", "Communion song", "Spiritual Communion"],
    category: "mass",
    keywords: ["Communion", "Holy Communion", "Communion line", "Communion procession", "Communion hymn", "Precious Blood", "extraordinary ministers", "spiritual communion", "not receiving Communion"],
    summary:
      "Catholics who are prepared come forward in procession to receive the Body of Christ, and where it is offered, the Precious Blood, while a Communion song is sung. Those not receiving stay in the pew and pray. Afterward there is a time of silent prayer or a song of praise, and the priest says the Prayer after Communion, to which the people answer “Amen.”",
    explanation: [
      "Meaning: the principal fruit of Communion is intimate union with Christ: “Whoever eats my flesh and drinks my blood remains in me and I in him” (John 6:56; CCC 1391). Communion also separates us from sin, strengthens charity, unites us more closely to the Church, commits us to the poor, and is a pledge of eternal life (CCC 1393–1397, 1402).",
      "The procession: the priest receives first; the Communion song begins, expressing the communicants' unity and joy (GIRM 86). People normally receive standing in the United States and bow their heads before the Sacrament; the minister says “The Body of Christ,” and the communicant answers “Amen” (GIRM 160–161). How to receive, the Eucharistic fast, and who may receive are explained in “How do I receive Communion?”",
      "Other ministers: when there are many communicants, the priest may be assisted by other priests, deacons, or extraordinary ministers of Holy Communion (GIRM 162).",
      "If you are not receiving: stay in the pew and pray. The Church recommends a “spiritual communion,” a heartfelt desire to be united with Christ, for those who cannot receive (Ecclesia de Eucharistia 34).",
      "Afterward comes a time of silent prayer or a song of praise, explained in the next part, and then the Prayer after Communion (GIRM 88–89).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1382–1401", url: ccc("__P42") },
        { paragraphs: "1402–1405", url: ccc("__P43") },
      ],
      scripture: [
        { passage: "John 6:51–58", url: bible("john/6") },
        { passage: "1 Corinthians 10:16–17", url: bible("1corinthians/10") },
        { passage: "1 Corinthians 11:27–29", url: bible("1corinthians/11") },
      ],
      documents: ["girm", "ecclesia-de-eucharistia", "redemptionis-sacramentum"],
    },
    resources: ["ec-holy-communion", "video-dominicast-communion"],
    related: ["how-to-receive-communion", "who-can-receive-communion", "real-presence", "what-is-the-eucharist"],
  },
  {
    slug: "mass-thanksgiving-after-communion",
    title: "Silence After Communion",
    question: "What should I do after receiving Communion?",
    alsoKnownAs: ["Thanksgiving after Communion", "Silence after Communion", "Hymn of thanksgiving", "Purification of the vessels"],
    category: "mass",
    keywords: ["after communion", "what to pray after communion", "silence after communion", "kneel or sit after communion", "thanksgiving", "post-communion hymn", "song of praise", "purification", "priest cleaning the chalice", "ablutions", "back to the pew"],
    summary:
      "When Communion is over, the priest and people pray in silence for a while, and a psalm, hymn, or song of praise may also be sung. It is a time to thank Christ, who has just come to you in Communion, and to speak with him in your own words. You may kneel or sit. Meanwhile the priest or deacon may purify the sacred vessels at the altar or side table.",
    explanation: [
      "What the Church asks: when the distribution of Communion is finished, the priest and faithful pray quietly for some time; if desired, the whole congregation may also sing a psalm, canticle of praise, or hymn (GIRM 88, 164). After Communion, the instruction on the Mass says, all “praise and pray to God in their hearts” (GIRM 45).",
      "Posture: as circumstances allow, people may sit or kneel during this silence (GIRM 43). Either is fine; follow what you find most prayerful or what is customary in your parish.",
      "How to pray: there is no set prayer. Thank Christ for the gift of himself, bring him your needs and the people you love, and ask for strength for the week ahead. Many Catholics also use traditional prayers after Communion. The Psalmist asked, “How can I repay the LORD for all the great good done for me?” and answered, “I will raise the cup of salvation and call on the name of the LORD” (Psalm 116:12–13).",
      "Why it matters: Communion's first fruit is intimate union with Christ, who said, “Whoever eats my flesh and drinks my blood remains in me and I in him” (John 6:56; CCC 1391). It strengthens charity and commits us to the poor (CCC 1394, 1397).",
      "At the altar: the priest consumes any remaining Precious Blood, places remaining Hosts in the tabernacle, and purifies the vessels, or does this after Mass (GIRM 163, 279). The care taken with every fragment shows the Church's faith that Christ is present in even the smallest part (CCC 1377).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1377", url: ccc("__P41") },
        { paragraphs: "1391–1397", url: ccc("__P42") },
      ],
      scripture: [
        { passage: "Psalm 116:12–14", url: bible("psalms/116") },
        { passage: "John 6:56–57", url: bible("john/6") },
      ],
      documents: ["girm"],
    },
    resources: ["ec-private-silent-prayer", "ec-purification-of-vessels"],
    related: ["mass-communion", "mass-postures", "mass-prayer-after-communion"],
  },
  {
    slug: "mass-prayer-after-communion",
    title: "The Prayer After Communion",
    question: "What is the Prayer after Communion?",
    alsoKnownAs: ["Prayer after Communion", "Postcommunion"],
    category: "mass",
    keywords: ["prayer after communion", "postcommunion", "let us pray", "stand after communion", "end of the communion rite", "fruits of the Mass", "Amen"],
    summary:
      "After the time of silence, the priest says “Let us pray,” everyone stands, and he prays the Prayer after Communion, asking God that the mystery just celebrated may bear fruit in those who received it. The people make the prayer their own by answering “Amen.” It closes the Communion Rite.",
    explanation: [
      "What it is: to complete the prayer of the People of God and conclude the whole Communion Rite, the priest says the Prayer after Communion, in which he prays for the fruits of the mystery just celebrated (GIRM 89). Only one is said at each Mass, and it changes with the day.",
      "How it goes: standing at the chair or at the altar, the priest says “Let us pray” with hands joined, may allow a brief silence if there has not been one already, and then prays with hands extended. The people answer “Amen” (GIRM 165).",
      "What it asks: these prayers often ask that what was received at the altar be lived out in daily life, and that Communion now be a pledge of eternal life with God. The Catechism calls the Eucharist “an anticipation of the heavenly glory” (CCC 1402). Jesus promised eternal life, and resurrection on the last day, to those who eat his flesh and drink his blood (John 6:54).",
      "Posture: everyone stands from the invitation “Let us pray” to the end of Mass (GIRM 43). Brief announcements may follow, before the final blessing (GIRM 166).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1402–1405", url: ccc("__P43") }],
      scripture: [{ passage: "John 6:54", url: bible("john/6") }],
      documents: ["girm"],
    },
    resources: ["ec-prayer-after-communion", "liturgy-office-order-of-mass"],
    related: ["mass-thanksgiving-after-communion", "mass-final-blessing", "mass-collect"],
  },

  // Concluding Rites
  {
    slug: "mass-final-blessing",
    title: "The Final Blessing",
    question: "What happens at the end of Mass?",
    alsoKnownAs: ["Concluding Rites", "Blessing", "Announcements", "Solemn blessing"],
    category: "mass",
    keywords: ["final blessing", "end of Mass", "announcements", "May almighty God bless you", "solemn blessing", "prayer over the people", "concluding rites", "bishop's blessing"],
    summary:
      "After the Prayer after Communion, there may be brief announcements. Then the priest greets the people once more (“The Lord be with you.” “And with your spirit.”) and blesses them in the name of the Father, the Son, and the Holy Spirit. Everyone makes the Sign of the Cross and answers “Amen.” On some days the blessing is longer and more solemn.",
    explanation: [
      "The Concluding Rites: brief announcements if needed; the priest's greeting and blessing; the dismissal; and the kissing of the altar by the priest and deacon (GIRM 90).",
      "The blessing: the priest raises his hand and blesses the people with the Sign of the Cross, and all answer “Amen” (GIRM 167). On certain days and occasions the blessing is expanded into a prayer over the people or a more solemn formula. A bishop blesses with the Sign of the Cross three times (GIRM 167).",
      "Meaning: blessings praise God for his gifts and call down his grace (CCC 1671). The Mass begins and ends with the Sign of the Cross. The priestly blessing of Israel asked, “The LORD bless you and keep you!” (Numbers 6:24), and the risen Jesus “raised his hands, and blessed” his disciples before his Ascension (Luke 24:50).",
      "Everyone stands.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1671", url: ccc("__P58") }],
      scripture: [
        { passage: "Numbers 6:22–27", url: bible("numbers/6") },
        { passage: "Luke 24:50–53", url: bible("luke/24") },
      ],
      documents: ["girm"],
    },
    resources: ["usccb-concluding-rites", "ec-concluding-rites"],
    related: ["mass-dismissal", "mass-sign-of-the-cross", "mass-communion"],
  },
  {
    slug: "mass-dismissal",
    title: "The Dismissal",
    question: "Why does Mass end with “Go forth”?",
    alsoKnownAs: ["Ite, missa est", "Go in peace", "Go forth, the Mass is ended"],
    category: "mass",
    keywords: ["dismissal", "Go forth the Mass is ended", "Go in peace", "Thanks be to God", "Ite missa est", "why is it called Mass", "sent on mission"],
    summary:
      "The deacon or priest sends the people out with words such as “Go forth, the Mass is ended” or “Go and announce the Gospel of the Lord,” and everyone answers “Thanks be to God.” The very name “Mass” comes from this sending: Catholics go out to live what they have celebrated. The priest then kisses the altar, and the ministers leave, usually during a closing song.",
    explanation: [
      "The words: the Missal offers four dismissals: “Go forth, the Mass is ended”; “Go and announce the Gospel of the Lord”; “Go in peace, glorifying the Lord by your life”; and “Go in peace.” The people answer “Thanks be to God.”",
      "Why “Mass”: the Catechism explains that the liturgy takes its name, Missa, from the sending forth (missio) of the faithful to fulfill God's will in their daily lives (CCC 1332). Pope Benedict XVI noted that in Christian usage “dismissal” has come to imply a “mission” (Sacramentum Caritatis 51). The dismissal sends each person out to do good works, praising and blessing God (GIRM 90).",
      "Then the priest kisses the altar and the ministers leave in procession; what happens next, and how to leave, is explained in the next part (GIRM 90).",
      "Like the apostles sent by the risen Jesus to make disciples of all nations (Matthew 28:19–20), the faithful leave Mass to carry Christ into the world.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1332", url: ccc("__P3Y") }],
      scripture: [
        { passage: "Matthew 28:19–20", url: bible("matthew/28") },
        { passage: "Luke 24:50–53", url: bible("luke/24") },
      ],
      documents: ["girm", "sacramentum-caritatis"],
    },
    resources: ["ec-dismissal", "usccb-concluding-rites", "liturgy-office-order-of-mass"],
    related: ["what-happens-at-mass", "mass-final-blessing", "why-go-to-mass-on-sunday"],
  },
  {
    slug: "mass-recessional",
    title: "The Recessional",
    question: "What happens after the dismissal?",
    alsoKnownAs: ["Recessional", "Closing hymn", "Leaving Mass", "Thanksgiving after Mass"],
    category: "mass",
    keywords: ["recessional", "closing hymn", "closing song", "end of Mass", "leaving Mass", "when can I leave Mass", "leaving Mass early", "after Mass", "prayer after Mass", "genuflect on the way out", "kiss the altar at the end"],
    summary:
      "After the dismissal, the priest and deacon kiss the altar, bow to it with the other ministers, and leave in procession, usually during a closing song. Many people stay in place until the procession has passed, genuflect toward the tabernacle as they leave the pew, and some remain for a few minutes of personal thanksgiving.",
    explanation: [
      "What the Missal prescribes: the Mass ends where it began, at the altar. The priest and deacon venerate the altar with a kiss, and the priest, the deacon, and the other ministers make a profound bow before departing (GIRM 90, 169, 186). If the tabernacle is in the sanctuary, they genuflect as they leave the altar (GIRM 274).",
      "The closing song: singing as the ministers leave is a widespread custom; the Missal itself does not prescribe a recessional chant, as it does for the entrance and for Communion. Instrumental music is also common.",
      "Leaving: remaining until the priest has left is a courtesy and custom, not a rule. As you leave your pew, genuflect toward the tabernacle, since all who pass before the Blessed Sacrament genuflect unless they are in procession (GIRM 274). If you cannot genuflect, a bow is fine.",
      "Personal thanksgiving: many saints recommended staying a few minutes after Mass to thank God. The Church's law asks priests to give thanks after celebrating Mass (canon 909), and the Catechism calls a visit to the Blessed Sacrament “a proof of gratitude, an expression of love, and a duty of adoration” (CCC 1418). Conversation is best continued outside the church, out of respect for those still praying.",
      "Going out: after the Ascension the disciples “returned to Jerusalem with great joy, and they were continually in the temple praising God” (Luke 24:52–53). The Mass sends Catholics out to live what they have celebrated.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1332", url: ccc("__P3Y") },
        { paragraphs: "1418", url: ccc("__P44") },
      ],
      scripture: [
        { passage: "Luke 24:50–53", url: bible("luke/24") },
        { passage: "Psalm 84:2–5", url: bible("psalms/84") },
      ],
      documents: ["girm", "canon-law-eucharist"],
    },
    resources: ["ec-recessional", "ec-personal-thanksgiving", "usccb-concluding-rites"],
    related: ["mass-dismissal", "mass-genuflection", "mass-reverence-to-the-altar", "mass-etiquette"],
  },
];
