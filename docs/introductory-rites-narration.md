# Introductory Rites: Narration Script and Running Order (Milestone 8A)

Status: **approved for Phase 8B-1** (with the review corrections: eight wording fixes; the entrance made specific to the simulated scene; no implied audible hymn; the Collect tied to the liturgical day; the simulated Ordinary Time Sunday distinguished throughout from other valid options). Narration and cleared responses may be recorded. LICENSING PENDING lines are never synthesized. The app's copy of the narrator lines is in `content/experience.ts`; `npm test` checks that the two match. Scope: the eight Introductory Rites moments of `docs/mass-curriculum.md` §3, in the order and with the titles of `INTRODUCTORY_RITES` in `content/mass.ts`. It follows straight on from Before Mass, which ends: "Let's stand, and begin."

**Path shown.** A typical Sunday in Ordinary Time (`TYPICAL_PATH` in `content/mass.ts`): the Penitential Act in its first form (the "I confess" prayer), then the Kyrie, then the Gloria. Other forms and seasonal changes are named in the narration and in Learn more; none is presented as the only valid version.

---

## 1. How to read this script

Every line has a role:

| Label | Meaning | Recorded by |
|---|---|---|
| **NARRATOR** | Original educational narration, written for this app. Never presented as liturgical text. Final wording for review. | The existing English narrator (`en-US-marin`), as in Before Mass |
| **PRIEST** / **LEADER** | Words of the liturgy spoken by the priest, or by the priest or a cantor (Kyrie). | The existing simulated priest voice (`onyx`) |
| **PEOPLE** | Words of the liturgy said by the congregation. | A simulated congregation of several AI voices (§5) |
| **ALL** | Words said by priest and people together. | Priest voice plus the congregation |
| **[STAGE]** | What happens, what is seen, posture, and silence. Not spoken. | Scene, caption, and posture chip |

Each liturgical line also has a text status (codes as in `docs/mass-curriculum.md` §0):

- **CLEARED:** the exact words may be used. Only *Amen / Amén*, the Greek *Kyrie, eleison / Christe, eleison*, and the Trinitarian invocation (README, licensing item 2).
- **LICENSING PENDING:** official ICEL English or *Misal Romano* Spanish wording. The words are **not written here**; the line names where they are found. These lines will not be recorded, and must not be replaced by a paraphrase presented as the liturgy, until the questions in §7 are settled.
- **PROPER (changes daily) + LICENSING PENDING:** texts that change every Sunday, such as the Collect.
- **MUSIC PENDING:** sung music needs a performance and (usually) a music license.

**Design rule.** The narrator speaks only *between* liturgical units, never over a prayer. In a real Mass there is no narrator. Here the simulation briefly holds the action to explain it, and the narration says so once (moment 1).

---

## 2. Running order at a glance

| # | Moment (`content/mass.ts` id) | Beats | Pending items |
|---|---|---|---|
| 1 | Entrance Procession (`entrance`) | stage · narrator · hymn | entrance hymn (music) |
| 2 | Reverence to the Altar (`reverence`) | stage · narrator | none |
| 3 | Sign of the Cross (`sign-of-the-cross`) | narrator · priest · people · narrator | none (all cleared) |
| 4 | Greeting (`greeting`) | narrator · priest · people · narrator | priest's greeting; people's reply |
| 5 | Penitential Act (`penitential-act`) | narrator · priest · silence · all · priest · people · narrator | invitation; Confiteor; absolution prayer |
| 6 | Kyrie (`kyrie`) | narrator · leader/people ×3 · narrator | none (all cleared) |
| 7 | Gloria (`gloria`) | narrator · all · narrator | Gloria (text and music) |
| 8 | Collect (`collect`) | narrator · priest · silence · priest · people · narrator | invitation; the Collect |

---

## 3. The script

### 1. Entrance Procession

**[STAGE]** The opening hymn begins. Everyone stands. Scene: the procession coming up the center aisle, in the same church as Before Mass (§6). Posture chip: **Stand**.

**MUSIC PENDING:** entrance hymn or chant. Choices are in §7, question 7. Until resolved, the narration plays over a quiet scene, with no invented music.

> **NARRATOR:** In our simulated Mass, a Sunday in Ordinary Time, the opening hymn now begins and everyone stands. You won't hear the music here; at a real Mass, the whole church would be singing. This is the Entrance Procession, and with it, Mass begins.
>
> **NARRATOR:** In this church, a server leads with the cross, with candles on either side, and a reader carries the Book of the Gospels. The priest comes last. Processions differ from parish to parish: some are simpler, and when a deacon is present, he carries the Book of the Gospels.
>
> **NARRATOR:** Why a procession? The Church is a people on a journey toward God, and Christ, shown by the cross, leads the way. Singing together gathers many voices into one.
>
> **NARRATOR:** At Mass, sing if you can; the hymn is usually listed in the worship aid or on a board near the front. From here on, we'll pause the action now and then to explain what you're seeing. At a real Mass, of course, no one narrates.

**Learn more** (from `content/mass.ts`, entrance `deeper` and `variations`):

- The four purposes of the entrance chant.
- If there is no singing, the entrance antiphon is recited.
- At smaller Masses the procession may be short.
- Not every parish carries the Book of the Gospels; when a deacon is present, he carries it.

---

### 2. Reverence to the Altar

**[STAGE]** The procession reaches the sanctuary. All bow deeply to the altar; the priest (and deacon) kiss it. The hymn continues. Posture chip: **Stand**.

> **NARRATOR:** At the front, the priest and the ministers bow deeply to the altar. Then the priest, and the deacon if there is one, kisses it.
>
> **NARRATOR:** Remember, the altar is a sign of Christ himself, and the table where his sacrifice will be made present. The kiss is a greeting of love and reverence.
>
> **NARRATOR:** At some Masses, the priest also incenses the altar and the cross; there's no incense at the Mass we're simulating. The rising smoke is a picture of our prayer rising to God.
>
> **NARRATOR:** Meanwhile, the people keep standing, and the singing continues. Only the ministers make this gesture.

**Learn more** (`content/mass.ts`, reverence):

- The altar as a sign of Christ; the kiss; incense and Psalm 141.
- Where the tabernacle is in the sanctuary, the ministers genuflect to it as they arrive. Our church keeps it in a side chapel.

---

### 3. Sign of the Cross

**[STAGE]** The hymn ends. The priest stands at his chair. Posture chip: **Make the Sign of the Cross**.

> **NARRATOR:** When the hymn ends, the priest goes to his chair. Now everyone makes the Sign of the Cross together, as he says the opening words.
>
> **PRIEST** · CLEARED: *"In the name of the Father, and of the Son, and of the Holy Spirit."* / *"En el nombre del Padre, y del Hijo, y del Espíritu Santo."* The recording already exists (Milestone 6A).
>
> **PEOPLE** · CLEARED: *"Amen."* / *"Amén."*
>
> **NARRATOR:** That Amen is the people's first spoken response at Mass. It means, "Yes, it is so." You'll say it again and again, and each time you make the prayer your own.

**Learn more** (`content/mass.ts`, sign-of-the-cross): Baptism in the name of the Trinity (Matthew 28:19); the meaning of Amen.

---

### 4. Greeting

**[STAGE]** The priest extends his hands toward the people. Posture chip: **Stand**.

> **NARRATOR:** Next, the priest opens his hands and greets everyone, wishing them the Lord's grace and presence. The people answer him together.
>
> **PRIEST** · LICENSING PENDING: **the Greeting.** *The Roman Missal*, Order of Mass, Introductory Rites. The priest chooses one of the Missal's greetings, drawn from Scripture (for example 2 Corinthians 13:13); a bishop has his own. The text is not reproduced.
>
> **PEOPLE** · LICENSING PENDING: **the people's reply** to the Greeting. Same source; the U.S. *Misal Romano* has its own Spanish wording. The text is not reproduced.
>
> **NARRATOR:** The priest's words come from Scripture, often from the letters of Saint Paul. The Missal offers him several greetings, so what you hear may vary. The people's reply is usually printed in the worship aid.
>
> **NARRATOR:** This exchange is more than "good morning." It declares that Christ is present among his gathered people. Many understand the people's reply as a prayer for the priest himself, and for the gift of the Holy Spirit he received at his ordination.
>
> **NARRATOR:** Sometimes the priest, a deacon, or another minister then says a few words to introduce the Mass of the day.

**[STAGE]** The optional introduction is **not voiced**: it is spoken in the minister's own words, and the app must not invent priestly speech.

**Learn more** (`content/mass.ts`, greeting): the scriptural sources (2 Corinthians 13:13; Ruth 2:4; Luke 1:28); the several greetings; the optional introduction.

---

### 5. Penitential Act

**[STAGE]** Everyone remains standing. Posture chip: **Stand**.

> **NARRATOR:** Now we prepare our hearts. Before hearing God's word and celebrating the Eucharist, we admit honestly that we are sinners who need his mercy.
>
> **NARRATOR:** In the form used today, the priest invites everyone to call their sins to mind. After a short silence, all pray a confession together, to God and to one another. At the words that admit our own fault, many people strike their breast.
>
> **PRIEST** · LICENSING PENDING: **invitation to the Penitential Act.** *The Roman Missal*, Order of Mass. Not reproduced.

**[STAGE]** Silence, about 5 seconds. Caption: "Silence. Call your sins to mind." No narration.

> **ALL** · LICENSING PENDING: **the Confiteor** ("I confess"), said by priest and people together. *The Roman Missal*, Order of Mass, Penitential Act, form A. Not reproduced. **[STAGE]** Posture chip: **Strike the breast** at the words admitting one's own fault.
>
> **PRIEST** · LICENSING PENDING: **the prayer for mercy** ("absolution" of the Penitential Act). *The Roman Missal*, Order of Mass. Not reproduced.
>
> **PEOPLE** · CLEARED: *"Amen."* / *"Amén."*
>
> **NARRATOR:** That prayer asks God's mercy for all of us. It isn't the Sacrament of Confession, which Catholics need for serious sins. It prepares us to celebrate.
>
> **NARRATOR:** This was one of several forms of the Penitential Act, all of them valid. The priest may instead use a short exchange of verses, or a series of invocations to Christ, each answered with a plea for mercy. And on some Sundays, especially in Easter Time, he blesses water and sprinkles the people instead, recalling their Baptism.

**Learn more** (`content/mass.ts`, penitential-act):

- The tax collector of Luke 18:13.
- The priest's closing prayer is not sacramental absolution.
- The three forms, and the Rite of Blessing and Sprinkling of Water (Roman Missal, Appendix II).

---

### 6. Kyrie

**[STAGE]** Standing. Posture chip: **Stand · repeat after the leader**. Captions show each line with its meaning.

> **NARRATOR:** Next comes the Kyrie, one of the oldest prayers of the Mass. The priest or a cantor says or sings each line, and everyone repeats it. In our simulated Mass, it's said in the original Greek.
>
> **LEADER** · CLEARED: *"Kyrie, eleison."*
>
> **PEOPLE** · CLEARED: *"Kyrie, eleison."*
>
> **LEADER** · CLEARED: *"Christe, eleison."*
>
> **PEOPLE** · CLEARED: *"Christe, eleison."*
>
> **LEADER** · CLEARED: *"Kyrie, eleison."*
>
> **PEOPLE** · CLEARED: *"Kyrie, eleison."*
>
> **NARRATOR:** Kyrie, eleison means "Lord, have mercy." Christe, eleison means "Christ, have mercy." It both praises the Lord and asks his mercy: a cry of trust.
>
> **NARRATOR:** Many parishes sing it in English or Spanish instead, and some musical settings repeat each line more often. It's left out when the invocations to Christ were already used, or after the sprinkling with water.

**[STAGE]** The lines are **said**, not sung (the voices cannot chant). The narration says "says or sings", and Learn more notes that it is usually sung. Pronunciation follows the hint already used for the narrator (KEE-ree-eh, eh-LAY-ee-sohn; KREE-steh).

**Learn more** (`content/mass.ts`, kyrie): Greek kept in the Latin liturgy; the blind men of Matthew 20:30; the conditions under which it is omitted.

---

### 7. Gloria

**[STAGE]** Standing. Posture chip: **Stand · bow the head at the name of Jesus**.

> **NARRATOR:** Because this is a Sunday in Ordinary Time, everyone now joins in the Gloria, an ancient hymn of praise.
>
> **NARRATOR:** It opens with the song the angels sang at Jesus' birth. Then it praises God the Father. It calls on Jesus as the Lamb of God, who takes away the sins of the world, and it gives glory to the Holy Spirit.
>
> **ALL** · LICENSING PENDING / MUSIC PENDING: **the Gloria.** *The Roman Missal*, Order of Mass (English ICEL; Spanish *Misal Romano*). Usually sung. Neither the text nor a musical setting is reproduced (§7, questions 1, 4, and 7).
>
> **NARRATOR:** There's no back-and-forth here: it's one hymn, sung by everyone together, alternating with the choir, or said aloud. Its words are fixed, so no other song may replace it. If it's new to you, follow along in the worship aid, or simply listen and pray in your heart.
>
> **NARRATOR:** Many people bow their head when the name of Jesus is sung. The Gloria belongs to Sundays outside Advent and Lent and to great feasts. In Advent and Lent it's left out, so it can ring out with fresh joy at Christmas and Easter.

**Learn more** (`content/mass.ts`, gloria): Luke 2:14; sung since at least the fourth century; the fixed text; the ways it may be sung or recited.

---

### 8. Collect

**[STAGE]** Standing. Posture chip: **Stand**, changing to **Sit** after the Amen.

> **NARRATOR:** Now the priest invites everyone to pray, and then he pauses. Use that silence. Bring God your own intentions: the people you love, your worries, your thanks.
>
> **PRIEST** · LICENSING PENDING: **the invitation to pray** (three words in English). *The Roman Missal*, Order of Mass. Possibly free as a short phrase; see §7, question 3. Not reproduced until decided.

**[STAGE]** Silence, about 6 seconds. Caption: "Silence. Bring your own intentions to God." No narration. The priest extends his hands.

> **PRIEST** · PROPER (changes daily) + LICENSING PENDING: **the Collect of the day**, with its Trinitarian conclusion. *The Roman Missal*, Proper of Time (the Collect itself) and the standard conclusions. Not reproduced. A specific Sunday must be chosen if a licensed Collect is used (§7, question 5).
>
> **PEOPLE** · CLEARED: *"Amen."* / *"Amén."*
>
> **NARRATOR:** That prayer is called the Collect, because it gathers everyone's prayers into one. Its words follow the liturgical day: each Sunday, feast, and season has its own Collect.
>
> **NARRATOR:** With that Amen, the Introductory Rites are complete. Everyone sits down, ready to listen to the word of God.

**[STAGE]** Posture chip: **Sit**. Then the end screen ("The guided Mass pauses here for now"), updated to say the Introductory Rites are complete and that the Liturgy of the Word is being prepared. Nothing from the Liturgy of the Word is included.

**Learn more** (`content/mass.ts`, collect): "Collect" means gathering; the prayer addresses the Father, through Christ, in the Holy Spirit; the silence is part of the prayer; only one Collect is said at each Mass.

---

## 4. Narration transcript (narrator lines only, in order)

The words the narrator records. They are assembled from §3 and must stay identical to it.

**1. Entrance Procession**

In our simulated Mass, a Sunday in Ordinary Time, the opening hymn now begins and everyone stands. You won't hear the music here; at a real Mass, the whole church would be singing. This is the Entrance Procession, and with it, Mass begins.

In this church, a server leads with the cross, with candles on either side, and a reader carries the Book of the Gospels. The priest comes last. Processions differ from parish to parish: some are simpler, and when a deacon is present, he carries the Book of the Gospels.

Why a procession? The Church is a people on a journey toward God, and Christ, shown by the cross, leads the way. Singing together gathers many voices into one.

At Mass, sing if you can; the hymn is usually listed in the worship aid or on a board near the front. From here on, we'll pause the action now and then to explain what you're seeing. At a real Mass, of course, no one narrates.

**2. Reverence to the Altar**

At the front, the priest and the ministers bow deeply to the altar. Then the priest, and the deacon if there is one, kisses it.

Remember, the altar is a sign of Christ himself, and the table where his sacrifice will be made present. The kiss is a greeting of love and reverence.

At some Masses, the priest also incenses the altar and the cross; there's no incense at the Mass we're simulating. The rising smoke is a picture of our prayer rising to God.

Meanwhile, the people keep standing, and the singing continues. Only the ministers make this gesture.

**3. Sign of the Cross**

When the hymn ends, the priest goes to his chair. Now everyone makes the Sign of the Cross together, as he says the opening words.

That Amen is the people's first spoken response at Mass. It means, "Yes, it is so." You'll say it again and again, and each time you make the prayer your own.

**4. Greeting**

Next, the priest opens his hands and greets everyone, wishing them the Lord's grace and presence. The people answer him together.

The priest's words come from Scripture, often from the letters of Saint Paul. The Missal offers him several greetings, so what you hear may vary. The people's reply is usually printed in the worship aid.

This exchange is more than "good morning." It declares that Christ is present among his gathered people. Many understand the people's reply as a prayer for the priest himself, and for the gift of the Holy Spirit he received at his ordination.

Sometimes the priest, a deacon, or another minister then says a few words to introduce the Mass of the day.

**5. Penitential Act**

Now we prepare our hearts. Before hearing God's word and celebrating the Eucharist, we admit honestly that we are sinners who need his mercy.

In the form used today, the priest invites everyone to call their sins to mind. After a short silence, all pray a confession together, to God and to one another. At the words that admit our own fault, many people strike their breast.

That prayer asks God's mercy for all of us. It isn't the Sacrament of Confession, which Catholics need for serious sins. It prepares us to celebrate.

This was one of several forms of the Penitential Act, all of them valid. The priest may instead use a short exchange of verses, or a series of invocations to Christ, each answered with a plea for mercy. And on some Sundays, especially in Easter Time, he blesses water and sprinkles the people instead, recalling their Baptism.

**6. Kyrie**

Next comes the Kyrie, one of the oldest prayers of the Mass. The priest or a cantor says or sings each line, and everyone repeats it. In our simulated Mass, it's said in the original Greek.

Kyrie, eleison means "Lord, have mercy." Christe, eleison means "Christ, have mercy." It both praises the Lord and asks his mercy: a cry of trust.

Many parishes sing it in English or Spanish instead, and some musical settings repeat each line more often. It's left out when the invocations to Christ were already used, or after the sprinkling with water.

**7. Gloria**

Because this is a Sunday in Ordinary Time, everyone now joins in the Gloria, an ancient hymn of praise.

It opens with the song the angels sang at Jesus' birth. Then it praises God the Father. It calls on Jesus as the Lamb of God, who takes away the sins of the world, and it gives glory to the Holy Spirit.

There's no back-and-forth here: it's one hymn, sung by everyone together, alternating with the choir, or said aloud. Its words are fixed, so no other song may replace it. If it's new to you, follow along in the worship aid, or simply listen and pray in your heart.

Many people bow their head when the name of Jesus is sung. The Gloria belongs to Sundays outside Advent and Lent and to great feasts. In Advent and Lent it's left out, so it can ring out with fresh joy at Christmas and Easter.

**8. Collect**

Now the priest invites everyone to pray, and then he pauses. Use that silence. Bring God your own intentions: the people you love, your worries, your thanks.

That prayer is called the Collect, because it gathers everyone's prayers into one. Its words follow the liturgical day: each Sunday, feast, and season has its own Collect.

With that Amen, the Introductory Rites are complete. Everyone sits down, ready to listen to the word of God.

---

## 5. Simulated congregation (plan only; nothing generated)

- **Lines:**
  - *Amen / Amén* three times: after the Sign of the Cross, the prayer for mercy, and the Collect;
  - *Kyrie, eleison* twice and *Christe, eleison* once, in Greek, the same in every language mode;
  - later, once licensed, the reply to the Greeting, the Confiteor, and the Gloria.
- **Voices:** 5 or 6 different AI voices of mixed timbre (for example `alloy`, `ash`, `coral`, `sage`, `verse`, `ballad`), each told to speak the line as one member of a congregation: calm, not performed. Spanish *Amén* uses the same voices with a Spanish instruction.
- **Mixing:**
  - Each voice is requested as raw audio (`pcm`, 24 kHz mono). A short Node step in `scripts/generate-narration.mjs` mixes them into one WAV file with no new tools or dependencies.
  - Each voice gets a small random start offset (0–150 ms) and a slightly different level, so the result sounds like a room rather than a choir.
  - Levels are normalized to match the priest and narrator.
  - The mix is one file per line, about 1–2 s each.
- **Checking:** each mixed file is transcribed once with the existing check. It must contain the expected word or words, and its duration goes into `content/narration-timings.json` for the timeline.
- **Disclosure:** the caption label for these lines reads "People (simulated congregation, AI voices)". The existing on-screen disclosure ("AI-generated voices… not a celebration of Mass") already covers it.
- **Leader:** the Kyrie leader uses the existing priest voice. A separate cantor voice could be added later if wanted.
- **Deadline:** OpenAI's text-to-speech models shut down on **January 6, 2027**. All recordings, including these, must be made before then, or after choosing a new provider.

---

## 6. Scenes and posture (for 8B)

| Moment | Scene plan | Posture chip(s) |
|---|---|---|
| Entrance | **New cinematic image needed:** the procession in the B1–B5 church (cross, candles, reader, priest last). Until then, a labeled placeholder. `entrance-procession.webp` is flagged High (`docs/illustrations.md` §8). | Stand |
| Reverence | `altar-reverence.webp` (accurate, but a different church), or a new image | Stand |
| Sign of the Cross | `sign-of-the-cross.webp` (accurate, different church), or a new image | Make the Sign of the Cross |
| Greeting | `opening-greeting.webp` (accurate, different church), or a new image | Stand |
| Penitential Act | **New image needed:** people standing, heads bowed, hands joined; priest at the chair with hands joined. `congregation-prayer.webp` is flagged High (raised hands; priest's hands wrongly extended). | Stand → Strike the breast (at the Confiteor) |
| Kyrie | **New image needed:** a cantor at the music stand; people standing, hands joined. | Stand · repeat after the leader |
| Gloria | **New image needed:** people singing from the worship aid; choir. | Stand · bow at the name of Jesus |
| Collect | `collect.webp` (accurate, different church), or a new image | Stand → Sit |

**Recommendation:** commission one consistent Introductory Rites set in the B1–B5 church, for all eight moments.

---

## 7. Licensing inventory and unresolved questions

**Update (private-use scope):** the project is private and personal, and is not distributed. Lines marked L or V below are no longer blocked. Their official wording is supplied by the owner into the git-ignored `public/local/liturgical-texts.json` and recorded only into `public/local/`; it never goes into a tracked file. The status codes still describe the rights position. Private use is not itself a permission. See README, "Liturgical text and licensing questions (private use)", for the rights inventory and the open legal questions. The example Sunday is the Fifteenth Sunday in Ordinary Time (Year B).

### Inventory of liturgical texts in the Introductory Rites

| # | Text | Who says it | Source | Status |
|---|---|---|---|---|
| 1 | Entrance chant or hymn | All (choir) | Music publishers; or the entrance antiphon (*Missal* / *Graduale Romanum*) | MUSIC PENDING; antiphon PROPER + LICENSING PENDING |
| 2 | Trinitarian invocation | Priest | Order of Mass (wording identical to public-domain texts) | **CLEARED** (recorded) |
| 3 | *Amen* (×3 in this script) | People | — | **CLEARED** |
| 4 | Greeting (three forms; a bishop's form) | Priest | Order of Mass, Introductory Rites | LICENSING PENDING |
| 5 | Reply to the Greeting | People | Order of Mass | LICENSING PENDING |
| 6 | Optional introduction to the Mass of the day | Priest, deacon, or minister | Free words, not a fixed text | Not voiced (must not be invented) |
| 7 | Invitation to the Penitential Act | Priest | Order of Mass | LICENSING PENDING |
| 8 | Confiteor (form A) | All | Order of Mass | LICENSING PENDING |
| 9 | Prayer for mercy after the Penitential Act | Priest | Order of Mass | LICENSING PENDING |
| 10 | Forms B and C; invocations (Missal, Appendix VI) | Priest and people | Order of Mass; Appendix VI | Mentioned only; LICENSING PENDING if ever voiced |
| 11 | Rite of Blessing and Sprinkling of Water, and its chants | Priest; choir | Missal, Appendix II; Latin chants such as *Asperges me* / *Vidi aquam* | Mentioned only; the Latin chant texts are possibly free |
| 12 | *Kyrie, eleison / Christe, eleison* (Greek) | Leader and people | — | **CLEARED** |
| 13 | Kyrie in English or Spanish translation | Leader and people | Order of Mass | LICENSING PENDING; mentioned only |
| 14 | Gloria | All | Order of Mass (English ICEL; Spanish *Misal Romano*); Latin original | LICENSING PENDING; Latin possibly free (question 4); MUSIC PENDING |
| 15 | Invitation to pray (three words in English) | Priest | Order of Mass | LICENSING PENDING; possibly free (question 3) |
| 16 | Collect of the day | Priest | Missal, Proper of Time | PROPER + LICENSING PENDING |
| 17 | Collect conclusion (longer Trinitarian ending) | Priest | Missal | LICENSING PENDING |

### Unresolved questions

1. **English permission (ICEL).** Will ICEL grant a free educational app permission to display, and to **voice with AI**, items 4, 5, 7, 8, 9, 14, 15, and 17? ICEL's policy lists "electronic media" among publications subject to royalties and gives no app guidance (icelweb.org/copyright.htm). Points to settle:
   - fees;
   - the acknowledgment required (for example "Excerpts from the English translation of *The Roman Missal* © 2010, ICEL. All rights reserved.");
   - whether AI-voiced recordings need separate approval;
   - whether a parish or diocese must sponsor the request.
2. **Spanish permission.**
   - The U.S. *Misal Romano, tercera edición* (2018): confirm all the rights holders. The USCCB, and possibly the Mexican bishops' conference or its publisher, for the translation.
   - Confirm which text the app follows.
   - Confirm the reply to the Greeting and the other people's parts word for word from a printed copy.
3. **Short phrases.** Is the three-word invitation to pray free to use as a short phrase, or should it be covered by the license? Its Latin, *Oremus*, is ancient. The same question applies to the English and Spanish Kyrie (item 13), if ever wanted.
4. **Latin as an alternative.** Should Latin be used, as a public-domain fallback or as an option, for the Greeting dialogue and the Gloria? This is decision P4 in the curriculum. Latin is a legitimate language of the Ordinary Form, but most U.S. parishes use English or Spanish, so it would need a clear explanation.
5. **The Collect.** If licensed, which Sunday's Collect should be used? (The scenes show Ordinary Time.) Or should the Collect stay **not voiced**, since it changes weekly, with only the invitation, silence, conclusion, and Amen voiced?
6. **Interim experience.** Until permission is granted, what should 8B do at each LICENSING PENDING line? Choose one:
   - **(a)** a labeled description caption over a short silence ("The priest greets the people. Official words pending permission.");
   - **(b)** skip the line, so the narration carries the moment;
   - **(c)** wait to build 8B until permission is settled.

   This script deliberately leaves the choice open, as requested.
7. **Music.** For the entrance hymn and a sung Gloria, choose one:
   - **(a)** no music; narration only;
   - **(b)** public-domain chant (for example a Gregorian Gloria) performed and recorded, by a human or a licensed voice-singing tool, which current text-to-speech cannot do;
   - **(c)** a licensed recording from a music publisher (OneLicense, CCLI) covering app use.
8. **Recordings of official texts as "electronic media".** Even with text permission, does recording and distributing those texts in audio form require a separate agreement or royalty?

---

## 8. Content requiring review

**For a priest or liturgist:**

1. Moment 1, the narrator's explanation that the simulation pauses the action to explain, and that "no one narrates" at a real Mass.
2. Moment 4: "Many understand the people's reply as a prayer for the priest himself, and for the gift of the Holy Spirit he received at his ordination." This is a common interpretation, not a definition.
3. Moment 5: "It is not the Sacrament of Confession, which forgives serious sins." Confirm the wording; mortal sin is forgiven in the Sacrament of Penance.
4. Moment 5: the striking of the breast. The Missal's rubric is followed "at the words admitting our own fault". Confirm before showing a chip.
5. Moment 6: a spoken (not sung) Kyrie in Greek, led by the priest voice; the pronunciation.
6. Moment 7: the bow at the name of Jesus (GIRM 275a covers the bow of the head at the name of Jesus).
7. **Pastoral acceptability of AI voices** for the priest and for a simulated congregation saying liturgical responses.
8. Moment 8: "Everyone sits down" after the Collect. Correct per GIRM 43; the first reading follows.

**For a catechist:** the overall tone for newcomers, and the Penitential Act's emphasis on mercy rather than guilt.

---

## 9. Estimated timing (narration only)

| Moment | Narrator words | Paragraphs | At 150 wpm | At 165 wpm |
|---|---|---|---|---|
| 1. Entrance Procession | 167 | 4 | 1:07 | 1:01 |
| 2. Reverence to the Altar | 100 | 4 | 0:40 | 0:36 |
| 3. Sign of the Cross | 56 | 2 | 0:22 | 0:20 |
| 4. Greeting | 118 | 4 | 0:47 | 0:43 |
| 5. Penitential Act | 150 | 4 | 1:00 | 0:55 |
| 6. Kyrie | 96 | 3 | 0:38 | 0:35 |
| 7. Gloria | 153 | 4 | 1:01 | 0:56 |
| 8. Collect | 74 | 3 | 0:30 | 0:27 |
| **All eight** | **914** | | **6:06** | 5:32 |

Plus about 0.5 s between paragraphs and 1 s between beats (about 40 s in all).

**Additional, once audio exists:**

- Cleared liturgical audio: the invocation (about 5 s), three *Amen*s (about 1.5 s each), six Kyrie lines (about 2 s each), together about 22 s.
- Two silences (5 s and 6 s).
- LICENSING PENDING items, if later recorded: Greeting and reply (about 8 s), invitation (about 4 s), Confiteor (about 35 s), prayer for mercy (about 10 s), Gloria said (about 75 s; sung, 2–3 minutes), invitation to pray (about 2 s), Collect and conclusion (about 30 s). Together roughly **3–4 minutes**.

---

## 10. Phase 8B mapping (for reference; not implemented)

- **Order and titles:** each moment keeps its `content/mass.ts` id and title, so the chapter list and Learn more stay sourced from `INTRODUCTORY_RITES`.
- **Beats:**
  - Each NARRATOR block becomes a narrated beat: one recording, captions sentence by sentence, using the same machinery as Before Mass.
  - Each PRIEST, LEADER, PEOPLE, or ALL line becomes one short beat.
  - Each [STAGE] silence becomes a timed beat.
- **Chapters:** a chapter jumps to its moment's first beat. The timeline marks every moment's beginning, as now.
- **Tests:** `npm test` checks that the app's copy of the narrator lines matches §4.
