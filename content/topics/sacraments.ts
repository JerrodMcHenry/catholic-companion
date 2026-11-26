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
    resources: ["ca-seven-sacraments"],
    related: ["seven-sacraments", "baptism", "what-is-the-eucharist", "mass-holy-water", "sacramentals"],
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
    related: ["what-is-a-sacrament", "baptism", "confirmation", "what-is-the-eucharist", "confession", "anointing-of-the-sick", "bishops-priests-deacons", "marriage-sacrament"],
  },
  {
    slug: "baptism",
    title: "Baptism",
    question: "What is Baptism?",
    alsoKnownAs: ["Christening", "Sacrament of Baptism", "Baptism of desire"],
    category: "sacraments",
    keywords: ["baptism", "christening", "baptized", "born again", "born of water and Spirit", "original sin", "baptismal font", "immersion", "pouring water", "can anyone baptize", "emergency baptism", "is baptism necessary", "baptism of blood", "is baptism just a symbol", "baptism saves", "1 Peter 3:21", "baptism preparation", "arrange a baptism", "godparent requirements", "godparents", "baptism class", "baptize my baby"],
    summary:
      "Baptism is the first sacrament and the door to all the others. With water and the words “I baptize you in the name of the Father, and of the Son, and of the Holy Spirit,” a person is freed from sin, reborn as a child of God, made a member of Christ and his Church, and given a share in the Holy Spirit. It marks a Christian permanently, so it is received only once.",
    explanation: [
      "The rite: the essential sign is immersion in water, or water poured three times over the head, with the invocation of the Trinity (CCC 1239–1240). The word “baptize” comes from the Greek for “plunge”: going down into the water and rising signifies dying and rising with Christ (CCC 1214; Romans 6:3–4). The very early Christian manual called the Didache already allows pouring when there is not enough water for immersion.",
      "What it does: Baptism forgives original sin and all personal sins; it makes the baptized a “new creature,” an adopted child of God, a member of the Church, and a sharer in Christ's priesthood (CCC 1263–1268). Some effects of sin, such as illness, death, and the inclination to sin, remain as a lifelong struggle (CCC 1264).",
      "Scripture: Jesus told Nicodemus that entry into God's kingdom requires being born again of water and the Spirit (John 3:5), and he sent the apostles to baptize all nations (Matthew 28:19). On Pentecost, Peter urged the crowd to repent and to be baptized, each of them, in the name of Jesus Christ so that their sins would be forgiven (Acts 2:38).",
      "Who baptizes: ordinarily a bishop, priest, or deacon. In an emergency anyone, even someone not baptized, can baptize by pouring water and saying the Trinitarian words with the intention of doing what the Church does (CCC 1256, 1284).",
      "Is it necessary? The Church teaches that Baptism is necessary for salvation for those who have heard the Gospel and could ask for it, and it knows no other sure means. But “God has bound salvation to the sacrament of Baptism, but he himself is not bound by his sacraments”: those who die for the faith, catechumens who die before Baptism, and others who sincerely seek God without knowing the Church can be saved (CCC 1257–1260). Children who die without Baptism are entrusted to God's mercy, with hope (CCC 1261).",
      "Other Christians: Baptism with water in the name of the Trinity is recognized by the Catholic Church wherever it is validly given, and it unites all the baptized in a real, though imperfect, communion (CCC 1271).",
      "Only a symbol? Scripture speaks of Baptism as doing something: Peter writes that baptism now saves us, not by washing dirt from the body but as an appeal to God for a clean conscience, through the resurrection of Jesus Christ (1 Peter 3:21), and Ananias tells Paul to be baptized and have his sins washed away, calling on the Lord's name (Acts 22:16). Some Protestants read 1 Peter 3:21 as saying that the believer’s “appeal” of faith, not the water, is what saves. Catholics answer that Peter attributes the saving to Baptism received in faith, and that its power comes from Christ’s resurrection, not from water as such (CCC 1257, 1263).",
      "Arranging a child's Baptism: contact your parish, ideally during pregnancy or soon after the birth. Church law asks parents to have infants baptized “in the first few weeks,” and to go to the pastor “as soon as possible after the birth or even before it” to request the sacrament and be prepared for it (canon 867 §1). Parents and godparents are to be instructed in the meaning of Baptism and its obligations (canon 851), so parishes usually ask them to attend a preparation session. A child in danger of death is to be baptized without delay (canon 867 §2).",
      "Godparents: a child may have one godparent or two, one man and one woman (canon 873). A godparent must normally be at least sixteen, a Catholic who has been confirmed and has received the Eucharist and who leads a life of faith, and not the child's mother or father (canon 874 §1). A baptized Christian of another church may take part only as a Christian witness, together with a Catholic godparent (canon 874 §2). Godparents should be firm believers, ready to help the child live as a Christian (CCC 1255).",
      "Adults: an unbaptized adult prepares through the catechumenate, the Order of Christian Initiation of Adults (OCIA), and is normally baptized, confirmed, and receives first Communion at the Easter Vigil (canon 851; CCC 1232–1233). Start by contacting a parish; see What is OCIA?",
      "Church law and parish practice: the points above come from the Church's universal law. Class schedules, forms, dates, and paperwork, such as a letter showing that a godparent is a practicing Catholic, are set by each parish and diocese, so ask your parish what it needs.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1213", url: ccc("__P3G") },
        { paragraphs: "1214–1216", url: ccc("__P3H") },
        { paragraphs: "1232–1233, 1239–1240", url: ccc("__P3J") },
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
        { passage: "1 Peter 3:18–22", url: bible("1peter/3") },
        { passage: "Acts 22:16", url: bible("acts/22") },
      ],
      documents: ["canon-law-sacraments"],
    },
    resources: ["didache", "ca-baptism-symbol-broussard", "video-broussard-baptism-saves"],
    related: ["infant-baptism", "confirmation", "seven-sacraments", "mass-holy-water", "how-to-become-catholic", "what-is-ocia"],
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
      "Scripture: the New Testament mostly describes converts, adults who heard the apostles' preaching. But it also records whole households being baptized: Lydia together with her household (Acts 16:15), and the jailer at Philippi, who was baptized at once along with everyone in his family (Acts 16:33). Peter told the crowd at Pentecost that God's promise belongs to them and to their children (Acts 2:39). Whether those households included infants is not stated; the Catechism says it is “quite possible” (CCC 1252).",
      "History: there is explicit testimony to infant Baptism from the second century on (CCC 1252). The Church's 1980 instruction on infant Baptism notes that Origen and St. Augustine called it a tradition received from the apostles, and that the third-century Apostolic Tradition instructs, “First baptize the children.” Some early writers, notably Tertullian, advised waiting (Pastoralis Actio 4–5).",
      "Other Christians: many Protestant churches also baptize infants, while Baptists and many evangelical and Pentecostal churches baptize only believers. Catholics share with them the conviction that faith and Baptism belong together; their views and the Catholic responses are set out below.",
      "An early council: in the 250s, St. Cyprian and a council of sixty-six bishops answered a bishop who thought newborns should wait until the eighth day: “we all rather judge that the mercy and grace of God is not to be refused to any one born of man” (Letter to Fidus, Epistle 58).",
      "Arranging a Baptism: for the practical steps, including contacting the parish, preparation, and choosing godparents, see What is Baptism?",
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
    resources: ["ca-early-infant-baptism", "cyprian-letter-fidus"],
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
                "Catholics agree that adults come to Baptism through faith, and the New Testament mostly describes converts. It also records whole households being baptized (Acts 16:15, 33), and Peter says God's promise is for his hearers and for their children (Acts 2:39). Whether those households included infants is not stated; the Catechism calls it “quite possible” (CCC 1252).",
              authority: "apologetic-argument",
            },
            {
              claim: "Baptism is a symbol of a believer's own faith, so it cannot mean anything for someone who cannot yet believe.",
              response:
                "Catholics hold that Baptism is first God's action, not ours: Paul says God saved us through the washing of new birth and the renewal the Holy Spirit gives (Titus 3:5). “The sheer gratuitousness of the grace of salvation is particularly manifest in infant Baptism” (CCC 1250). The child is baptized in the faith of the Church (CCC 1253).",
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
    keywords: ["confirmation", "confirmed", "chrism", "anointing", "laying on of hands", "confirmation name", "sponsor", "gifts of the Holy Spirit", "age of confirmation", "bishop", "Pentecost", "seal of the Spirit", "is Confirmation biblical", "gifts of the Holy Spirit", "seven gifts", "chrism", "chrismation", "Confirmation sponsor", "Confirmation name", "Isaiah 11"],
    summary:
      "Confirmation completes the grace of Baptism. Through the laying on of hands and the anointing with sacred oil called chrism, the baptized receive the Holy Spirit in a special way, as the apostles did at Pentecost, and are strengthened to live and share their faith as witnesses to Christ. Like Baptism, it marks a person permanently and is received only once.",
    explanation: [
      "The rite: in the Latin Church, the bishop anoints the forehead with chrism while laying on his hand and saying, “Be sealed with the Gift of the Holy Spirit” (CCC 1300). The anointing recalls the name “Christian,” which means “anointed,” like Christ himself (CCC 1289).",
      "Scripture: when Samaria accepted the Gospel, the apostles sent Peter and John, who prayed for the new believers, laid their hands on them, and the believers received the Holy Spirit (Acts 8:14–17). The Church sees in this laying on of hands the origin of the sacrament (CCC 1288).",
      "What it does: Confirmation roots us more deeply as children of God, unites us more firmly to Christ, increases the gifts of the Holy Spirit, binds us more closely to the Church, and gives special strength to spread and defend the faith (CCC 1303). Christian initiation is incomplete without Confirmation and the Eucharist (CCC 1306).",
      "When: in the Eastern Churches, including Eastern Catholic Churches, the priest confirms (“chrismates”) immediately after Baptism, even for infants, with chrism consecrated by the bishop. In the Latin Church, Confirmation is ordinarily given by the bishop at about the age of discretion, unless the bishops' conference sets another age (CCC 1290, 1312–1313, 1318; canon 891). Ages and the order of the sacraments therefore vary from diocese to diocese. Adults becoming Catholic are usually confirmed by the priest who receives them, at the same celebration (CCC 1312).",
      "Preparing: a candidate who has reached the age of reason should profess the faith, be in the state of grace, want to receive the sacrament, and be ready to be Christ's disciple and witness (CCC 1319). It is not a graduation: grace given in Baptism “does not need ‘ratification’ to become effective,” and spiritual maturity is not a matter of age (CCC 1308).",
      "The Spirit promised in the Old Testament: the prophets announced that the Spirit of the Lord would rest on the Messiah, a Spirit bringing wisdom and understanding, counsel and strength, knowledge and the fear of the Lord (Isaiah 11:2). Christian tradition draws from this passage the seven gifts of the Holy Spirit: wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord (CCC 1831). The Spirit given to the Messiah was to be shared with the whole messianic people, as Joel foretold and Peter proclaimed at Pentecost (CCC 1286–1287; Acts 2:16–18).",
      "Is Confirmation biblical? Besides the Samaritans in Acts 8, Paul baptized disciples at Ephesus, and when he laid his hands on them the Holy Spirit came upon them (Acts 19:6). In both cases the laying on of hands follows Baptism and is distinct from it. The Letter to the Hebrews counts teaching about baptisms and the laying on of hands among the foundations of Christian instruction (Hebrews 6:1–2). The Church recognizes this imposition of hands as the origin of Confirmation (CCC 1288). Many Protestants read these passages as unique to the apostolic age; Catholics note that Hebrews treats the laying on of hands as part of ordinary, basic instruction.",
      "Anointing: “very early,” anointing with perfumed oil called chrism was added to the laying on of hands (CCC 1289). The name “Christian” means “anointed one,” after Christ, whom God anointed with the Holy Spirit and with power (Acts 10:38). Around 200, Tertullian described the newly baptized being “anointed with a blessed unction,” after which “the hand is laid on us, invoking and inviting the Holy Spirit” (On Baptism 7–8). Around 350, St. Cyril of Jerusalem taught that the consecrated chrism “is no more simple ointment... but it is Christ's gift of grace” (Mystagogical Lecture 3.3).",
      "East and West: in the early centuries Confirmation was usually celebrated together with Baptism (CCC 1290). The Eastern Churches kept this unity: the priest chrismates immediately after Baptism, with chrism consecrated by the bishop. In the West, the wish to reserve the completion of Baptism to the bishop led to Confirmation being celebrated later (CCC 1290–1292). Both practices are legitimate: the Eastern practice emphasizes the unity of Christian initiation, the Western the newly confirmed person's bond with the bishop and the apostolic Church (CCC 1292).",
      "Preparation in practice: preparation should lead to “a more intimate union with Christ and a more lively familiarity with the Holy Spirit” (CCC 1309). Candidates should be in the state of grace, so going to Confession beforehand is recommended (CCC 1310). A sponsor helps the candidate, ideally one of the baptismal godparents (CCC 1311). Adults usually receive Confirmation at the Easter Vigil with Baptism or reception into full communion; for young people, the age and program are set by the diocese and parish, so ask your parish.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1285", url: ccc("__P3P") },
        { paragraphs: "1286–1292", url: ccc("__P3Q") },
        { paragraphs: "1300", url: ccc("__P3R") },
        { paragraphs: "1302–1305", url: ccc("__P3S") },
        { paragraphs: "1306–1311", url: ccc("__P3T") },
        { paragraphs: "1312–1314", url: ccc("__P3U") },
        { paragraphs: "1315–1321", url: ccc("__P3V") },
        { paragraphs: "1831", url: ccc("__P67") },
      ],
      scripture: [
        { passage: "Acts 8:14–17", url: bible("acts/8") },
        { passage: "Acts 2:1–4", url: bible("acts/2") },
        { passage: "Isaiah 11:1–3", url: bible("isaiah/11") },
        { passage: "Acts 19:1–7", url: bible("acts/19") },
        { passage: "Hebrews 6:1–2", url: bible("hebrews/6") },
      ],
      documents: ["canon-law-eucharist", "canon-law-eucharist"],
    },
    resources: ["loyola-seven-sacraments", "ca-confirmation-tract", "tertullian-on-baptism", "cyril-mystagogic-3"],
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
      "A meal of communion: Jesus said that whoever eats his flesh and drinks his blood abides in him, and he in that person (John 6:56). Communion deepens our union with Christ, separates us from sin, and unites us more closely to the Church (CCC 1391–1396). As St. Paul wrote that because there is one loaf, all who share it, though many, become one body (1 Corinthians 10:17).",
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
      "Catholics root this belief in the words of Jesus, who called himself the living bread come down from heaven and said that the bread he would give is his own flesh, given for the life of the world (John 6:51), and in his words at the Last Supper, when he called the bread his body given for his disciples (1 Corinthians 11:24). St. Paul warns that anyone who eats without recognizing the body of the Lord brings judgment on himself (1 Corinthians 11:29).",
      "Because Christ is present, Catholics genuflect toward the tabernacle, where the Eucharist is kept, spend time in prayer before it in adoration, and prepare carefully before receiving Communion.",
      "The blood of the covenant: at Sinai, Moses sealed God's covenant with sacrificial blood, sprinkling the people and calling it the blood of the covenant the Lord had made with them (Exodus 24:8). At the Last Supper, Jesus echoes those words over the cup, calling it his blood of the covenant, poured out for many (Mark 14:24).",
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
        { passage: "Exodus 24:3–8", url: bible("exodus/24") },
        { passage: "Mark 14:22–24", url: bible("mark/14") },
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
                "Catholics point to how Jesus answered those who took him literally in John 6. He did not soften his words but repeated them, saying that unless they ate the flesh of the Son of Man and drank his blood they would have no life in them (John 6:53), and many disciples turned back and stopped following him (John 6:66). Paul warns that whoever eats the bread unworthily will be held guilty of sinning against the body and blood of the Lord (1 Corinthians 11:27).",
              authority: "apologetic-argument",
            },
            {
              claim: "Jesus himself said that the flesh profits nothing (John 6:63), so he meant spiritual eating.",
              response:
                "In the same verse Jesus says that it is the Spirit who gives life and that his words are spirit and life. Catholics read this as contrasting a merely natural, unbelieving understanding with faith, not as denying his earlier words; he speaks of “the flesh,” not “my flesh.” The Church receives the Eucharist as a mystery accepted in faith (CCC 1381).",
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
      "Once for all: the Letter to the Hebrews insists that Christ's offering is complete. Unlike the priests of the old covenant, who offered sacrifices daily, Christ offered himself a single time, once and for all (Hebrews 7:27), and by that one offering he has made perfect forever those who are being made holy (Hebrews 10:14). The Catholic Church teaches this too: Christ's sacrifice “is unique; it completes and surpasses all other sacrifices” (CCC 614).",
      "Made present, not repeated: Christ is not crucified again, does not suffer again, and does not die again at Mass. The Catechism explains that the Eucharist is a sacrifice “because it re-presents (makes present) the sacrifice of the cross, because it is its memorial and because it applies its fruit” (CCC 1366). St. John Paul II put it plainly: “The Mass makes present the sacrifice of the Cross; it does not add to that sacrifice nor does it multiply it.” What is repeated is the celebration of the memorial (Ecclesia de Eucharistia 12).",
      "One victim, one priest: the Council of Trent taught that “the victim is one and the same, the same now offering by the ministry of priests, who then offered Himself on the cross, the manner alone of offering being different.” On the cross Christ offered himself in a bloody manner; in the Mass the same Christ is offered in an unbloody manner (CCC 1367, quoting Trent). The priest acts in the person of Christ; Christ himself is the one who offers (CCC 1410).",
      "A memorial that makes present: in the Bible, a memorial is more than remembering. When Israel celebrated the Passover, the events of the Exodus became present to each generation. In the same way, when the Church does what Jesus commanded at the Last Supper, celebrating it in his memory (Luke 22:19), his Passover becomes present (CCC 1362–1364). The words of institution are themselves sacrificial: Jesus speaks of his Body given for his disciples and his Blood poured out for them (Luke 22:19–20; CCC 1365).",
      "The Church's offering: because the Church is Christ's Body, she is united with her Head's offering. The faithful offer their praise, sufferings, prayer, and work with Christ (CCC 1368), and the sacrifice is offered for the living and the dead (CCC 1371). This is why the Mass can be offered for an intention.",
      "Early witness: the prophet Malachi foretold that among the nations, in every place, incense and a pure offering would be brought to God's name (Malachi 1:11). The Didache, a very early Christian manual, applies that verse to the Sunday Eucharist, telling Christians to confess their sins “that your sacrifice may be pure” (Didache 14).",
      "Where Christians differ: Protestant traditions reject the sacrifice of the Mass, but not all for the same reasons, and they understand Christ's presence in the Eucharist in different ways. Their views, with sources, and the Catholic responses are set out below.",
      "A witness from the Reformation: in 1520 Martin Luther, who rejected the idea, admitted that “there is today no more generally accepted and firmly believed opinion in the Church than this — that the mass is a good work and a sacrifice” (The Babylonian Captivity of the Church). This shows what was believed in his day; the evidence for earlier centuries comes from sources such as the Didache and the Fathers.",
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
    resources: ["stpaul-re-presentation-of-calvary", "ca-early-church-sacrifice", "didache", "luther-babylonian-captivity"],
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
            "Protestant confessions reject the sacrifice of the Mass because they hold that Christ's one offering on the cross, made once and for all (Hebrews 10:10), cannot be offered again and needs no addition. The Westminster Confession teaches that in the Lord's Supper “Christ is not offered up to his Father; nor any real sacrifice made at all,” but there is “only a commemoration of that one offering” and “a spiritual oblation of all possible praise unto God” (29.2).",
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
    slug: "eucharistic-adoration",
    title: "Eucharistic Adoration",
    question: "What is Eucharistic Adoration?",
    alsoKnownAs: ["Adoration", "Benediction", "Holy hour", "Exposition of the Blessed Sacrament"],
    category: "sacraments",
    keywords: ["adoration", "Eucharistic adoration", "adoration chapel", "holy hour", "Benediction", "monstrance", "exposition", "Blessed Sacrament", "tabernacle", "perpetual adoration", "Corpus Christi", "can non-Catholics go to adoration", "what to do at adoration"],
    summary:
      "Eucharistic Adoration is prayer before Jesus truly present in the Blessed Sacrament, either reserved in the tabernacle or displayed on the altar in a vessel called a monstrance. Because Catholics believe the consecrated Host is Christ himself, they worship him there as they would worship him in person. Anyone may come and pray quietly, including people who are not Catholic.",
    explanation: [
      "Why Catholics adore the Eucharist: Catholics believe that in the Eucharist Jesus Christ is truly present (see The Real Presence). If that is true, worship is the fitting response: “Because Christ himself is present in the sacrament of the altar, he is to be honored with the worship of adoration” (CCC 1418). St. Augustine wrote that “no one eats that flesh without first adoring it” (quoted in Sacramentum Caritatis 66).",
      "In Scripture: those who met the risen Jesus fell down and worshiped him (Matthew 28:9), and Thomas confessed him as his Lord and his God (John 20:28). In Gethsemane Jesus asked his disciples why they could not stay awake with him even for an hour (Matthew 26:40), a scene often recalled in the custom of a “holy hour.” Adoration of the Eucharist rests on Jesus' promise that the bread he would give is his own flesh, given for the life of the world (John 6:51), and on his words at the Last Supper.",
      "How it developed: the Eucharist was first reserved so that it could be brought to the sick and to those absent from Mass; as faith in the Real Presence deepened, the Church came to value silent adoration before the tabernacle (CCC 1379). The Church “has always offered and still offers to the sacrament of the Eucharist the cult of adoration, not only during Mass, but also outside of it,” including exposition and processions (CCC 1378). In 1264 Pope Urban IV extended the feast of Corpus Christi to the whole Church (bull Transiturus).",
      "What to expect: you can pray before the tabernacle whenever a church is open. During exposition, a consecrated Host is placed in a monstrance on the altar, usually with candles. Some parishes close exposition with Benediction, in which hymns are sung and the priest or deacon blesses the kneeling people with the Blessed Sacrament, making the sign of the cross with the monstrance. Catholics usually kneel or genuflect; if you are not Catholic or cannot kneel, sitting quietly or a respectful bow is fine. Most of the time is spent in silence.",
      "How to pray: there is no required method. You can sit in silence, speak to Jesus in your own words, read a Gospel passage such as John 6, pray the Rosary or other prayers, or bring your worries and thanks. Pope John Paul II wrote, “It is pleasant to spend time with him, to lie close to his breast like the Beloved Disciple (cf. Jn 13:25) and to feel the infinite love present in his heart” (Ecclesia de Eucharistia 25). The Catechism adds: “Jesus awaits us in this sacrament of love” (CCC 1380).",
      "If you are not Catholic: you are welcome. Nothing is required except respect and quiet, and many people exploring Catholicism find adoration a natural place to begin praying. Receiving Communion is different; see Who can receive Communion?",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1378–1381", url: ccc("__P41") },
        { paragraphs: "1418", url: ccc("__P44") },
      ],
      scripture: [
        { passage: "Matthew 26:36–41", url: bible("matthew/26") },
        { passage: "John 6:51–58", url: bible("john/6") },
        { passage: "Matthew 28:8–10", url: bible("matthew/28") },
        { passage: "John 20:24–29", url: bible("john/20") },
      ],
      documents: ["ecclesia-de-eucharistia", "sacramentum-caritatis"],
    },
    resources: ["ce-benediction", "ce-corpus-christi"],
    related: ["real-presence", "what-is-the-eucharist", "how-to-pray", "mass-genuflection", "who-can-receive-communion"],
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
      "Why there are conditions: Communion is not only a personal encounter with Christ; it also “makes the Church.” Those who receive are united to Christ and to all the faithful in one body (CCC 1396). St. Paul warned that anyone who eats and drinks without recognizing the body of the Lord brings judgment on himself (1 Corinthians 11:29). Saying “Amen” to “The Body of Christ” is a profession of faith in Christ's presence and of communion with the Church.",
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
    keywords: ["confession", "reconciliation", "penance", "forgiveness of sins", "absolution", "going to confession", "how often confession", "once a year", "confessional", "sacrament of healing", "prodigal son", "mercy", "struggling with sin", "habitual sin", "keep committing the same sin", "temptation", "occasion of sin", "same sin over and over", "scrupulosity", "addiction", "can God forgive me", "God's mercy", "forgiveness of sins", "is my sin too big"],
    summary:
      "Confession is the sacrament in which Christ forgives sins committed after Baptism and reconciles the sinner with God and with the Church. The penitent is sorry for their sins, tells them to a priest, and accepts a penance; the priest, acting in Christ's name, gives absolution. It goes by several names: the sacrament of Penance, of Reconciliation, of conversion, and of forgiveness.",
    explanation: [
      "Why it exists: new life in Christ, given in Baptism, can be weakened and even lost by sin. Christ, “physician of our souls and bodies,” gave his Church this sacrament of healing so that his work of forgiveness continues among his own members (CCC 1420–1421, 1446).",
      "Its institution: on Easter evening the risen Jesus breathed on the apostles, gave them the Holy Spirit, and told them that the sins they forgave would be forgiven and the sins they retained would be retained (John 20:22–23; CCC 1485). Why the Church understands this as confession to a priest is explained in “Why confess to a priest?”",
      "Its parts: the penitent's acts of contrition, confession, and satisfaction, and God's action through the priest's absolution. These two elements, the Church says, are “equally essential” (CCC 1448). The step-by-step practice is in “How do I go to Confession?”",
      "What it does: it restores us to God's grace and friendship, reconciles us with the Church, takes away the eternal punishment of mortal sin, and brings peace of conscience and strength for the Christian struggle (CCC 1468–1470, 1496).",
      "How often: Catholics must confess any serious sins at least once a year (CCC 1457; canon 989), and anyone conscious of mortal sin should go before receiving Communion. Confessing everyday faults is not strictly required but is strongly recommended, because it helps us grow (CCC 1458).",
      "The seal: a priest may never reveal, for any reason, what is told to him in confession (CCC 1467; canon 983).",
      "When you keep falling into the same sin: the struggle does not mean you are not a real Christian. Baptism takes away sin but not the inclination to sin, which “remains in the baptized” for the struggle of Christian life (CCC 1426). Proverbs says that the righteous may fall seven times and still get up again (Proverbs 24:16), and Jesus told Peter to forgive not seven times but seventy-seven times (Matthew 18:22): God's mercy is not exhausted by repeated failure. Keep going to Confession; the Church recommends confessing even everyday faults, because it helps us “form our conscience, fight against evil tendencies, let ourselves be healed by Christ and progress in the life of the Spirit” (CCC 1458).",
      "Growing in virtue: virtues grow “by deliberate acts and by a perseverance ever-renewed in repeated efforts” and are purified and raised by grace (CCC 1810). In practice: pray daily, avoid situations you know lead you into sin, replace bad habits with good ones, and ask for help. Paul assures believers that God is faithful and will not allow them to be tested beyond what they can bear (1 Corinthians 10:13). Responsibility can be lessened by habit, fear, and other factors (CCC 1735), so general guidance like this is not a judgment about your guilt; your confessor can help with your own situation. If worry about sin becomes constant and distressing (scrupulosity), tell your confessor and follow his guidance.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1420–1421", url: ccc("__P45") },
        { paragraphs: "1422", url: ccc("__P46") },
        { paragraphs: "1423–1424", url: ccc("__P47") },
        { paragraphs: "1440–1449", url: ccc("__P4C") },
        { paragraphs: "1468–1470", url: ccc("__P4F") },
        { paragraphs: "1485–1498", url: ccc("__P4I") },
        { paragraphs: "1426", url: ccc("__P48") },
        { paragraphs: "1458", url: ccc("__P4D") },
        { paragraphs: "1810", url: ccc("__P65") },
        { paragraphs: "1735", url: ccc("__P5N") },
      ],
      scripture: [
        { passage: "John 20:19–23", url: bible("john/20") },
        { passage: "Luke 15:11–32", url: bible("luke/15") },
        { passage: "2 Corinthians 5:17–20", url: bible("2corinthians/5") },
        { passage: "Proverbs 24:16", url: bible("proverbs/24") },
        { passage: "Matthew 18:21–22", url: bible("matthew/18") },
        { passage: "1 Corinthians 10:13", url: bible("1corinthians/10") },
      ],
      documents: ["canon-law-penance", "reconciliatio-et-paenitentia"],
    },
    resources: ["video-ascension-need-confession", "ascension-how-to-go-to-confession"],
    related: ["how-to-go-to-confession", "why-confess-to-a-priest", "mortal-and-venial-sin", "returning-to-the-church", "anointing-of-the-sick", "temptation"],
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
      "Only God forgives sins: the Catechism says so plainly (CCC 1441). When Jesus forgave the paralytic, his critics objected that only God can forgive sins (Mark 2:7), and Jesus healed the man to show that the Son of Man has authority on earth to forgive sins (Mark 2:10). The crowds then praised God for giving such authority to human beings (Matthew 9:8).",
      "Christ shared the power: on Easter evening Jesus breathed on the apostles, gave them the Holy Spirit, and told them that the sins they forgave would be forgiven and the sins they retained would be retained (John 20:22–23). To forgive or retain, the apostles had to know which sins were being confessed. Jesus also gave Peter, and then all the apostles, the power to bind and to loose (Matthew 16:19; 18:18; CCC 1444–1445). St. Paul calls this the ministry of reconciliation (2 Corinthians 5:18).",
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
      documents: ["canon-law-penance", "reconciliatio-et-paenitentia", "apostolic-penitentiary-seal"],
    },
    resources: ["ascension-why-confess-to-a-priest", "video-staples-why-confess"],
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
            "Most Protestants hold that Christians should confess their sins directly to God, trusting Christ as the one mediator (1 Timothy 2:5) and God's promise to forgive and cleanse those who confess (1 John 1:9). The Westminster Confession teaches that “every man is bound to make private confession of his sins to God,” and to confess to those he has wronged or scandalized (15.6).",
          variations:
            "Practice varies. Lutherans teach that “Private Absolution ought to be retained in the churches, although in confession an enumeration of all sins is not necessary” (Augsburg Confession, Article XI).",
          arguments: [
            {
              claim: "Only God can forgive sins.",
              response:
                "Catholics agree (CCC 1441). Yet Jesus showed that the Son of Man has authority on earth to forgive sins (Mark 2:10), the crowds praised God for giving such authority to human beings (Matthew 9:8), and on Easter evening he told the apostles that the sins they forgave would be forgiven (John 20:23). The priest forgives not by his own power but in Christ's name.",
              authority: "doctrine",
            },
            {
              claim: "Christ is the one mediator between God and us; a priest puts a man in between.",
              response:
                "Catholics affirm 1 Timothy 2:5. The priest is not a second mediator but Christ's minister: he is “not the master of God's forgiveness, but its servant” (CCC 1466). Paul writes that God has reconciled us to himself through Christ and entrusted to us the ministry of reconciliation (2 Corinthians 5:18). Catholics also confess to God directly every day; perfect contrition already obtains forgiveness when it includes the resolution to go to Confession (CCC 1452).",
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
      "Nervous? Priests hear confessions every week and are bound by an absolute seal of secrecy (CCC 1467). If it has been a long time or you don't remember what to say, simply tell the priest, and he will help you. The father of the prodigal son saw him coming from far away and ran to meet him (Luke 15:20).",
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
      "In Scripture: the First Letter of John distinguishes sins, teaching that every wrongdoing is sin, yet not every sin is deadly (1 John 5:17). The Church sees here the distinction between mortal and venial sin, which is also confirmed by ordinary experience (CCC 1854).",
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
    resources: ["video-ascension-mortal-venial", "ca-do-venial-sins-matter"],
    related: ["confession", "how-to-go-to-confession", "returning-after-mortal-sin", "who-can-receive-communion", "temptation"],
  },
  {
    slug: "anointing-of-the-sick",
    title: "Anointing of the Sick",
    question: "What is the Anointing of the Sick?",
    alsoKnownAs: ["Last rites", "Extreme Unction", "Sacrament of the sick", "Viaticum"],
    category: "sacraments",
    keywords: ["anointing", "last rites", "extreme unction", "sick", "seriously ill", "dying", "hospital", "hospice", "nursing home", "priest for the sick", "call a priest", "before surgery", "elderly", "old age", "oil of the sick", "James 5", "viaticum", "sacraments for the dying", "caregiver"],
    summary:
      "The Anointing of the Sick is the sacrament Christ gives to strengthen Catholics who are seriously ill or weakened by old age. A priest lays hands on the sick person, prays over them, and anoints their forehead and hands with blessed oil. It brings the Holy Spirit's strength, peace, and courage, forgives sins, and sometimes restores bodily health if that is God's will. It is not only for the dying: you do not need to wait until death is near to ask for it.",
    explanation: [
      "In Scripture: when Jesus sent out the Twelve, they anointed many sick people with oil and healed them (Mark 6:13). The Letter of James gives the instruction the Church still follows: anyone who is sick should call for the presbyters of the Church, who are to pray over the sick person and anoint him with oil in the Lord's name; the prayer offered in faith will save the sick person, the Lord will raise him up, and any sins he has committed will be forgiven (James 5:14–15). The Council of Trent taught that the sacrament is “alluded to” in Mark and “promulgated by James” (CCC 1511).",
      "Old Testament background: Israel brought sickness before God in lament and prayer (Psalm 38; Isaiah 38), and God revealed himself as the Lord who heals his people (Exodus 15:26). The prophets looked ahead to a time when God would forgive his people and heal every illness (CCC 1502). Jesus healed the sick and forgave sins, and he identified himself with them, counting care for the sick as care for him (Matthew 25:36; CCC 1503).",
      "In the early Church: the anointing of the sick with blessed oil is attested from ancient times in the liturgies of both East and West (CCC 1512). Pope Paul VI singled out the letter of Pope Innocent I to Bishop Decentius of Gubbio (416) and the ancient Roman prayer for blessing the oil of the sick, which begins, “Send forth, O Lord, your Holy Spirit, the Paraclete” (Sacram unctionem infirmorum, 1972). Over the centuries the sacrament came to be given mostly to the dying and was called “Extreme Unction,” but the Church never stopped praying for the sick person's recovery (CCC 1512).",
      "Who may receive it: a Catholic who has reached the use of reason and “begins to be in danger due to sickness or old age” (canon 1004). It is fitting before a serious operation, and for elderly people whose frailty is increasing (CCC 1514–1515). If it is doubtful whether the person has reached the use of reason, is seriously ill, or has already died, the priest is to give the sacrament (canon 1005). It is given to those who would have asked for it when they were able, even if they can no longer speak (canon 1006).",
      "More than once: yes. Someone who recovers can receive it again in a later serious illness, and it can be repeated if the same illness becomes more serious (CCC 1515; canon 1004).",
      "What happens: only a priest or bishop can give it (CCC 1516). It can be celebrated at home, in a hospital, or in church, for one person or for several together, and fittingly within Mass (CCC 1517). The priest lays his hands on the sick person in silence, prays over them, and anoints the forehead and hands with oil blessed by the bishop, saying: “Through this holy anointing may the Lord in his love and mercy help you with the grace of the Holy Spirit. May the Lord who frees you from sin save you and raise you up” (CCC 1513, 1519).",
      "Anointing, Confession, and Viaticum: “last rites” is a common name for the sacraments the Church offers at the end of life: Penance, the Anointing of the Sick, and the Eucharist given as Viaticum to someone about to leave this life (CCC 1524–1525). They are distinct. Confession is the ordinary way serious sins are forgiven; the Anointing also forgives sins when the sick person was not able to go to Confession (CCC 1532). Viaticum, from the Latin for provisions for a journey, should be the last sacrament of the earthly journey (CCC 1517). When possible, the sick person goes to Confession first and receives Communion afterward (CCC 1517).",
      "Common misunderstandings: being anointed does not mean a person is about to die, and asking for it is not giving up hope; the Church asks for healing of soul, and of body if that is God's will (CCC 1520). Families sometimes wait until the sick person can no longer take part. It is better to call while they are conscious and can also go to Confession and receive Communion.",
      "For families and caregivers: call the parish office and ask for a priest to anoint the sick person, giving their name, where they are, and how serious the situation is. Ask the parish how to reach a priest in an emergency. Hospitals, hospices, and nursing homes often have a chaplain who can help. The Church asks the whole community to surround the sick with prayer and attention (CCC 1516), so you can pray with them, read Scripture, and, if possible, be present when the priest comes.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1499", url: ccc("__P4J") },
        { paragraphs: "1502–1513", url: ccc("__P4K") },
        { paragraphs: "1514–1516", url: ccc("__P4L") },
        { paragraphs: "1517–1519", url: ccc("__P4M") },
        { paragraphs: "1520–1523", url: ccc("__P4N") },
        { paragraphs: "1524–1525", url: ccc("__P4O") },
        { paragraphs: "1526–1532", url: ccc("__P4P") },
      ],
      scripture: [
        { passage: "Mark 6:7–13", url: bible("mark/6") },
        { passage: "James 5:13–16", url: bible("james/5") },
        { passage: "Exodus 15:26", url: bible("exodus/15") },
        { passage: "Matthew 25:31–46", url: bible("matthew/25") },
      ],
      documents: ["sacram-unctionem-infirmorum", "canon-law-orders-marriage"],
    },
    resources: ["usccb-anointing-of-the-sick", "ca-anointing-of-the-sick"],
    related: ["seven-sacraments", "confession", "what-is-the-eucharist", "catholic-funerals-and-grief", "what-happens-when-we-die"],
  },
  {
    slug: "marriage-sacrament",
    title: "The Sacrament of Marriage",
    question: "What makes marriage a sacrament?",
    alsoKnownAs: ["Matrimony", "Sacrament of Matrimony", "Holy Matrimony"],
    category: "sacraments",
    keywords: ["marriage", "matrimony", "Catholic wedding", "sacramental marriage", "vows", "consent", "indissoluble", "covenant", "Cana", "two become one flesh", "who marries the couple", "can marriage be dissolved", "marrying in the Church", "divorce", "why can't Catholics divorce", "indissolubility"],
    summary:
      "God created marriage from the beginning as a lifelong covenant between a man and a woman, ordered to their good and to the gift of children. When both spouses are baptized, Christ raises their marriage to a sacrament: their union becomes a living sign of his own faithful love for the Church, and it gives them the grace to love each other as he loves. In the Latin Church, the spouses themselves confer the sacrament on each other by their consent.",
    explanation: [
      "From creation: Genesis teaches that a man leaves his father and mother and holds fast to his wife, and the two become one flesh (Genesis 2:24). The Church teaches that “God himself is the author of marriage” (CCC 1603).",
      "Raised by Christ: Jesus worked his first sign at a wedding at Cana (John 2:1–11), and he taught that marriage is permanent: no human being may separate what God has joined (Matthew 19:6; CCC 1613–1614). St. Paul compares the love of husband and wife to Christ's love for the Church and calls this a great mystery that points to Christ and the Church (Ephesians 5:32; CCC 1616).",
      "A sacrament between the baptized: the marriage covenant “between baptized persons has been raised by Christ the Lord to the dignity of a sacrament” (CCC 1601; canon 1055). For the baptized, a valid marriage is by that very fact a sacrament (canon 1055 §2).",
      "Who confers it: in the Latin Church the spouses are the ministers of the sacrament, giving it to each other by their free consent before the Church; the priest or deacon receives their consent in the Church's name, with two witnesses (CCC 1623, 1626; canon 1108). In the Eastern Churches, the priest or bishop is the minister and crowns the couple (CCC 1623).",
      "Its marks: unity, indissolubility, and openness to children are essential to marriage (CCC 1644–1652, 1664; canon 1056). A marriage between baptized persons that has been consummated can be dissolved by no human power (CCC 1640; canon 1141).",
      "Its grace: the sacrament strengthens the spouses to love each other faithfully, to grow in holiness together, and to welcome and raise their children (CCC 1641–1642, 1661).",
      "Why can't the Church allow divorce and remarriage? Jesus himself taught that a man who divorces his wife and marries another commits adultery against her (Mark 10:11), and he said Moses had permitted divorce because of the people's hardness of heart (Matthew 19:8). The Church therefore holds that a valid, consummated marriage between baptized persons “can never be dissolved,” and that “the Church does not have the power to contravene this disposition of divine wisdom” (CCC 1640). When a marriage was never valid, a Church tribunal can declare its nullity; see What if I've been married before?",
      "An early witness: around 110, St. Ignatius of Antioch wrote that “it becomes both men and women who marry, to form their union with the approval of the bishop, that their marriage may be according to God” (Letter to Polycarp 5).",
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
        { passage: "Mark 10:2–12", url: bible("mark/10") },
      ],
      documents: ["canon-law-orders-marriage", "gaudium-et-spes", "familiaris-consortio"],
    },
    resources: ["fym-marriage-as-sacrament", "ignatius-to-polycarp"],
    related: ["seven-sacraments", "what-is-a-sacrament", "married-before-ocia"],
  },
];
