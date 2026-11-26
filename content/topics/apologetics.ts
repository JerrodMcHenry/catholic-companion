import type { Topic } from "../types";
import { bible, ccc } from "./refs";

// Debate topics. These are ordinary topics with a `debate` section, kept in their own
// file only because they are long. Every tradition page that lists one links here;
// the content itself exists once.

export const apologeticsTopics: Topic[] = [
  {
    slug: "sola-scriptura",
    title: "Sola Scriptura",
    question: "Is the Bible the only authority?",
    alsoKnownAs: ["Sola Scriptura", "Scripture alone", "Bible alone"],
    category: "objections",
    keywords: [
      "Bible only",
      "only the Bible",
      "Bible authority",
      "authority of Scripture",
      "Sacred Tradition",
      "tradition",
      "Magisterium",
      "authority",
      "Reformation",
      "Protestant",
      "canon of Scripture",
      "2 Timothy 3:16",
      "traditions of men",
      "canon of Scripture", "who decided the Bible", "table of contents",
    ],
    summary:
      "Many Protestants hold that Scripture alone is the final, infallible authority for Christian faith. Catholics also receive the Bible as the inspired word of God, but believe God’s revelation is handed on in two ways, through Sacred Scripture and Sacred Tradition, and that the Church’s teaching office serves both by interpreting them faithfully.",
    explanation: [
      "Common ground: Catholics agree that Scripture is inspired by God and without error in what it teaches for our salvation. The disagreement is whether Scripture is the only infallible rule of faith, or whether God also hands on his revelation through Sacred Tradition, interpreted by the Church’s teaching office (CCC 80–83).",
      "The canon question: the Bible has no inspired table of contents. For a time Christians disagreed about some books: around 325, Eusebius listed James, Jude, 2 Peter, and 2 and 3 John among the “disputed writings, which are nevertheless recognized by many” (Church History 3.25). The Church teaches that “it was by the apostolic Tradition that the Church discerned which writings are to be included in the list of the sacred books” (CCC 120). Many Protestants answer that the Church recognized the canon rather than creating it, or that the books authenticate themselves; Catholics reply that recognizing which books are Scripture still depends on a trustworthy witness outside Scripture itself.",
      "Faith before the New Testament was complete: the first Christians lived by the apostles’ preaching before the New Testament was finished or collected (CCC 83). Around 180, Irenaeus noted that whole peoples believed in Christ “without paper or ink, … carefully preserving the ancient tradition” (Against Heresies 3.4.2).",
      "The Church’s role: Paul calls “the church of the living God” “the pillar and foundation of truth” (1 Timothy 3:15), and tells the Thessalonians to hold fast to traditions received “either by an oral statement or by a letter of ours” (2 Thessalonians 2:15). The Church teaches that its teaching office “is not above the word of God, but serves it” (Dei Verbum 10).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "80–83", url: ccc("__PL") },
        { paragraphs: "84–95", url: ccc("__PM") },
        { paragraphs: "120", url: ccc("__PR") },
      ],
      scripture: [
        { passage: "2 Thessalonians 2:15", url: bible("2thessalonians/2") },
        { passage: "2 Timothy 2:2", url: bible("2timothy/2") },
        { passage: "2 Timothy 3:14–17", url: bible("2timothy/3") },
        { passage: "John 16:12–13", url: bible("john/16") },
        { passage: "1 Timothy 3:14–15", url: bible("1timothy/3") },
      ],
      documents: ["dei-verbum"],
    },
    resources: ["ca-scripture-and-tradition", "video-akin-white-sola-scriptura", "eusebius-church-history-3", "irenaeus-against-heresies-3-4"],
    related: ["catholic-bible-books", "what-is-sacred-tradition", "how-to-read-the-bible"],
    debate: {
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Scripture is the only infallible rule of faith. Creeds, councils, and church traditions can be valuable guides, but they are fallible and must always be tested by the Bible. The Westminster Confession, for example, teaches that everything necessary for salvation is either set down in Scripture or can be deduced from it, and that the Holy Spirit speaking in Scripture is the supreme judge of all controversies.",
          variations:
            "Protestant churches apply this principle in different ways. The Lutheran Formula of Concord, for example, holds Scripture as the only rule and norm of teaching while receiving the ancient creeds as faithful witnesses to it. Churches and theologians differ in how much weight they give to the creeds and the early Church.",
          arguments: [
            {
              claim:
                "Scripture is “inspired by God” and equips believers “for every good work” (2 Timothy 3:16–17). If it fully equips us, nothing else is needed.",
              response:
                "Catholics fully agree that Scripture is inspired and profitable. But the passage says Scripture equips us; it does not say Scripture is the only authority. In the same letter, Paul tells Timothy to entrust what he heard from Paul to faithful people who will teach others (2 Timothy 2:2). And when Paul wrote, the New Testament had not yet been gathered into one collection.",
              authority: "apologetic-argument",
            },
            {
              claim:
                "Jesus condemned people who “disregard God’s commandment but cling to human tradition” (Mark 7:8). Tradition can override God’s word.",
              response:
                "Jesus was criticizing particular human customs that contradicted God’s commandments, not everything handed down. Paul tells the Thessalonians to “hold fast to the traditions that you were taught, either by an oral statement or by a letter of ours” (2 Thessalonians 2:15). The Church distinguishes the Tradition that comes from the apostles from changeable human customs.",
              authority: "apologetic-argument",
            },
            {
              claim:
                "Church leaders and councils have made mistakes. Only Scripture is guaranteed to be without error, so it must judge everything else.",
              response:
                "Catholics agree that individual leaders can sin and err, and that Scripture is without error. The Church teaches that its teaching office “is not above the word of God, but serves it” (Dei Verbum 10), relying on Christ’s promise that the Spirit would guide his disciples to all truth (John 16:13). Catholics also point out that the Bible contains no inspired list of its own books: the Church recognized the canon through apostolic Tradition.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "formula-of-concord"],
        },
      ],
      catholicPosition: {
        summary:
          "Sacred Scripture and Sacred Tradition flow from the same divine source and together form one sacred deposit of the word of God, entrusted to the Church. The task of authentically interpreting that word belongs to the Church’s living teaching office (the Magisterium), which is not above the word of God but serves it. Scripture, Tradition, and the Magisterium work together, and none can stand without the others.",
        authority: "doctrine",
      },
      fathers: [
        {
          name: "St. Irenaeus of Lyons",
          work: "Against Heresies, Book 3, Chapter 3 (c. 180)",
          note: "Answers false teachers by pointing to the tradition of the apostles, preserved in the churches through the succession of bishops.",
          url: "https://www.newadvent.org/fathers/0103303.htm",
        },
        {
          name: "St. Basil the Great",
          work: "On the Holy Spirit, Chapter 27 (c. 375)",
          note: "Says the Church holds some beliefs and practices from written teaching and others from the unwritten tradition of the apostles, and that both have the same force.",
          url: "https://www.newadvent.org/fathers/3203.htm",
        },
      ],
    },
  },
  {
    slug: "divinity-of-jesus",
    title: "The Divinity of Jesus",
    question: "Is Jesus truly God?",
    alsoKnownAs: ["Divinity of Christ", "Deity of Christ", "Incarnation"],
    category: "objections",
    keywords: [
      "Jesus is God",
      "is Jesus God",
      "Son of God",
      "Trinity",
      "prophet",
      "messenger",
      "Muslim",
      "Qur’an",
      "Koran",
      "Jehovah",
      "John 1:1",
      "a god",
      "firstborn of creation",
      "Michael the archangel",
      "Nicaea",
      "Arius",
      "Jesus never claimed to be God", "Son of Man", "Daniel 7", "Marana tha",
    ],
    summary:
      "Christians have confessed from the beginning that Jesus Christ is the eternal Son of God who became man: truly God and truly human. Muslims honor Jesus as a great prophet and the Messiah, but believe he is not God. Jehovah’s Witnesses believe Jesus is God’s Son and first creation, exalted above all others, but not Almighty God. The Catholic Church, together with the Orthodox and most Protestants, professes that the Son is one in being with the Father.",
    explanation: [
      "A cumulative case: no single verse settles the question. The evidence works together: Jesus’ own words, the New Testament’s use of Old Testament passages about the LORD, and the worship of Jesus by the earliest Christians.",
      "Jesus’ claim at his trial: when the high priest asked, “Are you the Messiah, the son of the Blessed One?” Jesus answered, “I am; and ‘you will see the Son of Man seated at the right hand of the Power and coming with the clouds of heaven’” (Mark 14:61–62). He was drawing on Daniel’s vision of “one like a son of man” who comes with the clouds and receives an “everlasting dominion” (Daniel 7:13–14). The high priest called this blasphemy (Mark 14:63–64). Catholic and many other interpreters read it as a claim to share God’s own authority; skeptics such as Bart Ehrman read the scene differently.",
      "Old Testament passages about the LORD applied to Jesus: God says in Isaiah, “I am the first, I am the last; there is no God but me” (Isaiah 44:6), and the risen Jesus says, “I am the first and the last” (Revelation 1:17). Joel promises that “everyone who calls upon the name of the LORD will escape harm” (Joel 3:5; 2:32 in some Bibles), and Paul applies this to confessing that Jesus is Lord (Romans 10:9–13). God swears, “To me every knee shall bend” (Isaiah 45:23), and Paul writes that “at the name of Jesus every knee should bend” (Philippians 2:10–11). After quoting Isaiah’s vision of the Lord’s glory, John writes, “Isaiah said this because he saw his glory and spoke about him” (John 12:41). These applications are made by the New Testament writers themselves.",
      "The earliest worship: Paul preserves an Aramaic prayer in a Greek letter, “Marana tha,” which the NABRE explains as an expression “probably used in the early Christian liturgy,” meaning “O Lord, come!” (1 Corinthians 16:22). Around 110, Ignatius of Antioch called Christ “Jesus Christ, our God” (Letter to the Ephesians, greeting). An outsider confirms the practice: around 112, the Roman governor Pliny the Younger reported to the emperor Trajan that Christians met before dawn to “sing responsively a hymn to Christ as to a god” (Letters 10.96).",
      "Follow-up questions: Jesus also said the Father is greater than he (John 14:28) and that the Son does not know the day or hour (Mark 13:32). The Church reads such passages in light of Christ’s two natures. As man, he had true human knowledge that could grow (CCC 472) and a human will that obeyed the Father (CCC 475). St. Augustine explained “the Father is greater than I” as spoken of “the form of a servant, to whom in the form of God the Son is equal” (On the Trinity 1.8.15). Of the day and the hour, the Catechism says that “what he admitted to not knowing in this area, he elsewhere declared himself not sent to reveal” (CCC 474). The responses to Muslim and Jehovah’s Witness readings are under “Common objections and Catholic responses” below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "200", url: ccc("__P16") },
        { paragraphs: "253", url: ccc("__P17") },
        { paragraphs: "464–469, 472–475", url: ccc("__P1J") },
      ],
      scripture: [
        { passage: "John 1:1–18", url: bible("john/1") },
        { passage: "John 8:58", url: bible("john/8") },
        { passage: "John 20:28", url: bible("john/20") },
        { passage: "Philippians 2:5–11", url: bible("philippians/2") },
        { passage: "Colossians 1:15–20", url: bible("colossians/1") },
        { passage: "Daniel 7:13–14", url: bible("daniel/7") },
        { passage: "Mark 14:60–64", url: bible("mark/14") },
        { passage: "Isaiah 44:6", url: bible("isaiah/44") },
        { passage: "Revelation 1:17–18", url: bible("revelation/1") },
        { passage: "Romans 10:9–13", url: bible("romans/10") },
        { passage: "John 12:37–41", url: bible("john/12") },
        { passage: "1 Corinthians 16:22", url: bible("1corinthians/16") },
      ],
      documents: ["dominus-iesus"],
    },
    resources: ["ca-jesus-is-god", "ca-god-of-the-jws", "ca-divinity-mark-broussard", "podcast-akin-trial-son-of-man", "pliny-letters-10-96", "augustine-on-the-trinity-1"],
    related: ["sola-scriptura", "real-presence"],
    debate: {
      perspectives: [
        {
          tradition: "islam",
          position:
            "Islam teaches that God is absolutely one and has no partner or offspring. The Qur’an honors Jesus (ʿĪsā) as the Messiah, a messenger of God, born of the Virgin Mary, who worked miracles by God’s permission. But it denies that he is divine or the Son of God, and it calls on Christians not to speak of God as “three.”",
          variations:
            "Muslims read these passages within different traditions of interpretation. This summary follows the Qur’an’s own statements rather than any one school.",
          arguments: [
            {
              claim:
                "God is one. Saying that God has a son, or that God is three, compromises his absolute oneness.",
              response:
                "Catholics also confess that there is only one God. The Trinity is not three gods, but one God in three persons, each of whom is God whole and entire. The Church professes that the Son is eternally begotten of the Father, not made: “Son” names an eternal relationship within the one God, not a physical birth or a partner beside God. The Qur’an asks, “How could He have a son when He does not have a companion?” (Qur’an 6:101, Sahih International); Christians also reject the idea of a son born of a divine consort.",
              authority: "doctrine",
            },
            {
              claim:
                "Jesus’ original message was that of a prophet. Belief in his divinity was a later development, made official centuries later at the Council of Nicaea.",
              response:
                "Belief in Jesus’ divinity appears in the earliest Christian writings. Paul’s letters, written within a few decades of Jesus’ death, speak of Christ as being “in the form of God” (Philippians 2:6). Around the year 110, St. Ignatius of Antioch called Jesus “our God.” The Council of Nicaea in 325 defended this existing faith against a new teaching; it did not invent it.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["quran-4-171", "quran-5-116", "quran-112"],
        },
        {
          tradition: "jehovahs-witnesses",
          position:
            "Jehovah’s Witnesses teach that Jehovah alone is Almighty God. Jesus is God’s Son, created by Jehovah before everything else, who then worked with his Father in creating all other things. They identify him with the archangel Michael before and after his life on earth. They honor him as Savior and King, but hold that he is not equal to the Father, and regard the Trinity as unbiblical.",
          variations:
            "This summary follows the movement’s official publications on jw.org. Individual Witnesses may explain their beliefs in their own ways.",
          arguments: [
            {
              claim:
                "John 1:1 should read “the Word was a god,” as in the New World Translation, because the Greek has no definite article before the final word for God.",
              response:
                "Catholic Bibles, including the New American Bible used by the U.S. bishops, translate the verse “the Word was God.” Catholics read the Greek as describing what the Word is, fully divine, while the Word remains distinct from the Father. The same Gospel ends with Thomas calling the risen Jesus “My Lord and my God” (John 20:28).",
              authority: "apologetic-argument",
            },
            {
              claim:
                "Colossians 1:15 calls Jesus “the firstborn of all creation,” so he must be the first created being.",
              response:
                "In the Bible, “firstborn” can mean first in rank and heir, not only first in time. God says of King David, “I myself make him the firstborn” (Psalm 89:28). The very next verse in Colossians says that in Christ “were created all things in heaven and on earth” (Colossians 1:16), which Catholics read as placing him outside creation, not within it.",
              authority: "apologetic-argument",
            },
            {
              claim:
                "Jesus said, “the Father is greater than I” (John 14:28). He cannot be equal to God.",
              response:
                "Catholics believe the eternal Son truly became man. As man, he prayed to the Father, obeyed him, and could say the Father was greater. This does not cancel the many passages where Jesus speaks and acts as only God can, such as forgiving sins (Mark 2:5–7) and saying “before Abraham came to be, I AM” (John 8:58).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["jw-who-is-jesus", "jw-john-1-1", "jw-michael"],
        },
      ],
      catholicPosition: {
        summary:
          "Jesus Christ is one divine person, the eternal Son of God, who became truly man without ceasing to be truly God. He is not part God and part man, but fully both. The Church solemnly defined this faith at the Councils of Nicaea (325) and Chalcedon (451).",
        authority: "dogma",
      },
      fathers: [
        {
          name: "St. Ignatius of Antioch",
          work: "Letter to the Ephesians (c. 110)",
          note: "Writing on his way to martyrdom, calls Jesus Christ “our God” and describes him as God existing in flesh.",
          url: "https://www.newadvent.org/fathers/0104.htm",
        },
      ],
    },
  },
  {
    slug: "problem-of-evil",
    title: "The Problem of Evil",
    question: "Why does God allow suffering?",
    alsoKnownAs: ["Problem of evil", "Theodicy"],
    category: "objections",
    keywords: [
      "suffering",
      "evil",
      "pain",
      "why bad things happen",
      "bad things happen to good people",
      "God allows evil",
      "natural disasters",
      "free will",
      "atheist",
      "agnostic",
      "Job",
      "God is silent",
      "suffering", "why does God allow suffering", "why does God allow evil", "natural disasters", "innocent suffering", "Job",
    ],
    summary:
      "If God is all-good and all-powerful, why is there so much suffering? Many atheists see this as strong evidence against God, and many agnostics find it a serious reason for doubt. The Church does not offer a quick answer. It teaches that God is never the cause of moral evil, that he permits evil out of respect for human freedom and can bring good even from it, and that the deepest answer is Christ’s own suffering, death, and resurrection.",
    explanation: [
      "Two kinds of question: the problem of evil can be raised as a philosophical argument, or cried out in the middle of suffering. Most of this page addresses the first; if you are suffering now, the last paragraph is for you. The Church does not pretend the question is easy: “no quick answer will suffice. Only Christian faith as a whole constitutes the answer to this question” (CCC 309).",
      "The argument in two forms: the logical form claims that an all-good, all-powerful God and the existence of evil are contradictory. The evidential form grants that God might have reasons to permit some evil, but argues that the amount and kind of suffering we see, especially of children and of animals, make God's existence unlikely. Christian thinkers answer the logical form by noting that there would be a contradiction only if God could have no good reason for permitting evil. The evidential form is weightier and remains seriously debated; the responses below do not claim to settle every case.",
      "Moral evil and freedom: much suffering comes from human choices. God made angels and human beings free, able to love and therefore able to refuse. “God is in no way, directly or indirectly, the cause of moral evil. He permits it, however, because he respects the freedom of his creatures and, mysteriously, knows how to derive good from it” (CCC 311). Permitting is not causing: God does not will the sin, but he does not override the freedom that makes love possible.",
      "Natural suffering: disease, disaster, and death are harder to explain. The Catechism teaches that God freely willed a world “in a state of journeying” toward its perfection, which includes “both constructive and destructive forces of nature” (CCC 310), and it links suffering and death to the disorder that entered with the first sin (CCC 400, 1521). It does not claim that each illness or disaster has a reason we can name, and Jesus rejected the idea that suffering always points to the sufferer's own sin (John 9:1–3; Luke 13:1–5).",
      "Providence: St. Augustine wrote that God, “being Himself supremely good, would never permit the existence of anything evil among His works, if He were not so omnipotent and good that He can bring good even out of evil” (Enchiridion 11), and St. Thomas Aquinas cited these words in answering this very objection to God's existence (Summa Theologiae I, q. 2, a. 3). Scripture shows the pattern in Joseph's words to the brothers who sold him: “Even though you meant harm to me, God meant it for good” (Genesis 50:20). Yet “the ways of his providence are often unknown to us” (CCC 314): Christians do not claim to see the reason for each evil.",
      "The Book of Job: Job's friends insist that his suffering must be punishment for sin; God rejects their answer (Job 42:7). God answers Job not with an explanation but with a vision of creation's vastness: “Where were you when I founded the earth?” (Job 38:4). Pope John Paul II wrote that Job shows the meaning of suffering is not to be “unreservedly linked to the moral order, based on justice alone” (Salvifici Doloris 11).",
      "God's answer in Christ: Christianity does not offer a God who watches suffering from a distance. In Jesus, God enters it: he wept, was betrayed, tortured, and crucified, and he prayed from the cross, “My God, my God, why have you forsaken me?” (Mark 15:34). The greatest evil ever committed, the killing of God's Son, became the means of our redemption (CCC 312). His resurrection is the promise that evil will not have the last word: God “will wipe every tear from their eyes” (Revelation 21:4). Suffering joined to Christ can share in his saving work (Colossians 1:24; CCC 1521).",
      "Hope and the limits of knowledge: “I consider that the sufferings of this present time are as nothing compared with the glory to be revealed for us” (Romans 8:18). The Church teaches that God would not permit an evil without bringing a good from it, “by ways that we shall fully know only in eternal life” (CCC 324). Skeptics reply that appealing to mystery evades the question. Christians answer that finite minds should expect not to see all the purposes of an infinite God (“my thoughts are not your thoughts,” Isaiah 55:8), and that the Cross shows God's love even where his reasons are hidden.",
      "If you are suffering now: arguments are not what most people need in grief or pain. Scripture gives words for lament and protest (Psalms 13 and 22). Your suffering is not necessarily a sign of personal sin. Pray as you can, stay close to people who care for you, receive the sacraments, and talk with a priest; see also the Anointing of the Sick and Death, Funerals, and Grief. Pope John Paul II admitted that suffering “always remains a mystery: we are conscious of the insufficiency and inadequacy of our explanations” (Salvifici Doloris 13).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "309–314, 324", url: ccc("__P19") },
        { paragraphs: "385, 400, 412", url: ccc("__P1C") },
        { paragraphs: "1521", url: ccc("__P4N") },
      ],
      scripture: [
        { passage: "Genesis 50:20", url: bible("genesis/50") },
        { passage: "Job 38–42", url: bible("job/38") },
        { passage: "Romans 8:18–39", url: bible("romans/8") },
        { passage: "Genesis 50:15–21", url: bible("genesis/50") },
        { passage: "Job 38:1–7", url: bible("job/38") },
        { passage: "John 9:1–3", url: bible("john/9") },
        { passage: "Romans 8:18–28", url: bible("romans/8") },
        { passage: "Revelation 21:1–5", url: bible("revelation/21") },
      ],
      documents: ["salvifici-doloris", "salvifici-doloris"],
    },
    resources: ["ca-problem-of-evil", "video-barron-oconnor-evil", "augustine-enchiridion", "aquinas-summa-i-q2", "ca-horn-horrible-suffering"],
    related: ["divinity-of-jesus"],
    debate: {
      perspectives: [
        {
          tradition: "atheism",
          position:
            "The argument from evil holds that the evil and suffering in the world give good reason not to believe in God. One version, the logical problem, claims that an all-powerful, all-knowing, perfectly good God could not coexist with evil at all. Another, the evidential problem, argues more modestly that the amount and kind of suffering in the world, such as the suffering of children and animals, makes the existence of such a God unlikely.",
          variations:
            "Atheists weigh this argument differently, and not every atheist bases their view on it.",
          arguments: [
            {
              claim:
                "A perfectly good God would prevent all evil, and an all-powerful God could. Evil exists, so such a God does not exist.",
              response:
                "There is no contradiction if God has a good reason to permit evil. One such reason is the gift of real freedom, which makes love possible but also makes it possible to do wrong. The Church teaches that God permits moral evil because he respects the freedom of his creatures, and that he can bring good even out of evil. The Christian philosopher Alvin Plantinga’s “free will defense” is a well-known version of this reply.",
              authority: "apologetic-argument",
            },
            {
              claim:
                "Even if some suffering serves a purpose, much seems pointless: a natural disaster that kills thousands, or an animal dying slowly where no one ever sees it.",
              response:
                "Catholics argue that our inability to see a reason does not show there is none; a finite mind should expect not to grasp all the purposes of an infinite God. The Church also teaches that God created a world “in a state of journeying” toward its final perfection, in which physical evil exists alongside physical good until creation is complete.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["sep-problem-of-evil"],
        },
        {
          tradition: "agnosticism",
          position:
            "Many agnostics do not claim that suffering disproves God. Instead they find that it makes belief in a loving God hard to accept, or that it leaves the question of God’s existence unresolved.",
          variations:
            "For some people this is mainly an intellectual question; for others it comes from personal experience of grief or loss.",
          arguments: [
            {
              claim:
                "If God exists and cares, why is he so silent and hidden when people suffer?",
              response:
                "The Church does not deny how dark suffering can be, and the Bible itself gives voice to this cry, in Job and the Psalms. Christians believe God answered not with an explanation but by entering suffering himself: in Jesus, God suffered and died, and rose to defeat evil. Faith does not remove every question, but it gives the hope that suffering will not have the last word.",
              authority: "pastoral-reflection",
            },
          ],
          sources: ["sep-atheism-agnosticism"],
        },
      ],
      catholicPosition: {
        summary:
          "God is in no way, directly or indirectly, the cause of moral evil. He permits it because he respects the freedom of his creatures, and he mysteriously knows how to bring good from it. No quick answer will suffice: the Christian faith as a whole, culminating in Christ’s death and resurrection, is the answer to the question of evil.",
        authority: "doctrine",
      },
      fathers: [
        {
          name: "St. Augustine of Hippo",
          work: "Enchiridion (Handbook on Faith, Hope and Love), Chapter 11 (c. 420)",
          note: "Argues that God, being supremely good, would not allow any evil in his works unless he were so powerful and good that he can bring good even out of evil.",
          url: "https://www.newadvent.org/fathers/1302.htm",
        },
      ],
    },
  },
  {
    slug: "did-jesus-found-a-church",
    title: "Did Jesus Found a Church?",
    question: "Did Jesus found a Church?",
    alsoKnownAs: ["Founding of the Church", "Ecclesiology", "Visible Church"],
    category: "church",
    keywords: ["did Jesus start a church", "founded a church", "one true church", "visible church", "invisible church", "Matthew 16:18", "upon this rock I will build my church", "Twelve apostles", "church or just believers", "do I need a church"],
    summary:
      "Catholics believe Jesus did found a Church: he gathered disciples, chose the Twelve with Peter at their head, gave them authority and sacraments, and promised, “upon this rock I will build my church.” That Church is both a spiritual communion and a visible community with a structure meant to last until he returns. Many Protestants agree that Christ founded the Church but understand it chiefly as the whole body of true believers rather than one visible institution.",
    explanation: [
      "What the Gospels show: Jesus proclaimed the Kingdom and gathered a “little flock” around him (CCC 763–764). He chose twelve apostles, gave them a share in his authority, and placed Peter at their head; “the Lord Jesus endowed his community with a structure that will remain until the Kingdom is fully achieved” (CCC 765). He speaks of “my church” (Matthew 16:18) and gives it authority to settle disputes (Matthew 18:17).",
      "Born from the cross: the Church is born above all from Christ's self-giving, anticipated at the Last Supper and fulfilled on the cross (CCC 766). After Pentecost the apostles preached, baptized, and gathered believers into communities devoted to their teaching and the breaking of the bread (Acts 2:41–42).",
      "Visible and spiritual: Catholics believe the Church is at once a visible society with leaders and sacraments and the mystical Body of Christ; the two are one reality (CCC 771). St. Paul calls it “the church of the living God, the pillar and foundation of truth” (1 Timothy 3:15).",
      "Where is that Church today? The Catholic Church teaches that the one Church of Christ “subsists in” the Catholic Church, governed by the successor of Peter and the bishops in communion with him, while “many elements of sanctification and of truth” are found outside its visible structure (CCC 816, 819). Other baptized Christians are brothers and sisters in a real, though imperfect, communion (CCC 838).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "763–766, 771", url: ccc("__P27") },
        { paragraphs: "816, 819, 838", url: ccc("__P29") },
      ],
      scripture: [
        { passage: "Matthew 16:13–19", url: bible("matthew/16") },
        { passage: "Matthew 18:15–18", url: bible("matthew/18") },
        { passage: "Acts 2:37–47", url: bible("acts/2") },
        { passage: "1 Timothy 3:14–15", url: bible("1timothy/3") },
        { passage: "Ephesians 2:19–22", url: bible("ephesians/2") },
      ],
      documents: ["lumen-gentium", "unitatis-redintegratio"],
    },
    resources: ["ca-what-catholics-believe-about-the-pope", "catholicculture-church-not-christ"],
    related: ["what-is-the-church", "peter-the-rock", "apostolic-succession", "catholic-and-protestant-differences"],
    debate: {
      catholicPosition: {
        summary:
          "Christ founded his Church on the apostles with Peter at their head and gave it a visible, lasting structure, sacraments, and teaching authority. The one Church of Christ subsists in the Catholic Church, though elements of sanctification and truth exist outside its visible bounds.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Christ founded the Church, but its essence is the communion of all true believers united to him by faith. The Westminster Confession distinguishes the universal Church, “which is invisible,” made up of all the elect, from the visible Church of all who profess the true religion (25.1–2). The Augsburg Confession defines the Church as “the congregation of saints, in which the Gospel is rightly taught and the Sacraments are rightly administered” (Article VII). On this view no single institution can claim to be the one Church.",
          variations:
            "Protestants differ considerably on church structure: some churches are led by bishops, others by elders, others by their congregations. The Westminster Confession and the Augsburg Confession, for example, define the Church differently from each other (Westminster 25.1–2; Augsburg VII), and both differ from Catholic teaching.",
          arguments: [
            {
              claim: "The true Church is the invisible company of all who believe; outward institutions mix believers and unbelievers and cannot be identified with the Body of Christ.",
              response:
                "Catholics agree that membership in a church does not guarantee holiness and that God alone knows hearts. But the New Testament Church is visible: it has leaders, baptizes, excludes and readmits members (Matthew 18:17; 1 Corinthians 5), and holds a council to settle a dispute (Acts 15). Catholics hold that the visible society and the spiritual communion are “one complex reality” (CCC 771).",
              authority: "apologetic-argument",
            },
            {
              claim: "What makes a church faithful is the pure preaching of the Gospel and right administration of the sacraments, not continuity of institution.",
              response:
                "Catholics agree that the Gospel and the sacraments are essential. They add that Christ also gave the apostles a lasting office, which they handed on (2 Timothy 2:2; CCC 861–862), and that early Christians pointed to succession from the apostles as a sign of the true Church (Irenaeus, Against Heresies 3.3).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "augsburg-confession"],
        },
      ],
    },
  },
  {
    slug: "peter-the-rock",
    title: "Peter the Rock",
    question: "Did Jesus make Peter the leader of the apostles?",
    alsoKnownAs: ["Petrine primacy", "Matthew 16:18", "Papacy in Scripture", "Keys of the kingdom", "Papal primacy"],
    category: "church",
    keywords: ["Peter the rock", "you are Peter", "upon this rock", "keys of the kingdom", "Isaiah 22", "feed my sheep", "Petros petra", "first pope", "primacy of Peter", "is the pope in the Bible", "Cephas", "strengthen your brothers"],
    summary:
      "Catholics believe Jesus made Peter the visible head of the apostles and the rock on which he built his Church, giving him the keys of the kingdom and the charge to strengthen his brothers and feed Christ's sheep. They believe this office continues in Peter's successors, the bishops of Rome. Protestants generally read the “rock” as Peter's confession of faith or Christ himself and see no continuing office; the Orthodox honor Peter's primacy but understand Rome's role differently.",
    explanation: [
      "The key passages: Jesus renames Simon “Peter” (rock) and says, “upon this rock I will build my church” (Matthew 16:18). He gives him “the keys to the kingdom of heaven” and the power to bind and loose (Matthew 16:19). At the Last Supper he prays that Peter's faith may not fail and tells him to “strengthen your brothers” (Luke 22:32). After the Resurrection he tells Peter three times, “Feed my sheep” (John 21:15–17).",
      "The keys: Catholics read the keys in light of Isaiah 22, where the king's steward receives “the key of the House of David” and authority over the household, an office passed from one holder to the next (Isaiah 22:20–22). The Catechism says the keys designate “authority to govern the house of God, which is the Church” (CCC 553).",
      "Peter among the apostles: Peter is named first in the lists of apostles, speaks for them, preaches first at Pentecost, and leads the decision to welcome Gentiles (Acts 2; 10; 15:7). Christ “made Simon alone… the ‘rock’ of his Church” and the office of binding and loosing was also given to the college of apostles united to its head (CCC 881).",
      "Successors: Catholics believe this office, like the apostles' office of shepherding, is permanent and continues in the bishop of Rome, “the perpetual and visible source and foundation of the unity both of the bishops and of the whole company of the faithful” (CCC 882). The First Vatican Council defined this primacy as a dogma in 1870 (Pastor Aeternus).",
      "The Orthodox view: Orthodox Christians honor Peter and agree that Rome held first place among the churches in the first millennium, but understand that primacy differently; their view and the Catholic responses are set out below. St. John Paul II invited other Christians into a “patient and fraternal dialogue” on how the primacy is exercised (Ut Unum Sint 95–96).",
      "First among the Twelve: Peter is always named first in the lists of the apostles, and Matthew says so explicitly: “first, Simon called Peter” (Matthew 10:2).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "552–553", url: ccc("__P1L") },
        { paragraphs: "765", url: ccc("__P27") },
        { paragraphs: "880–882", url: ccc("__P2A") },
      ],
      scripture: [
        { passage: "Matthew 16:13–19", url: bible("matthew/16") },
        { passage: "Isaiah 22:15–25", url: bible("isaiah/22") },
        { passage: "Luke 22:31–32", url: bible("luke/22") },
        { passage: "John 21:15–17", url: bible("john/21") },
        { passage: "John 1:42", url: bible("john/1") },
        { passage: "Matthew 10:1–4", url: bible("matthew/10") },
      ],
      documents: ["lumen-gentium", "vatican-i-pastor-aeternus", "ut-unum-sint", "ravenna-document"],
    },
    resources: ["ca-peter-and-the-papacy", "ca-what-catholics-believe-about-the-pope"],
    related: ["what-is-the-pope", "papal-infallibility", "apostolic-succession", "catholic-and-orthodox-differences"],
    debate: {
      catholicPosition: {
        summary:
          "Jesus made Peter the rock and visible head of the apostles, giving him the keys of the kingdom. This primacy is a permanent office in the Church, continued in the bishop of Rome as Peter's successor, as defined by the First Vatican Council.",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Christ alone is the head and foundation of the Church. Many Protestants read the “rock” of Matthew 16:18 as Peter's confession that Jesus is the Christ, or as Christ himself, and note that Paul calls Christ the only foundation (1 Corinthians 3:11). Even those who accept that Peter was a leader among the apostles deny that his role passed to the bishops of Rome. The Westminster Confession states: “There is no other head of the church but the Lord Jesus Christ. Nor can the pope of Rome, in any sense, be head thereof” (25.6).",
          variations:
            "Protestants agree in rejecting the papacy's claim to universal jurisdiction, but they differ on how to read Matthew 16 and on whether any ministry of unity is desirable. Dialogue continues: the Lutheran–Catholic Joint Declaration lists ecclesial authority and ministry among questions still needing clarification (43), and St. John Paul II invited other Christians into dialogue on how the papal primacy is exercised (Ut Unum Sint 95–96).",
          arguments: [
            {
              claim: "In Greek, Peter is “Petros” and rock is “petra”: different words, so Jesus built the Church on Peter's faith, not on Peter.",
              response:
                "Catholics reply that “Petros” is the masculine form of the word, used because it is a man's name, and that Jesus spoke Aramaic, in which Peter's name, Cephas (John 1:42), and “rock” are the same word. The Catechism also connects the rock with the faith Peter confessed: “Because of the faith he confessed Peter will remain the unshakeable rock of the Church” (CCC 552).",
              authority: "apologetic-argument",
            },
            {
              claim: "Christ is the only foundation (1 Corinthians 3:11); calling Peter the rock takes Christ's place.",
              response:
                "Scripture uses foundation imagery in more than one way: the Church is also “built upon the foundation of the apostles and prophets, with Christ Jesus himself as the capstone” (Ephesians 2:20). Catholics see Peter's role as a ministry entirely dependent on Christ, who remains the “living Stone” (CCC 552).",
              authority: "apologetic-argument",
            },
            {
              claim: "Nothing in Scripture says Peter's role would be passed on, or that it belongs to the bishop of Rome.",
              response:
                "Catholics point to the succession of the royal steward in Isaiah 22, to Christ's promise that the Church would last, and to early writers such as Irenaeus, who traced the succession of the bishops of Rome, and Cyprian, who saw in Peter the origin of the Church's unity (Against Heresies 3.3; The Unity of the Church 4). The historical argument is debated, as the Ravenna Document acknowledges.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession"],
        },
        {
          tradition: "eastern-orthodoxy",
          position:
            "Orthodox Christians honor Peter as the first of the apostles and agree that in the first millennium the bishop of Rome held the first place among the Churches. They deny that this was a primacy of universal jurisdiction. In the words of the Orthodox Church in America, the early councils, “while acknowledging the Pope as the ‘first among equals,’ in no way envision the Bishop of Rome's ‘primacy of honor’ as a ‘supremacy of jurisdiction.’” From the Orthodox perspective, papal claims to jurisdiction over all the Churches were the chief cause of the separation of East and West.",
          variations:
            "Orthodox Churches agree in rejecting papal supremacy but describe primacy among themselves differently. In an official position prepared at the request of its Holy Synod (2013), the Moscow Patriarchate holds that the primacy of honour once held by Rome passed to the Patriarch of Constantinople “as the first among equal Primates of Local Orthodox Churches,” carrying no powers of governance over the whole Church, and it disagreed with the Ravenna Document's section on primacy at the universal level. In January 2014, Metropolitan Elpidophoros of Bursa, a hierarch of the Ecumenical Patriarchate and professor of theology, replied that the Ecumenical Patriarch is “first without equals” (primus sine paribus). Each text speaks from one Church's side of a continuing disagreement, not for all Orthodoxy.",
          arguments: [
            {
              claim: "The early Church knew a primacy of honor, not of jurisdiction; the councils' canons give the bishop of Rome no authority over other Churches.",
              response:
                "Catholics and Orthodox agree that Rome held the first place in the first millennium. The joint commission records that they disagree on how to interpret the evidence about the bishop of Rome's prerogatives, which “was already understood in different ways in the first millennium” (Ravenna 41). Both sides cite the Council of Chalcedon (451): an Orthodox account records that the bishops cried out at the reading of Pope Leo's letter, “Peter has spoken through Leo!”, and adds that the letter “was not the last word” but was examined by the council. Catholics see there a recognized Petrine authority; Orthodox see conciliar reception.",
              authority: "apologetic-argument",
            },
            {
              claim: "Christ alone is the head of the Church; its unity comes from the one faith and the one Eucharist, not from one bishop's jurisdiction.",
              response:
                "Catholics agree that Christ is the head of the Church and that the Eucharist makes the Church. They hold that Christ also gave the Church a visible principle of unity in Peter and his successors (CCC 882). St. John Paul II acknowledged the difficulties the papacy has caused other Christians and committed himself “to find a way of exercising the primacy which, while in no way renouncing what is essential to its mission, is nonetheless open to a new situation” (Ut Unum Sint 95).",
              authority: "doctrine",
            },
          ],
          sources: ["oca-qa-pope-unity", "oca-great-schism", "mospat-primacy-2013", "first-without-equals"],
        },
      ],
      fathers: [
        {
          name: "St. Irenaeus of Lyons",
          work: "Against Heresies, Book 3, Chapter 3 (c. 180)",
          note: "Lists the bishops of Rome in succession from the apostles Peter and Paul as a witness to apostolic teaching.",
          url: "https://www.newadvent.org/fathers/0103303.htm",
        },
        {
          name: "St. Cyprian of Carthage",
          work: "The Unity of the Church, Chapter 4 (c. 251)",
          note: "Quotes Matthew 16:18–19 and John 21 and says Christ gave all the apostles equal power while setting forth unity “as beginning from one.”",
          url: "https://www.newadvent.org/fathers/050701.htm",
        },
      ],
    },
  },
  {
    slug: "papal-infallibility",
    title: "Papal Infallibility",
    question: "What is papal infallibility?",
    alsoKnownAs: ["Ex cathedra", "Infallibility", "Pastor Aeternus"],
    category: "church",
    keywords: ["papal infallibility", "is the pope infallible", "can the pope make mistakes", "ex cathedra", "infallible", "does the pope sin", "First Vatican Council", "Vatican I", "how many infallible statements", "Immaculate Conception", "Assumption"],
    summary:
      "Papal infallibility does not mean the pope cannot sin or never makes mistakes. It means that when the pope, as shepherd and teacher of all Christians, solemnly defines a doctrine of faith or morals to be held by the whole Church, the Holy Spirit protects that definition from error. Such definitions are rare. The same gift belongs to the bishops together with the pope, especially in an ecumenical council.",
    explanation: [
      "The definition: the First Vatican Council (1870) defined that when the Roman pontiff speaks ex cathedra, that is, when in his office as shepherd and teacher of all Christians he defines a doctrine of faith or morals to be held by the whole Church, he possesses the infallibility Christ willed his Church to have. This is a defined dogma (Pastor Aeternus, ch. 4; CCC 891).",
      "What it is not: it is not sinlessness, not inspiration, and not a power to invent new teaching. The Council said the Holy Spirit was promised to Peter's successors “not so that they might, by his revelation, make known some new doctrine, but that, by his assistance, they might religiously guard and faithfully expound the revelation or deposit of faith transmitted by the apostles.” Most papal teaching is not infallible, though Catholics owe it “religious assent” (CCC 892).",
      "Part of a larger gift: Christ willed to give his whole Church a share in his own infallibility, so that the People of God “unfailingly adheres” to the faith (CCC 889). The bishops united with the pope also teach infallibly when they define a doctrine together, above all in an ecumenical council, or when, dispersed throughout the world, they agree on a doctrine to be held definitively (CCC 891; Lumen Gentium 25). How doctrines are classified is explained in “What is a dogma?”",
      "Examples: the two clearest papal definitions are the Immaculate Conception (1854) and the Assumption of Mary (1950) (CCC 491, 966).",
      "Scripture: Catholics see the basis in Christ's prayer that Peter's faith would not fail (Luke 22:32), his promise that the Spirit would guide the apostles “to all truth” (John 16:13), and the Church as “the pillar and foundation of truth” (1 Timothy 3:15).",
      "Other Christians: the Orthodox Churches and most Protestant churches do not accept papal infallibility. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "889–892", url: ccc("__P2A") },
        { paragraphs: "85–87", url: ccc("__PM") },
      ],
      scripture: [
        { passage: "Luke 22:31–32", url: bible("luke/22") },
        { passage: "John 16:12–13", url: bible("john/16") },
        { passage: "Matthew 16:18–19", url: bible("matthew/16") },
        { passage: "1 Timothy 3:15", url: bible("1timothy/3") },
      ],
      documents: ["vatican-i-pastor-aeternus", "lumen-gentium", "professio-fidei"],
    },
    resources: ["ca-infallible-teachings", "ca-peter-and-the-papacy"],
    related: ["what-is-the-magisterium", "what-is-dogma", "what-is-the-pope", "peter-the-rock"],
    debate: {
      catholicPosition: {
        summary:
          "When the pope solemnly defines a doctrine of faith or morals for the whole Church (ex cathedra), he teaches infallibly by the assistance of the Holy Spirit; the same charism belongs to the college of bishops united with him. This was defined by the First Vatican Council and taught again by the Second.",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Only Scripture is infallible. Popes and councils are human and can err, and history shows that they have contradicted one another. The Westminster Confession says the pope cannot “in any sense” be head of the Church (25.6) and that the supreme judge of all controversies is “the Holy Spirit speaking in the Scripture” (1.10). Church teachers are to be tested by the Bible, as the Bereans tested even Paul (Acts 17:11).",
          variations:
            "Protestant confessions agree in rejecting papal infallibility. Many Protestants still receive the ancient creeds as faithful witnesses to Scripture; the Lutheran Formula of Concord, for example, holds Scripture as the only rule while receiving the ancient creeds.",
          arguments: [
            {
              claim: "Some popes taught errors or lived scandalously, which disproves infallibility.",
              response:
                "Catholics agree that popes can sin gravely and can err in ordinary teaching or personal opinion. Infallibility is a narrow claim about solemn definitions of faith and morals for the whole Church, not about a pope's holiness or every statement he makes (Pastor Aeternus, ch. 4; CCC 891–892).",
              authority: "apologetic-argument",
            },
            {
              claim: "Infallibility was invented in 1870; the early Church knew nothing of it.",
              response:
                "Catholics hold that 1870 defined, rather than invented, the belief, which they see in the early Church's reliance on Rome to settle disputes and in the conviction that the Church cannot fail in the faith (Matthew 16:18; Luke 22:32). Historians on both sides debate how this developed, and the Ravenna Document notes that the bishop of Rome's prerogatives were understood in different ways even in the first millennium.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "formula-of-concord"],
        },
        {
          tradition: "eastern-orthodoxy",
          position:
            "According to the Orthodox Church in America, “Orthodoxy does not believe in the infallibility of the Pope of Rome, nor of any other individual. Orthodoxy upholds the reality that the Church, gathered together in Council under the inspiration of the Holy Spirit, is guided in making correct decisions and in enunciating truth.” The Orthodox Churches have not accepted the First Vatican Council's definitions on papal primacy and infallibility.",
          variations:
            "The Encyclical of the Eastern Patriarchs (1848), written in reply to Pope Pius IX, expressed the conviction that the faith is safeguarded by the whole Church: “the protector of religion is the very body of the Church, even the people themselves.”",
          arguments: [
            {
              claim: "Infallibility belongs to the whole Church gathered in council, not to one bishop.",
              response:
                "Catholics agree that infallibility is first a gift to the whole Church: the People of God, guided by the Spirit, “unfailingly adheres” to the faith (CCC 889), and the bishops teach infallibly together, above all in an ecumenical council (CCC 891). The disagreement is whether the bishop of Rome can, in certain solemn acts, express that infallibility of the Church on his own, as the First Vatican Council taught.",
              authority: "doctrine",
            },
            {
              claim: "Saying that papal definitions are irreformable without the consent of the Church sets the pope above the Church.",
              response:
                "The Second Vatican Council repeats that such definitions are irreformable “of themselves, and not from the consent of the Church” (Lumen Gentium 25). Catholics read this as excluding a later veto, not as separating the pope from the Church's faith: he defines what belongs to the deposit of faith, and the Spirit's assistance is given to guard it, not to reveal new doctrine. How the First Vatican Council's teaching should be understood in light of the first millennium is, in the joint commission's words, a crucial question for dialogue (Ravenna 45).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["oca-qa-infallibility", "encyclical-eastern-patriarchs"],
        },
      ],
    },
  },
  {
    slug: "apostolic-succession",
    title: "Apostolic Succession",
    question: "What is apostolic succession?",
    alsoKnownAs: ["Succession of bishops", "Apostolicity", "Laying on of hands"],
    category: "church",
    keywords: ["apostolic succession", "bishops successors of the apostles", "laying on of hands", "ordination", "unbroken line", "valid orders", "Clement of Rome", "Irenaeus", "Timothy and Titus", "apostolic church"],
    summary:
      "Apostolic succession is the handing on of the apostles' mission and authority, through the laying on of hands, to the bishops who succeed them. Catholics believe it links today's bishops to the apostles in an unbroken line, so that the Church keeps the apostles' teaching, sacraments, and pastoral care until Christ returns. Many Protestants understand apostolic succession as faithfulness to the apostles' teaching rather than an unbroken line of bishops.",
    explanation: [
      "In the New Testament: the apostles appointed others to share and continue their work. When Judas died, they chose Matthias to take his office (Acts 1:20–26). Paul laid hands on Timothy, told him to entrust what he had heard to faithful people who could teach others, and told Titus to appoint presbyters in every town (2 Timothy 1:6; 2:2; Titus 1:5).",
      "Why it matters: part of the apostles' office could not be passed on, being the chosen witnesses of the Resurrection, but part was permanent: their mission to teach, sanctify, and shepherd (CCC 860). So “the apostles left bishops as their successors,” so that the Gospel would be preserved “in a continuous line of succession until the end of time” (CCC 77, 861–862).",
      "Early witnesses: around the year 96, St. Clement of Rome wrote that the apostles appointed bishops and deacons and gave instructions that when these died, “other approved men should succeed them in their ministry” (1 Clement 42, 44). Around 180, St. Irenaeus answered false teachers by pointing to the succession of bishops in the churches founded by the apostles (Against Heresies 3.3).",
      "Succession and teaching go together: succession is not a guarantee of personal holiness, nor a mere list of names. It serves the faithful handing on of the apostles' teaching and sacraments (CCC 857). The Catholic Church recognizes valid apostolic succession, and so true sacraments, in the Orthodox Churches (CCC 838, 1399).",
      "Registers of bishops: around 200, Tertullian challenged heretics to show a succession like that of the apostolic churches, “as the church of Smyrna, which records that Polycarp was placed therein by John; as also the church of Rome, which makes Clement to have been ordained in like manner by Peter” (Prescription Against Heretics 32).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "77", url: ccc("__PK") },
        { paragraphs: "838, 857–862", url: ccc("__P29") },
        { paragraphs: "1399", url: ccc("__P42") },
      ],
      scripture: [
        { passage: "Acts 1:15–26", url: bible("acts/1") },
        { passage: "2 Timothy 1:6; 2:2", url: bible("2timothy/2") },
        { passage: "Titus 1:5", url: bible("titus/1") },
        { passage: "Luke 10:16", url: bible("luke/10") },
      ],
      documents: ["lumen-gentium", "dei-verbum"],
    },
    resources: ["ca-early-apostolic-succession", "ca-bishop-priest-deacon", "tertullian-prescription"],
    related: ["bishops-priests-deacons", "peter-the-rock", "did-jesus-found-a-church", "what-is-the-magisterium"],
    debate: {
      catholicPosition: {
        summary:
          "By divine institution the bishops have succeeded the apostles as pastors of the Church. Through the laying on of hands they receive and hand on the apostles' mission to teach, sanctify, and govern, in communion with the successor of Peter.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "What matters is succession in apostolic teaching: a church is apostolic when it holds the faith the apostles taught in Scripture and administers the sacraments rightly, whether or not its ministers stand in an unbroken line of bishops. The Augsburg Confession holds that, by divine right, bishops' authority consists in the ministry of the Word and sacraments, and that for the true unity of the Church “it is enough to agree concerning the doctrine of the Gospel and the administration of the Sacraments” (Articles VII, XXVIII).",
          variations:
            "Protestant churches differ on bishops. The Lutheran reformers wrote that it was their “greatest wish to maintain church-polity and the grades in the Church,” the government of bishops, while regarding it as established by human authority (Apology XIV). Other Protestant churches are governed by elders or by congregations. Views on whether any form of succession matters vary within and between traditions.",
          arguments: [
            {
              claim: "A line of bishops does not guarantee true doctrine; bishops in succession have taught error.",
              response:
                "Catholics agree that individual bishops can err and sin. Succession does not replace fidelity to the apostolic faith but serves it; the Church's teaching office is the servant of the word of God (CCC 86). Early writers like Irenaeus used succession precisely as a safeguard of apostolic teaching.",
              authority: "apologetic-argument",
            },
            {
              claim: "The New Testament uses “bishop” and “presbyter” interchangeably and does not describe a single bishop over each church.",
              response:
                "Catholics acknowledge that New Testament terminology is fluid and that historians debate how quickly a single bishop presided in every church, as “What do bishops, priests, and deacons do?” notes. They hold that the apostles' authority was nonetheless handed on, as 1 Clement shows, and that the threefold ministry was recognized in the early second century.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["augsburg-confession", "apology-augsburg-confession"],
        },
      ],
      fathers: [
        {
          name: "St. Clement of Rome",
          work: "Letter to the Corinthians, Chapters 42 and 44 (c. 96)",
          note: "Says the apostles appointed bishops and deacons and provided that other approved men should succeed them.",
          url: "https://www.newadvent.org/fathers/1010.htm",
        },
        {
          name: "St. Irenaeus of Lyons",
          work: "Against Heresies, Book 3, Chapter 3 (c. 180)",
          note: "Points to the succession of bishops from the apostles as the safeguard of apostolic teaching.",
          url: "https://www.newadvent.org/fathers/0103303.htm",
        },
      ],
    },
  },
  {
    slug: "praying-directly-to-god",
    title: "Why Not Pray Directly to God?",
    question: "Why not just pray directly to God?",
    alsoKnownAs: ["One mediator", "1 Timothy 2:5", "Intercession of the saints", "Praying to saints"],
    category: "objections",
    keywords: ["pray directly to God", "why pray to saints", "one mediator", "1 Timothy 2:5", "intercession", "do Catholics worship saints", "pray to Mary", "can the dead hear us", "communion of saints", "ask the saints to pray"],
    summary:
      "Catholics do pray directly to God: the Mass, the Our Father, and most Catholic prayer are addressed to him. Asking a saint to pray for you is like asking a friend to pray for you: it does not replace prayer to God or Christ's unique mediation, but shares in it. Because the saints are alive in Christ, Catholics believe they can still pray for us. Many Protestants hold that prayer should be addressed to God alone.",
    explanation: [
      "Christians pray for one another: just before calling Christ the “one mediator,” Paul asks that “supplications, prayers, petitions, and thanksgivings be offered for everyone” (1 Timothy 2:1–5). James says, “The fervent prayer of a righteous person is very powerful” (James 5:16). Such intercession “participates in Christ's” own intercession; it does not compete with it (CCC 2634–2635).",
      "The saints are alive: God “is not God of the dead, but of the living, for to him all are alive” (Luke 20:38). In Revelation, the elders in heaven offer “gold bowls filled with incense, which are the prayers of the holy ones” (Revelation 5:8). The Church teaches that the saints in heaven “do not cease to intercede with the Father for us” through Christ (CCC 956), and that we can and should ask them to (CCC 2683).",
      "Not worship: Catholics distinguish the worship owed to God alone from the honor given to the saints. Even Mary's role “in no way obscures or diminishes this unique mediation of Christ, but rather shows its power” (CCC 970).",
      "A family: asking the saints' prayers expresses the communion of saints, the bond between all who belong to Christ in heaven and on earth, “so great a cloud of witnesses” (Hebrews 12:1).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "956", url: ccc("__P2B") },
        { paragraphs: "969–970", url: ccc("__P2C") },
        { paragraphs: "2634–2636", url: ccc("__P98") },
        { paragraphs: "2683", url: ccc("__P9H") },
      ],
      scripture: [
        { passage: "1 Timothy 2:1–5", url: bible("1timothy/2") },
        { passage: "James 5:16", url: bible("james/5") },
        { passage: "Luke 20:37–38", url: bible("luke/20") },
        { passage: "Revelation 5:8", url: bible("revelation/5") },
        { passage: "Hebrews 12:1", url: bible("hebrews/12") },
      ],
      documents: ["lumen-gentium"],
    },
    resources: ["ca-praying-to-the-saints", "spc-one-mediator"],
    related: ["catholic-and-protestant-differences", "sola-scriptura", "who-is-jesus"],
    debate: {
      catholicPosition: {
        summary:
          "Christ is the one mediator between God and humanity. The saints, alive in him, share in his intercession; asking for their prayers, like asking living Christians to pray for us, honors his mediation rather than replacing it.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Because Christ is the “one mediator” (1 Timothy 2:5) and every believer has direct access to the Father through him (Hebrews 4:16), prayer should be addressed to God alone. The Westminster Confession teaches that worship is to be given to God “and to him alone; not to angels, saints, or any other creature,” and offered in the mediation of Christ alone (21.2). Scripture, on this view, gives no command or example of praying to the departed.",
          variations:
            "Protestants commonly ask living Christians to pray for them. The Lutheran Confessions grant that the saints in heaven “pray for the Church in general,” while holding that Scripture does not teach invoking them (Augsburg Confession XXI; Apology XXI). Reformed confessions reject invocation as well (Westminster 21.2). Practice and belief vary among other Protestant churches.",
          arguments: [
            {
              claim: "There is one mediator, Christ Jesus (1 Timothy 2:5); going through saints adds other mediators.",
              response:
                "Catholics agree that Christ alone is mediator in the unique sense of being both God and man and redeeming us. Asking others to pray for us does not add mediators in that sense; Paul urges intercession for all in the same passage (1 Timothy 2:1). Catholics argue that if asking a living friend to pray does not violate Christ's mediation, asking a saint does not either.",
              authority: "apologetic-argument",
            },
            {
              claim: "Scripture forbids contacting the dead, and nothing shows that the dead can hear our prayers.",
              response:
                "Catholics agree with Scripture's ban on necromancy, the attempt to summon or consult the dead. Asking a saint for prayer is a request to someone alive in Christ, not an attempt to obtain hidden knowledge. Catholics point to Revelation 5:8 and Hebrews 12:1 as signs that those in heaven are aware of and join in the prayers of the Church on earth.",
              authority: "apologetic-argument",
            },
          ],
          sources: ["westminster-confession", "augsburg-confession", "apology-augsburg-confession"],
        },
      ],
    },
  },
  {
    slug: "muhammad-and-the-quran",
    title: "Muhammad and the Qur'an",
    question: "How do Catholics view Muhammad and the Qur'an?",
    alsoKnownAs: ["Muhammad", "The Qur'an", "Islam and revelation"],
    category: "objections",
    keywords: ["Muhammad", "Prophet Muhammad", "Quran", "Qur'an", "Koran", "is Muhammad a prophet", "seal of the prophets", "Islamic revelation", "Sunni and Shia", "Imamate", "Catholic view of Islam"],
    summary:
      "Muslims believe that Muhammad is the final prophet of God and that the Qur'an is God's own speech, revealed to him in Arabic in the seventh century. The Catholic Church regards Muslims with esteem and honors what is true in their faith, but it does not accept Muhammad as a prophet who brings new public revelation, or the Qur'an as the word of God, because Catholics believe that God's revelation is complete in Jesus Christ.",
    explanation: [
      "Muhammad in Islam: the Qur'an calls him “the Messenger of Allah and the seal of the prophets” (Qur'an 33:40). Muslims understand him as the final prophet sent by God, and Muslim teachers present his message as continuous with that of earlier prophets on the oneness of God.",
      "The Qur'an in Islam: Muslims hold that the Qur'an, revealed to Muhammad and recited in Arabic, is God's own word. As the Yaqeen Institute puts it, the Qur'an “presents itself as the literal speech of God” and asserts that nothing like it will ever be produced.",
      "Different Muslim traditions: Sunni and Shia Muslims agree that Muhammad is the final prophet. Shia Muslims also hold that God designated Imams to succeed him in leading the community, a teaching called the Imamate, which is “one of the points of difference between Shi'a and Sunnis” (WikiShia).",
      "Faith, history, and theology: these are Islamic religious beliefs. Historians study the origins of Islam and of the Qur'an with their own methods, and Catholic theology reaches its own conclusions; the three are distinct.",
      "Catholic teaching: the Church “regards with esteem also the Moslems,” who “adore the one God … who has spoken to men” (Nostra Aetate 3). Catholics believe that Christ, the Son of God made man, “is the Father's one, perfect and unsurpassable Word”: “there will be no other word than this one” (CCC 65), and “no new public revelation is to be expected” (CCC 66). For this reason the Church does not receive the Qur'an as revelation.",
      "The differences concern above all Jesus: see “Is the Trinity in the Bible?”, “Is Jesus truly God?”, “Was Jesus really crucified?”, and “Did Jesus really rise from the dead?” The Islamic view and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "65–67", url: ccc("__PH") },
        { paragraphs: "841", url: ccc("__P29") },
      ],
      scripture: [
        { passage: "Hebrews 1:1–2", url: bible("hebrews/1") },
        { passage: "John 1:14–18", url: bible("john/1") },
      ],
      documents: ["nostra-aetate", "dei-verbum", "lumen-gentium"],
    },
    resources: ["quran-33-40", "yaqeen-inimitable-quran", "wikishia-imamate"],
    related: ["catholics-and-muslims", "trinity-in-scripture", "divinity-of-jesus", "was-jesus-crucified", "resurrection"],
    debate: {
      catholicPosition: {
        summary:
          "God's revelation reaches its fullness in Jesus Christ, the Father's “one, perfect and unsurpassable Word”; no new public revelation is to be expected before his return (CCC 65–66; Dei Verbum 4). The Church regards Muslims with esteem and acknowledges that they adore the one God (Nostra Aetate 3; CCC 841), but she does not accept a revelation that claims to complete or correct Christ (CCC 67).",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "islam",
          position:
            "Muslims believe that Muhammad is “the Messenger of Allah and the seal of the prophets” (Qur'an 33:40), the last of the prophets sent by God, and that the Qur'an, which “presents itself as the literal speech of God,” is God's final revelation and cannot be imitated (Yaqeen Institute).",
          variations:
            "Sunni and Shia Muslims share these beliefs about Muhammad and the Qur'an, but differ over leadership after him: Shia Muslims hold that God designated Imams as his successors (WikiShia).",
          arguments: [
            {
              claim: "The Qur'an's unique beauty and inimitability show that it comes from God.",
              response:
                "Catholics respect the Qur'an's religious and literary significance for Muslims. But Christians believe God's definitive self-revelation is a person, not a book: Christianity is “not a ‘religion of the book’” but “the religion of the ‘Word’ of God, ‘not a written and mute word, but incarnate and living’” (CCC 108).",
              authority: "apologetic-argument",
            },
            {
              claim: "Muhammad is the seal of the prophets, who completed and confirmed earlier revelations.",
              response:
                "Catholics believe that in these last days God “spoke to us through a son” (Hebrews 1:2) and that in Christ he “has said everything; there will be no other word than this one” (CCC 65). Christian faith therefore “cannot accept ‘revelations’ that claim to surpass or correct the Revelation of which Christ is the fulfilment” (CCC 67).",
              authority: "doctrine",
            },
            {
              claim: "Muslims honor Jesus, so Christians should honor Muhammad as Muslims honor Jesus.",
              response:
                "The difference is not whether Jesus is honored but who he is. The Qur'an teaches that Jesus is a messenger and not God's Son (Qur'an 4:171), while Christians confess him as the eternal Son made man, crucified and risen. Catholics can respect Muslims' devotion while disagreeing on this central point.",
              authority: "doctrine",
            },
          ],
          sources: ["quran-33-40", "quran-4-171", "yaqeen-inimitable-quran", "wikishia-imamate"],
        },
      ],
    },
  },
];
