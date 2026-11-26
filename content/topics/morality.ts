// Learn › Moral Life: how Catholics judge right and wrong, life and dignity, sexuality, and social teaching.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const morality: Topic[] = [
  {
    slug: "how-catholics-decide-right-and-wrong",
    title: "Right and Wrong",
    question: "How do Catholics decide what is right and wrong?",
    alsoKnownAs: ["Moral theology", "Sources of morality"],
    category: "morality",
    keywords: ["right and wrong", "morality", "moral theology", "how do Catholics decide", "natural law", "object intention circumstances", "the end does not justify the means", "intrinsically evil", "moral relativism", "good intentions"],
    summary:
      "Catholics believe that right and wrong are not simply matters of opinion. God has written a moral law into human nature that reason can know, and he has revealed it more fully in Scripture and in Jesus Christ. To judge a particular action, the Church looks at what is chosen (the object), why it is chosen (the intention), and the circumstances. Conscience applies this knowledge to concrete choices, and the Church's teaching helps to form it.",
    explanation: [
      "A law written in us: “The natural law expresses the original moral sense which enables man to discern by reason the good and the evil, the truth and the lie” (CCC 1954). St. Paul says that even those without the law of Moses show that “the demands of the law are written in their hearts” (Romans 2:15).",
      "A law revealed: God's law is revealed in the Ten Commandments and fulfilled in Jesus, who summed it up in two commandments: love God with all your heart, and love your neighbor as yourself (Matthew 22:37–40; CCC 2055).",
      "Three questions about any act: the morality of an act depends on “the object chosen; the end in view or the intention; the circumstances of the action” (CCC 1750). A good act needs all three to be good (CCC 1755).",
      "The end does not justify the means: a good intention “does not make behavior that is intrinsically disordered, such as lying and calumny, good or just” (CCC 1753). Some acts, such as murder, are “always gravely illicit by reason of their object,” whatever the intention or circumstances (CCC 1756). The Church calls such acts intrinsically evil.",
      "The act and the person: an act can be objectively wrong while a person's responsibility for it is lessened. Responsibility “can be diminished or even nullified by ignorance, inadvertence, duress, fear, habit, inordinate attachments, and other psychological or social factors” (CCC 1735).",
      "Conscience applies all this to real choices; see “What is conscience?” This page explains the Church's general teaching; it is not personal pastoral, medical, or legal advice. For a particular situation, speak with a priest.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1735", url: ccc("__P5N") },
        { paragraphs: "1750, 1753", url: ccc("__P5R") },
        { paragraphs: "1755–1756", url: ccc("__P5S") },
        { paragraphs: "1954–1956", url: ccc("__P6U") },
        { paragraphs: "2055", url: ccc("__P78") },
      ],
      scripture: [
        { passage: "Romans 2:14–16", url: bible("romans/2") },
        { passage: "Matthew 22:34–40", url: bible("matthew/22") },
        { passage: "Micah 6:8", url: bible("micah/6") },
      ],
      documents: ["veritatis-splendor", "gaudium-et-spes"],
    },
    resources: ["ca-conscience-heschmeyer"],
    related: ["conscience", "ten-commandments", "what-is-sin", "mortal-and-venial-sin"],
  },
  {
    slug: "conscience",
    title: "Conscience",
    question: "What is conscience?",
    alsoKnownAs: ["Formation of conscience", "Moral conscience"],
    category: "morality",
    keywords: ["conscience", "what is conscience", "follow your conscience", "forming conscience", "examination of conscience", "erroneous conscience", "invincible ignorance", "conscience and Church teaching", "moral judgment"],
    summary:
      "Conscience is a judgment of reason by which a person recognizes whether a particular act is good or evil. Catholics believe it is where we hear God's law written in our hearts, so a person must follow the certain judgment of his or her conscience. But conscience can be mistaken, so it needs to be formed: by Scripture, prayer, honest reflection, good advice, and the teaching of the Church.",
    explanation: [
      "A sanctuary: “Conscience is the most secret core and sanctuary of a man. There he is alone with God, Whose voice echoes in his depths” (Gaudium et Spes 16; CCC 1776).",
      "A judgment, not a feeling: conscience is “a judgment of reason whereby the human person recognizes the moral quality of a concrete act” (CCC 1778). Feeling guilty or at peace is not the same as a judgment of conscience.",
      "We must follow it: “A human being must always obey the certain judgment of his conscience” (CCC 1790). To act deliberately against it would be to condemn oneself.",
      "It can be wrong: conscience can make mistaken judgments. When someone “takes little trouble to find out what is true and good,” he is responsible for the errors that follow (CCC 1791). When ignorance is not the person's fault, the evil done “cannot be imputed to him,” but “it remains no less an evil,” and errors of conscience should be corrected (CCC 1793).",
      "Forming conscience: “Conscience must be informed and moral judgment enlightened” (CCC 1783). We are helped by the Word of God, prayer, examining our conscience, the gifts of the Holy Spirit, the advice of others, and “the authoritative teaching of the Church” (CCC 1785).",
      "Hard decisions: in difficult situations a person should seek what is right with the help of prudence, the advice of competent people, and the Holy Spirit (CCC 1787–1788). A priest or spiritual director can help with a personal situation.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1776", url: ccc("__P5Y") },
        { paragraphs: "1777–1778", url: ccc("__P5Z") },
        { paragraphs: "1783–1785", url: ccc("__P60") },
        { paragraphs: "1787–1788", url: ccc("__P61") },
        { paragraphs: "1790–1794", url: ccc("__P62") },
      ],
      scripture: [
        { passage: "Romans 2:14–16", url: bible("romans/2") },
        { passage: "Psalm 119:105", url: bible("psalms/119") },
        { passage: "1 Timothy 1:5", url: bible("1timothy/1") },
      ],
      documents: ["gaudium-et-spes", "veritatis-splendor"],
    },
    resources: ["ca-conscience-heschmeyer"],
    related: ["how-catholics-decide-right-and-wrong", "what-is-sin", "how-to-go-to-confession", "mortal-and-venial-sin"],
  },
  {
    slug: "ten-commandments",
    title: "The Ten Commandments",
    question: "What are the Ten Commandments?",
    alsoKnownAs: ["Decalogue", "The Law of God"],
    category: "morality",
    keywords: ["Ten Commandments", "Decalogue", "commandments", "Moses", "Mount Sinai", "Exodus 20", "Deuteronomy 5", "list of the Ten Commandments", "greatest commandment", "do Christians still keep the commandments"],
    summary:
      "The Ten Commandments are the “ten words” God gave to Israel through Moses on Mount Sinai, summing up the duties of love toward God and neighbor. Jesus confirmed them and summed them up in two commandments: love God with all your heart, and love your neighbor as yourself. Catholics believe they express the moral law written in every human heart and still bind Christians today.",
    explanation: [
      "Ten words: “Decalogue” means “ten words.” God revealed them on the holy mountain, and they are recorded in Exodus 20 and Deuteronomy 5 (CCC 2056).",
      "The commandments, in summary, following the Catholic numbering: 1. worship the one true God alone; 2. do not misuse God's name; 3. keep holy the Lord's day; 4. honor your father and mother; 5. do not kill; 6. do not commit adultery; 7. do not steal; 8. do not bear false witness; 9. do not covet your neighbor's spouse; 10. do not covet your neighbor's goods.",
      "Different numberings: the Catholic Church follows the division of St. Augustine, as do the Lutheran confessions; the Orthodox Churches and Reformed communities divide them slightly differently (CCC 2066). The content is the same.",
      "Love of God and neighbor: the first three commandments concern love of God, the other seven love of neighbor (CCC 2067). When asked how to reach eternal life, Jesus answered, “If you wish to enter into life, keep the commandments” (Matthew 19:17).",
      "Still binding: the commandments “are fundamentally immutable, and they oblige always and everywhere. No one can dispense from them” (CCC 2072). They are to be read in the light of the commandment of love (CCC 2055).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "2052–2074", url: ccc("__P78") },
      ],
      scripture: [
        { passage: "Exodus 20:1–17", url: bible("exodus/20") },
        { passage: "Deuteronomy 5:6–21", url: bible("deuteronomy/5") },
        { passage: "Matthew 19:16–21", url: bible("matthew/19") },
        { passage: "Matthew 22:34–40", url: bible("matthew/22") },
      ],
      documents: ["veritatis-splendor"],
    },
    resources: [],
    related: ["how-catholics-decide-right-and-wrong", "what-is-sin", "why-go-to-mass-on-sunday", "human-life-dignity"],
  },
  {
    slug: "what-is-sin",
    title: "Sin",
    question: "What is sin?",
    alsoKnownAs: ["Personal sin", "Offense against God"],
    category: "morality",
    keywords: ["sin", "what is sin", "kinds of sin", "sins of omission", "social sin", "structures of sin", "offense against God", "temptation", "forgiveness of sins", "is sin real"],
    summary:
      "Sin is a free choice to do what is wrong: an offense against God and a failure in genuine love for God and neighbor. It harms the sinner and other people as well as offending God. Catholics distinguish original sin, which we inherit, from the personal sins we commit, and mortal from venial sin. Above all, the Church teaches that God's mercy is greater than any sin.",
    explanation: [
      "What sin is: “Sin is an offense against reason, truth, and right conscience; it is failure in genuine love for God and neighbor caused by a perverse attachment to certain goods. It wounds the nature of man and injures human solidarity” (CCC 1849).",
      "Against God: the psalmist prays, “Against you, you alone have I sinned; I have done what is evil in your eyes” (Psalm 51:6). Sin turns our hearts away from God's love (CCC 1850).",
      "Kinds of sin: personal sins can be in thought, word, deed, or omission, and “the root of sin is in the heart of man, in his free will” (CCC 1853). Original sin is different: it is not a personal act but a condition we are born into (see “What is original sin?”). The difference between mortal and venial sin is explained in “What is the difference between mortal and venial sin?”",
      "Sin is never only private: sin “makes men accomplices of one another,” and personal sins can give rise to “structures of sin” in society (CCC 1869).",
      "Mercy: “The Gospel is the revelation in Jesus Christ of God's mercy to sinners” (CCC 1846). St. Paul writes that “where sin increased, grace overflowed all the more” (Romans 5:20). Christ forgives sins in the sacrament of Confession.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1846", url: ccc("__P69") },
        { paragraphs: "1849–1850", url: ccc("__P6A") },
        { paragraphs: "1853", url: ccc("__P6B") },
        { paragraphs: "1869", url: ccc("__P6D") },
      ],
      scripture: [
        { passage: "Psalm 51", url: bible("psalms/51") },
        { passage: "Romans 5:20–21", url: bible("romans/5") },
        { passage: "1 John 1:8–9", url: bible("1john/1") },
      ],
      documents: ["reconciliatio-et-paenitentia"],
    },
    resources: [],
    related: ["mortal-and-venial-sin", "original-sin", "confession", "conscience"],
  },
  {
    slug: "human-life-dignity",
    title: "Human Life and Dignity",
    question: "Why does the Church defend every human life?",
    alsoKnownAs: ["Sanctity of life", "Human dignity"],
    category: "morality",
    keywords: ["human dignity", "sanctity of life", "pro-life", "right to life", "euthanasia", "assisted suicide", "image of God", "Dignitas Infinita", "Evangelium Vitae", "consistent life", "disability"],
    summary:
      "Because every human being is created in the image of God and loved by him, every human life has a dignity that does not depend on age, health, ability, or usefulness. The Church therefore teaches that innocent human life must never be directly taken, from conception to natural death, and that the poor, the sick, and the vulnerable deserve special care.",
    explanation: [
      "Willed by God: “Every human life, from the moment of conception until death, is sacred because the human person has been willed for its own sake in the image and likeness of the living and holy God” (CCC 2319; Genesis 1:27).",
      "An infinite dignity: “Every human person possesses an infinite dignity, inalienably grounded in his or her very being, which prevails in and beyond every circumstance, state, or situation the person may ever encounter” (Dignitas Infinita 1).",
      "God is the Lord of life: “no one can under any circumstance claim for himself the right directly to destroy an innocent human being” (CCC 2258). The Church also teaches that legitimate defense of persons and societies is not an exception to this, because the aim is to protect life, not to kill the innocent (CCC 2263).",
      "From conception to natural death: this applies to unborn children (see “What does the Church teach about abortion?”) and to the sick and dying: “direct euthanasia … is morally unacceptable” (CCC 2277). “Those whose lives are diminished or weakened deserve special respect” (CCC 2276).",
      "A wider vision: the Church's concern for dignity also includes poverty, the situation of migrants, violence against women, human trafficking, and war, themes treated in the 2024 declaration Dignitas Infinita. See also “What is Catholic social teaching?”",
    ],
    teaching: {
      catechism: [
        { paragraphs: "357", url: ccc("__P1B") },
        { paragraphs: "2258", url: ccc("__P7Y") },
        { paragraphs: "2263, 2276–2277", url: ccc("__P7Z") },
        { paragraphs: "2319", url: ccc("__P82") },
      ],
      scripture: [
        { passage: "Genesis 1:26–27", url: bible("genesis/1") },
        { passage: "Psalm 139:13–16", url: bible("psalms/139") },
        { passage: "Matthew 25:31–46", url: bible("matthew/25") },
      ],
      documents: ["evangelium-vitae", "dignitas-infinita"],
    },
    resources: [],
    related: ["abortion", "what-is-catholic-social-teaching", "ten-commandments", "why-did-god-create-us"],
  },
  {
    slug: "abortion",
    title: "Abortion",
    question: "What does the Church teach about abortion?",
    alsoKnownAs: ["Procured abortion", "Right to life of the unborn"],
    category: "morality",
    keywords: ["abortion", "Catholic teaching on abortion", "pro-life", "unborn child", "when does life begin", "excommunication abortion", "forgiveness after abortion", "Project Rachel", "Didache", "Evangelium Vitae"],
    summary:
      "The Catholic Church teaches that human life must be respected and protected from the moment of conception, so direct abortion, intended either as an end or as a means, is a grave moral evil. This teaching has been constant since the first century. The Church also offers mercy and healing: anyone involved in an abortion can receive God's forgiveness through repentance and the sacrament of Reconciliation.",
    explanation: [
      "The teaching: “Human life must be respected and protected absolutely from the moment of conception” (CCC 2270). “Since the first century the Church has affirmed the moral evil of every procured abortion. This teaching has not changed and remains unchangeable” (CCC 2271).",
      "What “direct” means: the teaching concerns abortion “willed either as an end or a means” (CCC 2271). Complex medical situations require careful moral reasoning, and this general page cannot settle any particular case.",
      "An early witness: the Didache, one of the earliest Christian writings, says, “you shall not murder a child by abortion nor kill that which is begotten” (Didache 2). The Letter to Diognetus describes Christians as those who “beget children; but they do not destroy their offspring.”",
      "Mercy, not only law: the Church attaches the canonical penalty of excommunication to procuring a completed abortion, but “the Church does not thereby intend to restrict the scope of mercy” (CCC 2272). Pope Francis granted all priests the faculty to absolve the sin of procured abortion (Misericordia et Misera 12).",
      "To women who have had an abortion, St. John Paul II wrote: “Certainly what happened was and remains terribly wrong. But do not give in to discouragement and do not lose hope… The Father of mercies is ready to give you his forgiveness and his peace in the Sacrament of Reconciliation” (Evangelium Vitae 99). In the United States, Project Rachel Ministry, “a diocesan-based network of priests, religious, counselors, and laypeople,” offers confidential help to anyone who has been involved in an abortion, “open to people of all faiths or no faith” (USCCB).",
      "Objective wrong and personal responsibility are distinct: many factors can lessen a person's culpability, which only God judges (CCC 1735, 1861). This page explains the Church's general teaching; it is not personal pastoral, medical, or legal advice. For a particular situation, speak with a priest.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1735", url: ccc("__P5N") },
        { paragraphs: "2270–2275", url: ccc("__P7Z") },
      ],
      scripture: [
        { passage: "Jeremiah 1:4–5", url: bible("jeremiah/1") },
        { passage: "Psalm 139:13–16", url: bible("psalms/139") },
        { passage: "Luke 1:39–44", url: bible("luke/1") },
      ],
      documents: ["evangelium-vitae", "misericordia-et-misera"],
    },
    resources: ["usccb-abortion-healing", "ca-abortion-early-church", "didache"],
    related: ["human-life-dignity", "confession", "returning-after-mortal-sin", "mortal-and-venial-sin"],
  },
  {
    slug: "sexuality",
    title: "Sexuality and Chastity",
    question: "What does the Church teach about sex and chastity?",
    alsoKnownAs: ["Chastity", "Sexual morality"],
    category: "morality",
    keywords: ["sex", "chastity", "sexual morality", "sex before marriage", "contraception", "natural family planning", "pornography", "same-sex attraction", "Humanae Vitae", "purity", "marriage"],
    summary:
      "The Church teaches that sexuality is a good gift of God that involves the whole person, body and soul, and is meant for the total, faithful, and fruitful self-giving of husband and wife in marriage. Chastity, the virtue that integrates sexuality within the person, is a call for everyone, married or single, according to their state of life. The Church teaches that sexual acts outside marriage are morally wrong, while entrusting the judgment of persons to God and offering his mercy and grace to all who struggle.",
    explanation: [
      "A good gift: God created human beings “male and female” and blessed them (Genesis 1:27–28). “Sexuality affects all aspects of the human person in the unity of his body and soul” (CCC 2332).",
      "Made for marriage: “Sexuality is ordered to the conjugal love of man and woman” (CCC 2360). It is “realized in a truly human way only if it is an integral part of the love by which a man and woman commit themselves totally to one another until death” (CCC 2361). The union of spouses has two meanings, unitive and procreative, which “cannot be separated” (CCC 2363; Humanae Vitae 12). The Church accepts natural methods of spacing births based on the infertile periods, and teaches that contraception is morally wrong (CCC 2370).",
      "Chastity for everyone: chastity “means the successful integration of sexuality within the person” (CCC 2337). “All the baptized are called to chastity” in keeping with their state of life, married, single, or consecrated (CCC 2348–2349). It “has laws of growth which progress through stages marked by imperfection and too often by sin” (CCC 2343).",
      "Acts contrary to chastity: the Catechism names acts such as lust, masturbation, fornication, pornography, prostitution, and rape as contrary to chastity (CCC 2351–2356), and notes that various factors can lessen a person's moral responsibility (CCC 2352).",
      "Same-sex attraction: the Church teaches that homosexual acts are contrary to the natural law, and that people with deep-seated homosexual tendencies “must be accepted with respect, compassion, and sensitivity. Every sign of unjust discrimination in their regard should be avoided” (CCC 2357–2358). Like everyone, they are called to chastity, supported by friendship, prayer, and grace (CCC 2359).",
      "Mercy and growth: the Church judges acts, but “we must entrust judgment of persons to the justice and mercy of God” (CCC 1861). Christ's forgiveness is offered in Confession. This page explains the Church's general teaching; it is not personal pastoral, medical, or legal advice. For a particular situation, speak with a priest.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1861", url: ccc("__P6C") },
        { paragraphs: "2331–2336", url: ccc("__P84") },
        { paragraphs: "2337–2359", url: ccc("__P85") },
        { paragraphs: "2360–2370", url: ccc("__P86") },
      ],
      scripture: [
        { passage: "Genesis 1:27–28", url: bible("genesis/1") },
        { passage: "Matthew 19:4–6", url: bible("matthew/19") },
        { passage: "1 Corinthians 6:18–20", url: bible("1corinthians/6") },
      ],
      documents: ["humanae-vitae", "gaudium-et-spes"],
    },
    resources: [],
    related: ["marriage-sacrament", "how-catholics-decide-right-and-wrong", "mortal-and-venial-sin", "confession"],
  },
  {
    slug: "what-is-catholic-social-teaching",
    title: "Catholic Social Teaching",
    question: "What is Catholic social teaching?",
    alsoKnownAs: ["Social doctrine", "Catholic social thought"],
    category: "morality",
    keywords: ["Catholic social teaching", "social justice", "common good", "subsidiarity", "solidarity", "option for the poor", "dignity of work", "Rerum Novarum", "care for creation", "Catholic politics"],
    summary:
      "Catholic social teaching is the Church's teaching on how to build a just society, drawn from the Gospel and from reason and developed especially since Pope Leo XIII's encyclical Rerum Novarum in 1891. Its core principles are the dignity of the human person, the common good, subsidiarity, and solidarity, with special concern for the poor and vulnerable, workers, families, and the care of creation.",
    explanation: [
      "A body of teaching: “The Church's social teaching comprises a body of doctrine, which is articulated as the Church interprets events in the course of history … in the light of the whole of what has been revealed by Jesus Christ” (CCC 2422). It developed in the nineteenth century, when the Gospel met modern industrial society (CCC 2421).",
      "Four principles: the Compendium of the Social Doctrine of the Church calls the dignity of the human person, the common good, subsidiarity, and solidarity “the very heart of Catholic social teaching” (Compendium 160).",
      "What they mean: the common good is “the sum total of social conditions which allow people, either as groups or as individuals, to reach their fulfillment more fully and more easily” (CCC 1906). Subsidiarity means that a larger community “should not interfere in the internal life of a community of a lower order,” but support it when needed (CCC 1883). Solidarity, also called “friendship” or “social charity,” is a demand of human and Christian brotherhood (CCC 1939).",
      "Seven themes: the U.S. bishops summarize the tradition in seven themes: life and dignity of the human person; call to family, community, and participation; rights and responsibilities; option for the poor and vulnerable; the dignity of work and the rights of workers; solidarity; and care for God's creation.",
      "Rooted in the Gospel: Jesus said that what we do for the least of his brothers and sisters we do for him (Matthew 25:31–46), and “it is by what they have done for the poor that Jesus Christ will recognize his chosen ones” (CCC 2443).",
      "Not a party program: the Church offers moral judgment on social and economic matters “when the fundamental rights of the person or the salvation of souls requires it,” with a mission distinct from that of political authorities (CCC 2420). It has rejected both totalitarian and atheistic ideologies and the “absolute primacy of the law of the marketplace over human labor” (CCC 2425).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1883", url: ccc("__P6G") },
        { paragraphs: "1905–1906", url: ccc("__P6K") },
        { paragraphs: "1939", url: ccc("__P6Q") },
        { paragraphs: "2419–2425", url: ccc("__P8C") },
        { paragraphs: "2443–2448", url: ccc("__P8F") },
      ],
      scripture: [
        { passage: "Matthew 25:31–46", url: bible("matthew/25") },
        { passage: "Luke 4:16–21", url: bible("luke/4") },
        { passage: "James 2:14–17", url: bible("james/2") },
      ],
      documents: ["compendium-social-doctrine", "rerum-novarum", "gaudium-et-spes"],
    },
    resources: ["usccb-seven-themes"],
    related: ["human-life-dignity", "ten-commandments", "what-is-sin", "why-did-god-create-us"],
  },
];
