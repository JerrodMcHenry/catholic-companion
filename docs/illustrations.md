# Illustrations: Introductory Rites

The brief for the custom illustrated scenes in the guided Mass simulation (`/simulation`).

**Status:** all six scenes have been supplied in `public/scenes/` and are integrated into the simulation. The chosen style is **realistic** (see section 5). Several images have open review items; see **section 8** before release.

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
- **Servers (three):** black cassocks with white surplices (as in the supplied images; white albs are equally legitimate). One carries the processional crucifix and two carry candles. Later, one holds the Roman Missal at the Collect.
- **Lector:** a lay man or woman in modest Sunday clothes.
- **Congregation:** a diverse parish of all ages, including families, older parishioners and young adults, in modest Sunday clothes. Most are seen from behind or in three-quarter view.

**About the Book of the Gospels in the procession**
In our entrance scene the lector carries it, slightly elevated. This is **one legitimate arrangement, not a universal requirement.** When there is no deacon, the lector may carry it (GIRM 194). When a deacon is present, he carries it (GIRM 172). Many parishes do not carry the Book of the Gospels in procession at all. The Lectionary is not carried in procession; it is placed at the ambo beforehand.

**Posture throughout:** the congregation **stands** from the beginning of the Entrance Chant through the end of the Collect (GIRM 43). No scene shows anyone sitting or kneeling.

---

## 3. Image specifications (all six files)

The final English and Spanish alt text is in `SCENE_ALT` in `content/mass.ts`. It describes what each supplied image actually shows.

| Property | Value |
|---|---|
| Location | `public/scenes/` |
| Format | WebP (preferred) or PNG. PNG will be converted to WebP. |
| Dimensions | **1536 × 1024 px** (3:2 landscape) |
| Target file size | about 150–250 KB each after WebP conversion |
| Style | Realistic, natural-light church interior (see section 5) |
| Text in image | None: no lettering, signage, or captions |
| Composition | The key action in the central area. Nothing essential within about 5% of the edges, since small screens may display slight cropping. |

### `entrance-procession.webp`: moment 1
- **Camera:** from the back of the nave, at eye level, looking down the center aisle toward the sanctuary.
- **Must show:**
  - the procession moving toward the altar, in this order: a server with the processional crucifix, flanked by two servers with lit candles; then the lector holding the Book of the Gospels slightly elevated; then the priest last, hands joined
  - the congregation standing in the pews on both sides, some singing from hymnals
  - the sanctuary visible in the distance: altar, wall crucifix, ambo on the left, chair on the right
- **Must not show:** a deacon, incense, a tabernacle, people sitting or kneeling.

### `altar-reverence.webp`: moment 2
- **Camera:** a three-quarter view of the sanctuary from the front of the nave.
- **Must show:**
  - the priest bending forward, hands resting on the edge of the altar, kissing the center of the altar
  - the Book of the Gospels lying closed on the altar
  - two servers standing to the side with hands joined (their bow has already happened)
  - the backs of a few standing congregants in the foreground
- **Must not show:** genuflection, incense, a tabernacle, the processional crucifix next to the altar.

### `sign-of-the-cross.webp`: moment 3
- **Camera:** from the middle of the nave, slightly to the right, so that both the chair and the congregation are visible.
- **Must show:**
  - the priest standing in front of the presider's chair, facing the people, his right hand at his forehead beginning the Sign of the Cross
  - congregants in the foreground making the Sign of the Cross with him, with their right hands
- **Must not show:** the priest blessing the people (a raised hand tracing a cross toward them), or anyone using the left hand.

### `opening-greeting.webp`: moment 4
- **Camera:** the same angle as `sign-of-the-cross` (a consistent viewpoint is desirable).
- **Must show:**
  - the priest in front of the chair, facing the people, with both arms extended forward and slightly apart, palms open, in greeting
  - the congregation standing and attentive
  - servers nearby with hands joined
- **Must not show:** a wave, a raised blessing hand, or a microphone held in his hand.

### `congregation-prayer.webp`: moments 5, 6 and 7
- **Camera:** at mid-nave from a slight side angle, focused on the congregation.
- **Must show:**
  - the congregation standing, some holding small worship aids, some with hands joined, heads slightly bowed, with a quiet, prayerful expression
  - the priest in the background, standing at the chair with hands joined
  - a cantor at a small music stand near the front
- **Must not show:** any single distinctive gesture, such as hands raised or breast-striking, since this one image serves three moments; anyone sitting or kneeling; a choir loft dominating the image.

### `collect.webp`: moment 8
- **Camera:** the same angle as `sign-of-the-cross` and `opening-greeting`.
- **Must show:**
  - the priest at the chair, facing the people, arms raised and extended at about shoulder width, palms open (the orans posture)
  - a server standing in front of him, slightly to the side, holding the open Roman Missal so the priest can read it
  - the congregation standing quietly
- **Must not show:** the priest reading from a phone or a loose sheet, or a server blocking the priest's face.

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

### STYLE (chosen: realistic)

The project moved from the editorial style first proposed to a **realistic** style. It reads as a real parish and makes vestments, gestures, and furnishings easy to recognize. The images are still artistic renderings, not photographs of a real church, and should never be presented as such.

```
Realistic image of a church interior during Mass, natural and true to life.
Warm ivory, cream, and marble tones with muted gold accents; green and gold liturgical banners.
Soft natural daylight with warm interior light, gentle shadows, calm and reverent atmosphere.
Eye-level perspective, shallow depth of field on the main action.
People with natural faces, modest expressions, and natural proportions.
No text or lettering. No halos. No dramatic light rays.
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
wearing a simple green chasuble over a white alb. Altar servers wear black cassocks with white surplices.
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
cartoon, anime, chibi, flat vector illustration, plastic 3D render, text, lettering, signage, halos,
glowing light rays, exaggerated facial expressions, faces staring at the viewer, purple or red
or white chasuble, stole worn over the chasuble, tabernacle in the sanctuary, iconostasis,
more than one crucifix on the wall, crosses on every surface, a second priest, a deacon,
incense or thurible, people kneeling or sitting, distorted or extra fingers, cluttered ornament, congregation with hands raised, priest with hands extended (except greeting and Collect),
a standing altar cross in addition to the wall crucifix
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
- [ ] Servers in cassock and surplice (or albs), the same in every scene. The lector is in modest street clothes, not an alb or vestments.
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

## 7. Integration

- `content/mass.ts`: each moment's `illustration.id` is a `SceneId`, the scene's filename without `.webp`. `SCENE_ALT` holds bilingual alt text for each scene. The moment captions and liturgical text are unchanged.
- `app/simulation/page.tsx`: renders `next/image` with `src="/scenes/<id>.webp"`, `fill`, and responsive `sizes`, inside a fixed 3:2 frame with a cream background, so the layout never shifts while the image loads. Next.js serves resized WebP through its built-in optimizer.
- Alt text is in Spanish in Spanish mode, and in English in English and bilingual modes (matching the page's `lang="en"`).
- **To replace an image:** overwrite the file in `public/scenes/`, keeping the same name and 1536 × 1024 size, then update its `SCENE_ALT` entry if what it shows has changed.
- No new dependencies.

## 8. Review of the supplied images (13 November 2026)

This is a visual review against the checklist in section 6. It is not an authoritative liturgical judgment: please confirm with a priest or diocesan liturgy office. Severity: **High** = shows something that contradicts the guide's text or liturgical practice; **Medium** = inconsistent with our agreed arrangement; **Low** = minor.

| Scene | Finding | Severity | Recommendation |
|---|---|---|---|
| `congregation-prayer` (moments 5–7) | The **priest stands with hands extended** (orans). During the Penitential Act, Kyrie, and Gloria the priest's hands are joined; extended hands belong to the greeting and the Collect. He also stands beside the altar rather than at the chair. | High | Regenerate with the priest at the chair, hands joined. |
| `congregation-prayer` | **Several congregants hold their hands open and raised.** The GIRM does not prescribe this posture for the faithful, and it is not part of our guide's posture instructions. Showing it in the only image for three moments may read as a norm. | High | Regenerate with hands joined or holding worship aids. |
| `congregation-prayer` | **No cantor or choir is visible**, but the Kyrie caption ("A cantor leads the people…") and the Gloria caption ("The congregation and choir sing…") mention them. A Marian shrine appears on the left, which is fine and recognizably Catholic. | Medium | Include a cantor in the regenerated image. Alternatively, revise those two captions (a content change that needs approval). |
| `entrance-procession` | The procession has **no processional crucifix and no lector with the Book of the Gospels**. The priest walks among the servers rather than last. The caption ("led by the cross") therefore does not match the image. | High | Regenerate following the section 3 order. |
| `entrance-procession` | A **standing gold altar cross** appears in addition to the wall crucifix (two crosses, contrary to our arrangement). | Medium | Remove in the regenerated image. |
| `entrance-procession` | The **interior differs from the other scenes**: stained-glass windows, columns, a reredos, and six candles, where the others show plain marble walls and two candles. It does not look like the same church. | Medium | Regenerate using `altar-reverence` as the reference. |
| `collect` | Good: orans posture, server holding the open Missal, chair visible. The **priest's face and hair differ** noticeably from the other scenes, and a stained-glass window appears. He is looking up rather than at the Missal (common, but he reads the prayer from the book). | Low | Optional regeneration for consistency. |
| `sign-of-the-cross` | Good: right hand at forehead, left hand at the chest, in front of the chair. Some **congregants' hands are hard to read**; confirm that no one appears to sign with the left hand. | Low | Check at full size. |
| `opening-greeting` | Good: hands extended in greeting at the chair. The servers mentioned in the spec are not visible, which is acceptable. The arms are spread quite wide; still a plausible greeting. | Low | None required. |
| `altar-reverence` | Good: kissing the altar, Book of the Gospels on the altar, servers with hands joined, ambo on the left, chair on the right, one crucifix, two candles, no tabernacle. | None | Use as the reference image for any regeneration. |

**Consistent across all six:** green chasuble over a white alb, no stole visible over the chasuble, servers in cassock and surplice, congregation standing, no tabernacle in the sanctuary, no deacon, no incense.
