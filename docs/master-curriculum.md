# Catholic Companion — Master Curriculum

**Status:** approved with revisions (Phase 7). Batches 1–5 (Foundations launch, First Mass, Mass parts I and II, Sacraments and the remaining Mass parts) are built: 83 new topics, marked ✓ like the 6 built earlier. In Batch 5 the last seven Mass parts were promoted from P2 to P1, so all 41 Mass part topics are now launch topics and built. Debate sections for topics marked **D** are written in their apologetics batches. Verification details and review status are in `docs/content-log.md`; no topic has yet received external theological review.
**Revision history:** Phase 6 first draft; Phase 7 added 35 topics and 6 traditions, corrected the authority labels, distinguished required, optional, and customary liturgical actions, added dedicated Protestant, Orthodox, Jewish, and Islamic curricula, and replaced estimated counts with counts generated from the inventory. Batch 5 promoted seven Mass parts to P1 (157 → 164 P1 topics; 422 in all).
**Scope:** the complete plan of subjects, topics, pathways, sources, and process for Catholic Companion.
**Guiding principle:** comprehensive Catholic knowledge, minimal interface, minimal codebase.

All theological content in this plan, and everything later written from it, is subject to theological review.

---

## Contents

1. [Summary](#1-summary)
2. [Structure: subjects, pillars, and categories](#2-structure-subjects-pillars-and-categories)
3. [Planning conventions](#3-planning-conventions)
4. [Topic inventory by subject](#4-topic-inventory-by-subject)
5. [The Holy Mass — flagship curriculum](#5-the-holy-mass--flagship-curriculum)
6. [Comparative religion curriculum](#6-comparative-religion-curriculum)
7. [Apologetics curriculum](#7-apologetics-curriculum)
8. [Learning pathways](#8-learning-pathways)
9. [Resource selection methodology](#9-resource-selection-methodology)
10. [Content development and verification methodology](#10-content-development-and-verification-methodology)
11. [Implementation batches](#11-implementation-batches)
12. [Topic counts and priorities](#12-topic-counts-and-priorities)
13. [Gaps, risks, and unresolved decisions](#13-gaps-risks-and-unresolved-decisions)
14. [Appendix A: verified anchor sources](#appendix-a-verified-anchor-sources)
15. [Appendix B: what was reused from the original Mass curriculum](#appendix-b-what-was-reused-from-the-original-mass-curriculum)

---

## 1. Summary

- **Topics planned:** 422 individual questions across 22 subject areas, plus 31 religious-tradition entries (29 planned pages). Exact counts are in [§12](#12-topic-counts-and-priorities).
- **Navigation stays simple.** The 22 subject areas are a planning structure. Readers see the same four pillars, with 15 categories (4 more than today), and reach almost everything through search, Start here, and related links.
- **One topic, many routes.** Every question is written once. Pathways, tradition pages, and apologetics browsing link to the same topic; nothing is duplicated.
- **The Holy Mass is the flagship:** 65 topics (24 themes and 41 parts), covering every part of the Mass from arrival to the recessional. Every GIRM paragraph number in this plan was checked against the official text (see [§5.7](#57-verified-liturgical-references)).
- **Apologetics is woven in, not bolted on.** 91 topics carry a debate section with one or more opposing perspectives. Tradition pages gather them by religion, and dedicated curricula cover the Protestant, Orthodox, Jewish, and Islamic dialogues.
- **Priorities:** the 164 P1 topics make a credible public launch. They cover every acceptance-criteria journey and the questions beginners ask first.
- **Nothing here invents a source.** URLs appear only where they were opened and checked during this phase ([Appendix A](#appendix-a-verified-anchor-sources)). Everything else names a source type or a document to locate.

---

## 2. Structure: subjects, pillars, and categories

### 2.1 Subjects you proposed, and what was added

All 20 proposed subject areas are kept. Six important areas were missing or buried inside other subjects; they are added below and marked **New**.

| # | Subject | Status | Why |
|---|---|---|---|
| 1 | Foundations of Catholicism | Kept | |
| 2 | God and the Holy Trinity | Kept | |
| 3 | Jesus Christ | Kept | |
| 4 | **Creation and the Human Person** | **New** | Creation, the Fall, original sin, the soul, evolution, and human dignity are foundational and asked about constantly. |
| 5 | Sacred Scripture | Kept | |
| 6 | **The Church**, Sacred Tradition, and Church Authority | **Expanded** | "The Church" itself (what it is, the pope, bishops, laity, religious life) was missing. |
| 7 | The Seven Sacraments | Kept | |
| 8 | The Holy Mass | Kept (flagship) | |
| 9 | Mary | Kept | |
| 10 | Saints and Angels | Kept | |
| 11 | Prayer and Spiritual Life | Kept | |
| 12 | Catholic Moral Theology | Kept | Now explicitly includes sexuality, bioethics, and life issues. |
| 13 | Salvation and Eternal Life | Kept | Includes grace and justification. |
| 14 | Church History | Kept | Includes the Eastern Catholic Churches and the abuse crisis. |
| 15 | Church Fathers and Doctors | Kept | |
| 16 | Philosophy and Natural Theology | Kept | Includes faith and science. |
| 17 | Catholic Social Teaching | Kept | |
| 18 | Liturgical Life | Kept | The Church year, seasons, feasts, and other rites. |
| 19 | OCIA and Becoming Catholic | Kept | Includes returning Catholics. |
| 20 | **Everyday Catholic Life, Marriage, and Vocation** | **New** | Practical life (fasting, precepts, home prayer), vocations, and family were scattered or missing. |
| 21 | Comparative Religion | Kept | Tradition pages ([§6](#6-comparative-religion-curriculum)). |
| 22 | Catholic Apologetics | Kept | Debate topics ([§7](#7-apologetics-curriculum)). |
| — | **Eastern Catholic Churches** | **New (cross-cutting)** | Readers should learn early that the Catholic Church includes 23 Eastern Churches. Covered in Foundations, History, the Mass, and Sacraments rather than as its own subject. |
| — | **Death, grief, and funerals** | **New (cross-cutting)** | Common, urgent real-life need. Covered in Liturgical Life, Salvation, and Everyday Life. |

### 2.2 How subjects map to the app

Readers never see "subjects." They see the existing four pillars and a small set of categories. Proposed categories (new ones marked ★):

| Pillar | Category (slug) | Subjects it holds |
|---|---|---|
| **Learn** | What Catholics Believe (`beliefs`) | Foundations; God and the Trinity; Jesus Christ; Creation and the Human Person; Salvation and Eternal Life |
| | ★ The Church (`church`) | The Church, Tradition, and Authority |
| | The Bible (`bible`) | Sacred Scripture |
| | The Sacraments (`sacraments`) | The Seven Sacraments |
| | The Mass (`mass`) | The Holy Mass |
| | Mary and the Saints (`mary-and-the-saints`) | Mary; Saints and Angels |
| | Moral Life (`morality`) | Moral Theology; Catholic Social Teaching |
| | Church History (`history`) | Church History; Fathers and Doctors |
| | ★ Faith and Reason (`faith-and-reason`) | Philosophy and Natural Theology |
| **Apologetics** | (browsed by religion and by question; no categories) | Comparative Religion; Apologetics |
| **Live the Faith** | Becoming Catholic (`becoming-catholic`) | OCIA and Becoming Catholic |
| | Prayer (`prayer`) | Prayer |
| | Spiritual Life (`spiritual-life`) | Spiritual life, virtues, discernment |
| | ★ The Church Year (`church-year`) | Liturgical Life |
| | ★ Catholic Life (`catholic-life`) | Everyday Catholic Life, Marriage, and Vocation |
| **Resources** | (resource library by type) | All resources |

**Category counts (reconciled).** Today the app has **11 category records**: 10 browsable categories plus `objections`, which only groups debate topics (Apologetics is browsed by religion and by question instead). With the 4 approved additions there are **15 records: 14 browsable categories** (9 under Learn, 5 under Live the Faith) **plus `objections`**. Large categories (The Mass, Sacraments) use a few in-page headings rather than sub-categories, keeping every topic within three taps of the homepage. Approved in Phase 7.

---

## 3. Planning conventions

### 3.1 Fields

Each inventory row gives:

| Column | Meaning |
|---|---|
| **Slug** | Stable identifier and URL (`/topic/<slug>`). Never changes after publication; bookmarks and links depend on it. ✓ = already built. |
| **Question** | The beginner-friendly heading. Its **learning objective** is that the reader can answer this question accurately in their own words. Where the objective goes further, it appears in Notes. |
| **Also called** | Theological or alternative names (feeds "Also called" and search). |
| **Lvl** | Difficulty: **B** beginner, **I** intermediate, **A** advanced. |
| **Pri** | Development priority: **P1** launch, **P2** second wave, **P3** depth. |
| **Related** | Key cross-links (slugs). Pages will also link to their category. |
| **Notes** | **D** = carries a debate section (see [§7](#7-apologetics-curriculum)); **R** = sensitive or contested, theological review before anything else; traditions involved; extra objective. |

Parent subject, pillar, and category come from the section heading. Each subject also lists its **expected source types**, using these codes:

| Code | Source type | Tier |
|---|---|---|
| **C** | Catechism of the Catholic Church (and its Compendium) | 1 |
| **D** | Church documents: councils, popes, Vatican dicasteries, USCCB | 1 |
| **L** | Liturgical books: GIRM, Roman Missal, Lectionary, ritual books | 1 |
| **K** | Code of Canon Law | 1 |
| **S** | Sacred Scripture (USCCB NABRE links) | 1 |
| **F** | Church Fathers and Doctors (New Advent and others) | 2 |
| **H** | Historical primary sources and recognized scholarship | 2 |
| **E** | Credible Catholic educational and apologetics resources | 3 |
| **O** | Opposing traditions' own primary sources; neutral scholarship | 4 |

### 3.2 Priority definitions

- **P1 — launch.** Needed for the app's acceptance-criteria journeys, the beginner and first-Mass pathways, and the most common objections. Target: written, reviewed, and linked before public launch.
- **P2 — second wave.** Questions most readers will reach within their first few visits, and the depth that OCIA participants and practicing Catholics expect.
- **P3 — depth.** Advanced or specialized topics that complete the curriculum.

### 3.3 Authority labels (corrected in Phase 7)

The Church distinguishes three levels of teaching, set out in the Profession of Faith and its 1998 doctrinal commentary from the Congregation for the Doctrine of the Faith, and in *Lumen Gentium* 25 (all verified, [Appendix A](#appendix-a-verified-anchor-sources)). Infallible teaching is **not limited to solemn definitions**: the bishops dispersed throughout the world, in communion with each other and with the pope, also teach infallibly when they agree that a doctrine of faith or morals is to be held definitively (the **ordinary and universal Magisterium**).

| Label | Meaning | How it is taught | Response asked of Catholics | Example |
|---|---|---|---|---|
| **1. Dogma** (infallible) | Divinely revealed truth | Solemn definition (ecumenical council or pope *ex cathedra*) **or** the ordinary and universal Magisterium | Faith ("believed as divinely revealed") | Divinity of Christ (Nicaea, Chalcedon) |
| **2. Definitive doctrine** (infallible) | Truth connected with revelation, proposed definitively | Solemn definition or the ordinary and universal Magisterium | Firmly accepted and held | Priestly ordination reserved to men (the CDF commentary's own example) |
| **3. Authoritative teaching** | Authentic but non-definitive teaching of the pope or the bishops | Encyclicals, the Catechism's applications, conciliar teaching not proposed definitively | Religious submission of will and intellect | Many social and moral applications |
| **4. Theological opinion** | Legitimately debated among faithful theologians | — | Freedom, within the faith | Limbo |
| **5. Pastoral reflection** | Reflection drawing on Church teaching, not a formal teaching | — | — | Encouragement in suffering |
| **6. Apologetic argument** | Reasoning offered in defense of the faith | — | Weigh its merits | Most responses to objections |

**Rules for labeling:**

- Name the source of the level (a definition, *Lumen Gentium* 25, the Catechism, an encyclical) in the topic's teaching references.
- The Catechism contains teaching at every level; a Catechism citation alone does not make something dogma.
- When unsure between two levels, use the lower one and flag **R**.
- **App mapping:** the app's `dogma` label covers level 1 and `doctrine` covers levels 2–3 for now. Its dogma display text is corrected in Batch 1 so it no longer says "defined", which wrongly excluded the ordinary and universal Magisterium. A separate "definitive doctrine" label is added only when a topic needs it (D11).

---

## 4. Topic inventory by subject

### 4.1 Foundations of Catholicism
*Learn › What Catholics Believe. Sources: C, D, S, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-do-catholics-believe` ✓ | What do Catholics believe, in a nutshell? | Deposit of faith | B | P1 | `what-is-the-creed`, `who-is-jesus` | Entry point for Start here |
| `what-does-catholic-mean` ✓ | What does "Catholic" mean? | Catholicity, universal Church | B | P1 | `four-marks` |  |
| `are-catholics-christians` ✓ | Are Catholics Christians? |  | B | P1 | `church-and-other-christians` | D: Protestantism |
| `what-is-the-creed` ✓ | What is the Creed? | Nicene Creed, Apostles' Creed, symbol of faith | B | P1 | `mass-creed`, `council-of-nicaea` |  |
| `what-is-faith` ✓ | What is faith? | Theological virtue of faith, assent | B | P1 | `faith-and-reason` |  |
| `divine-revelation` ✓ | How has God revealed himself? | Divine revelation, public and private revelation | I | P1 | `what-is-sacred-tradition`, `what-is-the-bible` |  |
| `what-is-the-catechism` ✓ | What is the Catechism? | CCC, Compendium | B | P1 | `what-is-dogma` | Points readers to the Vatican text |
| `what-is-dogma` ✓ | What is a dogma, and how is it different from opinion? | Doctrine, hierarchy of truths, theological notes | I | P1 | `what-is-the-magisterium`, `development-of-doctrine` | Explains the app's authority labels |
| `why-does-the-church-have-rules` | Why does the Church have so many rules? | Precepts, law and freedom | B | P2 | `precepts-of-the-church` | |
| `catholic-glossary` | What do common Catholic words mean? | Glossary | B | P2 | | A single glossary page; see D7 |
| `latin-and-eastern-catholics` | Is there only one way to be Catholic? | Latin Church, Eastern Catholic Churches, sui iuris Churches | I | P2 | `eastern-catholic-churches`, `eastern-liturgies` | |
| `faith-and-reason` | Can faith be reasonable? | Fides et ratio | I | P2 | `knowing-god-by-reason`, `faith-and-science` | |

### 4.2 God and the Holy Trinity
*Learn › What Catholics Believe. Sources: C, D, S, F.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `who-is-god` ✓ | Who is God? | Divine nature | B | P1 | `does-god-exist`, `what-is-the-trinity` |  |
| `what-is-the-trinity` ✓ | What is the Trinity? | Holy Trinity, triune God | B | P1 | `trinity-in-scripture`, `divinity-of-jesus` |  |
| `trinity-in-scripture` | Is the Trinity in the Bible? |  | I | P2 | `what-is-the-trinity` | D: Jehovah's Witnesses, Islam, Latter-day Saints, Judaism |
| `god-the-father` | Why do Christians call God "Father"? | | B | P2 | `our-father` | |
| `who-is-the-holy-spirit` ✓ | Who is the Holy Spirit? | Paraclete, Advocate | B | P1 | `confirmation`, `pentecost` | D: Jehovah's Witnesses |
| `gifts-of-the-holy-spirit` | What are the gifts and fruits of the Holy Spirit? | | B | P2 | `confirmation` | |
| `attributes-of-god` | What is God like? | Omnipotence, omniscience, divine attributes | I | P2 | `who-is-god` | |
| `divine-simplicity` | What does it mean that God is simple and unchanging? | Divine simplicity, immutability | A | P3 | `attributes-of-god` | |
| `divine-providence` | Does God care about my life? | Providence | B | P2 | `problem-of-evil` | |
| `is-god-male` | Is God male? | Divine transcendence | I | P3 | `god-the-father` | |
| `filioque` | What is the filioque? | Procession of the Holy Spirit | A | P3 | `great-schism` | D: Eastern Orthodoxy |
| `names-of-god` | What do God's names in the Bible mean? | YHWH, I AM, Tetragrammaton | I | P3 | `who-is-god` | |

### 4.3 Jesus Christ
*Learn › What Catholics Believe. Sources: C, D, S, F, H.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `who-is-jesus` ✓ | Who is Jesus? | Christology | B | P1 | `divinity-of-jesus`, `incarnation` |  |
| `divinity-of-jesus` ✓ | Is Jesus truly God? | Divinity of Christ, Deity of Christ | B | P1 | `what-is-the-trinity` | D: Islam, Jehovah's Witnesses; built |
| `did-jesus-exist` ✓ | Did Jesus really exist? | Historical Jesus | B | P1 | `who-wrote-the-gospels` | D: atheism |
| `incarnation` ✓ | Why did God become man? | Incarnation | B | P1 | `who-is-jesus` |  |
| `jesus-fully-human` | Was Jesus truly human? | Hypostatic union, two natures | I | P2 | `chalcedon-and-oriental-orthodoxy` | |
| `virgin-birth` | Was Jesus born of a virgin? | Virginal conception | B | P2 | `who-is-mary` | |
| `why-did-jesus-die` ✓ | Why did Jesus die on the cross? | Atonement, redemption, Paschal Mystery | B | P1 | `how-are-we-saved`, `mass-as-sacrifice` |  |
| `resurrection` ✓ | Did Jesus really rise from the dead? | Resurrection | B | P1 | `easter-season` | D: atheism, Islam |
| `was-jesus-crucified` | Was Jesus really crucified? | | I | P2 | `why-did-jesus-die` | D: Islam |
| `ascension` | What is the Ascension? | | B | P3 | `second-coming` | |
| `second-coming` | Will Jesus come again? | Parousia | B | P2 | `end-times` | |
| `what-jesus-taught` | What did Jesus teach? | Kingdom of God, Sermon on the Mount | B | P2 | `beatitudes` | |
| `miracles-of-jesus` | Did Jesus really work miracles? | | I | P2 | `miracles` | |
| `jesus-the-messiah` | Why do Christians call Jesus the Messiah? | Christ, Anointed One | B | P2 | `prophecy-fulfilled`, `jewish-objections-to-jesus` | Explains the Christian claim; Jewish objections in `jewish-objections-to-jesus` |
| `descent-into-hell` | What does "he descended into hell" mean? | Harrowing of hell | I | P3 | `what-is-the-creed` | |

### 4.4 Creation and the Human Person (new)
*Learn › What Catholics Believe. Sources: C, D, S.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `why-did-god-create-us` | Why did God create us? | Purpose of life | B | P1 | `meaning-of-life` | |
| `creation` | Did God create the world? | Creation from nothing | B | P1 | `creation-and-evolution` | |
| `creation-and-evolution` | Can Catholics accept evolution? | Humani Generis | I | P1 | `adam-and-eve`, `faith-and-science` | D: atheism; R |
| `adam-and-eve` | Were Adam and Eve real people? | Monogenism, the Fall | I | P2 | `original-sin` | R |
| `original-sin` | What is original sin? | The Fall, concupiscence | B | P1 | `baptism` | |
| `how-to-read-genesis` | Is Genesis meant to be read literally? | Literary genre, senses of Scripture | I | P2 | `literal-or-figurative` | |
| `image-of-god` | What does it mean that we are made in God's image? | Imago Dei, human dignity | B | P2 | `human-life-dignity` | |
| `human-soul` | Do humans have a soul? | Spiritual soul | B | P2 | `what-happens-when-we-die` | D: Jehovah's Witnesses |
| `free-will` | Do we have free will? | Freedom | I | P2 | `problem-of-evil` | |
| `male-and-female` | Why did God create us male and female? | Complementarity, theology of the body | I | P2 | `sexuality` | R |
| `natural-evil` | Why are there natural disasters if creation is good? | Physical evil | I | P3 | `problem-of-evil` | |

### 4.5 Sacred Scripture
*Learn › The Bible. Sources: C, D (Dei Verbum), S, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-the-bible` | What is the Bible? | Sacred Scripture | B | P1 | `catholic-bible-books` | |
| `catholic-bible-books` | Why do Catholic Bibles have more books? | Deuterocanon, Apocrypha, biblical canon | B | P1 | `sola-scriptura` | D: Protestantism |
| `inspiration-of-scripture` | How is the Bible the word of God? | Inspiration | I | P1 | `inerrancy` | |
| `inerrancy` | Can the Bible contain errors? | Inerrancy | I | P2 | `inspiration-of-scripture` | R |
| `how-to-read-the-bible` | How should Catholics read the Bible? | Senses of Scripture, exegesis | B | P1 | `lectio-divina` | |
| `literal-or-figurative` | Do Catholics take the Bible literally? | Literal sense, genre | B | P2 | `how-to-read-genesis` | |
| `old-and-new-testament` | How do the Old and New Testaments fit together? | Typology | I | P2 | `prophecy-fulfilled` | |
| `who-wrote-the-gospels` | Who wrote the Gospels, and are they reliable? | Authorship, historicity | I | P2 | `did-jesus-exist` | D: atheism |
| `which-bible-translation` | Which Bible translation should Catholics use? | NABRE, RSV-2CE | B | P1 | | |
| `where-to-start-reading-the-bible` | Where should a beginner start reading the Bible? | Reading plan | B | P1 | `how-to-read-the-bible` | |
| `lectio-divina` | How do I pray with Scripture? | Lectio divina | B | P2 | `how-to-pray` | |
| `bible-at-mass` | How is the Bible used at Mass? | Lectionary, three-year cycle | B | P2 | `mass-first-reading` | |
| `prophecy-fulfilled` | Did Jesus fulfill Old Testament prophecy? | Messianic prophecy | I | P2 | `jesus-the-messiah` | D: Judaism |
| `bible-manuscripts` | How do we know the Bible was copied accurately? | Textual criticism | I | P3 | `who-wrote-the-gospels` | |
| `dead-sea-scrolls` | What are the Dead Sea Scrolls? | Qumran | I | P3 | `bible-manuscripts`, `septuagint` | |
| `septuagint` | What is the Septuagint? | LXX, Greek Old Testament | I | P2 | `catholic-bible-books`, `formation-of-the-canon` | D: Protestantism, Judaism |
| `biblical-covenants` | What are the covenants in the Bible? | Covenants with Noah, Abraham, Moses, and David; New Covenant | I | P2 | `old-and-new-testament`, `old-covenant` | |
| `four-gospels` | Why are there four Gospels, and how are they different? | Synoptic Gospels | B | P2 | `who-wrote-the-gospels` | |
| `the-temple` | What was the Temple, and why does it matter for Christians? | Second Temple, Holy of Holies | I | P2 | `passover-and-the-eucharist`, `mass-as-sacrifice` | Context for Jewish dialogue |
| `did-the-church-hide-the-bible` | Did the Catholic Church keep the Bible from people? | Chained Bibles, vernacular | I | P2 | `catholic-bible-books` | D: Protestantism |
| `the-psalms` | What are the Psalms? | Psalter | I | P3 | `mass-responsorial-psalm` | |

### 4.6 The Church, Sacred Tradition, and Church Authority
*Learn › The Church (new category). Sources: C, D (Lumen Gentium, Dei Verbum), S, F, K.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-the-church` ✓ | What is the Church? | Body of Christ, People of God | B | P1 | `did-jesus-found-a-church` |  |
| `did-jesus-found-a-church` | Did Jesus found a Church? | Ecclesiology | B | P1 | `peter-the-rock` | D: Protestantism |
| `four-marks` | What does "one, holy, catholic, and apostolic" mean? | Marks of the Church | I | P2 | `what-does-catholic-mean` | |
| `what-is-sacred-tradition` ✓ | What is Sacred Tradition? | Tradition vs. traditions | B | P1 | `sola-scriptura` |  |
| `sola-scriptura` ✓ | Is the Bible the only authority? | Sola Scriptura | I | P1 | `what-is-sacred-tradition` | D: Protestantism; built |
| `what-is-the-magisterium` | Who teaches with authority in the Church? | Magisterium | I | P1 | `what-is-dogma` | |
| `what-is-the-pope` ✓ | What is the pope? | Papacy, Bishop of Rome | B | P1 | `peter-the-rock` |  |
| `peter-the-rock` | Did Jesus make Peter the leader of the apostles? | Petrine primacy, Matthew 16:18, papacy in Scripture | I | P1 | `fathers-on-the-papacy` | D: Protestantism, Eastern Orthodoxy. Covers the biblical case: Matthew 16:17–19, Isaiah 22:20–22, Luke 22:31–32, John 21:15–17 |
| `papal-infallibility` | What is papal infallibility? | Ex cathedra | I | P1 | `what-is-the-pope` | D: Protestantism, Eastern Orthodoxy |
| `apostolic-succession` | What is apostolic succession? | | I | P1 | `bishops-priests-deacons` | D: Protestantism |
| `bishops-priests-deacons` ✓ | What do bishops, priests, and deacons do? | Hierarchy, clergy | B | P1 | `holy-orders` |  |
| `ecumenical-councils` | What is an ecumenical council? | Councils | I | P2 | `council-of-nicaea` | |
| `vatican-ii` | What was the Second Vatican Council? | Vatican II | B | P2 | `latin-mass` | R |
| `development-of-doctrine` | Can Church teaching change? | Development of doctrine, Newman | I | P2 | `what-is-dogma` | |
| `role-of-the-laity` | What is the role of lay Catholics? | Laity, common priesthood | B | P2 | `vocation` | |
| `religious-orders` | What are monks, nuns, and religious orders? | Consecrated life | B | P2 | `religious-life-vocation` | |
| `dioceses-and-parishes` | What are dioceses and parishes? | | B | P2 | `finding-a-parish` | |
| `church-and-other-christians` | How does the Catholic Church see other Christians? | Ecumenism | I | P2 | `are-catholics-christians` | |
| `canon-law` | What is canon law? | Code of Canon Law | I | P3 | `annulment` | |

### 4.7 The Seven Sacraments
*Learn › The Sacraments. Sources: C, D, L, K, S, F.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-a-sacrament` ✓ | What is a sacrament? | Ex opere operato | B | P1 | `seven-sacraments` | |
| `seven-sacraments` ✓ | What are the seven sacraments? | | B | P1 | `what-is-a-sacrament` | |
| `sacraments-in-scripture` | Are the sacraments in the Bible? | | I | P2 | `seven-sacraments` | D: Protestantism |
| `sacramentals` | What are sacramentals? | Holy water, blessings, rosaries | B | P2 | `mass-holy-water` | |
| `baptism` ✓ | What is Baptism? | Christening | B | P1 | `original-sin` | |
| `infant-baptism` ✓ | Why do Catholics baptize babies? | Paedobaptism | B | P1 | `baptism` | D: Protestantism (Baptist, Pentecostal, evangelical) |
| `is-baptism-necessary` | Is Baptism necessary for salvation? | Baptism of desire, baptism of blood | I | P2 | `salvation-of-non-christians` | |
| `godparents` | What does a godparent do? | Sponsor | B | P2 | `baptism` | |
| `confirmation` ✓ | What is Confirmation? | Chrismation | B | P1 | `who-is-the-holy-spirit` | |
| `confirmation-age` | Why is Confirmation given at different ages? | Restored order | I | P3 | `confirmation` | |
| `what-is-the-eucharist` ✓ | What is the Eucharist? | Holy Communion, Blessed Sacrament | B | P1 | `real-presence` | |
| `real-presence` ✓ | What is the Real Presence of Jesus in the Eucharist? | Transubstantiation | B | P1 | `mass-as-sacrifice` | D: Protestantism; built (debate section added in a later batch) |
| `mass-as-sacrifice` ✓ | Is the Mass a sacrifice? | Eucharistic sacrifice | I | P1 | `why-did-jesus-die` | D: Protestantism |
| `passover-and-the-eucharist` | How is the Eucharist connected to the Passover? | Last Supper, Seder, paschal lamb | I | P2 | `mass-in-scripture`, `the-temple` | Context for Jewish dialogue |
| `who-can-receive-communion` ✓ | Who can receive Communion? | Communion guidelines, intercommunion | B | P1 | `how-to-receive-communion` | D: Protestantism; R |
| `eucharistic-adoration` | What is Eucharistic adoration? | Adoration, Benediction | B | P2 | `real-presence` | |
| `confession` ✓ | What is Confession? | Penance, Reconciliation | B | P1 | `how-to-go-to-confession` | |
| `why-confess-to-a-priest` ✓ | Why confess to a priest? | | I | P1 | `confession` | D: Protestantism |
| `how-to-go-to-confession` ✓ | How do I go to Confession? | Examination of conscience, Act of Contrition | B | P1 | `confession` | |
| `mortal-and-venial-sin` ✓ | What is the difference between mortal and venial sin? | | I | P1 | `what-is-sin` | |
| `anointing-of-the-sick` | What is the Anointing of the Sick? | Extreme unction | B | P2 | `last-rites` | |
| `last-rites` | What are the last rites? | Viaticum | B | P2 | `anointing-of-the-sick` | |
| `holy-orders` | What is Holy Orders? | Ordination | B | P2 | `bishops-priests-deacons` | |
| `priestly-celibacy` | Why are Catholic priests usually celibate? | Celibacy | I | P2 | `married-priests` | D: Protestantism |
| `married-priests` | Are there married Catholic priests? | Eastern Catholic clergy, Pastoral Provision | I | P3 | `priestly-celibacy` | |
| `women-and-the-priesthood` | Why can't women be priests? | Ordinatio Sacerdotalis | I | P2 | `holy-orders` | D: Protestantism; R |
| `marriage-sacrament` ✓ | What makes marriage a sacrament? | Matrimony | B | P1 | `catholic-marriage-preparation` | |
| `annulment` | What is an annulment? | Declaration of nullity | I | P2 | `divorce-and-remarriage` | R |
| `divorce-and-remarriage` | What does the Church teach about divorce? | | I | P2 | `annulment` | R |
| `mixed-marriage` | Can a Catholic marry a non-Catholic? | Mixed marriage, disparity of cult | B | P2 | `marriage-sacrament` | |

### 4.8 The Holy Mass
*Learn › The Mass. Sources: L, C, D, S, F, H, E.* The full plan is in [§5](#5-the-holy-mass--flagship-curriculum): 24 theme topics plus 41 part-of-the-Mass topics.

### 4.9 Mary
*Learn › Mary and the Saints. Sources: C, D (Lumen Gentium ch. 8, dogmatic definitions), S, F.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `who-is-mary` | Who is Mary? | Blessed Virgin Mary | B | P1 | `why-honor-mary` | |
| `why-honor-mary` | Do Catholics worship Mary? | Marian devotion, hyperdulia | B | P1 | `praying-to-saints` | D: Protestantism |
| `mother-of-god` | Why is Mary called the Mother of God? | Theotokos, Council of Ephesus | I | P1 | `divinity-of-jesus` | D: Protestantism |
| `immaculate-conception` | What is the Immaculate Conception? | | I | P1 | `original-sin` | D: Protestantism, Eastern Orthodoxy |
| `perpetual-virginity` | Was Mary always a virgin? | Brothers of Jesus | I | P2 | `virgin-birth` | D: Protestantism |
| `assumption` | What is the Assumption? | Dormition | I | P2 | `immaculate-conception` | D: Protestantism |
| `mary-in-scripture` | Where is Mary in the Bible? | | B | P2 | `who-is-mary` | |
| `marian-apparitions` | What are Marian apparitions like Fatima and Lourdes? | Private revelation | B | P2 | `divine-revelation` | R (approval status of each) |
| `mary-the-new-eve` | Why is Mary called the New Eve? | Marian typology | A | P3 | `mary-in-scripture` | |
| `mary-our-mother` | Is Mary our mother too? | Spiritual motherhood, Mother of the Church | I | P3 | `who-is-mary` | |
| `marian-titles` | What do Mary's titles mean? | | B | P3 | `who-is-mary` | |

### 4.10 Saints and Angels
*Learn › Mary and the Saints. Sources: C, D, S, F, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-a-saint` | What is a saint? | | B | P1 | `communion-of-saints` | |
| `praying-to-saints` | Why do Catholics pray to saints? | Intercession of the saints | B | P1 | `communion-of-saints` | D: Protestantism |
| `communion-of-saints` | What is the communion of saints? | | B | P2 | `praying-for-the-dead` | |
| `how-saints-are-made` | How does someone become a saint? | Canonization, beatification | B | P2 | `what-is-a-saint` | |
| `patron-saints` | What are patron saints? | | B | P2 | `choosing-a-confirmation-saint` | |
| `relics` | What are relics? | | I | P2 | `what-is-a-saint` | D: Protestantism |
| `statues-and-images` | Do Catholics worship statues? | Icons, veneration, idolatry | B | P1 | `praying-to-saints` | D: Protestantism, Islam, Judaism |
| `angels` | Do angels exist? | | B | P2 | `guardian-angels` | |
| `guardian-angels` | Do I have a guardian angel? | | B | P2 | `angels` | |
| `is-the-devil-real` | Is the devil real? | Satan, fallen angels | B | P2 | `angels` | |
| `exorcism` | What does the Church teach about exorcism? | | I | P3 | `is-the-devil-real` | R |
| `saints-to-know-first` | Which saints should I get to know first? | | B | P3 | `what-is-a-saint` | |
| `st-joseph` | Who is St. Joseph? | Patron of the universal Church | B | P2 | `what-is-a-saint` | |
| `st-peter` | Who was St. Peter? | Simon Peter | B | P2 | `peter-the-rock`, `what-is-the-pope` | |
| `st-paul` | Who was St. Paul? | Apostle to the Gentiles | B | P2 | `faith-and-works` | |
| `st-francis-of-assisi` | Who was St. Francis of Assisi? | | B | P3 | `religious-orders` | |
| `st-michael` | Who is St. Michael the Archangel? | Prayer to St. Michael | B | P3 | `angels`, `spiritual-warfare` | D: Jehovah's Witnesses (identify Michael with Jesus) |

### 4.11 Prayer and Spiritual Life
*Live › Prayer and Spiritual Life. Sources: C (Part Four), D, S, F, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-prayer` | What is prayer? | | B | P1 | `how-to-pray` | |
| `how-to-pray` | How do I start praying? | | B | P1 | `basic-catholic-prayers` | |
| `basic-catholic-prayers` | What prayers do Catholics know by heart? | Common prayers | B | P1 | `our-father`, `hail-mary` | Links to official texts; see D6 |
| `our-father` | What does the Our Father mean? | Lord's Prayer | B | P1 | `mass-lords-prayer` | |
| `hail-mary` | What does the Hail Mary mean? | Ave Maria | B | P1 | `the-rosary` | |
| `sign-of-the-cross` | Why do Catholics make the Sign of the Cross? | | B | P1 | `mass-sign-of-the-cross` | |
| `the-rosary` | How do I pray the Rosary? | Mysteries of the Rosary | B | P1 | `hail-mary` | Objection handled in `repetitive-prayer` |
| `kinds-of-prayer` | What kinds of prayer are there? | Vocal prayer, meditation, contemplation | I | P2 | `what-is-prayer` | |
| `liturgy-of-the-hours` | What is the Liturgy of the Hours? | Divine Office, breviary | I | P2 | `the-psalms` | |
| `daily-examen` | What is the daily examen? | Ignatian examen | B | P2 | `how-to-go-to-confession` | |
| `forgiveness` | How do I forgive someone who hurt me? | | B | P2 | `our-father`, `confession` | |
| `temptation` | How do I resist temptation? | Concupiscence, near occasion of sin | B | P2 | `what-is-sin`, `spiritual-warfare` | |
| `trusting-god` | How do I learn to trust God? | Abandonment to providence | B | P2 | `divine-providence` | |
| `spiritual-warfare` | What is spiritual warfare? | Ephesians 6, armor of God | I | P3 | `is-the-devil-real`, `temptation` | R (avoid sensationalism) |
| `scrupulosity` | What is scrupulosity, and where can I find help? | Scruples | I | P3 | `how-to-go-to-confession` | R; pastoral; points to a confessor and professional help |
| `stations-of-the-cross` | What are the Stations of the Cross? | Way of the Cross | B | P2 | `lent` | |
| `divine-mercy` | What is the Divine Mercy devotion? | Chaplet of Divine Mercy | B | P3 | | |
| `novenas` | What is a novena? | | B | P3 | | |
| `sacred-heart` | What is devotion to the Sacred Heart? | | B | P3 | | |
| `why-catholics-fast` | Why do Catholics fast? | Fasting, mortification | B | P2 | `fasting-and-abstinence` | |
| `virtues` | What are the virtues? | Theological virtues, cardinal virtues | I | P2 | `what-is-faith` | |
| `universal-call-to-holiness` | Is everyone called to be a saint? | Universal call to holiness | B | P2 | `what-is-a-saint` | |
| `dryness-in-prayer` | What if prayer feels empty? | Spiritual dryness, dark night | I | P3 | `how-to-pray` | |
| `spiritual-direction` | What is spiritual direction? | | I | P3 | `discernment` | |
| `discernment` | How do I discern God's will? | Discernment of spirits | I | P3 | `vocation` | |

### 4.12 Catholic Moral Theology
*Learn › Moral Life. Sources: C (Part Three), D (Veritatis Splendor, Evangelium Vitae, Humanae Vitae, CDF), S.* Many topics here are **R**: review before drafting.

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `how-catholics-decide-right-and-wrong` | How do Catholics decide what is right and wrong? | Moral theology, sources of morality | B | P1 | `conscience`, `natural-law` | |
| `conscience` | What is conscience? | Formation of conscience | B | P1 | `how-catholics-decide-right-and-wrong` | |
| `ten-commandments` | What are the Ten Commandments? | Decalogue | B | P1 | `what-is-sin` | |
| `beatitudes` | What are the Beatitudes? | | B | P2 | `what-jesus-taught` | |
| `what-is-sin` | What is sin? | | B | P1 | `mortal-and-venial-sin` | |
| `natural-law` | What is natural law? | | I | P2 | `morality-without-god` | |
| `seven-deadly-sins` | What are the seven deadly sins? | Capital sins | B | P2 | `virtues` | |
| `works-of-mercy` | What are the works of mercy? | Corporal and spiritual works of mercy | B | P2 | `what-is-catholic-social-teaching` | |
| `human-life-dignity` | Why does the Church defend every human life? | Sanctity of life | B | P1 | `abortion`, `euthanasia` | |
| `abortion` | What does the Church teach about abortion? | | I | P1 | `human-life-dignity` | R; pastoral tone required |
| `euthanasia` | What does the Church teach about euthanasia and end-of-life care? | Assisted suicide, palliative care | I | P2 | `last-rites` | R |
| `death-penalty` | What does the Church teach about the death penalty? | Capital punishment, CCC 2267 | I | P2 | `human-life-dignity` | R (2018 revision) |
| `just-war` | What does the Church teach about war? | Just war doctrine | A | P3 | `religion-and-violence` | |
| `sexuality` | What does the Church teach about sex and chastity? | Chastity, theology of the body | B | P1 | `male-and-female` | R |
| `contraception` | Why does the Church teach against contraception? | Humanae Vitae | I | P2 | `natural-family-planning` | D: Protestantism; R |
| `same-sex-attraction` | What does the Church teach about homosexuality? | | I | P2 | `sexuality` | R; pastoral tone required |
| `ivf-and-reproductive-technology` | What does the Church teach about IVF? | Donum Vitae, Dignitas Personae | A | P3 | `contraception` | R |
| `gender-identity` | What does the Church teach about gender identity? | | A | P3 | `male-and-female` | R |
| `is-lying-ever-okay` | Is it ever okay to lie? | Eighth Commandment | I | P3 | `ten-commandments` | |
| `moral-absolutes` | Are some acts always wrong? | Intrinsically evil acts | A | P3 | `natural-law` | |
| `catholics-and-politics` | Do Catholics have to agree on every political issue? | Prudential judgment, Faithful Citizenship | I | P2 | `faith-and-politics` | R |

### 4.13 Salvation and Eternal Life
*Learn › What Catholics Believe. Sources: C, D (Trent, Joint Declaration), S, F.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `how-are-we-saved` | How are we saved? | Salvation, justification | B | P1 | `faith-and-works` | |
| `what-is-grace` | What is grace? | Sanctifying grace, actual grace | I | P1 | `how-are-we-saved` | |
| `faith-and-works` | Are we saved by faith or by works? | Sola fide, justification | I | P1 | `how-are-we-saved` | D: Protestantism |
| `assurance-of-salvation` | Can I know I am saved? | Assurance, perseverance | I | P2 | `faith-and-works` | D: Protestantism |
| `what-happens-when-we-die` | What happens when we die? | Particular judgment | B | P1 | `heaven`, `purgatory` | |
| `heaven` | What is heaven? | Beatific vision | B | P1 | `what-happens-when-we-die` | |
| `hell` | Is hell real? | | B | P1 | `what-happens-when-we-die` | D: Jehovah's Witnesses; R |
| `purgatory` | What is purgatory? | Final purification | B | P1 | `praying-for-the-dead` | D: Protestantism, Eastern Orthodoxy |
| `last-judgment` | What is the Last Judgment? | General judgment | I | P2 | `second-coming` | |
| `resurrection-of-the-body` | Will our bodies rise again? | | B | P2 | `resurrection` | |
| `salvation-of-non-christians` | Can non-Christians be saved? | Extra Ecclesiam nulla salus, invincible ignorance | I | P1 | `do-all-religions-lead-to-god` | D: Hinduism, Buddhism, Sikhism, all; R |
| `indulgences` | What are indulgences? | | I | P2 | `purgatory`, `protestant-reformation` | D: Protestantism |
| `limbo` | What happens to babies who die without Baptism? | Limbo | A | P3 | `is-baptism-necessary` | Example of theological opinion; R |
| `end-times` | What does the Church teach about the end times? | Eschatology, rapture | I | P2 | `second-coming` | D: Protestantism (evangelical) |
| `praying-for-the-dead` | Why do Catholics pray for the dead? | | B | P2 | `purgatory` | |

### 4.14 Church History
*Learn › Church History. Sources: H, D, F, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `church-history-overview` | What are the big chapters of Church history? | | B | P1 | `early-church` | |
| `early-church` | What was the early Church like? | Apostolic age | B | P1 | `who-are-the-church-fathers` | D: Latter-day Saints, Jehovah's Witnesses (see `great-apostasy`) |
| `persecution-and-martyrs` | Why were early Christians persecuted? | Martyrs | B | P2 | `early-church` | |
| `constantine` | Did Constantine change Christianity? | Edict of Milan | I | P2 | `council-of-nicaea` | D: Protestantism, atheism |
| `council-of-nicaea` | What happened at the Council of Nicaea? | Arianism | I | P1 | `divinity-of-jesus` | |
| `council-of-ephesus` | What happened at the Council of Ephesus? | Theotokos, Nestorius, 431 | I | P2 | `mother-of-god` | |
| `council-of-chalcedon` | What happened at the Council of Chalcedon? | Two natures of Christ, 451 | I | P2 | `jesus-fully-human`, `chalcedon-and-oriental-orthodoxy` | |
| `early-heresies` | What were the early heresies? | Arianism, Gnosticism, Nestorianism | I | P2 | `ecumenical-councils` | |
| `monasteries-and-civilization` | How did monasteries shape Western civilization? | St. Benedict | I | P3 | `religious-orders` | |
| `great-schism` | Why did Catholics and Orthodox split? | East–West Schism, 1054 | I | P1 | `filioque` | D: Eastern Orthodoxy |
| `crusades` | What were the Crusades? |  | I | P2 | `religion-and-violence` | D: atheism, Islam |
| `inquisition` | What was the Inquisition? |  | I | P2 | `religious-freedom` | D: atheism, Protestantism |
| `galileo` | What really happened with Galileo? | | I | P2 | `faith-and-science` | D: atheism |
| `medieval-church` | What was the Church like in the Middle Ages? | Scholasticism, universities | I | P3 | `thomas-aquinas` | |
| `protestant-reformation` | What was the Protestant Reformation? | Reformation | B | P1 | `council-of-trent` | |
| `council-of-trent` | What was the Council of Trent? | Catholic Reformation | I | P2 | `protestant-reformation` | |
| `vatican-i` | What was the First Vatican Council? | Pastor Aeternus, Dei Filius, 1870 | I | P2 | `papal-infallibility`, `knowing-god-by-reason` | D: Eastern Orthodoxy, Protestantism |
| `formation-of-the-canon` | How was the list of books in the Bible decided? | Biblical canon, councils of Hippo and Carthage, Trent | I | P2 | `catholic-bible-books`, `septuagint` | D: Protestantism |
| `missions-and-global-church` | How did the faith spread around the world? | Missions | I | P3 | `evangelization` | R (colonial history) |
| `church-in-america` | How did the Catholic Church come to America? | | I | P3 | | |
| `modern-popes` | Who were the modern popes? | | I | P3 | `what-is-the-pope` | |
| `church-and-slavery` | What has the Church taught about slavery? | | I | P3 | `human-life-dignity` | R |
| `abuse-crisis` | How should we understand the clergy abuse crisis? | Sexual abuse, safeguarding | I | P2 | `why-stay-catholic` | D: all; R |
| `eastern-catholic-churches` | Who are the Eastern Catholic Churches? | Byzantine, Maronite, Chaldean | I | P2 | `latin-and-eastern-catholics` | |

### 4.15 Church Fathers and Doctors
*Learn › Church History. Sources: F, H, C, E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `who-are-the-church-fathers` | Who are the Church Fathers? | Patristics | B | P1 | `fathers-on-the-eucharist` | |
| `doctors-of-the-church` | What is a Doctor of the Church? | | B | P2 | `thomas-aquinas` | |
| `apostolic-fathers` | Who were the Apostolic Fathers? | Clement, Ignatius, Polycarp | I | P2 | `early-church` | |
| `didache` | What is the Didache? | Teaching of the Twelve Apostles | I | P3 | `apostolic-fathers` | |
| `justin-martyr` | Who was St. Justin Martyr? | First Apology | I | P2 | `mass-history` | |
| `irenaeus` | Who was St. Irenaeus? | Against Heresies | I | P3 | `apostolic-succession` | |
| `athanasius` | Who was St. Athanasius? | | I | P3 | `council-of-nicaea` | |
| `augustine` | Who was St. Augustine? | Confessions | B | P2 | `problem-of-evil` | |
| `jerome` | Who was St. Jerome? | Vulgate | I | P3 | `catholic-bible-books` | |
| `thomas-aquinas` | Who was St. Thomas Aquinas? | Summa Theologiae | B | P2 | `five-ways` | |
| `women-doctors-of-the-church` | Who are the women Doctors of the Church? | Teresa of Ávila, Catherine of Siena, Thérèse of Lisieux, Hildegard of Bingen | B | P3 | `doctors-of-the-church` | |
| `fathers-on-the-eucharist` | What did the early Christians believe about the Eucharist? | | I | P1 | `real-presence` | Supports D on `real-presence` |
| `fathers-on-the-papacy` | What did the early Church believe about Peter and Rome? | | A | P2 | `peter-the-rock` | Supports D; R |
| `where-to-start-with-the-fathers` | Where should I start reading the Church Fathers? | | B | P2 | `who-are-the-church-fathers` | |

### 4.16 Philosophy and Natural Theology
*Learn › Faith and Reason (new category). Sources: D (Vatican I Dei Filius, Fides et Ratio), F (Aquinas), H, E, O (SEP).*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `does-god-exist` | Does God exist? | Theism | B | P1 | `five-ways`, `problem-of-evil` | D: atheism, agnosticism |
| `knowing-god-by-reason` | Can we know God by reason alone? | Natural theology | I | P2 | `does-god-exist` | |
| `five-ways` | What are Aquinas's five ways? | Cosmological argument | I | P2 | `thomas-aquinas` | |
| `cosmological-argument` | Did the universe have a beginning, and does it need a cause? | Kalam | I | P3 | `five-ways` | D: atheism |
| `design-argument` | Does the order of the universe point to a designer? | Fine-tuning, teleological argument | I | P2 | `faith-and-science` | D: atheism |
| `morality-without-god` | Can people be good without God? | Moral argument | I | P2 | `natural-law` | D: atheism |
| `faith-and-science` | Are faith and science in conflict? | | B | P1 | `galileo`, `creation-and-evolution` | D: atheism |
| `lemaitre-and-the-big-bang` | Did a Catholic priest propose the Big Bang? | Georges Lemaître | B | P3 | `faith-and-science` | |
| `miracles` | Are miracles possible? | | I | P2 | `miracles-of-jesus` | D: atheism |
| `is-there-objective-truth` | Is there objective truth? | Relativism | I | P2 | `faith-and-reason` | |
| `meaning-of-life` | What is the meaning of life? | Happiness, final end | B | P2 | `why-did-god-create-us` | |
| `mind-and-soul` | Is the mind more than the brain? | Hylomorphism | A | P3 | `human-soul` | |
| `problem-of-evil` ✓ | Why does God allow suffering? | Problem of evil, theodicy | B | P1 | `does-god-exist`, `divine-providence` | D: atheism, agnosticism; built |
| `hiddenness-of-god` | If God exists, why doesn't he make himself obvious? | Divine hiddenness | I | P2 | `does-god-exist` | D: agnosticism |
| `religious-experience` | Is religious experience evidence for God? | | A | P3 | `does-god-exist` | |
| `pascals-wager` | What is Pascal's wager? | | A | P3 | `does-god-exist` | |

### 4.17 Catholic Social Teaching
*Learn › Moral Life. Sources: D (Compendium of the Social Doctrine, social encyclicals, USCCB), C.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-is-catholic-social-teaching` | What is Catholic social teaching? | Social doctrine | B | P1 | `principles-of-social-teaching` | |
| `principles-of-social-teaching` | What are the principles of Catholic social teaching? | Common good, solidarity, subsidiarity | I | P2 | `what-is-catholic-social-teaching` | |
| `option-for-the-poor` | What is the preferential option for the poor? | | I | P2 | `works-of-mercy` | |
| `dignity-of-work` | What does the Church teach about work and workers? | Rerum Novarum, Laborem Exercens | I | P3 | `principles-of-social-teaching` | |
| `care-for-creation` | Should Catholics care for the environment? | Laudato Si', stewardship | B | P2 | `creation` | |
| `immigration` | What does the Church teach about immigration? | | I | P2 | `human-life-dignity` | R |
| `church-and-economics` | What does the Church teach about capitalism and socialism? | | A | P3 | `principles-of-social-teaching` | R |
| `faith-and-politics` | How should Catholics approach politics? | Faithful Citizenship | I | P2 | `catholics-and-politics` | R |
| `religious-freedom` | Does the Church support religious freedom? | Dignitatis Humanae | I | P2 | `inquisition` | |
| `family-and-society` | Why is the family the basic cell of society? | Domestic church | I | P3 | `catholic-home` | |
| `racism` | What does the Church teach about racism? | | I | P3 | `human-life-dignity` | |

### 4.18 Liturgical Life
*Live › The Church Year (new category). Sources: L (calendar, Roman Missal), C, D (USCCB calendar).*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `liturgical-year` | What is the liturgical year? | Church calendar | B | P1 | `liturgical-colors` | |
| `liturgical-colors` | What do the colors at Mass mean? | Vestment colors | B | P2 | `vestments` | |
| `advent` | What is Advent? | | B | P1 | `christmas-season` | |
| `christmas-season` | How do Catholics celebrate Christmas? |  | B | P2 | `advent` | Pagan-origins claim handled in `is-catholicism-pagan` |
| `lent` | What is Lent? | | B | P1 | `ash-wednesday` | |
| `ash-wednesday` | Why do Catholics receive ashes? | | B | P1 | `lent` | |
| `holy-week` | What is Holy Week? | Paschal Triduum | B | P1 | `easter-vigil` | |
| `easter-vigil` | What happens at the Easter Vigil? | | B | P1 | `how-to-become-catholic` | |
| `easter-season` | What is the Easter season? | Eastertide | B | P2 | `pentecost` | |
| `pentecost` | What is Pentecost? | | B | P2 | `who-is-the-holy-spirit` | |
| `ordinary-time` | What is Ordinary Time? | | B | P2 | `liturgical-year` | |
| `holy-days-of-obligation` | What are holy days of obligation? | | B | P1 | `why-go-to-mass-on-sunday` | U.S. calendar |
| `feasts-and-solemnities` | What are feasts, memorials, and solemnities? | Ranks of celebration | I | P3 | `liturgical-year` | |
| `catholic-funerals` | What happens at a Catholic funeral? | Order of Christian Funerals | B | P2 | `praying-for-the-dead` | |
| `other-catholic-liturgies` | What other liturgies do Catholics celebrate? | Blessings, Liturgy of the Hours, Benediction | I | P3 | `liturgy-of-the-hours` | |

### 4.19 OCIA and Becoming Catholic
*Live › Becoming Catholic. Sources: L (Order of Christian Initiation of Adults), C, K, D (USCCB), E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `how-to-become-catholic` ✓ | How do I become Catholic? | OCIA, RCIA | B | P1 | `what-is-ocia` | Built |
| `what-is-ocia` | What is OCIA? | RCIA, Order of Christian Initiation of Adults | B | P1 | `stages-of-ocia` | |
| `stages-of-ocia` | What are the stages of OCIA? | Precatechumenate, catechumenate, purification, mystagogy | B | P1 | `rite-of-acceptance` | |
| `catechumen-or-candidate` | What's the difference between a catechumen and a candidate? | | B | P1 | `already-baptized` | |
| `already-baptized` | I'm already a baptized Christian. What changes for me? | Reception into full communion | B | P1 | `catechumen-or-candidate` | |
| `ocia-sponsor` | What does an OCIA sponsor do? | | B | P2 | `godparents` | |
| `choosing-a-confirmation-saint` | How do I choose a Confirmation saint? | Confirmation name | B | P2 | `patron-saints` | |
| `rite-of-acceptance` | What happens at the Rite of Acceptance? | Rite of Welcoming | B | P2 | `stages-of-ocia` | |
| `rite-of-election` | What is the Rite of Election? | | B | P2 | `lent` | |
| `scrutinies` | What are the Scrutinies? | | B | P2 | `lent` | |
| `confession-before-becoming-catholic` | Do I go to Confession before becoming Catholic? | | B | P2 | `how-to-go-to-confession` | |
| `married-before-ocia` | What if I've been married before? | Annulment, OCIA and marriage | I | P1 | `annulment` | R; common barrier |
| `after-becoming-catholic` | What happens after I become Catholic? | Mystagogy | B | P2 | `stages-of-ocia` | |
| `telling-family` | How do I talk to my family about becoming Catholic? | | B | P3 | | Pastoral reflection |
| `finding-a-parish` | How do I find a parish? | | B | P1 | `dioceses-and-parishes` | |
| `returning-to-the-church` | I was raised Catholic but stopped practicing. How do I come back? | Returning Catholics | B | P1 | `how-to-go-to-confession` | |
| `catholic-but-not-confirmed` | I'm Catholic but was never confirmed. What do I do? | | B | P2 | `confirmation` | |

### 4.20 Everyday Catholic Life, Marriage, and Vocation (new)
*Live › Catholic Life (new category). Sources: C, K, D (USCCB), E.*

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `catholic-daily-life` | What does a Catholic's daily life look like? | | B | P2 | `how-to-pray` | |
| `precepts-of-the-church` | What are the precepts of the Church? | Commandments of the Church | B | P2 | `why-go-to-mass-on-sunday` | |
| `fasting-and-abstinence` | What are the rules for fasting and abstinence? | Friday abstinence | B | P1 | `lent` | U.S. norms |
| `catholic-home` | How do Catholics pray at home? | Domestic church | B | P3 | `family-and-society` | |
| `vocation` | What is a vocation? | | B | P2 | `discernment` | |
| `becoming-a-priest` | How does someone become a priest? | Seminary | B | P3 | `holy-orders` | |
| `religious-life-vocation` | How does someone become a nun, sister, or brother? | | B | P3 | `religious-orders` | |
| `catholic-marriage-preparation` | How do Catholics prepare for marriage? | Pre-Cana | B | P2 | `marriage-sacrament` | |
| `natural-family-planning` | What is natural family planning? | NFP | I | P3 | `contraception` | R |
| `passing-on-the-faith` | How do I pass on the faith to my children? | | B | P3 | `catholic-home` | |
| `supporting-the-church` | Should Catholics tithe? | Stewardship | B | P3 | `precepts-of-the-church` | |
| `sharing-your-faith` | How do I share my faith? | Evangelization | B | P2 | `evangelization` | |
| `evangelization` | Why does the Church evangelize? | Mission | I | P3 | `sharing-your-faith` | |
| `grief-and-faith` | How does the faith help with grief? | Consolation | B | P3 | `catholic-funerals` | Pastoral reflection |
| `returning-after-mortal-sin` | I've committed a mortal sin. Can I still go to Mass? | | B | P1 | `how-to-go-to-confession`, `mortal-and-venial-sin` | R; pastoral |
| `doubts-about-faith` | Is it wrong to have doubts about my faith? | Doubt and unbelief | B | P2 | `what-is-faith`, `faith-and-reason` | |
| `cremation` | Can Catholics be cremated? | Ad resurgendum cum Christo | B | P2 | `catholic-funerals`, `resurrection-of-the-body` | |
| `single-life` | Is the single life a vocation? | | I | P3 | `vocation` | |

### 4.21 Comparative Religion and 4.22 Apologetics

See [§6](#6-comparative-religion-curriculum) (31 tradition entries and 6 comparison questions) and [§7](#7-apologetics-curriculum) (debate sections and 27 apologetics-only questions).

---

## 5. The Holy Mass — flagship curriculum

### 5.1 Scope

- **Rite:** the Mass of the Roman Rite (Ordinary Form) as celebrated in the United States, with the third edition of the Roman Missal. Variations are noted, never hidden.
- **Two kinds of topics:** 24 **theme topics** (meaning, history, etiquette, objections) and 41 **part topics**, one for each part of the Mass a visitor would notice.
- **Shape for teaching** (CCC 1346; GIRM 28): Introductory Rites → Liturgy of the Word → Liturgy of the Eucharist → Concluding Rites. The Emmaus story (Luke 24:13–35) is a recurring thread: Word, then the breaking of bread, then mission.

### 5.2 What every part topic contains

Each part topic follows the existing topic page, filling these fields (the first three in the short answer, the rest in "Learn more" and "What the Church teaches"):

1. What happens
2. Why it happens
3. What it means
4. What the priest (or deacon, or lector) does
5. What the congregation does
6. What the congregation says: described in original words, with a link to the official text (see [§5.8](#58-official-texts-and-copyright))
7. Posture and gesture
8. Biblical foundations
9. Official Church teaching (GIRM, CCC, and documents)
10. Recommended resources
11. Variations (season, deacon present, sung or said, and so on)

### 5.3 Theme topics

| Slug | Question | Also called | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|---|
| `what-happens-at-mass` ✓ | What happens during Mass? | Order of Mass | B | P1 | `first-time-at-mass` | Built; the hub: lists every built part in order (“The Mass, step by step”), and each part links to the previous and next part |
| `first-time-at-mass` ✓ | I'm going to Mass for the first time. What should I know? | Visitor's guide | B | P1 | `mass-etiquette`, `non-catholics-at-mass` | Acceptance-criteria journey |
| `why-go-to-mass-on-sunday` ✓ | Why do Catholics go to Mass every Sunday? | Sunday obligation, Lord's Day | B | P1 | `holy-days-of-obligation` |  |
| `mass-in-scripture` ✓ | Where is the Mass in the Bible? | Last Supper, Passover, Malachi 1:11 | I | P1 | `mass-as-sacrifice` | D: Protestantism |
| `mass-history` | How has the Mass developed over time? | Justin Martyr, Tridentine Mass, Vatican II reform | I | P2 | `justin-martyr`, `latin-mass` | |
| `mass-etiquette` ✓ | What should I wear and how should I act at Mass? | Church etiquette | B | P1 | `first-time-at-mass` |  |
| `mass-postures` ✓ | When do I stand, sit, and kneel? | Postures | B | P1 | `mass-gestures` | Uses the posture table in §5.6 |
| `mass-gestures` ✓ | What do bows, genuflections, and signs of the cross mean? | Genuflection, profound bow | B | P1 | `mass-genuflection` |  |
| `mass-responses` ✓ | What does the congregation say at Mass? | People's parts, responses | B | P1 | `mass-postures` | Links to official texts |
| `non-catholics-at-mass` ✓ | Can non-Catholics attend Mass? |  | B | P1 | `who-can-receive-communion` |  |
| `how-to-receive-communion` ✓ | How do I receive Communion? | On the tongue, in the hand, under both kinds | B | P1 | `who-can-receive-communion` |  |
| `eucharistic-fast` | Why do Catholics fast before Communion? | One-hour fast | B | P2 | `how-to-receive-communion` | |
| `who-does-what-at-mass` | Who's who at Mass? | Priest, deacon, lector, cantor, servers | B | P2 | `vestments` | |
| `vestments` | What do the priest's vestments mean? | Alb, stole, chasuble, dalmatic | B | P2 | `liturgical-colors` | |
| `sacred-objects` | What are the objects used at Mass? | Chalice, paten, ciborium, altar, ambo | B | P2 | `church-building` | |
| `church-building` | What are the parts of a Catholic church? | Sanctuary, nave, tabernacle, sanctuary lamp | B | P2 | `mass-genuflection` | |
| `eucharistic-prayers` | Why are there different Eucharistic Prayers? | Anaphora | I | P3 | `mass-eucharistic-prayer` | |
| `music-at-mass` | Why is music part of the Mass? | Chant, hymns | I | P3 | `mass-entrance` | |
| `latin-mass` | What is the Latin Mass? | Traditional Latin Mass, usus antiquior | I | P2 | `mass-history`, `vatican-ii` | R (current norms; tone) |
| `eastern-liturgies` | How is the Eastern Catholic Divine Liturgy different? | Byzantine Divine Liturgy | I | P3 | `eastern-catholic-churches` | |
| `weekday-mass` | What is different about a weekday Mass? | Daily Mass | I | P3 | `what-happens-at-mass` | |
| `ocia-at-mass` | How do OCIA participants take part in Mass? | Dismissal of catechumens | B | P2 | `stages-of-ocia` | |
| `children-at-mass` | How can I help children take part in Mass? | | B | P3 | `mass-etiquette` | |
| `mass-objections-overview` | What are common objections to the Mass? | | I | P2 | `mass-as-sacrifice`, `real-presence` | Index of the D topics |

### 5.4 Part topics

Columns: **People** = what the congregation does or says (short responses may be quoted; longer prayers are described and linked to the official text). **GIRM** numbers are all verified ([§5.7](#57-verified-liturgical-references)). **Scripture · CCC** come from the original Mass curriculum and are re-checked when each topic is written; ✔ marks references re-checked and corrected in Batch 3.

#### Before Mass

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-arriving` ✓ | Arriving and preparing | Arrive early, silence, the one-hour fast | — | 45 | 1 Cor 11:27–29; CCC 1385, 1387; CIC 919 ✔ | P1 |
| `mass-holy-water` ✓ | Holy water and the Sign of the Cross | Bless oneself (optional for visitors) | — | — | Rom 6:3–4; CCC 1185, 1667–1670 ✔ | P1 |
| `mass-genuflection` ✓ | Genuflecting toward the tabernacle | Genuflect, or bow | Genuflect | 274, 314–316 | Phil 2:10; CCC 1378–1379 ✔ | P1 |
| `mass-quiet-prayer` ✓ | Finding a seat and praying | Kneel or sit in prayer | Kneel or sit | 45 | Hab 2:20; CCC 1185 ✔ | P1 |

#### Introductory Rites (GIRM 46)

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-entrance` ✓ | Entrance procession and chant | Sing | Stand | 47–48 | Ps 122; CCC 1156–1158, 1348 ✔ | P1 |
| `mass-reverence-to-the-altar` ✓ | Reverence to the altar | Watch | Stand | 49, 123, 273–276, 298 | Ps 43:3–4; Ps 141:2; Rev 8:3–4; Heb 13:10; CCC 1182, 1383 ✔ | P1 |
| `mass-sign-of-the-cross` ✓ | Sign of the Cross | Sign oneself; Amen | Stand | 50 | Mt 28:19; CCC 1235, 2157 ✔ | P1 |
| `mass-greeting` ✓ | Greeting | Respond to the priest | Stand | 50 | 2 Cor 13:13; Gal 6:18; 2 Tm 4:22; Ruth 2:4 ✔ | P1 |
| `mass-penitential-act` ✓ | Penitential Act (or Sprinkling Rite) | Confess together; strike the breast; Amen | Stand | 51 | Lk 18:9–14; Jas 5:16; CCC 1393–1395 ✔ | P1 |
| `mass-kyrie` ✓ | Kyrie (Lord, have mercy) | Kyrie, eleison / Christe, eleison | Stand | 52 | Mt 20:29–34 ✔ | P1 |
| `mass-gloria` ✓ | Gloria | Sing or say the hymn | Stand | 53 | Lk 2:13–14; CCC 2639–2643 ✔ | P1 |
| `mass-collect` ✓ | Collect (Opening Prayer) | Silent prayer; Amen | Stand, then sit | 54 | CCC 2664 ✔ | P1 |

#### Liturgy of the Word (GIRM 55–71)

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-first-reading` ✓ | First Reading | Listen; short response | Sit | 56–59, 309 | Neh 8:1–8; CCC 1088, 1100–1102, 1349 ✔ | P1 |
| `mass-responsorial-psalm` ✓ | Responsorial Psalm | Repeat the refrain | Sit | 61 | Col 3:16; CCC 2585–2589 ✔ | P1 |
| `mass-second-reading` ✓ | Second Reading | Listen; short response | Sit | 57–59 | 1 Thes 5:27; Col 4:16; CCC 1349 ✔ | P1 |
| `mass-gospel-acclamation` ✓ | Gospel Acclamation (Alleluia; Lenten acclamation) | Sing Alleluia (Lenten acclamation in Lent) | Stand | 62–64, 132, 175 | Rev 19:1–6 ✔ | P1 |
| `mass-gospel` ✓ | The Gospel | Respond; trace three small crosses | Stand | 60, 132–134 | Lk 4:16–21; CCC 1088, 1154 ✔ | P1 |
| `mass-homily` ✓ | Homily | Listen | Sit | 65–66 | Neh 8:8; Lk 24:27; CCC 1349; NSCIA Norm 10 ✔ | P1 |
| `mass-creed` ✓ | Profession of Faith (Creed) | Profess the Creed; bow at the Incarnation | Stand | 67–68, 137 | Rom 10:9–10; CCC 167, 185–197 ✔ | P1 |
| `mass-universal-prayer` ✓ | Universal Prayer (Prayer of the Faithful) | Respond to each intention | Stand | 69–71, 138 | 1 Tim 2:1–4; CCC 1349, 2636 ✔ | P1 |

#### Liturgy of the Eucharist (GIRM 72–79)

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-preparation-of-the-gifts` ✓ | Preparation of the altar and gifts (and the collection) | Offer; sing; respond if prayers are said aloud | Sit | 73–76, 140–145 | Mal 1:11; 2 Cor 9:7; Ps 141:2; CCC 1350–1351 ✔ | P1 |
| `mass-prayer-over-the-offerings` ✓ | Invitation to prayer and Prayer over the Offerings | Stand and respond; Amen | Stand | 77, 146 | Rom 12:1; CCC 1368; SC 48 ✔ | P1 |
| `mass-preface-dialogue` ✓ | Preface Dialogue | Three responses | Stand | 78, 148 | Lam 3:41; CCC 1352 ✔ | P1 |
| `mass-preface` ✓ | Preface | Listen | Stand | 79a, 148, 364–365 | 1 Thes 5:16–18; Rev 4:8–11; CCC 1352 ✔ | P1 |
| `mass-sanctus` ✓ | Holy, Holy, Holy (Sanctus) | Sing or say | Stand, then kneel | 79b, 43 | Is 6:1–3; Rev 4:8; Mt 21:9; CCC 1352 ✔ | P1 |
| `mass-eucharistic-prayer` ✓ | The Eucharistic Prayer as a whole | Pray silently with the priest | Kneel | 78–79 | 1 Cor 11:23–26; Heb 10:10–14; CCC 1105–1106, 1352–1355, 1362–1372 ✔ | P1 |
| `mass-epiclesis` ✓ | Calling down the Holy Spirit (Epiclesis) | Pray silently | Kneel | 79c, 150, 43 | Lk 1:35; Rom 15:16; 1 Cor 12:13; CCC 1105–1106, 1353 ✔ | P1 |
| `mass-consecration` ✓ | Institution narrative and Consecration | Adore in silence; look at the elevated Host and chalice | Kneel | 79d, 150 | Mt 26:26–28; Lk 22:19–20; 1 Cor 11:23–26; Jn 6:51–58; CCC 1353, 1366–1367, 1373–1377 ✔ | P1 (R) |
| `mass-mystery-of-faith` ✓ | Mystery of Faith | Sing or say an acclamation | Kneel | 151 | 1 Cor 11:26; CCC 1362–1364 ✔ | P1 |
| `mass-intercessions` ✓ | Remembering, offering, interceding | Pray silently | Kneel | 79e–g, 365, 43 | Lk 22:19; Rom 12:1; Heb 12:1; 2 Mc 12:43–46; CCC 1032, 1354, 1362–1364, 1368–1371 ✔ | P1 |
| `mass-great-amen` ✓ | Final Doxology and Great Amen | Amen | Kneel, then stand | 79h, 151 | Rom 11:36; 2 Cor 1:20; CCC 1355 ✔ | P1 |

#### Communion Rite (GIRM 80–89)

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-lords-prayer` ✓ | The Lord's Prayer | Pray the Our Father; acclamation | Stand | 81, 152–153 | Mt 6:9–13; CCC 2770, 2855 ✔ | P1 |
| `mass-sign-of-peace` ✓ | Sign of Peace | Respond; offer a sign of peace to neighbors | Stand | 82, 154, 181 | Jn 14:27; Mt 5:23–24; CCC 1396–1398 ✔ | P1 |
| `mass-lamb-of-god` ✓ | Breaking of the Bread and Lamb of God | Sing or say | Stand, then kneel | 83, 155, 43 | Jn 1:29; 1 Cor 10:16–17; Rev 5:6–14; CCC 1329 ✔ | P1 |
| `mass-invitation-to-communion` ✓ | Invitation to Communion | Respond; strike the breast (custom) | Kneel | 84, 157 | Mt 8:5–13; Jn 1:29; Rev 19:9; CCC 1386 ✔ | P1 |
| `mass-communion` ✓ | Holy Communion | Procession; bow; receive; Amen — or remain in prayer | Procession | 85–87, 160–162, 281–287 | Jn 6:51–58; 1 Cor 10:16–17; 1 Cor 11:27–29; CCC 1382–1405; CIC 912–921 (on `how-to-receive-communion`) ✔ | P1 (R) |
| `mass-thanksgiving-after-communion` ✓ | Silence or song of thanksgiving | Pray | Kneel or sit | 43, 45, 88, 163–164, 279 | Ps 116:12–14; Jn 6:56–57; CCC 1377, 1391–1397 ✔ | P1 |
| `mass-prayer-after-communion` ✓ | Prayer after Communion | Amen | Stand | 43, 89, 165–166 | Jn 6:54; CCC 1402–1405 ✔ | P1 |

#### Concluding Rites (GIRM 90)

| Slug | Part | People | Posture | GIRM | Scripture · CCC (re-check) | Pri |
|---|---|---|---|---|---|---|
| `mass-final-blessing` ✓ | Announcements, greeting, and blessing | Respond; sign oneself; Amen | Stand | 90, 166–167 | Num 6:22–27; Lk 24:50–53; CCC 1671 ✔ | P1 |
| `mass-dismissal` ✓ | Dismissal | Respond | Stand | 90c, 168 | Mt 28:19–20; Lk 24:50–53; CCC 1332; Sacramentum Caritatis 51 ✔ | P1 |
| `mass-recessional` ✓ | Veneration of the altar, recessional, and after Mass | Sing; quiet prayer; genuflect on leaving | Stand | 90d, 169, 186, 274 | Lk 24:50–53; Ps 84:2–5; CCC 1332, 1418; CIC 909 ✔ | P1 |

**Count:** 4 before Mass + 8 introductory + 8 Word + 11 Eucharist + 7 Communion + 3 concluding = **41 part topics**. The Sprinkling Rite is covered inside `mass-penitential-act` and stays searchable through "Also called."

### 5.5 Eucharistic theology and objections

Eucharistic theology is taught once, in the Sacraments subject (`what-is-the-eucharist`, `real-presence`, `mass-as-sacrifice`, `who-can-receive-communion`, `eucharistic-adoration`, `fathers-on-the-eucharist`) and linked from the Mass parts. Mass objections are debate sections on existing topics, gathered by `mass-objections-overview`:

| Objection | Topic | Perspectives |
|---|---|---|
| "The Mass re-sacrifices Christ" | `mass-as-sacrifice` | Reformed, Baptist, evangelical; Lutheran and Anglican views differ |
| "Communion is only a symbol" | `real-presence` | Baptist, evangelical (memorial view); Lutheran and Orthodox views differ and are not symbolic |
| "The Mass isn't in the Bible" | `mass-in-scripture` | Protestant |
| "Why can't non-Catholics receive?" | `who-can-receive-communion` | Protestant; note Orthodox norms (CIC 844 §3) |
| "Repetitive prayers are vain repetition" | `repetitive-prayer` | Protestant (Matthew 6:7) |
| "Catholic worship borrows from paganism" | `is-catholicism-pagan` | Various critics |

Variations among traditions must be stated precisely (for example, Lutheran and Orthodox Christians affirm Christ's real presence in different terms). That is a review point (R).

### 5.6 Postures (U.S.)

From GIRM 43 with the U.S. adaptations (verified). Those unable to kneel may sit or stand.

| From | Until | Posture |
|---|---|---|
| Entrance | End of the Collect | Stand |
| First Reading | Second Reading | Sit |
| Gospel Acclamation | End of the Gospel | Stand |
| Homily | | Sit |
| Creed | End of the Universal Prayer | Stand |
| Preparation of the Gifts | | Sit |
| Invitation to prayer before the Prayer over the Offerings | Sanctus | Stand |
| After the Sanctus | Great Amen | Kneel |
| Lord's Prayer | Lamb of God | Stand |
| After the Lamb of God | Communion | Kneel (unless the diocesan bishop determines otherwise) |
| After Communion | | Kneel or sit (local custom) |
| Prayer after Communion | End of Mass | Stand |

### 5.7 Verified liturgical references

Every GIRM paragraph cited in §5 was checked against the official English text of the GIRM with the U.S. adaptations on vatican.va ([Appendix A](#appendix-a-verified-anchor-sources)). The numbers checked: 28, 29, 37, 43, 45–47, 49–63, 64–90 (all cited ones), 91, 95, 100, 128–138, 140–142, 145, 146, 148, 150–152, 154, 155, 157, 160–169, 175, 181, 274–276, 281–284, 286–288, 295, 309, 314–316, 335–341, 346, 347.

Remaining checks before the Mass topics are published:

1. **Translation:** the vatican.va GIRM is the 2003 English translation. The USCCB's 2011 translation is current in the U.S.; paragraph numbers match, but quoted wording must come from the current text (or be paraphrased).
2. **CCC, Scripture, and canon law references** in the part tables were carried over from the original curriculum. Each is re-read when its topic is written.
3. **Order of Mass paragraph numbers** (not used above) need the printed Missal.
4. Items flagged in the original curriculum: Redemptionis Sacramentum on the doxology; whether the renewal of baptismal promises replaces the Creed at all Easter Sunday Masses; the current OCIA edition and its paragraph numbers. (The dismissal of catechumens is now verified in the 2024 U.S. National Statutes for the Christian Initiation of Adults, Norm 10; the OCIA ritual paragraph numbers remain open.)
5. **Added in Batch 5:** GIRM 123, 148, 163–166, 169, 186, 273, 279, 298, 302, 304, 307–308, 364, and 365 were read in the vatican.va text. The priest's gesture at the epiclesis and the internal order of Eucharistic Prayers II–IV are described from secondary sources (see the content log) until the printed Missal is checked.
6. **Pastoral review by a priest or diocesan liturgy office:** `mass-consecration`, `mass-communion`, `who-can-receive-communion`, `non-catholics-at-mass`, `latin-mass`.

### 5.8 Official texts and copyright

- The people's parts (English translation of the Roman Missal) are copyrighted by ICEL; Lectionary texts by the USCCB and the Confraternity of Christian Doctrine.
- **Decision:** the app describes each response in original words and links to the USCCB's published texts. It never stores or reproduces the official translation. Very short liturgical words already common in public use (*Amen*, *Alleluia*, *Kyrie, eleison*) may appear.
- The USCCB's Order of Mass page (already in the registry) is the planned link; confirming which USCCB page holds the complete people's parts is the first task of the Mass batch.

### 5.9 Required, optional, and customary

Topics must say which kind each action is, so newcomers are never told a custom is a rule (or the reverse). **Required** = prescribed for the faithful in the GIRM (U.S. edition) or the Order of Mass; **Option** = a choice the liturgical books leave to the communicant, priest, or bishop; **Custom** = widespread practice not prescribed by the liturgical books.

| Action | Kind | Basis |
|---|---|---|
| Standing, sitting, and kneeling at the times in §5.6 | Required (U.S.) | GIRM 43† |
| Profound bow at the Incarnation in the Creed; genuflection instead at Christmas and the Annunciation | Required | GIRM 137† |
| Bowing the head before receiving Communion | Required (U.S.) | GIRM 160† |
| Receiving Communion standing | Required norm (U.S.); kneeling communicants are not to be refused | GIRM 160† |
| Kneeling after the Lamb of God | Required unless the diocesan bishop determines otherwise | GIRM 43† |
| A profound bow at the consecration for those who cannot kneel | Required in that case | GIRM 43† |
| Receiving on the tongue or in the hand | Option of the communicant | GIRM 160† |
| Kneeling or sitting during the silence after Communion | Option | GIRM 43† |
| Form of the sign of peace (handshake, bow) | Set by the bishops' conference; local custom; only to those nearest, soberly | GIRM 82† |
| Penitential Act form, Sprinkling Rite, incense, Eucharistic Prayer choice, Communion under both kinds | Options of the priest or pastor within the rubrics | GIRM 51†, 276†, 281–283† |
| Striking the breast during the Confiteor | Rubric of the Order of Mass (“And, striking their breast, they say”) | Verified in the ICEL 2010 text as published by the Bishops' Conference of England and Wales; the printed U.S. Missal itself not yet seen |
| Signing forehead, lips, and breast at the Gospel | Required of all (“which everyone else does as well”) | GIRM 134† |
| Genuflecting toward the tabernacle when entering or leaving the pew | Norm: all who pass before the Blessed Sacrament genuflect unless in procession; bowing to the altar when the tabernacle is elsewhere is custom | GIRM 274† |
| Holy water and the Sign of the Cross at the door | Devotional custom | — |
| Striking the breast at "Lord, I am not worthy" | Custom (no rubric for the people at that point in the Order of Mass) | — |
| Holding hands or raising hands during the Lord's Prayer | Custom (not in the liturgical books; some bishops discourage it) | — |
| Coming forward with arms crossed for a blessing | Custom in some places (not in the liturgical books) | — |
| Applause, dress, and arriving early | Custom and courtesy | — |

† Verified against the GIRM text ([§5.7](#57-verified-liturgical-references)). Items marked "verify" are checked against the printed Missal before the topic is published.

### 5.10 Common variations (taught as "you may also see")

From the original curriculum, kept: liturgical seasons (no Gloria in Advent and Lent; no Alleluia in Lent; Sprinkling Rite common in Easter Time); sung or said Mass; deacon present; incense; Penitential Act forms; Nicene or Apostles' Creed; the different Eucharistic Prayers; Communion under both kinds; local kneeling customs; Spanish and bilingual Masses; Children's Liturgy of the Word; OCIA rites and Scrutinies; Palm Sunday; genuflection in the Creed at Christmas and the Annunciation; Saturday evening vigil Masses; a bishop presiding.

---

## 6. Comparative religion curriculum

### 6.1 Approach

- **Tradition pages** (already built for five traditions) give a respectful overview, main differences, related questions, the tradition's own sources, and Catholic resources.
- **Debates live on topics,** not tradition pages, so one topic serves several traditions ([§7](#7-apologetics-curriculum)).
- **Agreement first.** Each page states what Catholics share with that tradition before the differences.
- **No single-voice summaries.** Where a tradition is internally diverse, the page says so and names the source it summarizes.

### 6.2 Tradition map

Primary sources are **named** here; their URLs are located and verified in the batch that writes the page. ✓ = page built; † = URL already verified.

| Tradition (slug) | Group | Pri | Shared with Catholics | Main differences | Linked debate topics | Primary sources to use | Key Catholic documents |
|---|---|---|---|---|---|---|---|
| Protestantism (`protestantism`) ✓ | Christian | P1 | Trinity, Christ, Scripture, Baptism | Authority, justification, sacraments, papacy, Mary and saints | `sola-scriptura`, `faith-and-works`, `real-presence`, `why-confess-to-a-priest`, `purgatory`, `praying-to-saints`, `why-honor-mary`, `papal-infallibility` | Westminster Confession†; Formula of Concord† | Unitatis Redintegratio†; Ut Unum Sint† |
| Baptist (`baptist`) | Christian | P2 | Trinity, Christ, Scripture | Believer's baptism, memorial view of the Lord's Supper, church polity | `infant-baptism`, `real-presence`, `sola-scriptura` | Baptist Faith and Message (2000) | Unitatis Redintegratio† |
| Lutheran (`lutheran`) | Christian | P2 | Liturgy, Baptism, real presence (in Lutheran terms) | Justification (much common ground since 1999), papacy, sacrifice of the Mass | `faith-and-works`, `mass-as-sacrifice` | Book of Concord† (Augsburg Confession, Formula of Concord) | Joint Declaration on the Doctrine of Justification (1999; URL to locate) |
| Reformed and Presbyterian (`reformed`) | Christian | P2 | Trinity, Christ, Scripture | Sola Scriptura, predestination, sacraments, Eucharist | `sola-scriptura`, `assurance-of-salvation` | Westminster Confession† | |
| Anglican (`anglican`) | Christian | P2 | Liturgy, creeds, episcopal structure | Papacy, validity of orders | `apostolic-succession`, `papal-infallibility` | Thirty-Nine Articles; Book of Common Prayer | |
| Methodist (`methodist`) | Christian | P3 | Trinity, sacraments (two), holiness | Sacraments, authority | `faith-and-works` | Articles of Religion | |
| Pentecostal (`pentecostal`) | Christian | P2 | Holy Spirit, Scripture, charismatic gifts (also present in Catholic charismatic renewal) | Baptism, sacraments, authority | `infant-baptism`, `who-is-the-holy-spirit` | Assemblies of God Statement of Fundamental Truths | |
| Evangelical and non-denominational (`evangelical`) | Christian | P1 | Christ, Scripture, conversion, mission | Church, sacraments, Tradition | `did-jesus-found-a-church`, `faith-and-works`, `end-times` | Lausanne Covenant; NAE Statement of Faith | |
| Eastern Orthodoxy (`eastern-orthodoxy`) | Christian | P1 | Sacraments, apostolic succession, Mary, liturgy, the Fathers | Papal primacy and infallibility, filioque, purgatory (as defined), Immaculate Conception | `peter-the-rock`, `papal-infallibility`, `filioque`, `great-schism`, `purgatory` | Divine Liturgy of St. John Chrysostom; statements of the Ecumenical Patriarchate | Orientalium Ecclesiarum†; Ut Unum Sint† |
| Oriental Orthodoxy (`oriental-orthodoxy`) | Christian | P2 | Nearly all doctrine; common Christological declarations | Council of Chalcedon terminology, papacy | `chalcedon-and-oriental-orthodoxy`, `peter-the-rock` | Common declarations (Paul VI–Shenouda III, 1973; John Paul II–Ignatius Zakka I, 1984) | |
| Assyrian Church of the East (`assyrian-church-of-the-east`) | Christian | P3 | Sacraments, apostolic succession | Ephesus terminology, papacy | `mother-of-god` | Common Christological Declaration (1994) | |
| Latter-day Saints (`latter-day-saints`) | Christian-identified | P1 | Jesus as Savior, family, moral life | Nature of God, Trinity, additional scripture, Great Apostasy, validity of baptism | `trinity-in-scripture`, `great-apostasy`, `book-of-mormon` | Book of Mormon; Articles of Faith (churchofjesuschrist.org) | CDF response on LDS baptism (2001; URL to locate) |
| Jehovah's Witnesses (`jehovahs-witnesses`) ✓ | Christian-identified | P1 | Scripture, moral life, God's name honored | Divinity of Christ, Trinity, soul, hell, authority | `divinity-of-jesus`, `trinity-in-scripture`, `hell`, `human-soul`, `who-goes-to-heaven` | jw.org† | |
| Seventh-day Adventism (`seventh-day-adventism`) | Christian | P3 | Trinity, Christ, Scripture | Sabbath, soul, end times | `why-go-to-mass-on-sunday`, `human-soul` | 28 Fundamental Beliefs | |
| Judaism (`judaism`) | Religion | P1 | The God of Abraham, the Hebrew Scriptures, the moral law, the Psalms | Jesus as Messiah and Son of God, the New Covenant | `jesus-the-messiah`, `prophecy-fulfilled`, `old-covenant` | Tanakh (Sefaria); Maimonides' Thirteen Principles | Nostra Aetate† 4; CCC 839–840 |
| Islam (`islam`) ✓ | Religion | P1 | One Creator God, Abraham, Jesus honored, Mary honored, judgment, prayer | Trinity, divinity of Christ, crucifixion, revelation | `divinity-of-jesus`, `was-jesus-crucified`, `trinity-in-scripture`, `muhammad-and-the-quran` | Qur'an† (Quran.com) | Nostra Aetate† 3; CCC 841 |
| Hinduism (`hinduism`) | Religion | P2 | Search for the divine, prayer, asceticism | Personal God and creation, reincarnation, salvation | `reincarnation`, `do-all-religions-lead-to-god`, `yoga-and-meditation` | Bhagavad Gita; Upanishads | Nostra Aetate† 2 |
| Buddhism (`buddhism`) | Religion | P2 | Compassion, detachment, contemplation | Personal God, the self, salvation | `reincarnation`, `do-all-religions-lead-to-god`, `yoga-and-meditation` | Dhammapada (Pali Canon) | Nostra Aetate† 2; Letter on Christian Meditation† |
| Sikhism (`sikhism`) | Religion | P3 | One God, prayer, service | Incarnation, revelation | `do-all-religions-lead-to-god` | Guru Granth Sahib | Nostra Aetate† |
| Other religions (`other-religions`) | Religion | P3 | (varies) | (varies) | `do-all-religions-lead-to-god` | Per tradition | Nostra Aetate† |
| Christian Science (`christian-science`) | Christian-identified | P3 | Healing through prayer, Scripture read devotionally | Nature of God and Christ, reality of matter, sin, and death; sacraments | `divinity-of-jesus`, `problem-of-evil`, `resurrection` | Mary Baker Eddy, *Science and Health with Key to the Scriptures* | Unitatis Redintegratio† |
| Unitarian Universalism (`unitarian-universalism`) | Religion | P3 | Search for truth, justice, conscience | Trinity, divinity of Christ, revelation, creeds | `what-is-the-trinity`, `divinity-of-jesus`, `do-all-religions-lead-to-god` | UUA Principles and Sources | |
| Taoism (`taoism`) | Religion | P3 | Harmony, simplicity, humility | Personal Creator God, revelation | `who-is-god`, `do-all-religions-lead-to-god` | *Tao Te Ching* | Nostra Aetate† 2 |
| Jainism (`jainism`) | Religion | P3 | Nonviolence, asceticism, moral discipline | Creator God, reincarnation and liberation | `reincarnation`, `do-all-religions-lead-to-god` | *Tattvārtha Sūtra* | Nostra Aetate† 2 |
| Baháʼí Faith (`bahai`) | Religion | P3 | One God, unity of humanity, prayer | Jesus as one Manifestation among many; later revelation | `divinity-of-jesus`, `do-all-religions-lead-to-god` | Baháʼu'lláh, *Kitáb-i-Íqán* | Nostra Aetate† |
| Zoroastrianism (`zoroastrianism`) | Religion | P3 | One supreme good God, moral struggle, judgment | Dualism, revelation, Christ | `who-is-god`, `is-catholicism-pagan` | The Avesta (the Gāthās) | Nostra Aetate† |
| Atheism (`atheism`) ✓ | Worldview | P1 | Commitment to reason, truth, and ethics | Existence of God | `does-god-exist`, `problem-of-evil`, `faith-and-science`, `morality-without-god`, `religion-and-violence` | SEP entries†; works by J. L. Mackie and others | Gaudium et Spes† 19–21; CCC 2123–2126 |
| Agnosticism (`agnosticism`) ✓ | Worldview | P1 | Honest questioning | Whether God can be known | `hiddenness-of-god`, `does-god-exist`, `problem-of-evil` | T. H. Huxley, "Agnosticism" (1889); SEP† | Gaudium et Spes†; Fides et Ratio† |
| Secular humanism (`secular-humanism`) | Worldview | P3 | Human dignity, ethics | Source of dignity and morality | `morality-without-god` | Humanist Manifesto III | |
| Spiritual but not religious (`spiritual-but-not-religious`) | Worldview | P2 | Desire for meaning and the transcendent | Need for Church, revelation | `did-jesus-found-a-church`, `do-all-religions-lead-to-god` | (sociological sources) | |
| Other worldviews (`other-worldviews`) | Worldview | P3 | (varies) | (varies) | | Per tradition | |

**Counts (reconciled).** The map has **31 tradition entries**: the 21 already in the app's registry, the 4 added in Phase 6 (Assyrian Church of the East, Seventh-day Adventism, secular humanism, spiritual but not religious), and the 6 added in Phase 7 (Christian Science, Unitarian Universalism, Taoism, Jainism, Baháʼí Faith, Zoroastrianism). Of these, **29 are planned pages**: the two placeholders (`other-religions`, `other-worldviews`) stay as list entries on the Apologetics page. **5 pages are built** (Protestantism, Jehovah's Witnesses, Islam, atheism, agnosticism). By priority: 9 P1, 9 P2, 13 P3. Only P1 and P2 pages are written before launch.

### 6.3 Comparison questions

Short "how do we compare" topics that pull from many pages:

| Slug | Question | Lvl | Pri | Related | Notes |
|---|---|---|---|---|---|
| `catholic-and-protestant-differences` | How are Catholics and Protestants different? | B | P1 | `sola-scriptura`, `faith-and-works` | Agreement first |
| `catholic-and-orthodox-differences` | How are Catholics and Orthodox different? | I | P1 | `great-schism` | |
| `catholics-and-jews` | What do Catholics and Jews share? | B | P2 | `jesus-the-messiah` | R |
| `catholics-and-muslims` | What do Catholics and Muslims share, and where do they differ? | B | P1 | `divinity-of-jesus` | R |
| `do-all-religions-lead-to-god` | Do all religions lead to God? | B | P1 | `salvation-of-non-christians` | D: Hinduism, Buddhism, Sikhism, all; R |
| `why-are-there-so-many-churches` | Why are there so many Christian churches? | B | P2 | `church-and-other-christians` | |

---

## 7. Apologetics curriculum

### 7.1 How it works

- A **debate section** is added to a topic that already exists in the inventory. **D** in §4–§6 marks 64 such topics; with the 27 apologetics-only questions below, **91** topics carry a debate section (generated count, [§12](#12-topic-counts-and-priorities)).
- Each debate section holds one or more **perspectives**, each with: tradition, a fair statement of the position, variations within the tradition, the strongest arguments with Catholic responses, and the tradition's own sources (see [§3.3](#33-authority-labels-unchanged-from-the-app) for labels).
- The **By question** list on the apologetics page shows every topic with a debate section; **By religion** pages list those with a perspective from that tradition.

### 7.2 Apologetics-only questions

Questions that belong to no other subject:

| Slug | Question | Also called | Lvl | Pri | Traditions | Notes |
|---|---|---|---|---|---|---|
| `call-no-man-father` | Why do Catholics call priests "Father"? | Matthew 23:9 | B | P2 | Protestantism | |
| `repetitive-prayer` | Isn't the Rosary vain repetition? | Matthew 6:7 | I | P3 | Protestantism | |
| `revelation-and-rome` | Does the Book of Revelation describe the Catholic Church? | | A | P3 | Protestantism | Tone review |
| `great-apostasy` | Did the Church fall away after the apostles? | Great Apostasy | I | P2 | Latter-day Saints, Jehovah's Witnesses | |
| `book-of-mormon` | Is the Book of Mormon scripture? | | I | P2 | Latter-day Saints | R |
| `who-goes-to-heaven` | Who goes to heaven? | 144,000 | I | P3 | Jehovah's Witnesses | |
| `chalcedon-and-oriental-orthodoxy` | Do Oriental Orthodox Christians believe Jesus is God and man? | Miaphysitism | A | P3 | Oriental Orthodoxy | Mostly agreement |
| `muhammad-and-the-quran` | How do Catholics view Muhammad and the Qur'an? | | I | P2 | Islam | R |
| `old-covenant` | Is God's covenant with Israel still valid? | | A | P3 | Judaism | R |
| `reincarnation` | Do Catholics believe in reincarnation? | | B | P2 | Hinduism, Buddhism | |
| `yoga-and-meditation` | Can Catholics practice yoga or Eastern meditation? | | I | P3 | Hinduism, Buddhism | R |
| `religion-and-violence` | Hasn't religion caused most wars? |  | I | P2 | atheism |  |
| `is-catholicism-pagan` | Did Catholicism borrow from paganism? | | I | P2 | Protestantism, atheism | |
| `why-stay-catholic` | Why stay Catholic despite scandals? |  | B | P2 | all | R; pastoral |
| `church-wealth` | Why is the Church so rich? |  | I | P3 | atheism, Protestantism |  |
| `praying-directly-to-god` | Why not just pray directly to God? | One mediator (1 Timothy 2:5) | B | P1 | Protestantism | |
| `once-saved-always-saved` | Once saved, always saved? | Eternal security, perseverance of the saints | I | P2 | Protestantism (Baptist, Reformed, evangelical) | |
| `predestination` | Does God predestine some people to heaven and others to hell? | Election, Calvinism | A | P2 | Protestantism (Reformed) | R |
| `primacy-and-supremacy` | Does the pope have primacy, universal jurisdiction, or both? | Papal supremacy, Pastor Aeternus | A | P2 | Eastern Orthodoxy | R |
| `essence-energies` | What is the essence–energies distinction? | Palamism, hesychasm | A | P3 | Eastern Orthodoxy | R |
| `orthodox-sacraments` | Does the Catholic Church recognize Orthodox sacraments? | Unitatis Redintegratio 15 | I | P2 | Eastern Orthodoxy | |
| `catholic-orthodox-reunion` | Will Catholics and Orthodox ever reunite? | Ecumenical dialogue | I | P2 | Eastern Orthodoxy | |
| `jewish-objections-to-jesus` | Why don't most Jews accept Jesus as the Messiah? | | I | P2 | Judaism | R |
| `isaiah-53` | Is Isaiah 53 about Jesus? | Suffering Servant | A | P2 | Judaism | R |
| `bible-corruption-claims` | Was the Bible corrupted? | Tahrif | I | P2 | Islam | |
| `jesus-in-the-quran` | How is Jesus in the Qur'an different from Jesus in the Gospels? | ʿĪsā | I | P2 | Islam | |
| `muhammad-in-the-bible` | Does the Bible foretell Muhammad? | Deuteronomy 18:18, the Paraclete | A | P3 | Islam | R |

That is 27 questions, all of which carry a debate section.

### 7.3 Debate-topic index by tradition

Generated from the **D** notes in the inventory (and the Traditions column of §7.2); this is what each tradition page will show. ✓ = built.

<!-- generated: debate-index -->

- **Protestantism** (44): `are-catholics-christians` ✓, `catholic-bible-books`, `septuagint`, `did-the-church-hide-the-bible`, `did-jesus-found-a-church`, `sola-scriptura` ✓, `peter-the-rock`, `papal-infallibility`, `apostolic-succession`, `sacraments-in-scripture`, `infant-baptism` ✓, `real-presence` ✓, `mass-as-sacrifice` ✓, `who-can-receive-communion` ✓, `why-confess-to-a-priest` ✓, `priestly-celibacy`, `women-and-the-priesthood`, `why-honor-mary`, `mother-of-god`, `immaculate-conception`, `perpetual-virginity`, `assumption`, `praying-to-saints`, `relics`, `statues-and-images`, `contraception`, `faith-and-works`, `assurance-of-salvation`, `purgatory`, `indulgences`, `end-times`, `constantine`, `inquisition`, `vatican-i`, `formation-of-the-canon`, `mass-in-scripture` ✓, `call-no-man-father`, `repetitive-prayer`, `revelation-and-rome`, `is-catholicism-pagan`, `church-wealth`, `praying-directly-to-god`, `once-saved-always-saved`, `predestination`
- **Eastern Orthodoxy** (11): `filioque`, `peter-the-rock`, `papal-infallibility`, `immaculate-conception`, `purgatory`, `great-schism`, `vatican-i`, `primacy-and-supremacy`, `essence-energies`, `orthodox-sacraments`, `catholic-orthodox-reunion`
- **Oriental Orthodoxy** (1): `chalcedon-and-oriental-orthodoxy`
- **Latter-day Saints** (4): `trinity-in-scripture`, `early-church`, `great-apostasy`, `book-of-mormon`
- **Jehovah's Witnesses** (9): `trinity-in-scripture`, `who-is-the-holy-spirit` ✓, `divinity-of-jesus` ✓, `human-soul`, `st-michael`, `hell`, `early-church`, `great-apostasy`, `who-goes-to-heaven`
- **Judaism** (7): `trinity-in-scripture`, `prophecy-fulfilled`, `septuagint`, `statues-and-images`, `old-covenant`, `jewish-objections-to-jesus`, `isaiah-53`
- **Islam** (10): `trinity-in-scripture`, `divinity-of-jesus` ✓, `resurrection` ✓, `was-jesus-crucified`, `statues-and-images`, `crusades`, `muhammad-and-the-quran`, `bible-corruption-claims`, `jesus-in-the-quran`, `muhammad-in-the-bible`
- **Hinduism** (4): `salvation-of-non-christians`, `do-all-religions-lead-to-god`, `reincarnation`, `yoga-and-meditation`
- **Buddhism** (4): `salvation-of-non-christians`, `do-all-religions-lead-to-god`, `reincarnation`, `yoga-and-meditation`
- **Sikhism** (2): `salvation-of-non-christians`, `do-all-religions-lead-to-god`
- **Atheism** (18): `did-jesus-exist` ✓, `resurrection` ✓, `creation-and-evolution`, `who-wrote-the-gospels`, `constantine`, `crusades`, `inquisition`, `galileo`, `does-god-exist`, `cosmological-argument`, `design-argument`, `morality-without-god`, `faith-and-science`, `miracles`, `problem-of-evil` ✓, `religion-and-violence`, `is-catholicism-pagan`, `church-wealth`
- **Agnosticism** (3): `does-god-exist`, `problem-of-evil` ✓, `hiddenness-of-god`
- **All traditions** (4): `salvation-of-non-christians`, `abuse-crisis`, `do-all-religions-lead-to-god`, `why-stay-catholic`

<!-- /generated -->

### 7.4 Dedicated curricula for the four largest dialogues

Each curriculum is an ordered reading plan built only from inventory topics, with the tradition's own sources and the Catholic documents that frame the dialogue. "Agreement first" pages come before disputes.

#### Protestant curriculum
- **Common ground:** `catholic-and-protestant-differences`, `are-catholics-christians`, `church-and-other-christians`, `why-are-there-so-many-churches`
- **Authority:** `sola-scriptura` ✓, `what-is-sacred-tradition`, `catholic-bible-books`, `formation-of-the-canon`, `septuagint`, `did-jesus-found-a-church`, `peter-the-rock` (including the biblical case for the papacy), `papal-infallibility`, `apostolic-succession`, `did-the-church-hide-the-bible`
- **Salvation:** `faith-and-works`, `assurance-of-salvation`, `once-saved-always-saved`, `predestination`, `purgatory`, `indulgences`, `end-times`
- **Sacraments and worship:** `sacraments-in-scripture`, `infant-baptism`, `real-presence` ✓, `mass-as-sacrifice`, `mass-in-scripture`, `who-can-receive-communion`, `why-confess-to-a-priest`, `repetitive-prayer`
- **Mary and the saints:** `why-honor-mary`, `mother-of-god`, `immaculate-conception`, `perpetual-virginity`, `assumption`, `praying-to-saints`, `praying-directly-to-god`, `statues-and-images`, `relics`
- **Practice and history:** `call-no-man-father`, `priestly-celibacy`, `women-and-the-priesthood`, `contraception`, `protestant-reformation`, `council-of-trent`, `constantine`, `is-catholicism-pagan`, `revelation-and-rome`
- **Internal diversity to state precisely:** Lutheran, Reformed, Anglican, Baptist, Methodist, Pentecostal, and evangelical views differ on baptism, the Eucharist, assurance, and predestination. Each perspective names its denomination and source (Westminster Confession†, Book of Concord†, and others in §6.2).
- **Catholic frame:** Unitatis Redintegratio†, Ut Unum Sint†, the Lutheran–Catholic Joint Declaration on the Doctrine of Justification (URL to locate).

#### Eastern Orthodox curriculum
- **Common ground:** `catholic-and-orthodox-differences`, `orthodox-sacraments`, `eastern-catholic-churches`
- **The papacy:** `peter-the-rock`, `fathers-on-the-papacy`, `primacy-and-supremacy`, `papal-infallibility`, `vatican-i`
- **Theology:** `filioque`, `essence-energies`, `immaculate-conception`, `purgatory`
- **History and unity:** `great-schism`, `council-of-ephesus`, `council-of-chalcedon`, `catholic-orthodox-reunion`, `married-priests`
- **Internal diversity:** autocephalous churches (Constantinople, Moscow, and others) differ in emphasis; the Oriental Orthodox and the Assyrian Church of the East are distinct communions with their own pages.
- **Catholic frame:** Unitatis Redintegratio† 14–18, Orientalium Ecclesiarum†, Ut Unum Sint†.

#### Jewish curriculum
- **Common ground:** `catholics-and-jews`, `biblical-covenants`, `the-temple`, `passover-and-the-eucharist`, `the-psalms`
- **Jesus and the Messiah:** `jesus-the-messiah`, `jewish-objections-to-jesus`, `prophecy-fulfilled`, `isaiah-53`, `trinity-in-scripture`
- **Covenant and Church:** `old-covenant`, `old-and-new-testament`, `septuagint`
- **Internal diversity:** Orthodox, Conservative, Reform, and other Jewish movements read Scripture and tradition differently; perspectives cite Jewish sources (Tanakh, Maimonides' Thirteen Principles, and others) and name the movement where it matters.
- **Catholic frame:** Nostra Aetate† 4; CCC 839–840. Tone review (R) for every topic: no supersessionist caricatures, and explicit rejection of antisemitism as the Church teaches.

#### Islamic curriculum
- **Common ground:** `catholics-and-muslims`, `who-is-god`
- **Jesus:** `divinity-of-jesus` ✓, `jesus-in-the-quran`, `was-jesus-crucified`, `resurrection`, `trinity-in-scripture`
- **Scripture and prophecy:** `bible-corruption-claims`, `muhammad-and-the-quran`, `muhammad-in-the-bible`, `who-wrote-the-gospels`, `bible-manuscripts`
- **Worship and history:** `statues-and-images`, `crusades`, `religion-and-violence`
- **Internal diversity:** Sunni, Shia, and other schools differ on interpretation; perspectives quote the Qur'an† and name the school when citing hadith or commentary.
- **Catholic frame:** Nostra Aetate† 3; CCC 841.

### 7.5 Apologetics standards

1. State the other view as its best advocates would, citing their own sources.
2. Give the strongest arguments, not the weakest.
3. Note internal diversity; never "all Protestants" or "Muslims believe" without a source.
4. Label every Catholic response ([§3.3](#33-authority-labels-unchanged-from-the-app)); most responses are apologetic arguments, not doctrine.
5. Agreement before disagreement; no mockery, sarcasm, or hostile adjectives.
6. Recommend at least one fair debate or dialogue where a good one exists, so readers can hear both sides in their own voices.

---

## 8. Learning pathways

Pathways are ordered lists of existing topic slugs. Each can later be a simple ordered list like today's Start here page; no new software is needed. Topics already built are marked ✓.

### 8.1 Completely new to Catholicism (12)
`what-do-catholics-believe` ✓ → `who-is-god` ✓ → `who-is-jesus` ✓ → `divinity-of-jesus` ✓ → `why-did-jesus-die` ✓ → `resurrection` ✓ → `what-is-the-church` ✓ → `what-is-the-bible` → `seven-sacraments` ✓ → `what-happens-at-mass` ✓ → `how-to-pray` → `how-to-become-catholic` ✓

### 8.2 OCIA participant (18)
`how-to-become-catholic` ✓ → `what-is-ocia` → `stages-of-ocia` → `catechumen-or-candidate` → `what-is-the-creed` ✓ → `what-is-the-trinity` ✓ → `what-is-sacred-tradition` ✓ → `sola-scriptura` ✓ → `seven-sacraments` ✓ → `baptism` ✓ → `confirmation` ✓ → `real-presence` ✓ → `how-to-go-to-confession` ✓ → `why-honor-mary` → `what-happens-when-we-die` → `ten-commandments` → `easter-vigil` → `after-becoming-catholic`

### 8.3 Attending a first Mass (10)
`first-time-at-mass` ✓ → `mass-etiquette` ✓ → `non-catholics-at-mass` ✓ → `what-happens-at-mass` ✓ → `mass-postures` ✓ → `mass-responses` ✓ → `mass-gestures` ✓ → `who-can-receive-communion` ✓ → `real-presence` ✓ → `why-go-to-mass-on-sunday` ✓

### 8.4 Practicing Catholic going deeper (14)
`what-is-dogma` ✓ → `divine-revelation` ✓ → `development-of-doctrine` → `what-is-grace` → `mass-as-sacrifice` ✓ → `mass-eucharistic-prayer` ✓ → `fathers-on-the-eucharist` → `kinds-of-prayer` → `liturgy-of-the-hours` → `virtues` → `natural-law` → `what-is-catholic-social-teaching` → `who-are-the-church-fathers` → `thomas-aquinas`

### 8.5 Exploring Catholic apologetics (12)
`does-god-exist` → `problem-of-evil` ✓ → `did-jesus-exist` ✓ → `resurrection` ✓ → `divinity-of-jesus` ✓ → `did-jesus-found-a-church` → `sola-scriptura` ✓ → `peter-the-rock` → `faith-and-works` → `real-presence` ✓ → `why-honor-mary` → `salvation-of-non-christians`

### 8.6 Comparing Catholicism with another tradition (template)
1. The tradition page (overview, agreement, differences)
2. The matching comparison question from [§6.3](#63-comparison-questions), if one exists
3. The tradition's debate topics in the order of its page ([§7.3](#73-debate-topic-index-by-tradition))
4. `salvation-of-non-christians` and `do-all-religions-lead-to-god`

Example, Islam: `islam` ✓ → `catholics-and-muslims` → `divinity-of-jesus` ✓ → `trinity-in-scripture` → `was-jesus-crucified` → `muhammad-and-the-quran` → `salvation-of-non-christians`.

---

## 9. Resource selection methodology

### 9.1 Tiers (as approved)

1. **Official Catholic teaching:** Catechism, councils, papal documents, Vatican dicasteries, the liturgical books, the Code of Canon Law, USCCB.
2. **Primary historical and theological sources:** Church Fathers and Doctors (New Advent and comparable editions), recognized theological works.
3. **Credible Catholic education and apologetics:** for example Catholic Answers, Ascension, Word on Fire, St. Paul Center, Thomistic Institute, Augustine Institute, FORMED, Reason and Theology, Shameless Popery, diocesan and university sources.
4. **Opposing primary sources and neutral scholarship:** each tradition's own confessions, scriptures, and official websites; the Stanford Encyclopedia of Philosophy and similar.

### 9.2 Per-topic selection rule

Each topic gets **at most five** recommended resources, chosen in this order:

1. The best **official** source for the claim (always, as a Church document or Catechism link).
2. The best **article** for a beginner.
3. The best **video** (or podcast) for a beginner.
4. One **deeper** resource (book, course, lecture), if genuinely better than the first three.
5. For debate topics: one **fair debate or dialogue**, plus the opposing tradition's sources inside the perspective.

### 9.3 Quality criteria

A resource is selected only if it is: **accurate** (consistent with Church teaching; claims sourced), **relevant** (answers this question, not a neighboring one), **accessible** (clear for the topic's level), **charitable** (fair to other traditions), **durable** (stable URL, reputable host), and **reachable** (works without an account where possible). Publisher reputation alone is not enough.

### 9.4 Free and paid resources

Free resources are preferred. Paid or subscription content (for example FORMED, many courses, some institute programs) is included only when clearly better than free options, and must be labeled. This needs a small runtime change (an access label on resources); see D4. Access terms change, so they are checked at selection time, never assumed from the publisher.

### 9.5 Sources to avoid

Anonymous sites; content farms; sites that reproduce copyrighted texts without permission; polemical sources that misrepresent other traditions (Catholic or otherwise); AI-generated summaries; Wikipedia as a cited source (useful for orientation only).

---

## 10. Content development and verification methodology

### 10.1 Workflow for each batch

1. **Plan:** confirm the batch's slugs, questions, and priority from this document.
2. **Research:** for each topic, read the relevant Catechism paragraphs and primary documents first; then Scripture; then Fathers and history; then Tier 3 and Tier 4 resources.
3. **Draft:** write the short answer (2–4 sentences, plain words), optional "Learn more" (3–5 short paragraphs), Church teaching references, resources, related topics, and debate perspectives where marked **D**.
4. **Label:** apply authority labels; mark anything uncertain **R**.
5. **Verify** (checklist below).
6. **Build:** add content to the registries; validation must pass.
7. **Review:** theological review of the batch; R items first.
8. **Publish:** only after review sign-off.

### 10.2 Verification checklist (every topic)

- [ ] Every Catechism number opened on the Vatican page it links to, and the paragraph says what the text claims.
- [ ] Every Scripture reference opened on the USCCB site; every quotation matches the NABRE word for word.
- [ ] Every Church document link opened; cited section numbers checked.
- [ ] Every Father or historical source opened; the claim matches the text.
- [ ] Every resource URL opened; title, author, and publisher confirmed; access (free or paid) confirmed.
- [ ] Every opposing position checked against that tradition's own source.
- [ ] No quotation from a copyrighted translation beyond a short phrase; official liturgical texts linked, not copied.
- [ ] Authority labels assigned conservatively; uncertain items flagged R.
- [ ] Reading level appropriate to the topic's Lvl; short answer understandable to a newcomer.
- [ ] Build passes content validation; search finds the topic by its question, also-called names, and keywords.

### 10.3 Theological review

- **Who:** a qualified reviewer (priest, theologian, or diocesan catechetical office) chosen by you (D2).
- **What:** every topic before publication; R topics (about 45) receive closer review and, where relevant, a second opinion (for example an OCIA director for OCIA topics, a liturgist for the Mass).
- **Record:** `docs/content-log.md` (approved): for every topic, the sources verified, open questions, and review status.
- **Honesty about status:** content is researched and drafted with AI assistance and verified against sources, but it has **not** received independent theological approval until a named reviewer signs it off in the log. Nothing in the app or the log may describe unreviewed content as approved.

---

## 11. Implementation batches

**Launch line (reconciled):** the launch consists of exactly the P1 topics, every one assigned to one batch. The table below is generated from the inventory and checked: the batches cover all P1 topics, each exactly once. P2 topics follow in a second wave, subject by subject, and P3 topics are not required for launch (approved).

Each batch follows the workflow in [§10](#10-content-development-and-verification-methodology). Debate sections for topics marked **D** are written in the apologetics batch for that tradition, even when the topic itself is written earlier, so each tradition's perspectives are researched together.

<!-- generated: batches -->

| Batch | Name | New | Built (reused) | Topics |
|---|---|---|---|---|
| 1 | Foundations launch | 0 | 21 | `what-do-catholics-believe` ✓, `what-does-catholic-mean` ✓, `are-catholics-christians` ✓, `what-is-the-creed` ✓, `what-is-faith` ✓, `divine-revelation` ✓, `what-is-the-catechism` ✓, `what-is-dogma` ✓, `who-is-god` ✓, `what-is-the-trinity` ✓, `who-is-the-holy-spirit` ✓, `who-is-jesus` ✓, `divinity-of-jesus` ✓, `did-jesus-exist` ✓, `incarnation` ✓, `why-did-jesus-die` ✓, `resurrection` ✓, `what-is-the-church` ✓, `what-is-sacred-tradition` ✓, `what-is-the-pope` ✓, `bishops-priests-deacons` ✓ |
| 2 | First Mass | 0 | 10 | `what-happens-at-mass` ✓, `first-time-at-mass` ✓, `why-go-to-mass-on-sunday` ✓, `mass-in-scripture` ✓, `mass-etiquette` ✓, `mass-postures` ✓, `mass-gestures` ✓, `mass-responses` ✓, `non-catholics-at-mass` ✓, `how-to-receive-communion` ✓ |
| 3 | Mass parts I (before Mass, Introductory Rites, Word) | 0 | 19 | `mass-arriving` ✓, `mass-holy-water` ✓, `mass-genuflection` ✓, `mass-quiet-prayer` ✓, `mass-entrance` ✓, `mass-sign-of-the-cross` ✓, `mass-greeting` ✓, `mass-penitential-act` ✓, `mass-kyrie` ✓, `mass-gloria` ✓, `mass-collect` ✓, `mass-first-reading` ✓, `mass-responsorial-psalm` ✓, `mass-second-reading` ✓, `mass-gospel-acclamation` ✓, `mass-gospel` ✓, `mass-homily` ✓, `mass-creed` ✓, `mass-universal-prayer` ✓ |
| 4 | Mass parts II (Eucharist, Communion, Concluding) | 0 | 15 | `mass-preparation-of-the-gifts` ✓, `mass-prayer-over-the-offerings` ✓, `mass-preface-dialogue` ✓, `mass-sanctus` ✓, `mass-eucharistic-prayer` ✓, `mass-consecration` ✓, `mass-mystery-of-faith` ✓, `mass-great-amen` ✓, `mass-lords-prayer` ✓, `mass-sign-of-peace` ✓, `mass-lamb-of-god` ✓, `mass-invitation-to-communion` ✓, `mass-communion` ✓, `mass-final-blessing` ✓, `mass-dismissal` ✓ |
| 5 | Sacraments and the remaining Mass parts | 0 | 21 | `what-is-a-sacrament` ✓, `seven-sacraments` ✓, `baptism` ✓, `infant-baptism` ✓, `confirmation` ✓, `what-is-the-eucharist` ✓, `real-presence` ✓, `mass-as-sacrifice` ✓, `who-can-receive-communion` ✓, `confession` ✓, `why-confess-to-a-priest` ✓, `how-to-go-to-confession` ✓, `mortal-and-venial-sin` ✓, `marriage-sacrament` ✓, `mass-reverence-to-the-altar` ✓, `mass-preface` ✓, `mass-epiclesis` ✓, `mass-intercessions` ✓, `mass-thanksgiving-after-communion` ✓, `mass-prayer-after-communion` ✓, `mass-recessional` ✓ |
| 6 | OCIA and returning Catholics | 8 | 1 | `how-to-become-catholic` ✓, `what-is-ocia`, `stages-of-ocia`, `catechumen-or-candidate`, `already-baptized`, `married-before-ocia`, `finding-a-parish`, `returning-to-the-church`, `returning-after-mortal-sin` |
| 7 | Sacred Scripture | 6 | 0 | `what-is-the-bible`, `catholic-bible-books`, `inspiration-of-scripture`, `how-to-read-the-bible`, `which-bible-translation`, `where-to-start-reading-the-bible` |
| 8 | Apologetics I: Church authority and other Christians | 8 | 1 | `did-jesus-found-a-church`, `sola-scriptura` ✓, `what-is-the-magisterium`, `peter-the-rock`, `papal-infallibility`, `apostolic-succession`, `catholic-and-protestant-differences`, `catholic-and-orthodox-differences`, `praying-directly-to-god` |
| 9 | Mary, saints, and salvation | 15 | 0 | `who-is-mary`, `why-honor-mary`, `mother-of-god`, `immaculate-conception`, `what-is-a-saint`, `praying-to-saints`, `statues-and-images`, `how-are-we-saved`, `what-is-grace`, `faith-and-works`, `what-happens-when-we-die`, `heaven`, `hell`, `purgatory`, `salvation-of-non-christians` |
| 10 | Faith, reason, creation, and other religions | 8 | 1 | `why-did-god-create-us`, `creation`, `creation-and-evolution`, `original-sin`, `does-god-exist`, `faith-and-science`, `problem-of-evil` ✓, `catholics-and-muslims`, `do-all-religions-lead-to-god` |
| 11 | Moral life and social teaching | 8 | 0 | `how-catholics-decide-right-and-wrong`, `conscience`, `ten-commandments`, `what-is-sin`, `human-life-dignity`, `abortion`, `sexuality`, `what-is-catholic-social-teaching` |
| 12 | Prayer, the Church year, and Catholic life | 15 | 0 | `what-is-prayer`, `how-to-pray`, `basic-catholic-prayers`, `our-father`, `hail-mary`, `sign-of-the-cross`, `the-rosary`, `liturgical-year`, `advent`, `lent`, `ash-wednesday`, `holy-week`, `easter-vigil`, `holy-days-of-obligation`, `fasting-and-abstinence` |
| 13 | Church history and the Fathers | 7 | 0 | `church-history-overview`, `early-church`, `council-of-nicaea`, `great-schism`, `protestant-reformation`, `who-are-the-church-fathers`, `fathers-on-the-eucharist` |

<!-- /generated: batches -->

**Before launch:** hide categories and tradition pages that are still empty (decided in Phase 3).

**Engineering checkpoints:** re-check search payload and relevance at about 100 and 500 topics (agreed in Phase 4).

---

## 12. Topic counts and priorities

Generated from the inventory tables by `scripts/curriculum.mjs` (no dependencies). Run `node scripts/curriculum.mjs` to check the inventory: unique slugs, every P1 topic in exactly one batch, and ✓ marks matching the topics in `content/topics`. Run `node scripts/curriculum.mjs --write` to regenerate this table, the §11 batch table, and the ✓ marks in §7.3 and §8. Batch membership is edited by hand in §11. Tradition pages are counted separately in [§6.2](#62-tradition-map) (31 entries, 29 planned pages, 5 built).

<!-- generated: counts -->

| Subject | Topics | P1 | P2 | P3 | Debate | Review (R) | Built |
|---|---|---|---|---|---|---|---|
| 4.1 Foundations of Catholicism | 12 | 8 | 4 | 0 | 1 | 0 | 8 |
| 4.2 God and the Holy Trinity | 12 | 3 | 5 | 4 | 3 | 0 | 3 |
| 4.3 Jesus Christ | 15 | 6 | 7 | 2 | 4 | 0 | 6 |
| 4.4 Creation and the Human Person (new) | 11 | 4 | 6 | 1 | 2 | 3 | 0 |
| 4.5 Sacred Scripture | 21 | 6 | 12 | 3 | 5 | 1 | 0 |
| 4.6 The Church, Sacred Tradition, and Church Authority | 19 | 10 | 8 | 1 | 5 | 1 | 5 |
| 4.7 The Seven Sacraments | 30 | 14 | 14 | 2 | 8 | 4 | 14 |
| 4.9 Mary | 11 | 4 | 4 | 3 | 5 | 1 | 0 |
| 4.10 Saints and Angels | 17 | 3 | 10 | 4 | 4 | 1 | 0 |
| 4.11 Prayer and Spiritual Life | 25 | 7 | 10 | 8 | 0 | 2 | 0 |
| 4.12 Catholic Moral Theology | 21 | 7 | 9 | 5 | 1 | 9 | 0 |
| 4.13 Salvation and Eternal Life | 15 | 8 | 6 | 1 | 7 | 3 | 0 |
| 4.14 Church History | 24 | 5 | 13 | 6 | 9 | 3 | 0 |
| 4.15 Church Fathers and Doctors | 14 | 2 | 7 | 5 | 0 | 1 | 0 |
| 4.16 Philosophy and Natural Theology | 16 | 3 | 8 | 5 | 8 | 0 | 1 |
| 4.17 Catholic Social Teaching | 11 | 1 | 6 | 4 | 0 | 3 | 0 |
| 4.18 Liturgical Life | 15 | 7 | 6 | 2 | 0 | 0 | 0 |
| 4.19 OCIA and Becoming Catholic | 17 | 8 | 8 | 1 | 0 | 1 | 1 |
| 4.20 Everyday Catholic Life, Marriage, and Vocation (new) | 18 | 2 | 7 | 9 | 0 | 2 | 0 |
| 5 Holy Mass (themes and parts) | 65 | 51 | 9 | 5 | 1 | 3 | 51 |
| 6.3 Comparison questions | 6 | 4 | 2 | 0 | 1 | 3 | 0 |
| 7.2 Apologetics-only questions | 27 | 1 | 17 | 9 | 27 | 11 | 0 |
| **Total** | **422** | **164** | **178** | **80** | **91** | **52** | **89** |

<!-- /generated: counts -->

---

## 13. Gaps, risks, and unresolved decisions

### 13.1 Decisions

**Approved in Phase 7:** four new browsing categories (D1); a Markdown verification and review log (D3); a minimal optional access label on resources, added only when a paid resource is selected (D4); individual pages for all 41 Mass parts (D5); one glossary topic plus searchable terms (D7); the six learning pathways (D8); P3 content not required for launch (D9); English only for V1 (D10); free resources preferred.

**Still open:**

| # | Decision | Recommendation |
|---|---|---|
| D2 | Who is the external theological reviewer, and who reviews the Mass and moral topics? | One primary reviewer plus specialists. Until then, every topic stays "awaiting review" in the log. |
| D6 | Show the full texts of basic prayers (Our Father, Hail Mary)? | Link to official texts; quote only traditional public-domain wording after review. |
| D11 | Add a separate "definitive doctrine" label to the app? | Only when the first topic needs it (likely `women-and-the-priesthood`); until then `doctrine` covers levels 2–3 and the topic text names the level. |
| D12 | How do pathways appear in the app? | One list page reusing the Start here pattern; a small software change to approve when the pathways have enough topics. |

### 13.2 Risks

- **Review capacity** is the bottleneck, not writing. About 45 R topics need careful review; the moral theology and Mass batches are scheduled with extra time.
- **Accuracy at scale:** the verification checklist ([§10.2](#102-verification-checklist-every-topic)) is non-negotiable; batches stay small so it is practical.
- **Link rot:** resource links are checked by hand at each batch and before launch (decided in Phase 3).
- **Copyright:** official liturgical texts are linked, never copied (§5.8).
- **Tone in contested topics:** every R topic is read for charity and accuracy as well as doctrine.
- **Scope creep:** pathways, glossary, and access labels are content decisions first; any software changes come back for approval.

### 13.3 Known gaps in this plan

- Tradition-specific primary-source URLs (other than those verified) are not yet located.
- The Joint Declaration on the Doctrine of Justification's current vatican.va URL is not yet found (the old address returns 404).
- CCC and Scripture references in the Mass part tables are carried over and need re-checking topic by topic.
- No content plan yet for Eastern Catholic liturgies beyond one overview topic.
- Counts by priority will drift as batches refine scope; the inventory tables remain the source of truth.

---

## Appendix A: verified anchor sources

Each URL below was opened during Phase 6 (or earlier phases) and its title or content checked.

**Catechism and liturgy**
- Catechism of the Catholic Church (Vatican): `https://www.vatican.va/archive/ENG0015/_INDEX.HTM` — section pages hold exact paragraph ranges, as already used in the app.
- Compendium of the Catechism: `https://www.vatican.va/archive/compendium_ccc/documents/archive_2005_compendium-ccc_en.html`
- General Instruction of the Roman Missal, with U.S. adaptations (2003 English): `https://www.vatican.va/roman_curia/congregations/ccdds/documents/rc_con_ccdds_doc_20030317_ordinamento-messale_en.html`
- USCCB Bible (NABRE): `https://bible.usccb.org/bible/<book>/<chapter>`
- Code of Canon Law: `https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html`
- USCCB Order of Mass, GIRM, OCIA, and Real Presence pages: already in the app's registry.
- USCCB Guidelines for the Reception of Communion: `https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass/liturgy-of-the-eucharist/guidelines-for-the-reception-of-communion` (title confirmed; full text check pending because of bot protection).

**Councils and papal documents (vatican.va)**
- Lumen Gentium; Dei Verbum; Sacrosanctum Concilium; Gaudium et Spes; Unitatis Redintegratio; Nostra Aetate; Dignitatis Humanae; Orientalium Ecclesiarum.
- Humani Generis (1950); Humanae Vitae (1968); Veritatis Splendor (1993); Evangelium Vitae (1995); Ut Unum Sint (1995); Fides et Ratio (1998); Ecclesia de Eucharistia (2003); Laudato Si' (2015); Rerum Novarum (1891); Salvifici Doloris (1984); Ordinatio Sacerdotalis (1994).
- Compendium of the Social Doctrine of the Church; Dominus Iesus (2000); CDF Letter on Christian Meditation (1989); ITC, The Hope of Salvation for Infants Who Die Without Being Baptised (2007).

**Levels of Church teaching**
- Lumen Gentium 25 (ordinary and universal Magisterium): in the Lumen Gentium text on vatican.va.
- CDF, Profession of Faith and Doctrinal Commentary on its Concluding Formula (1998): `https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_con_cfaith_doc_1998_professio-fidei_en.html`
- John Paul II, Ad Tuendam Fidem (1998): `https://www.vatican.va/content/john-paul-ii/en/motu_proprio/documents/hf_jp-ii_motu-proprio_30061998_ad-tuendam-fidem.html`

**Fathers**
- New Advent Fathers: Justin Martyr, *First Apology* (`/fathers/0126.htm`); Irenaeus, *Against Heresies* III.3–4; Basil, *On the Holy Spirit*; Ignatius, *Letter to the Ephesians*; Augustine, *Enchiridion*.

**Other traditions and scholarship** (already in the registry): Westminster Confession (OPC); Formula of Concord (bookofconcord.org); Quran.com; jw.org; Stanford Encyclopedia of Philosophy.

Exact URLs for the documents above are in the app registry or listed in this phase's verification log; they are added to the registry only when a topic uses them.

---

## Appendix B: what was reused from the original Mass curriculum

The original `docs/mass-curriculum.md` (removed in commit `b71232e`) was recovered from Git history and reviewed.

**Reused, after verification:**
- The part-by-part structure of the Mass (before Mass, Introductory Rites, Word, Eucharist, Communion, Concluding Rites).
- All GIRM paragraph numbers, each verified against the official text (§5.7).
- The U.S. posture summary (GIRM 43, verified).
- The list of Sunday variations, the guidance for visitors and OCIA participants, and the pastoral review points.
- Scripture and CCC references, carried over for re-checking topic by topic.

**Not reused:**
- Narration scripts, audio and scene requirements, playback segments, and the response-practice matrix: these belonged to the abandoned simulation.
- The licensing plan for reproducing official texts: the new approach links to official texts instead (§5.8).
- Spanish-language planning (English only for V1).
