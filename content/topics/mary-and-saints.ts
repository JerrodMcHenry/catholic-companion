// Learn › Mary and the Saints.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const maryAndSaints: Topic[] = [
  {
    slug: "who-is-mary",
    title: "Mary",
    question: "Who is Mary?",
    alsoKnownAs: ["Blessed Virgin Mary", "Our Lady", "Mother of Jesus"],
    category: "mary-and-the-saints",
    keywords: ["Mary", "Virgin Mary", "Blessed Mother", "Our Lady", "mother of Jesus", "Annunciation", "Hail Mary", "Mary in the Bible", "Mother of the Church", "Assumption", "ever-virgin", "brothers of Jesus", "did Mary have other children", "perpetual virginity", "ever-virgin"],
    summary:
      "Mary is the Jewish woman of Nazareth whom God chose to be the mother of Jesus. She said yes to God at the Annunciation, conceived Jesus by the power of the Holy Spirit, stood by him at the cross, and prayed with the apostles at Pentecost. Catholics honor her as the Mother of God, the first and model disciple, and a mother to all Christians, while always pointing to her Son.",
    explanation: [
      "Everything about Mary points to Christ: “What the Catholic faith believes about Mary is based on what it believes about Christ, and what it teaches about Mary illumines in turn its faith in Christ” (CCC 487).",
      "In the Gospels: the angel Gabriel greets her, “Hail, favored one! The Lord is with you” (Luke 1:28), and she answers, “May it be done to me according to your word” (Luke 1:38). Elizabeth calls her “the mother of my Lord” (Luke 1:43). At Cana she tells the servants, “Do whatever he tells you” (John 2:5). From the cross Jesus entrusts her to the beloved disciple: “Behold, your mother” (John 19:27). She prays with the apostles before Pentecost (Acts 1:14).",
      "What the Church teaches about her: she is truly the Mother of God (CCC 495); she was preserved from original sin from her conception (the Immaculate Conception, CCC 491); she remained a virgin, and the liturgy calls her “Ever-virgin” (CCC 499); and at the end of her earthly life she was taken up body and soul into heavenly glory (the Assumption, defined in 1950; CCC 966).",
      "Model and mother: Mary is the Church's “model of faith and charity” (CCC 967) and “a mother to us in the order of grace” (CCC 968). Her role “in no way obscures or diminishes” Christ's unique mediation (CCC 970). How Catholics honor her is explained in “Do Catholics worship Mary?”",
      "Did Mary have other children? In Mark’s Gospel, Jesus’ neighbors call him “the brother of James and Joses and Judas and Simon” and mention his “sisters” (Mark 6:3). The Church teaches that Mary remained a virgin (CCC 499) and reads these passages as referring to Jesus’ relatives: James and Joseph are elsewhere called sons of “Mary the mother of James and Joseph,” whom Matthew calls “the other Mary” (Matthew 27:56; 28:1), and the Catechism explains that they are “close relations of Jesus, according to an Old Testament expression” (CCC 500; compare Genesis 13:8). The passages themselves do not settle the question; this is how the Church has understood them. In the fourth century Helvidius argued, citing Tertullian, that Mary had later children; St. Jerome answered him, while Damasus was pope, that the “brethren” were kinsmen (Against Helvidius). On Matthew 1:25 (“He had no relations with her until she bore a son”), the NABRE’s own note explains that the Greek word translated “until” “does not imply normal marital conduct after Jesus’ birth, nor does it exclude it.” At the cross Jesus entrusted his mother to the beloved disciple (John 19:26–27), which Catholics find hard to explain if she had other sons, though this is an inference rather than a proof.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "487–495, 499–500", url: ccc("__P1K") },
        { paragraphs: "963–971", url: ccc("__P2C") },
      ],
      scripture: [
        { passage: "Luke 1:26–56", url: bible("luke/1") },
        { passage: "John 2:1–11", url: bible("john/2") },
        { passage: "John 19:25–27", url: bible("john/19") },
        { passage: "Acts 1:14", url: bible("acts/1") },
      ],
      documents: ["lumen-gentium", "munificentissimus-deus"],
    },
    resources: ["ca-mother-of-god-early", "ca-immaculate-conception-assumption", "jerome-against-helvidius", "ca-brethren-of-the-lord"],
    related: ["why-honor-mary", "mother-of-god", "immaculate-conception", "incarnation"],
  },
  {
    slug: "why-honor-mary",
    title: "Honoring Mary",
    question: "Do Catholics worship Mary?",
    alsoKnownAs: ["Marian devotion", "Hyperdulia", "Veneration of Mary"],
    category: "mary-and-the-saints",
    keywords: ["worship Mary", "do Catholics worship Mary", "Mary devotion", "hyperdulia", "dulia", "latria", "Hail Mary", "Rosary", "Mary idolatry", "why pray to Mary", "Marian devotion", "Queen of Heaven", "Mediatrix"],
    summary:
      "No. Catholics worship God alone. They honor Mary with special love because God himself honored her by choosing her to be the mother of his Son, and because Scripture says “all ages” will call her blessed. The Church teaches that devotion to Mary “differs essentially from the adoration” given to God and is meant to lead people to Christ.",
    explanation: [
      "Honor, not adoration: the Church's devotion to Mary “differs essentially from the adoration which is given to the incarnate Word and equally to the Father and the Holy Spirit, and greatly fosters this adoration” (CCC 971). Traditional theology calls the worship due to God alone latria, the honor shown to the saints dulia, and the greater honor shown to Mary hyperdulia, which remains essentially different from the worship of God.",
      "Why honor her: Mary herself said, “from now on will all ages call me blessed” (Luke 1:48). Elizabeth, “filled with the holy Spirit,” called her blessed among women (Luke 1:41–42). Honoring the mother is a way of honoring the Son.",
      "Praying with Mary: when Catholics pray the Hail Mary, they repeat the angel's and Elizabeth's words and ask Mary to pray for them. Such prayer asks for her intercession; it does not treat her as a source of grace apart from Christ. Her role “depends entirely” on Christ's mediation and “draws all its power from it” (CCC 970).",
      "She points to Jesus: in the traditional image, Mary “shows the way” (hodigitria) and is herself the sign of the way to her Son (CCC 2674). Her words at Cana sum up all Marian devotion: “Do whatever he tells you” (John 2:5).",
      "Other Christians: many Protestants honor Mary as a model of faith but reject prayers addressed to her. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "963–971", url: ccc("__P2C") },
        { paragraphs: "2673–2675", url: ccc("__P9F") },
      ],
      scripture: [
        { passage: "Luke 1:39–56", url: bible("luke/1") },
        { passage: "John 2:1–11", url: bible("john/2") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-saint-worship", "ca-mother-of-god-early", "westminster-confession", "spc-mother-and-queen"],
    related: ["who-is-mary", "praying-to-saints", "praying-directly-to-god", "statues-and-images"],
    debate: {
      catholicPosition: {
        summary:
          "Catholics worship God alone. They give Mary a unique honor, greater than that given to the other saints, because God chose her to be the Mother of his Son. This honor “differs essentially from the adoration” given to God, and her role “depends entirely” on Christ's unique mediation (CCC 970–971). Marian devotions are recommended, but private revelations, even those the Church recognizes, do not belong to the deposit of faith (CCC 67).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants honor Mary as the mother of Jesus and a model of faith, but object that Catholic devotion gives her a place that belongs to Christ. The Westminster Confession teaches that religious worship is to be given to God alone, “not to angels, saints, or any other creature” (21.2). The Lutheran Apology of the Augsburg Confession, while saying that Mary “is most worthy of the most ample honors,” objected that in popular devotion she had “succeeded altogether to the place of Christ” (Article XXI).",
          variations:
            "Lutheran confessions keep a high regard for Mary: the Formula of Concord confesses that “she is truly the mother of God” (Solid Declaration VIII), and the Apology grants that she may pray for the Church while rejecting prayers addressed to her. Reformed confessions direct all religious worship to God alone (Westminster 21.2).",
          arguments: [
            {
              claim: "Titles such as Advocate, Mediatrix, and Queen of Heaven give Mary roles that belong to Christ.",
              response:
                "The Church uses these titles but teaches that Mary's role “in no way obscures or diminishes this unique mediation of Christ, but rather shows its power”; it “rests on his mediation, depends entirely on it, and draws all its power from it” (CCC 970). The title of queen draws on the queen mother of the Davidic kings, whose dignity came entirely from her son's kingship (1 Kings 2:19).",
              authority: "doctrine",
            },
            {
              claim: "Jesus himself turned attention away from his mother: “Rather, blessed are those who hear the word of God and observe it” (Luke 11:28).",
              response:
                "Catholics read this as praising what Mary did above all: she heard God's word and said, “May it be done to me according to your word” (Luke 1:38). The same Gospel records her prophecy that all ages would call her blessed (Luke 1:48). Honoring her is a way of honoring the faith Jesus praised.",
              authority: "apologetic-argument",
            },
            {
              claim: "Catholics are required to believe in Marian apparitions and to practice devotions like the Rosary.",
              response:
                "No. Private revelations, including approved apparitions, “do not belong … to the deposit of faith” (CCC 67), so Catholics are not bound to believe them. The Church recommends Marian prayer such as the Rosary (CCC 971), but such devotions are not articles of faith; what Catholics must believe about Mary concerns Christ and is found in the Creed and the Church's defined teaching.",
              authority: "doctrine",
            },
          ],
          sources: ["westminster-confession", "apology-augsburg-confession", "formula-of-concord-sd8"],
        },
      ],
      fathers: [
        {
          name: "St. Irenaeus of Lyons",
          work: "Against Heresies, Book 3, Chapter 22 (c. 180)",
          note: "Contrasts Eve and Mary: “the knot of Eve's disobedience was loosed by the obedience of Mary.”",
          url: "https://www.newadvent.org/fathers/0103322.htm",
        },
      ],
    },
  },
  {
    slug: "mother-of-god",
    title: "Mother of God",
    question: "Why is Mary called the Mother of God?",
    alsoKnownAs: ["Theotokos", "Council of Ephesus", "God-bearer"],
    category: "mary-and-the-saints",
    keywords: ["Mother of God", "Theotokos", "God-bearer", "Council of Ephesus", "431", "Nestorius", "how can God have a mother", "mother of my Lord", "Mary mother of God"],
    summary:
      "Because her Son is God. Jesus is one divine person, the eternal Son of the Father, who became man. Mary did not give him his divinity, but the one she conceived and bore is truly God, so she is truly the Mother of God. The Council of Ephesus confirmed the title Theotokos (“God-bearer”) in 431 to protect the truth that Jesus is one person, both God and man.",
    explanation: [
      "A title about Jesus: Elizabeth calls Mary “the mother of my Lord” (Luke 1:43). The one Mary conceived “was none other than the Father's eternal Son, the second person of the Holy Trinity. Hence the Church confesses that Mary is truly ‘Mother of God’ (Theotokos)” (CCC 495).",
      "Not the source of God: the Church does not say Mary existed before God or gave him his divine nature. As St. Cyril of Alexandria wrote in a letter read at the Council of Ephesus, she is called mother of God “not as though the nature of the Word or his godhead received the origin of their being from the holy virgin,” but because the Word was united to the flesh born of her.",
      "Why it was defined: the Nestorian teaching regarded Christ as a human person joined to the divine Son. Opposing it, the Council of Ephesus (431) confessed that Christ's humanity has no other subject than the divine person of the Son, and so proclaimed that Mary truly became the Mother of God (CCC 466). Paul writes that God sent his Son, “born of a woman” (Galatians 4:4).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "466", url: ccc("__P1J") },
        { paragraphs: "495", url: ccc("__P1K") },
        { paragraphs: "963", url: ccc("__P2C") },
      ],
      scripture: [
        { passage: "Luke 1:39–45", url: bible("luke/1") },
        { passage: "Galatians 4:4–5", url: bible("galatians/4") },
        { passage: "John 1:14", url: bible("john/1") },
      ],
      documents: ["council-of-ephesus", "lumen-gentium"],
    },
    resources: ["ca-mother-of-god-early", "spc-why-mother-of-god"],
    related: ["who-is-mary", "divinity-of-jesus", "incarnation", "why-honor-mary"],
    debate: {
      catholicPosition: {
        summary:
          "Mary is truly the Mother of God because the one she conceived and bore is the eternal Son of God made man. She did not give him his divinity: a mother is mother of a person, and that person is God the Son. The Council of Ephesus (431) confessed the title Theotokos to safeguard the unity of Christ's person (CCC 466, 495).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants affirm with the early councils that Jesus is one person, true God and true man. Lutheran confessions use the title: the Formula of Concord says Mary “is truly the mother of God” (Solid Declaration VIII). The Westminster Confession teaches the same union of “two whole, perfect, and distinct natures” in “one person,” conceived in the virgin Mary “of her substance,” without using the title (8.2). Some Protestants avoid the title and prefer “mother of Jesus” or “mother of the Lord.”",
          arguments: [
            {
              claim: "God is eternal and has no mother; Mary is the mother of Jesus' human nature only.",
              response:
                "A mother is mother of a person, not of a nature, and the one Mary conceived is the eternal Son. The Church calls her Mother of God “not as though the nature of the Word or his godhead received the origin of their being from the holy virgin,” but because the Word was united to the flesh born of her (St. Cyril, in the acts of the Council of Ephesus). Denying the title risks dividing Christ into two persons (CCC 466).",
              authority: "doctrine",
            },
            {
              claim: "The title “Mother of God” is not in the Bible.",
              response:
                "Elizabeth, “filled with the holy Spirit,” calls Mary “the mother of my Lord” (Luke 1:41–43), and John writes that “the Word became flesh” (John 1:14). The title states in one word what these passages teach, much as the word “Trinity” names what Scripture reveals (see “Is the Trinity in the Bible?”).",
              authority: "apologetic-argument",
            },
            {
              claim: "The title exalts Mary instead of Christ.",
              response:
                "The council confessed the title to protect the truth about Christ: his humanity “has no other subject than the divine person of the Son of God” (CCC 466). The title is first a statement about who Jesus is.",
              authority: "doctrine",
            },
          ],
          sources: ["formula-of-concord-sd8", "westminster-confession"],
        },
      ],
      fathers: [
        {
          name: "St. Cyril of Alexandria",
          work: "Letter to Nestorius, in the acts of the Council of Ephesus (431)",
          note: "Explains that Mary is called mother of God not because she gave the Word his divinity, but because he was born of her in the flesh.",
          url: "https://www.papalencyclicals.net/councils/ecum03.htm",
        },
      ],
    },
  },
  {
    slug: "immaculate-conception",
    title: "The Immaculate Conception",
    question: "What is the Immaculate Conception?",
    alsoKnownAs: ["Mary conceived without sin", "Ineffabilis Deus", "1854 definition"],
    category: "mary-and-the-saints",
    keywords: ["Immaculate Conception", "Mary without sin", "original sin", "full of grace", "1854", "Pius IX", "Ineffabilis Deus", "December 8", "is the Immaculate Conception the virgin birth", "did Mary need a savior", "New Eve", "Ark of the Covenant", "Mary typology"],
    summary:
      "The Immaculate Conception is the Catholic dogma that Mary, from the first moment of her conception, was preserved by God's grace from original sin, in view of the merits of Jesus Christ. It is not about Jesus' conception (that is the virgin birth). Mary was redeemed too, but in a more exalted way: kept from sin rather than cleansed of it. Pope Pius IX defined it in 1854.",
    explanation: [
      "The definition: in 1854 Pope Pius IX declared that “the most Blessed Virgin Mary, in the first instance of her conception, by a singular grace and privilege granted by Almighty God, in view of the merits of Jesus Christ, the Savior of the human race, was preserved free from all stain of original sin” (Ineffabilis Deus; CCC 491). It is a defined dogma.",
      "Mary needed a Savior: her holiness “comes wholly from Christ: she is ‘redeemed, in a more exalted fashion, by reason of the merits of her Son’” (CCC 492). God preserved her in advance through the same grace that saves us.",
      "Why: God prepared Mary to give the free assent of faith at the Annunciation, “wholly borne by God's grace” (CCC 490). The angel greets her as one already filled with God's favor: “Hail, favored one!” (Luke 1:28). By God's grace Mary also remained free from personal sin throughout her life (CCC 493).",
      "Not the virgin birth: people often confuse the two. The Immaculate Conception concerns Mary's own conception by her parents; the virginal conception concerns Jesus, conceived by the Holy Spirit (CCC 496–498).",
      "East and West: the Fathers of the Eastern tradition call Mary “the All-Holy” (Panagia) and celebrate her as free from any stain of sin (CCC 493). Orthodox and Protestant Christians understand Mary's holiness in different ways and have not accepted the 1854 definition; their views and the Catholic responses are set out below.",
      "The New Eve: after the fall, God promises “enmity between you and the woman” (Genesis 3:15). Around 155, Justin Martyr contrasted Eve, who “having conceived the word of the serpent, brought forth disobedience and death,” with Mary, who “received faith and joy” at the Annunciation (Dialogue with Trypho 100). About 180, Irenaeus wrote that “the knot of Eve’s disobedience was loosed by the obedience of Mary” (Against Heresies 3.22.4; CCC 494). Many Fathers and Doctors of the Church see Mary as the “woman” of Genesis 3:15, “the ‘new Eve’” (CCC 411).",
      "The Ark of the Covenant: Luke’s account of the Visitation echoes the ark’s journey in 2 Samuel 6. David “set out” to bring up the ark (2 Samuel 6:2), and Mary “set out” for the hill country of Judah (Luke 1:39). David asks, “How can the ark of the LORD come to me?” (2 Samuel 6:9), and Elizabeth asks why “the mother of my Lord should come to me” (Luke 1:43). David danced before the LORD (2 Samuel 6:16), and the infant “leaped” in Elizabeth’s womb (Luke 1:41, 44). The ark stayed in the house of Obed-edom “three months” (2 Samuel 6:11), and Mary “remained with her about three months” (Luke 1:56). Luke's verb for Elizabeth's loud cry, anaphōneō, appears nowhere else in the New Testament; in the Greek Old Testament it is used for the Levites' music and praise before the ark (1 Chronicles 15:28; 16:4–5; 2 Chronicles 5:13), and also for worship at the tabernacle in Gibeon (1 Chronicles 16:42). It was also an ordinary Greek word, so this echo is suggestive, not conclusive. The Church calls Mary “the ark of the covenant, the place where the glory of the Lord dwells” (CCC 2676).",
      "What typology shows, and what it does not: these parallels are interpretations. Luke does not state them outright, and they do not by themselves prove the Immaculate Conception. They show how Christians have read Mary’s unique holiness in the light of the Old Testament; the dogma itself rests on the Church’s definition (Ineffabilis Deus), read together with Scripture and Tradition.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "490–494, 496–498", url: ccc("__P1K") },
        { paragraphs: "411", url: ccc("__P1C") },
        { paragraphs: "2676", url: ccc("__P9F") },
      ],
      scripture: [
        { passage: "Luke 1:26–38", url: bible("luke/1") },
        { passage: "Genesis 3:15", url: bible("genesis/3") },
        { passage: "Ephesians 1:3–4", url: bible("ephesians/1") },
        { passage: "2 Samuel 6:1–16", url: bible("2samuel/6") },
        { passage: "Luke 1:39–56", url: bible("luke/1") },
      ],
      documents: ["ineffabilis-deus", "lumen-gentium"],
    },
    resources: ["ca-immaculate-conception-assumption", "justin-dialogue-trypho-100", "irenaeus-against-heresies-3-22"],
    related: ["who-is-mary", "mother-of-god", "baptism", "papal-infallibility"],
    debate: {
      catholicPosition: {
        summary:
          "From the first moment of her conception, Mary was preserved from all stain of original sin by a singular grace of God, in view of the merits of Jesus Christ, the Savior of the human race. She was redeemed, “in a more exalted fashion,” by her Son. Pope Pius IX defined this as a dogma in 1854 (CCC 491–492).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants generally hold that Scripture does not teach the Immaculate Conception and that every human being except Christ inherits original sin. They point to Mary's own words, “my spirit rejoices in God my savior” (Luke 1:47), and to Paul's teaching that “all have sinned and are deprived of the glory of God” (Romans 3:23). The Westminster Confession teaches that the corruption of original sin is “conveyed to all their posterity descending from them by ordinary generation” (6.3).",
          arguments: [
            {
              claim: "Mary called God her Savior (Luke 1:47), so she was a sinner who needed saving.",
              response:
                "Catholics agree that Mary needed a Savior. The dogma says she was preserved “by virtue of the merits of Jesus Christ, Saviour of the human race” (CCC 491): she was “redeemed, in a more exalted fashion, by reason of the merits of her Son” (CCC 492), saved in advance rather than cleansed afterward.",
              authority: "doctrine",
            },
            {
              claim: "“All have sinned” (Romans 3:23) leaves no room for exceptions.",
              response:
                "Catholics read Paul as describing humanity's universal need for grace rather than listing every individual; Christ himself is the obvious exception. The Church holds that God's grace also preserved Mary, so that her holiness “comes wholly from Christ” (CCC 492).",
              authority: "apologetic-argument",
            },
            {
              claim: "The doctrine is not in Scripture and was defined only in 1854.",
              response:
                "The Church holds that this truth belongs to revelation and was grasped more fully over time: “Through the centuries the Church has become ever more aware that Mary, ‘full of grace’ through God, was redeemed from the moment of her conception” (CCC 491). Catholics cite the angel's greeting, “Hail, favored one!” (Luke 1:28), and the Eastern Fathers' title for Mary, “the All-Holy” (CCC 493).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession"],
        },
        {
          tradition: "eastern-orthodoxy",
          position:
            "Orthodox Christians venerate the Mother of God as all-holy and celebrate her as free from personal sin, but the Orthodox Churches have not accepted the 1854 definition. In an explanation published by the Orthodox Church in America, Mary, as a human being, “could indeed have sinned, but chose not to,” and the Orthodox “do not accept that humans share the guilt of the first sin but, rather, only the consequences.” Mary herself calls God her Savior (Luke 1:47).",
          variations:
            "The same Orthodox source notes that the Orthodox Church has not developed as detailed a Marian theology as the West, and Orthodox explanations of Mary's holiness vary in emphasis.",
          arguments: [
            {
              claim: "The doctrine assumes that everyone inherits the guilt of Adam's sin, which the Orthodox do not accept.",
              response:
                "Part of this difference is terminology. The Catechism teaches that original sin “does not have the character of a personal fault in any of Adam's descendants”; it is “a deprivation of original holiness and justice” (CCC 405). The dogma affirms that Mary possessed grace and holiness from her first moment, not that others bear personal guilt for Adam's act. Substantive differences remain in theological anthropology, how East and West understand original sin and its effects, and in doctrinal authority, whether a dogma could be defined in the West without an ecumenical council of East and West.",
              authority: "doctrine",
            },
            {
              claim: "If Mary was preserved from sin from conception, her free “yes” at the Annunciation would mean less.",
              response:
                "The Church teaches that grace makes freedom possible rather than removing it: Mary gave “the free assent of her faith” at the Annunciation because she was “wholly borne by God's grace” (CCC 490), and she gave herself to her Son's work “without a single sin to restrain her” (CCC 494).",
              authority: "doctrine",
            },
            {
              claim: "The pope defined this dogma alone, without an ecumenical council of East and West.",
              response:
                "Catholics hold that the pope's solemn definitions express the infallibility of the whole Church (CCC 891) and that the definition expressed a faith already present, including in the Eastern liturgy's praise of the Mother of God as “All-Holy” and free from every stain (CCC 493). How doctrines defined in the West after the separation relate to Eastern theology remains a question for Catholic–Orthodox dialogue.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["oca-qa-sinlessness-of-mary"],
        },
      ],
    },
  },
  {
    slug: "what-is-a-saint",
    title: "Saints",
    question: "What is a saint?",
    alsoKnownAs: ["Canonization", "Communion of saints", "Holy men and women"],
    category: "mary-and-the-saints",
    keywords: ["saint", "what is a saint", "canonization", "how does someone become a saint", "communion of saints", "patron saint", "feast day", "blessed", "venerable", "are all Christians saints", "holiness"],
    summary:
      "A saint is someone who is with God in heaven. In a broad sense the New Testament calls all believers “saints” (holy ones), and every Christian is called to holiness. When the Church canonizes someone, it solemnly declares that this person lived a life of heroic virtue and is now in heaven, and proposes them as a model and an intercessor.",
    explanation: [
      "Holy ones: Paul writes to “the holy ones” in the churches (for example Philippians 1:1). Every baptized person is called to be holy; the Church calls the bond between all the faithful, living and dead, “the communion of saints” (CCC 946–948).",
      "Canonized saints: “By canonizing some of the faithful, i.e., by solemnly proclaiming that they practiced heroic virtue and lived in fidelity to God's grace,” the Church recognizes the Spirit's work and proposes them “as models and intercessors” (CCC 828). Canonization does not make someone a saint; it recognizes what God has done.",
      "Three states of the Church: some disciples are pilgrims on earth, some have died and are being purified, and others are in glory with God; all share one charity (CCC 954). The union between us and those who have died in Christ “is in no way interrupted” (CCC 955).",
      "Why they matter: the saints show that holiness is possible in every time and state of life, and they are “a cloud of witnesses” cheering us on (Hebrews 12:1). Catholics also ask their prayers; see “Why do Catholics pray to saints?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "828", url: ccc("__P29") },
        { paragraphs: "946–948, 954–959", url: ccc("__P2B") },
      ],
      scripture: [
        { passage: "Philippians 1:1", url: bible("philippians/1") },
        { passage: "Hebrews 12:1–2", url: bible("hebrews/12") },
        { passage: "Revelation 7:9–17", url: bible("revelation/7") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-saint-worship"],
    related: ["praying-to-saints", "statues-and-images", "heaven", "why-honor-mary"],
  },
  {
    slug: "praying-to-saints",
    title: "Praying to the Saints",
    question: "Why do Catholics pray to saints?",
    alsoKnownAs: ["Intercession of the saints", "Patron saints", "Invocation of saints"],
    category: "mary-and-the-saints",
    keywords: ["pray to saints", "intercession of saints", "patron saint", "saint for", "St. Anthony", "can saints hear us", "communion of saints", "asking saints to pray", "novena"],
    summary:
      "When Catholics “pray to” a saint, they are asking that saint to pray for them, just as they would ask a friend on earth. The saints are alive with God and united with us in the one Body of Christ, so their love and prayer for the Church continue. Catholics also give thanks for the saints and try to imitate them. Prayer of adoration is given to God alone.",
    explanation: [
      "Asking for prayer: the saints in heaven “do not cease to intercede with the Father for us” through Christ, the one mediator (CCC 956). Catholics “can and should ask them to intercede for us and for the whole world” (CCC 2683).",
      "Why the saints can pray for us: those who die in Christ are alive in him (Luke 20:38), and our communion with them is strengthened, not broken, by death (CCC 955). In Revelation, the prayers of God's holy ones rise before his throne (Revelation 5:8; 8:3–4).",
      "Imitation and friendship: we honor the saints “not merely by the title of example” but because communion with them joins us more closely to Christ (CCC 957). Many Catholics choose patron saints whose lives connect with their own.",
      "What it is not: asking a saint's prayer is not worship, not a way around God, and not a claim that saints act by their own power. The Council of Trent taught that the saints “offer up their own prayers to God for men” and that it is good to ask their help in obtaining benefits from God “through His Son, Jesus Christ” (Session 25).",
      "Why not go straight to God? Catholics do, constantly. The question, and the objections many Protestants raise, are treated in “Why not just pray directly to God?”",
      "More from Scripture and the early Church: in Revelation, “the smoke of the incense along with the prayers of the holy ones went up before God from the hand of the angel” (Revelation 8:4). Second Maccabees describes the prophet Jeremiah, long dead, as one who “fervently prays for the people and the holy city” (2 Maccabees 15:14); Protestants do not accept this book as Scripture, but it shows that some Jews before Christ believed the righteous dead pray for the living. Around 350, Cyril of Jerusalem taught the newly baptized that the Church commemorates “Patriarchs, Prophets, Apostles, Martyrs, that at their prayers and intercessions God would receive our petition” (Mystagogical Lecture 5.9).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "954–959", url: ccc("__P2B") },
        { paragraphs: "2683", url: ccc("__P9H") },
      ],
      scripture: [
        { passage: "Luke 20:37–38", url: bible("luke/20") },
        { passage: "Revelation 5:8", url: bible("revelation/5") },
        { passage: "James 5:16", url: bible("james/5") },
        { passage: "Revelation 8:3–4", url: bible("revelation/8") },
        { passage: "2 Maccabees 15:12–16", url: bible("2maccabees/15") },
      ],
      documents: ["lumen-gentium", "trent-session-25"],
    },
    resources: ["ca-praying-to-the-saints", "spc-one-mediator", "cyril-catechetical-lecture-23"],
    related: ["praying-directly-to-god", "what-is-a-saint", "why-honor-mary"],
    debate: {
      catholicPosition: {
        summary:
          "Catholics ask the saints to pray for them, as they ask fellow Christians on earth, because the saints are alive in Christ and united with the Church in the communion of saints. This is not worship, which belongs to God alone: the saints intercede with the Father through Christ, the one mediator (CCC 956, 2683).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestant confessions reject the invocation of saints. Luther's Smalcald Articles call it an abuse that “destroys the knowledge of Christ,” saying it has no command or example in Scripture, while granting that the saints, “perhaps also in heaven,” pray for us (Part II, Article II). Objections about Christ's sole mediation and about contacting the dead are treated in “Why not just pray directly to God?”; this section takes up other questions about the practice.",
          variations:
            "The Lutheran Apology also criticized legends and “invented” miracle stories attached to devotions (Article XXI). Reformed confessions direct all religious worship to God alone (Westminster 21.2).",
          arguments: [
            {
              claim: "The saints cannot hear millions of prayers at once unless they are all-knowing like God.",
              response:
                "Catholics do not claim that the saints are all-knowing or hear by their own power; whatever they know of our needs they know in God. Those in glory “contemplate God, praise him and constantly care for those whom they have left on earth” (CCC 2683), and in Revelation the prayers of God's holy ones are presented before his throne (Revelation 5:8).",
              authority: "apologetic-argument",
            },
            {
              claim: "Patron saints, novenas, and requests for favors turn the saints into little gods.",
              response:
                "Catholics agree that worship belongs to God alone. The Council of Trent taught that the saints “offer up their own prayers to God for men” and that their help is sought “for obtaining benefits from God, through His Son, Jesus Christ our Lord, who is our alone Redeemer and Saviour” (Session 25). Devotions that obscured this would be abuses, which Trent itself told bishops to correct.",
              authority: "doctrine",
            },
            {
              claim: "How can the Church know who is in heaven?",
              response:
                "Canonization is the Church's solemn recognition that a person “practiced heroic virtue and lived in fidelity to God's grace” (CCC 828). Asking the prayers of the saints is older than formal canonization: St. Augustine explains that the Church remembers the martyrs at the altar not to pray for them, “but rather that they should do so for us.”",
              authority: "apologetic-argument",
            },
          ],
          sources: ["smalcald-articles-ii", "apology-augsburg-confession", "westminster-confession"],
        },
      ],
      fathers: [
        {
          name: "St. Augustine of Hippo",
          work: "Tractates on the Gospel of John, Tractate 84 (c. 416)",
          note: "The martyrs are remembered at the Lord's table not so that we pray for them, “but rather that they should do so for us.”",
          url: "https://www.newadvent.org/fathers/1701084.htm",
        },
      ],
    },
  },
  {
    slug: "statues-and-images",
    title: "Statues and Images",
    question: "Do Catholics worship statues?",
    alsoKnownAs: ["Icons", "Veneration of images", "Graven images"],
    category: "mary-and-the-saints",
    keywords: ["worship statues", "graven images", "idolatry", "icons", "statues in church", "crucifix", "Exodus 20", "second commandment", "kissing a statue", "Nicaea II", "iconoclasm"],
    summary:
      "No. Catholics use statues, paintings, and icons the way families use photographs: to remember and honor the people they represent. The honor shown to an image passes to the person it portrays, and worship is given to God alone. The Church teaches that because God became visible in Jesus Christ, he can be depicted.",
    explanation: [
      "The commandment: God forbade Israel to make images of him, the invisible God who had shown no form (CCC 2129). Yet God himself commanded some images: the cherubim on the ark of the covenant and the bronze serpent (Exodus 25:18–20; Numbers 21:8–9; CCC 2130).",
      "The Incarnation changes things: in Jesus the invisible God became visible. On this basis the Second Council of Nicaea (787) defended the veneration of icons of Christ, Mary, the angels, and the saints against those who wanted them destroyed (CCC 2131).",
      "Veneration, not worship: “the honor rendered to an image passes to its prototype,” and the honor paid to sacred images is “a respectful veneration, not the adoration due to God alone” (CCC 2132). Trent taught the same: no divinity or power is believed to be in images; the honor shown them is referred to those they represent (Session 25).",
      "In practice: kneeling before a crucifix or kissing an icon is like kissing a photograph of someone you love; the gesture is directed to the person, not the material object.",
      "Other views: Reformed Protestants, Muslims, and Jews understand the commandment against images in their own ways. Their views and the Catholic responses are set out below.",
      "Pointing to God, not replacing him: Jesus compares his crucifixion to the bronze serpent God commanded Moses to make: “just as Moses lifted up the serpent in the desert, so must the Son of Man be lifted up” (John 3:14; Numbers 21:8–9). Scripture also shows the danger the commandment guards against: when the Israelites began “burning incense to it,” King Hezekiah smashed the bronze serpent (2 Kings 18:4). The difference lies in whether an image is worshiped or used to point to God.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2129–2132", url: ccc("__P7F") },
      ],
      scripture: [
        { passage: "Exodus 20:2–6", url: bible("exodus/20") },
        { passage: "Exodus 25:18–22", url: bible("exodus/25") },
        { passage: "Numbers 21:8–9", url: bible("numbers/21") },
        { passage: "Colossians 1:15", url: bible("colossians/1") },
        { passage: "John 3:14–15", url: bible("john/3") },
        { passage: "2 Kings 18:4", url: bible("2kings/18") },
      ],
      documents: ["nicaea-ii", "trent-session-25"],
    },
    resources: ["ca-worship-statues", "ca-saint-worship"],
    related: ["why-honor-mary", "what-is-a-saint", "incarnation", "praying-to-saints"],
    debate: {
      catholicPosition: {
        summary:
          "Worship belongs to God alone. Christians may make and venerate images of Christ, Mary, the angels, and the saints because the Son of God became visible in the Incarnation. The honor paid to an image passes to the person it represents and is a respectful veneration, not adoration (Second Council of Nicaea, 787; CCC 2131–2132).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "The Reformed tradition holds that the second commandment forbids any image of God and any use of images in worship. The Heidelberg Catechism teaches that “God can not and may not be visibly portrayed in any way,” and that images should not be permitted in churches, because God wants his people “instructed by the living preaching of his Word” (Questions 97–98).",
          variations:
            "The Westminster Larger Catechism likewise forbids “the making any representation of God, of all or of any of the three persons” (Question 109). The Heidelberg Catechism allows that creatures may be portrayed, but not worshiped or used to serve God (Question 97). Protestant churches differ in their practice.",
          arguments: [
            {
              claim: "The second commandment forbids making images (Exodus 20:4–5).",
              response:
                "God forbade Israel to make any image of him (CCC 2129), yet he himself commanded images for his sanctuary, such as the cherubim of the ark, and the bronze serpent (Exodus 25:18–22; Numbers 21:8–9; CCC 2130). The commandment forbids idols, not every image.",
              authority: "doctrine",
            },
            {
              claim: "God cannot be portrayed, so an image of Christ either divides his natures or tries to depict his divinity.",
              response:
                "In Christ the invisible God became visible: he is “the image of the invisible God” (Colossians 1:15). An icon portrays the incarnate Son as he was seen, which is the basis on which the Second Council of Nicaea defended icons (CCC 2131). St. John of Damascus wrote: “I do not worship matter, I worship the God of matter, who became matter for my sake.”",
              authority: "doctrine",
            },
          ],
          sources: ["heidelberg-catechism", "westminster-larger-catechism"],
        },
        {
          tradition: "islam",
          position:
            "Islam calls people to worship the one God alone and condemns associating anything with him. The Qur'an recalls Abraham's challenge to his father and his people: “What are these statues to which you are so devoted?” (21:52). A hadith in Sahih al-Bukhari reports the Prophet saying that angels “do not enter a house wherein there is a dog or a picture of a living creature” (3225).",
          arguments: [
            {
              claim: "Bowing before statues and images is a form of associating creatures with God.",
              response:
                "Catholics agree that giving worship to any creature would be idolatry. The honor shown to images is “not the adoration due to God alone” (CCC 2132), and the Church teaches that no divinity or power is believed to be in images (Council of Trent, Session 25). The deeper difference is the Incarnation: Catholics believe God became man in Jesus and so can be depicted, which Muslims do not accept (see “Is Jesus truly God?”).",
              authority: "doctrine",
            },
          ],
          sources: ["quran-21-52", "bukhari-3225"],
        },
        {
          tradition: "judaism",
          position:
            "Jewish tradition holds that God has no body or form and forbids worshiping any image (Exodus 20:3–5). Maimonides ruled that even decorative images of gold and silver may not be made, “lest others err and view them as deities,” and forbade decorative sculptures of the human form, while permitting engraved or painted portraits (Mishneh Torah, Foreign Worship and Customs of the Nations 3:10).",
          variations:
            "Jewish thought also distinguishes holy objects from idols. Reflecting on the golden calf, Rabbi Elliot Kukla writes that the problem with idols is that “instead of serving as symbols of holiness, they replace holiness.”",
          arguments: [
            {
              claim: "God forbade Israel to make images, and Christian images break that commandment.",
              response:
                "Catholics affirm that God, who revealed himself to Israel without any visible form, forbade every representation of himself (CCC 2129), a commandment the Church received from Israel. They also note that God commanded images for the sanctuary, such as the cherubim of the ark (Exodus 25:18–22; CCC 2130). Catholics believe that by becoming incarnate the Son of God introduced a new “economy” of images (CCC 2131), a conviction rooted in faith in Jesus that Jews do not share.",
              authority: "doctrine",
            },
          ],
          sources: ["sefaria-mt-images", "mjl-idolatry", "chabad-thirteen-principles"],
        },
      ],
      fathers: [
        {
          name: "St. John of Damascus",
          work: "Apologia Against Those Who Decry Holy Images (c. 730)",
          note: "Defends icons from the Incarnation: “I do not worship matter, I worship the God of matter, who became matter for my sake.”",
          url: "https://sourcebooks.fordham.edu/basis/johndamascus-images.asp",
        },
      ],
    },
  },
];
