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
    ],
    summary:
      "Many Protestants hold that Scripture alone is the final, infallible authority for Christian faith. Catholics also receive the Bible as the inspired word of God, but believe God’s revelation is handed on in two ways, through Sacred Scripture and Sacred Tradition, and that the Church’s teaching office serves both by interpreting them faithfully.",
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
      ],
      documents: ["dei-verbum"],
    },
    resources: ["ca-scripture-and-tradition", "video-akin-white-sola-scriptura"],
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
    ],
    summary:
      "Christians have confessed from the beginning that Jesus Christ is the eternal Son of God who became man: truly God and truly human. Muslims honor Jesus as a great prophet and the Messiah, but believe he is not God. Jehovah’s Witnesses believe Jesus is God’s Son and first creation, exalted above all others, but not Almighty God. The Catholic Church, together with the Orthodox and most Protestants, professes that the Son is one in being with the Father.",
    teaching: {
      catechism: [
        { paragraphs: "200", url: ccc("__P16") },
        { paragraphs: "253", url: ccc("__P17") },
        { paragraphs: "464–469", url: ccc("__P1J") },
      ],
      scripture: [
        { passage: "John 1:1–18", url: bible("john/1") },
        { passage: "John 8:58", url: bible("john/8") },
        { passage: "John 20:28", url: bible("john/20") },
        { passage: "Philippians 2:5–11", url: bible("philippians/2") },
        { passage: "Colossians 1:15–20", url: bible("colossians/1") },
      ],
      documents: ["dominus-iesus"],
    },
    resources: ["ca-jesus-is-god", "ca-god-of-the-jws"],
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
                "Catholics also confess that there is only one God. The Trinity is not three gods, but one God in three persons, each of whom is God whole and entire. The Church professes that the Son is eternally begotten of the Father, not made: “Son” names an eternal relationship within the one God, not a physical birth or a partner beside God.",
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
    ],
    summary:
      "If God is all-good and all-powerful, why is there so much suffering? Many atheists see this as strong evidence against God, and many agnostics find it a serious reason for doubt. The Church does not offer a quick answer. It teaches that God is never the cause of moral evil, that he permits evil out of respect for human freedom and can bring good even from it, and that the deepest answer is Christ’s own suffering, death, and resurrection.",
    teaching: {
      catechism: [
        { paragraphs: "309–314, 324", url: ccc("__P19") },
      ],
      scripture: [
        { passage: "Genesis 50:20", url: bible("genesis/50") },
        { passage: "Job 38–42", url: bible("job/38") },
        { passage: "Romans 8:18–39", url: bible("romans/8") },
      ],
      documents: ["salvifici-doloris"],
    },
    resources: ["ca-problem-of-evil", "video-barron-oconnor-evil"],
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
    alsoKnownAs: ["Petrine primacy", "Matthew 16:18", "Papacy in Scripture", "Keys of the kingdom"],
    category: "church",
    keywords: ["Peter the rock", "you are Peter", "upon this rock", "keys of the kingdom", "Isaiah 22", "feed my sheep", "Petros petra", "first pope", "primacy of Peter", "is the pope in the Bible", "Cephas", "strengthen your brothers"],
    summary:
      "Catholics believe Jesus made Peter the visible head of the apostles and the rock on which he built his Church, giving him the keys of the kingdom and the charge to strengthen his brothers and feed Christ's sheep. They believe this office continues in Peter's successors, the bishops of Rome. Protestants generally read the “rock” as Peter's confession of faith or Christ himself and see no continuing office; the Orthodox honor Peter's primacy but understand Rome's role differently.",
    explanation: [
      "The key passages: Jesus renames Simon “Peter” (rock) and says, “upon this rock I will build my church” (Matthew 16:18). He gives him “the keys to the kingdom of heaven” and the power to bind and loose (Matthew 16:19). At the Last Supper he prays that Peter's faith may not fail and tells him to “strengthen your brothers” (Luke 22:32). After the Resurrection he tells Peter three times, “Feed my sheep” (John 21:15–17).",
      "The keys: Catholics read the keys in light of Isaiah 22, where the king's steward receives “the key of the House of David” and authority over the household, an office passed from one holder to the next (Isaiah 22:20–22). The Catechism says the keys designate “authority to govern the house of God, which is the Church” (CCC 553).",
      "Peter among the apostles: Peter is named first in the lists of apostles, speaks for them, preaches first at Pentecost, and leads the decision to welcome Gentiles (Acts 2; 10; 15:7). Christ “made Simon alone… the ‘rock’ of his Church” and the office of binding and loosing was also given to the college of apostles united to its head (CCC 881).",
      "Successors: Catholics believe this office, like the apostles' office of shepherding, is permanent and continues in the bishop of Rome, “the perpetual and visible source and foundation of the unity both of the bishops and of the whole company of the faithful” (CCC 882). The First Vatican Council defined this primacy as a dogma in 1870 (Pastor Aeternus).",
      "The Orthodox view: Orthodox Christians honor Peter and agree that Rome held first place among the churches in the first millennium. In the Ravenna Document (2007), a joint Catholic–Orthodox commission agreed that Rome “occupied the first place” and that the bishop of Rome was the “protos” among the patriarchs, but noted disagreement about the interpretation of his prerogatives and about the scriptural and theological foundations of universal primacy (Ravenna 41, 43). St. John Paul II invited other Christians into a “patient and fraternal dialogue” on how the primacy is exercised (Ut Unum Sint 95–96).",
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
      "Other Christians: the Orthodox Churches do not accept the First Vatican Council's teaching on papal primacy and infallibility, and how that teaching should be understood in light of the first millennium is an open question in Catholic–Orthodox dialogue (Ravenna 45). Most Protestant churches hold that popes and councils can err.",
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
    resources: ["ca-early-apostolic-succession", "ca-bishop-priest-deacon"],
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
];
