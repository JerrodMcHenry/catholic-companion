// Live the Faith › Catholic Life.

import type { Topic } from "../types";
import { bible, ccc } from "./refs";

export const catholicLife: Topic[] = [
  {
    slug: "returning-after-mortal-sin",
    title: "Mortal Sin and Going to Mass",
    question: "I've committed a mortal sin. Can I still go to Mass?",
    alsoKnownAs: ["Going to Mass in mortal sin", "Spiritual communion", "Not receiving Communion"],
    category: "catholic-life",
    keywords: ["can I go to Mass in mortal sin", "mortal sin and Mass", "should I still go to Mass", "not receiving communion", "can't receive communion", "spiritual communion", "go to confession first", "perfect contrition", "embarrassed not to receive communion", "staying in the pew"],
    summary:
      "Yes: please keep coming to Mass, and the Sunday obligation still applies. Going to Mass and receiving Holy Communion are different: you are welcome at Mass, but you should not receive Communion until you have been to Confession. Staying in the pew during Communion is normal, and nobody should assume anything about it. Pray, tell God you are sorry, unite yourself to Christ in a spiritual communion, and go to Confession as soon as you can.",
    explanation: [
      "Keep going to Mass: Catholics are obliged to take part in Mass on Sundays and holy days unless excused for a serious reason (CCC 2180–2181; canon 1247). The obligation does not lapse because of sin; hearing God's word and praying with the Church is part of the way back.",
      "Wait to receive Communion: “Anyone aware of having sinned mortally must not receive communion without having received absolution in the sacrament of penance” (CCC 1415; canon 916). Canon 916 allows a narrow exception when there is a grave reason to receive and no opportunity to confess; it is explained in “How do I receive Communion?”",
      "Not sure it was mortal? A sin is mortal only when it is grave matter, committed with full knowledge and deliberate consent (CCC 1857). If you are unsure, it is wise to confess it and ask the priest. See “What is the difference between mortal and venial sin?”",
      "Sorrow now: an act of perfect contrition, sorrow out of love for God, obtains forgiveness even of mortal sins if it includes the firm resolution to go to Confession as soon as possible (CCC 1452). Pray it as soon as you realize what you have done; it does not replace Confession before Communion.",
      "Spiritual communion: when you cannot receive the sacrament, you can still unite yourself to Christ by desire. St. John Paul II recommended the practice of “spiritual communion” (Ecclesia de Eucharistia 34).",
      "No one should judge: many people stay in the pew for many reasons, including fasting, not being Catholic, or simply personal prayer. Like the tax collector who begged God for mercy as a sinner (Luke 18:13), the one who waits in humility is close to God.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1385", url: ccc("__P42") },
        { paragraphs: "1415", url: ccc("__P44") },
        { paragraphs: "1452", url: ccc("__P4D") },
        { paragraphs: "1857", url: ccc("__P6C") },
        { paragraphs: "2180–2181", url: ccc("__P7O") },
      ],
      scripture: [
        { passage: "Luke 18:9–14", url: bible("luke/18") },
        { passage: "1 Corinthians 11:27–29", url: bible("1corinthians/11") },
        { passage: "Psalm 51", url: bible("psalms/51") },
      ],
      documents: ["canon-law-eucharist", "canon-law-sunday", "ecclesia-de-eucharistia"],
    },
    resources: ["ca-attending-mass-mortal-sin", "osv-receive-communion"],
    related: ["mortal-and-venial-sin", "how-to-go-to-confession", "returning-to-the-church", "who-can-receive-communion"],
  },
  {
    slug: "fasting-and-abstinence",
    title: "Fasting and Abstinence",
    question: "What are the rules for fasting and abstinence?",
    alsoKnownAs: ["Friday abstinence", "Lenten fasting"],
    category: "catholic-life",
    keywords: ["fasting", "abstinence", "no meat on Fridays", "Friday abstinence", "Lenten fasting rules", "fast on Ash Wednesday", "Good Friday fast", "who has to fast", "age for fasting", "excused from fasting", "fish on Fridays", "penance"],
    summary:
      "In the United States, Latin Catholics fast and abstain from meat on Ash Wednesday and Good Friday, and abstain from meat on the Fridays of Lent. Fasting binds those aged 18 to 59 and allows one full meal and two smaller meals; abstinence binds those 14 and older. Every Friday of the year remains a day of penance. The sick, pregnant or nursing women, and others with serious reasons are excused.",
    explanation: [
      "Why Catholics fast: “The divine law binds all the Christian faithful to do penance each in his or her own way,” and common penitential days unite the Church (canon 1249). These days “help us acquire mastery over our instincts and freedom of heart” (CCC 2043).",
      "The rules in the United States: “Ash Wednesday and Good Friday are obligatory days of fasting and abstinence for Catholics. In addition, Fridays during Lent are obligatory days of abstinence.” Fasting binds from age 18 until age 59; “a person is permitted to eat one full meal, as well as two smaller meals that together are not equal to a full meal.” Abstinence from meat binds from age 14 onwards (USCCB).",
      "What abstinence means: abstaining from meat; eggs, milk products, and condiments made from animal fat are not forbidden (Paenitemini, norm III). When a solemnity falls on a Friday, abstinence is not required (canon 1251).",
      "Fridays all year: every Friday is a penitential day (canon 1250). The U.S. bishops ended the year-round law of Friday abstinence in 1966 but said that “Friday itself remains a special day of penitential observance throughout the year,” giving “first place” to voluntary abstinence from meat while allowing other works of penance and charity (Pastoral Statement on Penance and Abstinence 22–24; canon 1253).",
      "Who is excused: the U.S. bishops list the physically or mentally ill, including people with chronic illnesses such as diabetes, and pregnant or nursing women. Members of the Eastern Catholic Churches follow the law of their own Church. Parents and pastors should teach children the meaning of penance even before they are bound (canon 1252).",
      "Health first: fasting is a spiritual practice, not a diet. If fasting could harm your health, including if you have or have had an eating disorder, speak with a doctor and a priest. On Good Friday, many continue the fast until the Easter Vigil as the “paschal fast” (USCCB).",
    ],
    teaching: {
      catechism: [
        { paragraphs: "1434–1438", url: ccc("__P4B") },
        { paragraphs: "2041–2043", url: ccc("__P75") },
      ],
      scripture: [
        { passage: "Matthew 6:16–18", url: bible("matthew/6") },
        { passage: "Matthew 4:1–2", url: bible("matthew/4") },
        { passage: "Isaiah 58:6–7", url: bible("isaiah/58") },
      ],
      documents: ["canon-law-sunday", "paenitemini", "usccb-penance-abstinence"],
    },
    resources: ["usccb-fast-abstinence"],
    related: ["lent", "ash-wednesday", "holy-week", "how-to-go-to-confession"],
  },
  {
    slug: "catholic-funerals-and-grief",
    title: "Death, Funerals, and Grief",
    question: "What do Catholics do when someone dies?",
    alsoKnownAs: ["Catholic funeral", "Funeral Mass", "Christian burial", "Order of Christian Funerals"],
    category: "catholic-life",
    keywords: ["funeral", "funeral Mass", "death", "dying", "grief", "grieving", "mourning", "loss of a loved one", "burial", "cremation", "ashes", "cemetery", "wake", "praying for the dead", "All Souls", "Mass for the dead", "bereavement", "what to do when someone dies", "suicide", "someone died", "loved one died", "death in the family", "died"],
    summary:
      "Catholics face death with sorrow and with hope: Christ has risen, and those who die in him will rise with him. When someone dies, the Church prays for them, celebrates a funeral that commends them to God's mercy, and comforts those who mourn. Contact the parish as soon as you can, ideally before the funeral arrangements are fixed. The Church prays for the dead with hope, but it does not pronounce on the eternal destiny of any particular person.",
    explanation: [
      "Christian hope: Jesus called himself the resurrection and the life, and promised that whoever believes in him will live even though he dies (John 11:25). In death the soul is separated from the body, and it will be reunited with the body on the day of resurrection (CCC 1005). Paul writes so that believers will not grieve as those do who have no hope (1 Thessalonians 4:13). Grief is not a lack of faith: at the tomb of his friend Lazarus, Jesus himself wept (John 11:35).",
      "Praying for the dead: from the beginning the Church has honored the dead and prayed for them, “above all the Eucharistic sacrifice,” so that, purified, they may see God (CCC 1032; 2 Maccabees 12:46). Writing around 400, St. Augustine recalled his dying mother, St. Monica, asking only this: “remember me at the Lord's altar, wherever you be” (Confessions 9.11). Catholics have Masses offered for the dead, pray for them, and remember them especially on All Souls' Day, November 2. The question on purgatory explains this purification.",
      "The funeral: the Church's funeral rites have three settings, the home, the church, and the cemetery, and their elements are a greeting of faith, the Liturgy of the Word, the Eucharist, and a final farewell (CCC 1686–1690). The funeral Mass is the central and most important part of a Catholic funeral (Order of Christian Funerals, 5). The homily is not a eulogy; it proclaims the death of a Christian in the light of the risen Christ (CCC 1688). The funeral confers no sacrament on the deceased, but it is the Church's prayer for them and its proclamation of eternal life to those present (CCC 1684).",
      "Who may have a Catholic funeral: deceased Catholics are to receive the Church's funeral rites, ordinarily in their own parish church (canons 1176–1177). Catechumens are counted among the faithful for this purpose, and the bishop can allow a Catholic funeral for a child whose parents intended to have the child baptized, or in some circumstances for a baptized Christian of another church (canon 1183). Bring any question about a particular situation to the parish priest.",
      "Burial and cremation: following Christ's own burial, the Church “insistently recommends” that the bodies of the dead be buried (Ad resurgendum cum Christo, 2016, no. 3), and burying the dead is a work of mercy (CCC 2300). Cremation is permitted unless it is chosen for reasons contrary to Christian faith (canon 1176 §3; CCC 2301). The 2016 instruction directs that ashes be laid to rest in a sacred place, such as a cemetery, and not scattered or kept in jewelry or mementos (nos. 5–7). In 2023 the Dicastery for the Doctrine of the Faith confirmed that this norm “still retains all its validity.” It also allowed a sacred place where the ashes of the baptized are kept together, with each person's name recorded, and said that church authority may consider a family's request to keep “a minimal part of the ashes” in a place significant to the person's life, provided the remains are kept in a sacred place and any “pantheistic, naturalistic, or nihilistic misunderstanding” is ruled out. Your parish can explain what applies in your diocese.",
      "When someone dies: if death is approaching, call a priest for the sacraments (see the Anointing of the Sick). After a death, contact the parish as well as a funeral home; the parish will help the family prepare the funeral liturgy. If the person was not registered at a parish, call the Catholic parish where they lived or where the family would like the funeral to be held.",
      "Grief and support: grief takes time and is different for everyone. The Church's funeral rites are meant to bring “the solace of hope to the living” (canon 1176 §2), and a priest or the parish can help you find support, including bereavement groups where they exist. If grief becomes overwhelming or brings thoughts of self-harm, reach out to a doctor or counselor, or, in the United States, call or text 988 to reach the 988 Suicide & Crisis Lifeline.",
      "What the Church does not do: it does not declare that any particular person is lost. Even for those who have taken their own lives, the Church teaches: “We should not despair of the eternal salvation of persons who have taken their own lives. By ways known to him alone, God can provide the opportunity for salutary repentance. The Church prays for persons who have taken their own lives” (CCC 2283). The Church entrusts every person who has died to God's justice and mercy, and it prays for them.",
    ],
    teaching: {
      catechism: [
        { paragraphs: "958", url: ccc("__P2B") },
        { paragraphs: "1005–1014", url: ccc("__P2I") },
        { paragraphs: "1030–1032", url: ccc("__P2N") },
        { paragraphs: "1680", url: ccc("__P5A") },
        { paragraphs: "1681", url: ccc("__P5B") },
        { paragraphs: "1684–1690", url: ccc("__P5C") },
        { paragraphs: "2283", url: ccc("__P7Z") },
        { paragraphs: "2299–2301", url: ccc("__P80") },
      ],
      scripture: [
        { passage: "John 11:17–44", url: bible("john/11") },
        { passage: "1 Thessalonians 4:13–18", url: bible("1thessalonians/4") },
        { passage: "2 Maccabees 12:43–46", url: bible("2maccabees/12") },
        { passage: "Romans 6:3–9", url: bible("romans/6") },
        { passage: "Revelation 21:1–5", url: bible("revelation/21") },
      ],
      documents: ["ad-resurgendum-cum-christo", "canon-law-funerals", "ddf-note-on-ashes-2023"],
    },
    resources: ["usccb-bereavement-and-funerals", "augustine-confessions-9"],
    related: ["what-happens-when-we-die", "purgatory", "heaven", "anointing-of-the-sick", "resurrection"],
  },
];
