// Learn › Faith and Reason: the existence of God, faith and science, and evolution.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const faithAndReason: Topic[] = [
  {
    slug: "does-god-exist",
    title: "Does God Exist?",
    question: "Does God exist?",
    alsoKnownAs: ["Arguments for God", "Natural theology", "The Five Ways", "Cosmological argument"],
    category: "faith-and-reason",
    keywords: ["does God exist", "is there a God", "proof of God", "arguments for God", "cosmological argument", "contingency", "first cause", "Five Ways", "Aquinas", "natural theology", "atheism", "agnosticism", "who made God", "moral argument"],
    summary:
      "The Catholic Church teaches that God's existence can be known with certainty by human reason from the created world, and it offers what the Catechism calls not scientific proofs but “converging and convincing arguments.” Philosophers continue to debate these arguments, and many thoughtful people are not persuaded by them. Faith in God also rests on his revelation, above all in Jesus Christ.",
    explanation: [
      "What the Church teaches: the First Vatican Council taught that God “can be known with certainty from the consideration of created things, by the natural power of human reason” (Dei Filius 2; CCC 36). St. Paul writes that God's “invisible attributes of eternal power and divinity have been able to be understood and perceived in what he has made” (Romans 1:20).",
      "Not laboratory proofs: these are proofs “not in the sense of proofs in the natural sciences, but rather in the sense of ‘converging and convincing arguments’” (CCC 31). They are philosophical arguments about why anything exists at all, not scientific experiments or measurements.",
      "Arguments from the world: “starting from movement, becoming, contingency, and the world's order and beauty, one can come to a knowledge of God” (CCC 32). These are cosmological arguments: they reason from the fact that the things around us are changing and dependent, and could have not existed, to a first cause that depends on nothing. St. Thomas Aquinas set out five such “ways,” beginning with change: nothing passes from potential to actual except by something already actual (Summa Theologiae I, q. 2, a. 3).",
      "Arguments from the person: our openness to truth and beauty, our sense of moral goodness, our freedom and conscience, and our longing for the infinite also lead people to ask about God (CCC 33).",
      "Reason and faith: the world and the person point to “a reality which is the first cause and final end of all things” (CCC 34). Such arguments “can predispose one to faith,” but to know God personally we rely on his revelation (CCC 35). The Church also recognizes that in our actual condition people meet “many difficulties in coming to know God by the light of reason alone” (CCC 37).",
      "Atheism and agnosticism are not a single position, and the arguments for God are disputed among philosophers. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "31–35", url: ccc("__PA") },
        { paragraphs: "36–37", url: ccc("__PB") },
      ],
      scripture: [
        { passage: "Romans 1:19–20", url: bible("romans/1") },
        { passage: "Wisdom 13:1–9", url: bible("wisdom/13") },
        { passage: "Acts 17:22–28", url: bible("acts/17") },
        { passage: "Psalm 19:2–5", url: bible("psalms/19") },
      ],
      documents: ["vatican-i-dei-filius", "fides-et-ratio"],
    },
    resources: ["aquinas-five-ways", "sep-cosmological"],
    related: ["problem-of-evil", "who-is-god", "faith-and-science", "creation"],
    debate: {
      catholicPosition: {
        summary:
          "God, the first principle and last end of all things, can be known with certainty from the created world by the natural light of human reason (First Vatican Council; CCC 36). The arguments for God are philosophical, not empirical experiments, and they can prepare the way for faith, which rests on God's revelation (CCC 31, 35).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "atheism",
          position:
            "In philosophy, atheism usually means the claim that God does not exist. The Stanford Encyclopedia of Philosophy distinguishes global atheism, which denies that any God exists, from local atheism, which denies a particular concept of God, such as the all-powerful, all-knowing, perfectly good Creator of classical theism. Atheist philosophers argue, for example, that the evil in the world makes such a God improbable, or that theism starts with a low probability compared with simpler naturalistic explanations.",
          variations:
            "Atheism is not one position. In a looser, psychological sense, an atheist is simply someone who lacks belief in God; in philosophy the word usually means affirming that God does not exist.",
          arguments: [
            {
              claim: "If everything needs a cause, what caused God?",
              response:
                "The cosmological arguments do not claim that everything needs a cause, but that whatever is changeable or dependent, and could have not existed, depends on something else. Their conclusion is a reality that is not dependent, “Being itself, which alone is without origin or end” (CCC 34). Whether the reasoning succeeds is debated among philosophers.",
              authority: "apologetic-argument",
            },
            {
              claim: "Science can explain the universe without God.",
              response:
                "Science explains how natural things act and develop. The arguments for God ask a different question: why anything exists and continues to exist at all (CCC 31–34). The Church teaches that methodical research in every field “can never conflict with the faith” (CCC 159). A scientific account of a process does not answer why there is a world to explain.",
              authority: "apologetic-argument",
            },
            {
              claim: "The amount of evil and suffering in the world makes a good and all-powerful God unlikely.",
              response:
                "The Church takes this question with full seriousness: “no quick answer will suffice,” and “only Christian faith as a whole constitutes the answer” (CCC 309). It is treated at length in “Why does God allow suffering?”",
              authority: "doctrine",
            },
          ],
          sources: ["sep-atheism-agnosticism"],
        },
        {
          tradition: "agnosticism",
          position:
            "Agnostics hold that neither theism nor atheism is known to be true. The word was coined by the biologist T. H. Huxley, who described agnostics as those who confess themselves “hopelessly ignorant” about matters on which metaphysicians and theologians “dogmatise with the utmost confidence.” One modest form of agnosticism argues that there is no firm basis for judging either theism or atheism more probable than the other.",
          variations:
            "The Stanford Encyclopedia of Philosophy distinguishes several forms of agnosticism, from the modest view that the question is unresolved to more ambitious claims that it cannot be resolved.",
          arguments: [
            {
              claim: "The evidence for and against God is too balanced to justify belief either way.",
              response:
                "The Church holds that reason can reach certainty about God's existence from the world (CCC 36), while acknowledging the real obstacles people meet (CCC 37). Faith goes further, resting on God who reveals himself, yet it is “in accordance with reason,” supported by signs such as Christ's miracles and the Church's life (CCC 156).",
              authority: "doctrine",
            },
            {
              claim: "Human reason cannot know anything beyond what we experience.",
              response:
                "Catholics hold that reason, starting from experience, can reach truths beyond it, as every philosophy of causes attempts to do. St. John Paul II wrote that “faith and reason are like two wings on which the human spirit rises to the contemplation of truth” (Fides et Ratio, opening).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["sep-atheism-agnosticism"],
        },
      ],
    },
  },
  {
    slug: "faith-and-science",
    title: "Faith and Science",
    question: "Are faith and science in conflict?",
    alsoKnownAs: ["Science and religion", "Faith and reason"],
    category: "faith-and-reason",
    keywords: ["faith and science", "science and religion", "conflict between science and religion", "Galileo", "scientism", "naturalism", "can a scientist believe in God", "Big Bang", "Catholic scientists", "truth cannot contradict truth"],
    summary:
      "No. The Catholic Church teaches that faith and reason, including the natural sciences, come from the same God and cannot truly contradict each other. Science studies the natural world by observation and experiment; faith concerns God's revelation and the ultimate meaning of things. Real conflicts arise when one oversteps its own method, for example when Scripture is read as a science textbook, or when science is treated as the only source of knowledge.",
    explanation: [
      "Truth cannot contradict truth: “Though faith is above reason, there can never be any real discrepancy between faith and reason. Since the same God who reveals mysteries and infuses faith has bestowed the light of reason on the human mind, God cannot deny himself, nor can truth ever contradict truth” (CCC 159).",
      "Freedom of research: methodical research in all branches of knowledge, “provided it is carried out in a truly scientific manner and does not override moral laws, can never conflict with the faith” (CCC 159). St. John Paul II wrote that “faith and reason are like two wings on which the human spirit rises to the contemplation of truth” (Fides et Ratio).",
      "Three different things: scientific findings come from observation and experiment; philosophical naturalism is the further claim that nature is all there is, which philosophers distinguish from science's method of looking for natural explanations; theology reflects on what God has revealed. Confusing them causes many apparent conflicts.",
      "History: the idea of a permanent war between science and religion relies heavily on the trial of Galileo and the reception of Darwin's theory. Most scholars in the field of science and religion now regard that “conflict model” as a “shallow and partisan reading of the historical record” (Stanford Encyclopedia of Philosophy).",
      "Some people see a conflict between faith and science. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "159", url: ccc("__PX") },
        { paragraphs: "283–284", url: ccc("__P19") },
      ],
      scripture: [
        { passage: "Psalm 19:2–5", url: bible("psalms/19") },
        { passage: "Wisdom 13:1–5", url: bible("wisdom/13") },
      ],
      documents: ["fides-et-ratio", "vatican-i-dei-filius"],
    },
    resources: ["sep-religion-science"],
    related: ["creation-and-evolution", "creation", "does-god-exist", "what-is-the-bible"],
    debate: {
      catholicPosition: {
        summary:
          "Faith and reason come from the same God, so there can never be a real contradiction between them; methodical scientific research carried out honestly “can never conflict with the faith” (CCC 159; First Vatican Council, Dei Filius 4).",
        authority: "dogma",
      },
      perspectives: [
        {
          tradition: "atheism",
          position:
            "Some atheists hold that science and religion are in principled conflict: scientific explanation leaves no room for God, and the success of science supports philosophical naturalism, the view that nature is all there is. The Stanford Encyclopedia of Philosophy notes that some philosophers argue that the success of methodological naturalism is evidence for ontological naturalism, and that the conflict model draws heavily on the Galileo affair and the reception of Darwinism.",
          variations:
            "Not all atheists hold the conflict model. The same encyclopedia reports that it is at present a minority position among scholars of science and religion.",
          arguments: [
            {
              claim: "Science keeps replacing religious explanations, so eventually it will explain everything.",
              response:
                "Catholics welcome scientific explanations of natural processes; faith does not depend on gaps in science. A 2004 study of the International Theological Commission warns against inserting divine action to fill “gaps” in scientific understanding (Communion and Stewardship 70). The claim that nothing exists beyond nature is a philosophical position, not a scientific finding.",
              authority: "apologetic-argument",
            },
            {
              claim: "The Church opposed science, as the Galileo affair shows.",
              response:
                "The Galileo affair is a real episode of conflict, but historians caution against treating it as typical. The Church teaches today that honest research “can never conflict with the faith” (CCC 159) and that scientific discoveries “invite us to even greater admiration for the greatness of the Creator” (CCC 283).",
              authority: "apologetic-argument",
            },
          ],
          sources: ["sep-religion-science", "sep-naturalism"],
        },
      ],
    },
  },
  {
    slug: "creation-and-evolution",
    title: "Creation and Evolution",
    question: "Can Catholics accept evolution?",
    alsoKnownAs: ["Humani Generis", "Evolution and the Church"],
    category: "faith-and-reason",
    keywords: ["evolution", "can Catholics believe in evolution", "Darwin", "natural selection", "common descent", "human evolution", "Adam and Eve", "human soul", "Humani Generis", "young earth", "creationism", "intelligent design"],
    summary:
      "Yes. The Catholic Church does not forbid accepting scientific accounts of evolution, including the development of the human body from earlier forms of life, provided that God is acknowledged as Creator, that each human soul is created directly by God, and that the doctrine of original sin is upheld. Evolution as a scientific theory is different from the philosophical claim that the universe has no Creator.",
    explanation: [
      "What science finds: the Smithsonian's Human Origins Program explains that “scientific evidence shows that the physical and behavioral traits shared by all people originated from apelike ancestors and evolved over a period of approximately six million years.” Many questions remain open, such as how life first began and what came before the earliest moments of the universe.",
      "What the Church teaches: in 1950 Pius XII taught that the Church “does not forbid” research and discussion on evolution “in as far as it inquires into the origin of the human body as coming from pre-existent and living matter—for the Catholic faith obliges us to hold that souls are immediately created by God” (Humani Generis 36). In 1996 St. John Paul II observed that “it is indeed remarkable that this theory has been progressively accepted by researchers, following a series of discoveries in various fields of knowledge.”",
      "The soul and human dignity: “every spiritual soul is created immediately by God” (CCC 366). St. John Paul II taught that theories which treat the mind as “a mere epiphenomenon” of matter are “incompatible with the truth about man,” and spoke of “an ontological difference, an ontological leap” in the human person.",
      "Reading Genesis: the six days are presented “symbolically” (CCC 337), and Genesis 3 uses “figurative language” while affirming a real first sin at the beginning of human history (CCC 390). Genesis is not a scientific account.",
      "Open questions: Humani Generis rejected the idea that humanity descends from many first parents, because “it is in no way apparent” how it could be reconciled with the doctrine of original sin (37). How that teaching relates to current scientific findings about early human populations is still studied by theologians. A 2004 study of the International Theological Commission describes the appearance of the first human beings, “whether as individuals or in populations,” as an event not susceptible of a purely natural explanation (Communion and Stewardship 70); it is a commission study, not a magisterial teaching.",
      "Some argue that evolution makes God unnecessary. Their views and the Catholic responses are set out below.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "283–284", url: ccc("__P19") },
        { paragraphs: "337", url: ccc("__P1A") },
        { paragraphs: "362–366", url: ccc("__P1B") },
        { paragraphs: "390", url: ccc("__P1C") },
      ],
      scripture: [
        { passage: "Genesis 1–2", url: bible("genesis/1") },
        { passage: "Psalm 104:24–30", url: bible("psalms/104") },
      ],
      documents: ["humani-generis", "jp2-evolution-1996", "itc-communion-stewardship"],
    },
    resources: ["smithsonian-human-evolution", "nasa-universe"],
    related: ["creation", "original-sin", "faith-and-science", "does-god-exist"],
    debate: {
      catholicPosition: {
        summary:
          "God is the Creator of all that exists and works in and through the causes he has made (CCC 308). The Church permits study of the evolution of the human body while teaching that each human soul is created immediately by God and that original sin must be upheld (Humani Generis 36–37; CCC 366, 390). Evolution as a scientific theory is distinct from materialist philosophies built on it.",
        authority: "doctrine",
      },
      perspectives: [
        {
          tradition: "atheism",
          position:
            "Many atheists hold that evolution by natural selection explains the apparent design of living things without any Creator, and see it as support for philosophical naturalism, the view that nature is all there is and that everything can in principle be explained by natural causes.",
          arguments: [
            {
              claim: "Evolution explains the design of living things, so God is unnecessary.",
              response:
                "Catholics distinguish the scientific question of how living things developed from the question of why anything exists and acts at all. God is “the first cause who operates in and through secondary causes” (CCC 308), so a natural explanation of a process does not exclude the Creator. St. John Paul II noted that there are “several theories of evolution,” with “materialist, reductionist and spiritualist interpretations”; materialism is a philosophy, not a finding of biology.",
              authority: "doctrine",
            },
            {
              claim: "If humans evolved, the soul and human dignity are illusions.",
              response:
                "The Church teaches that each human soul is created directly by God (CCC 366) and that the human person “is not just something, but someone” (CCC 357). St. John Paul II spoke of “an ontological difference, an ontological leap” in the human being that biological description alone does not capture.",
              authority: "doctrine",
            },
            {
              claim: "Original sin requires a single first couple, which modern genetics rules out.",
              response:
                "The Church affirms that Genesis 3 describes in figurative language a real first sin at the beginning of human history (CCC 390), and Humani Generis judged that it was not apparent how belief in many first parents could be reconciled with original sin (37). How this teaching relates to scientific findings about early human populations is a question theologians continue to study; it has not been resolved by a definitive Church statement on the science.",
              authority: "theological-opinion",
            },
          ],
          sources: ["sep-naturalism"],
        },
      ],
    },
  },
];
