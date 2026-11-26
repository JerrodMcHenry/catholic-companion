// Learn › Church History: the early Church, the councils, divisions, and the Fathers.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const historyTopics: Topic[] = [
  {
    slug: "church-history-overview",
    title: "Church History: An Overview",
    question: "What are the big chapters of Church history?",
    alsoKnownAs: ["History of the Church", "Church history timeline"],
    category: "history",
    keywords: ["Church history", "history of Christianity", "Catholic history", "timeline", "early Church", "ecumenical councils", "Middle Ages", "Great Schism", "Reformation", "Council of Trent", "Vatican II"],
    summary:
      "Church history can be read in broad chapters: the apostolic Church and the age of persecution; the age of the great councils after Christianity became legal in the fourth century; the medieval Church, including the separation of East and West; the Reformation and the Catholic reform of the sixteenth century; and the modern era, marked by worldwide mission and the Second Vatican Council. Catholics believe the Church is both divine and human, so its history includes saints and sinners alike.",
    explanation: [
      "The apostolic Church and persecution (first to early fourth centuries): Christian communities spread around the Mediterranean, led by bishops, presbyters, and deacons, and sometimes suffered persecution. See “What was the early Church like?”",
      "The councils (fourth to eighth centuries): after Christianity was legalized, councils such as Nicaea (325) and Constantinople (381) defined the Church's faith in the Trinity and in Christ. The Catholic and Orthodox Churches both recognize seven ecumenical councils from this period (Britannica). See “What happened at the Council of Nicaea?”",
      "The medieval Church (about 500 to 1500): monasteries, universities, and missions shaped Europe, while East and West grew apart; the excommunications of 1054 became a watershed, and the separation deepened after 1204. See “Why did Catholics and Orthodox split?”",
      "Reformation and reform (sixteenth century): Martin Luther's protest in 1517 began movements that formed the Protestant traditions, and the Council of Trent (1545–1563) answered with doctrinal definitions and reform. See “What was the Protestant Reformation?”",
      "The modern era: worldwide mission, the First Vatican Council (1869–1870), and the Second Vatican Council (1962–1965), which committed the Church to ecumenism and dialogue.",
      "Holy and in need of purification: the Church acknowledges that serious divisions arose “for which, often enough, men of both sides were to blame” (CCC 817). Catholics read this history in faith, believing that Christ remains with his Church, while historians study the same events with their own methods; the two kinds of judgment should not be confused.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "77–78", url: ccc("__PK") },
        { paragraphs: "817–819, 838", url: ccc("__P29") },
        { paragraphs: "884", url: ccc("__P2A") },
      ],
      scripture: [
        { passage: "Matthew 16:18", url: bible("matthew/16") },
        { passage: "Matthew 28:18–20", url: bible("matthew/28") },
        { passage: "Acts 2:42–47", url: bible("acts/2") },
      ],
      documents: ["lumen-gentium", "unitatis-redintegratio"],
    },
    resources: ["britannica-reformation"],
    related: ["early-church", "council-of-nicaea", "great-schism", "protestant-reformation"],
  },
  {
    slug: "early-church",
    title: "The Early Church",
    question: "What was the early Church like?",
    alsoKnownAs: ["Apostolic age", "Early Christianity"],
    category: "history",
    keywords: ["early Church", "early Christians", "apostolic age", "first Christians", "Clement of Rome", "Ignatius of Antioch", "Justin Martyr", "persecution", "bishops", "apostolic succession", "Great Apostasy"],
    summary:
      "The first Christians gathered on Sunday to hear the Scriptures and celebrate the Eucharist, were led by bishops with presbyters (priests) and deacons, and handed on the apostles' teaching while the New Testament was being written and collected. They spread quickly across the Roman Empire despite periods of persecution. Catholics see deep continuity between this Church and the Catholic Church today; others read the same evidence differently.",
    explanation: [
      "What the sources show: writings from the late first and second centuries describe Christian worship and leadership in some detail. Historians debate how quickly and uniformly church structures developed in different cities.",
      "Worship: around 155, St. Justin Martyr wrote that “on the day called Sunday” Christians gathered, read “the memoirs of the apostles or the writings of the prophets,” heard the president's exhortation, prayed, and offered bread and wine with “prayers and thanksgivings” (First Apology 67; CCC 1345).",
      "Leaders: about the year 96, Clement of Rome wrote that the apostles appointed “bishops and deacons” and gave instructions that “when these should fall asleep, other approved men should succeed them in their ministry” (1 Clement 42, 44). Around 110, Ignatius of Antioch urged the faithful to “follow the bishop” and wrote, “wherever Jesus Christ is, there is the Catholic Church” (Smyrnaeans 8).",
      "Apostolic succession: around 180, St. Irenaeus argued that Christians could “reckon up those who were by the apostles instituted bishops in the Churches” and listed the bishops of Rome from the apostles to his own day (Against Heresies 3.3). The Church teaches that the apostles “left bishops as their successors” (CCC 77).",
      "Scripture and Tradition: the first generation of Christians “did not yet have a written New Testament” (CCC 83); the Church later discerned the canon of Scripture by the apostolic Tradition (CCC 120). Early Christians already worshiped Jesus as God: Ignatius calls him “Jesus Christ, our God” (Ephesians, greeting).",
      "Persecution and growth: Christians faced intermittent persecution, from Nero's in Rome (Tacitus, Annals 15.44) to the empire-wide persecutions of the third and early fourth centuries; the Church treasures the acts of the martyrs as “archives of truth written in letters of blood” (CCC 2474).",
      "Continuity and interpretation: that bishops, Sunday Eucharist, and appeals to apostolic succession appear early is historical evidence; that this makes the Catholic Church the same Church as the apostles' is a theological conclusion that other Christians dispute. Latter-day Saints and Jehovah's Witnesses hold that the early Church fell into apostasy; their views are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "77–78", url: ccc("__PK") },
        { paragraphs: "83", url: ccc("__PL") },
        { paragraphs: "120", url: ccc("__PR") },
        { paragraphs: "861–862", url: ccc("__P29") },
        { paragraphs: "1345", url: ccc("__P40") },
        { paragraphs: "2474", url: ccc("__P8J") },
      ],
      scripture: [
        { passage: "Acts 2:42–47", url: bible("acts/2") },
        { passage: "Acts 20:28–30", url: bible("acts/20") },
        { passage: "1 Timothy 3:1–13", url: bible("1timothy/3") },
        { passage: "Titus 1:5–9", url: bible("titus/1") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["clement-1-corinthians", "ignatius-smyrnaeans", "justin-first-apology", "irenaeus-against-heresies-3-3", "tacitus-annals-15"],
    related: ["who-are-the-church-fathers", "apostolic-succession", "did-jesus-found-a-church", "what-is-sacred-tradition"],
    debate: {
      catholicPosition: {
        summary:
          "The Catholic Church teaches that Christ founded his Church on the apostles and promised to remain with it, so that it has never been lost; the bishops, as successors of the apostles, have handed on the apostolic faith in a continuous line (CCC 77, 861–862).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "latter-day-saints",
          position:
            "The Church of Jesus Christ of Latter-day Saints teaches that a Great Apostasy followed the death of the apostles: “men corrupted the principles of the gospel and made unauthorized changes in Church organization and priesthood ordinances,” and “the Lord withdrew the authority of the priesthood from the earth” until it was restored through Joseph Smith, beginning in 1820. Latter-day Saints call this “‘restored,’ not ‘reformed,’ Christianity.”",
          variations:
            "Latter-day Saints and Jehovah's Witnesses both speak of an apostasy, but they describe it differently and point to different restorations: Latter-day Saints to the restoration of priesthood authority through Joseph Smith, Jehovah's Witnesses to the work of the Bible Students and their successors. Their views should not be treated as one.",
          arguments: [
            {
              claim: "Priesthood authority was lost when the apostles died.",
              response:
                "Writers who knew the apostolic generation describe the opposite: Clement of Rome (about 96) says the apostles provided that “other approved men should succeed them in their ministry” (1 Clement 44), and Irenaeus (about 180) lists the bishops of Rome in succession from the apostles (Against Heresies 3.3). Catholics also point to Christ's promise that the gates of the netherworld would not prevail against his Church (Matthew 16:18).",
              authority: "apologetic-argument",
            },
            {
              claim: "Early Christian teaching about God was corrupted by Greek philosophy, which shaped the later creeds.",
              response:
                "The Church grants that it “had to develop her own terminology with the help of certain notions of philosophical origin” (CCC 251), but holds that these terms safeguarded what Scripture already taught. Belief in Christ's divinity is attested before the great councils: around 110, Ignatius of Antioch called Christ “Jesus Christ, our God” (Ephesians, greeting).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["lds-apostasy", "lds-mormons-christian"],
        },
        {
          tradition: "jehovahs-witnesses",
          position:
            "Jehovah's Witnesses' publications teach that “soon after the death of the apostles, apostate teachers from within the congregation began to take control of it,” so that “true Christianity was eclipsed by a counterfeit called Christendom,” a development they see foretold in Jesus' parable of the wheat and the weeds. They hold that Jesus' true congregation has been restored in the present “conclusion of a system of things.”",
          arguments: [
            {
              claim: "Jesus foretold the apostasy in the parable of the wheat and the weeds (Matthew 13:24–30, 36–43).",
              response:
                "In the parable the master lets the wheat and the weeds “grow together until harvest” (Matthew 13:30): the good seed is not destroyed but remains in the field throughout. Catholics read it as describing a Church that always contains sinners, not one that disappears for centuries.",
              authority: "apologetic-argument",
            },
            {
              claim: "A clergy class arose and took control of the congregation.",
              response:
                "Bishops, presbyters, and deacons appear in the New Testament (1 Timothy 3; Titus 1:5) and in writings from within a few decades of the apostles (1 Clement 42, 44; Ignatius, Smyrnaeans 8). Catholics see this ministry as continuous with the apostles rather than a later takeover.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["jw-one-true-faith", "jw-true-christianity-prevails"],
        },
      ],
      fathers: [
        {
          name: "St. Clement of Rome",
          work: "Letter to the Corinthians 42, 44 (about 96)",
          note: "The apostles appointed bishops and deacons and provided for successors.",
          url: "https://www.newadvent.org/fathers/1010.htm",
        },
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Smyrnaeans 8 (about 110)",
          note: "“Wherever Jesus Christ is, there is the Catholic Church.”",
          url: "https://www.newadvent.org/fathers/0109.htm",
        },
        {
          name: "St. Irenaeus of Lyons",
          work: "Against Heresies 3.3 (about 180)",
          note: "The succession of bishops from the apostles as a test of true teaching.",
          url: "https://www.newadvent.org/fathers/0103303.htm",
        },
      ],
    },
  },
  {
    slug: "council-of-nicaea",
    title: "The Council of Nicaea",
    question: "What happened at the Council of Nicaea?",
    alsoKnownAs: ["Arianism", "First Council of Nicaea", "Nicene Creed of 325"],
    category: "history",
    keywords: ["Council of Nicaea", "Nicaea", "325", "Arius", "Arianism", "homoousios", "consubstantial", "Nicene Creed", "Constantine", "Constantinople 381", "did Nicaea decide the Bible", "ecumenical council"],
    summary:
      "The Council of Nicaea, held in 325 and called by the emperor Constantine, was the first ecumenical council. It met to settle the controversy over Arius, a priest of Alexandria who taught that the Son of God was a created being. The council professed that the Son is “consubstantial” (of the same substance) with the Father, true God from true God. It did not invent belief in Christ's divinity, and it did not decide which books belong in the Bible.",
    explanation: [
      "The controversy: Arius taught that the Son was a creature; the council condemned the sayings that “there once was when he was not” and that “before he was begotten he was not” (Council of Nicaea, profession of faith). Constantine, still unbaptized, convened the council and took part in its discussions (Britannica).",
      "Consubstantial: the council's creed calls the Son “begotten not made, consubstantial [Greek homoousion] with the Father.” “Consubstantial” means sharing the same divine substance, so that the Son is “one only God with him” (CCC 242). Britannica notes that the council adopted this non-biblical word, “with reluctance on the part of some,” to express the Son's full equality with the Father.",
      "Not an invention: Christians already worshiped Jesus as God long before 325; around 110, Ignatius of Antioch called him “Jesus Christ, our God.” The council's creed itself built on an earlier baptismal creed (Tanner, Decrees of the Ecumenical Councils). Its surviving texts, the creed, canons on church discipline, and a letter on the date of Easter, do not deal with the canon of Scripture.",
      "325 and 381: the creed of 325 ends simply, “And in the holy Spirit,” followed by condemnations of Arius' teaching. The creed prayed at Mass today is the Niceno-Constantinopolitan Creed, associated with the Council of Constantinople (381), which kept “consubstantial” and confessed the Holy Spirit as “the Lord and giver of life, who proceeds from the Father” (CCC 242, 245). Scholars debate how this longer creed originated, since ancient witnesses first mention it at the Council of Chalcedon in 451 (Tanner).",
      "After Nicaea: Arian views persisted for decades in parts of the Church and the empire (Britannica).",
      "Ecumenical councils: an ecumenical council is a gathering of the world's bishops whose decisions bind the whole Church; Catholics teach that the college of bishops exercises its authority “in a solemn manner in an ecumenical council,” which is always confirmed or recognized by Peter's successor (CCC 884). The Orthodox Churches also accept Nicaea as the first of the ecumenical councils.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "242, 245, 251–253", url: ccc("__P17") },
        { paragraphs: "465", url: ccc("__P1J") },
        { paragraphs: "884", url: ccc("__P2A") },
      ],
      scripture: [
        { passage: "John 1:1–18", url: bible("john/1") },
        { passage: "John 20:28", url: bible("john/20") },
        { passage: "Colossians 1:15–20", url: bible("colossians/1") },
        { passage: "Philippians 2:5–11", url: bible("philippians/2") },
      ],
      documents: ["nicaea-325", "constantinople-381"],
    },
    resources: ["britannica-nicaea", "athanasius-on-the-incarnation"],
    related: ["divinity-of-jesus", "what-is-the-trinity", "what-is-the-creed", "trinity-in-scripture"],
  },
  {
    slug: "great-schism",
    title: "The Great Schism",
    question: "Why did Catholics and Orthodox split?",
    alsoKnownAs: ["East–West Schism", "Schism of 1054"],
    category: "history",
    keywords: ["Great Schism", "East-West Schism", "1054", "Catholic Orthodox split", "filioque", "papal primacy", "Michael Cerularius", "Cardinal Humbert", "Fourth Crusade 1204", "1965 excommunications lifted", "Orthodox Church"],
    summary:
      "Catholics and Orthodox separated gradually, over centuries, not in a single day. Differences of language, culture, and politics, disputes over the authority of the pope, and the addition of the filioque (“and the Son”) to the Creed in the West all played a part. The mutual excommunications of 1054 became a symbol of the break, which deepened after crusaders sacked Constantinople in 1204. In 1965 the excommunications were lifted, but full communion has not yet been restored.",
    explanation: [
      "A slow estrangement: Britannica describes the relation between the Byzantine and Roman churches as “one of growing estrangement from the 5th to the 11th century.” The Orthodox Church in America points to the Greek and Latin languages, different theological styles, the loss of the empire's political unity, and rivalry between the Byzantine and Holy Roman empires.",
      "Authority: in the Orthodox view, the “biggest single reason” for the schism was papal claims to jurisdiction over all the Churches (OCA). The Catholic Church teaches that the pope has “full, supreme, and universal power over the whole Church” (CCC 882). This remains the central question in dialogue.",
      "The filioque: the Creed of 381 says the Holy Spirit “proceeds from the Father.” The Latin Church gradually added “and the Son” (filioque) between the eighth and eleventh centuries (CCC 247). The Orthodox object both to the doctrine as usually understood and to the addition made without an ecumenical council. The Catholic Church holds that the Eastern and Western formulations, rightly understood, are complementary (CCC 248).",
      "1054: after tensions over Latin and Greek practices, Cardinal Humbert, a papal legate, placed a bull of excommunication against Patriarch Michael Cerularius on the altar of Hagia Sophia on July 16, 1054; the patriarch and his synod excommunicated the legates in turn (OCA; 1965 Joint Declaration). Pope Leo IX had died before the bull was issued. Relations between some Eastern Churches and Rome continued for a time.",
      "1204 and after: the sack of Constantinople by the Fourth Crusade in 1204 greatly increased mutual hostility (OCA).",
      "1965: Pope Paul VI and Ecumenical Patriarch Athenagoras I regretted “the offensive words, the reproaches without foundation, and the reprehensible gestures which, on both sides,” marked those events and committed the excommunications “to oblivion” (Joint Declaration, 1965). They also said this gesture “is not sufficient to end both old and more recent differences.” The Catholic Church teaches that its communion with the Orthodox is so profound “that it lacks little to attain the fullness” (CCC 838).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "247–248", url: ccc("__P17") },
        { paragraphs: "817, 838", url: ccc("__P29") },
        { paragraphs: "882", url: ccc("__P2A") },
      ],
      scripture: [
        { passage: "John 17:20–23", url: bible("john/17") },
        { passage: "Matthew 16:18–19", url: bible("matthew/16") },
        { passage: "John 15:26", url: bible("john/15") },
      ],
      documents: ["common-declaration-1965", "ut-unum-sint", "unitatis-redintegratio"],
    },
    resources: ["britannica-east-west-schism", "oca-great-schism"],
    related: ["catholic-and-orthodox-differences", "papal-infallibility", "peter-the-rock", "church-history-overview"],
    debate: {
      catholicPosition: {
        summary:
          "The Catholic Church teaches that the pope, as successor of Peter, has a primacy of jurisdiction over the whole Church (CCC 882), and that the Western confession of the filioque is legitimate and complementary to the Eastern formula (CCC 247–248). It regards the Orthodox Churches as true Churches with which it shares an almost complete communion (CCC 838) and seeks full unity through dialogue.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "eastern-orthodoxy",
          position:
            "The Orthodox Church in America writes that, “from the Eastern Orthodox perspective,” the biggest single reason for the Great Schism was “the reassertion of Papal claims to have jurisdictional authority over all the Churches.” The early councils acknowledged the pope as “first among equals” but “in no way envision the Bishop of Rome's ‘primacy of honor’ as a ‘supremacy of jurisdiction.’” The Orthodox also reject the unilateral addition of the filioque to the Creed, which the 1848 Encyclical of the Eastern Patriarchs lists among Roman Catholic errors.",
          variations:
            "Orthodox Churches and theologians differ in tone and in their engagement with Catholic dialogue; the OCA itself notes that some Orthodox are “less than charitable” toward other confessions.",
          arguments: [
            {
              claim: "The early councils gave the bishop of Rome a primacy of honor, not jurisdiction over other Churches.",
              response:
                "Catholics hold that the pope's primacy is part of Peter's ministry and includes universal jurisdiction (CCC 882). At the same time, St. John Paul II acknowledged the request “to find a way of exercising the primacy which, while in no way renouncing what is essential to its mission, is nonetheless open to a new situation” (Ut Unum Sint 95), so how the primacy is exercised remains a subject of dialogue.",
              authority: "doctrine",
            },
            {
              claim: "The West added the filioque to the Creed without the agreement of an ecumenical council.",
              response:
                "The Catechism acknowledges that the filioque “does not appear in the Creed confessed in 381” and was gradually admitted into the Latin liturgy (CCC 247). It teaches that the Western formula is legitimate and that, rightly understood, it complements the Eastern confession that the Spirit comes from the Father through the Son (CCC 248).",
              authority: "doctrine",
            },
          ],
          sources: ["oca-great-schism", "oca-qa-pope-unity", "encyclical-eastern-patriarchs"],
        },
      ],
    },
  },
  {
    slug: "protestant-reformation",
    title: "The Protestant Reformation",
    question: "What was the Protestant Reformation?",
    alsoKnownAs: ["Reformation", "Martin Luther"],
    category: "history",
    keywords: ["Protestant Reformation", "Reformation", "Martin Luther", "95 Theses", "1517", "indulgences", "Zwingli", "John Calvin", "Anabaptists", "Henry VIII", "Council of Trent", "Counter-Reformation", "Catholic Reformation"],
    summary:
      "The Protestant Reformation was the religious upheaval in the sixteenth-century Western Church that began with Martin Luther's protest against the sale of indulgences in 1517 and led to the Lutheran, Reformed, Anabaptist, and Anglican traditions. Its central disputes concerned justification, the authority of Scripture and the Church, and the sacraments. The Catholic Church responded with the Council of Trent and a wide movement of reform. The reformers did not all agree with one another.",
    explanation: [
      "Background: the late medieval Church was entangled in politics, and abuses such as the sale of indulgences undermined its spiritual authority, though historians caution against overstating them; for most people the Church still offered spiritual comfort (Britannica). Calls for reform, from Francis of Assisi to Jan Hus and Erasmus, came before 1517.",
      "Luther and indulgences: in 1517 Luther, a pastor and professor at the University of Wittenberg, published his Ninety-five Theses. The first states that Christ “willed the entire life of believers to be one of repentance”; others attacked preachers who claimed that “as soon as the money clinks into the money chest, the soul flies out of purgatory.” He was excommunicated in 1521 (Britannica). An indulgence, in Catholic teaching, is a remission of temporal punishment for sins already forgiven (CCC 1471); the Council of Trent kept indulgences but ordered that “all evil gains for the obtaining thereof … be wholly abolished” (Session 25).",
      "Justification and authority: Luther's movement taught that people are “freely justified for Christ's sake, through faith” (Augsburg Confession, art. 4) and that Scripture alone is the final authority. Trent taught that justification involves inner renewal by grace (Session 6; CCC 1989). In 1999 Lutherans and Catholics declared a consensus on basic truths of justification (Joint Declaration), while other differences remain.",
      "Many traditions, not one: Zwingli in Zurich agreed with Luther on justification but differed on the Lord's Supper; Calvin in Geneva shaped the Reformed tradition (later expressed in confessions such as Westminster); Anabaptists such as the Swiss Brethren rejected infant baptism (Schleitheim Confession, 1527); and in England Henry VIII repudiated papal authority in 1534, beginning the Anglican tradition (Britannica).",
      "Catholic reform: the Council of Trent (1545–1563) defined Catholic teaching on Scripture and Tradition, justification, and the sacraments, and reformed clerical life and training. New orders and saints, such as the Jesuits, Teresa of Ávila, and Charles Borromeo, carried the reform forward.",
      "Lasting divisions, shared blame: the Church teaches that in these separations “often enough, men of both sides were to blame,” and that those born into Protestant communities today cannot be charged with the sin of separation and are “accepted as brothers in the Lord” (CCC 817–818). See “How are Catholics and Protestants different?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "817–819", url: ccc("__P29") },
        { paragraphs: "1471", url: ccc("__P4G") },
        { paragraphs: "1989–1992", url: ccc("__P6Y") },
      ],
      scripture: [
        { passage: "Romans 3:21–28", url: bible("romans/3") },
        { passage: "James 2:14–26", url: bible("james/2") },
        { passage: "Ephesians 4:1–6", url: bible("ephesians/4") },
      ],
      documents: ["trent-session-6", "trent-session-25", "joint-declaration-justification", "unitatis-redintegratio"],
    },
    resources: ["britannica-reformation", "luther-95-theses", "augsburg-confession", "schleitheim-confession", "westminster-confession"],
    related: ["catholic-and-protestant-differences", "sola-scriptura", "faith-and-works", "church-history-overview"],
  },
  {
    slug: "who-are-the-church-fathers",
    title: "The Church Fathers",
    question: "Who are the Church Fathers?",
    alsoKnownAs: ["Patristics", "Fathers of the Church"],
    category: "history",
    keywords: ["Church Fathers", "Fathers of the Church", "patristics", "Apostolic Fathers", "Doctors of the Church", "Augustine", "Athanasius", "Ignatius of Antioch", "Irenaeus", "unanimous consent of the Fathers", "early Christian writers"],
    summary:
      "The Church Fathers are holy and orthodox Christian writers of the early centuries, such as Ignatius of Antioch, Irenaeus, Athanasius, Augustine, and John Chrysostom, whose teaching the Church recognizes as a witness to the apostolic faith. Catholics value them as “timely witnesses” to Tradition, but no single Father is infallible, and they did not agree on every question. Some are also honored as Doctors of the Church.",
    explanation: [
      "Witnesses to Tradition: “The sayings of the holy Fathers are a witness to the life-giving presence of this Tradition” (CCC 78, quoting Dei Verbum 8). The Catechism names the Fathers among its principal sources (CCC 11) and calls them “always timely witnesses” to Tradition (CCC 688).",
      "Who counts: the Fathers came to be understood as “those Catholic teachers who have persevered in her communion, and whose teaching has been recognized as orthodox” (Catholic Encyclopedia, “Fathers of the Church”). The patristic period runs from the late first century into the eighth, when John Damascene and Bede wrote; both are counted among the Fathers (Catholic Encyclopedia).",
      "Apostolic Fathers: the earliest writers, close to the apostles' own generation, such as Clement of Rome, who according to Irenaeus “had seen the blessed apostles” (Against Heresies 3.3), and Ignatius of Antioch. Other early Christian writers, such as Tertullian and Origen, are valued witnesses, though the Church did not accept all of their teaching.",
      "Doctors of the Church: a separate title given by the Church to saints for “eminent learning, a high degree of sanctity, and proclamation by the Church” (Catholic Encyclopedia, “Doctors of the Church”). Some are Fathers, such as Augustine; others, such as Thomas Aquinas and Teresa of Ávila, lived much later.",
      "Authority: the authority of a single Father “is not infallible or peremptory,” though his opinions “should not be treated lightly” (Catholic Encyclopedia, quoting Franzelin). What carries special weight is their common witness: the Council of Trent forbade interpreting Scripture “contrary to the unanimous consent of the Fathers” (Session 4).",
      "Read them yourself: many of their works are freely available in English; see “What did the early Christians believe about the Eucharist?” for an example.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "8", url: ccc("__P3") },
        { paragraphs: "11", url: ccc("__P4") },
        { paragraphs: "78", url: ccc("__PK") },
        { paragraphs: "688", url: ccc("__P1Z") },
      ],
      scripture: [
        { passage: "1 Corinthians 4:15", url: bible("1corinthians/4") },
        { passage: "2 Timothy 2:2", url: bible("2timothy/2") },
        { passage: "2 Thessalonians 2:15", url: bible("2thessalonians/2") },
      ],
      documents: ["dei-verbum", "trent-session-4"],
    },
    resources: ["ce-fathers-of-the-church", "ce-doctors-of-the-church", "didache"],
    related: ["fathers-on-the-eucharist", "early-church", "what-is-sacred-tradition", "church-history-overview"],
  },
  {
    slug: "fathers-on-the-eucharist",
    title: "The Fathers on the Eucharist",
    question: "What did the early Christians believe about the Eucharist?",
    alsoKnownAs: ["Early Church and the Eucharist", "Patristic Eucharistic teaching"],
    category: "history",
    keywords: ["early Christians Eucharist", "Church Fathers Eucharist", "Ignatius Eucharist", "Justin Martyr Eucharist", "Irenaeus Eucharist", "Cyril of Jerusalem", "Augustine Eucharist", "Real Presence early Church", "transubstantiation history", "body and blood of Christ"],
    summary:
      "The earliest Christian writers speak of the Eucharist as the flesh and blood of Christ, not ordinary bread and wine. Ignatius of Antioch, Justin Martyr, Irenaeus, and Cyril of Jerusalem say so plainly, and Augustine combines strong realism with an insistence that the mystery be understood spiritually. They did not use the later term “transubstantiation,” which the Church adopted in the Middle Ages to express the same faith more precisely.",
    explanation: [
      "Ignatius of Antioch (about 110): some heretics “abstain from the Eucharist and from prayer, because they confess not the Eucharist to be the flesh of our Saviour Jesus Christ, which suffered for our sins” (Smyrnaeans 7).",
      "Justin Martyr (about 155): “not as common bread and common drink do we receive these”; the food blessed by the prayer of his word “is the flesh and blood of that Jesus who was made flesh” (First Apology 66).",
      "Irenaeus (about 180): the bread, “when it receives the invocation of God, is no longer common bread, but the Eucharist, consisting of two realities, earthly and heavenly” (Against Heresies 4.18.5).",
      "Cyril of Jerusalem (fourth century), teaching the newly baptized: “the seeming bread is not bread, though sensible to taste, but the Body of Christ” (Catechetical Lecture 22.9).",
      "Augustine (early fifth century): Christ “gave that very flesh to us to eat for our salvation; and no one eats that flesh, unless he has first worshipped.” In the same passage he adds, “Understand spiritually what I have said,” and “although it is needful that this be visibly celebrated, yet it must be spiritually understood” (Exposition on Psalm 99). Catholics and Protestants have both appealed to Augustine, so his words are best read whole.",
      "Belief and later terms: the Fathers express belief in Christ's real presence without the later technical vocabulary. The Council of Trent called the change of the bread and wine “transubstantiation” and declared that it had “always been the conviction of the Church of God” (CCC 1376). See “What is the Real Presence of Jesus in the Eucharist?” and “Is the Mass a sacrifice?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1345", url: ccc("__P40") },
        { paragraphs: "1374–1376", url: ccc("__P41") },
        { paragraphs: "1413", url: ccc("__P44") },
      ],
      scripture: [
        { passage: "John 6:51–58", url: bible("john/6") },
        { passage: "1 Corinthians 10:16–17", url: bible("1corinthians/10") },
        { passage: "1 Corinthians 11:23–29", url: bible("1corinthians/11") },
      ],
      documents: ["ecclesia-de-eucharistia", "trent-session-22"],
    },
    resources: ["ignatius-smyrnaeans", "justin-first-apology", "irenaeus-against-heresies-4-18", "cyril-catechetical-lecture-22", "augustine-psalm-99", "ca-early-church-sacrifice"],
    related: ["real-presence", "what-is-the-eucharist", "mass-as-sacrifice", "what-happens-at-mass"],
  },
];
