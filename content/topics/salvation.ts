// Learn › What Catholics Believe: salvation and eternal life.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const salvation: Topic[] = [
  {
    slug: "how-are-we-saved",
    title: "Salvation",
    question: "How are we saved?",
    alsoKnownAs: ["Salvation", "Justification", "Being saved"],
    category: "beliefs",
    keywords: ["how are we saved", "salvation", "saved", "justification", "born again", "am I saved", "grace", "faith", "Baptism", "eternal life", "Catholic view of salvation", "saved by Jesus"],
    summary:
      "Catholics believe we are saved by God's grace through Jesus Christ, who died and rose for us. No one can earn salvation; it is a free gift. We receive it through faith and Baptism, which make us God's children and give us a share in his own life. We are then called to live that life in love, to persevere in it with God's help, and to return to him through repentance if we fall.",
    explanation: [
      "God's initiative: “Our justification comes from the grace of God. Grace is favor, the free and undeserved help that God gives us” (CCC 1996). “No one can merit the initial grace of forgiveness and justification” (CCC 2010). Paul writes, “by grace you have been saved through faith, and this is not from you; it is the gift of God” (Ephesians 2:8).",
      "Through Christ: justification “has been merited for us by the Passion of Christ” and “is conferred in Baptism, the sacrament of faith” (CCC 1992). Believing in Christ is necessary for salvation (CCC 161), and Baptism is the door to new life (CCC 1213).",
      "More than a verdict: the Church teaches that justification “is not only the remission of sins, but also the sanctification and renewal of the interior man” (CCC 1989). God forgives us and also makes us new, pouring faith, hope, and charity into our hearts (CCC 1991).",
      "A response of love: God's free initiative calls for our free response (CCC 2002). Faith works “through love” (Galatians 5:6), and with grace we “work out” our salvation, knowing that “God is the one who… works in you both to desire and to work” (Philippians 2:12–13). How faith and works relate is explained in “Are we saved by faith or by works?”",
      "Can salvation be lost? Catholics believe grave sin can destroy the life of grace, which is restored through repentance and the sacrament of Penance (CCC 1446, 1861). They hope with confidence in God's mercy for the grace of final perseverance (CCC 2016).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "161", url: ccc("__PX") },
        { paragraphs: "1987–1993", url: ccc("__P6Y") },
        { paragraphs: "1996–2003", url: ccc("__P6Z") },
        { paragraphs: "2010", url: ccc("__P70") },
        { paragraphs: "2016", url: ccc("__P71") },
      ],
      scripture: [
        { passage: "Ephesians 2:4–10", url: bible("ephesians/2") },
        { passage: "Romans 3:21–26", url: bible("romans/3") },
        { passage: "John 3:3–5, 16", url: bible("john/3") },
        { passage: "Philippians 2:12–13", url: bible("philippians/2") },
      ],
      documents: ["trent-session-6", "joint-declaration-justification"],
    },
    resources: ["video-a101-grace", "ca-assurance-of-salvation"],
    related: ["what-is-grace", "faith-and-works", "baptism", "why-did-jesus-die", "salvation-of-non-christians"],
  },
  {
    slug: "what-is-grace",
    title: "Grace",
    question: "What is grace?",
    alsoKnownAs: ["Sanctifying grace", "Actual grace", "State of grace"],
    category: "beliefs",
    keywords: ["grace", "what is grace", "sanctifying grace", "actual grace", "habitual grace", "state of grace", "charisms", "sacramental grace", "divine life", "free gift", "merit"],
    summary:
      "Grace is God's free and undeserved gift of himself: his favor and his help, by which he forgives us, makes us his children, and gives us a share in his own divine life. Sanctifying grace is that abiding life of God in the soul, received in Baptism; actual graces are God's particular helps at each moment to turn to him and do good.",
    explanation: [
      "God's own life: grace is “a participation in the life of God” that introduces us “into the intimacy of Trinitarian life” (CCC 1997). Peter writes that we may “come to share in the divine nature” (2 Peter 1:4).",
      "Kinds of grace: sanctifying (or habitual) grace is “a stable and supernatural disposition that perfects the soul itself to enable it to live with God,” while actual graces are God's interventions at the beginning of conversion or along the way (CCC 2000). There are also sacramental graces proper to each sacrament and special graces, or charisms, given to build up the Church (CCC 2003).",
      "Always first: even our preparation to receive grace “is already a work of grace” (CCC 2001). We cooperate, but “we are only collaborating with God who works, for his mercy has gone before us.”",
      "The state of grace: someone “in the state of grace” has sanctifying grace, the friendship with God that mortal sin destroys and the sacraments restore (CCC 1861). See “What is the difference between mortal and venial sin?”",
      "Merit is grace too: the Church can speak of the merit of good works only because God “has freely chosen to associate man with the work of his grace,” so that “our merits are God's gifts” (CCC 2008–2009).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1996–2003", url: ccc("__P6Z") },
        { paragraphs: "2006–2011", url: ccc("__P70") },
      ],
      scripture: [
        { passage: "2 Peter 1:3–4", url: bible("2peter/1") },
        { passage: "2 Corinthians 5:17–18", url: bible("2corinthians/5") },
        { passage: "Romans 5:1–5", url: bible("romans/5") },
      ],
      documents: ["trent-session-6"],
    },
    resources: ["video-a101-grace"],
    related: ["how-are-we-saved", "faith-and-works", "what-is-a-sacrament", "mortal-and-venial-sin"],
  },
  {
    slug: "faith-and-works",
    title: "Faith and Works",
    question: "Are we saved by faith or by works?",
    alsoKnownAs: ["Sola fide", "Justification by faith", "James 2:24"],
    category: "beliefs",
    keywords: ["faith or works", "faith alone", "sola fide", "works salvation", "James 2", "justification by faith", "Ephesians 2:8", "Catholics earn salvation", "merit", "Joint Declaration", "Luther"],
    summary:
      "Catholics believe we are saved by God's grace, received through faith, and not by our own works: no one can earn justification. But true faith is not alone; it works through love. Good works done in grace are the fruit of salvation and, by God's generosity, have real value before him. In 1999 Catholics and Lutherans declared together that we are accepted by God “by grace alone, in faith in Christ's saving work and not because of any merit on our part.”",
    explanation: [
      "Not by works: the Council of Trent taught that we are justified freely, because “none of those things which precede justification, whether faith or works, merit the grace itself of justification” (Session 6, ch. 8). Paul says a person is justified by faith “apart from works of the law” (Romans 3:28) and that salvation “is not from works, so no one may boast” (Ephesians 2:9).",
      "Faith working through love: the same Paul says what counts is “faith working through love” (Galatians 5:6), and James writes, “a person is justified by works and not by faith alone” (James 2:24). Catholics read these together: the faith that saves is a living faith that bears fruit.",
      "Growth and merit: once justified, the faithful grow in grace through faith “co-operating with good works” (Trent, Session 6, ch. 10). Any merit belongs first to God's grace (CCC 2008–2011).",
      "Common ground: the Catholic Church and the Lutheran World Federation declared “a consensus in basic truths of the doctrine of justification” (Joint Declaration 40), confessing together that “by grace alone, in faith in Christ's saving work and not because of any merit on our part, we are accepted by God” (15). They also noted remaining differences of emphasis, such as how Lutherans speak of faith alone and Catholics of the renewal of the person (Joint Declaration 25–27). The Declaration concerns Lutherans and Catholics; other Protestant churches are not parties to it.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1987–1993", url: ccc("__P6Y") },
        { paragraphs: "2006–2011", url: ccc("__P70") },
      ],
      scripture: [
        { passage: "Romans 3:21–28", url: bible("romans/3") },
        { passage: "Ephesians 2:8–10", url: bible("ephesians/2") },
        { passage: "James 2:14–26", url: bible("james/2") },
        { passage: "Galatians 5:6", url: bible("galatians/5") },
      ],
      documents: ["joint-declaration-justification", "trent-session-6"],
    },
    resources: ["video-a101-grace", "ca-assurance-of-salvation"],
    related: ["how-are-we-saved", "what-is-grace", "catholic-and-protestant-differences", "sola-scriptura"],
    debate: {
      catholicPosition: {
        summary:
          "We are justified by God's grace, received through faith and Baptism, because of the merits of Christ; no one can merit the grace of justification. Justification both forgives sin and renews the person inwardly. Good works done in grace are the fruit of that grace and, by God's free promise, merit growth in grace and eternal life, yet even these merits are God's gifts (Council of Trent, Session 6; CCC 1987–2011).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants hold that sinners are justified by grace alone through faith alone (sola fide), for Christ's sake, not because of any works. The Augsburg Confession teaches that people “cannot be justified before God by their own strength, merits, or works, but are freely justified for Christ's sake, through faith” (Article IV). This does not mean good works are unnecessary: the same Confession teaches that “this faith is bound to bring forth good fruits” (Article VI), and the Westminster Confession says justifying faith “is no dead faith, but worketh by love” (11.2).",
          variations:
            "Protestant traditions explain the relation in different ways. The Westminster Confession describes justification as God “pardoning their sins” and “imputing the obedience and satisfaction of Christ unto them,” “not by infusing righteousness into them” (11.1). The Lutheran Formula of Concord holds that the regenerate are bound to do good works, but that works must be excluded “in the question concerning salvation as in the article of justification” (Epitome IV). The Baptist Faith and Message calls justification God's “gracious and full acquittal” of sinners who repent and believe, followed by sanctification (Article IV). The Joint Declaration of 1999 involves Lutherans and Catholics only.",
          arguments: [
            {
              claim: "Catholics teach that people earn salvation by their works.",
              response:
                "The Catholic Church teaches that “no one can merit the initial grace of forgiveness and justification” (CCC 2010) and that the merit of good works “is to be attributed in the first place to the grace of God” (CCC 2008). The Council of Trent taught that nothing that precedes justification, “whether faith or works,” merits it (Session 6, ch. 8).",
              authority: "doctrine",
            },
            {
              claim: "Justification is God's legal declaration that we are righteous for Christ's sake, not an inner renewal.",
              response:
                "Catholics hold that God's declaration is effective: justification “is not only the remission of sins, but also the sanctification and renewal of the interior man” (CCC 1989), and God “makes us inwardly just by the power of his mercy” (CCC 1992). The Lutheran explanation in the Joint Declaration also confesses that “justification and renewal are joined in Christ” (26), though the two traditions still differ in emphasis.",
              authority: "doctrine",
            },
            {
              claim: "If good works merit eternal life, believers cannot have assurance; they must trust their own performance.",
              response:
                "The Church teaches that “our merits are God's gifts” (CCC 2009) and that the faithful “rightly hope for the grace of final perseverance” from God's mercy (CCC 2016). In the Joint Declaration, Catholics explain that speaking of merit is meant to stress responsibility for one's actions, “not to contest the character of those works as gifts or far less to deny that justification always remains the unmerited gift of grace” (38). Catholics and Protestants still differ on what assurance of salvation a believer can have.",
              authority: "doctrine",
            },
          ],
          sources: ["augsburg-confession", "formula-of-concord-ep4", "westminster-confession", "baptist-faith-message"],
        },
      ],
    },
  },
  {
    slug: "what-happens-when-we-die",
    title: "Death and Judgment",
    question: "What happens when we die?",
    alsoKnownAs: ["Particular judgment", "Last things", "Death"],
    category: "beliefs",
    keywords: ["what happens when you die", "after death", "particular judgment", "judgment", "soul", "last things", "four last things", "resurrection of the body", "Last Judgment", "reincarnation", "near death"],
    summary:
      "At death the soul is separated from the body and meets Christ in the particular judgment. Those who die in God's grace go to heaven, either immediately or after a final purification (purgatory); those who die in unrepented mortal sin, freely refusing God's love, are separated from him in hell. At the end of time Christ will return, the dead will rise, and the Last Judgment will take place.",
    explanation: [
      "Death: death “puts an end to human life as the time open to either accepting or rejecting the divine grace manifested in Christ” (CCC 1021). “It is appointed that human beings die once, and after this the judgment” (Hebrews 9:27).",
      "The particular judgment: “Each man receives his eternal retribution in his immortal soul at the very moment of his death, in a particular judgment that refers his life to Christ” (CCC 1022). St. John of the Cross said, “At the evening of life, we shall be judged on our love” (quoted in CCC 1022).",
      "Three possible destinies: heaven, “through a purification or immediately,” or everlasting separation from God (CCC 1022). See “What is heaven?”, “What is purgatory?”, and “Is hell real?”",
      "Christian hope: for those who die in Christ, death is a sharing in his death so that they can share his Resurrection (CCC 1006, 1010). Jesus promised the repentant thief, “today you will be with me in Paradise” (Luke 23:43).",
      "The end of time: our souls will be reunited with our bodies on the day of resurrection (CCC 1005), and Christ will come in glory to judge the living and the dead. Christians do not believe in reincarnation: we live one earthly life (Hebrews 9:27).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1005–1007, 1010", url: ccc("__P2I") },
        { paragraphs: "1021–1022", url: ccc("__P2L") },
      ],
      scripture: [
        { passage: "Hebrews 9:27–28", url: bible("hebrews/9") },
        { passage: "Luke 23:39–43", url: bible("luke/23") },
        { passage: "Matthew 25:31–46", url: bible("matthew/25") },
        { passage: "1 Corinthians 15:42–44", url: bible("1corinthians/15") },
      ],
      documents: ["spe-salvi"],
    },
    resources: ["video-a101-last-things"],
    related: ["heaven", "purgatory", "hell", "resurrection"],
  },
  {
    slug: "heaven",
    title: "Heaven",
    question: "What is heaven?",
    alsoKnownAs: ["Beatific vision", "Eternal life", "Paradise"],
    category: "beliefs",
    keywords: ["heaven", "what is heaven like", "beatific vision", "seeing God", "eternal life", "paradise", "will we know each other in heaven", "new heavens and new earth", "who goes to heaven"],
    summary:
      "Heaven is perfect, everlasting communion of life and love with God, the Holy Trinity, together with Mary, the angels, and all the saints. Those who die in God's grace and are fully purified see God “face to face.” It is the fulfillment of every human longing, a happiness beyond anything we can imagine.",
    explanation: [
      "Seeing God: those who die in God's grace and are perfectly purified “see him as he is,” face to face (CCC 1023; 1 John 3:2). The Church calls this “the beatific vision” (CCC 1028). Paul writes, “At present we see indistinctly, as in a mirror, but then face to face” (1 Corinthians 13:12).",
      "Communion: heaven is “this communion of life and love with the Trinity, with the Virgin Mary, the angels and all the blessed,” the “ultimate end and fulfillment of the deepest human longings” (CCC 1024).",
      "Being with Christ: to live in heaven is “to be with Christ”; the blessed do not lose their identity but find their true selves (CCC 1025). Christ “opened” heaven to us by his death and Resurrection (CCC 1026).",
      "Beyond words: Scripture speaks of heaven in images, life, light, peace, a wedding feast, the Father's house, the heavenly Jerusalem, because it is “beyond all understanding and description” (CCC 1027). “What eye has not seen, and ear has not heard… what God has prepared for those who love him” (1 Corinthians 2:9).",
      "Not idle: the blessed “continue joyfully to fulfill God's will” and reign with Christ (CCC 1029); at the end, God will make all things new (Revelation 21:1–5).",
    ],
    teaching: {
      catechism: [{ paragraphs: "1023–1029", url: ccc("__P2M") }],
      scripture: [
        { passage: "1 Corinthians 13:12", url: bible("1corinthians/13") },
        { passage: "1 John 3:2", url: bible("1john/3") },
        { passage: "1 Corinthians 2:9", url: bible("1corinthians/2") },
        { passage: "Revelation 21:1–5", url: bible("revelation/21") },
      ],
      documents: ["spe-salvi"],
    },
    resources: ["video-a101-last-things"],
    related: ["what-happens-when-we-die", "purgatory", "what-is-a-saint", "resurrection"],
  },
  {
    slug: "hell",
    title: "Hell",
    question: "Is hell real?",
    alsoKnownAs: ["Eternal punishment", "Gehenna", "Damnation"],
    category: "beliefs",
    keywords: ["hell", "is hell real", "eternal punishment", "Gehenna", "damnation", "would a loving God send people to hell", "who goes to hell", "is anyone in hell", "fire", "annihilation"],
    summary:
      "Yes. The Catholic Church teaches that hell exists and is eternal. It is the state of definitive self-exclusion from communion with God, chosen by those who freely refuse his love to the end by dying in unrepented mortal sin. Its chief pain is separation from God, for whom we were made. God predestines no one to hell, and the Church prays for the salvation of all.",
    explanation: [
      "Jesus' warnings: Jesus speaks often of Gehenna and “the unquenchable fire” (CCC 1034) and of the judgment when the wicked “will go off to eternal punishment, but the righteous to eternal life” (Matthew 25:46).",
      "Self-exclusion: “We cannot be united with God unless we freely choose to love him.” To die in mortal sin without repenting and accepting God's merciful love means remaining separated from him by our own free choice; this “state of definitive self-exclusion from communion with God and the blessed is called ‘hell’” (CCC 1033).",
      "What the Church affirms: the existence of hell and its eternity; “the chief punishment of hell is eternal separation from God” (CCC 1035).",
      "Not God's wish: “God predestines no one to go to hell”; it requires a willful turning away from God and persistence in it until the end (CCC 1037). The Lord is “not wishing that any should perish but that all should come to repentance” (2 Peter 3:9).",
      "A call to conversion: the teaching on hell is above all “a call to the responsibility incumbent upon man to make use of his freedom” and “an urgent call to conversion” (CCC 1036). Jehovah's Witnesses understand hell differently; their view and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [{ paragraphs: "1033–1037", url: ccc("__P2O") }],
      scripture: [
        { passage: "Matthew 25:31–46", url: bible("matthew/25") },
        { passage: "Mark 9:43–48", url: bible("mark/9") },
        { passage: "2 Peter 3:9", url: bible("2peter/3") },
        { passage: "1 John 3:14–15", url: bible("1john/3") },
      ],
      documents: ["spe-salvi"],
    },
    resources: ["video-a101-last-things"],
    related: ["what-happens-when-we-die", "mortal-and-venial-sin", "heaven", "problem-of-evil"],
    debate: {
      catholicPosition: {
        summary:
          "Hell is the state of definitive self-exclusion from communion with God, chosen by those who die in mortal sin without repenting and accepting God's merciful love. The Church affirms its existence and eternity; its chief punishment is eternal separation from God. God predestines no one to hell, wills all to be saved, and does not reveal anyone's final state: “we must entrust judgment of persons to the justice and mercy of God” (CCC 1033–1037, 1861).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "jehovahs-witnesses",
          position:
            "Jehovah's Witnesses teach that the Bible words translated “hell,” Sheol and Hades, refer to “the common grave of mankind,” where the dead are unconscious, and that death, not torment, is the penalty for sin. They hold that “the idea of eternal torment is repugnant to God,” that “God will annihilate, or permanently destroy, the wicked,” and that Gehenna means “eternal destruction.”",
          arguments: [
            {
              claim: "Sheol and Hades simply mean the grave, so the Bible's “hell” is not a place of punishment.",
              response:
                "Catholics agree that Sheol and Hades usually mean the abode of the dead, which the Creed calls “hell” when it says Christ descended there (CCC 633); that is different from the hell of the damned. Catholic teaching on eternal punishment rests on Jesus' warnings about Gehenna and “the unquenchable fire” (Mark 9:43) and on the final judgment, when the wicked “will go off to eternal punishment, but the righteous to eternal life” (Matthew 25:46).",
              authority: "doctrine",
            },
            {
              claim: "A loving God would not punish anyone forever; the wages of sin is death (Romans 6:23).",
              response:
                "The Church teaches that God “predestines no one to go to hell” (CCC 1037) and that hell is the self-chosen state of those who refuse his love to the end (CCC 1033); its chief pain is separation from the God for whom we were made (CCC 1035). Mortal sin requires grave matter, “full knowledge and deliberate consent” (CCC 1857), and the Church never declares that any particular person is lost (CCC 1861). How eternal loss is reconciled with God's mercy remains a question theologians continue to reflect on.",
              authority: "doctrine",
            },
            {
              claim: "“Eternal destruction” means that the wicked simply cease to exist.",
              response:
                "Catholics read Jesus' parallel between “eternal punishment” and “eternal life” (Matthew 25:46) as describing two lasting destinies, and Paul's “eternal ruin” as separation “from the presence of the Lord” (2 Thessalonians 1:9), not annihilation.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["jw-hell"],
        },
      ],
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Ephesians, Chapter 16 (c. 107)",
          note: "Warns that one who corrupts the faith “shall go away into everlasting fire.”",
          url: "https://www.newadvent.org/fathers/0104.htm",
        },
      ],
    },
  },
  {
    slug: "purgatory",
    title: "Purgatory",
    question: "What is purgatory?",
    alsoKnownAs: ["Final purification", "Praying for the dead", "Holy souls"],
    category: "beliefs",
    keywords: ["purgatory", "what is purgatory", "final purification", "praying for the dead", "holy souls", "is purgatory in the Bible", "2 Maccabees 12", "1 Corinthians 3:15", "Mass for the dead", "All Souls", "indulgences"],
    summary:
      "Purgatory is the final purification of those who die in God's grace and friendship but are not yet perfectly purified. They are assured of heaven, and are made ready for the holiness needed to see God. It is not a second chance or a place of punishment like hell. The Church prays for those being purified, especially at Mass.",
    explanation: [
      "What the Church teaches: “All who die in God's grace and friendship, but still imperfectly purified, are indeed assured of their eternal salvation; but after death they undergo purification, so as to achieve the holiness necessary to enter the joy of heaven” (CCC 1030). This is “entirely different from the punishment of the damned” (CCC 1031). The Councils of Florence and Trent formulated the doctrine (CCC 1031; Trent, Session 25).",
      "Praying for the dead: the doctrine is tied to the ancient practice of praying for the dead, already found in Scripture: Judas Maccabeus “made atonement for the dead that they might be absolved from their sin” (2 Maccabees 12:46; CCC 1032). The Church offers prayer, the Eucharist, almsgiving, and penance for them (CCC 1032).",
      "Scripture: Catholics also point to Paul's words that on the day of judgment a person's work will be tested and “the person will be saved, but only as through fire” (1 Corinthians 3:15), and to the teaching that nothing unclean enters the heavenly city (Revelation 21:27).",
      "Doctrine and imagery: the doctrine itself is the reality of purification after death and the value of prayer for the dead. How it happens is not defined. The tradition speaks of a “cleansing fire” (CCC 1031); Pope Benedict XVI noted that some recent theologians understand that fire as Christ himself, whose loving gaze burns away all that is false and heals us (Spe Salvi 47). That is a theological opinion, not a defined teaching.",
      "Other Christians: many Protestants reject purgatory, and Orthodox Christians pray for the departed while not accepting the Western doctrine as it is formulated. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "958", url: ccc("__P2B") },
        { paragraphs: "1030–1032", url: ccc("__P2N") },
      ],
      scripture: [
        { passage: "2 Maccabees 12:38–46", url: bible("2maccabees/12") },
        { passage: "1 Corinthians 3:10–15", url: bible("1corinthians/3") },
        { passage: "Revelation 21:27", url: bible("revelation/21") },
        { passage: "Matthew 12:32", url: bible("matthew/12") },
      ],
      documents: ["trent-session-25", "spe-salvi"],
    },
    resources: ["ca-purgatory", "ascension-purgatory", "westminster-confession"],
    related: ["what-happens-when-we-die", "heaven", "mass-intercessions", "catholic-bible-books"],
    debate: {
      catholicPosition: {
        summary:
          "All who die in God's grace and friendship but still imperfectly purified are assured of their salvation, and after death they undergo purification to reach the holiness needed for heaven. This final purification of the elect is “entirely different from the punishment of the damned,” and the faithful help those being purified by their prayers, above all the Eucharist. The Church formulated this teaching at the Councils of Florence and Trent (CCC 1030–1032).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Most Protestants hold that Christ's sacrifice fully atones for the sins of believers, who go to be with the Lord at death, so there is no purification after death. The Westminster Confession teaches that besides heaven and hell, “for souls separated from their bodies, the Scripture acknowledgeth none” (32.1).",
          variations:
            "The Lutheran Smalcald Articles objected especially to the belief that the Mass frees souls from sins “in purgatory,” insisting that “only the Lamb of God shall and must do this” (Part II, Article II).",
          arguments: [
            {
              claim: "Purgatory denies that Christ's sacrifice is sufficient.",
              response:
                "Catholics believe Christ's sacrifice alone saves. Those being purified are already saved (CCC 1030); purification completes Christ's work in them rather than adding a payment to it. Paul speaks of a person whose work is tested on the day of judgment who “will be saved, but only as through fire” (1 Corinthians 3:15).",
              authority: "doctrine",
            },
            {
              claim: "Purgatory is not in Scripture, and 2 Maccabees is not even in the Protestant Bible.",
              response:
                "The prayer for the dead in 2 Maccabees 12:46 belongs to the Old Testament the Church received (see “Why do Catholic Bibles have more books?”). The Church also cites Christ's words about sin that will not be forgiven “either in this age or in the age to come” (Matthew 12:32; CCC 1031) and the Church's practice of praying for the dead from the beginning (CCC 1032).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "smalcald-articles-ii"],
        },
        {
          tradition: "eastern-orthodoxy",
          position:
            "Orthodox Christians pray for the departed constantly: at death, at the funeral, on the third, ninth, and fortieth days, and on anniversaries, convinced that the living and the departed are united in the communion of saints. But the Orthodox Churches have not accepted the Western doctrine of purgatory. The Orthodox Church in America explains that it “does not believe in purgatory as a ‘third’ or ‘alternate’ state to heaven and hell,” and that there is no concept of indulgences in Orthodox Christianity.",
          variations:
            "Orthodox explanations of the state of the departed vary. The Confession of Dositheus, adopted by the Synod of Jerusalem in 1672 to answer the Calvinist-leaning confession attributed to Patriarch Cyril Lucaris, taught that the souls of those who repented but did not bring forth fruits of repentance suffer for their sins after death and can be delivered through the prayers of priests, the almsgiving of their relatives, and above all the bloodless sacrifice of the Liturgy (Decree 18). It does not use the word purgatory. It is a seventeenth-century text written for a particular controversy, and Orthodox writers today, such as those cited above, do not all explain the state of the departed in its terms.",
          arguments: [
            {
              claim: "Purgatory turns the afterlife into a third place of punishment between heaven and hell.",
              response:
                "Catholics agree that there is no third final destiny. Purgatory is the final purification of those already saved, “entirely different from the punishment of the damned” (CCC 1031). The Church does not define how this purification takes place; Pope Benedict XVI noted that some theologians understand the purifying fire as Christ himself, whose gaze heals “through an undeniably painful transformation” (Spe Salvi 47).",
              authority: "doctrine",
            },
            {
              claim: "Legal ideas of temporal punishment and indulgences are foreign to an Eastern understanding of salvation as healing.",
              response:
                "Catholic teaching also speaks of purification as healing. The Catechism says temporal punishment “must not be conceived of as a kind of vengeance inflicted by God from without, but as following from the very nature of sin” (CCC 1472), and Spe Salvi calls the encounter with Christ “a blessed pain” (47). Catholics and Orthodox share prayer for the departed; the open question is how to express what that prayer achieves.",
              authority: "doctrine",
            },
          ],
          sources: ["oca-qa-prayers-for-departed", "oca-qa-indulgences", "oca-breck-pray-for-departed", "confession-of-dositheus"],
        },
      ],
      fathers: [
        {
          name: "St. Augustine of Hippo",
          work: "Confessions, Book 9, Chapter 11 (c. 397)",
          note: "His dying mother, St. Monica, asks: “This only I ask, that you will remember me at the Lord's altar, wherever you be.”",
          url: "https://www.newadvent.org/fathers/110109.htm",
        },
      ],
    },
  },
  {
    slug: "salvation-of-non-christians",
    title: "Salvation of Non-Christians",
    question: "Can non-Christians be saved?",
    alsoKnownAs: ["Extra Ecclesiam nulla salus", "Invincible ignorance", "No salvation outside the Church"],
    category: "beliefs",
    keywords: ["can non-Christians be saved", "outside the Church no salvation", "extra ecclesiam nulla salus", "invincible ignorance", "what about people who never heard of Jesus", "salvation of other religions", "Muslims saved", "atheists saved", "anonymous Christians", "mission"],
    summary:
      "The Church teaches that all salvation comes from Christ through his Church, and also that those who, through no fault of their own, do not know Christ or the Church, but sincerely seek God and try to do his will as their conscience shows them, may be saved by God's grace in ways known to him. This does not make all religions equal or mission unnecessary; the Church is still called to proclaim Christ to everyone.",
    explanation: [
      "All salvation comes through Christ: “There is no salvation through anyone else” (Acts 4:12). Reformulated positively, the ancient saying “outside the Church there is no salvation” means that “all salvation comes from Christ the Head through the Church which is his Body” (CCC 846). Those who know the Church is necessary and refuse to enter it cannot be saved (CCC 846).",
      "Those who do not know: the teaching “is not aimed at those who, through no fault of their own, do not know Christ and his Church.” Those who “seek God with a sincere heart, and, moved by grace, try in their actions to do his will as they know it through the dictates of their conscience — those too may achieve eternal salvation” (CCC 847; Lumen Gentium 16).",
      "Still by grace: such people are saved not by their own goodness or by their religion as such, but by Christ's grace working in ways known to God (CCC 848, 1260). God “wills everyone to be saved and to come to knowledge of the truth” (1 Timothy 2:4).",
      "Mission remains: God can lead people to faith in ways known to himself, but “the Church still has the obligation and also the sacred right to evangelize all men” (CCC 848). The Church respects what is true and holy in other religions while proclaiming Christ as “the way and the truth and the life” (John 14:6; Nostra Aetate 2).",
      "This is a sensitive question, and how the Catholic position relates to other religions' own views of salvation is addressed in “Do all religions lead to God?” when it is written.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "846–848", url: ccc("__P29") },
        { paragraphs: "1257–1260", url: ccc("__P3M") },
      ],
      scripture: [
        { passage: "Acts 4:12", url: bible("acts/4") },
        { passage: "1 Timothy 2:3–6", url: bible("1timothy/2") },
        { passage: "John 14:6", url: bible("john/14") },
        { passage: "Romans 2:14–16", url: bible("romans/2") },
      ],
      documents: ["lumen-gentium", "dominus-iesus", "nostra-aetate"],
    },
    resources: ["ca-salvation-outside-church"],
    related: ["how-are-we-saved", "baptism", "what-is-the-church", "heaven"],
  },
];
