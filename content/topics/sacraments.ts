// Learn › The Sacraments.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const sacraments: Topic[] = [
  {
    slug: "what-is-a-sacrament",
    title: "What Is a Sacrament?",
    question: "What is a sacrament?",
    alsoKnownAs: ["Sacraments", "Ex opere operato", "Sacramental grace"],
    category: "sacraments",
    keywords: ["sacrament meaning", "definition of a sacrament", "outward sign of inward grace", "efficacious sign", "grace", "instituted by Christ", "matter and form", "sacramental character", "do sacraments work automatically"],
    summary:
      "A sacrament is a sacred sign, given by Christ to his Church, that actually brings about what it signifies. Water, oil, bread and wine, words, and the laying on of hands are visible signs; through them Christ himself acts by the Holy Spirit to give a share in God's own life, which the Church calls grace. The Catechism defines the sacraments as “efficacious signs of grace, instituted by Christ and entrusted to the Church, by which divine life is dispensed to us.”",
    explanation: [
      "Signs that do what they show: an ordinary sign only points to something, as a road sign points to a city. A sacrament also accomplishes what it points to: the washing of Baptism truly cleanses from sin, and the Eucharist truly nourishes. They bear fruit in those who receive them with the right dispositions (CCC 1131).",
      "Christ is the one who acts: the Church teaches that the sacraments work ex opere operato, “by the very fact of the action's being performed,” because it is Christ who baptizes and Christ who acts in them. So a sacrament celebrated as the Church intends does not depend on the personal holiness of the minister. It is not magic, though: how much a person benefits depends on the faith and openness with which they receive it (CCC 1127–1128).",
      "Rooted in Christ's life: Jesus healed by touch, words, and even mud and water. The Church sees the sacraments as the continuation of those saving actions; St. Leo the Great said that “what was visible in our Savior has passed over into his mysteries” (CCC 1115).",
      "Signs of faith: the sacraments presuppose faith, and by their words and actions they also nourish, strengthen, and express it (CCC 1123). The Church has discerned over the centuries that seven liturgical celebrations are sacraments in the strict sense (CCC 1117).",
      "Three sacraments, Baptism, Confirmation, and Holy Orders, also mark a person permanently with a spiritual “seal,” so they are never repeated (CCC 1121). Sacramentals, such as holy water and blessings, are different: they are signs instituted by the Church that prepare us to receive grace (CCC 1670).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1114–1116", url: ccc("__P30") },
        { paragraphs: "1117–1121", url: ccc("__P31") },
        { paragraphs: "1122–1126", url: ccc("__P32") },
        { paragraphs: "1127–1129", url: ccc("__P33") },
        { paragraphs: "1131–1134", url: ccc("__P35") },
        { paragraphs: "1667–1670", url: ccc("__P58") },
      ],
      scripture: [
        { passage: "Matthew 28:19–20", url: bible("matthew/28") },
        { passage: "Luke 24:47", url: bible("luke/24") },
      ],
      documents: ["catechism-vatican", "sacrosanctum-concilium"],
    },
    resources: ["video-a101-what-is-a-sacrament", "ca-seven-sacraments"],
    related: ["seven-sacraments", "baptism", "what-is-the-eucharist", "mass-holy-water"],
  },
  {
    slug: "seven-sacraments",
    title: "The Seven Sacraments",
    question: "What are the seven sacraments?",
    alsoKnownAs: ["Sacraments of initiation", "Sacraments of healing", "Sacraments at the service of communion"],
    category: "sacraments",
    keywords: ["seven sacraments", "list of sacraments", "Baptism", "Confirmation", "Eucharist", "Confession", "Penance", "Reconciliation", "Anointing of the Sick", "Holy Orders", "Matrimony", "Marriage", "how many sacraments", "why seven"],
    summary:
      "The Catholic Church celebrates seven sacraments: Baptism, Confirmation, the Eucharist, Penance (Confession), the Anointing of the Sick, Holy Orders, and Matrimony. They touch every stage of Christian life, the way birth, growth, nourishment, healing, and a life's calling mark natural life. The Catechism groups them as sacraments of initiation, of healing, and of service to communion.",
    explanation: [
      "Initiation: Baptism, Confirmation, and the Eucharist lay the foundations of every Christian life. In the words the Catechism quotes from Pope Paul VI, the faithful “are born anew by Baptism, strengthened by the sacrament of Confirmation, and receive in the Eucharist the food of eternal life” (CCC 1212).",
      "Healing: Penance and the Anointing of the Sick continue Christ's work as “physician of our souls and bodies” among his own members, who can still be weakened by sin, illness, and suffering (CCC 1420–1421).",
      "Service of communion: Holy Orders and Matrimony are directed to the salvation of others. Through them people serve the Church and build up the People of God (CCC 1534).",
      "One whole: the sacraments form an organic whole, and the Eucharist holds a unique place as the “Sacrament of sacraments”: all the others are ordered to it as to their end (CCC 1211).",
      "Why seven? The Church teaches that all seven were instituted by Christ, and councils from the Second Council of Lyons (1274) to Trent (1547) name the same seven (CCC 1113–1114). Most Protestant churches recognize two, Baptism and the Lord's Supper, and some, such as Baptist churches, call them ordinances rather than sacraments.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1113", url: ccc("__P2Z") },
        { paragraphs: "1210–1211", url: ccc("__P3E") },
        { paragraphs: "1212", url: ccc("__P3F") },
        { paragraphs: "1420–1421", url: ccc("__P45") },
        { paragraphs: "1533–1535", url: ccc("__P4Q") },
      ],
      documents: ["catechism-vatican", "compendium-ccc"],
    },
    resources: ["loyola-seven-sacraments", "ca-seven-sacraments"],
    related: ["what-is-a-sacrament", "baptism", "confirmation", "what-is-the-eucharist", "confession", "marriage-sacrament"],
  },
  {
    slug: "baptism",
    title: "Baptism",
    question: "What is Baptism?",
    alsoKnownAs: ["Christening", "Sacrament of Baptism", "Baptism of desire"],
    category: "sacraments",
    keywords: ["baptism", "christening", "baptized", "born again", "born of water and Spirit", "original sin", "baptismal font", "immersion", "pouring water", "can anyone baptize", "emergency baptism", "is baptism necessary", "baptism of blood"],
    summary:
      "Baptism is the first sacrament and the door to all the others. With water and the words “I baptize you in the name of the Father, and of the Son, and of the Holy Spirit,” a person is freed from sin, reborn as a child of God, made a member of Christ and his Church, and given a share in the Holy Spirit. It marks a Christian permanently, so it is received only once.",
    explanation: [
      "The rite: the essential sign is immersion in water, or water poured three times over the head, with the invocation of the Trinity (CCC 1239–1240). The word “baptize” comes from the Greek for “plunge”: going down into the water and rising signifies dying and rising with Christ (CCC 1214; Romans 6:3–4). The very early Christian manual called the Didache already allows pouring when there is not enough water for immersion.",
      "What it does: Baptism forgives original sin and all personal sins; it makes the baptized a “new creature,” an adopted child of God, a member of the Church, and a sharer in Christ's priesthood (CCC 1263–1268). Some effects of sin, such as illness, death, and the inclination to sin, remain as a lifelong struggle (CCC 1264).",
      "Scripture: Jesus told Nicodemus that “no one can enter the kingdom of God without being born of water and Spirit” (John 3:5), and he sent the apostles to baptize all nations (Matthew 28:19). On Pentecost, Peter told the crowd, “Repent and be baptized, every one of you, in the name of Jesus Christ for the forgiveness of your sins” (Acts 2:38).",
      "Who baptizes: ordinarily a bishop, priest, or deacon. In an emergency anyone, even someone not baptized, can baptize by pouring water and saying the Trinitarian words with the intention of doing what the Church does (CCC 1256, 1284).",
      "Is it necessary? The Church teaches that Baptism is necessary for salvation for those who have heard the Gospel and could ask for it, and it knows no other sure means. But “God has bound salvation to the sacrament of Baptism, but he himself is not bound by his sacraments”: those who die for the faith, catechumens who die before Baptism, and others who sincerely seek God without knowing the Church can be saved (CCC 1257–1260). Children who die without Baptism are entrusted to God's mercy, with hope (CCC 1261).",
      "Other Christians: Baptism with water in the name of the Trinity is recognized by the Catholic Church wherever it is validly given, and it unites all the baptized in a real, though imperfect, communion (CCC 1271).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1213", url: ccc("__P3G") },
        { paragraphs: "1214–1216", url: ccc("__P3H") },
        { paragraphs: "1239–1240", url: ccc("__P3J") },
        { paragraphs: "1256", url: ccc("__P3L") },
        { paragraphs: "1257–1261", url: ccc("__P3M") },
        { paragraphs: "1262–1274", url: ccc("__P3N") },
        { paragraphs: "1275–1284", url: ccc("__P3O") },
      ],
      scripture: [
        { passage: "John 3:5", url: bible("john/3") },
        { passage: "Matthew 28:19", url: bible("matthew/28") },
        { passage: "Acts 2:38", url: bible("acts/2") },
        { passage: "Romans 6:3–4", url: bible("romans/6") },
      ],
      documents: ["canon-law-sacraments"],
    },
    resources: ["video-a101-baptism", "didache"],
    related: ["infant-baptism", "confirmation", "seven-sacraments", "mass-holy-water", "how-to-become-catholic"],
  },
  {
    slug: "infant-baptism",
    title: "Infant Baptism",
    question: "Why do Catholics baptize babies?",
    alsoKnownAs: ["Paedobaptism", "Baptizing children", "Believer's baptism"],
    category: "sacraments",
    keywords: ["infant baptism", "baptize babies", "child baptism", "can a baby have faith", "household baptism", "believer's baptism", "Baptist", "age of accountability", "godparents", "why not wait"],
    summary:
      "Catholics baptize babies because Baptism is a free gift of God's grace that does not depend on anything the person has done, and because children, too, need the new life it gives. Infants are baptized in the faith of the Church, with parents and godparents promising to raise them in that faith. The Church has done this since at least the second century, and probably from the apostles' time.",
    explanation: [
      "A gift, not an achievement: the Catechism says the “sheer gratuitousness of the grace of salvation is particularly manifest in infant Baptism.” Parents who give their children food and care before the children can ask for it also give them the life of grace (CCC 1250–1251).",
      "Whose faith? Baptism is always a sacrament of faith. A baby cannot yet make a personal act of faith, so the child is baptized in the faith of the Church, which the parents and godparents profess and promise to hand on (CCC 1253, 1282). Faith must then grow after Baptism, for children and adults alike (CCC 1254–1255).",
      "Scripture: the New Testament mostly describes converts, adults who heard the apostles' preaching. But it also records whole households being baptized: Lydia “and her household” (Acts 16:15) and the jailer at Philippi, who “and all his family were baptized at once” (Acts 16:33). Peter told the crowd at Pentecost that the promise “is made to you and to your children” (Acts 2:39). Whether those households included infants is not stated; the Catechism says it is “quite possible” (CCC 1252).",
      "History: there is explicit testimony to infant Baptism from the second century on (CCC 1252). The Church's 1980 instruction on infant Baptism notes that Origen and St. Augustine called it a tradition received from the apostles, and that the third-century Apostolic Tradition instructs, “First baptize the children.” Some early writers, notably Tertullian, advised waiting (Pastoralis Actio 4–5).",
      "Other Christians: many Protestant churches also baptize infants, while Baptists and many evangelical and Pentecostal churches baptize only believers. Catholics share with them the conviction that faith and Baptism belong together; their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1250–1255", url: ccc("__P3K") },
        { paragraphs: "1282", url: ccc("__P3O") },
      ],
      scripture: [
        { passage: "Acts 2:38–39", url: bible("acts/2") },
        { passage: "Acts 16:15, 33", url: bible("acts/16") },
        { passage: "Mark 10:13–16", url: bible("mark/10") },
        { passage: "Colossians 2:11–12", url: bible("colossians/2") },
      ],
      documents: ["pastoralis-actio", "canon-law-sacraments"],
    },
    resources: ["ca-early-infant-baptism", "video-a101-baptism"],
    related: ["baptism", "confirmation", "catechumen-or-candidate", "are-catholics-christians"],
    debate: {
      catholicPosition: {
        summary:
          "The Church baptizes infants because Baptism is a free gift of God's grace that children need too. They are baptized in the faith of the Church, which their parents and godparents profess and promise to hand on, and that faith must then grow. The practice is attested from at least the second century (CCC 1250–1255).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Baptists and many evangelical and Pentecostal Christians hold that baptism should follow a personal profession of faith. The Baptist Faith and Message (2000) defines baptism as “the immersion of a believer in water,” an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Savior. Since an infant cannot yet believe, they baptize only those old enough to profess faith.",
          variations:
            "Protestants are divided on this question. Lutheran, Reformed, Anglican, and Methodist churches baptize infants. The Augsburg Confession teaches “that children are to be baptized” (Article IX), and the Westminster Confession that “the infants of one, or both, believing parents, are to be baptized” (28.4).",
          arguments: [
            {
              claim: "In the New Testament, people believed first and then were baptized.",
              response:
                "Catholics agree that adults come to Baptism through faith, and the New Testament mostly describes converts. It also records whole households being baptized (Acts 16:15, 33), and Peter says the promise “is made to you and to your children” (Acts 2:39). Whether those households included infants is not stated; the Catechism calls it “quite possible” (CCC 1252).",
              authority: "apologetic-argument",
            },
            {
              claim: "Baptism is a symbol of a believer's own faith, so it cannot mean anything for someone who cannot yet believe.",
              response:
                "Catholics hold that Baptism is first God's action, not ours: God “saved us through the bath of rebirth and renewal by the holy Spirit” (Titus 3:5). “The sheer gratuitousness of the grace of salvation is particularly manifest in infant Baptism” (CCC 1250). The child is baptized in the faith of the Church (CCC 1253).",
              authority: "doctrine",
            },
            {
              claim: "Infant baptism produces people who are baptized but never come to personal faith.",
              response:
                "Catholics share this concern. The Church teaches that faith must grow after Baptism and that parents and godparents take on the duty of helping it grow (CCC 1254–1255). The remedy the Church proposes is formation in faith, not withholding the gift.",
              authority: "pastoral-reflection",
            },
          ],
          sources: ["baptist-faith-message", "augsburg-confession", "westminster-confession"],
        },
      ],
    },
  },
  {
    slug: "confirmation",
    title: "Confirmation",
    question: "What is Confirmation?",
    alsoKnownAs: ["Chrismation", "Sacrament of Confirmation", "Be sealed with the Gift of the Holy Spirit"],
    category: "sacraments",
    keywords: ["confirmation", "confirmed", "chrism", "anointing", "laying on of hands", "confirmation name", "sponsor", "gifts of the Holy Spirit", "age of confirmation", "bishop", "Pentecost", "seal of the Spirit"],
    summary:
      "Confirmation completes the grace of Baptism. Through the laying on of hands and the anointing with sacred oil called chrism, the baptized receive the Holy Spirit in a special way, as the apostles did at Pentecost, and are strengthened to live and share their faith as witnesses to Christ. Like Baptism, it marks a person permanently and is received only once.",
    explanation: [
      "The rite: in the Latin Church, the bishop anoints the forehead with chrism while laying on his hand and saying, “Be sealed with the Gift of the Holy Spirit” (CCC 1300). The anointing recalls the name “Christian,” which means “anointed,” like Christ himself (CCC 1289).",
      "Scripture: when Samaria accepted the Gospel, the apostles sent Peter and John, who prayed for the new believers and “laid hands on them and they received the holy Spirit” (Acts 8:14–17). The Church sees in this laying on of hands the origin of the sacrament (CCC 1288).",
      "What it does: Confirmation roots us more deeply as children of God, unites us more firmly to Christ, increases the gifts of the Holy Spirit, binds us more closely to the Church, and gives special strength to spread and defend the faith (CCC 1303). Christian initiation is incomplete without Confirmation and the Eucharist (CCC 1306).",
      "When: in the Eastern Churches, including Eastern Catholic Churches, the priest confirms (“chrismates”) immediately after Baptism, even for infants, with chrism consecrated by the bishop. In the Latin Church, Confirmation is ordinarily given by the bishop at about the age of discretion, unless the bishops' conference sets another age (CCC 1290, 1312–1313, 1318; canon 891). Ages and the order of the sacraments therefore vary from diocese to diocese. Adults becoming Catholic are usually confirmed by the priest who receives them, at the same celebration (CCC 1312).",
      "Preparing: a candidate who has reached the age of reason should profess the faith, be in the state of grace, want to receive the sacrament, and be ready to be Christ's disciple and witness (CCC 1319). It is not a graduation: grace given in Baptism “does not need ‘ratification’ to become effective,” and spiritual maturity is not a matter of age (CCC 1308).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1285", url: ccc("__P3P") },
        { paragraphs: "1286–1290", url: ccc("__P3Q") },
        { paragraphs: "1300", url: ccc("__P3R") },
        { paragraphs: "1302–1305", url: ccc("__P3S") },
        { paragraphs: "1306–1308", url: ccc("__P3T") },
        { paragraphs: "1312–1314", url: ccc("__P3U") },
        { paragraphs: "1315–1321", url: ccc("__P3V") },
      ],
      scripture: [
        { passage: "Acts 8:14–17", url: bible("acts/8") },
        { passage: "Acts 2:1–4", url: bible("acts/2") },
      ],
      documents: ["canon-law-eucharist"],
    },
    resources: ["video-a101-confirmation", "loyola-seven-sacraments"],
    related: ["who-is-the-holy-spirit", "baptism", "seven-sacraments", "how-to-become-catholic"],
  },
  {
    slug: "what-is-the-eucharist",
    title: "The Eucharist",
    question: "What is the Eucharist?",
    alsoKnownAs: ["Holy Communion", "Blessed Sacrament", "Lord's Supper", "Breaking of the bread"],
    category: "sacraments",
    keywords: ["Eucharist", "what does Eucharist mean", "thanksgiving", "Holy Communion", "Blessed Sacrament", "Lord's Supper", "breaking of bread", "source and summit", "sacrament of sacraments", "Last Supper", "Holy Sacrifice"],
    summary:
      "The Eucharist is the sacrament of Christ's Body and Blood, which Jesus instituted at the Last Supper. Celebrated at every Mass, it is at once a memorial of his death and Resurrection, the sacramental offering of his one sacrifice, and a sacred meal in which Catholics receive Christ himself. The Church calls it “the source and summit of the Christian life,” because it contains Christ, the whole good of the Church.",
    explanation: [
      "The names: “Eucharist” comes from the Greek word for thanksgiving. It is also called the Lord's Supper, the Breaking of Bread, the Holy Sacrifice, Holy Communion, the Most Blessed Sacrament, and Holy Mass, and each name brings out an aspect of it (CCC 1328–1332).",
      "Christ is truly present: Catholics believe that by the consecration the bread and wine become the Body and Blood of Christ, so that he is present whole and entire under their appearances. This is explained in “What is the Real Presence?” and “What happens at the consecration?”",
      "A sacrifice: the Eucharist makes present the one sacrifice Christ offered on the cross, without repeating it. This is explained in “Is the Mass a sacrifice?”",
      "A meal of communion: Jesus said, “Whoever eats my flesh and drinks my blood remains in me and I in him” (John 6:56). Communion deepens our union with Christ, separates us from sin, and unites us more closely to the Church (CCC 1391–1396). As St. Paul wrote, “Because the loaf of bread is one, we, though many, are one body” (1 Corinthians 10:17).",
      "It completes Christian initiation: those baptized and confirmed take part in the Lord's own sacrifice with the whole community (CCC 1322). All the other sacraments are ordered to it (CCC 1324).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1322–1323", url: ccc("__P3W") },
        { paragraphs: "1324–1327", url: ccc("__P3X") },
        { paragraphs: "1328–1332", url: ccc("__P3Y") },
        { paragraphs: "1406–1419", url: ccc("__P44") },
      ],
      scripture: [
        { passage: "Luke 22:14–20", url: bible("luke/22") },
        { passage: "John 6:51–58", url: bible("john/6") },
        { passage: "1 Corinthians 10:16–17", url: bible("1corinthians/10") },
      ],
      documents: ["sacrosanctum-concilium", "ecclesia-de-eucharistia", "usccb-real-presence"],
    },
    resources: ["ca-christ-in-the-eucharist", "video-barron-real-presence"],
    related: ["real-presence", "mass-as-sacrifice", "who-can-receive-communion", "what-happens-at-mass", "mass-communion"],
  },
  {
    slug: "real-presence",
    title: "The Real Presence",
    question: "What is the Real Presence of Jesus in the Eucharist?",
    alsoKnownAs: ["Transubstantiation", "Eucharistic presence"],
    category: "sacraments",
    keywords: [
      "Eucharist",
      "Communion",
      "Holy Communion",
      "host",
      "bread and wine",
      "body and blood",
      "transubstantiation",
      "Real Presence",
      "is it a symbol",
      "Blessed Sacrament",
      "adoration",
      "tabernacle",
      "Lord’s Supper",
      "John 6",
    ],
    summary:
      "Catholics believe that in the Eucharist the bread and wine truly become the Body and Blood of Jesus Christ, not merely a symbol of him. Although they still look and taste like bread and wine, Christ himself is present, whole and entire: body, blood, soul, and divinity. This is why the Church calls the Eucharist “the source and summit of the Christian life.”",
    explanation: [
      "Jesus is present to his Church in many ways: in Scripture, in prayer, in the poor, and in all the sacraments. But the Church teaches that he is present “most especially” in the Eucharist. This presence is called “real” not because the others are unreal, but because it is presence in the fullest sense: Christ is “truly, really, and substantially” present.",
      "The Council of Trent named this change transubstantiation. At the consecration, the whole substance of the bread and wine becomes the substance of Christ’s Body and Blood, while the appearances of bread and wine remain. Christ stays present as long as those appearances remain, and he is wholly present in every part.",
      "Catholics root this belief in the words of Jesus: “I am the living bread that came down from heaven… the bread that I will give is my flesh for the life of the world” (John 6:51), and at the Last Supper, “This is my body that is for you” (1 Corinthians 11:24). St. Paul warns that anyone who eats “without discerning the body” brings judgment on himself (1 Corinthians 11:29).",
      "Because Christ is present, Catholics genuflect toward the tabernacle, where the Eucharist is kept, spend time in prayer before it in adoration, and prepare carefully before receiving Communion.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1324", url: ccc("__P3X") },
        { paragraphs: "1373–1381", url: ccc("__P41") },
        { paragraphs: "1385", url: ccc("__P42") },
      ],
      scripture: [
        { passage: "John 6:22–71", url: bible("john/6") },
        { passage: "Luke 22:14–20", url: bible("luke/22") },
        { passage: "1 Corinthians 11:23–29", url: bible("1corinthians/11") },
      ],
      documents: ["usccb-real-presence", "ecclesia-de-eucharistia"],
    },
    resources: ["ca-christ-in-the-eucharist", "video-barron-real-presence"],
    related: ["what-is-the-eucharist", "mass-as-sacrifice", "mass-consecration", "what-happens-at-mass", "how-to-become-catholic"],
    debate: {
      catholicPosition: {
        summary:
          "In the Eucharist, Jesus Christ is truly, really, and substantially present, body and blood, soul and divinity, under the appearances of bread and wine. The Council of Trent taught that the whole substance of the bread and wine is changed into his Body and Blood, a change the Church “has fittingly and properly called transubstantiation” (CCC 1376).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants agree that Christ instituted the Lord's Supper and commanded his Church to celebrate it, and many speak of receiving Christ in it. Most reject transubstantiation, and they explain Christ's presence in different ways: from a true bodily presence to a spiritual presence received by faith to a memorial of his death.",
          variations:
            "The differences are large. Lutherans teach that “the Body and Blood of Christ are truly present” in the Supper (Augsburg Confession X) and that the bread and wine “are the true body and blood of Christ,” while rejecting transubstantiation (Smalcald Articles III.6). The Reformed teach that believers receive Christ “really, but spiritually,” by faith, and that his body is not “corporally or carnally” in the bread and wine (Westminster 29.7). Baptists describe the Supper as “a symbolic act of obedience” in which the church memorializes Christ's death and anticipates his return (Baptist Faith and Message, VII).",
          arguments: [
            {
              claim: "Jesus spoke figuratively, as when he said “I am the gate” or “I am the vine.” “This is my body” means “This represents my body.”",
              response:
                "Catholics point to how Jesus answered those who took him literally in John 6. He did not soften his words but repeated them: “unless you eat the flesh of the Son of Man and drink his blood, you do not have life within you” (John 6:53), and many disciples “returned to their former way of life” (John 6:66). Paul warns that whoever eats the bread unworthily “will have to answer for the body and blood of the Lord” (1 Corinthians 11:27).",
              authority: "apologetic-argument",
            },
            {
              claim: "Jesus himself said, “the flesh is of no avail” (John 6:63), so he meant spiritual eating.",
              response:
                "In the same verse Jesus says, “It is the spirit that gives life… The words I have spoken to you are spirit and life.” Catholics read this as contrasting a merely natural, unbelieving understanding with faith, not as denying his earlier words; he speaks of “the flesh,” not “my flesh.” The Church receives the Eucharist as a mystery accepted in faith (CCC 1381).",
              authority: "apologetic-argument",
            },
            {
              claim: "Transubstantiation depends on medieval philosophy that the Bible does not teach.",
              response:
                "The Church distinguishes the reality from the term. Belief that the Eucharist is Christ's body is witnessed long before the medieval period, for example by Ignatius of Antioch and Justin Martyr (see below). The Council of Trent taught that the change of substance is real and that transubstantiation is a fitting and proper name for it (CCC 1376).",
              authority: "doctrine",
            },
          ],
          sources: ["augsburg-confession", "smalcald-articles", "westminster-confession", "baptist-faith-message"],
        },
      ],
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Smyrnaeans, Chapter 7 (c. 107)",
          note: "Warns against those who “confess not the Eucharist to be the flesh of our Saviour Jesus Christ.”",
          url: "https://www.newadvent.org/fathers/0109.htm",
        },
        {
          name: "St. Justin Martyr",
          work: "First Apology, Chapter 66 (c. 155)",
          note: "“Not as common bread and common drink do we receive these,” but as the flesh and blood of the incarnate Jesus.",
          url: "https://www.newadvent.org/fathers/0126.htm",
        },
      ],
    },
  },
  {
    slug: "mass-as-sacrifice",
    title: "The Mass as Sacrifice",
    question: "Is the Mass a sacrifice?",
    alsoKnownAs: ["Sacrifice of the Mass", "Eucharistic sacrifice", "Holy Sacrifice of the Mass", "Re-presentation of Calvary"],
    category: "sacraments",
    keywords: ["is the Mass a sacrifice", "sacrifice of the Mass", "re-sacrifice", "re-crucify", "crucified again", "is Jesus sacrificed again", "once for all", "Hebrews 10", "Calvary", "unbloody sacrifice", "propitiatory", "memorial", "anamnesis", "Malachi 1:11", "Council of Trent", "Protestant objection"],
    summary:
      "Yes: Catholics believe the Mass is a true sacrifice, but not a new or additional one. Christ offered himself once for all on the cross, and that sacrifice can never be repeated. At Mass the same sacrifice is made sacramentally present, so that the Church can offer it and receive its fruits. In the Church's words, the sacrifice of the cross and the sacrifice of the Eucharist are “one single sacrifice”; only the manner of offering is different.",
    explanation: [
      "Once for all: the Letter to the Hebrews insists that Christ's offering is complete. Unlike the priests of the old covenant, who offered sacrifices daily, “he did that once for all when he offered himself” (Hebrews 7:27), and “by one offering he has made perfect forever those who are being consecrated” (Hebrews 10:14). The Catholic Church teaches this too: Christ's sacrifice “is unique; it completes and surpasses all other sacrifices” (CCC 614).",
      "Made present, not repeated: Christ is not crucified again, does not suffer again, and does not die again at Mass. The Catechism explains that the Eucharist is a sacrifice “because it re-presents (makes present) the sacrifice of the cross, because it is its memorial and because it applies its fruit” (CCC 1366). St. John Paul II put it plainly: “The Mass makes present the sacrifice of the Cross; it does not add to that sacrifice nor does it multiply it.” What is repeated is the celebration of the memorial (Ecclesia de Eucharistia 12).",
      "One victim, one priest: the Council of Trent taught that “the victim is one and the same, the same now offering by the ministry of priests, who then offered Himself on the cross, the manner alone of offering being different.” On the cross Christ offered himself in a bloody manner; in the Mass the same Christ is offered in an unbloody manner (CCC 1367, quoting Trent). The priest acts in the person of Christ; Christ himself is the one who offers (CCC 1410).",
      "A memorial that makes present: in the Bible, a memorial is more than remembering. When Israel celebrated the Passover, the events of the Exodus became present to each generation. In the same way, when the Church does what Jesus commanded, “do this in memory of me” (Luke 22:19), his Passover becomes present (CCC 1362–1364). The words of institution are themselves sacrificial: his Body “given for you,” his Blood “shed for you” (Luke 22:19–20; CCC 1365).",
      "The Church's offering: because the Church is Christ's Body, she is united with her Head's offering. The faithful offer their praise, sufferings, prayer, and work with Christ (CCC 1368), and the sacrifice is offered for the living and the dead (CCC 1371). This is why the Mass can be offered for an intention.",
      "Early witness: the prophet Malachi foretold that among the nations incense offerings and “a pure offering” would be made to God's name “everywhere” (Malachi 1:11). The Didache, a very early Christian manual, applies that verse to the Sunday Eucharist, telling Christians to confess their sins “that your sacrifice may be pure” (Didache 14).",
      "Where Christians differ: Protestant traditions reject the sacrifice of the Mass, but not all for the same reasons, and they understand Christ's presence in the Eucharist in different ways. Their views, with sources, and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "613–614", url: ccc("__P1O") },
        { paragraphs: "1128", url: ccc("__P33") },
        { paragraphs: "1330", url: ccc("__P3Y") },
        { paragraphs: "1362–1372", url: ccc("__P41") },
        { paragraphs: "1410, 1414", url: ccc("__P44") },
      ],
      scripture: [
        { passage: "Hebrews 7:23–27", url: bible("hebrews/7") },
        { passage: "Hebrews 9:24–28", url: bible("hebrews/9") },
        { passage: "Hebrews 10:10–14", url: bible("hebrews/10") },
        { passage: "Luke 22:19–20", url: bible("luke/22") },
        { passage: "1 Corinthians 10:16–21", url: bible("1corinthians/10") },
        { passage: "Malachi 1:11", url: bible("malachi/1") },
      ],
      documents: ["ecclesia-de-eucharistia", "trent-session-22", "sacrosanctum-concilium"],
    },
    resources: ["stpaul-re-presentation-of-calvary", "ca-early-church-sacrifice", "didache"],
    related: ["why-did-jesus-die", "mass-eucharistic-prayer", "real-presence", "mass-in-scripture", "mass-prayer-over-the-offerings"],
    debate: {
      catholicPosition: {
        summary:
          "The Mass is a true sacrifice, but not a new or repeated one. It makes sacramentally present the one sacrifice Christ offered on the cross: “the victim is one and the same,” and only the manner of offering is different (Council of Trent; CCC 1367).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestant confessions reject the sacrifice of the Mass because they hold that Christ's one offering on the cross, made “once for all” (Hebrews 10:10), cannot be offered again and needs no addition. The Westminster Confession teaches that in the Lord's Supper “Christ is not offered up to his Father; nor any real sacrifice made at all,” but there is “only a commemoration of that one offering” and “a spiritual oblation of all possible praise unto God” (29.2).",
          variations:
            "Their reasons differ. Lutherans kept the Mass and confess that Christ's Body and Blood are truly present (Augsburg Confession X, XXIV), but they objected to the belief that the Mass takes away sins by the outward act, which they held contrary to Christ's offering once for all and to justification by faith (Article XXIV). The Reformed hold a spiritual rather than bodily presence (Westminster 29.7), and Baptists a memorial of Christ's death (Baptist Faith and Message, VII).",
          arguments: [
            {
              claim: "Hebrews says Christ offered himself “once for all.” A sacrifice offered at every Mass contradicts that.",
              response:
                "Catholics agree that Christ's sacrifice is unique and complete (CCC 614). The Mass does not repeat or add to it: “The Mass makes present the sacrifice of the Cross; it does not add to that sacrifice nor does it multiply it” (Ecclesia de Eucharistia 12). The Eucharist is a sacrifice “because it re-presents (makes present) the sacrifice of the cross” (CCC 1366).",
              authority: "doctrine",
            },
            {
              claim: "Making the Mass a sacrifice takes glory from the cross and makes salvation depend on a ritual.",
              response:
                "The Mass takes nothing from the cross: it is that same sacrifice made present, so that its fruits are received (Council of Trent, Session 22; CCC 1366–1367). Its benefits are received by those who take part with faith and the right dispositions; the Church does not teach that it works mechanically (CCC 1128).",
              authority: "doctrine",
            },
            {
              claim: "Calling the minister a priest denies the priesthood of all believers.",
              response:
                "The Church teaches both: “the whole community of believers is, as such, priestly” (CCC 1546), and the ministerial priesthood of bishops and priests and the common priesthood of the faithful each participate “in its own proper way, in the one priesthood of Christ” (CCC 1547). The priest acts in the person of Christ, who is the one who offers (CCC 1410).",
              authority: "doctrine",
            },
          ],
          sources: ["westminster-confession", "augsburg-confession", "baptist-faith-message"],
        },
      ],
      fathers: [
        {
          name: "The Didache",
          work: "Chapter 14 (late first or early second century)",
          note: "Calls the Sunday Eucharist a “sacrifice” and applies Malachi's “pure sacrifice” to it.",
          url: "https://www.newadvent.org/fathers/0714.htm",
        },
      ],
    },
  },
  {
    slug: "who-can-receive-communion",
    title: "Who Can Receive Communion",
    question: "Who can receive Communion?",
    alsoKnownAs: ["Can non-Catholics receive Communion?", "Communion guidelines", "Intercommunion", "Worthy reception"],
    category: "sacraments",
    keywords: ["who can receive communion", "can I receive communion", "can Protestants receive communion", "can Orthodox receive communion", "state of grace", "mortal sin and communion", "first communion", "divorced and remarried communion", "closed communion", "open communion", "canon 844", "canon 916", "unity"],
    summary:
      "Catholics who are in the state of grace, meaning not conscious of unconfessed grave sin, and who have kept the one-hour fast may receive Communion at Mass. Because receiving Communion expresses full unity of faith and life with the Church, other Christians and people of other faiths ordinarily do not receive. Orthodox and other Eastern Christians may receive if they ask and are properly disposed, and in grave necessity other Christians who share the Catholic faith in the Eucharist may be admitted.",
    explanation: [
      "Why there are conditions: Communion is not only a personal encounter with Christ; it also “makes the Church.” Those who receive are united to Christ and to all the faithful in one body (CCC 1396). St. Paul warned that anyone who eats and drinks “without discerning the body” brings judgment on himself (1 Corinthians 11:29). Saying “Amen” to “The Body of Christ” is a profession of faith in Christ's presence and of communion with the Church.",
      "Catholics: any baptized person not prohibited by law can and must be admitted (canon 912). Anyone who desires to receive must be in the state of grace; someone aware of having sinned mortally must first receive absolution in Confession (CCC 1415; canon 916, which allows one narrow exception explained in “How do I receive Communion?”). Children receive after preparation and first Confession (canons 913–914). Those under certain penalties, or obstinately persevering in manifest grave sin, are not to be admitted (canon 915). Catholics divorced and civilly remarried without an annulment are not separated from the Church, but the Catechism says they cannot receive Communion (CCC 1665).",
      "Orthodox and other Eastern Christians: their Churches have true sacraments, above all the priesthood and the Eucharist, so Catholic ministers may give them Communion if they ask on their own and are properly disposed (canon 844 §3; CCC 1399). The U.S. bishops ask them to respect the discipline of their own Churches.",
      "Other Christians: the communities that came from the Reformation, the Catechism says, “have not preserved the proper reality of the Eucharistic mystery in its fullness, especially because of the absence of the sacrament of Holy Orders,” so intercommunion with them is not possible (CCC 1400). In danger of death or another grave necessity judged by the bishop, a baptized Christian who cannot reach their own minister, asks on their own, shares the Catholic faith in the sacrament, and is properly disposed may receive (canon 844 §4; CCC 1401).",
      "People who are not baptized: Communion presupposes Baptism (canon 912), so they do not receive, but they are warmly welcome at Mass and invited to pray.",
      "Other Christian churches draw the boundaries of the Lord's table in different ways. The Catholic practice is not a judgment on anyone's sincerity; it reflects the belief that sharing Communion should express a unity in faith that does not yet fully exist, and the Church prays for the day when all Christians can share one table (CCC 1398). Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1384–1401", url: ccc("__P42") },
        { paragraphs: "1415", url: ccc("__P44") },
        { paragraphs: "1665", url: ccc("__P57") },
      ],
      scripture: [
        { passage: "1 Corinthians 10:16–17", url: bible("1corinthians/10") },
        { passage: "1 Corinthians 11:27–29", url: bible("1corinthians/11") },
      ],
      documents: ["usccb-communion-guidelines", "canon-law-eucharist", "canon-law-sacraments", "unitatis-redintegratio"],
    },
    resources: ["ec-disposed-to-receive"],
    related: ["how-to-receive-communion", "non-catholics-at-mass", "mortal-and-venial-sin", "confession", "what-is-the-eucharist"],
    debate: {
      catholicPosition: {
        summary:
          "Receiving Communion expresses both faith in Christ's presence and full communion with the Church. Catholics in the state of grace may receive. Other Christians ordinarily do not, except that Orthodox and other Eastern Christians may receive if they ask and are properly disposed, and in grave necessity other baptized Christians who share the Catholic faith in the sacrament may be admitted (CCC 1398–1401; canon 844).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Protestants agree that the Lord's Supper is for believers who receive it worthily (1 Corinthians 11:27–29), but they draw its boundaries differently. Many churches welcome baptized believers from other denominations to the table; others admit only their own members or those examined in the faith.",
          variations:
            "The Augsburg Confession says that in Lutheran churches “none are admitted except they be first examined” (Article XXIV). The Westminster Confession holds that “all ignorant and ungodly persons” are “unworthy of the Lord's table” (29.8). The Baptist Faith and Message makes baptism, which it defines as the immersion of a believer, “prerequisite to the privileges of church membership and to the Lord's Supper” (VII).",
          arguments: [
            {
              claim: "The table belongs to Christ, not to the Church; turning fellow believers away divides the Body of Christ.",
              response:
                "Catholics feel the pain of division too: “The more painful the experience of the divisions in the Church which break the common participation in the table of the Lord, the more urgent are our prayers” for unity (CCC 1398). They believe Communion is a sign of unity already complete in faith, sacraments, and ministry, so sharing it before that unity exists would signify something not yet true (CCC 1400). It is not a judgment on anyone's faith or sincerity.",
              authority: "doctrine",
            },
            {
              claim: "If Catholics accept Protestants as Christians, they should share Communion with them.",
              response:
                "The Church teaches that baptized believers in Christ are in “a certain, although imperfect, communion” with the Catholic Church (CCC 838). Eucharistic communion expresses full communion. Because communities that came from the Reformation lack the sacrament of Holy Orders, the Church judges that they “have not preserved the proper reality of the Eucharistic mystery in its fullness,” so intercommunion is not possible (CCC 1400), apart from the cases of grave necessity in canon 844 §4.",
              authority: "doctrine",
            },
          ],
          sources: ["augsburg-confession", "westminster-confession", "baptist-faith-message"],
        },
      ],
      fathers: [
        {
          name: "St. Justin Martyr",
          work: "First Apology, Chapter 66 (c. 155)",
          note: "Only those who believe what the Church teaches, have been baptized, and live as Christ commanded may receive the Eucharist.",
          url: "https://www.newadvent.org/fathers/0126.htm",
        },
      ],
    },
  },
  {
    slug: "confession",
    title: "Confession",
    question: "What is Confession?",
    alsoKnownAs: ["Sacrament of Penance", "Sacrament of Reconciliation", "Penance and Reconciliation"],
    category: "sacraments",
    keywords: ["confession", "reconciliation", "penance", "forgiveness of sins", "absolution", "going to confession", "how often confession", "once a year", "confessional", "sacrament of healing", "prodigal son", "mercy"],
    summary:
      "Confession is the sacrament in which Christ forgives sins committed after Baptism and reconciles the sinner with God and with the Church. The penitent is sorry for their sins, tells them to a priest, and accepts a penance; the priest, acting in Christ's name, gives absolution. It goes by several names: the sacrament of Penance, of Reconciliation, of conversion, and of forgiveness.",
    explanation: [
      "Why it exists: new life in Christ, given in Baptism, can be weakened and even lost by sin. Christ, “physician of our souls and bodies,” gave his Church this sacrament of healing so that his work of forgiveness continues among his own members (CCC 1420–1421, 1446).",
      "Its institution: on Easter evening the risen Jesus breathed on the apostles and said, “Receive the holy Spirit. Whose sins you forgive are forgiven them, and whose sins you retain are retained” (John 20:22–23; CCC 1485). Why the Church understands this as confession to a priest is explained in “Why confess to a priest?”",
      "Its parts: the penitent's acts of contrition, confession, and satisfaction, and God's action through the priest's absolution. These two elements, the Church says, are “equally essential” (CCC 1448). The step-by-step practice is in “How do I go to Confession?”",
      "What it does: it restores us to God's grace and friendship, reconciles us with the Church, takes away the eternal punishment of mortal sin, and brings peace of conscience and strength for the Christian struggle (CCC 1468–1470, 1496).",
      "How often: Catholics must confess any serious sins at least once a year (CCC 1457; canon 989), and anyone conscious of mortal sin should go before receiving Communion. Confessing everyday faults is not strictly required but is strongly recommended, because it helps us grow (CCC 1458).",
      "The seal: a priest may never reveal, for any reason, what is told to him in confession (CCC 1467; canon 983).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1420–1421", url: ccc("__P45") },
        { paragraphs: "1422", url: ccc("__P46") },
        { paragraphs: "1423–1424", url: ccc("__P47") },
        { paragraphs: "1440–1449", url: ccc("__P4C") },
        { paragraphs: "1468–1470", url: ccc("__P4F") },
        { paragraphs: "1485–1498", url: ccc("__P4I") },
      ],
      scripture: [
        { passage: "John 20:19–23", url: bible("john/20") },
        { passage: "Luke 15:11–32", url: bible("luke/15") },
        { passage: "2 Corinthians 5:17–20", url: bible("2corinthians/5") },
      ],
      documents: ["canon-law-penance", "reconciliatio-et-paenitentia"],
    },
    resources: ["video-ascension-need-confession", "ascension-how-to-go-to-confession"],
    related: ["how-to-go-to-confession", "why-confess-to-a-priest", "mortal-and-venial-sin", "returning-to-the-church"],
  },
  {
    slug: "why-confess-to-a-priest",
    title: "Why Confess to a Priest?",
    question: "Why do Catholics confess their sins to a priest?",
    alsoKnownAs: ["Why not confess directly to God?", "Auricular confession", "Power of the keys"],
    category: "sacraments",
    keywords: ["why confess to a priest", "confess directly to God", "only God can forgive sins", "John 20:23", "binding and loosing", "keys of the kingdom", "James 5:16", "seal of confession", "can a priest tell", "one mediator", "Protestant view of confession"],
    summary:
      "Catholics agree that only God forgives sins. They confess to a priest because Christ chose to share that forgiving power with his apostles, saying, “Whose sins you forgive are forgiven them,” and the apostles handed this ministry on to bishops and priests. Through the priest, Christ himself forgives, and the sinner also hears, out loud and with certainty, that they are forgiven and reconciled with the Church.",
    explanation: [
      "Only God forgives sins: the Catechism says so plainly (CCC 1441). When Jesus forgave the paralytic, his critics asked, “Who but God alone can forgive sins?” (Mark 2:7), and Jesus showed that “the Son of Man has authority to forgive sins on earth” (Mark 2:10). The crowds then “glorified God who had given such authority to human beings” (Matthew 9:8).",
      "Christ shared the power: on Easter evening Jesus breathed on the apostles and said, “Receive the holy Spirit. Whose sins you forgive are forgiven them, and whose sins you retain are retained” (John 20:22–23). To forgive or retain, the apostles had to know which sins were being confessed. Jesus also gave Peter, and then all the apostles, the power to “bind” and “loose” (Matthew 16:19; 18:18; CCC 1444–1445). St. Paul calls this “the ministry of reconciliation” (2 Corinthians 5:18).",
      "Handed on: bishops, as successors of the apostles, and priests, as their co-workers, exercise this ministry by virtue of Holy Orders (CCC 1461–1462). The priest is “not the master of God's forgiveness, but its servant” (CCC 1466).",
      "Sin is never only private: sin wounds the Church as well as offending God, so forgiveness includes reconciliation with the Church, which the priest represents (CCC 1440, 1443–1445). The early Christians confessed their sins in the assembly (James 5:16; Didache 4); the form of the sacrament has changed over the centuries, but its basic structure has not (CCC 1447–1448).",
      "Can't I confess directly to God? Yes, and Catholics should, every day. Perfect contrition, sorrow out of love for God, already obtains forgiveness even of mortal sins when it includes the resolution to go to Confession as soon as possible (CCC 1452). The sacrament does not compete with private prayer; it is the ordinary way Christ gives for grave sins (CCC 1484; canon 960).",
      "The seal: everything said in confession is protected by the sacramental seal, which “admits of no exceptions” (CCC 1467; canon 983).",
      "Where Christians differ: many Protestants hold that Christians should confess directly to God, while Lutherans retain private absolution. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1440–1449", url: ccc("__P4C") },
        { paragraphs: "1452", url: ccc("__P4D") },
        { paragraphs: "1461–1467", url: ccc("__P4E") },
        { paragraphs: "1484", url: ccc("__P4H") },
      ],
      scripture: [
        { passage: "John 20:21–23", url: bible("john/20") },
        { passage: "Matthew 9:1–8", url: bible("matthew/9") },
        { passage: "Matthew 16:19", url: bible("matthew/16") },
        { passage: "Matthew 18:18", url: bible("matthew/18") },
        { passage: "2 Corinthians 5:18–20", url: bible("2corinthians/5") },
        { passage: "James 5:16", url: bible("james/5") },
      ],
      documents: ["canon-law-penance", "reconciliatio-et-paenitentia"],
    },
    resources: ["ascension-why-confess-to-a-priest", "video-a101-seal-of-confession"],
    related: ["confession", "how-to-go-to-confession", "bishops-priests-deacons", "sola-scriptura"],
    debate: {
      catholicPosition: {
        summary:
          "Only God forgives sins. Christ shared that power with his apostles (John 20:22–23), and their successors, bishops and priests, exercise it in the sacrament of Penance. Through the priest's absolution Christ himself forgives the sinner and reconciles him with the Church. Grave sins are ordinarily forgiven through this sacrament (CCC 1441–1445, 1461–1462, 1484).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Most Protestants hold that Christians should confess their sins directly to God, trusting Christ, the “one mediator” (1 Timothy 2:5), and his promise that God “is faithful and just and will forgive our sins” (1 John 1:9). The Westminster Confession teaches that “every man is bound to make private confession of his sins to God,” and to confess to those he has wronged or scandalized (15.6).",
          variations:
            "Practice varies. Lutherans teach that “Private Absolution ought to be retained in the churches, although in confession an enumeration of all sins is not necessary” (Augsburg Confession, Article XI).",
          arguments: [
            {
              claim: "Only God can forgive sins.",
              response:
                "Catholics agree (CCC 1441). Yet Jesus showed that “the Son of Man has authority to forgive sins on earth” (Mark 2:10), the crowds “glorified God who had given such authority to human beings” (Matthew 9:8), and on Easter evening he told the apostles, “Whose sins you forgive are forgiven them” (John 20:23). The priest forgives not by his own power but in Christ's name.",
              authority: "doctrine",
            },
            {
              claim: "Christ is the one mediator between God and us; a priest puts a man in between.",
              response:
                "Catholics affirm 1 Timothy 2:5. The priest is not a second mediator but Christ's minister: he is “not the master of God's forgiveness, but its servant” (CCC 1466). Paul writes that God has reconciled us to himself through Christ and “given us the ministry of reconciliation” (2 Corinthians 5:18). Catholics also confess to God directly every day; perfect contrition already obtains forgiveness when it includes the resolution to go to Confession (CCC 1452).",
              authority: "doctrine",
            },
            {
              claim: "John 20:23 was given to the apostles, not to priests who came later.",
              response:
                "The Church teaches that bishops, as successors of the apostles, and priests, as their co-workers, exercise this ministry by virtue of Holy Orders (CCC 1461–1462). Early Christians confessed their sins in the assembly (Didache 4), and in the third century St. Cyprian praises those who “confess this very thing to God's priests” even when their sins were only of thought (On the Lapsed 28).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "augsburg-confession"],
        },
      ],
      fathers: [
        {
          name: "The Didache",
          work: "Chapter 4 (late first or early second century)",
          note: "“In the church you shall acknowledge your transgressions.”",
          url: "https://www.newadvent.org/fathers/0714.htm",
        },
        {
          name: "St. Cyprian of Carthage",
          work: "On the Lapsed, Section 28 (251)",
          note: "Praises those who confess even sins of thought “to God's priests” and seek the remedy.",
          url: "https://www.newadvent.org/fathers/050703.htm",
        },
      ],
    },
  },
  {
    slug: "how-to-go-to-confession",
    title: "How to Go to Confession",
    question: "How do I go to Confession?",
    alsoKnownAs: ["Examination of conscience", "Act of Contrition", "Steps of Confession"],
    category: "sacraments",
    keywords: ["how to go to confession", "what to say in confession", "bless me Father", "examination of conscience", "act of contrition", "penance", "absolution", "first confession in years", "nervous about confession", "face to face or behind the screen", "forgot a sin"],
    summary:
      "Prepare by asking the Holy Spirit's help and examining your conscience. In the confessional, the priest greets you; you make the Sign of the Cross, say how long it has been since your last confession, and tell him your sins, especially any serious ones. He may offer advice and gives you a penance. You express sorrow, often with an Act of Contrition, and the priest gives absolution. Afterward, do your penance.",
    explanation: [
      "Before: pray, then examine your conscience in the light of God's word, for example the Ten Commandments, the Beatitudes, and the moral teaching of the apostles (CCC 1454). The U.S. bishops publish examinations for children, young adults, single people, and married people.",
      "Sorrow: true contrition is sorrow for sin with the resolution not to sin again. It is best when it comes from love of God, but sorrow from fear of sin's consequences is also a gift that disposes you to be forgiven in the sacrament (CCC 1451–1453).",
      "Telling your sins: confess all mortal sins you are aware of after a careful examination, with their kind and how many times (canon 988; CCC 1456). Confessing venial sins is recommended (canon 988 §2). If you honestly forget a sin, it is forgiven with the rest; mention it next time if it was serious. You may usually choose to kneel behind a screen or sit face to face.",
      "The order of the rite: the priest's greeting, perhaps a short reading from Scripture, your confession, the priest's counsel and penance, your prayer of sorrow, and absolution, followed by thanksgiving (CCC 1480). In absolution the priest says, in part, “I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit” (CCC 1449).",
      "The penance: usually prayers or an act of charity. It helps repair the harm sin has done and unites you with Christ, who alone expiated our sins (CCC 1459–1460). If you have harmed someone, you should also do what you can to make it right.",
      "Nervous? Priests hear confessions every week and are bound by an absolute seal of secrecy (CCC 1467). If it has been a long time or you don't remember what to say, simply tell the priest, and he will help you. The father of the prodigal son ran to meet him “while he was still a long way off” (Luke 15:20).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1449", url: ccc("__P4C") },
        { paragraphs: "1450–1460", url: ccc("__P4D") },
        { paragraphs: "1467", url: ccc("__P4E") },
        { paragraphs: "1480–1484", url: ccc("__P4H") },
      ],
      scripture: [
        { passage: "Luke 15:11–32", url: bible("luke/15") },
        { passage: "Psalm 51", url: bible("psalms/51") },
        { passage: "Exodus 20:1–17", url: bible("exodus/20") },
      ],
      documents: ["usccb-examinations-of-conscience", "canon-law-penance"],
    },
    resources: ["ascension-how-to-go-to-confession", "video-ascension-need-confession"],
    related: ["confession", "mortal-and-venial-sin", "why-confess-to-a-priest", "how-to-receive-communion"],
  },
  {
    slug: "mortal-and-venial-sin",
    title: "Mortal and Venial Sin",
    question: "What is the difference between mortal and venial sin?",
    alsoKnownAs: ["Mortal sin", "Venial sin", "Grave sin"],
    category: "sacraments",
    keywords: ["mortal sin", "venial sin", "grave sin", "serious sin", "grave matter", "full knowledge", "deliberate consent", "three conditions", "is this a mortal sin", "state of grace", "1 John 5:16", "are all sins equal", "sin that leads to death"],
    summary:
      "A mortal sin is a deliberate choice of something seriously wrong that destroys the life of charity, and so the state of grace, in the soul. For a sin to be mortal, three conditions must all be met: grave matter, full knowledge, and deliberate consent. A venial sin is a less serious sin, or a serious one committed without full knowledge or consent; it wounds our friendship with God but does not break it.",
    explanation: [
      "In Scripture: the First Letter of John distinguishes sins: “All wrongdoing is sin, but there is sin that is not deadly” (1 John 5:17). The Church sees here the distinction between mortal and venial sin, which is also confirmed by ordinary experience (CCC 1854).",
      "Mortal sin: “Mortal sin is sin whose object is grave matter and which is also committed with full knowledge and deliberate consent” (CCC 1857). Grave matter is specified by the Ten Commandments (CCC 1858). Full knowledge means knowing that the act is seriously wrong; deliberate consent means freely choosing it (CCC 1859).",
      "What lessens guilt: unintentional ignorance can lessen or even remove a person's guilt, as can strong feelings, outside pressure, or psychological disorders (CCC 1860). The Church can say that an act is gravely wrong, but “we must entrust judgment of persons to the justice and mercy of God” (CCC 1861).",
      "Why it matters: mortal sin turns a person away from God and, unless repented, excludes them from Christ's kingdom (CCC 1861). It is forgiven in Confession, or by perfect contrition joined to the intention to confess as soon as possible (CCC 1452, 1856). Anyone aware of mortal sin should not receive Communion before confessing (CCC 1415).",
      "Venial sin: it weakens charity and can dispose us, little by little, to more serious sin, but it does not break our covenant with God (CCC 1862–1863). It is forgiven by sorrow that comes from love of God (CCC 1452) and wiped away by the charity the Eucharist strengthens in us (CCC 1394); confessing it is recommended (CCC 1458).",
      "Not a scorecard: the point of the distinction is not to measure how little we can get away with but to know how sin harms us, and to turn back to God, whose mercy has no limits (CCC 1864).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1394", url: ccc("__P42") },
        { paragraphs: "1452, 1458", url: ccc("__P4D") },
        { paragraphs: "1849–1851", url: ccc("__P6A") },
        { paragraphs: "1854–1864", url: ccc("__P6C") },
        { paragraphs: "1874–1876", url: ccc("__P6E") },
      ],
      scripture: [
        { passage: "1 John 5:16–17", url: bible("1john/5") },
        { passage: "Galatians 5:19–21", url: bible("galatians/5") },
        { passage: "Matthew 19:16–19", url: bible("matthew/19") },
      ],
      documents: ["reconciliatio-et-paenitentia"],
    },
    resources: ["video-ascension-mortal-venial", "video-a101-mortal-venial", "ca-do-venial-sins-matter"],
    related: ["confession", "how-to-go-to-confession", "returning-after-mortal-sin", "who-can-receive-communion"],
  },
  {
    slug: "marriage-sacrament",
    title: "The Sacrament of Marriage",
    question: "What makes marriage a sacrament?",
    alsoKnownAs: ["Matrimony", "Sacrament of Matrimony", "Holy Matrimony"],
    category: "sacraments",
    keywords: ["marriage", "matrimony", "Catholic wedding", "sacramental marriage", "vows", "consent", "indissoluble", "covenant", "Cana", "two become one flesh", "who marries the couple", "can marriage be dissolved", "marrying in the Church"],
    summary:
      "God created marriage from the beginning as a lifelong covenant between a man and a woman, ordered to their good and to the gift of children. When both spouses are baptized, Christ raises their marriage to a sacrament: their union becomes a living sign of his own faithful love for the Church, and it gives them the grace to love each other as he loves. In the Latin Church, the spouses themselves confer the sacrament on each other by their consent.",
    explanation: [
      "From creation: Genesis says, “a man leaves his father and mother and clings to his wife, and the two of them become one body” (Genesis 2:24). The Church teaches that “God himself is the author of marriage” (CCC 1603).",
      "Raised by Christ: Jesus worked his first sign at a wedding at Cana (John 2:1–11), and he taught that marriage is permanent: “what God has joined together, no human being must separate” (Matthew 19:6; CCC 1613–1614). St. Paul compares the love of husband and wife to Christ's love for the Church: “This is a great mystery, but I speak in reference to Christ and the church” (Ephesians 5:32; CCC 1616).",
      "A sacrament between the baptized: the marriage covenant “between baptized persons has been raised by Christ the Lord to the dignity of a sacrament” (CCC 1601; canon 1055). For the baptized, a valid marriage is by that very fact a sacrament (canon 1055 §2).",
      "Who confers it: in the Latin Church the spouses are the ministers of the sacrament, giving it to each other by their free consent before the Church; the priest or deacon receives their consent in the Church's name, with two witnesses (CCC 1623, 1626; canon 1108). In the Eastern Churches, the priest or bishop is the minister and crowns the couple (CCC 1623).",
      "Its marks: unity, indissolubility, and openness to children are essential to marriage (CCC 1644–1652, 1664; canon 1056). A marriage between baptized persons that has been consummated can be dissolved by no human power (CCC 1640; canon 1141).",
      "Its grace: the sacrament strengthens the spouses to love each other faithfully, to grow in holiness together, and to welcome and raise their children (CCC 1641–1642, 1661).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1601", url: ccc("__P50") },
        { paragraphs: "1603–1605, 1613–1617", url: ccc("__P51") },
        { paragraphs: "1623", url: ccc("__P52") },
        { paragraphs: "1626", url: ccc("__P53") },
        { paragraphs: "1638–1642", url: ccc("__P54") },
        { paragraphs: "1643–1652", url: ccc("__P55") },
        { paragraphs: "1660–1666", url: ccc("__P57") },
      ],
      scripture: [
        { passage: "Genesis 2:18–24", url: bible("genesis/2") },
        { passage: "Matthew 19:3–9", url: bible("matthew/19") },
        { passage: "John 2:1–11", url: bible("john/2") },
        { passage: "Ephesians 5:21–33", url: bible("ephesians/5") },
      ],
      documents: ["canon-law-orders-marriage", "gaudium-et-spes", "familiaris-consortio"],
    },
    resources: ["fym-marriage-as-sacrament"],
    related: ["seven-sacraments", "what-is-a-sacrament", "married-before-ocia"],
  },
];
