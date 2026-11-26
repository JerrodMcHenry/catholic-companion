// Live the Faith › The Church Year: seasons, Holy Week, and holy days.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const churchYear: Topic[] = [
  {
    slug: "liturgical-year",
    title: "The Liturgical Year",
    question: "What is the liturgical year?",
    alsoKnownAs: ["Church calendar", "Church year"],
    category: "church-year",
    keywords: ["liturgical year", "Church calendar", "Church year", "liturgical seasons", "Advent", "Christmas season", "Lent", "Easter season", "Ordinary Time", "Easter Triduum", "feast days", "solemnities"],
    summary:
      "The liturgical year is the Church's calendar, in which she celebrates the whole mystery of Christ, from his coming to his Resurrection and return, over the course of a year. Its seasons are Advent, Christmas, Lent, the Easter Triduum, Easter, and Ordinary Time. Easter is its high point, and every Sunday is a weekly celebration of the Resurrection.",
    explanation: [
      "Christ through the year: the Church “celebrate[s] the saving work of her divine Spouse in a sacred commemoration on certain days throughout the course of the year,” keeping the Resurrection each Sunday and once a year at Easter (CCC 1163, quoting Vatican II). Throughout the year she “unfolds the whole mystery of Christ” (CCC 1194).",
      "Easter at the center: “the Easter triduum of the passion and resurrection of Christ is the culmination of the entire liturgical year” (Universal Norms on the Liturgical Year 18). Easter is “the ‘Feast of feasts’” (CCC 1169).",
      "The seasons: Advent prepares for Christmas; the Christmas season celebrates Christ's birth and early manifestations; Lent prepares for Easter; the Easter Triduum runs from Holy Thursday evening to Easter Sunday evening; the fifty days of Easter are kept “as one feast day” until Pentecost; and Ordinary Time is “devoted to the mystery of Christ in all its aspects” (Universal Norms 19, 22, 27, 32, 39, 43).",
      "Sunday: the Church celebrates the Paschal mystery “every seventh day,” on the Lord's Day (CCC 1166).",
      "Mary and the saints: through the year the Church honors Mary “with a special love” and keeps the memorials of the saints (CCC 1172–1173).",
      "Universal and local: the General Roman Calendar is used throughout the Roman Rite, while particular calendars add celebrations for a country, diocese, or religious family (Universal Norms 48).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1163–1173", url: ccc("__P39") },
        { paragraphs: "1194", url: ccc("__P3B") },
      ],
      scripture: [
        { passage: "Psalm 118:24", url: bible("psalms/118") },
        { passage: "Hebrews 13:8", url: bible("hebrews/13") },
        { passage: "Luke 4:16–21", url: bible("luke/4") },
      ],
      documents: ["universal-norms-liturgical-year", "sacrosanctum-concilium"],
    },
    resources: ["usccb-liturgical-year"],
    related: ["advent", "lent", "holy-week", "holy-days-of-obligation"],
  },
  {
    slug: "advent",
    title: "Advent",
    question: "What is Advent?",
    alsoKnownAs: ["Season of Advent"],
    category: "church-year",
    keywords: ["Advent", "what is Advent", "Advent wreath", "four Sundays before Christmas", "Gaudete Sunday", "O Antiphons", "second coming", "preparing for Christmas", "purple", "posadas"],
    summary:
      "Advent is the season of about four weeks that begins the Church's year and prepares for Christmas. It looks in two directions: back to Christ's first coming at Bethlehem and forward to his return at the end of time. The Church calls it a time of “devout and joyful expectation,” with an element of penance, and many families keep customs such as the Advent wreath.",
    explanation: [
      "Two comings: “Advent has a twofold character: as a season to prepare for Christmas when Christ's first coming to us is remembered; as a season when that remembrance directs the mind and heart to await Christ's Second Coming at the end of time. Advent is thus a period for devout and joyful expectation” (Universal Norms on the Liturgical Year 39).",
      "When: Advent begins with the Sunday falling on or closest to November 30 and ends before Christmas; the days from December 17 to 24 prepare more directly for the Lord's birth (Universal Norms 40–41).",
      "Israel's hope renewed: “by sharing in the long preparation for the Saviour's first coming, the faithful renew their ardent desire for his second coming” (CCC 524). The Advent readings call us to be alert and ready (Luke 21:34–36).",
      "In church: the priest wears violet, and rose may be worn on the Third Sunday (Gaudete Sunday). The U.S. bishops note that Advent “includes an element of penance” in preparing our hearts for the joy of Christmas, and the “O” Antiphons are sung from December 17 to 24.",
      "Customs, not requirements: the Advent wreath, whose four candles mark the Sundays until Christmas, is a widespread home custom “especially in the Germanic countries and in North America” (Directory on Popular Piety 98). Other places keep customs such as the posadas (Directory 99). The Immaculate Conception (December 8) falls during Advent and is a holy day of obligation in the United States.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "524", url: ccc("__P1L") },
        { paragraphs: "1095", url: ccc("__P2X") },
      ],
      scripture: [
        { passage: "Isaiah 40:1–5", url: bible("isaiah/40") },
        { passage: "Mark 13:33–37", url: bible("mark/13") },
        { passage: "Luke 21:34–36", url: bible("luke/21") },
        { passage: "Romans 13:11–12", url: bible("romans/13") },
      ],
      documents: ["universal-norms-liturgical-year", "directory-popular-piety"],
    },
    resources: ["usccb-advent"],
    related: ["liturgical-year", "incarnation", "immaculate-conception", "holy-days-of-obligation"],
  },
  {
    slug: "lent",
    title: "Lent",
    question: "What is Lent?",
    alsoKnownAs: ["Lenten season", "Forty days"],
    category: "church-year",
    keywords: ["Lent", "what is Lent", "forty days", "prayer fasting almsgiving", "giving something up for Lent", "Lenten practices", "penance", "conversion", "catechumens", "Stations of the Cross"],
    summary:
      "Lent is the forty-day season of prayer, fasting, and almsgiving that prepares for Easter. It begins on Ash Wednesday and ends before the evening Mass of the Lord's Supper on Holy Thursday. Lent recalls Jesus' forty days in the desert and calls every Christian to conversion of heart, while the catechumens make their final preparation for Baptism.",
    explanation: [
      "A season of preparation: “Lent is a 40 day season of prayer, fasting, and almsgiving that begins on Ash Wednesday and ends at sundown on Holy Thursday” (USCCB). Liturgically, it runs “from Ash Wednesday until the Mass of the Lord's Supper exclusive” (Universal Norms on the Liturgical Year 28).",
      "With Jesus in the desert: “By the solemn forty days of Lent the Church unites herself each year to the mystery of Jesus in the desert” (CCC 540; Matthew 4:1–11).",
      "For catechumens and the baptized: Lent prepares “catechumens, through the several stages of Christian initiation; the faithful, through reminders of their own baptism and through penitential practices” (Universal Norms 27). See “What are the stages of OCIA?”",
      "Prayer, fasting, almsgiving: Scripture and the Fathers stress these three forms of penance, “which express conversion in relation to oneself, to God, and to others” (CCC 1434; Matthew 6:1–18). But Jesus' call “does not aim first at outward works … but at the conversion of the heart” (CCC 1430).",
      "What is required: Ash Wednesday and Good Friday are days of fasting and abstinence, and the Fridays of Lent are days of abstinence; see “What are the rules for fasting and abstinence?” Giving something up, the Stations of the Cross, and other Lenten devotions are voluntary practices, not universal requirements.",
      "In church: the Alleluia is not sung from the beginning of Lent until the Easter Vigil (Universal Norms 28).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "540", url: ccc("__P1L") },
        { paragraphs: "1430", url: ccc("__P4A") },
        { paragraphs: "1434–1438", url: ccc("__P4B") },
      ],
      scripture: [
        { passage: "Matthew 4:1–11", url: bible("matthew/4") },
        { passage: "Matthew 6:1–6, 16–18", url: bible("matthew/6") },
        { passage: "Joel 2:12–13", url: bible("joel/2") },
      ],
      documents: ["universal-norms-liturgical-year"],
    },
    resources: ["usccb-lent", "usccb-fast-abstinence"],
    related: ["ash-wednesday", "fasting-and-abstinence", "holy-week", "how-to-go-to-confession"],
  },
  {
    slug: "ash-wednesday",
    title: "Ash Wednesday",
    question: "Why do Catholics receive ashes?",
    alsoKnownAs: ["Ashes", "Day of Ashes"],
    category: "church-year",
    keywords: ["Ash Wednesday", "ashes", "why ashes on forehead", "remember that you are dust", "repent and believe in the Gospel", "beginning of Lent", "is Ash Wednesday a holy day of obligation", "palms burned", "fasting Ash Wednesday"],
    summary:
      "Ash Wednesday is the first day of Lent. Catholics receive ashes on their foreheads as a sign of repentance and a reminder that we are mortal and need God's mercy. The minister says, “Remember that you are dust, and to dust you shall return,” or “Repent and believe in the Gospel.” It is a day of fasting and abstinence, but not a holy day of obligation.",
    explanation: [
      "The beginning of Lent: on Ash Wednesday, “a universal day of fast,” ashes are distributed (Universal Norms on the Liturgical Year 29).",
      "What the ashes mean: they come from an ancient rite of public penance and symbolize “fragility and mortality, and the need to be redeemed by the mercy of God” (Directory on Popular Piety 125). In the Old Testament, wearing ashes was a sign of repentance and humility before God (USCCB).",
      "The words: the minister says one of two phrases: “Remember that you are dust, and to dust you shall return” (compare Genesis 3:19) or “Repent and believe in the Gospel” (compare Mark 1:15). The ashes are usually made by burning the palms of the previous year's Palm Sunday (USCCB).",
      "Inside, not only outside: the day's Gospel warns against performing religious practices to be seen (Matthew 6:1–6, 16–18); the ashes point to “that attitude of internal penance to which all the baptized are called during Lent” (Directory on Popular Piety 125).",
      "What is required: Ash Wednesday is not a holy day of obligation, but it is a day of fasting and abstinence for Catholics of the Latin Church within the age limits (canon 1251); see “What are the rules for fasting and abstinence?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1430–1431", url: ccc("__P4A") },
        { paragraphs: "1438", url: ccc("__P4B") },
      ],
      scripture: [
        { passage: "Genesis 3:19", url: bible("genesis/3") },
        { passage: "Joel 2:12–18", url: bible("joel/2") },
        { passage: "Matthew 6:1–6, 16–18", url: bible("matthew/6") },
        { passage: "Mark 1:15", url: bible("mark/1") },
      ],
      documents: ["directory-popular-piety", "universal-norms-liturgical-year"],
    },
    resources: ["usccb-why-ashes", "usccb-fast-abstinence"],
    related: ["lent", "fasting-and-abstinence", "holy-days-of-obligation", "how-to-go-to-confession"],
  },
  {
    slug: "holy-week",
    title: "Holy Week",
    question: "What is Holy Week?",
    alsoKnownAs: ["Paschal Triduum", "Easter Triduum"],
    category: "church-year",
    keywords: ["Holy Week", "Palm Sunday", "Holy Thursday", "Maundy Thursday", "Good Friday", "Holy Saturday", "Easter Triduum", "Paschal Triduum", "Chrism Mass", "Mass of the Lord's Supper", "Stations of the Cross"],
    summary:
      "Holy Week is the week before Easter, when the Church remembers Jesus' entry into Jerusalem, his Last Supper, his suffering and death, and his rest in the tomb. It begins on Palm Sunday. Its last three days, the Easter Triduum, run from the evening Mass of the Lord's Supper on Holy Thursday to Easter Sunday evening and are the high point of the whole Church year.",
    explanation: [
      "Palm Sunday: Holy Week begins on Passion (Palm) Sunday, which “joins the foretelling of Christ's regal triumph and the proclamation of the passion” (Paschale Solemnitatis 28; Mark 11:1–10).",
      "The Chrism Mass: on Holy Thursday morning (or another day near it), the bishop with his priests blesses the holy oils and consecrates the chrism used in the sacraments (Universal Norms on the Liturgical Year 31).",
      "The Triduum: “The Easter triduum begins with the evening Mass of the Lord's Supper, reaches its high point in the Easter Vigil, and closes with Evening Prayer on Easter Sunday” (Universal Norms 19).",
      "Holy Thursday: the evening Mass recalls “the institution of the Eucharist, the institution of the priesthood, and Christ's command of brotherly love” (Paschale Solemnitatis 45; John 13:1–15).",
      "Good Friday: the Church does not celebrate Mass; the Celebration of the Lord's Passion consists of the Liturgy of the Word, the adoration of the cross, and Holy Communion (Paschale Solemnitatis 59, 64). It is a day of fasting and abstinence (Paschale Solemnitatis 60), and the fast is recommended on Holy Saturday as well (Paschale Solemnitatis 39).",
      "Devotions: processions, the Stations of the Cross, and other customs vary by place; the Church asks that they be harmonized with the liturgy, which comes first (Directory on Popular Piety 138). Holy Thursday and Good Friday are not holy days of obligation.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1168–1169", url: ccc("__P39") },
      ],
      scripture: [
        { passage: "Mark 11:1–10", url: bible("mark/11") },
        { passage: "John 13:1–15", url: bible("john/13") },
        { passage: "John 18:1–19:42", url: bible("john/18") },
        { passage: "1 Corinthians 11:23–26", url: bible("1corinthians/11") },
      ],
      documents: ["paschale-solemnitatis", "universal-norms-liturgical-year"],
    },
    resources: [],
    related: ["easter-vigil", "why-did-jesus-die", "resurrection", "what-is-the-eucharist"],
  },
  {
    slug: "easter-vigil",
    title: "The Easter Vigil",
    question: "What happens at the Easter Vigil?",
    alsoKnownAs: ["Paschal Vigil", "Holy Saturday night"],
    category: "church-year",
    keywords: ["Easter Vigil", "Holy Saturday", "Exsultet", "Easter candle", "paschal candle", "service of light", "baptisms at Easter", "OCIA Easter Vigil", "renewal of baptismal promises", "mother of all vigils"],
    summary:
      "The Easter Vigil is the Church's great celebration of the Resurrection, held after nightfall on Holy Saturday. It has four parts: the Service of Light with the Easter candle and the Easter Proclamation, a long Liturgy of the Word, the baptismal liturgy, in which adults are often baptized, confirmed, and receive their First Communion, and the Liturgy of the Eucharist. The Church calls it “the mother of all vigils.”",
    explanation: [
      "At night: the Vigil ranks as “the mother of all vigils” (Universal Norms on the Liturgical Year 21). “The entire celebration of the Easter Vigil takes place at night. It should not begin before nightfall; it should end before daybreak on Sunday” (Paschale Solemnitatis 78).",
      "Four parts: the Service of Light and the Easter Proclamation (the Exsultet); the Liturgy of the Word, recalling “the wonderful works which the Lord God wrought for his people”; the baptismal liturgy; and the Liturgy of the Eucharist (Paschale Solemnitatis 81).",
      "The readings: the Vigil provides seven Old Testament readings and two from the New Testament; where pastoral conditions require, the number may be reduced, but the reading from Exodus 14 is always kept (Paschale Solemnitatis 85).",
      "Baptism: in the Vigil the Church “celebrates the sacraments of Christian initiation” (Paschale Solemnitatis 77). Adults receive Baptism, Confirmation, and the Eucharist in one celebration (CCC 1233), and the whole assembly renews its baptismal promises holding lighted candles (Paschale Solemnitatis 89).",
      "Practical note: the Vigil is usually longer than a Sunday Mass. As a Mass of Easter, it satisfies the obligation to attend Mass on Easter Sunday (canon 1248 §1).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1168–1169", url: ccc("__P39") },
        { paragraphs: "1233, 1243–1244", url: ccc("__P3J") },
      ],
      scripture: [
        { passage: "Genesis 1:1–2:2", url: bible("genesis/1") },
        { passage: "Exodus 14:15–15:1", url: bible("exodus/14") },
        { passage: "Romans 6:3–11", url: bible("romans/6") },
        { passage: "Matthew 28:1–10", url: bible("matthew/28") },
      ],
      documents: ["paschale-solemnitatis", "universal-norms-liturgical-year"],
    },
    resources: ["usccb-ocia"],
    related: ["holy-week", "how-to-become-catholic", "after-becoming-catholic", "resurrection"],
  },
  {
    slug: "holy-days-of-obligation",
    title: "Holy Days of Obligation",
    question: "What are holy days of obligation?",
    alsoKnownAs: ["Days of obligation", "Holy days"],
    category: "church-year",
    keywords: ["holy days of obligation", "holy day", "do I have to go to Mass", "Mary Mother of God January 1", "Ascension", "Assumption", "All Saints", "Immaculate Conception", "Christmas", "Saturday or Monday rule", "vigil Mass"],
    summary:
      "Holy days of obligation are feast days, besides Sundays, on which Catholics are required to attend Mass. The universal law of the Church lists ten, but each bishops' conference may adjust the list. In the United States, Latin Catholics observe Mary, Mother of God (January 1), the Ascension, the Assumption (August 15), All Saints (November 1), the Immaculate Conception (December 8), and Christmas (December 25).",
    explanation: [
      "What the obligation means: “On Sundays and other holy days of obligation, the faithful are obliged to participate in the Mass,” and to avoid work that hinders worship and rest (canon 1247). This is one of the precepts of the Church (CCC 2042–2043).",
      "The universal list: besides Sunday, canon law lists Christmas, the Epiphany, the Ascension, the Body and Blood of Christ, Mary Mother of God, the Immaculate Conception, the Assumption, St. Joseph, Sts. Peter and Paul, and All Saints. With the Holy See's approval, a bishops' conference may suppress some or move them to a Sunday (canon 1246).",
      "In the United States: the bishops' 1991 decree sets the six days named above for the Latin Church. “Whenever January 1 … or August 15 … or November 1 … falls on a Saturday or on a Monday, the precept to attend Mass is abrogated.” Ecclesiastical provinces may transfer the Ascension from Thursday to the following Sunday, so practice varies by region (USCCB, complementary norm to canon 1246). The decree applies to the Latin Church; other countries have different lists.",
      "Vigil Masses: Mass celebrated “either on the feast day itself or in the evening of the preceding day” satisfies the obligation (canon 1248 §1).",
      "When you cannot go: the obligation does not bind those “excused for a serious reason (for example, illness, the care of infants) or dispensed by their own pastor” (CCC 2181). On why the Church treats Mass on these days so seriously, see “Why do Catholics go to Mass every Sunday?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2042–2043", url: ccc("__P75") },
        { paragraphs: "2177–2181", url: ccc("__P7O") },
      ],
      scripture: [
        { passage: "Exodus 20:8–11", url: bible("exodus/20") },
        { passage: "Hebrews 10:24–25", url: bible("hebrews/10") },
      ],
      documents: ["canon-law-sunday", "usccb-holy-days"],
    },
    resources: [],
    related: ["why-go-to-mass-on-sunday", "liturgical-year", "immaculate-conception", "mother-of-god"],
  },
];
