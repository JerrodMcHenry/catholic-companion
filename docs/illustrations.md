# Illustrations: Introductory Rites

The brief for the custom illustrated scenes in the guided Mass simulation (`/simulation`).

**Status:** specification only. No image files exist yet, and the app still shows text placeholders. Code integration starts once all six files below are in `public/scenes/`.

The images are **artistic interpretations** of one typical U.S. parish celebrating the Ordinary Form of the Roman Rite. They are not liturgical instruction. The authority is the text in `content/mass.ts` and the sources it cites, chiefly the General Instruction of the Roman Missal (GIRM) and the Roman Missal. Real parishes differ in architecture and in many legitimate options.

---

## 1. Scenes and the moments they illustrate

Six scenes cover the eight moments. Moments 5–7 share one scene because there is no single visible action that distinguishes them. The moment's own caption, shown under the image, carries what is specific to it.

| # | Moment (`content/mass.ts` id) | Scene file |
|---|---|---|
| 1 | Entrance Procession (`entrance`) | `entrance-procession.webp` |
| 2 | Reverence to the Altar (`reverence`) | `altar-reverence.webp` |
| 3 | Sign of the Cross (`sign-of-the-cross`) | `sign-of-the-cross.webp` |
| 4 | Greeting (`greeting`) | `opening-greeting.webp` |
| 5 | Penitential Act (`penitential-act`) | `congregation-prayer.webp` |
| 6 | Kyrie (`kyrie`) | `congregation-prayer.webp` |
| 7 | Gloria (`gloria`) | `congregation-prayer.webp` |
| 8 | Collect (`collect`) | `collect.webp` |

---

## 2. The agreed church arrangement

All six scenes show **the same church, during the same Mass**.

**The celebration**
- A typical Sunday in Ordinary Time, Ordinary Form of the Roman Rite, as celebrated in the United States.
- One priest. **No deacon. No incense.** Both are legitimate options; we omit them to keep this first path simple (GIRM 49, 120).
- Liturgical color: **green** (Ordinary Time).

**The building**
- A modest American parish church with cream plaster walls, warm wood pews, terracotta floor tiles, a center aisle, and tall side windows giving natural daylight.
- A raised sanctuary at the front, a few steps above the nave.

**The sanctuary, as seen from the nave**
- **Altar:** freestanding, stone, centered, covered with a white cloth. Two lit candles stand on it (GIRM 117). The priest celebrates facing the people.
- **Crucifix:** a single crucifix with the figure of Christ, on the back wall directly above and behind the altar. It serves as the cross "on or near the altar" (GIRM 117, 308).
- **Ambo:** a wooden ambo on the **left** side of the sanctuary.
- **Presider's chair:** on the **right** side of the sanctuary, facing the people.
- **Tabernacle:** **not in the sanctuary.** It is in a separate side chapel that is out of view in every scene. For that reason the scenes show no genuflection to the tabernacle (GIRM 274 applies only when the tabernacle is in the sanctuary).
- **Cantor:** a small music stand near the front of the nave or the edge of the sanctuary. The cantor does **not** lead from the ambo during the Introductory Rites.

**After the procession**
- **Processional crucifix:** because the church already has a crucifix near the altar, the processional crucifix is put away in a dignified place rather than set up as a second altar cross (GIRM 122). It is placed in a stand to the side and is out of view in scenes 2–6.
- **Processional candles:** set down near the altar or on the credence table (common practice; paragraph reference to verify, likely GIRM 188). They should not be a focal point.
- **Book of the Gospels:** the lector places it on the altar (GIRM 195). It stays there through the Introductory Rites and is visible in `altar-reverence`.

**People (the same characters in every scene)**
- **Priest:** a middle-aged man with short dark hair and a calm expression. He wears a **green chasuble** over a **white alb**. The stole is worn under the chasuble, so it is not visible over it (GIRM 337).
- **Servers (three):** white albs. One carries the processional crucifix and two carry candles. Later, one holds the Roman Missal at the Collect.
- **Lector:** a lay man or woman in modest Sunday clothes.
- **Congregation:** a diverse parish of all ages, including families, older parishioners and young adults, in modest Sunday clothes. Most are seen from behind or in three-quarter view.

**About the Book of the Gospels in the procession**
In our entrance scene the lector carries it, slightly elevated. This is **one legitimate arrangement, not a universal requirement.** When there is no deacon, the lector may carry it (GIRM 194). When a deacon is present, he carries it (GIRM 172). Many parishes do not carry the Book of the Gospels in procession at all. The Lectionary is not carried in procession; it is placed at the ambo beforehand.

**Posture throughout:** the congregation **stands** from the beginning of the Entrance Chant through the end of the Collect (GIRM 43). No scene shows anyone sitting or kneeling.

---

## 3. Image specifications (all six files)

| Property | Value |
|---|---|
| Location | `public/scenes/` |
| Format | WebP (preferred) or PNG. PNG will be converted to WebP. |
| Dimensions | **1536 × 1024 px** (3:2 landscape) |
| Target file size | about 150–250 KB each after WebP conversion |
| Text in image | None: no lettering, signage, or captions |
| Composition | The key action in the central area. Nothing essential within about 5% of the edges, since small screens may display slight cropping. |

### `entrance-procession.webp`: moment 1
- **Camera:** from the back of the nave, at eye level, looking down the center aisle toward the sanctuary.
- **Must show:**
  - the procession moving toward the altar, in this order: a server with the processional crucifix, flanked by two servers with lit candles; then the lector holding the Book of the Gospels slightly elevated; then the priest last, hands joined
  - the congregation standing in the pews on both sides, some singing from hymnals
  - the sanctuary visible in the distance: altar, wall crucifix, ambo on the left, chair on the right
- **Must not show:** a deacon, incense, a tabernacle, people sitting or kneeling.
- **Alt (EN):** The entrance procession moves up the center aisle: a server carrying a crucifix between two candle bearers, a lector holding the Book of the Gospels, and the priest in green vestments, while the congregation stands.
- **Alt (ES):** La procesión de entrada avanza por el pasillo central: un monaguillo con la cruz entre dos ciriales, un lector con el Evangeliario y el sacerdote con vestiduras verdes, mientras la asamblea está de pie.

### `altar-reverence.webp`: moment 2
- **Camera:** a three-quarter view of the sanctuary from the front of the nave.
- **Must show:**
  - the priest bending forward, hands resting on the edge of the altar, kissing the center of the altar
  - the Book of the Gospels lying closed on the altar
  - two servers standing to the side with hands joined (their bow has already happened)
  - the backs of a few standing congregants in the foreground
- **Must not show:** genuflection, incense, a tabernacle, the processional crucifix next to the altar.
- **Alt (EN):** The priest bends to kiss the altar, where the Book of the Gospels rests, as servers stand nearby.
- **Alt (ES):** El sacerdote se inclina para besar el altar, sobre el que descansa el Evangeliario, mientras los monaguillos esperan cerca.

### `sign-of-the-cross.webp`: moment 3
- **Camera:** from the middle of the nave, slightly to the right, so that both the chair and the congregation are visible.
- **Must show:**
  - the priest standing in front of the presider's chair, facing the people, his right hand at his forehead beginning the Sign of the Cross
  - congregants in the foreground making the Sign of the Cross with him, with their right hands
- **Must not show:** the priest blessing the people (a raised hand tracing a cross toward them), or anyone using the left hand.
- **Alt (EN):** At his chair, the priest makes the Sign of the Cross, and the standing congregation makes it with him.
- **Alt (ES):** Desde la sede, el sacerdote hace la señal de la cruz, y la asamblea, de pie, la hace con él.

### `opening-greeting.webp`: moment 4
- **Camera:** the same angle as `sign-of-the-cross` (a consistent viewpoint is desirable).
- **Must show:**
  - the priest in front of the chair, facing the people, with both arms extended forward and slightly apart, palms open, in greeting
  - the congregation standing and attentive
  - servers nearby with hands joined
- **Must not show:** a wave, a raised blessing hand, or a microphone held in his hand.
- **Alt (EN):** The priest stands at his chair with his hands extended, greeting the standing congregation.
- **Alt (ES):** El sacerdote, de pie junto a la sede, extiende las manos y saluda a la asamblea, que está de pie.

### `congregation-prayer.webp`: moments 5, 6 and 7
- **Camera:** at mid-nave from a slight side angle, focused on the congregation.
- **Must show:**
  - the congregation standing, some holding small worship aids, some with hands joined, heads slightly bowed, with a quiet, prayerful expression
  - the priest in the background, standing at the chair with hands joined
  - a cantor at a small music stand near the front
- **Must not show:** any single distinctive gesture, such as hands raised or breast-striking, since this one image serves three moments; anyone sitting or kneeling; a choir loft dominating the image.
- **Alt (EN):** The congregation stands in prayer, some holding worship aids, while the priest stands at his chair and a cantor waits near the front.
- **Alt (ES):** La asamblea está de pie en oración, algunos con hojas de cantos, mientras el sacerdote está junto a la sede y un cantor espera al frente.

### `collect.webp`: moment 8
- **Camera:** the same angle as `sign-of-the-cross` and `opening-greeting`.
- **Must show:**
  - the priest at the chair, facing the people, arms raised and extended at about shoulder width, palms open (the orans posture)
  - a server standing in front of him, slightly to the side, holding the open Roman Missal so the priest can read it
  - the congregation standing quietly
- **Must not show:** the priest reading from a phone or a loose sheet, or a server blocking the priest's face.
- **Alt (EN):** The priest prays the Collect with hands extended as a server holds the open Missal before him, and the congregation stands.
- **Alt (ES):** El sacerdote reza la colecta con las manos extendidas mientras un monaguillo sostiene el Misal abierto ante él, y la asamblea está de pie.

---

## 4. Generation workflow

1. **Choose a source.**
   - The best option is to commission an illustrator: it gives the strongest liturgical accuracy and clear ownership.
   - Otherwise, use an image generator that accepts reference images.
   - Whichever you use, confirm its terms allow commercial use and that you own or may license the output.
2. **Generate `altar-reverence` first.** It establishes the church, the sanctuary, and the priest. Review it against the checklist in section 6.
3. **Use the approved master as a reference image** for the other five scenes, so the building, layout, priest, and people stay consistent.
4. **Review every image** against the checklist before supplying it. Regenerate rather than accept a liturgical error.
5. **Supply the files** in `public/scenes/` with the exact filenames above.

---

## 5. Reusable prompts

Build each prompt as **STYLE + SET + SCENE**, and add the **AVOID** list as a negative prompt (or as "Avoid: …" for tools without one).

### STYLE

```
Refined editorial illustration with a gouache and soft ink texture and restrained detail.
Warm ivory and cream palette with muted gold accents, soft burgundy and terracotta.
Natural daylight from tall side windows, gentle shadows, calm and reverent atmosphere.
Eye-level perspective. Figures with simple, natural faces and modest proportions.
Not cartoon, not anime, not photorealistic. No text or lettering. No halos.
```

### SET

```
Interior of a modest American Catholic parish church: cream plaster walls, warm wood pews,
terracotta floor tiles, a center aisle, tall side windows. A raised sanctuary with a
freestanding stone altar covered by a white cloth, with two lit candles on the altar.
A single crucifix with the figure of Christ hangs on the back wall directly above the altar.
A wooden ambo stands on the left side of the sanctuary; the presider's chair is on the right
side, facing the people. There is no tabernacle in the sanctuary.
The same priest throughout: a middle-aged man with short dark hair and a calm expression,
wearing a simple green chasuble over a white alb. Altar servers wear white albs.
A diverse congregation of all ages in modest Sunday clothes, standing.
```

### SCENE: `entrance-procession`

```
Viewed from the back of the nave, looking down the center aisle toward the sanctuary.
The entrance procession walks toward the altar: first an altar server carrying a processional
crucifix, flanked by two servers carrying lit candles; next a lay lector in Sunday clothes
holding a red-bound Book of the Gospels slightly raised; last, the priest with hands joined.
The congregation stands in the pews on both sides, some singing from hymnals.
```

### SCENE: `altar-reverence`

```
Three-quarter view of the sanctuary from the front of the nave. The priest bends forward with
both hands resting on the edge of the altar and kisses the center of the altar. A closed,
red-bound Book of the Gospels lies on the altar. Two altar servers stand quietly to the side
with hands joined. The backs of a few standing congregants are visible in the foreground.
```

### SCENE: `sign-of-the-cross`

```
View from mid-nave, slightly to the right. The priest stands in front of the presider's chair
facing the congregation, his right hand touching his forehead as he begins the Sign of the
Cross on himself. In the foreground, standing congregants seen from behind and in
three-quarter view make the Sign of the Cross with their right hands along with him.
```

### SCENE: `opening-greeting`

```
View from mid-nave, slightly to the right. The priest stands in front of the presider's chair
facing the congregation, both arms extended forward and slightly apart with palms open, in
greeting. Standing congregants in the foreground face him attentively. Two altar servers stand
nearby with hands joined.
```

### SCENE: `congregation-prayer`

```
View from mid-nave at a slight side angle, focused on the congregation standing in the pews.
Some hold small worship aids, some have hands joined, heads slightly bowed in quiet prayer.
In the background the priest stands at the presider's chair with hands joined, and a cantor
stands at a small music stand near the front.
```

### SCENE: `collect`

```
View from mid-nave, slightly to the right. The priest stands at the presider's chair facing the
people, both arms raised and extended at about shoulder width, palms open, in prayer.
An altar server stands in front of him and slightly to the side, holding the open Roman Missal
so the priest can read from it. The congregation stands quietly in the foreground.
```

### AVOID

```
cartoon, anime, chibi, 3D render, photograph, photorealistic, text, lettering, signage, halos,
glowing light rays, exaggerated facial expressions, faces staring at the viewer, purple or red
or white chasuble, stole worn over the chasuble, tabernacle in the sanctuary, iconostasis,
more than one crucifix on the wall, crosses on every surface, a second priest, a deacon,
incense or thurible, people kneeling or sitting, distorted or extra fingers, cluttered ornament
```

---

## 6. Liturgical accuracy checklist

Check every image before supplying it. Mark anything uncertain for review by a priest or a diocesan liturgy office.

**Church and sanctuary (every scene)**
- [ ] Recognizably Catholic: a freestanding altar with a white cloth and a crucifix with the figure of Christ above it.
- [ ] Exactly one crucifix on or near the altar. The processional crucifix is not standing beside the altar as a second altar cross.
- [ ] Ambo on the left, presider's chair on the right, matching the other scenes.
- [ ] **No tabernacle in the sanctuary**, and no genuflection shown.
- [ ] Two candles on the altar. No incense or thurible.
- [ ] Same walls, floor, windows, and lighting as the master image.

**Priest (every scene he appears in)**
- [ ] The same man as in the master image.
- [ ] Green chasuble over a white alb. No stole visible over the chasuble. No other vestment colors.
- [ ] He faces the people at the chair and stands behind the altar when facing it.
- [ ] His hands and gestures match the scene description exactly; there are no invented gestures.

**Ministers and people**
- [ ] Servers in white albs. The lector is in modest street clothes, not an alb or vestments.
- [ ] No deacon and no second priest.
- [ ] **The congregation is standing** in every scene (GIRM 43).
- [ ] The Sign of the Cross is made with the right hand.
- [ ] Faces are natural and calm, not exaggerated, and not staring at the viewer.
- [ ] Hands have the correct number of fingers and natural positions.

**Per-scene checks**
- [ ] `entrance-procession`: the order is crucifix with candles, then the lector with the Book of the Gospels, then the priest last.
- [ ] `altar-reverence`: the priest is kissing the altar, not the book, not kneeling, and not genuflecting.
- [ ] `sign-of-the-cross`: the priest signs **himself**; he is not blessing the people.
- [ ] `opening-greeting`: arms extended toward the people in greeting; not a wave or a blessing.
- [ ] `congregation-prayer`: no single distinctive gesture, since the image serves the Penitential Act, Kyrie and Gloria.
- [ ] `collect`: arms extended in prayer, with a server holding the open Missal.

**Points that need review (artistic choices, not universal norms)**
- A server holding the Missal at the Collect is a common practice. Some parishes use a book stand instead.
- The ambo-left, chair-right layout and the wall crucifix are one common U.S. arrangement among many.
- The lector carrying the Book of the Gospels is one legitimate arrangement (see section 2).
- Paragraph citations should be checked against the current USCCB edition of the GIRM before release, especially 117, 122, 172, 194, 195, and 337.

---

## 7. Integration (after the files are supplied)

Not yet implemented. The planned code changes are:

- `content/mass.ts`: each moment's `illustration.id` will name one of the six scenes above. A small map will hold the bilingual alt text from section 3. Captions and liturgical text stay unchanged.
- `app/simulation/page.tsx`: the placeholder card will be replaced by `next/image` (`fill`, responsive `sizes`, inside a fixed 3:2 frame so nothing shifts while loading).
- Alt text will be in Spanish in Spanish mode and in English in English and bilingual modes.
- No new dependencies.
