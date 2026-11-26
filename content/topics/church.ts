// Learn › The Church: the Church, Sacred Tradition, and Church authority.
// "Is the Bible the only authority?" lives in apologetics.ts because it carries a debate section.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const church: Topic[] = [
  {
    slug: "what-is-the-church",
    title: "The Church",
    question: "What is the Church?",
    alsoKnownAs: ["Body of Christ", "People of God", "Ecclesia"],
    category: "church",
    keywords: ["Church", "what is the church", "Body of Christ", "People of God", "ecclesia", "Catholic Church", "community of believers", "Church scandals", "abuse crisis", "corruption in the Church", "sinful Church", "abuse crisis", "sexual abuse", "report abuse", "survivors", "victims", "cover-up", "accountability", "personal relationship with Jesus", "do I need a church", "Jesus yes church no"],
    summary:
      "The word “church” means an assembly of people called together; for Christians it is the people God gathers in Christ throughout the world. The Church is at once the liturgical assembly, the local community, and the worldwide family of believers. Catholics believe the Church is the People of God and the Body of Christ, with Christ as its head.",
    explanation: [
      "The Greek word ekklesia, a “convocation,” was used in the Greek Old Testament for Israel gathered before God. The first Christians took it for themselves, seeing the Church as the heir of that assembly.",
      "God chose to save people not merely as individuals but by making them into a people. He prepared that people in Israel and gathered it anew in Christ.",
      "St. Paul calls the Church the Body of Christ: “Now you are Christ’s body” (1 Corinthians 12:27). Christ is its head, and the Church is united to him and draws its life from him, above all in the Eucharist.",
      "Catholics believe Christ founded the Church on the apostles, with Peter at their head, and that it continues in the bishops in communion with the pope. The related questions explain this further.",
      "The abuse crisis: children and vulnerable adults were sexually abused by Catholic clergy, religious, and others serving the Church, and their suffering was for a long time “ignored, kept quiet or silenced,” as Pope Francis wrote. Some Church leaders failed to act, and some covered up crimes. The harm to survivors and their families is grave and lasting. In 2018 the pope wrote: “With shame and repentance, we acknowledge as an ecclesial community that we were not where we should have been, that we did not act in a timely manner, realizing the magnitude and the gravity of the damage done to so many lives. We showed no care for the little ones; we abandoned them” (Letter to the People of God, 1). He named clericalism, an abuse of authority, as one of the conditions that allowed these evils to continue.",
      "Accountability and repentance: the same letter calls for “zero tolerance” and for “making all those who perpetrate or cover up these crimes accountable,” and it admits, “We have delayed in applying these actions and sanctions.” Since 2019 Church law has required clergy and religious to report abuse, and any attempt by bishops or superiors to “interfere with or avoid” investigations (Vos estis lux mundi, arts. 1, 3). Reforms do not undo harm, and questions about whether they are fully carried out deserve to be taken seriously, not dismissed.",
      "If you have been harmed: the U.S. bishops' reporting page begins, “If you suffered abuse, it was not your fault.” If someone is in immediate danger or a minor is being abused now, contact emergency services (911 in the United States). In the United States you can report abuse to law enforcement and to your diocese's victim assistance coordinator, who can help you make a complaint, meet with the bishop or his representative, and find support; abuse by a bishop, or a bishop's mishandling of abuse allegations, can be reported to the Catholic Bishop Abuse Reporting Service (reportbishopabuse.org, 1-800-276-1562). Elsewhere, contact the police and your diocese: Church law requires every diocese to have “public, stable and easily accessible systems for submission of reports” (Vos estis lux mundi, art. 2). The U.S. links are under Recommended resources below.",
      "The Church's claims and its members' conduct: the Church does not claim that its members or ministers are sinless: “All members of the Church, including her ministers, must acknowledge that they are sinners,” and the Church is “at once holy and always in need of purification” (CCC 827). Catholics believe that what Christ gives the Church, the Gospel and the sacraments, remains his gift even when those who serve it fail. That belief is no excuse for abuse or for protecting abusers. Jesus' own warning is severe: “Whoever causes one of these little ones who believe in me to sin, it would be better for him to have a great millstone hung around his neck and to be drowned in the depths of the sea” (Matthew 18:6).",
      "A personal relationship and the Church: faith is deeply personal; each of us must respond to Christ. But it is never private. “No one can have God as Father who does not have the Church as Mother” (CCC 181, quoting St. Cyprian). The apostles proclaimed Christ “so that you too may have fellowship with us; for our fellowship is with the Father and with his Son, Jesus Christ” (1 John 1:3), and the first believers “devoted themselves to the teaching of the apostles and to the communal life, to the breaking of the bread and to the prayers” (Acts 2:42). Catholics believe the Church is where Christ gives himself personally, above all in the sacraments.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "751–752", url: ccc("__P27") },
        { paragraphs: "781–796", url: ccc("__P28") },
        { paragraphs: "827", url: ccc("__P29") },
        { paragraphs: "181", url: ccc("__P12") },
      ],
      scripture: [
        { passage: "Matthew 16:18", url: bible("matthew/16") },
        { passage: "1 Corinthians 12:12–27", url: bible("1corinthians/12") },
        { passage: "Ephesians 1:22–23", url: bible("ephesians/1") },
        { passage: "Matthew 18:1–7", url: bible("matthew/18") },
        { passage: "1 John 1:1–4", url: bible("1john/1") },
        { passage: "Acts 2:42–47", url: bible("acts/2") },
      ],
      documents: ["lumen-gentium", "vos-estis-lux-mundi", "letter-to-the-people-of-god"],
    },
    resources: ["usccb-how-to-report-abuse", "usccb-victim-assistance", "catholic-bishop-abuse-reporting", "catholicculture-church-not-christ", "loyola-jesus-head-of-the-church"],
    related: ["did-jesus-found-a-church", "what-is-the-pope", "bishops-priests-deacons", "what-is-sacred-tradition", "what-does-catholic-mean"],
  },
  {
    slug: "what-is-sacred-tradition",
    title: "Sacred Tradition",
    question: "What is Sacred Tradition?",
    alsoKnownAs: ["Apostolic Tradition", "Tradition and traditions"],
    category: "church",
    keywords: ["Tradition", "Sacred Tradition", "oral tradition", "apostolic tradition", "traditions of men", "Scripture and Tradition", "handing on the faith"],
    summary:
      "Sacred Tradition is the living handing on of the Gospel that comes from the apostles, through the Church, by the power of the Holy Spirit. The apostles passed on what they received from Christ both by preaching and example and in writing, in the Scriptures. Catholics believe Scripture and Tradition flow from the same divine source and together form one deposit of God's word, entrusted to the Church.",
    explanation: [
      "Christ commanded the apostles to preach the Gospel. They handed it on in two ways: by word of mouth, example, and the institutions they established, and in writing. To keep the Gospel whole and alive, they left bishops as their successors.",
      "This living transmission is called Tradition. The first Christians did not yet have a written New Testament, and the New Testament itself shows the process: St. Paul tells believers to “hold fast to the traditions” he handed on, whether by word or by letter (2 Thessalonians 2:15).",
      "Apostolic Tradition is different from the many theological, liturgical, and devotional traditions that grow up in local churches. Those customs can be kept, changed, or set aside under the Church's guidance; the Tradition that comes from the apostles cannot.",
      "The Church's teaching office does not stand above Scripture and Tradition. It “is not above the word of God, but serves it” (Dei Verbum 10).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "75–79", url: ccc("__PK") },
        { paragraphs: "80–83", url: ccc("__PL") },
      ],
      scripture: [
        { passage: "2 Thessalonians 2:15", url: bible("2thessalonians/2") },
        { passage: "1 Corinthians 11:2", url: bible("1corinthians/11") },
        { passage: "2 Timothy 2:2", url: bible("2timothy/2") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["ca-scripture-and-tradition"],
    related: ["sola-scriptura", "what-is-the-bible", "divine-revelation", "what-is-dogma"],
  },
  {
    slug: "what-is-the-pope",
    title: "The Pope",
    question: "What is the pope?",
    alsoKnownAs: ["Papacy", "Bishop of Rome", "Successor of Peter", "Vicar of Christ"],
    category: "church",
    keywords: ["pope", "papacy", "Bishop of Rome", "Vatican", "Holy Father", "Peter", "Vicar of Christ", "papal authority"],
    summary:
      "The pope is the Bishop of Rome and the successor of St. Peter, whom Jesus made the “rock” of his Church. He is the visible source and foundation of unity for the bishops and for all the faithful. The Church teaches that he has full, supreme, and universal authority to shepherd the whole Church, which he exercises together with the bishops in communion with him.",
    explanation: [
      "Jesus gave Simon the name Peter, meaning “rock”: “you are Peter, and upon this rock I will build my church” (Matthew 16:18). He gave Peter the keys of the kingdom, asked him to strengthen his brothers (Luke 22:32), and after the Resurrection told him, “Feed my sheep” (John 21:17).",
      "Catholics believe Peter's role continues in his successors as Bishop of Rome. Just as Peter and the other apostles formed one college, the pope and the bishops form one college today.",
      "When the pope, as supreme teacher of all the faithful, proclaims by a definitive act a doctrine of faith or morals, the Church teaches that he does so infallibly. Infallibility concerns this kind of definitive teaching; it does not mean the pope is sinless or that everything he says is infallible.",
      "How Scripture and the early Church support the papacy, and how Orthodox and Protestant Christians see it, are covered in Apologetics.",
    ],
    teaching: {
      catechism: [{ paragraphs: "880–882, 891", url: ccc("__P2A") }],
      scripture: [
        { passage: "Matthew 16:13–19", url: bible("matthew/16") },
        { passage: "Luke 22:31–32", url: bible("luke/22") },
        { passage: "John 21:15–17", url: bible("john/21") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-what-catholics-believe-about-the-pope"],
    related: ["peter-the-rock", "papal-infallibility", "what-is-the-church", "bishops-priests-deacons"],
  },
  {
    slug: "bishops-priests-deacons",
    title: "Bishops, Priests, and Deacons",
    question: "What do bishops, priests, and deacons do?",
    alsoKnownAs: ["Holy Orders", "Ordination", "Priesthood", "Clergy", "Hierarchy"],
    category: "church",
    keywords: ["bishop", "priest", "deacon", "clergy", "ordination", "Holy Orders", "diocese", "presbyter", "ordained ministry", "call no man father", "why call priests Father", "Matthew 23:9", "Holy Orders", "sacrament of Holy Orders", "ordination", "ordained", "priesthood", "ministerial priesthood", "priesthood of all believers", "women priests", "Melchizedek", "seminary", "vocation to the priesthood"],
    summary:
      "Bishops, priests, and deacons are the three degrees of the Sacrament of Holy Orders. Bishops are successors of the apostles, each shepherding a local Church, or diocese, in communion with the pope. Priests are their co-workers, who preach, celebrate the sacraments, and lead parishes. Deacons are ordained for service: they assist at the liturgy and distribute Communion, proclaim the Gospel and preach, bless marriages, preside at funerals, and serve in works of charity.",
    explanation: [
      "The New Testament already shows the apostles appointing leaders: seven men chosen to serve in Jerusalem (Acts 6:1–6), presbyters appointed in every church (Acts 14:23; Titus 1:5), and instructions for bishops and deacons (1 Timothy 3).",
      "Early in the second century, St. Ignatius of Antioch told the churches he addressed to follow the bishop, the presbytery, and the deacons, an early witness to this threefold ministry.",
      "Bishops receive the fullness of the sacrament. Priests share in their ministry, above all in celebrating the Eucharist. Deacons are ordained “not unto the priesthood, but unto the ministry.”",
      "In the Latin Church, ordained ministers other than permanent deacons are normally chosen from among men who live a celibate life. Since the Second Vatican Council, the Latin Church has restored the permanent diaconate, which married men may receive; the Eastern Churches had always kept it.",
      "Why call priests “Father”? Jesus said, “Call no one on earth your father; you have but one Father in heaven” (Matthew 23:9). He said it while warning religious leaders against seeking honor, and in the same passage he says not to be called “Rabbi” or teacher (Matthew 23:8). Yet the New Testament uses “father” for spiritual leaders: St. Paul writes, “I became your father in Christ Jesus through the gospel” (1 Corinthians 4:15), and St. John writes, “I am writing to you, fathers” (1 John 2:13). Catholics read Jesus’ words as a warning against pride rather than a ban on the word; calling a priest “Father” is a custom that expresses spiritual fatherhood. In one of his parables, Jesus has the rich man address Abraham as “Father Abraham” (Luke 16:24).",
      "The sacrament of Holy Orders: Holy Orders is “the sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church until the end of time” (CCC 1536). It has three degrees: bishop, priest (presbyter), and deacon.",
      "Old Testament priesthood: all Israel was called “a kingdom of priests” (Exodus 19:6), yet God set apart the tribe of Levi and the sons of Aaron to offer sacrifice on the people's behalf (CCC 1539). Christians have long seen a figure of Christ in Melchizedek, the “priest of God Most High” who brought out bread and wine (Genesis 14:18), and in the psalm addressed to the Messiah: “You are a priest forever in the manner of Melchizedek” (Psalm 110:4; Hebrews 5:5–6; CCC 1544).",
      "One priest, Christ: the Letter to the Hebrews teaches that Christ offered himself “once for all” (Hebrews 7:27). The Church agrees: “Only Christ is the true priest, the others being only his ministers” (CCC 1545). The ministerial priesthood does not add to Christ's priesthood or repeat his sacrifice; it makes his one priesthood present, as the Mass makes his one sacrifice present (CCC 1545).",
      "Instituted by Christ: Jesus chose the Twelve and sent them as he had been sent: “As the Father has sent me, so I send you” (John 20:21). At the Last Supper he told them, “do this in memory of me” (Luke 22:19), and the Church teaches that he thereby “constituted them priests of the New Testament” (CCC 1337).",
      "Laying on of hands: the apostles handed on ministry by prayer and the imposition of hands (Acts 6:6; 13:3). Paul reminds Timothy of “the gift of God that you have through the imposition of my hands” (2 Timothy 1:6; see 1 Timothy 4:14). The essential rite is still the bishop's laying on of hands with a prayer asking God to pour out the Holy Spirit for the ministry being conferred (CCC 1573).",
      "Early witnesses: writing around 96, St. Clement of Rome said the apostles “appointed the first fruits [of their labours]... to be bishops and deacons,” and arranged that when these died, “other approved men should succeed them in their ministry” (1 Clement 42, 44). Around 110, St. Ignatius of Antioch wrote, “See that you all follow the bishop, even as Jesus Christ does the Father, and the presbytery as you would the apostles” (Smyrnaeans 8), and of bishop, presbyters, and deacons, “Apart from these, there is no Church” (Trallians 3).",
      "A permanent character: like Baptism and Confirmation, ordination “confers an indelible spiritual character and cannot be repeated or conferred temporarily” (CCC 1582). The ordained minister acts in persona Christi Capitis, in the person of Christ the Head, above all in celebrating the sacraments (CCC 1548). His ministry does not depend on his personal holiness, though he is called to holiness.",
      "Who may be ordained: “Only a baptized man (vir) validly receives sacred ordination” (CCC 1577), because the Church holds itself bound by Christ's choice of men as apostles. Pope John Paul II declared that “the Church has no authority whatsoever to confer priestly ordination on women and that this judgment is to be definitively held by all the Church's faithful” (Ordinatio Sacerdotalis 4). In the same letter he noted that Mary received neither the apostles' mission nor the ministerial priesthood, which shows that this practice is not a judgment that women have lesser dignity (Ordinatio Sacerdotalis 3). No one has a right to be ordained; the Church calls candidates (CCC 1578).",
      "The priesthood of all believers: many Protestants cite 1 Peter 2:9, “you are ‘a chosen race, a royal priesthood,’” to argue that there is no separate ordained priesthood. Catholics agree that all the baptized share in Christ's priesthood. But Peter is quoting Exodus 19:6, and Israel was both a priestly people and served by ordained priests. The Church teaches that the common priesthood and the ministerial priesthood “differ essentially” and that the ministerial priesthood “is at the service of the common priesthood” (CCC 1547).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "874–879, 886", url: ccc("__P2A") },
        { paragraphs: "1554–1571", url: ccc("__P4U") },
        { paragraphs: "1577–1579", url: ccc("__P4X") },
        { paragraphs: "1336–1337", url: ccc("__P3Z") },
        { paragraphs: "1536", url: ccc("__P4R") },
        { paragraphs: "1539–1548", url: ccc("__P4T") },
        { paragraphs: "1573", url: ccc("__P4V") },
        { paragraphs: "1581–1584", url: ccc("__P4Y") },
      ],
      scripture: [
        { passage: "Acts 6:1–6", url: bible("acts/6") },
        { passage: "Acts 14:23", url: bible("acts/14") },
        { passage: "1 Timothy 3:1–13", url: bible("1timothy/3") },
        { passage: "Titus 1:5–9", url: bible("titus/1") },
        { passage: "Exodus 19:3–6", url: bible("exodus/19") },
        { passage: "Genesis 14:18–20", url: bible("genesis/14") },
        { passage: "Psalm 110:4", url: bible("psalms/110") },
        { passage: "Hebrews 5:1–10", url: bible("hebrews/5") },
        { passage: "Luke 22:14–20", url: bible("luke/22") },
        { passage: "2 Timothy 1:6", url: bible("2timothy/1") },
        { passage: "1 Peter 2:4–10", url: bible("1peter/2") },
      ],
      documents: ["lumen-gentium", "ordinatio-sacerdotalis"],
    },
    resources: ["ca-bishop-priest-deacon", "ca-call-no-man-father", "clement-1-corinthians", "ignatius-smyrnaeans", "ca-biblical-blueprint-priesthood"],
    related: ["apostolic-succession", "what-is-the-pope", "what-is-the-church", "what-is-sacred-tradition"],
  },
  {
    slug: "what-is-the-magisterium",
    title: "The Magisterium",
    question: "Who teaches with authority in the Church?",
    alsoKnownAs: ["Magisterium", "Teaching office of the Church", "Ordinary and extraordinary Magisterium"],
    category: "church",
    keywords: ["Magisterium", "teaching authority", "who decides what Catholics believe", "pope and bishops", "teaching office", "religious assent", "ordinary magisterium", "extraordinary magisterium", "ecumenical council", "can the Church change teaching", "interpretation of Scripture"],
    summary:
      "The Magisterium is the Church's living teaching office: the pope and the bishops in communion with him, who have the task of authentically interpreting God's word, handed on in Scripture and Tradition. It is not above the word of God but serves it, teaching only what has been handed on. Catholics believe Christ gave this office so that the faith would be preserved without error.",
    explanation: [
      "Who: Christ entrusted the task of authentically interpreting the word of God to the bishops in communion with the successor of Peter, the bishop of Rome (CCC 85). Bishops, with priests as co-workers, are “authentic teachers” of the apostolic faith (CCC 888).",
      "A servant of the word: “this Magisterium is not superior to the Word of God, but is its servant. It teaches only what has been handed on to it” (CCC 86, quoting Dei Verbum 10). It listens to the word, guards it, and explains it faithfully.",
      "Why: its mission is to keep God's people in the truth that sets them free and to guarantee “the objective possibility of professing the true faith without error” (CCC 890). Jesus told the apostles, “Whoever listens to you listens to me” (Luke 10:16; CCC 87).",
      "Different levels: the Magisterium teaches infallibly when the pope defines a doctrine ex cathedra, when an ecumenical council defines it with the pope, or when the bishops throughout the world agree that a doctrine is to be held definitively (CCC 891; see “What is papal infallibility?”). Much of its teaching is ordinary and not defined; Catholics give it “religious assent,” a real but distinct response from the assent of faith (CCC 892). How to tell these levels apart is explained in “What is a dogma?”",
      "Scripture, Tradition, Magisterium: the three are so connected that “one of them cannot stand without the others” (CCC 95; see “Is the Bible the only authority?”).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "85–87, 95", url: ccc("__PM") },
        { paragraphs: "888–892", url: ccc("__P2A") },
      ],
      scripture: [
        { passage: "Luke 10:16", url: bible("luke/10") },
        { passage: "Matthew 28:18–20", url: bible("matthew/28") },
        { passage: "John 16:12–13", url: bible("john/16") },
        { passage: "Acts 15:1–29", url: bible("acts/15") },
      ],
      documents: ["dei-verbum", "lumen-gentium", "professio-fidei"],
    },
    resources: ["ca-infallible-teachings", "ca-dogma"],
    related: ["what-is-dogma", "papal-infallibility", "sola-scriptura", "what-is-sacred-tradition", "apostolic-succession"],
  },
  {
    slug: "catholic-and-protestant-differences",
    title: "Catholics and Protestants",
    question: "How are Catholics and Protestants different?",
    alsoKnownAs: ["Catholic vs. Protestant", "Differences between Catholics and Protestants", "Reformation"],
    category: "church",
    keywords: ["Catholic vs Protestant", "difference between Catholic and Protestant", "difference between Catholics and Protestants", "Protestant", "Reformation", "Martin Luther", "what do Catholics and Protestants agree on", "justification", "faith alone", "Bible alone", "Joint Declaration", "ecumenism", "Christian unity"],
    summary:
      "Catholics and Protestants share a great deal: faith in the Trinity, in Jesus Christ as true God and true man who died and rose for us, in the authority of Scripture, and in Baptism. The main differences concern authority (Scripture alone, or Scripture and Tradition with the Church's teaching office), how salvation is received, the number and meaning of the sacraments, the papacy, and the role of Mary and the saints. Protestants also differ widely among themselves.",
    explanation: [
      "Agreement first: baptized Protestants are Christians, brothers and sisters in a real, though imperfect, communion with the Catholic Church (CCC 818, 838). Many elements of sanctification and truth, “the written Word of God; the life of grace; faith, hope, and charity,” are found in their communities (CCC 819).",
      "Justification: in 1999 the Catholic Church and the Lutheran World Federation affirmed together that “by grace alone, in faith in Christ's saving work and not because of any merit on our part, we are accepted by God” and declared “a consensus in basic truths of the doctrine of justification” (Joint Declaration 15, 40). Differences in explanation remain, as do questions about the Church, ministry, and sacraments (Joint Declaration 43). Other Protestant traditions are not party to that declaration.",
      "Authority: Catholics receive God's word through Scripture and Tradition, interpreted by the Church's teaching office; most Protestants hold Scripture as the only infallible rule. See “Is the Bible the only authority?” and “Who teaches with authority in the Church?”",
      "Sacraments and worship: Catholics celebrate seven sacraments and believe the Mass makes present Christ's sacrifice and that he is truly present in the Eucharist; most Protestants recognize two sacraments or ordinances and understand the Lord's Supper in varying ways. See “What are the seven sacraments?”, “Is the Mass a sacrifice?”, and “Why confess to a priest?”",
      "Church and saints: Catholics accept the pope as Peter's successor and ask the prayers of Mary and the saints; Protestants generally reject the papacy and address prayer to God alone. See “Did Jesus make Peter the leader of the apostles?” and “Why not just pray directly to God?”",
      "Many traditions: Lutheran, Reformed, Anglican, Methodist, Baptist, Pentecostal, and non-denominational churches differ on Baptism, the Eucharist, Church structure, and more, so no single description fits all Protestants. The Catholic Church is committed to dialogue and prayer for the unity Christ asked for: “that they may all be one” (John 17:21; Unitatis Redintegratio).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "817–819, 838", url: ccc("__P29") },
        { paragraphs: "1271", url: ccc("__P3N") },
      ],
      scripture: [
        { passage: "John 17:20–23", url: bible("john/17") },
        { passage: "Ephesians 4:1–6", url: bible("ephesians/4") },
      ],
      documents: ["unitatis-redintegratio", "joint-declaration-justification", "ut-unum-sint"],
    },
    resources: ["ca-are-catholics-christian", "westminster-confession"],
    related: ["are-catholics-christians", "sola-scriptura", "already-baptized", "catholic-and-orthodox-differences", "did-jesus-found-a-church"],
  },
  {
    slug: "catholic-and-orthodox-differences",
    title: "Catholics and Orthodox",
    question: "How are Catholics and Orthodox different?",
    alsoKnownAs: ["Catholic vs. Orthodox", "Differences between Catholics and Orthodox", "Great Schism"],
    category: "church",
    keywords: ["Catholic vs Orthodox", "difference between Catholic and Orthodox", "Eastern Orthodox", "Orthodox Church", "Great Schism", "1054", "filioque", "papal primacy", "Patriarch", "Ecumenical Patriarch", "Eastern Catholic", "can Orthodox receive communion", "reunion"],
    summary:
      "Catholics and Orthodox Christians share nearly everything: the apostolic faith, the creeds and the early councils, apostolic succession, all seven sacraments, and devotion to Mary and the saints. The Catholic Church says their communion “lacks little” to be complete. The main differences concern the role of the bishop of Rome, the filioque in the Creed, and certain later doctrinal definitions. Their separation is usually dated to 1054.",
    explanation: [
      "So much in common: the Orthodox Churches “possess true sacraments, above all - by apostolic succession - the priesthood and the Eucharist” (CCC 1399), and the communion between Catholics and Orthodox “is so profound that it lacks little to attain the fullness that would permit a common celebration of the Lord's Eucharist” (CCC 838). Catholic ministers may give the sacraments to Orthodox Christians who ask on their own and are properly disposed (canon 844 §3).",
      "The papacy: both sides agree that in the first millennium Rome held first place among the churches; they disagree on how to interpret the bishop of Rome's prerogatives then, and on how universal primacy should be understood and exercised today (Ravenna Document 41, 43, 45). See “Did Jesus make Peter the leader of the apostles?” and “What is papal infallibility?”",
      "The filioque: the Western Church added that the Spirit proceeds from the Father “and the Son” (filioque) to the Creed of 381, which remains a point of disagreement. The Catechism presents the Eastern and Western formulations as complementary when rightly understood: the East confesses that the Spirit comes from the Father through the Son (CCC 247–248).",
      "Other questions: how the Western councils' later teaching on the papacy should be understood is, in the joint commission's words, a crucial question for the dialogue (Ravenna Document 45), and the two traditions also discuss other teachings defined in the West after the separation. Some differences are matters of discipline rather than doctrine: in the East, married men may be ordained priests, while bishops are chosen from among celibates (CCC 1580). The Eastern Catholic Churches share these Eastern traditions while in full communion with Rome (Orientalium Ecclesiarum).",
      "Toward reconciliation: in 1965 Pope Paul VI and Ecumenical Patriarch Athenagoras I regretted the mutual excommunications of 1054 and committed them “to oblivion,” and the two Churches continue official theological dialogue.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "247–248", url: ccc("__P17") },
        { paragraphs: "838", url: ccc("__P29") },
        { paragraphs: "1399", url: ccc("__P42") },
        { paragraphs: "1580", url: ccc("__P4X") },
      ],
      scripture: [
        { passage: "John 17:20–23", url: bible("john/17") },
        { passage: "John 15:26", url: bible("john/15") },
      ],
      documents: ["unitatis-redintegratio", "orientalium-ecclesiarum", "common-declaration-1965", "ravenna-document", "ut-unum-sint", "canon-law-sacraments"],
    },
    resources: ["ca-what-catholics-believe-about-the-pope", "ca-why-not-orthodox-akin"],
    related: ["catholic-and-protestant-differences", "peter-the-rock", "papal-infallibility", "who-can-receive-communion", "what-is-the-trinity"],
  },
  {
    slug: "catholics-and-muslims",
    title: "Catholics and Muslims",
    question: "What do Catholics and Muslims share, and where do they differ?",
    alsoKnownAs: ["Christianity and Islam", "Catholic vs. Muslim"],
    category: "church",
    keywords: ["Catholics and Muslims", "Christianity and Islam", "Islam", "Muslim", "do Muslims and Christians worship the same God", "Abraham", "Nostra Aetate", "Jesus in Islam", "Mary in Islam", "difference between Christianity and Islam"],
    summary:
      "Catholics and Muslims both worship the one God, Creator of heaven and earth, who has spoken to humanity. Both look to Abraham, honor Jesus and his virgin mother Mary, await the day of judgment, and value prayer, almsgiving, and fasting. They differ above all about who Jesus is: Christians believe he is the Son of God made man, who died and rose again, while Islam honors him as a prophet. They also differ about Muhammad and the Qur'an.",
    explanation: [
      "Catholic teaching: the Second Vatican Council said that the Church “regards with esteem also the Moslems. They adore the one God, living and subsisting in Himself; merciful and all-powerful, the Creator of heaven and earth, who has spoken to men” (Nostra Aetate 3). With Christians, Muslims “adore the one, merciful God, mankind's judge on the last day” (CCC 841).",
      "What is shared: Muslims link their faith to Abraham; “though they do not acknowledge Jesus as God, they revere Him as a prophet. They also honor Mary, His virgin Mother” (Nostra Aetate 3). They await the day of judgment and “value the moral life and worship God especially through prayer, almsgiving and fasting” (Nostra Aetate 3).",
      "Where they differ: Christians confess one God in three persons and Jesus as the eternal Son made man; Islam rejects both (see “Is the Trinity in the Bible?” and “Is Jesus truly God?”). Most Muslims hold that Jesus was not crucified (see “Was Jesus really crucified?”). Christians believe that God's revelation is complete in Christ; Muslims believe the Qur'an is God's final revelation (see “How do Catholics view Muhammad and the Qur'an?”).",
      "Many voices: Islam includes Sunni and Shia Muslims and many schools of law and thought, so not every Muslim explains these beliefs in the same way.",
      "Living together: noting that “not a few quarrels and hostilities have arisen between Christians and Moslems,” the Council urged all “to forget the past and to work sincerely for mutual understanding” and to promote together social justice, moral welfare, peace, and freedom (Nostra Aetate 3).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "841", url: ccc("__P29") },
      ],
      scripture: [
        { passage: "Genesis 12:1–3", url: bible("genesis/12") },
        { passage: "John 1:1–14", url: bible("john/1") },
      ],
      documents: ["nostra-aetate", "lumen-gentium"],
    },
    resources: ["quran-112", "quran-4-171"],
    related: ["muhammad-and-the-quran", "divinity-of-jesus", "trinity-in-scripture", "was-jesus-crucified", "salvation-of-non-christians"],
  },
  {
    slug: "do-all-religions-lead-to-god",
    title: "Do All Religions Lead to God?",
    question: "Do all religions lead to God?",
    alsoKnownAs: ["Religious pluralism", "Are all religions the same?", "Other religions: Hinduism, Buddhism, Sikhism"],
    category: "church",
    keywords: ["do all religions lead to God", "are all religions the same", "religious pluralism", "many paths to God", "relativism", "Hinduism", "Buddhism", "Sikhism", "other religions", "Dominus Iesus", "Nostra Aetate", "interfaith"],
    summary:
      "The Catholic Church respects what is true and holy in other religions and teaches that God's grace can reach people outside the visible Church. But it does not teach that all religions are equally true or equally ways of salvation. Catholics believe that Jesus Christ is the one Savior and the fullness of God's revelation. The world's religions also differ deeply from one another in what they say about God, the human person, and the goal of life.",
    explanation: [
      "Respect: the Church “rejects nothing that is true and holy in these religions” and regards their teachings and ways of life with “sincere reverence,” since they “often reflect a ray of that Truth which enlightens all men.” Yet “she proclaims, and ever must proclaim Christ ‘the way, the truth, and the life’” (Nostra Aetate 2).",
      "Not equal ways: “it would be contrary to the faith to consider the Church as one way of salvation alongside those constituted by the other religions” (Dominus Iesus 21). The equality presupposed in dialogue “refers to the equal personal dignity of the parties in dialogue, not to doctrinal content” (Dominus Iesus 22). Whatever is good and true in other religions is “a preparation for the Gospel” (CCC 843).",
      "Hinduism is “a diverse family of philosophies and traditions” with no single founder or sole authoritative scripture (Hindu American Foundation). Many Hindu schools speak of Brahman, the Ultimate Reality, and seek moksha, liberation from the cycle of birth and rebirth, through paths of devotion, knowledge, action, and meditation. Schools differ deeply, for example on whether the self and the Divine are ultimately one (Advaita) or distinct (Dvaita). Many Hindus regard religious pluralism as essential, acknowledging “more than one path (religion) or way of relating to Truth (God).”",
      "Buddhism traces its teaching to the Buddha's Four Noble Truths: life is marked by suffering, or “stress” (dukkha); it arises from craving; it ceases when craving is relinquished; and the way to that cessation is the Noble Eightfold Path, leading to awakening and nirvana, the “Unbinding” (Dhammacakkappavattana Sutta). Its goal is not communion with a creator God: the Theravada teacher Nyanaponika Thera writes that a creator god “is incompatible with the Buddha's teachings.” Buddhism has several major branches, including Theravada, Zen, Pure Land, and Vajrayana, with very different practices (Lion's Roar).",
      "Sikhism, founded by Guru Nanak in fifteenth-century Punjab, is “strictly monotheistic” and distinct from both Hinduism and Islam (SikhNet). Sikhs practice meditation on God's name, honest work, and sharing with others, and honor the scripture Guru Granth Sahib as the Guru. Liberation (mukti) is union with God, reached by devotion and “the grace of the Guru”: in the words of the Sikh Gurdwara committee, “Man does not become God, only the spark merges in the fire” (SGPC).",
      "These goals, moksha, nirvana, and mukti, are not the same as one another, nor the same as Christian salvation, which is communion with the triune God through Christ. The Islamic view and the Catholic responses are set out below; see also “Can non-Christians be saved?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "842–848", url: ccc("__P29") },
      ],
      scripture: [
        { passage: "John 14:6", url: bible("john/14") },
        { passage: "Acts 17:22–31", url: bible("acts/17") },
        { passage: "1 Timothy 2:3–6", url: bible("1timothy/2") },
      ],
      documents: ["nostra-aetate", "dominus-iesus"],
    },
    resources: ["haf-hinduism-basics", "ati-dhammacakka", "ati-god-idea", "lionsroar-branches", "sikhnet-what-is-sikhism", "sgpc-main-principles"],
    related: ["salvation-of-non-christians", "catholics-and-muslims", "who-is-jesus", "what-is-the-church"],
    debate: {
      catholicPosition: {
        summary:
          "All salvation comes from Christ, the one mediator, through his Church. The Church respects what is true and holy in other religions and recognizes that God's grace can work in them, but it would be contrary to the faith to regard the Church as one way of salvation alongside others, or other religions as complementary to Christ's revelation (Nostra Aetate 2; Dominus Iesus 6, 21; CCC 843, 846).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "islam",
          position:
            "Islam teaches that Islam is the true religion before God: “Whoever seeks a way other than Islam, it will never be accepted from them” (Qur'an 3:85). The Sunni scholar Salman Younas, writing for SeekersGuidance, states that in the consensus of Islamic scholarship “the concept of the universal validity of religions is a heterodox belief.”",
          variations:
            "Muslims read Qur'an 2:62, which promises reward to “the believers, Jews, Christians, and Sabians” who believe in God and the Last Day and do good, in different ways. SeekersGuidance (Sunni) reads it of those who lived before Muhammad's mission or who later accepted Islam. The Shia commentator Allamah Tabatabai, in his commentary al-Mizan, reads it as teaching that religious names gain nothing by themselves: “The only criterion, the only standard, of honour and happiness is the real belief in Allah and the Day of Resurrection, accompanied by good deeds.” Each reading is one interpreter's, not that of all Sunni or all Shia Muslims.",
          arguments: [
            {
              claim: "What counts is real faith in God and good deeds, not religious labels (a reading of Qur'an 2:62).",
              response:
                "Catholics agree that God's grace can reach those who, through no fault of their own, do not know the Gospel but seek God sincerely and try to do his will (Lumen Gentium 16; CCC 847). But they are saved by Christ's grace, not because their religion is an equal path: all salvation “comes from Christ the Head through the Church which is his Body” (CCC 846).",
              authority: "doctrine",
            },
            {
              claim: "Muslims and Christians worship the same one God, so the differences between the religions do not really matter.",
              response:
                "Catholics affirm that Muslims “adore the one, merciful God” together with Christians (CCC 841). But the two faiths differ about who God has revealed himself to be: Christians believe in one God in three persons and in Jesus as the Son of God made man, which Islam denies. Respect for Muslims does not require treating those differences as unimportant (Dominus Iesus 22).",
              authority: "doctrine",
            },
          ],
          sources: ["quran-3-85", "quran-2-62", "seekers-quran-2-62", "almizan-2-62"],
        },
      ],
    },
  },
];
