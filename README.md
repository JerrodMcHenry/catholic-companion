# Catholic Companion

A mobile-first, guided introduction to the Catholic Mass (Ordinary Form of the Roman Rite, as celebrated in the United States), in English and Spanish. It is meant for OCIA participants, people new to the Church, and Catholics who want to understand the liturgy more deeply.

Catholic Companion is a learning guide. It is not a celebration of Mass.

## Technology

- Next.js (App Router) with React and TypeScript
- Tailwind CSS
- Browser `localStorage` for preferences and progress. There is no backend, database, or account.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck  # next typegen && tsc --noEmit
npm run build
```

**Type checking on a fresh checkout:** the layout uses `LayoutProps`, a global type that Next.js generates into `.next/types`. That folder and `next-env.d.ts` are gitignored, as Next.js recommends. Running `tsc --noEmit` by itself on a fresh clone therefore fails with `Cannot find name 'LayoutProps'`. Use `npm run typecheck`, which generates the route types first.

## Current features

**Milestone 1**

- Homepage with a short introduction and a "How it works" overview
- Onboarding: choose English, Español, or Bilingual (saved in the browser)

**Milestone 2: Introductory Rites simulation** (`/simulation`)

- A self-paced walkthrough of the eight moments of the Introductory Rites. Each moment shows:
  - a progress indicator and an illustration placeholder
  - a short explanation
  - posture guidance
  - response practice, when there is a response
  - optional "Go deeper" and "How this can vary" sections
- It follows a clearly labeled typical Sunday path (Ordinary Time: "I confess", Kyrie, Gloria). Conditional rites are marked with when they occur.
- Back and Next buttons, an intentional "Start over" (confirmed inline), and a completion screen
- An English / Español / Bilingual switch inside the player. Changing language never resets progress.
- Realistic illustrated scenes: six images cover the eight moments (see `docs/illustrations.md`), shown with `next/image` and bilingual alt text.
- Progress is saved as a single value: the current moment id, or `complete`. It is stored in `localStorage` under `catholic-companion:introductory-rites` and resumes after a refresh.

## Project layout

```
app/
  layout.tsx            shared page shell, fonts, header
  page.tsx              homepage
  globals.css           Tailwind and the color/font theme
  language.ts           language options; reading, saving, and watching the preference
  onboarding/page.tsx   language selection
  simulation/page.tsx   the guided Mass player (loading state, navigation, progress)
content/
  mass.ts               liturgical content for the Introductory Rites, scene alt text, and the source list
public/
  scenes/               the six illustrated scenes (1536 × 1024 WebP)
docs/
  illustrations.md      scene specifications, prompts, accuracy checklist, and image review
```

To edit or add liturgical content, change `content/mass.ts` only. The player renders whatever moments it finds there, in order.

## Core requirement: voice and audio practice (not yet built)

Practicing congregational responses is a core feature. The planned flow:

1. Hear the priest's part (audio playback, never automatic).
2. See the congregation's response.
3. Optionally speak the response into the microphone. It is transcribed and compared with the expected words.
4. Get feedback on whether the words match, then retry or continue.

Voice is always optional. Every step works with text alone, in English or Spanish. Feedback compares words only. A transcript cannot judge pronunciation, so the app will not claim to assess it. No speech service or AI API has been chosen yet. Continuous (non-self-paced) playback is also planned.

The `response` lines in `content/mass.ts` (speaker, exact words when available, meaning) are shaped for this flow.

## Liturgical sources

- General Instruction of the Roman Missal (GIRM), USCCB English translation (2011), especially nos. 43, 46–54, 120, 274, 275
- The Roman Missal, Third Edition (2011): The Order of Mass, Introductory Rites; Appendix II (Rite for the Blessing and Sprinkling of Water)

Each moment in `content/mass.ts` lists the specific references it relies on.

## Liturgical text and licensing questions (resolve before release)

1. **Official texts are not reproduced.** The English (ICEL, 2010) and Spanish (*Misal Romano*, USCCB 2018) texts are copyrighted. Where they would appear, the app shows a labeled placeholder ("Official text not yet included") with an original description of what is said and what it means. These are:
   - the greeting and its response
   - the Confiteor
   - the absolution
   - the Gloria
   - the Collect

   Permission from ICEL and the USCCB would be needed to include them.
2. **Quoted words.** Only "Amen" / "Amén" and the Greek "Kyrie, eleison" / "Christe, eleison" are quoted. These are ancient acclamations, not translations, and are widely treated as free to use. Confirm this before release.
3. **Order of Mass paragraph numbers.** The content cites the Order of Mass by section, not by paragraph number. Add paragraph numbers after checking a printed Roman Missal. (The USCCB Order of Mass page could not be fetched automatically.)
4. **Review.** A priest or diocesan liturgy office should review the explanations, and a native-speaking catechist should review the Spanish.
5. **Illustrations.** The six scenes were supplied by the project owner. Confirm their usage rights before release. Open accuracy items are listed in `docs/illustrations.md`, section 8.

## Known issues

- The default Next.js favicon is still in place.

## Next milestone

Not yet defined. The natural continuation is the Liturgy of the Word.
