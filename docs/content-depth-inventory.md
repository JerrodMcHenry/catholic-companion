# Content Depth Inventory (updated 2026-11-25)

Every topic in `content/topics/*.ts` (170, read from the repository at the time of writing, including the two topics added this session) and every common argument in `content/topics/index.ts` (41).

## Method

- **Evidence columns are generated from the content files** (`scratchpad/tools/inventory2.mjs`): explanation paragraphs and words; distinct Old and New Testament chapter-and-verse citations in the text, Scripture links, and debate; Catechism and document links; early Christian witnesses named in the text or debate; objections (debate arguments, or explanation paragraphs that open with a question); resources and media.
- **Classification applies judgment to that evidence.** The eight dimensions are: Catholic teaching, Old Testament, New Testament, connections between the Testaments, early Christian testimony, authoritative teaching, objections, further resources. A dimension counts as a gap only where it matters for the question; introductory pages are assessed together with the deeper topics they link to (noted in the Gaps column). Practical topics (Mass parts, OCIA steps, prayers, the Church year, how-to pages) are judged on clarity, official sources, and a next step, not on apologetic depth.
- **Limits.** Topics were not all re-read in full this session; most were verified sentence by sentence when written (see `docs/content-log.md`), and this inventory relies on that record plus the generated evidence and targeted reading. Chapter-and-verse detection undercounts Scripture mentioned without verse numbers. Classification is the assistant's assessment, **not independent theological review**.

## Summary

| Classification | Topics |
|---|---|
| Practical | 84 |
| Adequate | 58 |
| Strong | 32 |

Topics marked * were added or improved on 2026-11-25. The final pass added salvation-history and virtues and closed the three optional gaps (how-are-we-saved, marriage-sacrament, heaven). The four topics previously classified Incomplete (problem-of-evil, bishops-priests-deacons, confirmation, original-sin) were expanded and reassessed from the regenerated evidence.

No topic is currently classified **Needs Correction**: errors found in review (Hebrews 1:2, the Paraclete gloss, Matthew 25:36, Acts 10:38, a CCC 375 quotation boundary, and the John 14:28 citation) were corrected, and the scandals section was reworked.

## Material gaps (prioritized)

| Priority | Topic | Class | Gap | Recommended improvement | Supporting sources |
|---|---|---|---|---|---|
| Low | `basic-catholic-prayers` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `holy-days-of-obligation` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `holy-week` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `mass-etiquette` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `non-catholics-at-mass` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `what-is-prayer` | Practical | no further resource | Add one verified resource if a good one exists | — |
| Low | `what-is-the-catechism` | Practical | no further resource | Add one verified resource if a good one exists | — |

Sources marked “verify” have not been checked yet and must be verified before use.

## All topics

| Category | Topic | Class | Evidence | Gaps | Priority |
|---|---|---|---|---|---|
| beliefs | `what-do-catholics-believe *` | Adequate | 5¶, 381w; OT 0 / NT 3; CCC 3, docs 2; witnesses: —; objections: —; res 1 | — | — |
| beliefs | `what-does-catholic-mean` | Practical | 4¶, 186w; OT 0 / NT 1; CCC 1, docs 0; witnesses: Ignatius; objections: —; res 1 | — | — |
| beliefs | `are-catholics-christians` | Adequate | 4¶, 216w; OT 0 / NT 2; CCC 3, docs 1; witnesses: Ignatius; objections: 3 in debate; res 1 | — | — |
| beliefs | `what-is-the-creed` | Practical | 3¶, 215w; OT 0 / NT 2; CCC 1, docs 0; witnesses: —; objections: —; res 2 | — | — |
| beliefs | `what-is-faith *` | Adequate | 6¶, 383w; OT 0 / NT 5; CCC 4, docs 2; witnesses: —; objections: —; res 2 (media 1) | Introductory; depth in divine-revelation | — |
| beliefs | `salvation-history *` | Strong | 8¶, 798w; OT 14 / NT 12; CCC 7, docs 1; witnesses: Clement, Irenaeus; objections: —; res 2 | — | — |
| beliefs | `divine-revelation` | Adequate | 4¶, 226w; OT 0 / NT 2; CCC 4, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in what-is-sacred-tradition, sola-scriptura | — |
| beliefs | `what-is-the-catechism` | Practical | 4¶, 169w; OT 0 / NT 0; CCC 2, docs 3; witnesses: —; objections: —; res 0 | no further resource | Low |
| beliefs | `what-is-dogma` | Adequate | 5¶, 375w; OT 0 / NT 0; CCC 3, docs 3; witnesses: —; objections: 1 ¶; res 3 | Introductory; depth in papal-infallibility | — |
| beliefs | `who-is-god` | Adequate | 3¶, 175w; OT 2 / NT 2; CCC 1, docs 0; witnesses: —; objections: —; res 1 | Introductory; depth in what-is-the-trinity, does-god-exist | — |
| beliefs | `what-is-the-trinity` | Adequate | 4¶, 201w; OT 0 / NT 2; CCC 1, docs 0; witnesses: —; objections: —; res 2 | Introductory; depth in trinity-in-scripture | — |
| beliefs | `trinity-in-scripture *` | Strong | 7¶, 599w; OT 3 / NT 11; CCC 1, docs 0; witnesses: Didache, Tertullian; objections: 6 in debate; res 5 | — | — |
| beliefs | `who-is-the-holy-spirit` | Adequate | 4¶, 175w; OT 0 / NT 10; CCC 2, docs 1; witnesses: —; objections: 2 in debate; res 2 | — | — |
| beliefs | `why-did-god-create-us` | Adequate | 5¶, 291w; OT 1 / NT 1; CCC 4, docs 1; witnesses: Augustine; objections: —; res 0 | — | — |
| beliefs | `creation` | Adequate | 5¶, 300w; OT 2 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 1 | — | — |
| beliefs | `original-sin *` | Strong | 11¶, 817w; OT 3 / NT 3; CCC 3, docs 2; witnesses: Irenaeus; objections: 1 ¶; res 2 | — | — |
| beliefs | `who-is-jesus` | Adequate | 3¶, 186w; OT 0 / NT 2; CCC 5, docs 0; witnesses: —; objections: —; res 2 | Introductory; depth in divinity-of-jesus, incarnation | — |
| beliefs | `did-jesus-exist` | Adequate | 4¶, 237w; OT 0 / NT 2; CCC 2, docs 0; witnesses: —; objections: 3 in debate; res 4 | — | — |
| beliefs | `incarnation` | Adequate | 4¶, 227w; OT 0 / NT 6; CCC 1, docs 0; witnesses: Athanasius; objections: —; res 2 | — | — |
| beliefs | `why-did-jesus-die *` | Strong | 6¶, 407w; OT 2 / NT 7; CCC 1, docs 0; witnesses: Athanasius; objections: 1 ¶; res 3 (media 1) | — | — |
| beliefs | `was-jesus-crucified` | Strong | 6¶, 333w; OT 0 / NT 6; CCC 2, docs 1; witnesses: Ignatius; objections: 2 in debate; res 2 | — | — |
| beliefs | `resurrection` | Adequate | 4¶, 220w; OT 0 / NT 5; CCC 1, docs 0; witnesses: Ignatius; objections: 3 in debate; res 2 (media 1) | — | — |
| beliefs | `how-are-we-saved *` | Adequate | 5¶, 373w; OT 0 / NT 8; CCC 5, docs 2; witnesses: —; objections: 1 ¶; res 3 | — | — |
| beliefs | `what-is-grace` | Adequate | 5¶, 274w; OT 0 / NT 4; CCC 2, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in how-are-we-saved, faith-and-works | — |
| beliefs | `faith-and-works *` | Strong | 5¶, 442w; OT 0 / NT 6; CCC 2, docs 2; witnesses: Clement; objections: 3 in debate; res 3 | — | — |
| beliefs | `what-happens-when-we-die` | Adequate | 5¶, 275w; OT 0 / NT 5; CCC 2, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in heaven, hell, purgatory, catholic-funerals-and-grief | — |
| beliefs | `heaven *` | Adequate | 6¶, 299w; OT 0 / NT 4; CCC 1, docs 1; witnesses: Augustine; objections: —; res 2 | — | — |
| beliefs | `hell` | Adequate | 5¶, 271w; OT 0 / NT 7; CCC 1, docs 1; witnesses: Ignatius; objections: 3 in debate; res 1 | — | — |
| beliefs | `purgatory` | Strong | 6¶, 493w; OT 2 / NT 3; CCC 3, docs 2; witnesses: Tertullian, Cyril, Augustine; objections: 4 in debate; res 7 (media 2) | — | — |
| beliefs | `salvation-of-non-christians` | Adequate | 5¶, 426w; OT 0 / NT 5; CCC 2, docs 3; witnesses: —; objections: 3 in debate; res 1 | — | — |
| church | `what-is-the-church *` | Adequate | 9¶, 800w; OT 0 / NT 9; CCC 4, docs 3; witnesses: Cyprian; objections: —; res 5 | Introductory; depth in did-jesus-found-a-church | — |
| church | `what-is-sacred-tradition` | Adequate | 4¶, 220w; OT 0 / NT 3; CCC 2, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in sola-scriptura | — |
| church | `what-is-the-pope` | Adequate | 4¶, 217w; OT 0 / NT 3; CCC 1, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in peter-the-rock, papal-infallibility | — |
| church | `bishops-priests-deacons *` | Strong | 14¶, 1008w; OT 4 / NT 19; CCC 8, docs 2; witnesses: Ignatius, Clement; objections: 1 ¶; res 5 | — | — |
| church | `what-is-the-magisterium` | Adequate | 5¶, 309w; OT 0 / NT 4; CCC 2, docs 3; witnesses: —; objections: —; res 2 | Introductory; depth in papal-infallibility, apostolic-succession | — |
| church | `catholic-and-protestant-differences` | Adequate | 6¶, 398w; OT 0 / NT 2; CCC 2, docs 3; witnesses: —; objections: —; res 2 | Introductory; depth in the Protestantism debates | — |
| church | `catholic-and-orthodox-differences` | Adequate | 5¶, 376w; OT 0 / NT 2; CCC 4, docs 6; witnesses: —; objections: —; res 2 | Introductory; depth in great-schism, peter-the-rock, papal-infallibility | — |
| church | `catholics-and-muslims` | Adequate | 5¶, 336w; OT 1 / NT 1; CCC 1, docs 2; witnesses: —; objections: —; res 2 | — | — |
| church | `do-all-religions-lead-to-god` | Adequate | 6¶, 501w; OT 0 / NT 3; CCC 1, docs 2; witnesses: —; objections: 2 in debate; res 6 | — | — |
| mary-and-the-saints | `who-is-mary` | Strong | 5¶, 512w; OT 1 / NT 10; CCC 2, docs 2; witnesses: Tertullian, Jerome; objections: 1 ¶; res 4 | — | — |
| mary-and-the-saints | `why-honor-mary` | Adequate | 5¶, 296w; OT 1 / NT 5; CCC 2, docs 1; witnesses: Irenaeus; objections: 3 in debate; res 4 | — | — |
| mary-and-the-saints | `mother-of-god` | Adequate | 3¶, 255w; OT 0 / NT 4; CCC 3, docs 2; witnesses: Cyril; objections: 3 in debate; res 2 | — | — |
| mary-and-the-saints | `immaculate-conception` | Strong | 8¶, 654w; OT 7 / NT 6; CCC 3, docs 2; witnesses: Justin, Irenaeus; objections: 6 in debate; res 3 | — | — |
| mary-and-the-saints | `what-is-a-saint` | Adequate | 4¶, 244w; OT 0 / NT 3; CCC 2, docs 1; witnesses: —; objections: —; res 1 | Introductory; depth in praying-to-saints | — |
| mary-and-the-saints | `praying-to-saints` | Strong | 6¶, 398w; OT 1 / NT 5; CCC 2, docs 2; witnesses: Cyril, Augustine; objections: 3 in debate; res 3 | — | — |
| mary-and-the-saints | `statues-and-images` | Strong | 6¶, 337w; OT 6 / NT 2; CCC 1, docs 2; witnesses: —; objections: 4 in debate; res 2 | — | — |
| bible | `what-is-the-bible` | Strong | 6¶, 355w; OT 0 / NT 3; CCC 5, docs 2; witnesses: Jerome; objections: 1 ¶; res 2 (media 1) | — | — |
| bible | `catholic-bible-books` | Adequate | 6¶, 397w; OT 4 / NT 0; CCC 3, docs 4; witnesses: Augustine; objections: 3 in debate; res 2 | — | — |
| bible | `inspiration-of-scripture *` | Adequate | 7¶, 588w; OT 0 / NT 5; CCC 4, docs 3; witnesses: —; objections: 1 ¶; res 1 | — | — |
| bible | `how-to-read-the-bible` | Practical | 5¶, 380w; OT 0 / NT 5; CCC 1, docs 2; witnesses: —; objections: 1 ¶; res 2 (media 1) | — | — |
| bible | `which-bible-translation` | Practical | 6¶, 274w; OT 1 / NT 0; CCC 1, docs 2; witnesses: —; objections: —; res 2 | — | — |
| bible | `where-to-start-reading-the-bible` | Practical | 5¶, 287w; OT 1 / NT 2; CCC 3, docs 2; witnesses: —; objections: —; res 3 (media 1) | — | — |
| sacraments | `what-is-a-sacrament` | Adequate | 5¶, 350w; OT 0 / NT 2; CCC 6, docs 2; witnesses: Leo the Great; objections: —; res 1 | Introductory; depth in seven-sacraments | — |
| sacraments | `seven-sacraments` | Adequate | 5¶, 252w; OT 0 / NT 0; CCC 5, docs 2; witnesses: —; objections: 1 ¶; res 2 | Introductory; depth in each sacrament's topic | — |
| sacraments | `baptism *` | Strong | 11¶, 811w; OT 0 / NT 7; CCC 7, docs 1; witnesses: Didache; objections: 2 ¶; res 3 (media 1) | — | — |
| sacraments | `infant-baptism *` | Strong | 7¶, 421w; OT 0 / NT 6; CCC 2, docs 2; witnesses: Origen, Augustine, Tertullian, Cyprian; objections: 3 in debate; res 2 | — | — |
| sacraments | `confirmation *` | Strong | 10¶, 842w; OT 2 / NT 6; CCC 8, docs 2; witnesses: Tertullian, Cyril; objections: 1 ¶; res 4 | — | — |
| sacraments | `what-is-the-eucharist` | Adequate | 5¶, 282w; OT 0 / NT 3; CCC 4, docs 3; witnesses: —; objections: —; res 2 (media 1) | Introductory; depth in real-presence, mass-as-sacrifice, fathers-on-the-eucharist | — |
| sacraments | `real-presence` | Strong | 5¶, 330w; OT 2 / NT 6; CCC 3, docs 2; witnesses: Ignatius, Justin; objections: 3 in debate; res 2 (media 1) | — | — |
| sacraments | `mass-as-sacrifice` | Strong | 8¶, 619w; OT 1 / NT 5; CCC 5, docs 3; witnesses: Didache; objections: 3 in debate; res 4 | — | — |
| sacraments | `eucharistic-adoration *` | Adequate | 6¶, 529w; OT 0 / NT 6; CCC 2, docs 2; witnesses: Augustine; objections: —; res 2 | — | — |
| sacraments | `who-can-receive-communion` | Strong | 6¶, 498w; OT 0 / NT 2; CCC 3, docs 4; witnesses: Justin; objections: 2 in debate; res 1 | — | — |
| sacraments | `confession *` | Adequate | 8¶, 526w; OT 1 / NT 6; CCC 10, docs 2; witnesses: —; objections: —; res 2 (media 1) | Introductory; depth in why-confess-to-a-priest | — |
| sacraments | `why-confess-to-a-priest` | Strong | 7¶, 415w; OT 0 / NT 11; CCC 4, docs 3; witnesses: Didache, Cyprian; objections: 3 in debate; res 2 (media 2) | — | — |
| sacraments | `how-to-go-to-confession` | Practical | 6¶, 394w; OT 1 / NT 2; CCC 4, docs 2; witnesses: —; objections: 1 ¶; res 2 (media 1) | — | — |
| sacraments | `mortal-and-venial-sin` | Adequate | 6¶, 374w; OT 0 / NT 3; CCC 5, docs 1; witnesses: —; objections: —; res 2 (media 1) | Introductory; depth in what-is-sin | — |
| sacraments | `anointing-of-the-sick *` | Adequate | 9¶, 870w; OT 1 / NT 4; CCC 7, docs 2; witnesses: Innocent I; objections: —; res 2 | — | — |
| sacraments | `marriage-sacrament *` | Strong | 8¶, 495w; OT 2 / NT 8; CCC 7, docs 3; witnesses: Ignatius, Polycarp; objections: 1 ¶; res 2 | — | — |
| mass | `what-happens-at-mass` | Practical | 5¶, 317w; OT 0 / NT 3; CCC 2, docs 2; witnesses: Justin; objections: —; res 5 (media 2) | — | — |
| mass | `first-time-at-mass` | Practical | 4¶, 252w; OT 0 / NT 1; CCC 1, docs 2; witnesses: —; objections: —; res 2 (media 1) | — | — |
| mass | `why-go-to-mass-on-sunday` | Adequate | 5¶, 377w; OT 0 / NT 3; CCC 4, docs 2; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-in-scripture` | Strong | 5¶, 311w; OT 3 / NT 9; CCC 2, docs 1; witnesses: Didache, Justin; objections: 3 in debate; res 4 (media 1) | — | — |
| mass | `mass-etiquette` | Practical | 4¶, 192w; OT 0 / NT 0; CCC 1, docs 2; witnesses: —; objections: —; res 0 | no further resource | Low |
| mass | `mass-postures` | Practical | 5¶, 256w; OT 0 / NT 0; CCC 0, docs 2; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-gestures` | Practical | 5¶, 306w; OT 0 / NT 0; CCC 2, docs 2; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-responses` | Practical | 5¶, 281w; OT 0 / NT 0; CCC 1, docs 3; witnesses: —; objections: —; res 2 | — | — |
| mass | `non-catholics-at-mass` | Practical | 3¶, 257w; OT 0 / NT 1; CCC 2, docs 4; witnesses: —; objections: —; res 0 | no further resource | Low |
| mass | `how-to-receive-communion` | Practical | 8¶, 419w; OT 0 / NT 1; CCC 1, docs 3; witnesses: —; objections: 1 ¶; res 2 (media 2) | — | — |
| mass | `mass-arriving` | Practical | 4¶, 206w; OT 0 / NT 1; CCC 1, docs 2; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-holy-water` | Practical | 4¶, 247w; OT 0 / NT 2; CCC 2, docs 0; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-genuflection` | Practical | 4¶, 235w; OT 0 / NT 1; CCC 1, docs 1; witnesses: —; objections: 1 ¶; res 2 | — | — |
| mass | `mass-quiet-prayer` | Practical | 3¶, 172w; OT 1 / NT 0; CCC 1, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-entrance` | Practical | 4¶, 223w; OT 1 / NT 0; CCC 2, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-reverence-to-the-altar` | Practical | 5¶, 398w; OT 3 / NT 2; CCC 2, docs 1; witnesses: Ambrose; objections: —; res 2 | — | — |
| mass | `mass-sign-of-the-cross` | Practical | 4¶, 192w; OT 0 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-greeting` | Practical | 4¶, 221w; OT 1 / NT 3; CCC 0, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-penitential-act` | Practical | 4¶, 262w; OT 0 / NT 3; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-kyrie` | Practical | 4¶, 180w; OT 0 / NT 2; CCC 0, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-gloria` | Practical | 4¶, 194w; OT 0 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-collect` | Practical | 4¶, 165w; OT 0 / NT 0; CCC 1, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-first-reading` | Practical | 5¶, 266w; OT 2 / NT 0; CCC 3, docs 1; witnesses: —; objections: —; res 3 | — | — |
| mass | `mass-responsorial-psalm` | Practical | 4¶, 200w; OT 0 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-second-reading` | Practical | 3¶, 160w; OT 0 / NT 2; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-gospel-acclamation` | Practical | 5¶, 283w; OT 0 / NT 1; CCC 0, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-gospel` | Practical | 5¶, 282w; OT 0 / NT 2; CCC 2, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-homily` | Practical | 4¶, 277w; OT 1 / NT 1; CCC 1, docs 3; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-creed` | Practical | 5¶, 249w; OT 0 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-universal-prayer` | Practical | 4¶, 224w; OT 0 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-preparation-of-the-gifts` | Practical | 4¶, 323w; OT 2 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-prayer-over-the-offerings` | Practical | 4¶, 247w; OT 0 / NT 1; CCC 1, docs 2; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-preface-dialogue` | Practical | 4¶, 188w; OT 1 / NT 0; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-preface` | Practical | 5¶, 336w; OT 0 / NT 2; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-sanctus` | Practical | 4¶, 237w; OT 2 / NT 2; CCC 1, docs 1; witnesses: —; objections: —; res 3 | — | — |
| mass | `mass-eucharistic-prayer` | Practical | 6¶, 431w; OT 0 / NT 2; CCC 3, docs 2; witnesses: —; objections: —; res 3 | — | — |
| mass | `mass-epiclesis` | Practical | 5¶, 394w; OT 0 / NT 3; CCC 2, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-consecration` | Practical | 5¶, 332w; OT 0 / NT 5; CCC 2, docs 3; witnesses: —; objections: —; res 3 (media 1) | — | — |
| mass | `mass-mystery-of-faith` | Practical | 4¶, 180w; OT 0 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-intercessions` | Practical | 5¶, 348w; OT 1 / NT 3; CCC 3, docs 1; witnesses: —; objections: —; res 3 | — | — |
| mass | `mass-great-amen` | Practical | 4¶, 187w; OT 0 / NT 2; CCC 1, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-lords-prayer` | Practical | 4¶, 255w; OT 0 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-sign-of-peace` | Practical | 4¶, 208w; OT 0 / NT 2; CCC 1, docs 1; witnesses: —; objections: —; res 1 | — | — |
| mass | `mass-lamb-of-god` | Practical | 4¶, 230w; OT 0 / NT 3; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-invitation-to-communion` | Practical | 4¶, 224w; OT 0 / NT 4; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-communion` | Practical | 5¶, 272w; OT 0 / NT 3; CCC 2, docs 3; witnesses: —; objections: —; res 2 (media 1) | — | — |
| mass | `mass-thanksgiving-after-communion` | Practical | 5¶, 327w; OT 1 / NT 1; CCC 2, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-prayer-after-communion` | Practical | 4¶, 239w; OT 0 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-final-blessing` | Practical | 4¶, 203w; OT 1 / NT 1; CCC 1, docs 1; witnesses: —; objections: —; res 2 | — | — |
| mass | `mass-dismissal` | Practical | 4¶, 224w; OT 0 / NT 2; CCC 1, docs 2; witnesses: —; objections: —; res 3 | — | — |
| mass | `mass-recessional` | Practical | 5¶, 297w; OT 1 / NT 1; CCC 2, docs 2; witnesses: —; objections: —; res 3 | — | — |
| becoming-catholic | `how-to-become-catholic` | Practical | 4¶, 235w; OT 0 / NT 2; CCC 3, docs 1; witnesses: —; objections: —; res 3 (media 1) | — | — |
| becoming-catholic | `what-is-ocia` | Practical | 5¶, 325w; OT 0 / NT 2; CCC 2, docs 3; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `stages-of-ocia` | Practical | 7¶, 344w; OT 0 / NT 1; CCC 2, docs 3; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `catechumen-or-candidate` | Practical | 5¶, 253w; OT 0 / NT 1; CCC 4, docs 3; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `already-baptized` | Practical | 6¶, 359w; OT 0 / NT 2; CCC 3, docs 3; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `married-before-ocia *` | Practical | 8¶, 591w; OT 0 / NT 3; CCC 4, docs 3; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `telling-family *` | Practical | 6¶, 485w; OT 1 / NT 5; CCC 2, docs 0; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `finding-a-parish` | Practical | 6¶, 322w; OT 0 / NT 2; CCC 2, docs 2; witnesses: —; objections: —; res 1 | — | — |
| becoming-catholic | `returning-to-the-church` | Practical | 6¶, 357w; OT 0 / NT 3; CCC 6, docs 1; witnesses: —; objections: —; res 2 | — | — |
| becoming-catholic | `after-becoming-catholic *` | Practical | 7¶, 504w; OT 0 / NT 5; CCC 6, docs 1; witnesses: —; objections: 2 ¶; res 1 | — | — |
| catholic-life | `returning-after-mortal-sin` | Practical | 6¶, 360w; OT 0 / NT 3; CCC 5, docs 3; witnesses: —; objections: 1 ¶; res 2 | — | — |
| catholic-life | `fasting-and-abstinence` | Practical | 6¶, 388w; OT 1 / NT 2; CCC 2, docs 3; witnesses: —; objections: —; res 1 | — | — |
| catholic-life | `catholic-funerals-and-grief *` | Practical | 8¶, 837w; OT 1 / NT 6; CCC 8, docs 3; witnesses: Augustine; objections: —; res 2 | — | — |
| prayer | `what-is-prayer` | Practical | 6¶, 259w; OT 0 / NT 4; CCC 5, docs 1; witnesses: —; objections: 1 ¶; res 0 | no further resource | Low |
| prayer | `how-to-pray *` | Practical | 7¶, 407w; OT 1 / NT 2; CCC 5, docs 1; witnesses: —; objections: —; res 1 | — | — |
| prayer | `basic-catholic-prayers` | Practical | 5¶, 279w; OT 0 / NT 3; CCC 3, docs 1; witnesses: Chrysostom; objections: 1 ¶; res 0 | no further resource | Low |
| prayer | `our-father` | Practical | 6¶, 294w; OT 0 / NT 2; CCC 6, docs 1; witnesses: Tertullian; objections: —; res 1 | — | — |
| prayer | `hail-mary` | Practical | 5¶, 282w; OT 0 / NT 3; CCC 2, docs 2; witnesses: —; objections: —; res 1 | — | — |
| prayer | `sign-of-the-cross` | Practical | 5¶, 251w; OT 0 / NT 3; CCC 3, docs 0; witnesses: Tertullian; objections: —; res 1 | — | — |
| prayer | `the-rosary` | Practical | 7¶, 481w; OT 0 / NT 6; CCC 4, docs 2; witnesses: —; objections: 1 ¶; res 3 | — | — |
| church-year | `liturgical-year` | Practical | 6¶, 284w; OT 1 / NT 2; CCC 2, docs 2; witnesses: —; objections: —; res 1 | — | — |
| church-year | `advent` | Practical | 5¶, 307w; OT 1 / NT 3; CCC 2, docs 2; witnesses: —; objections: —; res 1 | — | — |
| church-year | `lent` | Practical | 6¶, 291w; OT 1 / NT 2; CCC 3, docs 1; witnesses: —; objections: —; res 2 | — | — |
| church-year | `ash-wednesday` | Practical | 5¶, 270w; OT 2 / NT 2; CCC 2, docs 2; witnesses: —; objections: —; res 2 | — | — |
| church-year | `holy-week` | Practical | 6¶, 289w; OT 0 / NT 4; CCC 1, docs 2; witnesses: —; objections: —; res 0 | no further resource | Low |
| church-year | `easter-vigil` | Practical | 5¶, 261w; OT 2 / NT 2; CCC 2, docs 2; witnesses: —; objections: —; res 1 | — | — |
| church-year | `holy-days-of-obligation` | Practical | 5¶, 318w; OT 1 / NT 1; CCC 2, docs 2; witnesses: —; objections: —; res 0 | no further resource | Low |
| morality | `how-catholics-decide-right-and-wrong` | Strong | 6¶, 344w; OT 1 / NT 2; CCC 5, docs 2; witnesses: —; objections: 1 ¶; res 1 | — | — |
| morality | `conscience` | Adequate | 6¶, 312w; OT 1 / NT 2; CCC 5, docs 2; witnesses: —; objections: —; res 1 | — | — |
| morality | `ten-commandments` | Strong | 6¶, 393w; OT 2 / NT 2; CCC 2, docs 1; witnesses: Augustine; objections: 1 ¶; res 1 | — | — |
| morality | `what-is-sin` | Adequate | 5¶, 278w; OT 1 / NT 2; CCC 4, docs 1; witnesses: —; objections: —; res 0 | Introductory; depth in mortal-and-venial-sin | — |
| morality | `human-life-dignity` | Adequate | 5¶, 276w; OT 2 / NT 1; CCC 4, docs 2; witnesses: —; objections: 1 ¶; res 0 | — | — |
| morality | `abortion` | Adequate | 6¶, 374w; OT 2 / NT 1; CCC 2, docs 2; witnesses: Didache; objections: —; res 3 | — | — |
| morality | `sexuality *` | Adequate | 9¶, 641w; OT 1 / NT 2; CCC 4, docs 3; witnesses: —; objections: —; res 0 | — | — |
| morality | `what-is-catholic-social-teaching` | Practical | 6¶, 387w; OT 0 / NT 3; CCC 5, docs 3; witnesses: —; objections: —; res 1 | — | — |
| morality | `virtues *` | Adequate | 7¶, 628w; OT 1 / NT 5; CCC 5, docs 0; witnesses: Augustine; objections: —; res 2 | — | — |
| faith-and-reason | `does-god-exist` | Strong | 6¶, 382w; OT 2 / NT 3; CCC 2, docs 2; witnesses: Aquinas; objections: 5 in debate; res 3 | — | — |
| faith-and-reason | `faith-and-science` | Adequate | 5¶, 303w; OT 2 / NT 0; CCC 2, docs 2; witnesses: —; objections: 2 in debate; res 2 | — | — |
| faith-and-reason | `creation-and-evolution` | Adequate | 6¶, 442w; OT 1 / NT 0; CCC 4, docs 3; witnesses: —; objections: 3 in debate; res 2 | — | — |
| history | `church-history-overview` | Adequate | 6¶, 319w; OT 0 / NT 3; CCC 3, docs 2; witnesses: —; objections: —; res 1 | Introductory; depth in early-church, council-of-nicaea, great-schism, protestant-reformation | — |
| history | `early-church` | Strong | 8¶, 550w; OT 0 / NT 7; CCC 7, docs 1; witnesses: Justin, Clement, Ignatius, Irenaeus; objections: 4 in debate; res 7 | — | — |
| history | `council-of-nicaea` | Adequate | 6¶, 412w; OT 0 / NT 4; CCC 3, docs 2; witnesses: Ignatius; objections: —; res 2 | — | — |
| history | `great-schism` | Adequate | 6¶, 408w; OT 0 / NT 3; CCC 3, docs 3; witnesses: —; objections: 2 in debate; res 2 | — | — |
| history | `protestant-reformation` | Adequate | 6¶, 442w; OT 0 / NT 3; CCC 3, docs 4; witnesses: —; objections: —; res 5 | Introductory; depth in faith-and-works, sola-scriptura | — |
| history | `who-are-the-church-fathers` | Adequate | 6¶, 349w; OT 0 / NT 3; CCC 4, docs 2; witnesses: Ignatius, Irenaeus, Athanasius, Augustine; objections: —; res 3 | — | — |
| history | `fathers-on-the-eucharist` | Adequate | 6¶, 339w; OT 0 / NT 3; CCC 3, docs 2; witnesses: Ignatius, Justin, Irenaeus, Cyril; objections: —; res 6 | — | — |
| objections | `sola-scriptura` | Strong | 4¶, 326w; OT 0 / NT 6; CCC 3, docs 1; witnesses: Eusebius, Irenaeus, Basil; objections: 3 in debate; res 4 (media 1) | — | — |
| objections | `divinity-of-jesus` | Strong | 5¶, 578w; OT 5 / NT 16; CCC 3, docs 1; witnesses: Ignatius, Pliny, Augustine; objections: 5 in debate; res 6 (media 1) | — | — |
| objections | `problem-of-evil *` | Strong | 9¶, 904w; OT 6 / NT 7; CCC 3, docs 2; witnesses: Augustine, Aquinas; objections: 3 in debate; res 5 (media 1) | — | — |
| church | `did-jesus-found-a-church` | Strong | 4¶, 309w; OT 0 / NT 7; CCC 2, docs 2; witnesses: Irenaeus; objections: 2 in debate; res 2 | — | — |
| church | `peter-the-rock` | Strong | 6¶, 413w; OT 2 / NT 8; CCC 3, docs 4; witnesses: Irenaeus, Cyprian; objections: 5 in debate; res 2 | — | — |
| church | `papal-infallibility` | Adequate | 6¶, 382w; OT 0 / NT 5; CCC 2, docs 3; witnesses: —; objections: 4 in debate; res 2 | — | — |
| church | `apostolic-succession` | Strong | 5¶, 360w; OT 0 / NT 5; CCC 3, docs 2; witnesses: Clement, Irenaeus, Tertullian, Polycarp; objections: 2 in debate; res 3 | — | — |
| objections | `praying-directly-to-god` | Adequate | 4¶, 280w; OT 0 / NT 7; CCC 4, docs 1; witnesses: —; objections: 2 in debate; res 2 | — | — |
| objections | `muhammad-and-the-quran` | Adequate | 6¶, 365w; OT 0 / NT 3; CCC 2, docs 3; witnesses: —; objections: 3 in debate; res 3 | — | — |

## Common arguments (all 41)

| Group | Argument | Answered in | Assessment | Notes |
|---|---|---|---|---|
| Scripture and authority | Catholics follow man-made traditions instead of the Bible. | `what-is-sacred-tradition` | Adequate | Distinguishes apostolic Tradition from human customs (¶3); Mark 7:8 answered in the sola-scriptura debate. |
| Scripture and authority | Scripture alone is the authority for Christians. | `sola-scriptura` | Strong | Directly answered in the topic text or its objections section. |
| Scripture and authority | Catholics added books to the Bible. | `catholic-bible-books` | Adequate | Directly answered in the topic text or its objections section. |
| Scripture and authority | The Catholic Church changed the Ten Commandments. | `ten-commandments` | Strong | Directly answered in the topic text or its objections section. |
| Scripture and authority | The papacy has no biblical basis, and Peter was not the first pope. | `peter-the-rock` | Strong | Directly answered in the topic text or its objections section. |
| Scripture and authority | No human being can be infallible. | `papal-infallibility` | Adequate | Directly answered in the topic text or its objections section. |
| Mary and the saints | Catholics worship Mary. | `why-honor-mary` | Adequate | Directly answered in the topic text or its objections section. |
| Mary and the saints | Catholics worship the saints, and praying to them is unbiblical. | `praying-to-saints` | Strong | Directly answered in the topic text or its objections section. |
| Mary and the saints | Jesus is the only mediator, so asking saints to pray for us is wrong. | `praying-directly-to-god` | Adequate | Directly answered in the topic text or its objections section. |
| Mary and the saints | Catholics worship statues and idols. | `statues-and-images` | Strong | Directly answered in the topic text or its objections section. |
| Mary and the saints | Mary had other children. | `who-is-mary` | Strong | Directly answered in the topic text or its objections section. |
| Mary and the saints | The Immaculate Conception is unbiblical. | `immaculate-conception` | Strong | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | Catholics aren't Christians. | `are-catholics-christians` | Adequate | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | Catholics try to earn salvation by works; we are saved by faith alone. | `faith-and-works` | Strong | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | Once saved, always saved. | `how-are-we-saved` | Adequate | 'Can salvation be lost?' (¶5) plus the Akin resource. |
| Salvation and forgiveness | Only God can forgive sins, not priests. | `why-confess-to-a-priest` | Strong | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | Purgatory is unbiblical. | `purgatory` | Strong | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | Indulgences let Catholics buy forgiveness. | `purgatory` | Strong | Directly answered in the topic text or its objections section. |
| Salvation and forgiveness | The Catholic Church teaches that all non-Catholics go to hell. | `salvation-of-non-christians` | Adequate | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | The Eucharist is only a symbol. | `real-presence` | Strong | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | The Mass sacrifices Jesus again and again. | `mass-as-sacrifice` | Strong | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | Infant Baptism is unbiblical. | `infant-baptism` | Strong | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | Baptism is only a symbol, and only immersion counts. | `baptism` | Strong | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | Repeated prayers like the Rosary go against Jesus' teaching. | `the-rosary` | Adequate | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | Jesus forbade calling priests ‘Father.’ | `bishops-priests-deacons` | Strong | Directly answered in the topic text or its objections section. |
| The Mass, sacraments, and practices | The Catholic Church has too many rules. | `after-becoming-catholic` | Adequate | 'Too many rules?' paragraph: the precepts as an 'indispensable minimum' (CCC 2041) and the New Law of love (CCC 1972). |
| Church history and credibility | The Catholic Church departed from original Christianity. | `early-church` | Strong | Directly answered in the topic text or its objections section. |
| Church history and credibility | Constantine founded the Catholic Church, and it adopted pagan practices. | `early-church` | Strong | Directly answered in the topic text or its objections section. |
| Church history and credibility | The Council of Nicaea invented the divinity of Jesus. | `council-of-nicaea` | Adequate | Directly answered in the topic text or its objections section. |
| Church history and credibility | The Church has changed its doctrines over time. | `what-is-dogma` | Adequate | 'Hasn't the Church changed its doctrines?' answered with development of doctrine. |
| Church history and credibility | How can I trust a Church whose leaders covered up abuse? | `what-is-the-church` | Strong | Abuse: reworded as a question of trust; the topic opens with harm to survivors, accountability, and reporting routes (U.S. and elsewhere). Personal relationship: answered explicitly (CCC 181; 1 John 1:3; Acts 2:42). |
| Church history and credibility | A personal relationship with Jesus makes the Church unnecessary. | `what-is-the-church` | Strong | Abuse: reworded as a question of trust; the topic opens with harm to survivors, accountability, and reporting routes (U.S. and elsewhere). Personal relationship: answered explicitly (CCC 181; 1 John 1:3; Acts 2:42). |
| Church history and credibility | Why believe the Catholic Church is the Church Jesus founded? | `did-jesus-found-a-church` | Strong | Directly answered in the topic text or its objections section. |
| Church history and credibility | Why become Catholic rather than Eastern Orthodox? | `catholic-and-orthodox-differences` | Adequate | Overview with Akin resource; depth in great-schism, peter-the-rock, papal-infallibility. |
| Questions about God and Christianity | There is no evidence that God exists. | `does-god-exist` | Strong | Directly answered in the topic text or its objections section. |
| Questions about God and Christianity | Jesus never claimed to be God. | `divinity-of-jesus` | Strong | Directly answered in the topic text or its objections section. |
| Questions about God and Christianity | The Trinity is a man-made doctrine. | `trinity-in-scripture` | Strong | Four traditions answered; pre-Nicene witnesses added (Didache 7, Theophilus, Tertullian). |
| Questions about God and Christianity | Science contradicts Christianity. | `faith-and-science` | Adequate | Directly answered in the topic text or its objections section. |
| Questions about God and Christianity | A loving God would not allow suffering. | `problem-of-evil` | Strong | Nine-paragraph explanation added: logical and evidential forms, freedom, natural evil, providence, Job, the Cross, limits of knowledge, pastoral guidance. |
| Questions about God and Christianity | All religions lead to God. | `do-all-religions-lead-to-god` | Adequate | Directly answered in the topic text or its objections section. |
| Questions about God and Christianity | Catholic moral teaching is out of step with modern society. | `how-catholics-decide-right-and-wrong` | Adequate | Natural law and conscience; the 'out of step' framing is addressed indirectly. |
