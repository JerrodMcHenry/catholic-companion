// Live the Faith › Prayer: what prayer is, how to begin, and the common prayers.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const prayerTopics: Topic[] = [
  {
    slug: "what-is-prayer",
    title: "Prayer",
    question: "What is prayer?",
    alsoKnownAs: ["Christian prayer", "Talking to God"],
    category: "prayer",
    keywords: ["prayer", "what is prayer", "why pray", "talking to God", "kinds of prayer", "forms of prayer", "vocal prayer", "meditation", "contemplation", "adoration", "petition", "thanksgiving"],
    summary:
      "Prayer is turning our minds and hearts to God: speaking with him, listening to him, and asking him for what we need. Catholics believe God takes the first step, so prayer is above all a relationship with the Father, through Jesus Christ, in the Holy Spirit. It can be spoken or silent, with others or alone, in set words or our own.",
    explanation: [
      "A classic definition: “Prayer is the raising of one's mind and heart to God or the requesting of good things from God” (St. John Damascene, quoted in CCC 2559).",
      "A relationship: “prayer is the living relationship of the children of God with their Father who is good beyond measure, with his Son Jesus Christ and with the Holy Spirit” (CCC 2565). God seeks us first; in the Catechism's words, “prayer is the encounter of God's thirst with ours” (CCC 2560).",
      "Forms of prayer: the Church names five basic forms: blessing (or adoration), petition, intercession for others, thanksgiving, and praise (CCC 2644).",
      "Expressions of prayer: the tradition knows three: vocal prayer, meditation, and contemplative prayer, which all share “the recollection of the heart” (CCC 2721). St. Teresa of Ávila called contemplative prayer “a close sharing between friends” (CCC 2709).",
      "Prayer with the Church: the Church invites the faithful to regular rhythms of prayer: daily prayers, the Liturgy of the Hours, the Sunday Eucharist, and the feasts of the liturgical year (CCC 2698, 2720). The Mass is the Church's greatest prayer, and personal prayer prepares for it and flows from it.",
      "To begin, see “How do I start praying?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2559–2565", url: ccc("__P8Z") },
        { paragraphs: "2644", url: ccc("__P9B") },
        { paragraphs: "2698", url: ccc("__P9J") },
        { paragraphs: "2709", url: ccc("__P9M") },
        { paragraphs: "2720–2721", url: ccc("__P9N") },
      ],
      scripture: [
        { passage: "Luke 11:1–13", url: bible("luke/11") },
        { passage: "Matthew 6:5–8", url: bible("matthew/6") },
        { passage: "1 Thessalonians 5:16–18", url: bible("1thessalonians/5") },
        { passage: "Romans 8:26–27", url: bible("romans/8") },
      ],
      documents: ["compendium-ccc"],
    },
    resources: [],
    related: ["how-to-pray", "our-father", "basic-catholic-prayers", "praying-directly-to-god"],
  },
  {
    slug: "how-to-pray",
    title: "How to Start Praying",
    question: "How do I pray?",
    alsoKnownAs: ["How to pray"],
    category: "prayer",
    keywords: ["how to pray", "start praying", "beginner prayer", "daily prayer", "morning prayer", "prayer routine", "distractions in prayer", "dryness in prayer", "lectio divina", "praying with Scripture", "how do I pray", "how to start praying", "learn to pray", "spiritual dryness", "prayer feels empty", "prayer feels dry", "God feels distant", "dark night"],
    summary:
      "Start simply and regularly. Set aside a few minutes at a fixed time, put yourself in God's presence, speak to him honestly, and listen, especially through Scripture. Use the Church's prayers when your own words run out. Distractions and dry spells are normal; the Catechism calls prayer both a gift and a “battle.” No single method is required of every Catholic.",
    explanation: [
      "A regular time: the Church's tradition proposes daily rhythms such as morning and evening prayer and grace before and after meals (CCC 2698). Jesus said, “when you pray, go to your inner room, close the door, and pray to your Father in secret” (Matthew 6:6).",
      "A simple pattern (practical advice, not a rule): quiet yourself and remember that God is present; thank him; tell him honestly what is on your mind; read a short passage of Scripture slowly and ask what it says to you; end with the Our Father. Praying with Scripture this way is called lectio divina (CCC 2708).",
      "Borrowed words: when your own words run out, the Psalms and the Church's common prayers can carry you; see “What prayers do Catholics know by heart?”",
      "Distractions: “To set about hunting down distractions would be to fall into their trap, when all that is necessary is to turn back to our heart” (CCC 2729). Dryness, when prayer feels empty, is also part of the journey (CCC 2731).",
      "No technique guarantees results: prayer “is both a gift of grace and a determined response on our part” (CCC 2725). “There are as many paths of prayer as there are persons who pray,” and the same Spirit acts in all (CCC 2672).",
      "Prayer and health: prayer is not a substitute for medical or mental health care. If you are struggling with persistent sadness, anxiety, or scrupulosity, speak with a doctor or counselor as well as a priest.",
      "When prayer feels dry: sometimes prayer brings no feeling at all. The Catechism calls this dryness and describes it as “the moment of sheer faith clinging faithfully to Jesus in his agony and in his tomb” (CCC 2731). Saints such as St. John of the Cross wrote about long seasons of dryness and did not treat them as failure. Keep a simple, regular time of prayer; faithfulness matters more than feelings. Dryness sometimes has a cause that calls for conversion (CCC 2731), and sometimes it is simply part of growing. A priest or spiritual director can help you tell the difference.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2672", url: ccc("__P9F") },
        { paragraphs: "2698", url: ccc("__P9J") },
        { paragraphs: "2708", url: ccc("__P9L") },
        { paragraphs: "2725", url: ccc("__P9O") },
        { paragraphs: "2729–2731", url: ccc("__P9Q") },
      ],
      scripture: [
        { passage: "Matthew 6:6", url: bible("matthew/6") },
        { passage: "Psalm 46:11", url: bible("psalms/46") },
        { passage: "Luke 18:1", url: bible("luke/18") },
      ],
      documents: ["compendium-ccc"],
    },
    resources: ["usccb-daily-readings"],
    related: ["what-is-prayer", "basic-catholic-prayers", "how-to-read-the-bible", "the-rosary"],
  },
  {
    slug: "basic-catholic-prayers",
    title: "Basic Catholic Prayers",
    question: "What prayers do Catholics know by heart?",
    alsoKnownAs: ["Common prayers", "Traditional prayers"],
    category: "prayer",
    keywords: ["Catholic prayers", "common prayers", "basic prayers", "prayers to memorize", "Glory Be", "Apostles' Creed", "Act of Contrition", "Angelus", "Memorare", "grace before meals", "Hail Holy Queen"],
    summary:
      "Most Catholics know a handful of prayers by heart: the Sign of the Cross, the Our Father, the Hail Mary, and the Glory Be, and often the Apostles' Creed, an Act of Contrition, and grace before meals. They are a shared language of faith, used at Mass, in the Rosary, and in daily life. The Vatican's Compendium of the Catechism gives their official English and Latin texts.",
    explanation: [
      "The core prayers: the Sign of the Cross, the Our Father (taught by Jesus himself), the Hail Mary, and the Glory Be: “Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now, and ever shall be world without end. Amen.” Each of the first three has its own page.",
      "Others widely known: the Apostles' Creed (a summary of the faith; see “What is the Creed?”), an Act of Contrition (said in Confession; several approved versions exist), grace before meals, the Angel of God, the Angelus, the Hail, Holy Queen, the Memorare, and Come, Holy Spirit.",
      "Official texts: Appendix A of the Compendium of the Catechism of the Catholic Church gives the common prayers in English and Latin. Wording can vary slightly between countries and translations.",
      "Why learn them by heart: set prayers unite Catholics across places and generations, and they are ready when our own words fail. The Catechism notes that Jesus himself taught a vocal prayer, the Our Father (CCC 2701).",
      "Words and heart: “Whether or not our prayer is heard depends not on the number of words, but on the fervor of our souls” (St. John Chrysostom, quoted in CCC 2700). See also “How do I start praying?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2700–2701", url: ccc("__P9K") },
        { paragraphs: "2759", url: ccc("__P9V") },
        { paragraphs: "2676–2678", url: ccc("__P9F") },
      ],
      scripture: [
        { passage: "Luke 11:1–4", url: bible("luke/11") },
        { passage: "Luke 1:26–45", url: bible("luke/1") },
        { passage: "Colossians 3:16–17", url: bible("colossians/3") },
      ],
      documents: ["compendium-ccc"],
    },
    resources: [],
    related: ["our-father", "hail-mary", "sign-of-the-cross", "how-to-pray"],
  },
  {
    slug: "our-father",
    title: "The Our Father",
    question: "What does the Our Father mean?",
    alsoKnownAs: ["Lord's Prayer"],
    category: "prayer",
    keywords: ["Our Father", "Lord's Prayer", "Pater Noster", "meaning of the Our Father", "seven petitions", "hallowed be thy name", "daily bread", "forgive us our trespasses", "lead us not into temptation", "for the kingdom the power and the glory"],
    summary:
      "The Our Father is the prayer Jesus taught his disciples when they asked him how to pray. It calls God “Father” and makes seven requests: three for God's glory (his name, his kingdom, his will) and four for our needs (daily bread, forgiveness, help in temptation, and deliverance from evil). The Church calls it “the summary of the whole gospel.”",
    explanation: [
      "From Jesus: when a disciple asked, “Lord, teach us to pray,” Jesus gave this prayer (Luke 11:1–4); St. Matthew gives a longer form in the Sermon on the Mount (Matthew 6:9–13; CCC 2759).",
      "The traditional text: “Our Father who art in heaven, hallowed be thy name. Thy kingdom come. Thy will be done on earth, as it is in heaven. Give us this day our daily bread, and forgive us our trespasses, as we forgive those who trespass against us, and lead us not into temptation, but deliver us from evil.” (Compendium of the Catechism, Appendix A).",
      "A summary of the Gospel: Tertullian called it “truly the summary of the whole gospel” (CCC 2761).",
      "“Our” Father: the word “does not express possession, but an entirely new relationship with God” (CCC 2786): through Jesus, we may call God Father together.",
      "Seven petitions: “the first three, more theological, draw us toward the glory of the Father; the last four … commend our wretchedness to his grace” (CCC 2803). The final “Amen” means “So be it” (CCC 2865).",
      "Not a formula: “Jesus does not give us a formula to repeat mechanically” (CCC 2766); the Spirit teaches us to make his words our own. The ending “For the kingdom, the power and the glory” is an ancient liturgical doxology (CCC 2760); at Mass it follows the priest's prayer (see “Why do Catholics pray the Our Father before Communion?”).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2759–2760", url: ccc("__P9V") },
        { paragraphs: "2761", url: ccc("__P9W") },
        { paragraphs: "2766", url: ccc("__P9Y") },
        { paragraphs: "2786", url: ccc("__PA3") },
        { paragraphs: "2803", url: ccc("__PA6") },
        { paragraphs: "2864–2865", url: ccc("__PAE") },
      ],
      scripture: [
        { passage: "Matthew 6:9–13", url: bible("matthew/6") },
        { passage: "Luke 11:1–4", url: bible("luke/11") },
      ],
      documents: ["compendium-ccc"],
    },
    resources: ["ec-lords-prayer"],
    related: ["mass-lords-prayer", "what-is-prayer", "basic-catholic-prayers", "hail-mary"],
  },
  {
    slug: "hail-mary",
    title: "The Hail Mary",
    question: "What does the Hail Mary mean?",
    alsoKnownAs: ["Ave Maria", "Angelic Salutation"],
    category: "prayer",
    keywords: ["Hail Mary", "Ave Maria", "meaning of the Hail Mary", "full of grace", "blessed is the fruit of thy womb", "Holy Mary Mother of God", "pray for us sinners", "is the Hail Mary biblical", "Marian prayer"],
    summary:
      "The Hail Mary joins two greetings from the Gospel of Luke, the angel Gabriel's and Elizabeth's, to a request that Mary pray for us “now and at the hour of our death.” Catholics do not worship Mary; they honor her as the Mother of God and ask her prayers, as one might ask any fellow Christian to pray. The prayer centers on Jesus, “the fruit of thy womb.”",
    explanation: [
      "The traditional text: “Hail, Mary, full of grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.” (Compendium of the Catechism, Appendix A).",
      "From Scripture: the first part repeats the angel's greeting (“Hail, favored one! The Lord is with you,” Luke 1:28) and Elizabeth's (“Most blessed are you among women, and blessed is the fruit of your womb,” Luke 1:42). Modern Bible translations word these verses differently from the traditional prayer. According to the U.S. bishops, St. Pius V officially added the second part.",
      "Mother of God: “Because she gives us Jesus, her son, Mary is Mother of God and our mother; we can entrust all our cares and petitions to her” (CCC 2677).",
      "Pray for us sinners: “By asking Mary to pray for us, we acknowledge ourselves to be poor sinners” (CCC 2677). Asking her prayers is like asking any Christian to pray for us; see “Why do Catholics pray to saints?”",
      "Centered on Christ: St. John Paul II wrote that the Hail Mary's “Marian character is not opposed to its Christological character, but that it actually emphasizes and increases it” (Rosarium Virginis Mariae 33).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "971", url: ccc("__P2C") },
        { paragraphs: "2676–2677", url: ccc("__P9F") },
      ],
      scripture: [
        { passage: "Luke 1:26–38", url: bible("luke/1") },
        { passage: "Luke 1:39–45", url: bible("luke/1") },
      ],
      documents: ["rosarium-virginis-mariae", "compendium-ccc"],
    },
    resources: ["usccb-rosary"],
    related: ["the-rosary", "why-honor-mary", "praying-to-saints", "mother-of-god"],
  },
  {
    slug: "sign-of-the-cross",
    title: "The Sign of the Cross",
    question: "Why do Catholics make the Sign of the Cross?",
    alsoKnownAs: ["Signing oneself", "Signum Crucis"],
    category: "prayer",
    keywords: ["Sign of the Cross", "why do Catholics cross themselves", "crossing yourself", "In the name of the Father", "Tertullian", "sacramental", "blessing", "early Christians sign of the cross"],
    summary:
      "The Sign of the Cross is a short prayer in word and gesture: tracing a cross on ourselves while saying “In the name of the Father and of the Son and of the Holy Spirit. Amen.” It professes faith in the Trinity and in Christ's saving cross, and it recalls our Baptism. Christians have marked themselves with the cross since at least the second century.",
    explanation: [
      "A prayer of the whole day: “The Christian begins his day, his prayers, and his activities with the Sign of the Cross,” dedicating the day to God's glory (CCC 2157).",
      "An ancient practice: around the year 200, Tertullian wrote that Christians, at every step and in all the ordinary actions of daily life, “trace upon the forehead the sign” (De Corona 3).",
      "Baptism: at the start of Baptism, the sign of the cross “marks with the imprint of Christ the one who is going to belong to him” (CCC 1235). Christians are baptized “in the name of the Father, and of the Son, and of the holy Spirit” (Matthew 28:19).",
      "A sacramental: the Church's blessings and other sacramentals often include “the sign of the cross, or the sprinkling of holy water (which recalls Baptism)” (CCC 1668). Many Catholics sign themselves with holy water on entering a church.",
      "Not a charm: the sign expresses faith and asks God's grace; it is not a magical gesture. How to make it, and its place at Mass, are explained in “Why does Mass begin with the Sign of the Cross?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1235", url: ccc("__P3J") },
        { paragraphs: "1668", url: ccc("__P58") },
        { paragraphs: "2157", url: ccc("__P7K") },
      ],
      scripture: [
        { passage: "Matthew 28:19", url: bible("matthew/28") },
        { passage: "Galatians 6:14", url: bible("galatians/6") },
        { passage: "1 Corinthians 1:18", url: bible("1corinthians/1") },
      ],
      documents: [],
    },
    resources: ["tertullian-de-corona"],
    related: ["mass-sign-of-the-cross", "what-is-the-trinity", "mass-holy-water", "basic-catholic-prayers"],
  },
  {
    slug: "the-rosary",
    title: "The Rosary",
    question: "How do I pray the Rosary?",
    alsoKnownAs: ["Mysteries of the Rosary", "Holy Rosary"],
    category: "prayer",
    keywords: ["Rosary", "how to pray the Rosary", "mysteries of the Rosary", "joyful mysteries", "sorrowful mysteries", "glorious mysteries", "luminous mysteries", "rosary beads", "decade", "Fatima prayer", "repetitive prayer", "vain repetition", "Matthew 6:7"],
    summary:
      "The Rosary is a Scripture-based prayer in which Catholics meditate on events in the life of Jesus and Mary, called mysteries, while praying the Our Father, ten Hail Marys, and the Glory Be for each of five “decades,” usually counted on beads. It is a contemplative prayer, recommended by the Church but not required, and it can be prayed alone or with others.",
    explanation: [
      "How to pray it (as the U.S. bishops describe it): make the Sign of the Cross; holding the crucifix, say the Apostles' Creed; then one Our Father, three Hail Marys, and the Glory Be. For each of five decades, announce a mystery (perhaps with a short Scripture reading), say the Our Father, ten Hail Marys while meditating on the mystery, and the Glory Be. Many end with the Hail, Holy Queen and a closing prayer.",
      "The mysteries: Joyful (the Annunciation, Visitation, Nativity, Presentation, and Finding in the Temple); Sorrowful (the Agony in the Garden, Scourging, Crowning with Thorns, Carrying of the Cross, and Crucifixion); Glorious (the Resurrection, Ascension, Descent of the Holy Spirit, Assumption, and Coronation of Mary); and Luminous (the Baptism of Jesus, the Wedding at Cana, the Proclamation of the Kingdom, the Transfiguration, and the Institution of the Eucharist). St. John Paul II proposed the Luminous mysteries in 2002, “left to the freedom of individuals and communities” (Rosarium Virginis Mariae 19, 21).",
      "Which day: he suggested Joyful on Monday and Saturday, Sorrowful on Tuesday and Friday, Glorious on Wednesday and Sunday, and Luminous on Thursday, adding that this “is not intended to limit a rightful freedom in personal and community prayer” (Rosarium Virginis Mariae 38).",
      "Contemplation, not mere repetition: the Rosary is “essentially a contemplative prayer” (Directory on Popular Piety 197); “Christian prayer tries above all to meditate on the mysteries of Christ, as in lectio divina or the rosary” (CCC 2708). It grew up in medieval Western piety (CCC 2678).",
      "Local customs: some add the prayer associated with Fatima after each decade, and closing prayers vary by local custom (Rosarium Virginis Mariae 35). The Church also esteems other approved Marian prayers and chaplets (Directory on Popular Piety 202).",
      "Devotions like this are recommended, not required: the Church calls such pious exercises optional, while warning against undervaluing them (Directory on Popular Piety 12).",
      "Doesn't Jesus forbid repetitive prayer? Jesus said, “In praying, do not babble like the pagans, who think that they will be heard because of their many words” (Matthew 6:7). His warning concerns trying to win God over by the number of words. Scripture also shows prayer that repeats: in Gethsemane Jesus “prayed a third time, saying the same thing again” (Matthew 26:44), and in heaven the living creatures never stop exclaiming, “Holy, holy, holy” (Revelation 4:8). The Catechism teaches that when a prayer is “repeated often by a humbly attentive heart, the prayer is not lost by heaping up empty phrases” (CCC 2668).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "971", url: ccc("__P2C") },
        { paragraphs: "1674", url: ccc("__P58") },
        { paragraphs: "2668, 2678", url: ccc("__P9F") },
        { paragraphs: "2708", url: ccc("__P9L") },
      ],
      scripture: [
        { passage: "Luke 1:26–38", url: bible("luke/1") },
        { passage: "Luke 2:19", url: bible("luke/2") },
        { passage: "Acts 1:14", url: bible("acts/1") },
      ],
      documents: ["rosarium-virginis-mariae", "directory-popular-piety"],
    },
    resources: ["usccb-rosary", "ca-how-to-pray-the-rosary", "ca-rosary-vain-repetition-staples"],
    related: ["hail-mary", "our-father", "why-honor-mary", "who-is-mary"],
  },
];
