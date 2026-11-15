// Before Mass: the six narrated moments that open Experience Mass (curriculum B1–B6).
//
// `paragraphs` are the approved English narration, word for word, from docs/before-mass-narration.md
// (§3, with the (pause) marks removed). `npm test` checks that they still match that document.
// Each moment is recorded as ONE audio file: public/audio/en-US-marin/<id>-narration.mp3, made by
// scripts/generate-narration.mjs. The same script writes content/narration-timings.json: the time
// each sentence starts, so the player can show captions one sentence at a time.
//
// `cues` attach on-screen changes to the sentence that contains `at` (the first such sentence):
// a different scene, a short label, or a posture chip. They stay until the next cue of that kind.
//
// English only for now: Spanish narration has not been written or recorded. In Spanish and
// bilingual modes the player plays this English narration with English captions and says so.
//
// Only imports types, so the generation script and tests can read this file with Node directly.

import type { SceneId } from "./mass";

export type PlaceholderScene =
  | "church-exterior"
  | "church-entrance"
  | "holy-water-font"
  | "tabernacle-chapel"
  | "aisle-reverence"
  | "pew-view"
  | "sanctuary-preparing";

export type Cue = { at: string; scene?: SceneId | PlaceholderScene; label?: string; posture?: string };

export type BeforeMassMoment = {
  id: "why-sunday" | "arriving" | "holy-water" | "genuflection" | "quiet-prayer" | "whos-who";
  title: string;
  scene: SceneId | PlaceholderScene; // the scene when the moment starts
  paragraphs: string[];
  cues: Cue[];
  learnMore: string[]; // optional deeper explanation, shown on request
  references: string;
};

// Illustrations not made yet. The player shows a labeled placeholder for each one, so nobody mistakes
// it for the finished image. Full specifications: docs/before-mass-narration.md §3 and
// docs/illustrations.md §9.
export const PLACEHOLDER_SCENES: Record<PlaceholderScene, { title: string; description: string }> = {
  "church-exterior": {
    title: "The parish church on Sunday morning",
    description: "People of all ages walk toward the open doors.",
  },
  "church-entrance": {
    title: "Just inside the doors",
    description: "A greeter, worship aids, and a door for Confession along the side wall.",
  },
  "holy-water-font": {
    title: "The holy water font",
    description: "A basin of blessed water just inside the doors.",
  },
  "tabernacle-chapel": {
    title: "The tabernacle in the side chapel",
    description: "A gold tabernacle, with the sanctuary lamp burning beside it.",
  },
  "aisle-reverence": {
    title: "In the aisle",
    description: "One person genuflects toward the Blessed Sacrament; another bows to the altar.",
  },
  "pew-view": {
    title: "From the pew, before Mass",
    description: "The altar, the ambo, and the crucifix, with a kneeler in the foreground.",
  },
  "sanctuary-preparing": {
    title: "Getting ready for Mass",
    description: "A server lights the candles; a lector and the cantor prepare.",
  },
};

// Finished illustrations (public/images/mass/before-mass/). A scene listed here shows its image; a
// scene not listed shows its labeled placeholder above. The images are 16:9 and the stage is 3:2, so
// about 8% is trimmed from each side; `focus` (a CSS object-position) keeps the subject in view.
// B6 (sanctuary-preparing) and the B4 aisle scene have no clean image yet: b6-ministers-DRAFT.png has
// text baked into it and must not be used.
export const BEFORE_MASS_IMAGES: Partial<Record<PlaceholderScene, { src: string; alt: string; focus?: string }>> = {
  "church-exterior": {
    src: "/images/mass/before-mass/b1-church-exterior.png",
    alt: "Families and older parishioners walk up the path to the open doors of a stone parish church on a sunny morning, beneath a stained-glass window of Christ.",
  },
  "church-entrance": {
    src: "/images/mass/before-mass/b2-arriving.png",
    alt: "Just inside the church doors, a smiling usher welcomes a young couple; beyond the archway, people walk up the aisle toward the altar.",
    focus: "45% 50%",
  },
  "holy-water-font": {
    src: "/images/mass/before-mass/b3-holy-water.png",
    alt: "A man makes the Sign of the Cross beside a stone holy water font near the church entrance, with a small plaque explaining holy water on the wall.",
    focus: "55% 50%",
  },
  "tabernacle-chapel": {
    src: "/images/mass/before-mass/b4-tabernacle.png",
    alt: "In a quiet side chapel, a man kneels on one knee before a gold tabernacle on a marble altar, with a red sanctuary lamp hanging nearby.",
  },
  "pew-view": {
    src: "/images/mass/before-mass/b5-entering-pew.png",
    alt: "From the back of the church, a man pauses at the end of a pew and looks toward the altar, the crucifix, the ambo, and the chairs, while others sit quietly before Mass.",
    focus: "40% 50%",
  },
};

export const BEFORE_MASS: BeforeMassMoment[] = [
  {
    id: "why-sunday",
    title: "Why Catholics gather on Sunday",
    scene: "church-exterior",
    paragraphs: [
      "Welcome. Let's go to Mass together.",
      "Why do Catholics come to Mass? Above all, to worship God. We adore him as the God who made us. And we thank him: for life, for his love, and most of all for sending his Son, Jesus Christ, to save us.",
      "We also come to ask for his mercy, and to bring him our needs and the needs of the world.",
      'At the heart of the Mass is the Eucharist, a word that means "thanksgiving." Catholics believe that in the Eucharist, Jesus\' sacrifice on the cross, the sacrifice that won our forgiveness, is made present among us. Not a new sacrifice, but his one sacrifice, offered once for all. And the bread and wine become his Body and Blood, which Catholics who are prepared receive in Holy Communion.',
      "Catholics gather especially on Sunday, the day Jesus rose from the dead, and the Church asks every Catholic to be at Mass each Sunday.",
      "Whether you're visiting, preparing to become Catholic, or coming back after a long time, you don't need to know anything yet. We'll go through it together.",
      "Let's begin at the door.",
    ],
    cues: [
      { at: "We adore him", label: "Adore · Thank" },
      { at: "We also come to ask", label: "Ask mercy · Pray" },
      { at: "At the heart of the Mass", label: "Eucharist · “thanksgiving”" },
      { at: "Catholics gather especially on Sunday", label: "Sunday · the Resurrection" },
    ],
    learnMore: [
      "The four ends of the Mass. Catholic tradition speaks of the Mass as offered in adoration, in thanksgiving, in atonement for sin, and in petition for the needs of the living and the dead. These are the purposes for which Christ offered himself on the cross. The Mass is not only praise and thanksgiving; it is truly a sacrifice that obtains mercy.",
      "“Eucharist” comes from the Greek word for thanksgiving. The Eucharist makes present the one sacrifice of the cross; it does not repeat it. It is at the same time the memorial of that sacrifice and the sacred banquet of Holy Communion.",
      "Catholics who are properly prepared receive Communion: in a state of grace, and having fasted for one hour beforehand. This is explained fully at the Communion moment.",
      "Christians have gathered on the first day of the week since the time of the Apostles. Catholics are obliged to take part in Mass on Sundays and holy days of obligation, unless a serious reason, such as illness or caring for an infant, prevents them. A Mass on Saturday evening also fulfills the Sunday obligation.",
    ],
    references:
      "Acts 20:7; Revelation 1:10; Hebrews 10:10; CCC 1328, 1345, 1359–1361, 1366–1367, 1382, 1385, 2180–2181; CIC 916, 919, 1247–1248; Council of Trent, Session XXII.",
  },
  {
    id: "arriving",
    title: "Arriving and preparing",
    scene: "church-entrance",
    paragraphs: [
      "Try to arrive a few minutes early. You don't need special clothing to attend; neat, modest clothes are a simple sign of respect.",
      "As you go in, silence your phone. Many people come early to pray.",
      "Some people may be waiting near a small room at the side. That's for Confession, where Catholics confess their sins to a priest and receive God's forgiveness.",
      "Families with young children come too, and it's fine to step out if a little one needs a break. If you need help with seating, hearing, or getting around, ask an usher at the door.",
      "Just inside the doors, look for a small basin of water.",
    ],
    cues: [
      { at: "As you go in", label: "Phone on silent" },
      { at: "Some people may be waiting", label: "Confession" },
      { at: "Families with young children", label: "Families welcome" },
      { at: "If you need help", label: "Ushers can help" },
    ],
    learnMore: [
      "There is no universal dress code. Our bearing, including gestures and clothing, should express respect and joy; customs vary by parish and culture.",
      "Confession, also called the Sacrament of Penance or Reconciliation: a Catholic confesses their sins to a priest, expresses sorrow, and receives absolution, God's forgiveness through the Church. A Catholic aware of serious sin goes to Confession before receiving Communion. What is said in Confession is strictly confidential.",
      "Catholics who will receive Communion fast from food and drink, except water and medicine, for one hour beforehand. The elderly, the sick, and those caring for them are exempt.",
      "Many parishes offer accessible seating, hearing assistance, large-print worship aids, and a separate room for families with small children. Ushers or the parish office can help.",
    ],
    references: "GIRM 45; CCC 1387, 1422–1424, 1457, 1467; CIC 916, 919.",
  },
  {
    id: "holy-water",
    title: "Holy water and the Sign of the Cross",
    scene: "holy-water-font",
    paragraphs: [
      "This is a holy water font. Catholics dip their fingers in the blessed water and make the Sign of the Cross.",
      "Here's how. With your right hand, touch your forehead, then the middle of your chest, then your left shoulder, then your right. As they do, Catholics pray: In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
      "The water recalls Baptism, which washes away sin and makes a person a child of God and a member of his Church. For Catholics, it's a reminder that they belong to Christ.",
      "The cross recalls how Jesus saved us, and the words name the one God: Father, Son, and Holy Spirit.",
      "If you're visiting, you're free to bless yourself or simply walk on. Either is respectful.",
      "Now step into the church. Before choosing a seat, there's something to look for.",
    ],
    cues: [
      { at: "This is a holy water font", label: "Holy water font" },
      { at: "Here's how", label: "The Sign of the Cross" },
      { at: "With your right hand", label: "Forehead · chest · left shoulder · right shoulder" },
      { at: "Amen.", label: "Amen = “Yes, it is so”" },
      { at: "The water recalls Baptism", label: "Baptism" },
      { at: "If you're visiting", label: "Optional for visitors" },
    ],
    learnMore: [
      "By Baptism a person is freed from sin, reborn as a child of God, and made a member of Christ and his Church. St. Paul says we were buried with Christ through Baptism so that we might live a new life.",
      "Holy water is a sacramental: a sacred sign, blessed by the Church, that disposes us to receive grace. It is not a charm. The font at the door recalls the promises of Baptism.",
      "Catholics of the Latin Church touch the left shoulder before the right; Eastern Christians touch the right first. The words echo Jesus' command to baptize in the name of the Father, the Son, and the Holy Spirit.",
    ],
    references: "Matthew 28:19; Romans 6:3–4; CCC 1185, 1213, 1263–1270, 1667–1679, 2157, 2166.",
  },
  {
    id: "genuflection",
    title: "Genuflecting toward the tabernacle",
    scene: "tabernacle-chapel",
    paragraphs: [
      "In most Catholic churches you'll find a tabernacle: a small, beautiful cabinet, often gold, near the altar or, as here, in a side chapel. The candle beside it, often in red glass, is the sanctuary lamp.",
      "The tabernacle holds the Blessed Sacrament: the Eucharist, kept after Mass for the sick and for prayer.",
      'Catholics believe the Eucharist is not merely a symbol. Jesus himself is truly present: his Body and Blood, soul and divinity, under the appearance of bread. They believe it because of his own words at the Last Supper: "This is my body."',
      "So when Catholics come before the Blessed Sacrament, they genuflect: they bend the right knee to the floor for a moment, in adoration. Someone who can't kneel makes a deep bow instead.",
      "The altar is honored too, with a bow rather than a genuflection. Where the tabernacle is off to the side, as here, many people bow to the altar before taking their seat. Customs vary; follow what you see.",
      "Visitors aren't expected to genuflect, since it expresses faith that Jesus is present. Entering quietly is respectful, and you may bow your head if you wish.",
      "Now, let's find a seat.",
    ],
    cues: [
      { at: "In most Catholic churches", label: "Tabernacle" },
      { at: "The candle beside it", label: "Sanctuary lamp" },
      { at: "The tabernacle holds", label: "Blessed Sacrament" },
      { at: "So when Catholics come before", label: "Genuflection", posture: "Genuflect: to the Blessed Sacrament" },
      { at: "The altar is honored too", scene: "aisle-reverence", label: "Bow to the altar", posture: "Bow: to the altar" },
      { at: "Visitors aren't expected", label: "Not expected of visitors" },
    ],
    learnMore: [
      "“Tabernacle” means “tent,” recalling the tent where God dwelt among his people in the desert.",
      "In the Eucharist, the Body and Blood of Christ, together with his soul and divinity, are truly, really, and substantially present. The Church calls this change transubstantiation. The key Scriptures are the accounts of the Last Supper and Jesus' teaching in John 6.",
      "The Eucharist is reserved first for bringing Communion to the sick and dying, and also for prayer and adoration. Parish churches must reserve it. A lamp fueled by oil or wax burns near the tabernacle to honor Christ's presence; red glass is traditional, not required.",
      "A genuflection, made on the right knee, signifies adoration and is reserved for the Blessed Sacrament (and the Cross on Good Friday). A deep bow is the reverence given to the altar. What people do on entering a pew when the tabernacle is in a side chapel varies by place; this guidance is awaiting liturgical review.",
    ],
    references:
      "Exodus 25:8–9; John 1:14; John 6:51–58; Luke 22:19; Philippians 2:10; CCC 1374, 1376, 1378–1379; GIRM 274–275, 314–316; CIC 934.",
  },
  {
    id: "quiet-prayer",
    title: "Finding a seat and praying quietly",
    scene: "pew-view",
    paragraphs: [
      "Sit wherever you like, unless a pew is reserved, and look toward the front. The raised area is the sanctuary.",
      "At its center is the altar. It is both the table of the Lord, recalling the Last Supper, and the altar of sacrifice, where Christ's offering on the cross is made present. Nearby are the ambo, where the Scriptures are read, and a crucifix, a cross bearing the figure of Jesus. Arrangements differ from church to church.",
      "Many people kneel and pray quietly before Mass, using the padded kneeler at their feet. It's a time to thank God and bring him what's on your heart. If praying is new to you, simply sit and take it in.",
      "During Mass, the congregation stands, sits, and kneels at different parts of the celebration. Standing shows attention and readiness to pray, sitting is for listening, and kneeling expresses adoration. Stand and sit with everyone if you can. You may stay seated instead of kneeling, and you never need to make a gesture you're not comfortable with.",
      "As you wait, look around at the people getting ready.",
    ],
    cues: [
      { at: "The raised area", label: "Sanctuary" },
      { at: "At its center is the altar", label: "Altar" },
      { at: "Nearby are the ambo", label: "Ambo · Crucifix" },
      { at: "Many people kneel", label: "Kneeler", posture: "Kneel or sit" },
      { at: "During Mass, the congregation", label: "Stand · Sit · Kneel", posture: "Stand · Sit · Kneel" },
      { at: "Standing shows", label: "Stand: attention · Sit: listening · Kneel: adoration" },
      { at: "You may stay seated", label: "Sitting is always fine" },
    ],
    learnMore: [
      "The altar is both the altar of the sacrifice and the table of the Lord, and in Catholic understanding it is also a sign of Christ himself. That is why the priest kisses it and bows to it.",
      "The ambo is the “table of God's word.” The priest's chair signifies his role of presiding and leading prayer. The crucifix keeps Christ's sacrifice before everyone's eyes.",
      "A common posture is a sign of unity: it expresses and fosters the attitude of the heart. Anyone who cannot kneel or stand may sit.",
      "The book or sheet in the pew usually has the songs and the people's responses, and often the readings. A seat a few rows from the back makes it easy to follow others.",
    ],
    references: "GIRM 42–43, 45, 296–310; CCC 1182–1184, 1383.",
  },
  {
    id: "whos-who",
    title: "Who's who, and what the colors mean",
    scene: "sanctuary-preparing",
    paragraphs: [
      "The priest leads the Mass. He has received the sacrament of Holy Orders, and Catholics believe that at Mass, Christ himself, the head of his Church, acts through him. That's why only a priest can preside at the Eucharist.",
      "A deacon, also ordained, may assist, read the Gospel, and preach. Servers help at the altar, lectors read Scripture, a cantor leads the singing, and others welcome people or help give Communion. Not every Mass has all of them.",
      "The priest's vestment, called a chasuble, changes color with the Church's seasons. Green is for Ordinary Time, violet for Advent and Lent, white or gold for Christmas and Easter, and red for the Holy Spirit and the martyrs. The Mass we're about to join is in Ordinary Time, so he wears green.",
      "Soon the music will begin, and everyone will stand. That's the sign that Mass is starting.",
      "Let's stand, and begin.",
    ],
    cues: [
      { at: "The priest leads the Mass", label: "Priest" },
      { at: "A deacon, also ordained", label: "Deacon (ordained)" },
      { at: "Servers help at the altar", label: "Servers · Lectors · Cantor" },
      { at: "The priest's vestment", label: "Chasuble" },
      { at: "Green is for Ordinary Time", label: "Green · Violet · White or gold · Red" },
      { at: "The Mass we're about to join", label: "Ordinary Time: green" },
      { at: "Soon the music will begin", label: "Mass is about to begin", posture: "Stand" },
    ],
    learnMore: [
      "In the ordained priest, it is Christ himself who acts: the priest acts “in the person of Christ the Head.” Only a validly ordained priest can preside at the Eucharist and consecrate the bread and wine.",
      "Deacons are ordained for service; married men may be ordained permanent deacons. Together with bishops and priests, deacons are the ordinary ministers of Holy Communion.",
      "Extraordinary ministers of Holy Communion are lay people, not ordained, who help distribute Communion when needed. Servers, lectors, cantors, and ushers are lay ministries too. Each serves the whole assembly; none takes the place of the priest.",
      "Rose may be worn on the third Sunday of Advent and the fourth Sunday of Lent. At Masses for the dead, violet, black, or white may be used.",
    ],
    references: "CCC 1411, 1536, 1548, 1569–1571, 1579; GIRM 94, 99–105, 162, 345–347; CIC 910, 230.",
  },
];

// The narration of a moment split into the sentences shown as captions. The generation script,
// the player, and the tests all use this one function, so the timings line up with the captions.
export function sentencesOf(moment: BeforeMassMoment): string[] {
  return splitSentences(moment.paragraphs);
}

// Also used for the narrated beats of the Introductory Rites (content/experience.ts).
export function splitSentences(paragraphs: string[]): string[] {
  return paragraphs.flatMap((paragraph) => paragraph.split(/(?<=[.?!]["”]?)\s+(?=["“]?[A-Z])/));
}

// The audio file for a moment, relative to public/audio/.
export const narrationFile = (moment: BeforeMassMoment) => `en-US-marin/${moment.id}-narration.mp3`;
