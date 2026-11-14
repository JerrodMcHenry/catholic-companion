# Catholic Companion

A mobile-first, guided introduction to the Catholic Mass (Ordinary Form of the Roman Rite, as celebrated in the United States), in English and Spanish. It is meant for OCIA participants, people new to the Church, and Catholics who want to understand the liturgy more deeply.

Catholic Companion is a learning guide. It is not a celebration of Mass.

## Technology

- Next.js (App Router) with React and TypeScript
- Tailwind CSS
- Browser `localStorage` for preferences. There is no backend, database, or account.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Current features (Milestone 1)

- Homepage with a short introduction and a "How it works" overview
- Onboarding: choose English, Español, or Bilingual (saved in the browser)
- Simulation page that reads the saved language and shows a placeholder for the future illustrated Mass player

## Project layout

```
app/
  layout.tsx            shared page shell, fonts, header
  page.tsx              homepage
  globals.css           Tailwind and the color/font theme
  language.ts           language options; reading and saving the preference
  onboarding/page.tsx   language selection
  simulation/page.tsx   simulation placeholder
```

## Core requirement: voice and text practice (not yet built)

Practicing congregational responses is a core feature. The planned flow:

1. Hear the priest's part.
2. See the congregation's response.
3. Optionally speak the response into the microphone. It is transcribed and compared with the expected words.
4. Get feedback on whether the words match, then retry or continue.

Voice is always optional. Every step works with text alone, in English or Spanish. Feedback compares words only. A transcript cannot judge pronunciation, so the app will not claim to assess it. No speech service or AI API has been chosen yet.

## Next milestone

Milestone 2 is the first guided Mass steps. It adds a centralized content file (`content/mass.ts`) covering the Introductory Rites, with posture guidance and concise explanations, and self-paced Back/Next navigation. Every prayer and response text will be checked against approved liturgical sources and permissions before it is included.
