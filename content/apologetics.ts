import type { Topic } from "./types";

// Debate topics. These are ordinary topics with a `debate` section, kept in their own
// file only because they are long. Every tradition page that lists one links here;
// the content itself exists once.

const ccc = (page: string) => `https://www.vatican.va/archive/ENG0015/${page}.HTM`;
const bible = (bookAndChapter: string) => `https://bible.usccb.org/bible/${bookAndChapter}`;

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
    related: ["divinity-of-jesus", "real-presence"],
    debate: {
      perspectives: [
        {
          tradition: "protestantism",
          position:
            "Scripture is the only infallible rule of faith. Creeds, councils, and church traditions can be valuable guides, but they are fallible and must always be tested by the Bible. The Westminster Confession, for example, teaches that everything necessary for salvation is either set down in Scripture or can be deduced from it, and that the Holy Spirit speaking in Scripture is the supreme judge of all controversies.",
          variations:
            "Protestants apply this principle in different ways. Lutheran and Anglican Christians, for instance, give real weight to the ancient creeds and the early Church as faithful witnesses under Scripture, while some evangelical and non-denominational Christians give less attention to historical tradition. Many Protestant theologians stress that sola scriptura does not mean rejecting tradition entirely.",
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
      "Jesus God",
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
            "Sunni and Shia Muslims share this understanding of Jesus, though Muslim scholars interpret particular verses about him in different ways.",
          arguments: [
            {
              claim:
                "God is one. Saying that God has a son, or that God is three, compromises his absolute oneness.",
              response:
                "Catholics also confess that there is only one God. The doctrine of the Trinity does not mean three gods, or that God took a partner, but one God in three persons, each of whom is God whole and entire. Calling Jesus “Son” does not mean God had a child in a physical sense; it names an eternal relationship within the one God.",
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
            "Jehovah’s Witness teaching on this point is presented consistently in the movement’s official publications.",
          arguments: [
            {
              claim:
                "John 1:1 should read “the Word was a god,” as in the New World Translation, because the Greek has no definite article before the final word for God.",
              response:
                "Nearly all Bible translations, Catholic and Protestant, render the verse “the Word was God.” Catholics read the missing article as describing what the Word is, fully divine, while the Word remains distinct from the Father. The same Gospel ends with Thomas calling the risen Jesus “My Lord and my God” (John 20:28).",
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
        { paragraphs: "309–314", url: ccc("__P19") },
        { paragraphs: "324", url: ccc("__P19") },
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
            "The argument from evil is one of the most widely discussed arguments against God. Its strongest form, often called the logical problem, claims that an all-powerful, all-knowing, perfectly good God could not coexist with evil at all. A more modest form, the evidential problem, argues that the amount and kind of suffering in the world, such as the suffering of children and animals, makes the existence of such a God unlikely.",
          variations:
            "Atheists weigh this argument differently. Some consider it decisive, others treat it as one consideration among many, and many atheists do not base their view on it at all.",
          arguments: [
            {
              claim:
                "A perfectly good God would prevent all evil, and an all-powerful God could. Evil exists, so such a God does not exist.",
              response:
                "There is no contradiction if God has a good reason to permit evil. One such reason is the gift of real freedom, which makes love possible but also makes it possible to do wrong. The Church teaches that God permits moral evil because he respects the freedom of his creatures, and that he can bring good even out of evil. The Protestant philosopher Alvin Plantinga’s “free will defense” is a well-known version of this reply.",
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
            "For some agnostics this is an intellectual question; for others it comes from personal experience of grief or loss.",
          arguments: [
            {
              claim:
                "If God exists and cares, why is he so silent and hidden when people suffer?",
              response:
                "The Church does not deny how dark suffering can be, and the Bible itself gives voice to this cry, in Job and the Psalms. Christians believe God answered not with an explanation but by entering suffering himself: in Jesus, God suffered and died, and rose to defeat evil. Faith does not remove every question, but it gives the hope that suffering will not have the last word.",
              authority: "doctrine",
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
];
