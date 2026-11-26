// Learn › What Catholics Believe: creation, the purpose of human life, and original sin.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const creationTopics: Topic[] = [
  {
    slug: "why-did-god-create-us",
    title: "Why God Created Us",
    question: "Why did God create us?",
    alsoKnownAs: ["Purpose of life", "Meaning of life"],
    category: "beliefs",
    keywords: ["why did God create us", "purpose of life", "meaning of life", "why am I here", "what is the purpose of life", "know love and serve God", "image of God", "human dignity", "restless heart"],
    summary:
      "God created us out of love, not because he needed anything, but to share his own goodness and life. The Church teaches that we were made to know, love, and serve God in this life and to be happy with him forever. Every human being is willed by God for his or her own sake and called to communion with him, and this is the deepest source of human dignity.",
    explanation: [
      "Out of love, not need: God created all things “not to increase his glory, but to show it forth and to communicate it” (St. Bonaventure, quoted in CCC 293). The world is not the product of necessity or chance; it comes from God's free will to share his being, wisdom, and goodness (CCC 295).",
      "To know and love God: the human person is the only visible creature “able to know and love his creator” and “the only creature on earth that God has willed for himself” (CCC 356). In the Catechism's words, “God put us in the world to know, to love, and to serve him, and so to come to paradise” (CCC 1721).",
      "A restless heart: “The desire for God is written in the human heart, because man is created by God and for God” (CCC 27). St. Augustine prayed, “You have made us for Yourself, and our hearts are restless until they rest in You” (Confessions 1.1).",
      "Dignity: because we are made in God's image, each person “is not just something, but someone,” capable of knowing himself, giving himself freely, and entering into communion with others and with God (CCC 357).",
      "Fulfillment: the purpose of life is fully revealed in Jesus Christ, who calls us to share the life of the Trinity forever (CCC 1721). See “What is heaven?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "27", url: ccc("__P9") },
        { paragraphs: "293–295", url: ccc("__P19") },
        { paragraphs: "356–357", url: ccc("__P1B") },
        { paragraphs: "1721", url: ccc("__P5K") },
      ],
      scripture: [
        { passage: "Genesis 1:26–31", url: bible("genesis/1") },
        { passage: "Psalm 8", url: bible("psalms/8") },
        { passage: "Ephesians 1:3–6", url: bible("ephesians/1") },
      ],
      documents: ["gaudium-et-spes"],
    },
    resources: [],
    related: ["who-is-god", "creation", "heaven", "what-is-grace"],
  },
  {
    slug: "creation",
    title: "Creation",
    question: "Did God create the world?",
    alsoKnownAs: ["Creation from nothing", "Creatio ex nihilo", "God the Creator"],
    category: "beliefs",
    keywords: ["creation", "did God create the world", "Creator", "creation from nothing", "ex nihilo", "Genesis 1", "six days", "Big Bang", "who made the universe", "God sustains the world"],
    summary:
      "Yes. Catholics believe that God freely created everything that exists, visible and invisible, out of nothing, and that he keeps all things in existence at every moment. Creation is not only a past event but an ongoing relationship of dependence on God. This faith concerns why anything exists at all; it does not compete with scientific accounts of how the universe has developed.",
    explanation: [
      "The Creed: Christians confess God as “Creator of heaven and earth,” “of all that is, seen and unseen” (CCC 279), echoing the first words of the Bible: “In the beginning, when God created the heavens and the earth” (Genesis 1:1).",
      "Out of nothing: God “needs no pre-existent thing or any help in order to create”; he creates freely “out of nothing” (CCC 296). Creation is an act of his love and wisdom, not a necessity or an emanation of his substance (CCC 295–296).",
      "Held in being: God does not create and then step away. He “at every moment, upholds and sustains them in being, enables them to act and brings them to their final end” (CCC 301).",
      "Reading Genesis: “Scripture presents the work of the Creator symbolically as a succession of six days” (CCC 337). The sacred text teaches “the truths revealed by God for our salvation,” not a scientific account of how the cosmos formed (CCC 337).",
      "Creation and science: scientific studies have “splendidly enriched our knowledge of the age and dimensions of the cosmos, the development of life-forms and the appearance of man” (CCC 283). Cosmologists date the universe to around 13.8 billion years. Faith asks a question of another order: not only when and how the universe arose, but what it means and whether it comes from “a transcendent, intelligent and good Being called ‘God’” (CCC 284). See “Are faith and science in conflict?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "279, 283–284, 290–301", url: ccc("__P19") },
        { paragraphs: "337", url: ccc("__P1A") },
      ],
      scripture: [
        { passage: "Genesis 1:1–2:3", url: bible("genesis/1") },
        { passage: "Psalm 104", url: bible("psalms/104") },
        { passage: "John 1:1–3", url: bible("john/1") },
        { passage: "2 Maccabees 7:28", url: bible("2maccabees/7") },
      ],
      documents: ["vatican-i-dei-filius"],
    },
    resources: ["nasa-universe"],
    related: ["why-did-god-create-us", "creation-and-evolution", "faith-and-science", "who-is-god"],
  },
  {
    slug: "original-sin",
    title: "Original Sin",
    question: "What is original sin?",
    alsoKnownAs: ["The Fall", "Concupiscence"],
    category: "beliefs",
    keywords: ["original sin", "the Fall", "Adam and Eve", "Genesis 3", "concupiscence", "are babies born with sin", "inherited sin", "Romans 5", "first sin", "why do we sin"],
    summary:
      "Original sin is the state in which every human being is born: deprived of the original holiness and justice God intended, as a consequence of the first sin of our first parents. It is not a personal fault that we committed, but a wound in human nature, which is subject to ignorance, suffering, and death and inclined to sin. Christ's grace, given in Baptism, takes away original sin, though the inclination to sin remains as a struggle.",
    explanation: [
      "The first sin: “Man, tempted by the devil, let his trust in his Creator die in his heart and, abusing his freedom, disobeyed God's command” (CCC 397). The account in Genesis 3 “uses figurative language, but affirms a primeval event, a deed that took place at the beginning of the history of man” (CCC 390).",
      "Passed on to all: St. Paul writes that “through one person sin entered the world, and through sin, death” (Romans 5:12). How this happens “is a mystery that we cannot fully understand” (CCC 404).",
      "Not personal guilt: original sin “does not have the character of a personal fault in any of Adam's descendants.” Human nature “has not been totally corrupted”; it is wounded, subject to ignorance, suffering, and death, and inclined to sin, an inclination called concupiscence (CCC 405).",
      "The remedy: Baptism, “by imparting the life of Christ's grace, erases original sin and turns a man back towards God,” though its consequences remain as a call to spiritual struggle (CCC 405). Christ is the new Adam, through whose obedience “the many will be made righteous” (Romans 5:19).",
      "Settled teaching and open questions: the doctrine of original sin is established Church teaching. How it is to be related to scientific accounts of human origins is still being studied by theologians; see “Can Catholics accept evolution?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "390, 396–409", url: ccc("__P1C") },
      ],
      scripture: [
        { passage: "Genesis 3", url: bible("genesis/3") },
        { passage: "Romans 5:12–21", url: bible("romans/5") },
      ],
      documents: ["humani-generis"],
    },
    resources: [],
    related: ["baptism", "creation-and-evolution", "immaculate-conception", "why-did-jesus-die"],
  },
];
