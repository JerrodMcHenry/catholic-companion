# Catholic Companion: Complete Mass Curriculum (Milestone 6B blueprint)

Status: **draft for approval.** Nothing in the app has been changed for this milestone.

This is the content plan for the whole of an ordinary Sunday Mass in the United States: the Ordinary Form of the Roman Rite, celebrated with the *Roman Missal, Third Edition* in English (ICEL translation, 2010/2011) or the *Misal Romano, tercera edición* in Spanish (approved for the U.S., 2018). It is written for someone who has never been to Mass, and for OCIA participants.

It is a planning document, not app content. App text is written from it later and then reviewed (see §9).

---

## 0. How to read this document

### Text status codes

Every spoken part of the Mass is marked with one of these codes. **No official translation is quoted in this document.** Official words are named by where they are found, with a plain description in our own words.

| Code | Meaning | May the app use the exact words? |
|---|---|---|
| **C** | Cleared and already used in the app: *Amen / Amén*, *Kyrie, eleison / Christe, eleison*, and the Trinitarian invocation at the Sign of the Cross (basis in README, licensing item 2). | Yes |
| **P** | Probably free, but needs a recorded decision before use. Examples: Hebrew and Greek acclamations (*Alleluia*, *Hosanna*); the ancient Latin texts of the Order of Mass; short three-word formulas such as the words said as Communion is given; Scripture in public-domain translations. | Not until decided |
| **L** | Official ICEL English or *Misal Romano* Spanish wording. | Only with a license from ICEL (English) and the USCCB and other rights holders (Spanish). Until then: description only. |
| **V** | Variable proper texts that change every day: readings, psalms, Collects, prefaces, prayers. These also come from the *Lectionary for Mass* (NABRE-based, USCCB) and the *Leccionario*. | Not as fixed text. Describe the type of text instead. |
| **—** | Nothing is said by the people (silence, gesture, or listening). | — |

### Abbreviations

- **GIRM:** *General Instruction of the Roman Missal* (U.S. edition, 2011), cited by paragraph number.
- **OM:** *Order of Mass* in the Roman Missal, cited by section. Paragraph numbers still need checking against a printed Missal (README, licensing item 3).
- **CCC:** *Catechism of the Catholic Church*.
- **CIC:** *Code of Canon Law* (1983).
- **SC:** *Sacrosanctum Concilium*. **DV:** *Dei Verbum*. **LG:** *Lumen Gentium*. **RS:** *Redemptionis Sacramentum*.
- **LMI:** *Lectionary for Mass*, Introduction.
- **OCIA:** *Order of Christian Initiation of Adults*.

Scripture is cited by reference only.

### Fields in each moment entry

- **Happens:** what happens.
- **Why:** why it happens.
- **You:** what the congregation does.
- **Words:** the people's spoken part and its status code.
- **Posture.**
- **Narrate:** a short beginner narration concept, in original words.
- **Deeper:** an optional deeper explanation.
- **Refs:** authoritative references.
- **Varies:** variations and conditions.
- **Needs:** visual scene, priest audio, response cue, and so on.

The **App** line shows whether the moment already exists in `content/mass.ts`.

---

## 1. The shape of the whole Mass

The Mass has two main parts, framed by an opening and a closing (CCC 1346; SC 56; GIRM 28):

1. **Introductory Rites:** we gather and prepare.
2. **Liturgy of the Word:** God speaks; we listen and respond.
3. **Liturgy of the Eucharist:** the offering, the great prayer of thanksgiving, and Holy Communion.
4. **Concluding Rites:** we are blessed and sent.

A useful thread for beginners, used again in the narration: the risen Jesus with the two disciples on the road to Emmaus (Luke 24:13–35). He first explains the Scriptures, then is known "in the breaking of the bread", and they go out to tell others. Word, then Eucharist, then mission.

The oldest outside description of this same shape comes from St. Justin Martyr, around AD 155 (*First Apology* 65–67, public domain; summarized in CCC 1345). That makes it good material for a "Go deeper" note.

---

## 2. Before Mass

| # | ID | Moment |
|---|---|---|
| B1 | `why-sunday` | Why Catholics gather on Sunday |
| B2 | `arriving` | Arriving and preparing |
| B3 | `holy-water` | Holy water and the Sign of the Cross |
| B4 | `genuflection` | Genuflecting toward the tabernacle |
| B5 | `quiet-prayer` | Finding a seat and praying quietly |
| B6 | `whos-who` | Who's who, and what the colors mean |

### B1. Why Catholics gather on Sunday (`why-sunday`)
App: new. Context only, no scene in Experience Mass.

- **Happens:** Catholics celebrate Mass every Sunday, the day of the Resurrection, called the Lord's Day. A Saturday evening Mass counts as Sunday's Mass.
- **Why:** Jesus rose on the first day of the week, and from the start Christians gathered on that day to break bread. The Eucharist is the "source and summit" of Christian life.
- **You:** Come as you are. Visitors are always welcome.
- **Words:** —
- **Posture:** —
- **Narrate:** "Sunday is the day Jesus rose from the dead, so Catholics gather every week to celebrate it together. You're welcome here, whether it's your first time or your thousandth."
- **Deeper:** The Sunday obligation; Saturday evening vigil Masses; holy days of obligation in the U.S. Mass is not a private devotion but the prayer of the whole Church.
- **Refs:** Acts 20:7; Revelation 1:10; CCC 1166–1167, 1324, 2174–2183; CIC 1247–1248; SC 10, 106; LG 11.
- **Varies:** Holy days of obligation (U.S. calendar, some transferred to Sunday).
- **Needs:** narration only (could use the exterior or nave scene).

### B2. Arriving and preparing (`arriving`)
App: new.

- **Happens:** People arrive a few minutes early, silence phones, and settle in. Many parishes offer Confession before Mass.
- **Why:** Quiet before Mass helps everyone turn from the week toward God.
- **You:**
  - Arrive early if you can.
  - Dress modestly and respectfully. Customs vary, and no one will turn you away.
  - Catholics who plan to receive Communion fast for one hour beforehand from food and drink. Water and medicine are allowed, and the elderly and sick are exempt.
- **Words:** —
- **Posture:** —
- **Narrate:** "Try to come a few minutes early. Turn off your phone and let the quiet of the church settle you."
- **Deeper:** The Eucharistic fast as bodily preparation; Confession before Mass for serious sin.
- **Refs:** CIC 919; CCC 1385, 1387.
- **Varies:** Confession times differ by parish.
- **Needs:** narration. Scene optional (church exterior or entrance).

### B3. Holy water and the Sign of the Cross (`holy-water`)
App: new.

- **Happens:** At the door there is a font of holy water. Catholics dip their fingers in it and make the Sign of the Cross.
- **Why:** It recalls Baptism, when we were washed and became members of the Church. It is a sacramental, a sacred sign.
- **You:** Catholics bless themselves. Visitors may do the same or simply walk past; either is fine.
- **Words:** —
- **Posture:** standing or walking.
- **Narrate:** "Near the door you'll see a bowl of holy water. Catholics touch it and make the Sign of the Cross, remembering their Baptism. If you're visiting, you're free to do the same or simply pass by."
- **Deeper:** Sacramentals; the Sign of the Cross (forehead, chest, left shoulder, right shoulder in the Latin Church).
- **Refs:** Romans 6:3–4; CCC 1185, 1667–1679, 2157.
- **Varies:** Fonts may be empty (for example in the days before Easter, or for health reasons).
- **Needs:** **new scene** (holy water font). Narration.

### B4. Genuflecting toward the tabernacle (`genuflection`)
App: new.

- **Happens:** Before entering the pew, Catholics genuflect: the right knee briefly touches the floor, facing the tabernacle.
- **Why:** The tabernacle holds the Blessed Sacrament. Catholics believe it is Jesus himself, truly present. A lit lamp (the sanctuary lamp) shows that he is there.
- **You:** Genuflect if you are able. If you can't kneel, a deep bow is the alternative. Visitors may simply enter quietly.
- **Words:** —
- **Posture:** genuflection, or a bow.
- **Narrate:** "Look for a lit candle near a small, beautiful box. That's the tabernacle. Catholics briefly kneel on the right knee toward it before taking their seat, because they believe Jesus is present there. If kneeling is hard, a bow is just as reverent."
- **Deeper:** Real Presence; why the gesture is a genuflection rather than a bow; reserving the Eucharist for the sick.
- **Refs:** Philippians 2:10; GIRM 274, 316; CCC 1183, 1378–1379.
- **Varies:** Where the tabernacle is placed. If it is not in the sanctuary, people bow to the altar instead.
- **Needs:** **new scene** (genuflection in the aisle, sanctuary lamp visible). Narration.

### B5. Finding a seat and praying quietly (`quiet-prayer`)
App: new.

- **Happens:** People kneel or sit in silent prayer. They find the hymnal or worship aid, which often holds the music, the people's responses, and the day's readings.
- **Why:** To prepare one's heart, and to pray for one's own intentions.
- **You:**
  - Pull down the kneeler if you'd like to kneel.
  - Open the worship aid to find the music and readings.
  - Keep conversation low; others may be praying.
- **Words:** —
- **Posture:** kneel or sit.
- **Narrate:** "Many people kneel and pray quietly before Mass begins. You can bring anything on your heart to God. The book in the pew will help you follow the songs and readings."
- **Deeper:** Silence in the liturgy (GIRM 45); praying for intentions.
- **Refs:** GIRM 45.
- **Varies:** Worship aids differ: missalettes, hymnals, screens, or none.
- **Needs:** **new scene** (kneeling in the pew, kneeler down). Narration.

### B6. Who's who, and what the colors mean (`whos-who`)
App: new. Orientation, optional.

- **Happens:**
  - The **priest** presides.
  - A **deacon** may assist, proclaim the Gospel, and preach.
  - **Altar servers** assist at the altar.
  - **Lectors** (readers) proclaim the first two readings.
  - A **cantor** leads the singing.
  - **Extraordinary ministers of Holy Communion** help distribute Communion.
  - **Ushers** welcome people, take the collection, and guide the Communion lines.
- **Why:** Each ministry serves the whole assembly; the liturgy is "the work of the people" (SC 14).
- **You:** Nothing to do; this is helpful background.
- **Words:** —
- **Posture:** —
- **Narrate:** "The priest leads the Mass, but many people help: readers, a cantor who leads the songs, servers at the altar, and ushers. The color the priest wears tells you the season of the Church's year."
- **Deeper:**
  - Colors (GIRM 346):
    - green: Ordinary Time
    - violet: Advent and Lent
    - white or gold: Christmas, Easter, and feasts of the Lord, Mary, and saints who were not martyrs
    - red: Palm Sunday, Good Friday, Pentecost, apostles, and martyrs
    - rose: optional on two Sundays, *Gaudete* (Advent) and *Laetare* (Lent)
  - Vestments: alb, stole, chasuble, and the deacon's dalmatic.
- **Refs:** SC 14, 28–29; GIRM 91–111, 335–347.
- **Varies:** Not every Mass has a deacon, servers, or a cantor.
- **Needs:** narration. Optional labeled illustration.

---

## 3. Introductory Rites

The purpose of the Introductory Rites is to make the gathered people one community and to prepare them to hear the Word and celebrate the Eucharist (GIRM 46).

| # | ID | Moment | App |
|---|---|---|---|
| I1 | `entrance` | Entrance Procession and Chant | exists |
| I2 | `reverence` | Reverence to the Altar | exists |
| I3 | `sign-of-the-cross` | Sign of the Cross | exists (practice + Experience) |
| I4 | `greeting` | Greeting | exists (response text blocked, **L**) |
| I5 | `penitential-act` | Penitential Act *or* Sprinkling Rite | exists (Sprinkling only mentioned) |
| I6 | `kyrie` | Kyrie | exists (practice) |
| I7 | `gloria` | Gloria | exists |
| I8 | `collect` | Collect | exists (practice) |

These eight are already written in `content/mass.ts`, each with an explanation, a "Go deeper" note, posture, references, and variations. Only the items still missing or worth flagging are listed below.

### I1. Entrance Procession and Chant (`entrance`)

- **Words:** sung hymn or chant. The text varies with the parish's music (copyright belongs to the music publisher, licensed through OneLicense or similar). If nothing is sung, the entrance antiphon is recited (**V**, **L**).
- **Posture:** stand.
- **Needs:** scene exists. Experience Mass has no music, so no hymn audio unless public-domain chant or a licensed hymn is chosen (see §6).

### I2. Reverence to the Altar (`reverence`)

Complete. The optional incensing is covered in the variations.

### I3. Sign of the Cross (`sign-of-the-cross`)

- **Words:** the priest's invocation (**C**); the people's *Amen* (**C**).
- **Posture:** stand, and sign yourself.
- Done in Experience Mass.

### I4. Greeting (`greeting`)

- **Words:** the priest chooses one of the greetings in the Missal (**L**; drawn from 2 Corinthians 13:13, Ruth 2:4 and others). The people's response is **L**: in English it echoes the greeting back to the priest's spirit, and Spanish has its own wording.
- **Open question already in README:** which Spanish missal the app follows, and whether a greeting has a different response (for example when a bishop presides).
- **Varies:** an optional brief introduction to the Mass of the day follows.
- **Needs:** scene exists. Priest audio and practice are blocked until the license question is settled.

### I5. Penitential Act or Sprinkling Rite (`penitential-act`)

- **Words:** there are three forms (OM; Missal, Appendix VI for form C invocations):
  - **Form A, the Confiteor** ("I confess"): said by all (**L**). Then the priest's prayer for mercy, ending with the people's *Amen* (**C**).
  - **Form B:** two short exchanges asking for mercy, based on Baruch 3:2 and Psalm 85:8 (**L**).
  - **Form C:** short invocations addressed to Christ, each answered with *Kyrie/Christe, eleison* or its translation. The Kyrie (I6) is then not repeated.
  - **Rite of Blessing and Sprinkling of Water** (Missal, Appendix II): may replace the Penitential Act on Sundays, especially in Easter Time. The priest sprinkles the people as a reminder of Baptism. The people may make the Sign of the Cross as the water reaches them. **The Kyrie is omitted.**
- **Gesture:** during the Confiteor, many strike the breast at the words admitting one's own fault.
- **Gap:** the Sprinkling Rite is a common Sunday variation. Give it its own short variant moment (`sprinkling`) or a scene variation.

### I6. Kyrie (`kyrie`)

Complete. It may be sung or said in Greek, English, or Spanish.

### I7. Gloria (`gloria`)

- **Words:** the Gloria (**L** in English and Spanish; the Latin is **P**). It is sung or said by all, or alternately by choir and people.
- **Varies:** sung on Sundays outside Advent and Lent, on solemnities and feasts.

### I8. Collect (`collect`)

- **Words:** the priest's invitation (**L**), a silence, the Collect itself (**V**, **L**), and the people's *Amen* (**C**).
- After the Collect, everyone sits.

---

## 4. Liturgy of the Word

"When the Sacred Scriptures are read in the Church, God himself speaks to his people, and Christ, present in his word, proclaims the Gospel" (GIRM 29, our paraphrase; SC 7). Everyone sits for the first readings and stands for the Gospel.

| # | ID | Moment |
|---|---|---|
| W1 | `first-reading` | First Reading |
| W2 | `psalm` | Responsorial Psalm |
| W3 | `second-reading` | Second Reading |
| W4 | `gospel-acclamation` | Gospel Acclamation |
| W5 | `gospel` | The Gospel |
| W6 | `homily` | Homily |
| W7 | `creed` | Profession of Faith (Creed) |
| W8 | `universal-prayer` | Universal Prayer (Prayer of the Faithful) |

### W1. First Reading (`first-reading`)
App: new.

- **Happens:** A lector goes to the ambo, the reading stand, and proclaims a reading, usually from the Old Testament. In Easter Time it comes from the Acts of the Apostles. At the end the reader makes a short acclamation and the people respond.
- **Why:** The whole story of salvation leads to Christ. On Sundays the first reading is usually chosen to connect with the Gospel.
- **You:**
  - Sit and listen. It is fine to listen rather than read along.
  - At the end, respond with everyone.
- **Words:** the reading itself is **V** (Lectionary, **L**). The concluding acclamation and the people's response are **L**: the people give thanks to God for his word. Silence may follow.
- **Posture:** sit.
- **Narrate:** "Now everyone sits. A reader proclaims a passage from the Bible, usually from the Old Testament. Just listen as if God were speaking to you, because Catholics believe he is. At the end, everyone thanks God together."
- **Deeper:**
  - The three-year Sunday cycle (Years A, B, C): Matthew, Mark, Luke, with John in special seasons.
  - The idea that the Old Testament is "unveiled" in the New.
  - The ambo, the "table of the Word", as a counterpart to the altar.
- **Refs:** Nehemiah 8:1–8; Luke 24:27; DV 21; SC 7, 51; GIRM 29, 55–59, 309; CCC 1100–1102, 1154, 1184, 1349; LMI.
- **Varies:**
  - A short silence after the reading.
  - Children's Liturgy of the Word: children may be dismissed to a separate room before the readings (*Directory for Masses with Children* 17).
- **Needs:** **new scene** (lector at the ambo). Narration. A response cue (only once the response is licensed; until then, describe it).

### W2. Responsorial Psalm (`psalm`)
App: new.

- **Happens:** A cantor sings, or a reader says, the verses of a psalm. After each verse, everyone repeats a short refrain.
- **Why:** The psalms are the prayer book of the Bible. Here the people answer God's word using God's own words.
- **You:** Listen to the refrain the first time, then repeat it after each verse.
- **Words:** the refrain and verses are **V** (Lectionary or approved musical settings, **L**/music copyright). Teach the *pattern*, not the text: the cantor sings the refrain, everyone repeats it, the cantor sings a verse, everyone sings the refrain.
- **Posture:** sit.
- **Narrate:** "The cantor sings a short line, called the refrain, and everyone sings it back. Then the cantor sings a verse of a psalm, and you answer with the refrain again. Listen once, then join in."
- **Deeper:** Jesus prayed the psalms; the psalm usually echoes the first reading; seasonal psalms may replace the psalm of the day.
- **Refs:** Colossians 3:16; GIRM 61; LMI 19–22; CCC 2585–2589.
- **Varies:** Sung or recited; a common seasonal psalm may be used instead.
- **Needs:** **new scene** (cantor at the ambo). Narration. A response cue that uses a sample refrain of the app's *own description*, or a cleared text (**P**/**V** decision needed).

### W3. Second Reading (`second-reading`)
App: new.

- **Happens:** A lector proclaims a reading from a New Testament letter or Revelation, with the same ending acclamation and response as W1.
- **Why:** The apostles' teaching to the first Christian communities. On Ordinary Time Sundays these letters are read in order through the weeks, so they do not always match the theme of the other readings.
- **You:** Sit, listen, and respond as after the first reading.
- **Words:** reading **V**; response **L** (same as W1).
- **Posture:** sit.
- **Narrate:** "A second reading follows, usually from one of the letters the apostles wrote to the first Christians. At the end, you thank God just as before."
- **Refs:** GIRM 57–60; LMI 66–67.
- **Varies:** Weekday Masses have no second reading.
- **Needs:** reuse the W1 scene. Narration.

### W4. Gospel Acclamation (`gospel-acclamation`)
App: new.

- **Happens:** Everyone stands and sings *Alleluia*, with a verse sung by the cantor. During Lent, *Alleluia* is not sung; another acclamation praising Christ replaces it. On Easter Sunday and Pentecost, a sequence (an ancient poem) is sung first.
- **Why:** We stand and sing to greet Christ, who is about to speak to us in the Gospel. "Alleluia" is Hebrew for "Praise the Lord".
- **You:** Stand and sing *Alleluia*.
- **Words:** *Alleluia* (**P**: a Hebrew acclamation, likely clearable). Verse **V**. The Lenten acclamation **L**. Sequences **L** (Latin **P**).
- **Posture:** stand.
- **Narrate:** "Now everyone stands to welcome Christ in the Gospel. You'll hear 'Alleluia', a Hebrew word meaning 'Praise the Lord.' Sing it with everyone."
- **Deeper:** The procession with the Book of the Gospels; why Alleluia is set aside during Lent; the sequences (*Victimae paschali laudes*, *Veni, Sancte Spiritus*).
- **Refs:** Revelation 19:1–6; GIRM 62–64; CCC 1154.
- **Varies:** Lent (no Alleluia); sequences (obligatory on Easter Sunday and Pentecost, optional on Corpus Christi); if not sung, the acclamation may be omitted.
- **Needs:** the W5 scene, or a **new scene** (Gospel procession). A response cue (*Alleluia*, once **P** is decided).

### W5. The Gospel (`gospel`)
App: new.

- **Happens:**
  1. The deacon asks the priest for a blessing; if there is no deacon, the priest prays quietly.
  2. The deacon or priest carries the Book of the Gospels to the ambo, sometimes with candles and incense.
  3. He greets the people, and they reply as at the Greeting.
  4. He announces which Gospel is being read and traces a small cross on the book. Everyone traces a small cross with the thumb on the forehead, lips, and heart, and acclaims the Lord.
  5. He proclaims the Gospel.
  6. At the end he acclaims the "Gospel of the Lord", the people praise Christ, and he kisses the book.
- **Why:** The Gospels tell the life, words, death, and resurrection of Jesus. They are the heart of all the Scriptures, so they receive the greatest honor.
- **You:**
  - Stand.
  - Reply to the greeting.
  - Make the three small crosses (a common way to understand them: "May God's word be in my mind, on my lips, and in my heart").
  - Respond before and after the Gospel.
- **Words:** dialogue and acclamations are **L** (the greeting response is the same as I4). Gospel text is **V**.
- **Posture:** stand.
- **Gesture:** small Sign of the Cross on the forehead, lips, and breast.
- **Narrate:** "Only a priest or deacon reads the Gospel. He'll greet you, and you answer as you did at the start of Mass. When he names the Gospel, trace a small cross on your forehead, your lips, and your heart. This is Jesus' own story, so everyone stands to listen."
- **Deeper:** Christ present in his word (SC 7); the book honored like Christ himself; why ordained ministers proclaim the Gospel.
- **Refs:** Luke 4:16–21; SC 7; GIRM 60, 132–134, 175, 212; CCC 1088, 1154.
- **Varies:** Deacon or priest; incense; a sung or spoken Gospel; on Palm Sunday and Good Friday the Passion is read in parts, and the people may have a part.
- **Needs:** **new scene** (deacon or priest at the ambo with the Book of the Gospels, people signing). Priest audio (**L**). Two response cues (**L**).

### W6. Homily (`homily`)
App: new.

- **Happens:** Everyone sits. The priest or deacon preaches, explaining the readings and applying them to daily life.
- **Why:** The homily helps the Word take root in our lives. It is required on Sundays.
- **You:** Sit and listen. A short silence may follow.
- **Words:** —
- **Posture:** sit.
- **Narrate:** "The priest or deacon now explains the readings and what they mean for our lives this week. Sit back and listen."
- **Deeper:** The homily as part of the liturgy itself, not a separate lecture.
- **Refs:** Nehemiah 8:8; Luke 24:27; SC 52; GIRM 65–66; CCC 1349.
- **Varies, especially for OCIA:**
  - **Dismissal of catechumens:** at many parishes, after the homily, catechumens (people preparing for Baptism) are kindly sent out with a catechist to reflect on the Word. They return to their seats next year at the Easter Vigil.
  - On certain Sundays the OCIA rites take place here: the Rite of Acceptance, the Rite of Sending, and on the 3rd, 4th, and 5th Sundays of Lent, the Scrutinies.
  - Other rites can follow the homily, such as Baptisms.
- **Needs:** **new scene** (priest preaching). Narration. An OCIA side note (important for the target audience).

### W7. Profession of Faith (Creed) (`creed`)
App: new.

- **Happens:** Everyone stands and professes the Creed together, usually the Nicene Creed.
- **Why:** Having heard the Word, the people say "yes" to the whole faith of the Church. The Creed summarizes what Catholics believe about the Father, the Son, the Holy Spirit, and the Church.
- **You:**
  - Stand and say the Creed with everyone; follow along in the worship aid.
  - **Bow** at the words about the Son becoming man by the Holy Spirit and the Virgin Mary.
  - At Christmas and on the Annunciation (March 25), genuflect at those words instead.
- **Words:**
  - Nicene Creed: **L** (the 2010 English and the Spanish translations; the Latin is **P**).
  - Apostles' Creed (an option, especially in Lent and Easter Time): **L**. Older traditional English forms may be **P**; to verify.
- **Posture:** stand, with a bow (or genuflection) at the Incarnation.
- **Narrate:** "Everyone stands and says the Creed, a summary of what Catholics believe. When the words speak of Jesus becoming man, everyone bows. It's a moment of wonder that God became one of us. Not ready to say it? You can stand and listen."
- **Deeper:** The Councils of Nicaea (325) and Constantinople (381); "consubstantial" (in the English text) meaning "of one being with the Father"; why the Creed follows the readings.
- **Refs:** GIRM 67–68, 137; CCC 185–197; OM rubric permitting the Apostles' Creed.
- **Varies:**
  - The Apostles' Creed.
  - At Easter Sunday Masses, the renewal of baptismal promises may replace the Creed (verify the rubric).
  - The Creed is said on Sundays and solemnities.
- **Needs:** **new scene** (congregation standing, some bowing). Narration. **No practice exercise** (too long, and the text is **L**).

### W8. Universal Prayer (Prayer of the Faithful) (`universal-prayer`)
App: new.

- **Happens:**
  1. The priest invites prayer.
  2. A deacon, cantor, or reader announces intentions: for the Church, for the world and its leaders, for those who suffer, and for the local community, including the sick and the dead.
  3. After each one, the people answer with a short response.
  4. The priest ends with a prayer, and everyone answers *Amen*.
- **Why:** The baptized exercise their priesthood by praying for the whole world.
- **You:** Listen to each intention and answer with the response. Add your own intentions silently.
- **Words:** intentions are **V** (written locally). The people's response is chosen locally; short responses such as asking the Lord to hear us are customary. The Missal's samples are **L**. The concluding *Amen* is **C**.
- **Posture:** stand.
- **Narrate:** "Now we pray for the needs of the world. After each intention, everyone answers with the same short response; you'll catch it after the first one. You can add your own intentions in your heart."
- **Deeper:** The order of intentions; Scripture's call to pray "for everyone".
- **Refs:** 1 Timothy 2:1–4; GIRM 69–71, 138; CCC 1349.
- **Varies:**
  - The response wording varies by parish.
  - During the Scrutinies, special intercessions for the elect may replace it.
  - At some parishes, catechumens are dismissed here instead of after the homily.
- **Needs:** reuse `congregation-prayer`. Narration. A response cue that teaches "listen for the response" (the text varies); the *Amen* is practicable.

---

## 5. Liturgy of the Eucharist

At the Last Supper, Christ took bread and wine, gave thanks, broke the bread, and gave it to his disciples. The Church follows the same four actions:

1. **Took** → Preparation of the Gifts.
2. **Gave thanks** → Eucharistic Prayer.
3. **Broke** → the Fraction.
4. **Gave** → Communion.

(GIRM 72; CCC 1350–1355.)

| # | ID | Moment |
|---|---|---|
| E1 | `preparation-of-gifts` | Preparation of the Altar and the Gifts |
| E2 | `offertory-prayers` | Prayers over the Bread and Wine |
| E3 | `pray-brethren` | Invitation to Prayer |
| E4 | `prayer-over-offerings` | Prayer over the Offerings |
| E5 | `preface-dialogue` | Preface Dialogue |
| E6 | `preface` | Preface |
| E7 | `sanctus` | Holy, Holy, Holy (Sanctus) |
| E8 | `epiclesis` | Calling Down the Holy Spirit (Epiclesis) |
| E9 | `consecration` | Institution Narrative and Consecration |
| E10 | `mystery-of-faith` | Mystery of Faith |
| E11 | `intercessions` | Remembering, Offering, Interceding |
| E12 | `great-amen` | Final Doxology and Great Amen |
| C1 | `lords-prayer` | The Lord's Prayer |
| C2 | `sign-of-peace` | Sign of Peace |
| C3 | `lamb-of-god` | Breaking of the Bread and Lamb of God |
| C4 | `behold-the-lamb` | Invitation to Communion |
| C5 | `communion` | Holy Communion |
| C6 | `thanksgiving` | Thanksgiving after Communion |
| C7 | `prayer-after-communion` | Prayer after Communion |

### E1. Preparation of the Altar and the Gifts (`preparation-of-gifts`)
App: new.

- **Happens:**
  - Everyone sits.
  - Servers prepare the altar with a cloth (the corporal), the chalice, and the Missal.
  - Ushers take up the collection.
  - Members of the congregation may carry the bread and wine forward in procession, and the priest receives them.
  - A song is usually sung.
- **Why:** The bread and wine, "fruit of the earth and work of human hands", and the people's gifts for the Church and the poor, are offered to God. They stand for our whole lives, offered with Christ.
- **You:**
  - Sit.
  - Give to the collection if you wish. Visitors are not expected to give.
  - Sing the song.
- **Words:** — (song: music copyright).
- **Posture:** sit.
- **Narrate:** "Now the table is set. The altar is prepared, a collection is taken for the parish and the poor, and bread and wine are brought forward. Give if you'd like; visitors aren't expected to. Think of offering your own week to God along with the gifts."
- **Deeper:** The early Christians brought food for the poor; why bread and wine; the offering of oneself.
- **Refs:** Malachi 1:11; Acts 4:34–35; 2 Corinthians 9:7; GIRM 73–74, 140; CCC 1350–1351.
- **Varies:** The gifts procession is not done everywhere; a second collection; online giving.
- **Needs:** **new scenes** (collection and gifts procession; priest at the altar). Narration.

### E2. Prayers over the Bread and Wine (`offertory-prayers`)
App: new.

- **Happens:**
  1. The priest holds the bread, then the wine, a little above the altar and says prayers of blessing. If there is singing, he says them quietly.
  2. He adds a drop of water to the wine.
  3. Incense may be used, and the people are incensed too.
  4. He washes his hands.
- **Why:** The prayers bless God, who gives us these gifts. The water in the wine is often explained as our humanity joined to Christ's divinity. The washing of hands is a sign of the desire for inner purification.
- **You:**
  - Sit.
  - If the prayers are said aloud, the people respond to each with a short blessing of God (**L**).
  - Stand if you are being incensed.
- **Words:** the response to each prayer **L** (only when said aloud).
- **Posture:** sit (stand when incensed).
- **Narrate:** "The priest lifts the bread and then the wine, thanking God for them. If you can hear his prayers, everyone answers by blessing God. Then he washes his hands, asking God to make him clean inside."
- **Deeper:** Jewish table blessings; incense as rising prayer.
- **Refs:** Psalm 26:6; Psalm 141:2; GIRM 75–76, 141–145; CCC 1350.
- **Varies:** Said quietly during a song (most common at sung Masses); incense.
- **Needs:** reuse the E1 altar scene. Narration.

### E3. Invitation to Prayer (`pray-brethren`)
App: new.

- **Happens:** The priest asks the people to pray that the sacrifice, "mine and yours", may be acceptable to God. Everyone stands and responds.
- **Why:** The whole assembly offers the sacrifice, through the priest and with him.
- **You:** **Stand** at the invitation and respond.
- **Words:** the invitation and the people's response are **L**. The response asks the Lord to accept the sacrifice for his glory and for the good of all the Church.
- **Posture:** stand (from here to the end of Mass, except the kneeling and silence noted below).
- **Narrate:** "The priest asks you to pray with him that this offering will please God. Everyone stands and answers together. This is the sacrifice of the whole Church, and you're part of it."
- **Refs:** GIRM 43, 77, 146; CCC 1368.
- **Needs:** reuse the altar scene. Priest audio **L**. Response cue **L**.

### E4. Prayer over the Offerings (`prayer-over-offerings`)
App: new.

- **Happens:** The priest says the day's prayer over the gifts, and the people answer *Amen*.
- **Words:** prayer **V** (**L**); *Amen* **C**.
- **Posture:** stand.
- **Narrate:** "The priest prays over the bread and wine. When he finishes, answer: Amen."
- **Refs:** GIRM 77.
- **Needs:** altar scene. Response cue (*Amen*, **practicable now**).

### E5. Preface Dialogue (`preface-dialogue`)
App: new.

- **Happens:** The Eucharistic Prayer, "the center and summit of the entire celebration" (GIRM 78, our paraphrase), begins with three short exchanges between priest and people:
  1. the familiar greeting (the response is as at I4);
  2. an invitation to lift up our hearts, which the people say they lift to the Lord;
  3. an invitation to give thanks, which the people answer by saying it is right and just.
- **Why:** The dialogue is among the oldest prayers of the Mass, found in the early 3rd century. It joins priest and people before the great prayer.
- **You:** Stand and answer each line.
- **Words:** all **L**; the Latin is **P**.
- **Posture:** stand.
- **Narrate:** "Now begins the most important prayer of the Mass. The priest and the people speak back and forth three times: a greeting, an invitation to lift your heart to God, and an invitation to give thanks. Answer each one with everyone."
- **Deeper:** The *Apostolic Tradition* attributed to Hippolytus; "Eucharist" means "thanksgiving".
- **Refs:** Lamentations 3:41; GIRM 78–79, 148; CCC 1352, 1359–1361.
- **Needs:** **new scene** (priest at the altar with hands raised). Priest audio **L**. Three response cues **L**. (A strong candidate for licensing, since it is the clearest dialogue in the Mass.)

### E6. Preface (`preface`)
App: new.

- **Happens:** The priest sings or says the preface, a prayer of thanks that changes with the day or season. It ends by joining our voices to the angels' song.
- **You:** Stand and listen.
- **Words:** **V** (**L**).
- **Posture:** stand.
- **Narrate:** "The priest thanks God for a particular gift: today's feast, the season, or simply all God has done. At the end, he invites us to join the angels' song."
- **Refs:** GIRM 79a; CCC 1352.
- **Needs:** altar scene. Narration.

### E7. Holy, Holy, Holy (Sanctus) (`sanctus`)
App: new.

- **Happens:** Everyone sings or says the Sanctus, the angels' hymn of praise joined to the crowds' welcome of Jesus into Jerusalem.
- **Why:** At Mass, heaven and earth worship together.
- **You:** Sing with everyone. Then, in the U.S., **kneel** when it ends.
- **Words:** **L** in English and Spanish; the Latin *Sanctus … Hosanna* is **P**; *Hosanna* is **P**.
- **Posture:** stand while singing, then **kneel** (U.S.).
- **Narrate:** "Everyone sings the song of the angels: 'Holy, holy, holy.' When it ends, everyone kneels. In the U.S., the people kneel for the heart of the Eucharistic Prayer."
- **Deeper:**
  - The text comes from Isaiah's vision and the welcome given to Jesus on Palm Sunday.
  - "Hosanna" is Hebrew, roughly "Save, we pray!"
  - The U.S. kneeling norm is a U.S. adaptation.
- **Refs:** Isaiah 6:3; Revelation 4:8; Psalm 118:25–26; Matthew 21:9; GIRM 43 (U.S. adaptation), 79b; CCC 1352.
- **Varies:** Those who cannot kneel may sit or stand and make a profound bow when the priest genuflects after the consecration (GIRM 43).
- **Needs:** **new scene** (congregation singing, then kneeling). Response cue (sing along; text **L**/**P**).

### E8. Calling Down the Holy Spirit (Epiclesis) (`epiclesis`)
App: new.

- **Happens:** The priest holds his hands over the bread and wine and asks the Father to send the Holy Spirit so they may become the Body and Blood of Christ. A server may ring a bell.
- **Why:** Everything in the sacraments happens by the power of the Holy Spirit.
- **You:** Kneel and pray in silence.
- **Words:** — (the priest's prayer **L**, which differs by Eucharistic Prayer).
- **Posture:** kneel.
- **Narrate:** "The priest stretches his hands over the bread and wine and asks God to send the Holy Spirit upon them. If you hear a bell, it's a signal to pay close attention."
- **Deeper:** "Epiclesis" means "calling down"; the second epiclesis, over the people, comes later.
- **Refs:** GIRM 79c, 150; CCC 1105–1106, 1353.
- **Varies:** There are several Eucharistic Prayers: I (the Roman Canon), II, III, IV, and others for Reconciliation and Various Needs. The bell is optional.
- **Needs:** **new scene** (hands extended over the gifts). Narration only.

### E9. Institution Narrative and Consecration (`consecration`)
App: new.

- **Happens:**
  1. The priest repeats Jesus' words from the Last Supper over the bread.
  2. He raises the consecrated Host for all to see, then genuflects.
  3. He does the same with the chalice.
  4. Bells may ring, and incense may be used.
- **Why:** Catholics believe that by Christ's words and the Holy Spirit, the bread and wine truly become Christ's Body and Blood, while still looking like bread and wine. The Church calls this transubstantiation. Christ's one sacrifice on the Cross is made present.
- **You:**
  - Kneel.
  - Look at the Host and the chalice when they are raised, and adore.
  - Many people silently pray the words of St. Thomas, "My Lord and my God" (John 20:28: Scripture, a private devotion, not part of the official text).
- **Words:** — (the priest's words are **L**; the Gospel accounts are cited below).
- **Posture:** kneel.
- **Narrate:** "This is the most sacred moment of the Mass. The priest says the words Jesus spoke at the Last Supper. Catholics believe that the bread and wine now become Jesus himself. When he lifts them up, look, and pray quietly. Many whisper, 'My Lord and my God.'"
- **Deeper:**
  - The Real Presence; transubstantiation explained simply.
  - The Mass as the one sacrifice of Christ made present, not repeated.
  - The Passover background.
- **Refs:** Matthew 26:26–28; Mark 14:22–24; Luke 22:19–20; 1 Corinthians 11:23–26; John 6:51–58; GIRM 79d, 150; CCC 1333, 1353, 1356–1381 (especially 1366–1367, 1374–1376).
- **Varies:** Bells and incense are optional; the words differ slightly between Eucharistic Prayers.
- **Needs:**
  - **New scenes:** elevation of the Host, and elevation of the chalice.
  - Narration.
  - Priest audio would be **L**. **Recommendation:** narrate this moment rather than simulate the priest. Pastorally the words of consecration in an AI voice need explicit review by a priest or liturgist (§7).

### E10. Mystery of Faith (`mystery-of-faith`)
App: new.

- **Happens:** The priest announces "the mystery of faith". The people respond with one of three acclamations proclaiming Christ's death and resurrection until he comes again.
- **You:** Kneel and sing or say the acclamation the parish uses.
- **Words:** invitation and acclamations **L**; Latin **P**. The idea comes from 1 Corinthians 11:26.
- **Posture:** kneel.
- **Narrate:** "The priest says, in a few words, that this is the mystery of our faith. Everyone answers by proclaiming Jesus' death and resurrection until he comes again. Parishes use one of three versions; follow along in the book."
- **Refs:** 1 Corinthians 11:26; GIRM 79, 151; CCC 1354.
- **Needs:** consecration scene. Response cue (**L**).

### E11. Remembering, Offering, Interceding (`intercessions`)
App: new.

- **Happens:** The prayer continues:
  - It **remembers** Christ's passion, resurrection, and ascension (the anamnesis).
  - It **offers** the sacrifice to the Father.
  - It asks the Holy Spirit to make all who receive into **one body**.
  - It **prays** for the Church (naming the Pope and the local bishop), for the living, and for the dead, and asks to share eternal life with Mary and the saints.
- **Why:** The Eucharist is offered in communion with the whole Church, in heaven and on earth, for the living and the dead.
- **You:** Kneel and pray; you may silently remember your own loved ones, living and dead.
- **Words:** — (**L**).
- **Posture:** kneel.
- **Narrate:** "The priest now remembers all Jesus did for us, offers this gift to the Father, and prays for the whole Church: for the Pope, for our bishop, for the living, and for those who have died. Remember your own loved ones quietly."
- **Refs:** GIRM 79e–g; CCC 1354, 1368–1371.
- **Needs:** reuse an altar or kneeling scene. Narration.

### E12. Final Doxology and Great Amen (`great-amen`)
App: new.

- **Happens:** The priest raises the Host and chalice and gives praise to the Father, through, with, and in Christ, in the unity of the Holy Spirit. Everyone answers with a solemn *Amen*, often sung.
- **Why:** The "Great Amen" is the people's assent to the whole Eucharistic Prayer. St. Justin already mentions it around AD 155.
- **You:** Kneel and sing or say *Amen*. The doxology itself belongs to the priest alone, so the people do not say it with him.
- **Words:** doxology **L** (Latin **P**); *Amen* **C**.
- **Posture:** kneel, then **stand** after the Amen.
- **Narrate:** "The priest lifts the Body and Blood of Christ and gives glory to God. Everyone answers with the most important Amen of the Mass, often sung. Then everyone stands."
- **Deeper:** Justin Martyr's description of the people's Amen.
- **Refs:** Romans 11:36; GIRM 79h, 151; CCC 1345; RS 52 (doxology reserved to the priest; verify the number).
- **Needs:** **new scene** (elevation at the doxology). Response cue (*Amen*, **practicable now**).

### C1. The Lord's Prayer (`lords-prayer`)
App: new.

- **Happens:**
  1. Everyone stands.
  2. The priest invites all to pray as Jesus taught.
  3. Everyone prays the Our Father.
  4. The priest continues alone, asking for deliverance and peace.
  5. The people close with an acclamation of God's kingdom, power, and glory. This is said at Mass instead of being added to the end of the Our Father.
- **Why:** It is the prayer Jesus gave us, and it asks for "daily bread" just before Communion.
- **You:** Stand and pray. Wait through the priest's prayer, then say the closing acclamation.
- **Words:**
  - Our Father: the traditional English text is **P** (to verify that the Missal's English wording matches the traditional, public-domain form). The Spanish *Padre nuestro* in the *Misal Romano* is **L**, and its wording differs from older forms.
  - The priest's prayer is **L**.
  - The closing acclamation is **L** (English from ICET/ELLC common texts; check their terms).
- **Posture:** stand.
- **Gesture:** the Missal prescribes **no** hand gesture for the people. Some hold hands or raise their hands; customs vary. Do what is comfortable and follow local practice.
- **Narrate:** "Everyone stands to pray the Our Father, the prayer Jesus taught. After it, the priest prays alone for a moment. Wait, and then everyone joins in praising God's kingdom, power, and glory. Some people hold hands or open their hands here; you can simply fold yours."
- **Deeper:** Why Catholics don't add "For the kingdom…" right after "deliver us from evil".
- **Refs:** Matthew 6:9–13; Luke 11:2–4; GIRM 81, 152–153; CCC 2759–2865 (especially 2760, 2770).
- **Varies:** Sung or said.
- **Needs:** **new scene** (congregation standing in prayer; may reuse `congregation-prayer`). Response cue. **A practice candidate** if the English text is cleared (**P**).

### C2. Sign of Peace (`sign-of-peace`)
App: new.

- **Happens:**
  - The priest prays for peace and unity, and offers the people the peace of the Lord. They reply as at the Greeting.
  - The deacon or priest may invite everyone to offer one another a sign of peace.
  - People turn to those nearby with a handshake, a nod, or a wave and wish them peace.
- **Why:** Christ gives his peace before we receive him; reconciliation comes before the altar.
- **You:**
  - Reply to the priest.
  - Offer a sign of peace to the people right around you; you don't need to move.
  - A simple "Peace be with you" is common. A nod is fine if you'd rather not shake hands.
- **Words:** the priest's prayer **L**. The response is **L** (same as I4). What people say to each other is informal; customs vary.
- **Posture:** stand.
- **Narrate:** "The priest wishes everyone the peace of Christ, and you answer as you did at the beginning. Then turn to the people next to you and offer them peace, with a handshake or just a nod and a smile. Stay where you are; there's no need to walk around."
- **Deeper:** The peace as a sign of unity, not a casual greeting.
- **Refs:** Matthew 5:23–24; John 14:27; John 20:19–21; GIRM 82, 154; CCC 2302–2306.
- **Varies:** The invitation is optional; the exchange may be omitted (for example for health reasons); the gesture follows local custom.
- **Needs:** **new scene** (people exchanging the peace). Response cue **L**.

### C3. Breaking of the Bread and Lamb of God (`lamb-of-god`)
App: new.

- **Happens:**
  - The priest breaks the consecrated Host and drops a small piece into the chalice (the commingling).
  - Meanwhile everyone sings or says the Lamb of God, which calls on Jesus, the Lamb who takes away the sins of the world.
  - In the U.S., everyone **kneels** after it.
- **Why:** "The breaking of the bread" was the first name for the Eucharist. Many share in one bread, which makes us one body. John the Baptist called Jesus "the Lamb of God".
- **You:** Sing or say the Lamb of God, then kneel (U.S.).
- **Words:** **L** in English and Spanish; the Latin *Agnus Dei* is **P**.
- **Posture:** stand, then **kneel** after the Agnus Dei (U.S., unless the diocesan bishop decides otherwise).
- **Narrate:** "The priest breaks the Host, just as Jesus broke bread at the Last Supper. Everyone sings 'Lamb of God,' asking Jesus for mercy and peace. When it ends, everyone kneels."
- **Deeper:** 1 Corinthians 10:16–17 (one bread, one body); the Passover lamb.
- **Refs:** John 1:29; Revelation 5:6–14; 1 Corinthians 10:16–17; Acts 2:42; GIRM 43, 83, 155; CCC 1329.
- **Varies:** The invocation may be repeated until the breaking is complete; the kneeling norm varies by diocese.
- **Needs:** **new scene** (the fraction). Response cue (**L**; the Latin is **P**).

### C4. Invitation to Communion (`behold-the-lamb`)
App: new.

- **Happens:** The priest shows the Host above the paten or chalice and invites everyone to the supper of the Lamb. The people answer with words based on the Roman centurion's humble words to Jesus (Matthew 8:8).
- **Why:** Humility and faith before receiving the Lord.
- **You:** Kneel and respond with everyone. Many strike the breast, as at the Confiteor.
- **Words:** invitation and response **L**. The Scripture source (Matthew 8:8) can be quoted from a public-domain Bible as Scripture, not as the Mass text.
- **Posture:** kneel.
- **Narrate:** "The priest holds up the Host and calls it the Lamb of God. Everyone answers with words a Roman soldier once said to Jesus: that we aren't worthy, but that Jesus can heal us with just a word."
- **Refs:** John 1:29; Revelation 19:9; Matthew 8:8; Luke 7:6–7; GIRM 84, 157.
- **Needs:** **new scene** (priest showing the Host). Priest audio **L**. Response cue **L**.

### C5. Holy Communion (`communion`)
App: new. **The most important participation guidance of the curriculum.**

- **Happens:**
  - The priest receives Communion. The Communion song begins.
  - Ushers guide the people, row by row, to the ministers.
  - Each communicant **bows** their head, receives the Host, says **Amen**, and consumes it right away.
  - Where the cup is offered, they may also receive from the chalice the same way.
- **Why:** In Holy Communion, Catholics receive Christ himself and are united with him and with one another.
- **You:**
  - **Catholics** who are prepared may receive: in a state of grace (Confession first after serious sin) and having kept the one-hour fast.
    - When the minister shows the Host and names it the Body of Christ, answer **Amen** (**C**).
    - Receive on the tongue, or in the hand (left hand over right, take the Host with the right hand, and consume it before stepping away).
    - From the cup: answer **Amen**, drink a little, and hand the cup back.
  - **Non-Catholics and those not receiving:**
    - Remain in the pew and pray. Many people don't receive, and no one notices.
    - Or, where it is the parish custom, come forward with arms crossed over the chest to receive a blessing. This custom is not universal; follow local practice.
  - **Orthodox and some Eastern Christians** have particular norms; see the USCCB guidelines.
- **Words:**
  - The minister's words, naming the Body or the Blood of Christ: **P**. These are three-word formulas, likely clearable, in English and Spanish; to decide.
  - *Amen*: **C**.
  - Communion song: music copyright.
- **Posture:** walk in procession; bow before receiving; standing to receive is the U.S. norm, kneeling is allowed.
- **Narrate:** "Now the people come forward to receive Communion. If you're Catholic and prepared, bow your head, and when the minister says 'The Body of Christ', answer 'Amen.' If you're not Catholic, you're welcome to stay in your seat and pray. In many parishes you may also come forward with your arms crossed to receive a blessing. Either way, this is a beautiful time to pray."
- **Deeper:**
  - Why Communion expresses unity of faith, so non-Catholics are asked not to receive. It is not a judgment of anyone's sincerity.
  - Communion under both kinds.
  - The Easter duty.
  - Spiritual communion.
- **Refs:** John 6:51–58; 1 Corinthians 11:27–29; GIRM 85–87, 160–162, 281–287; CCC 1384–1401 (especially 1385, 1387, 1390, 1398–1401); CIC 844, 912, 916, 919, 920; USCCB *Guidelines for the Reception of Communion* (1996); USCCB *Norms for the Distribution and Reception of Holy Communion Under Both Kinds* (2002).
- **Varies:** Cup offered or not; kneeling to receive; ministers' positions; local custom for blessings.
- **Needs:**
  - **New scenes:** the Communion line and receiving; ideally also the cup.
  - Narration.
  - Response cue (*Amen*, **practicable now** once the minister's words are decided).
  - An **explicit "not receiving" path** in Experience Mass, the app's most important courtesy to non-Catholic users.

### C6. Thanksgiving after Communion (`thanksgiving`)
App: new.

- **Happens:** After receiving, people return to their places and pray. The ministers purify the vessels. There may be silence or a hymn of praise.
- **Why:** A time to thank God and speak with him in the heart.
- **You:** Kneel or sit in prayer. Local customs vary; some dioceses ask everyone to stand until all have received.
- **Words:** —
- **Posture:** kneel or sit (U.S.; local custom).
- **Narrate:** "Back in the pew, people kneel or sit quietly. Take this time to thank God, whether you received Communion or prayed instead."
- **Refs:** GIRM 43, 88, 163–164; CCC 1391–1397.
- **Varies:** Silence or a song; posture customs.
- **Needs:** reuse the kneeling scene. Narration.

### C7. Prayer after Communion (`prayer-after-communion`)
App: new.

- **Happens:** Everyone stands. The priest invites prayer and says the prayer after Communion. All answer *Amen*.
- **Words:** invitation **L**; prayer **V** (**L**); *Amen* **C**.
- **Posture:** stand.
- **Narrate:** "Everyone stands. The priest prays that what we have received will bear fruit in our lives. Answer: Amen."
- **Refs:** GIRM 89, 165.
- **Needs:** reuse the `collect` scene. Response cue (*Amen*, **practicable now**).

---

## 6. Concluding Rites

| # | ID | Moment |
|---|---|---|
| R1 | `announcements` | Announcements |
| R2 | `blessing` | Greeting and Blessing |
| R3 | `dismissal` | Dismissal |
| R4 | `recessional` | Veneration of the Altar and Recessional |
| A1 | `after-mass` | After Mass |

### R1. Announcements (`announcements`)
App: new. Brief.

- **Happens:** Short parish announcements, if there are any.
- **Posture:** sit (customs vary).
- **Refs:** GIRM 90a, 166.
- **Needs:** narration only.

### R2. Greeting and Blessing (`blessing`)
App: new.

- **Happens:** The priest greets the people (the response is as at I4) and blesses them in the name of the Father, the Son, and the Holy Spirit. Everyone makes the Sign of the Cross and answers *Amen*. On some days there is a solemn blessing or a prayer over the people, with several *Amen*s.
- **Why:** We go out with God's blessing.
- **You:** Stand, answer the greeting, sign yourself, and answer *Amen*.
- **Words:**
  - Greeting and response: **L**.
  - The blessing formula: **L**. Its Trinitarian core matches the cleared invocation, but the full formula needs the same review (**P**).
  - *Amen*: **C**.
- **Posture:** stand, and sign yourself.
- **Narrate:** "The priest greets you once more and blesses everyone in the name of the Father, the Son, and the Holy Spirit. Make the Sign of the Cross and answer: Amen."
- **Refs:** Numbers 6:24–26; GIRM 90b, 167; CCC 1671, 2626–2627.
- **Varies:** Solemn blessings; a bishop's blessing.
- **Needs:** **new scene** (priest blessing the people). Priest audio (**L**/**P**). Response cue (*Amen*, practicable).

### R3. Dismissal (`dismissal`)
App: new.

- **Happens:** The deacon or priest sends the people out with one of four short formulas: go forth; announce the Gospel; glorify the Lord by your life; go in peace. The people give thanks to God. During the Easter Octave and on Pentecost, a double *Alleluia* is added.
- **Why:** The Mass ends with a mission: to live what we have celebrated. The word "Mass" itself comes from the Latin dismissal, *missa*.
- **You:** Answer with everyone.
- **Words:** dismissal and response **L**; the added *Alleluia* is **P**.
- **Posture:** stand.
- **Narrate:** "Mass ends with a mission. The priest or deacon sends everyone out to live the Gospel, and everyone thanks God. The very word 'Mass' comes from this sending."
- **Refs:** Matthew 28:19–20; Luke 24:52–53; GIRM 90c, 168; CCC 1332.
- **Needs:** reuse the blessing scene. Response cue (**L**).

### R4. Veneration of the Altar and Recessional (`recessional`)
App: new.

- **Happens:** The priest and deacon kiss the altar, bow with the ministers, and process out, usually during a closing hymn. The hymn is customary but not required by the Missal.
- **You:** Stand and sing. It is courteous to stay until the procession has passed.
- **Words:** — (song: music copyright).
- **Posture:** stand.
- **Narrate:** "The priest kisses the altar once more and walks out, often while everyone sings. Stay and sing until the procession has passed."
- **Refs:** GIRM 90d, 169.
- **Needs:** **new scene** (the recession), or reuse the entrance scene reversed. Narration.

### A1. After Mass (`after-mass`)
App: new.

- **Happens:** Some stay to pray. People genuflect toward the tabernacle again as they leave the pew, bless themselves with holy water, and greet one another outside, often the priest too.
- **You:** Keep voices low inside the church. Take a bulletin. Introduce yourself; ask about OCIA if you're interested in becoming Catholic.
- **Words:** —
- **Posture:** genuflection, then leave.
- **Narrate:** "Many people stay a moment to pray. On your way out, you might genuflect again and bless yourself with holy water. If you're curious about becoming Catholic, the priest or parish office will be glad to tell you about OCIA."
- **Refs:** CCC 1418; GIRM 274.
- **Needs:** reuse the B3 and B4 scenes. Narration.

---

## 7. Participation guidance for non-Catholics and people preparing to enter the Church

This becomes one short page in the app, reachable from Experience Mass and Learn the Mass, plus the relevant line in each moment.

- **You are welcome.** Anyone may attend Mass; there is no membership check.
- **Posture:**
  - Follow the people around you.
  - It's fine to sit if kneeling or standing is difficult.
  - Kneeling is a sign of reverence, not a test.
- **Words:** Join the responses you're comfortable with, or simply listen. Many people pray silently.
- **Sign of the Cross, holy water, genuflecting:** You may do these as a gesture of respect, or not. No one expects it.
- **The collection:** Visitors are not expected to give.
- **The sign of peace:** Everyone may share it.
- **Holy Communion:**
  - Catholics receive Communion as a sign of shared faith and full communion with the Church. Non-Catholics are asked not to receive, out of respect for that meaning (USCCB *Guidelines*).
  - Stay in the pew and pray, or, where it's the custom, come forward with arms crossed for a blessing.
  - Orthodox Christians and members of some other Eastern Churches have particular norms (CIC 844 §3).
- **Catholics not receiving:** Catholics who are not prepared (not fasting, or aware of serious sin) can also remain in the pew. It is common, unremarkable, and often an act of reverence.
- **People preparing to enter the Church (OCIA):**
  - **Catechumens** (unbaptized) may be dismissed after the homily to reflect on the Word. They do not receive Communion until the Easter Vigil.
  - **Candidates** (already baptized Christians) usually stay for the whole Mass but do not receive until they are received into full communion.
  - Special rites may take place at Sunday Mass: the Rite of Acceptance, the Rite of Sending, and the Scrutinies in Lent.
- **If you get lost:** Follow those around you and pray in your own words. God is not grading you.

Refs: CIC 844, 912; CCC 1398–1401; USCCB *Guidelines for the Reception of Communion*; OCIA (current U.S. edition; verify paragraph numbers and its effective date).

---

## 8. Response and posture coverage matrix

**Posture:** St = stand, Si = sit, Kn = kneel. **Status** codes are from §0. **Practice now** = the people's words are cleared (**C**), so the existing practice or response engine can be used without any licensing decision.

| # | Moment | Posture (U.S.) | Gesture | People's spoken part | Status | Practice now | Priest audio |
|---|---|---|---|---|---|---|---|
| B3 | Holy water | walking | Sign of the Cross | — | — | — | none |
| B4 | Genuflection | genuflect | genuflect or bow | — | — | — | none |
| B5 | Quiet prayer | Kn/Si | — | — | — | — | none |
| I1 | Entrance | St | — | hymn | music | — | none |
| I2 | Reverence | St | — | — | — | — | none |
| I3 | Sign of the Cross | St | sign | *Amen* | **C** | **Yes** (done) | **C**, done |
| I4 | Greeting | St | — | response | **L** | No | **L** |
| I5 | Penitential Act A | St | strike breast | Confiteor; *Amen* | **L**; **C** | *Amen* only | **L** |
| I5 | Sprinkling Rite | St | sign as sprinkled | sung chant varies | music/**L** | — | **L** |
| I6 | Kyrie | St | — | *Kyrie/Christe, eleison* | **C** | **Yes** (done) | **C** (Greek) |
| I7 | Gloria | St | — | Gloria | **L** (Latin **P**) | No | — |
| I8 | Collect | St, then Si | — | *Amen* | **C** | **Yes** (done) | **V**/**L** |
| W1 | First Reading | Si | — | response | **L** | No | lector **V** |
| W2 | Psalm | Si | — | refrain | **V** | pattern only | cantor **V** |
| W3 | Second Reading | Si | — | response | **L** | No | lector **V** |
| W4 | Gospel Acclamation | St | — | *Alleluia* | **P** | after decision | — |
| W5 | Gospel | St | three small crosses | greeting response; two acclamations | **L** | No | **L** |
| W6 | Homily | Si | — | — | — | — | narrate |
| W7 | Creed | St | bow (genuflect at Christmas/Annunciation) | Creed | **L** | No | — |
| W8 | Universal Prayer | St | — | local response; *Amen* | **V**; **C** | *Amen* | **V** |
| E1 | Gifts and collection | Si | — | hymn | music | — | none |
| E2 | Bread and wine prayers | Si | stand if incensed | response (if aloud) | **L** | No | **L** |
| E3 | Invitation to Prayer | **St** | — | response | **L** | No | **L** |
| E4 | Prayer over Offerings | St | — | *Amen* | **C** | **Yes** | **V**/**L** |
| E5 | Preface Dialogue | St | — | three responses | **L** (Latin **P**) | No | **L** |
| E6 | Preface | St | — | — | — | — | **V**/**L** |
| E7 | Sanctus | St, then **Kn** | — | Sanctus | **L** (Latin **P**) | No | — |
| E8 | Epiclesis | Kn | — | — | — | — | narrate |
| E9 | Consecration | Kn | look, adore | — (silent devotion) | — | — | **narrate** (pastoral review) |
| E10 | Mystery of Faith | Kn | — | acclamation | **L** | No | **L** |
| E11 | Intercessions | Kn | — | — | — | — | narrate |
| E12 | Great Amen | Kn, then **St** | — | *Amen* | **C** | **Yes** | **L** (doxology) |
| C1 | Lord's Prayer | St | none prescribed | Our Father; acclamation | **P**/**L** | after decision | **L** |
| C2 | Sign of Peace | St | handshake or nod | response; greeting to neighbors | **L**; informal | No | **L** |
| C3 | Lamb of God | St, then **Kn** | — | Agnus Dei | **L** (Latin **P**) | No | — |
| C4 | Invitation to Communion | Kn | strike breast | response | **L** | No | **L** |
| C5 | Communion | procession; bow | bow; hand or tongue | *Amen* | **C** (minister **P**) | **Yes**, after the **P** decision | minister **P** |
| C6 | Thanksgiving | Kn/Si | — | — | — | — | none |
| C7 | Prayer after Communion | St | — | *Amen* | **C** | **Yes** | **V**/**L** |
| R2 | Blessing | St | sign | greeting response; *Amen* | **L**; **C** | *Amen* | **L**/**P** |
| R3 | Dismissal | St | — | response | **L** | No | **L** |
| R4 | Recessional | St | — | hymn | music | — | none |

**What this shows:**

- Without any license, the app can already let learners answer **ten** responses, all *Amen* or *Kyrie*: I3, I5 (*Amen*), I6, I8, W8 (*Amen*), E4, E12, C5, C7, R2.
- Three more become possible with **P** decisions: *Alleluia*, the Our Father, and the words at Communion.
- Everything else needs an ICEL/USCCB license, or the Latin.

### Posture summary (U.S.)

| From | To | Posture |
|---|---|---|
| Entrance | end of Collect | Stand |
| First Reading | Psalm, Second Reading | Sit |
| Gospel Acclamation | end of Gospel | Stand |
| Homily | — | Sit |
| Creed | Universal Prayer | Stand |
| Preparation of the Gifts | — | Sit |
| Invitation to Prayer ("Pray…") | Sanctus | Stand |
| After the Sanctus | Great Amen | **Kneel** |
| Lord's Prayer | Lamb of God | Stand |
| After the Lamb of God | Communion | **Kneel**, unless the bishop decides otherwise |
| After Communion | — | Kneel or sit (local custom) |
| Prayer after Communion | end | Stand |

Source: GIRM 43 with U.S. adaptations. Those unable to kneel may sit or stand.

---

## 9. Ordinary Sunday variations

Teach these as "you might also see…" notes, not as separate paths, except where marked **(path)**.

| Variation | What changes | Moments |
|---|---|---|
| **Seasons** | Colors; **Advent and Lent:** no Gloria; **Lent:** no Alleluia; **Easter Time:** Sprinkling Rite common, first reading from Acts | B6, I5, I7, W4 |
| **Sung or said Mass** | Hymns and chants vs. recitation; some prayers said quietly during songs | I1, W2, W4, E2, E7 |
| **Deacon present** | Deacon proclaims the Gospel, may preach, announces the intentions and the dismissal | W5, W6, W8, R3 |
| **Incense** | Entrance, Gospel, offerings, people, elevation | I2, W5, E2, E9 |
| **Penitential Act forms** | A (Confiteor), B, C (no separate Kyrie), or the Sprinkling Rite (no Kyrie) **(path)** | I5, I6 |
| **Creed** | Nicene or Apostles'; renewal of baptismal promises at Easter | W7 |
| **Eucharistic Prayers** | I, II, III, IV, Reconciliation, Various Needs: different words, same structure | E8–E12 |
| **Communion under both kinds** | The cup offered or not | C5 |
| **Kneeling customs** | After the Agnus Dei and after Communion, set by the diocesan bishop or parish | C3, C6 |
| **Spanish Mass in the U.S.** | U.S. *Misal Romano* (2018); same structure; some responses differ from older and other countries' texts | all |
| **Bilingual Masses** | Parts in each language | all |
| **Children's Liturgy of the Word** | Children dismissed during the readings | W1–W6 |
| **OCIA Sundays** | Dismissal of catechumens; Rites of Acceptance and Sending; Scrutinies (Lent 3–5) **(path)** | W6, W8 |
| **Solemnities on Sunday** | Proper prayers and readings; sequences on Easter and Pentecost | W4 |
| **Palm Sunday** | Procession with palms replaces the Introductory Rites; Passion read in parts | I1–I8, W5 |
| **Christmas / Annunciation** | Genuflect at the Incarnation in the Creed | W7 |
| **Saturday evening vigil** | Same Sunday Mass | B1 |
| **Bishop presides** | Own greeting, crozier and mitre, solemn blessing | I4, R2 |

---

## 10. Sources requiring verification or licensing

### A. Licensing (resolve before showing the text in the app)

| # | Item | Holder | Needed for |
|---|---|---|---|
| 1 | English Order of Mass dialogue and the people's parts (2010) | ICEL | Every **L** response; realistic priest audio |
| 2 | Spanish *Misal Romano* (U.S., 2018) | USCCB, with the other rights holders named in the edition (verify; the Mexican bishops' conference and its publisher may hold rights in the translation) | Spanish **L** responses and priest audio |
| 3 | Lectionary (NABRE-based) and *Leccionario* | USCCB / CCD and Spanish rights holders | Any reading or psalm text (**V**) |
| 4 | Hymns, psalm settings, Mass settings | Music publishers (OneLicense, CCLI and others) | Any sung audio |
| 5 | English common texts (Our Father doxology, and others) | ICET/ELLC terms | C1 |
| 6 | USCCB documents (GIRM translation, *Guidelines*) | USCCB/ICEL | Quoted only by reference; paraphrase |
| 7 | Catechism (English and Spanish translations) | Libreria Editrice Vaticana / USCCB | Cite numbers; paraphrase |

**Decisions the project can make (with a reviewer) without a license:**

- **P1:** *Alleluia* and *Hosanna*.
- **P2:** the three-word Communion formulas (English and Spanish).
- **P3:** the traditional English Our Father.
- **P4:** using the Latin Ordinary as a parallel, licensed-free track, if desired.
- **P5:** public-domain Scripture quotations (Douay-Rheims, WEB in English; Reina-Valera 1909 or Torres Amat in Spanish) for "Go deeper" notes.

### B. Accuracy to verify against printed books

1. Paragraph numbers in the Order of Mass (README, licensing item 3).
2. GIRM numbers cited here, especially 43 (U.S. kneeling norms), 134, 137, 150–151, 160–165, 166–169.
3. Redemptionis Sacramentum 52 (doxology reserved to the priest).
4. Whether the renewal of baptismal promises may replace the Creed at all Easter Sunday Masses in the U.S.
5. The current OCIA edition: the dismissal and Scrutiny paragraph numbers, and when it took effect.
6. U.S. Spanish wording of each **L** response, from the 2018 *Misal Romano*.
7. Posture after Communion and after the Agnus Dei in the user's own diocese (examples should say "customs vary").
8. The custom of blessings in the Communion line (not in the liturgical books; some dioceses discourage it). Present it as "where it is the custom".

### C. Review

- A priest or diocesan liturgy office: the whole document, and especially E9 (Real Presence; whether to simulate the consecration audibly), C5 (Communion guidance), and §7.
- A native-speaking catechist: all Spanish.
- An OCIA director: §7 and W6.

---

## 11. Recommended narrated playback segments

Experience Mass should be playable **segment by segment** (each 2–5 minutes, ending at a natural break), with "Continue to next" and a part menu, plus "Play straight through".

| Seg | Title | Moments | New scenes | Cleared responses | Licensing needed for full realism |
|---|---|---|---|---|---|
| S0 | Arriving | B2–B5 (B1, B6 as optional intro) | font, genuflection, pew | — | none |
| S1 | Gathering | I1–I4 (to the greeting) | — | *Amen* | Greeting **L** (**built in 6A up to here**) |
| S2 | Asking for Mercy | I5–I6 | (sprinkling) | *Amen*, *Kyrie* | Confiteor **L** |
| S3 | Glory and the Opening Prayer | I7–I8 | — | *Amen* | Gloria **L** |
| S4 | The Readings | W1–W3 | ambo, cantor | — | responses **L**, texts **V** |
| S5 | The Gospel | W4–W5 | Gospel | (*Alleluia* **P**) | dialogue **L** |
| S6 | Hearing and Believing | W6–W8 | homily, creed | *Amen* | Creed **L** |
| S7 | The Gifts | E1–E4 | gifts, altar | *Amen* | **L** |
| S8 | Lift Up Your Hearts | E5–E7 | preface, Sanctus | — | dialogue and Sanctus **L** |
| S9 | This Is My Body | E8–E10 | epiclesis, elevations | — | **narrated** (pastoral review) |
| S10 | Through Him, With Him | E11–E12 | doxology | *Amen* | doxology **L** |
| S11 | Our Father and Peace | C1–C3 | peace, fraction | (Our Father **P**) | **L** |
| S12 | Communion | C4–C7 | showing the Host, Communion line | *Amen* | **L**; minister **P** |
| S13 | Sent Forth | R1–R4, A1 | blessing, recession | *Amen* | dismissal **L** |

**Each segment contains:**

- one or more scenes;
- a short narrated lead-in (teacher voice, optional: "Guide on/off");
- priest or minister audio only for cleared or licensed text;
- response pauses only where the people speak;
- posture cues;
- "What's happening?" linked to the moment entry.

Where text is not licensed, the beat uses a **described caption** in the simulated scene ("The priest greets you; the people return the greeting"). It never invents dialogue.

---

## 12. Gaps between this curriculum and the existing app

| Area | Today | Gap |
|---|---|---|
| **Moments** | 8 (Introductory Rites) in `content/mass.ts` | 38 more: B1–B6, W1–W8, E1–E12, C1–C7, R1–R4, A1. Plus a Sprinkling Rite variant. |
| **Content model** | `MassMoment` has a single `posture`, the cue, practice, and response lines; one exported array `INTRODUCTORY_RITES` | A way to group moments by part. Postures like "stand, then kneel" and "kneel or sit". A small `gesture` field (bow, genuflect, small crosses, strike breast). Moments with no response or scene (B1, R1). |
| **Learn the Mass** | One part; one progress key (`…:introductory-rites`) | Multiple parts, with a part menu and per-part progress. Leave the existing key untouched. |
| **Experience Mass** | 4 beats, ending before the Greeting | Segments S0, S2–S13. A "not receiving Communion" path. A segment menu. |
| **Scenes** | 6 images | About 20 new: font, genuflection, pew prayer, lector, cantor, Gospel, homily, creed bow, collection and gifts, offertory at the altar, preface or orans, Sanctus or kneeling, epiclesis, Host elevation, chalice elevation, sign of peace, fraction, "Behold the Lamb", Communion line, blessing, recession. Specs go into `docs/illustrations.md` before generating. |
| **Narration audio** | 28 files (8 explanations, 6 cues × EN/ES) | About 76 explanations (38 × EN/ES) and about 40 cues for the new moments (EN/ES). Note the OpenAI text-to-speech shutdown on **January 6, 2027**: either generate before then or choose a new provider. |
| **Priest audio** | 1 line × EN/ES (cleared invocation) | Every further priest line is **L** except the blessing's Trinitarian core (**P**). Blocked on licensing. |
| **Practice** | 3 (*Amen* ×2, *Kyrie*) | 7 more *Amen*s possible now (I5, W8, E4, E12, C5, C7, R2). *Alleluia*, Our Father, and Communion after the **P** decisions. |
| **Participation guidance** | Scattered notes | A dedicated page (§7). |
| **Liturgical year** | `TYPICAL_PATH` text (Ordinary Time) | Season notes in variations. Keep one default path. |
| **Existing text to revisit** | — | `TYPICAL_PATH` and the completion screen ("the guide is still being prepared"); the penitential-act variations need the Sprinkling Rite's omission of the Kyrie stated explicitly. |

---

## 13. Smallest practical implementation sequence

Each step is separately approvable, and each ends in a working app.

0. **Decide licensing strategy (no code).**
   - Approve the **P** decisions (P1–P5).
   - Choose: (a) request ICEL/USCCB permission now; (b) build with descriptions plus cleared words only and add licensed text later; or (c) add a Latin track.
   - Recommended: **(b) now, while (a) is pursued in parallel.**
1. **Content model, no new UI.**
   - Add part grouping and the small posture and gesture extensions to `content/mass.ts`.
   - Keep `INTRODUCTORY_RITES` working.
   - Learn the Mass renders unchanged.
2. **Before Mass (S0) as text.**
   - Write B1–B6; send them for review.
   - Learn the Mass gains a "Before Mass" part.
   - No licensing blockers; high value for first-time visitors.
3. **Participation guidance page** (§7), linked from both experiences.
4. **Liturgy of the Word as text** (W1–W8), plus OCIA notes. Send for review.
5. **Liturgy of the Eucharist and Communion Rite as text** (E1–C7). The largest step, and it needs priest review.
6. **Concluding Rites** (R1–A1). Learn the Mass now covers the whole Mass.
7. **Practice expansion:** the 7 new *Amen* exercises. Only content fields are needed; the practice engine already supports them.
8. **Scenes:** specify, generate, and review in batches by part.
9. **Narration audio:** generate per part with the existing script, before the text-to-speech shutdown or with a new provider.
10. **Experience Mass segments:** add S0, then S2–S13 in order, using described captions where text is not licensed. Add the segment menu and the "not receiving Communion" path.
11. **Licensed dialogue:** if permission is granted, add the words to the `response` lines. Practice and Experience pick them up with no structural change.
