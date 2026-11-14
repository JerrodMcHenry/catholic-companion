# Before Mass: Narration and Experience Design (Milestone 7A)

Status: **approved English narration, with the Milestone 7B corrections** ("not merely a symbol"; posture wording in B5; extraordinary ministers in B6 Learn more). F3 still requires qualified liturgical review. The app's copy of this narration is `content/before-mass.ts`; `npm test` checks that the two stay identical. No audio, images, translation, or code have been produced. Scope and order follow `docs/mass-curriculum.md` §2 (moments B1–B6).

**What changed in this revision.** The draft was rewritten for a shorter continuous experience:

- B1 now explains why Catholics come to Mass: adoration, thanksgiving, mercy, and petition, centered on the Eucharist.
- Secondary details moved into Learn More.
- B4 now distinguishes the genuflection to the Blessed Sacrament from the bow to the altar.
- B6 ties the vestment color to the season shown.
- Audio is now planned as one recording per moment (§6).

Before/after figures are in §5.

---

## 1. Purpose and audience

**Purpose.** A continuous, narrated walk from the church door to the moment Mass begins. Afterwards a complete beginner should understand:

1. **Why** Catholics gather for Mass: to worship God, to thank him, to seek his mercy, and to bring him their prayers. At the heart of it is the Eucharist, where Christ's one sacrifice is made present.
2. What they see on entering a Catholic church, and what the common gestures mean.
3. What they may do, what Catholics customarily do, and what is optional for a guest.
4. That Mass is about to begin, and that they should stand when it does.

**Audience.** People who have never attended Mass: visitors, friends and relatives of Catholics, OCIA participants (people preparing to become Catholic), and Catholics returning after a long absence.

**Experience.**

- The learner presses **Begin** once. The six moments play straight through, with no Next button, quiz, or microphone.
- Each moment has its own scene, with captions as the narration is spoken.
- A **Learn more** control on each moment opens its optional explanation and pauses playback.
- Pause, Resume, and Restart are always available.
- The last line leads directly into Experience Mass, at the Entrance Procession (Milestone 6A).

**Guiding principle:** simplify the explanation, not the theology.

### Script conventions

- Each moment's narration is recorded as **one audio file** (§6). Paragraph breaks in the script become the narrator's natural pauses. They are not separate files.
- `(pause)` marks a slightly longer breath that the voice instructions should ask for. It is not a separate silence track.
- `[Label: …]` is an on-screen label that appears with the sentence before it. It is timed from the captions (§6).
- The only formal prayer text spoken is the Trinitarian formula with *Amen* (B3), already cleared for the app (README, licensing item 2). One short Scripture phrase is quoted in B4 (see flag F12). Everything else is original narration.

---

## 2. Six-moment outline

| # | Moment | Core idea in the narration | Scene |
|---|---|---|---|
| B1 | Why Catholics gather on Sunday | Worship: adoration, thanksgiving, mercy, and petition. The Eucharist is Christ's one sacrifice made present, and his Body and Blood are received in Communion. Sunday is the day of the Resurrection. | Church exterior, people arriving |
| B2 | Arriving and preparing | Come a little early; no special clothing is needed; phones off; Confession seen briefly; families and accessibility help | Entrance just inside the doors |
| B3 | Holy water and the Sign of the Cross | How to sign yourself; water recalls Baptism, the cross and words recall salvation and the Trinity; optional for visitors | Holy water font (with the Sign of the Cross demonstration) |
| B4 | Genuflecting toward the tabernacle | Tabernacle, sanctuary lamp, Real Presence. Genuflection is adoration of the Blessed Sacrament; a bow is the reverence to the altar. Visitors are not expected to genuflect. | Side-chapel tabernacle, then the aisle |
| B5 | Finding a seat and praying quietly | Sanctuary; the altar as table of the Lord and altar of sacrifice; ambo; crucifix; quiet preparation; the three postures | View from a pew toward the sanctuary |
| B6 | Who's who, and what the colors mean | The priest acts in the person of Christ; deacon, servers, lectors, cantor, others; colors and the season shown; stand when Mass begins | Sanctuary as ministers get ready |

The estimated total is about **7 minutes** at a warm 150 words per minute, or about **6¼ minutes** at the current narrator's pace. Details, and why this is slightly above the 5–6 minute target, are in §5.

---

## 3. The six moments

### B1. Why Catholics gather on Sunday

**A. Scene**

- **New image `church-exterior`:** the front of the modest parish church of the agreed arrangement (`docs/illustrations.md` §2), on a bright Sunday morning. People of all ages walk toward open doors.
- No existing asset fits: all six current scenes show Mass in progress.
- Interim fallback: a plain cream card with the ✠ mark.

**B. Narration**

> Welcome. Let's go to Mass together.
>
> (pause)
>
> Why do Catholics come to Mass? Above all, to worship God. We adore him as the God who made us. And we thank him: for life, for his love, and most of all for sending his Son, Jesus Christ, to save us.
>
> We also come to ask for his mercy, and to bring him our needs and the needs of the world.
>
> (pause)
>
> At the heart of the Mass is the Eucharist, a word that means "thanksgiving." Catholics believe that in the Eucharist, Jesus' sacrifice on the cross, the sacrifice that won our forgiveness, is made present among us. Not a new sacrifice, but his one sacrifice, offered once for all. And the bread and wine become his Body and Blood, which Catholics who are prepared receive in Holy Communion.
>
> (pause)
>
> Catholics gather especially on Sunday, the day Jesus rose from the dead, and the Church asks every Catholic to be at Mass each Sunday.
>
> Whether you're visiting, preparing to become Catholic, or coming back after a long time, you don't need to know anything yet. We'll go through it together.

**C. Meaning**

- **The Mass is the Church's central act of worship,** not simply a gathering to say thank you.
- It has four traditional purposes, the "ends" of the Mass:
  - **adoration:** we worship God;
  - **thanksgiving:** we thank him for creation, life, his blessings, and above all salvation in Christ;
  - **atonement:** we seek mercy through Christ's saving sacrifice;
  - **petition:** we bring our needs and the world's.
- All four happen in and through the **Eucharist.** In it, Christ's one sacrifice on the cross is made sacramentally present, not repeated. It is also a sacred banquet in which Catholics who are properly prepared receive Christ himself in Communion.
- **Sunday** is the weekly celebration of the Resurrection.

**D. Participation**

- Nothing to do yet.
- The Sunday obligation is for Catholics.
- Visitors, OCIA participants, and returning Catholics are addressed directly in the last paragraph, without pressure.

**E. Visual and posture cues**

- `[Label: Eucharist · "thanksgiving"]` when the word is defined.
- Optional: four small words appear one by one with the first two paragraphs: **Adore · Thank · Ask mercy · Pray**. If shown, they must match the spoken words exactly when translated.
- No posture indicator.

**F. Transition**

> Let's begin at the door.

The image crossfades to the B2 scene during the silence between recordings (§6).

**G. Learn more (optional)**

- **The four ends of the Mass.** Catholic tradition speaks of the Mass as offered:
  - in adoration (praise of God);
  - in thanksgiving;
  - in atonement (expiation for sin);
  - in petition (asking for the needs of the living and the dead).

  These are the purposes for which Christ offered himself on the cross. The Council of Trent taught that the Mass is not only praise and thanksgiving but truly propitiatory, and the Catechism repeats this (CCC 1367; Trent, Session XXII). Pope Pius XII named the four together in *Mediator Dei* (1947).
- **"Eucharist"** comes from the Greek for "thanksgiving". The Eucharist is a sacrifice of praise and thanksgiving to the Father (CCC 1328, 1359–1361).
- **One sacrifice, made present.** The Eucharist makes present (re-presents) the one sacrifice of the cross; it does not repeat it. "The victim is one and the same" (CCC 1366–1367, paraphrasing Trent). The Mass is "at the same time, and inseparably", the sacrificial memorial of the cross and the sacred banquet of Communion (CCC 1382, paraphrased).
- **Receiving Communion.** Catholics who are properly prepared receive. That means in a state of grace, and having kept the one-hour fast (CCC 1385, 1387; CIC 916, 919). This is explained fully at the Communion moment.
- **Sunday.** Christians have gathered on "the first day of the week" since the Apostles (Acts 20:7; Revelation 1:10). Around AD 155, St. Justin Martyr described a Sunday Mass with the same shape as today's (CCC 1345).
- **The obligation.** Catholics are obliged to take part in Mass on Sundays and holy days of obligation. Missing deliberately without a serious reason, such as illness or caring for infants, is a grave matter. A Mass on Saturday evening also fulfills the Sunday obligation (CCC 2180–2181; CIC 1247–1248). The USCCB publishes the U.S. holy days.
- **Refs:** Acts 20:7; Revelation 1:10; Hebrews 7:27, 10:10; CCC 1324, 1328, 1345, 1359–1361, 1366–1368, 1382, 1385, 2174–2183; CIC 916, 919, 1247–1248; Council of Trent, Session XXII, ch. 1–2 and canon 3; Pius XII, *Mediator Dei* (four ends; paragraph numbers to verify, F13).

---

### B2. Arriving and preparing

**A. Scene**

- **New image `church-entrance`:** just inside the main doors.
  - A greeter or usher stands by a rack of worship aids.
  - Through the inner doors, the nave with pews.
  - Along a side wall, a door marked for Confession, with two people waiting.
  - A parent with a young child.
  - An accessible entrance or ramp is visible.
- No phones are shown.

**B. Narration**

> Try to arrive a few minutes early. You don't need special clothing to attend; neat, modest clothes are a simple sign of respect.
>
> As you go in, silence your phone. Many people come early to pray.
>
> Some people may be waiting near a small room at the side. That's for Confession, where Catholics confess their sins to a priest and receive God's forgiveness.
>
> Families with young children come too, and it's fine to step out if a little one needs a break. If you need help with seating, hearing, or getting around, ask an usher at the door.

**C. Meaning**

- Arriving early and keeping quiet help everyone turn from the busyness of the week toward God. Silence before Mass is encouraged by the Church itself (GIRM 45).
- Confession before Mass reflects the Catholic practice of being reconciled with God before receiving Communion.

**D. Participation**

- **Everyone:** come a little early if possible; silence phones; dress respectfully, as you are able.
- **Catholics:** may go to Confession; keep the fast before Communion (Learn more).
- **Visitors:** nothing is required. The Confession line is for Catholics; anyone may speak with a priest at another time.

**E. Visual and posture cues**

- `[Label: Confession]` on the side door.
- A small icon, `[Label: Phone on silent]`.
- `[Label: Ushers can help]` near the greeter.
- No posture indicator.

**F. Transition**

> Just inside the doors, look for a small basin of water.

**G. Learn more (optional)**

- **Clothing.** There is no universal dress code. The Catechism says our bearing, including gestures and clothing, should express the respect, solemnity, and joy of the celebration (CCC 1387, paraphrased). Customs vary by parish and culture.
- **Confession**, also called the Sacrament of Penance or Reconciliation. A Catholic confesses their sins to a priest, expresses sorrow, and receives absolution, God's forgiveness through the Church. A Catholic aware of serious sin goes to Confession before receiving Communion. What is said in Confession is strictly confidential (CCC 1422–1424, 1457, 1467; CIC 916).
- **The Eucharistic fast.** Catholics who will receive Communion abstain from food and drink, except water and medicine, for one hour beforehand. The elderly, the sick, and those caring for them are exempt (CIC 919).
- **Children.** Some churches have a separate room for families with small children; ask an usher.
- **Accessibility.** Many parishes offer accessible seating, hearing assistance, large-print worship aids, and Communion brought to a person's seat. Availability varies; ushers or the parish office can help.
- **Refs:** GIRM 45; CCC 1387, 1422–1424, 1457, 1467; CIC 916, 919.

---

### B3. Holy water and the Sign of the Cross

**A. Scene**

- **New image `holy-water-font`:** a stone basin just inside the nave doors. A parishioner's right hand touches the water. Same church interior, in natural light.
- **Image in use:** `b3-holy-water.png`, which itself shows the Sign of the Cross, for the whole moment. The demonstration below was removed once it existed.
- **Demonstration (superseded):** reuse the existing `sign-of-the-cross` image during the "Here's how" paragraph. It shows the correct right-handed order (`docs/illustrations.md` §8). Caption it "The Sign of the Cross (shown here during Mass)" so it doesn't suggest Mass has begun. Then return to the font.

**B. Narration**

> This is a holy water font. Catholics dip their fingers in the blessed water and make the Sign of the Cross.
>
> Here's how. With your right hand, touch your forehead, then the middle of your chest, then your left shoulder, then your right. As they do, Catholics pray: In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
>
> (pause)
>
> The water recalls Baptism, which washes away sin and makes a person a child of God and a member of his Church. For Catholics, it's a reminder that they belong to Christ.
>
> The cross recalls how Jesus saved us, and the words name the one God: Father, Son, and Holy Spirit.
>
> If you're visiting, you're free to bless yourself or simply walk on. Either is respectful.

**C. Meaning**

- Holy water is a **sacramental**: a sacred sign, blessed by the Church, that disposes us to receive grace. It is not a charm.
- The Sign of the Cross professes the central truths of the faith in one gesture: the Trinity (the words) and salvation through the cross (the gesture).
- The narration explains Baptism in the third person ("a person… they belong to Christ"), so it does not assume the listener is baptized.

**D. Participation**

- **Catholics:** customarily bless themselves on entering. This is a devotional custom, not a requirement.
- **Visitors:** entirely optional. Christians of other traditions may choose to; non-Christians should feel no pressure.

**E. Visual and posture cues**

- `[Label: Holy water font]`.
- During "Here's how": a four-point overlay, showing forehead, chest, left shoulder, right shoulder in turn.
- `[Label: Amen = "Yes, it is so"]` on the word *Amen*. The meaning is shown rather than spoken, to keep the narration short; Experience Mass explains it again at the first response.
- `[Label: Optional for visitors]` with the last paragraph.
- Posture: standing.

**F. Transition**

> Now step into the church. Before choosing a seat, there's something to look for.

**G. Learn more (optional)**

- **Baptism.** By Baptism we are freed from sin, reborn as children of God, and made members of Christ and his Church (CCC 1213, 1263–1270). St. Paul says we were "buried with him through baptism" so that we might live a new life (Romans 6:3–4).
- **The font at the door.** It recalls the baptismal promises (CCC 1185). Sacramentals "prepare us to receive grace and dispose us to cooperate with it" (CCC 1670, paraphrased; 1667–1679).
- **The Sign of the Cross.** Catholics of the Latin Church touch the left shoulder before the right; Eastern Christians touch the right first. The words echo Jesus' command to baptize in the name of the Father, the Son, and the Holy Spirit (Matthew 28:19; CCC 2157, 2166).
- **Empty fonts.** Fonts are sometimes empty, for example near Easter or for health reasons (F4).
- **Refs:** Matthew 28:19; Romans 6:3–4; CCC 1185, 1213, 1263–1270, 1667–1679, 2157, 2166.

---

### B4. Genuflecting toward the tabernacle

**A. Scene**

1. **New image `tabernacle-chapel`:** the side chapel of the agreed church. A gold tabernacle with a closed door on a marble pedestal. A lit sanctuary lamp in red glass beside it. One person kneels in prayer nearby.
2. **New image `aisle-reverence`:** the main aisle. One parishioner genuflects (right knee to the floor, upright posture) toward the side chapel. A second parishioner makes a profound bow toward the altar. This shows both gestures without suggesting they are interchangeable.

Image 1 (`b4-tabernacle.png`, which also shows a genuflection) is shown through the genuflection paragraph. Image 2 (still a placeholder) appears from "The altar is honored too…".

**B. Narration**

> In most Catholic churches you'll find a tabernacle: a small, beautiful cabinet, often gold, near the altar or, as here, in a side chapel. The candle beside it, often in red glass, is the sanctuary lamp.
>
> The tabernacle holds the Blessed Sacrament: the Eucharist, kept after Mass for the sick and for prayer.
>
> (pause)
>
> Catholics believe the Eucharist is not merely a symbol. Jesus himself is truly present: his Body and Blood, soul and divinity, under the appearance of bread. They believe it because of his own words at the Last Supper: "This is my body."
>
> (pause)
>
> So when Catholics come before the Blessed Sacrament, they genuflect: they bend the right knee to the floor for a moment, in adoration. Someone who can't kneel makes a deep bow instead.
>
> The altar is honored too, with a bow rather than a genuflection. Where the tabernacle is off to the side, as here, many people bow to the altar before taking their seat. Customs vary; follow what you see.
>
> Visitors aren't expected to genuflect, since it expresses faith that Jesus is present. Entering quietly is respectful, and you may bow your head if you wish.

**Requires qualified liturgical review (F3):** the sentence "Where the tabernacle is off to the side, as here, many people bow to the altar before taking their seat" describes a common local custom, not a universal rule. The narration therefore adds "Customs vary; follow what you see." Confirm or reword before public release.

**C. Meaning**

- **The Real Presence** is the belief that the consecrated bread is Christ himself: Body, Blood, soul, and divinity, truly, really, and substantially present.
- **Two gestures, two meanings:**
  - The **genuflection** is adoration. It is reserved for Christ in the Blessed Sacrament (and the Cross on Good Friday).
  - The **profound bow** is the reverence given to the altar, which is a sign of Christ, when the Blessed Sacrament is not there.
- Visitors are not asked to make an act of adoration they may not share.

**D. Participation**

- **Catholics:** genuflect to the Blessed Sacrament, or make a deep bow if unable. Where the tabernacle is not in the sanctuary, a bow to the altar is common on entering the pew. *Local practice varies; needs review* (F3).
- **Visitors:** quiet entry, or a bow of the head if they wish. Genuflection is never expected.

**E. Visual and posture cues**

- `[Label: Tabernacle]` and `[Label: Sanctuary lamp]` on image 1.
- On image 2, two chips appear in turn:
  - `● Genuflect: to the Blessed Sacrament`
  - `● Bow: to the altar`
- `[Label: Not expected of visitors]` with the last paragraph.

**F. Transition**

> Now, let's find a seat.

**G. Learn more (optional)**

- **"Tabernacle"** means "tent", recalling the tent where God dwelt among his people in the desert (Exodus 25:8–9; 40:34–35). St. John writes that the Word became flesh and "dwelt" among us (John 1:14).
- **Real Presence.** In the Eucharist the Body and Blood of Christ, together with his soul and divinity, are "truly, really, and substantially contained" (CCC 1374, quoting the Council of Trent). The Church calls the change *transubstantiation* (CCC 1376). The key Scriptures are the Last Supper accounts (Matthew 26:26–28; Mark 14:22–24; Luke 22:19–20; 1 Corinthians 11:23–25) and Jesus' teaching in John 6:51–58.
- **Reservation and the lamp.**
  - The Eucharist is reserved first for the sick and dying, and also for adoration (CCC 1379).
  - Parish churches must reserve it (CIC 934), which is why the narration says "most" churches.
  - A lamp fueled by oil or wax burns near the tabernacle to honor Christ's presence (GIRM 316). Red glass is traditional, not required.
- **Genuflection and bows.**
  - A genuflection, made on the right knee, signifies adoration and is reserved for the Blessed Sacrament and the Holy Cross on Good Friday (GIRM 274).
  - A profound bow is made to the altar (GIRM 275).
  - Where the tabernacle is in the sanctuary, ministers genuflect on approaching and leaving the altar (GIRM 274).
  - Genuflecting or bowing deeply before the Blessed Sacrament expresses faith in the Real Presence (CCC 1378; Philippians 2:10).
- **Refs:** Exodus 25:8–9; John 1:14; John 6:51–58; Matthew 26:26–28; Luke 22:19–20; Philippians 2:10; CCC 1183, 1374, 1376, 1378–1379; GIRM 274–275, 314–316; CIC 934.

---

### B5. Finding a seat and praying quietly

**A. Scene**

- **New image `pew-view`:** from a pew a few rows from the back, looking toward the empty sanctuary before Mass. It follows the agreed arrangement:
  - stone altar with a white cloth and two lit candles;
  - crucifix on the wall above it;
  - ambo on the left;
  - presider's chair on the right;
  - no tabernacle in the sanctuary;
  - no Book of the Gospels on the altar yet.
- In the foreground: a folded-down kneeler and a worship aid in the rack. A few people kneel; others sit.
- `altar-reverence` is the layout reference, but it shows the priest during Mass and cannot be reused here.

**B. Narration**

> Sit wherever you like, unless a pew is reserved, and look toward the front. The raised area is the sanctuary.
>
> At its center is the altar. It is both the table of the Lord, recalling the Last Supper, and the altar of sacrifice, where Christ's offering on the cross is made present. Nearby are the ambo, where the Scriptures are read, and a crucifix, a cross bearing the figure of Jesus. Arrangements differ from church to church.
>
> (pause)
>
> Many people kneel and pray quietly before Mass, using the padded kneeler at their feet. It's a time to thank God and bring him what's on your heart. If praying is new to you, simply sit and take it in.
>
> During Mass, the congregation stands, sits, and kneels at different parts of the celebration. Standing shows attention and readiness to pray, sitting is for listening, and kneeling expresses adoration. Stand and sit with everyone if you can. You may stay seated instead of kneeling, and you never need to make a gesture you're not comfortable with.

**C. Meaning**

- **The altar** is the center of the church. It is both the place of Christ's sacrifice and the table of the Lord's Supper, and in Catholic understanding it is also a sign of Christ himself. This is why it is kissed, bowed to, and incensed.
- **The ambo** is the "table of the Word". **The crucifix** keeps Christ's sacrifice before everyone's eyes.
- **Posture** is part of the prayer: common postures express and foster the unity of the whole assembly.
- The narration invites prayer ("thank God… bring him what's on your heart") and gives non-praying visitors an honest alternative ("sit and take it in"). It does not call mere quiet "prayer".

**D. Participation**

- **Everyone:** sit anywhere unreserved; keep conversation low.
- **Catholics:** customarily kneel and pray before Mass. This is a devotional custom.
- **Visitors:** kneel, sit, or simply look and listen. During Mass, standing and sitting with everyone is a courtesy; kneeling and other gestures are never required of a guest.

**E. Visual and posture cues**

- Labels in turn: `[Label: Sanctuary]`, `[Label: Altar]`, `[Label: Ambo]`, `[Label: Crucifix]`.
- `[Label: Kneeler]` on the foreground.
- During the postures paragraph, three chips appear in turn: `● Stand`, `● Sit`, `● Kneel`, each with a one-word meaning (attention, listening, adoration). Experience Mass then shows the current posture throughout.

**F. Transition**

> As you wait, look around at the people getting ready.

**G. Learn more (optional)**

- **The altar:** the altar of the sacrifice and the table of the Lord (CCC 1383); a sign of Christ (CCC 1182; GIRM 298).
- **The ambo:** the table of God's word (GIRM 309; CCC 1184). **The chair** signifies the priest's office of presiding (GIRM 310). **The crucifix:** GIRM 308.
- **Postures.** A common posture is a sign of unity and both expresses and fosters the participants' interior attitude (GIRM 42–43). The U.S. kneeling norms are explained at each moment of Mass. Anyone who cannot kneel or stand may sit (GIRM 43).
- **Worship aids.** The book or sheet in the pew usually has the songs and the people's responses, and often the readings. Some churches use screens.
- **Seating.** A seat a few rows from the back lets a newcomer follow others. Someone at the end of a row may slide in as others arrive.
- **Refs:** GIRM 42–43, 45, 296–310; CCC 1182–1184, 1383.

---

### B6. Who's who, and what the colors mean

**A. Scene**

- **New image `sanctuary-preparing`:** the same camera angle as `pew-view`, minutes later.
  - A server in cassock and surplice lights the altar candles.
  - A lector checks the book at the ambo.
  - A cantor stands at a music stand near the front.
  - An usher is at the back edge of the frame.
  - The priest is not yet visible.
- **Color strip:** a simple graphic with four chips (green, violet, white/gold, red) appears with the colors paragraph.
- **Season rule:** the spoken color and the highlighted chip must match the season of the scenes that follow. All current scenes show Ordinary Time (green), so the narration names green and explains why. If later scene sets depict another season, this paragraph's last sentence and the highlighted chip change with them.

**B. Narration**

> The priest leads the Mass. He has received the sacrament of Holy Orders, and Catholics believe that at Mass, Christ himself, the head of his Church, acts through him. That's why only a priest can preside at the Eucharist.
>
> A deacon, also ordained, may assist, read the Gospel, and preach. Servers help at the altar, lectors read Scripture, a cantor leads the singing, and others welcome people or help give Communion. Not every Mass has all of them.
>
> (pause)
>
> The priest's vestment, called a chasuble, changes color with the Church's seasons. Green is for Ordinary Time, violet for Advent and Lent, white or gold for Christmas and Easter, and red for the Holy Spirit and the martyrs. The Mass we're about to join is in Ordinary Time, so he wears green.

**C. Meaning**

- **The Mass is the prayer of the whole Church,** in which each person takes part according to their role.
- **The priest acts in the person of Christ, the Head.** This is a central Catholic belief, not merely a job description. It is why the Eucharist requires an ordained priest.
- **Lay ministries** express the participation of all the baptized.
- **Colors** mark the seasons that retell Christ's life through the year.

**D. Participation**

- Nothing to do. Anyone may ask an usher for help.

**E. Visual and posture cues**

- Labels in turn: `[Label: Server]`, `[Label: Lector]`, `[Label: Cantor]`.
- The color strip highlights each chip as it is named, and the green chip stays highlighted.
- At "everyone will stand" (below), the posture chip `● Stand` appears.

**F. Transition into Mass**

> Soon the music will begin, and everyone will stand. That's the sign that Mass is starting.
>
> (pause)
>
> Let's stand, and begin.

- On the final line, the screen moves straight into Experience Mass beat 1, the Entrance Procession, with no button press.
- The Entrance Procession scene and caption take over; the Stand chip remains.

**G. Learn more (optional)**

- **The priest.** In the ordained minister it is Christ himself who acts; the priest acts *in persona Christi Capitis*, "in the person of Christ the Head" (CCC 1548, paraphrased). Only validly ordained priests can preside at the Eucharist and consecrate the bread and wine (CCC 1411). Holy Orders: CCC 1536.
- **Deacons.** Ordained for service; married men may be ordained permanent deacons (CCC 1569–1571, 1579). At Mass: GIRM 94, 171–186.
- **Lay ministries** (numbers to verify, F8):
  - servers: GIRM 100;
  - lectors: GIRM 99, 101;
  - cantor or psalmist: GIRM 102–104;
  - ushers and the collection: GIRM 105;
  - **extraordinary ministers of Holy Communion:** lay people, not ordained, who help distribute Communion when needed. The *ordinary* ministers of Holy Communion are the ordained (bishops, priests, and deacons). Lay ministers assist; they do not take the place of the priest's role (GIRM 162; CIC 910, 230 §3).
- **Colors** (GIRM 345–347):
  - **rose** may be used on the third Sunday of Advent and the fourth Sunday of Lent;
  - **violet or black** may be used at Masses for the dead, and **white** is common at U.S. funerals (F7);
  - on more solemn days, festive or more precious vestments may be used.
- **Vestments:** alb, stole, chasuble (GIRM 336–340); the deacon's dalmatic.
- **Participation of all the baptized:** SC 14, 26–29.

---

## 4. Seamless transitions

| From → To | Spoken bridge (last line of the recording) | Visual |
|---|---|---|
| B1 → B2 | "Let's begin at the door." | Exterior → entrance |
| B2 → B3 | "Just inside the doors, look for a small basin of water." | Entrance → font |
| B3 → B4 | "Now step into the church. Before choosing a seat, there's something to look for." | Font → tabernacle chapel |
| B4 → B5 | "Now, let's find a seat." | Aisle → pew view |
| B5 → B6 | "As you wait, look around at the people getting ready." | Pew view → the same view minutes later (reads as time passing) |
| B6 → Mass | "Soon the music will begin… Let's stand, and begin." | Stand chip → Experience Mass, Entrance Procession |

**Design notes:**

- Every bridge names the next physical step, so the six moments feel like one walk through the church rather than six lessons.
- No moment opens with its own introduction or closes with a summary.
- Visual crossfades happen in the short silence between recordings; spoken audio never overlaps (§6).

---

## 5. Word counts and estimated timing

Estimates use **150 words per minute**, the recommended warm and unhurried delivery. The current English narrator measures about **165 wpm** across the 14 existing recordings; that column shows the faster pace.

Allowance per moment for paragraph pauses: about **0.5 s per paragraph break**, plus about **1 s for each `(pause)`**. Between moments: **1 s** of silence for the image crossfade (5 changes).

| Moment | Words | Paragraphs | Speech at 150 wpm | Pause allowance | **Estimated** | At 165 wpm |
|---|---|---|---|---|---|---|
| B1. Why Catholics gather on Sunday | 190 | 7 | 1:16 | 6.0 s | **1:22** | 1:15 |
| B2. Arriving and preparing | 109 | 5 | 0:44 | 2.0 s | **0:46** | 0:42 |
| B3. Holy water and the Sign of the Cross | 144 | 6 | 0:58 | 3.5 s | **1:01** | 0:56 |
| B4. Genuflecting toward the tabernacle | 196 | 7 | 1:18 | 5.0 s | **1:23** | 1:16 |
| B5. Finding a seat and praying quietly | 183 | 5 | 1:13 | 3.0 s | **1:16** | 1:10 |
| B6. Who's who, and what the colors mean | 150 | 5 | 1:00 | 4.0 s | **1:04** | 0:59 |
| Silences between moments (5 × 1 s, image crossfades) | | | | 5.0 s | | |
| **Whole section** | **972** | | | | **6:57** | 6:22 |

**Before and after this revision:**

| | Previous draft | This revision |
|---|---|---|
| Spoken words | 1,307 | 972 |
| Audio files | 39 clips | 6 recordings (one per moment) |
| Estimated playback (150 wpm) | 9:14 | 6:57 |

The moments still differ in length on purpose. B1 and B4 carry the essential theology and are the longest; B2 and B6 are short and practical.

**Against the 5–6 minute target.** The revision is about **26% shorter** than the previous draft. It lands at about 6:55 at the recommended pace, or about 6:20 at the current narrator's pace. Most of what remains is the purpose of Mass (B1) and the Real Presence and genuflection-versus-bow distinction (B4). Both were required not to be cut.

**Optional further cuts,** for reviewers to choose from. Each would move a sentence into Learn more:

| Cut | Saves | Cost |
|---|---|---|
| B2: the Confession sentence | ~25 words, ~10 s | First-time visitors may wonder about the line by the side room. |
| B6: the four-color list (keep only "in Ordinary Time he wears green") | ~25 words, ~10 s | Colors explained only in Learn more. |
| B5: "Arrangements differ from church to church." | ~6 words, ~3 s | B4 already says customs vary; keep if reviewers want the layout caveat explicit. |
| Slower-paced voice → current narrator pace | ~35 s | Less unhurried feel. |

Taking the first two cuts would give about **6:35** at 150 wpm (about 6:00 at the current pace).

---

## 6. Recommended audio segmentation

**Recommendation: one recording per moment per language.** That is six MP3 files for English, and six for Spanish later, each with a small caption-timing file.

### Why not the alternatives

| Option | Problems |
|---|---|
| One paragraph per clip (previous draft: 39 clips) | Many requests and files. Tiny gaps or loading stutters between clips. The voice's tone can shift slightly from clip to clip. Pauses become exact but sound mechanical. |
| One file for the whole section | One change regenerates everything. Restarting a moment needs a seek table. Larger first download (about 6 MB). Scene changes depend entirely on timestamps. |
| **One file per moment** | Six files. Each moment is one natural reading with the narrator's own pauses. Scene changes happen at file boundaries. Editing one moment regenerates one file. |

### How it works

- **Generation.** Reuse `scripts/generate-narration.mjs`, adding one recording per moment. The input is the moment's narration paragraphs joined with blank lines. The voice instructions ask for a slower, warm pace and a longer breath where the script says `(pause)`. Existing hashing and the manifest detect changed moments.
- **Model deadline.** OpenAI's current text-to-speech models shut down on January 6, 2027 (OpenAI deprecations page). Generate before then, or choose a new provider; the folder layout does not change.
- **Captions.** After generation, the script transcribes each file once with timestamps (as was done to verify the priest audio in 6A) and saves a small JSON of sentence start times beside the MP3. The on-screen caption always shows the **script's** sentence, not the transcription. The transcription only supplies timing, and it doubles as a check that the voice said exactly the script. No timing work happens in the browser.
- **Labels and in-moment image changes** are tied to a sentence number in that JSON, for example the B3 demonstration image and B4's second image. If audio is regenerated, the timing is regenerated with it.
- **Playback.**
  - One `<audio>` element plays the moments in order. When a file's `ended` event fires, the player waits about 1 s, crossfades the image (visual only), and starts the next file.
  - **Visual crossfade:** the image fades over about 1 s in that gap, or cuts instantly with reduced motion.
  - **Audio:** no audio crossfade and no overlap. Each recording ends before the next begins.
- **Preloading.** While one moment plays, the next file is fetched in the background. It is preloaded only, never played, so first-play delays stay small. Each file is roughly 0.6–1.2 MB.
- **Pause, resume, and restart.**
  - Pause and resume use the audio element's position.
  - Restart returns to B1.
  - An optional "replay this moment" seeks to 0 in the current file.
  - Opening Learn more pauses playback; closing it resumes.
- **Spanish.** Same six moments, same cue numbers, separate files and timing files, since Spanish durations differ. Captions for bilingual mode use the timing of the language being heard.

This matches the Experience Mass player of 6A: one audio element, a reducer, and audio advancing only on the real `ended` event. That player is unchanged in this milestone.

**Implemented in Milestone 7B** as recommended, with these specifics:

- **Recordings:** `public/audio/en-US-marin/<moment id>-narration.mp3`. They use the `gpt-4o-mini-tts-2025-03-20` snapshot, because the current model version kept dropping the last sentence of each moment.
- **Timings:** in `content/narration-timings.json`.
- **Captions:** one sentence at a time.
- **In-moment changes:** `cues` in `content/before-mass.ts`.
- **Silence between moments:** 1 s.
- **Pauses:** the `(pause)` marks are not sent to the voice. Paragraph breaks give the natural pauses.

See README, "Milestone 7B".

---

## 7. Sources and verification flags

All narration is original. Church documents are cited by number and paraphrased.

### Checked during this revision

- **GIRM 316:** the sanctuary lamp, fueled by oil or wax, near the tabernacle, honoring Christ's presence. Confirmed in published quotations of the USCCB text. **The curriculum citation has been corrected from 314 to 316** (approved). The curriculum now cites only 316 for B4; 314 (placement of the tabernacle) could be re-added if you wish.
- **GIRM 274–275:**
  - a genuflection on the right knee signifies adoration, and is reserved for the Blessed Sacrament (and the Holy Cross on Good Friday);
  - all who pass before the Blessed Sacrament genuflect unless in procession;
  - a profound bow is made to the altar.

  Confirmed in published quotations of the USCCB text.
- **Red lamp glass:** traditional; no liturgical law requires the color.

### Established and cited

- **On the Eucharist:** CCC 1324, 1328, 1359–1361, 1366–1367, 1374, 1376, 1378–1379, 1382, 1385, 1411.
- **On worship and the Church:** CCC 1548, 2180–2181.
- **Canon law:** CIC 916, 919, 934, 1247–1248.
- **Scripture:** Matthew 28:19; Romans 6:3–4; Philippians 2:10; John 6:51–58; the Last Supper accounts.

### Flags: check before release

| # | Item | Status |
|---|---|---|
| F1 | Sanctuary lamp citation (GIRM 316) | **Resolved:** the curriculum is corrected. |
| F2 | "Often in red glass" | **Resolved:** customary, not required; the wording "often" is accurate. |
| F3 | On entering the pew, a bow to the altar where the tabernacle is not in the sanctuary; genuflection "when Catholics come before the Blessed Sacrament" | GIRM 274 says all who pass before the Blessed Sacrament genuflect. **How far "before" extends** (within sight of a side chapel?) and the custom on entering pews are not spelled out. **Needs a liturgist's wording.** |
| F4 | Empty fonts near Easter | Moved out of the narration into Learn more. The commonly cited 2000 response from the Congregation for Divine Worship was **not checked.** |
| F5 | Who may bless holy water | Removed from the narration ("The water has been blessed"). No longer needs checking for the narration. |
| F6 | CCC 1185 and the holy water font | Check the exact wording before quoting. |
| F7 | U.S. colors for Masses for the dead (violet, black, white) | Check the GIRM 346 U.S. adaptation. |
| F8 | GIRM numbers for ministries (94, 99–105, 162, 171–186) and vestments (336–340) | Verify each against the USCCB text. |
| F9 | Arrival time | **Resolved:** the narration now says "a few minutes early". |
| F10 | U.S. holy days of obligation | Link to the USCCB list; don't enumerate. |
| F11 | "Arrangements vary" (tabernacle, ambo, chair) | Accurate in principle; no change. |
| F12 | Quoted Scripture: "This is my body" (B4) | Four words common to all English translations of Luke 22:19 / 1 Corinthians 11:24, quoted as Scripture. It is also part of the priest's words at Mass, so confirm with the licensing reviewer that quoting it as Scripture is acceptable. |
| F13 | The four ends of the Mass | A traditional teaching, consistent with Trent (Session XXII, propitiatory sacrifice) and CCC 1367. *Mediator Dei* names praise, thanksgiving, expiation, and impetration (see its paragraphs around 71–72 and 85); **paragraph numbers not verified.** "Atonement" is used for expiation, as the brief requested. |
| F14 | Standing as "attention and readiness to pray" | A catechetical summary, not a GIRM definition; GIRM 42 speaks of posture expressing and fostering the interior attitude. Acceptable as simplification; confirm. |
| F15 | "Only a priest can preside at the Eucharist" | CCC 1411. Accurate; confirm the wording is pastorally appropriate for beginners. |

### Licensing

- **Spoken formula:** only the Trinitarian formula with *Amen* (**C**, cleared).
- **Quoted Scripture:** one four-word phrase (F12).
- **Paraphrases:** church documents are paraphrased; no liturgical translation is reproduced.
- **Music:** none.

---

## 8. Content requiring review

**For a priest or liturgy office:**

1. **B1, purpose of Mass and the sacrifice sentence:** "Jesus' sacrifice on the cross, the sacrifice that won our forgiveness, is made present among us. Not a new sacrifice, but his one sacrifice, offered once for all."
2. **B1, Communion:** "Catholics who are prepared receive in Holy Communion." Is "prepared" adequate for "properly disposed" at first contact?
3. **B1, the Sunday obligation** stated simply, with the gravity kept in Learn more.
4. **B4, the Real Presence paragraph**, and the genuflect-or-bow guidance (F3).
5. **B4, visitors:** "Visitors aren't expected to genuflect, since it expresses faith that Jesus is present."
6. **B6, the priest:** "Christ himself, the head of his Church, acts through him. That's why only a priest can preside at the Eucharist."

**For a catechist or OCIA director:**

7. **B1, the closing line** that addresses visitors, OCIA participants, and returning Catholics together.
8. **B5:** "If praying is new to you, you can simply sit and take it in", and the posture guidance for guests.
9. **B3:** Baptism described without assuming the listener is baptized.

**For accessibility review:**

10. **B2:** the ushers line, and the Learn more list of typical accommodations.

---

## 9. Reinforcing the purpose of Mass in later sections

B1 introduces a theme that the rest of Catholic Companion must keep consistent: **the Mass is the Church's central act of worship.** In it, we adore God, thank him, seek his mercy, and bring him our petitions. All of this happens in and through the Eucharist, where Christ's one sacrifice is made present (not repeated), and which is also the sacred banquet of Communion.

**Recommended reinforcement (notes only; later sections are not rewritten here):**

| Later moment (curriculum ID) | Theme to name briefly |
|---|---|
| Penitential Act, Kyrie, Lamb of God (I5, I6, C3) | **Mercy / atonement:** we ask mercy, trusting in Christ's sacrifice. |
| Gloria, Sanctus (I7, E7) | **Adoration and praise.** |
| Collect, Universal Prayer, Lord's Prayer (I8, W8, C1) | **Petition** for ourselves and the world. |
| Preface Dialogue and Preface (E5, E6) | **Thanksgiving:** connect back to "Eucharist means thanksgiving". |
| Consecration and Mystery of Faith (E9, E10) | **The one sacrifice made present;** the Real Presence. Use the same wording as B1 and B4. |
| Intercessions (E11) | **Petition and atonement** for the living and the dead. |
| Great Amen (E12) | The people's **assent** to the whole offering. |
| Communion (C5) | The **sacred banquet;** receiving when properly prepared, which fulfills the promise in B1 and B2. |
| Dismissal (R3) | Sent out to live what we have celebrated. |

**Consistency guidance for writers:**

- Always say Christ's sacrifice is **made present**, never "repeated" or "re-enacted".
- Pair "thanksgiving" with worship and sacrifice, never use it alone as a summary of the Mass.
- Use "the Eucharist" for the sacrament and "Holy Communion" for receiving it.
- Existing Introductory Rites content in `content/mass.ts` is compatible with this theme. When those moments are next edited, the four ends can be named in the "Go deeper" text.

---

## 10. Quality review

Each criterion was checked against the final text. Measurements (word counts, the longest sentences) come from a script run over §3.

| # | Criterion | Result |
|---|---|---|
| 1 | Does the learner understand why Catholics attend Mass? | Yes. B1 opens with the question and answers it before anything practical. |
| 2 | Is thanksgiving clearly explained? | Yes: thanks "for life, for his love, and most of all for sending his Son", plus "Eucharist" defined as "thanksgiving". It is not presented as the only purpose. |
| 3 | Is the Eucharist presented accurately as central? | Yes: "At the heart of the Mass"; the one sacrifice made present, not new; the Real Presence; Communion for those prepared. B4 develops the Real Presence. |
| 4 | Does the learner know what is happening and why? | Each gesture comes with its reason: water → Baptism; cross → salvation and the Trinity; genuflection → adoration of Christ present; bow → reverence for the altar; altar → table and sacrifice; postures → their meaning; colors → seasons. |
| 5 | Is it accessible with no Catholic background? | New terms are defined on first use: worship, Eucharist, Holy Communion, Confession, holy water font, Baptism, Amen, tabernacle, sanctuary lamp, Blessed Sacrament, genuflect, sanctuary, altar, ambo, crucifix, kneeler, Holy Orders, deacon, lector, cantor, chasuble, Ordinary Time, Advent, Lent. |
| 6 | Is it natural when spoken aloud? | Mostly short sentences. The longest are the sacrifice sentence in B1 and the posture sentence in B5, both split at natural breath points. Few reassurance phrases ("don't worry", "it's okay") remain. |
| 7 | Is the theology preserved without needless complexity? | Terms such as *transubstantiation*, *in persona Christi Capitis*, *propitiatory*, and *sacramental* are kept in Learn more. The narration states the beliefs plainly. |
| 8 | Is the core experience concise? | See §5. Secondary material (fast, Confession detail, obligation exceptions, colors detail, seating etiquette, empty fonts) moved to Learn more. |
| 9 | Can visitors and OCIA participants follow without pressure? | Every Catholic gesture has a guest alternative. B1 addresses OCIA participants and returning Catholics. Nothing is required of a guest except ordinary courtesy. |
| 10 | Does it flow into the Entrance Procession? | Yes. B6 ends with "Let's stand, and begin," shows the Stand chip, and moves straight into the procession. |

---

## 11. Final uninterrupted narration transcript

This is the complete English narration in playback order, including transitions. `(pause)` marks are omitted. It is assembled automatically from §3 and must stay identical to it.

**B1. Why Catholics gather on Sunday**

Welcome. Let's go to Mass together.

Why do Catholics come to Mass? Above all, to worship God. We adore him as the God who made us. And we thank him: for life, for his love, and most of all for sending his Son, Jesus Christ, to save us.

We also come to ask for his mercy, and to bring him our needs and the needs of the world.

At the heart of the Mass is the Eucharist, a word that means "thanksgiving." Catholics believe that in the Eucharist, Jesus' sacrifice on the cross, the sacrifice that won our forgiveness, is made present among us. Not a new sacrifice, but his one sacrifice, offered once for all. And the bread and wine become his Body and Blood, which Catholics who are prepared receive in Holy Communion.

Catholics gather especially on Sunday, the day Jesus rose from the dead, and the Church asks every Catholic to be at Mass each Sunday.

Whether you're visiting, preparing to become Catholic, or coming back after a long time, you don't need to know anything yet. We'll go through it together.

Let's begin at the door.

**B2. Arriving and preparing**

Try to arrive a few minutes early. You don't need special clothing to attend; neat, modest clothes are a simple sign of respect.

As you go in, silence your phone. Many people come early to pray.

Some people may be waiting near a small room at the side. That's for Confession, where Catholics confess their sins to a priest and receive God's forgiveness.

Families with young children come too, and it's fine to step out if a little one needs a break. If you need help with seating, hearing, or getting around, ask an usher at the door.

Just inside the doors, look for a small basin of water.

**B3. Holy water and the Sign of the Cross**

This is a holy water font. Catholics dip their fingers in the blessed water and make the Sign of the Cross.

Here's how. With your right hand, touch your forehead, then the middle of your chest, then your left shoulder, then your right. As they do, Catholics pray: In the name of the Father, and of the Son, and of the Holy Spirit. Amen.

The water recalls Baptism, which washes away sin and makes a person a child of God and a member of his Church. For Catholics, it's a reminder that they belong to Christ.

The cross recalls how Jesus saved us, and the words name the one God: Father, Son, and Holy Spirit.

If you're visiting, you're free to bless yourself or simply walk on. Either is respectful.

Now step into the church. Before choosing a seat, there's something to look for.

**B4. Genuflecting toward the tabernacle**

In most Catholic churches you'll find a tabernacle: a small, beautiful cabinet, often gold, near the altar or, as here, in a side chapel. The candle beside it, often in red glass, is the sanctuary lamp.

The tabernacle holds the Blessed Sacrament: the Eucharist, kept after Mass for the sick and for prayer.

Catholics believe the Eucharist is not merely a symbol. Jesus himself is truly present: his Body and Blood, soul and divinity, under the appearance of bread. They believe it because of his own words at the Last Supper: "This is my body."

So when Catholics come before the Blessed Sacrament, they genuflect: they bend the right knee to the floor for a moment, in adoration. Someone who can't kneel makes a deep bow instead.

The altar is honored too, with a bow rather than a genuflection. Where the tabernacle is off to the side, as here, many people bow to the altar before taking their seat. Customs vary; follow what you see.

Visitors aren't expected to genuflect, since it expresses faith that Jesus is present. Entering quietly is respectful, and you may bow your head if you wish.

Now, let's find a seat.

**B5. Finding a seat and praying quietly**

Sit wherever you like, unless a pew is reserved, and look toward the front. The raised area is the sanctuary.

At its center is the altar. It is both the table of the Lord, recalling the Last Supper, and the altar of sacrifice, where Christ's offering on the cross is made present. Nearby are the ambo, where the Scriptures are read, and a crucifix, a cross bearing the figure of Jesus. Arrangements differ from church to church.

Many people kneel and pray quietly before Mass, using the padded kneeler at their feet. It's a time to thank God and bring him what's on your heart. If praying is new to you, simply sit and take it in.

During Mass, the congregation stands, sits, and kneels at different parts of the celebration. Standing shows attention and readiness to pray, sitting is for listening, and kneeling expresses adoration. Stand and sit with everyone if you can. You may stay seated instead of kneeling, and you never need to make a gesture you're not comfortable with.

As you wait, look around at the people getting ready.

**B6. Who's who, and what the colors mean**

The priest leads the Mass. He has received the sacrament of Holy Orders, and Catholics believe that at Mass, Christ himself, the head of his Church, acts through him. That's why only a priest can preside at the Eucharist.

A deacon, also ordained, may assist, read the Gospel, and preach. Servers help at the altar, lectors read Scripture, a cantor leads the singing, and others welcome people or help give Communion. Not every Mass has all of them.

The priest's vestment, called a chasuble, changes color with the Church's seasons. Green is for Ordinary Time, violet for Advent and Lent, white or gold for Christmas and Easter, and red for the Holy Spirit and the martyrs. The Mass we're about to join is in Ordinary Time, so he wears green.

Soon the music will begin, and everyone will stand. That's the sign that Mass is starting.

Let's stand, and begin.

