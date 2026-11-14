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

**Milestone 4: optional spoken narration** (`app/simulation/listen.tsx`)

- **Listen to explanation** plays the moment's on-screen explanation and posture note.
- **Listen for your cue** plays a short, original listening cue (when and how the people take part). The cue is also shown as text under "Your cue".
- Pause, Resume (from the exact position), and Replay (from the beginning), with loading and error messages.
- English mode plays the English recording, Spanish mode the Spanish one. Bilingual mode has a simple English/Español narration choice (English by default, not saved).
- Nothing plays or downloads automatically. Playback stops when moving between moments, changing language or narration language, restarting, finishing, or leaving the page.
- The narration is labeled as an AI-generated voice. It is educational, not a recording of the priest or of the official prayers.

**Milestone 4B: prerecorded narration.** The browser speech of Milestone 4 was replaced by 28 prerecorded MP3s (see "Audio" below).

**Milestone 5A: response practice** (`app/simulation/practice.tsx`, Sign of the Cross only)

- An optional "Practice your response" panel, collapsed by default. It asks what the people answer after the opening Sign of the Cross.
- **Speak** (browser speech recognition, U.S. English or Mexican Spanish) or **Type**. Typing always works.
- Spoken answers appear in an editable box. Nothing is checked until the learner presses Check, so a wrong transcription is never graded.
- Feedback: "That's right" with the meaning of Amen, or a gentle hint. Try again, Show answer, and Skip practice are always available. There are no scores, and navigation is never blocked.
- In bilingual mode, a practice-language choice sets the recognition language (English by default, not saved).
- Starting to speak pauses the narration so the microphone doesn't hear it.

## Project layout

```
app/
  layout.tsx            shared page shell, fonts, header
  page.tsx              homepage
  globals.css           Tailwind and the color/font theme
  language.ts           language options; reading, saving, and watching the preference
  onboarding/page.tsx   language selection
  simulation/page.tsx   the guided Mass player (loading state, navigation, progress)
  simulation/listen.tsx optional narration player (native <audio>)
  simulation/practice.tsx optional response practice (speech recognition or typing)
content/
  mass.ts               liturgical content for the Introductory Rites, scene alt text, and the source list
public/
  scenes/               the six illustrated scenes (1536 × 1024 WebP)
  audio/                prerecorded narration, one folder per narrator voice
scripts/
  generate-narration.mjs     makes the narration MP3s from content/mass.ts (run by hand, never by the app)
  narration-manifest.json    what each MP3 was generated from, to detect stale recordings
docs/
  illustrations.md      scene specifications, prompts, accuracy checklist, and image review
```

To edit or add liturgical content, change `content/mass.ts`. The player renders whatever moments it finds there, in order. If you change an explanation, posture note, or cue, regenerate the narration (below).

## Audio: how it works and its limits

The narration is prerecorded. The app only plays static files from `public/audio/` with a native `<audio>` element. It calls no service at runtime, and no API key is ever in the app.

- **Files:** `public/audio/<narrator>/<moment id>-explanation.mp3` and `…-cue.mp3`. There are 28: 8 explanations and 6 cues, in English and Spanish. The explanation recording is the explanation plus the posture note, the same text shown on the page.
- **Narrators:** `en-US-marin` (English, U.S.) and `es-MX-cedar` (Spanish, Mexico). There is one narrator per language. A second narrator per language is planned but not yet chosen, and the app offers no narrator choice.
- **Generation:** OpenAI `gpt-4o-mini-tts` with a "warm Catholic teacher" style instruction, and a pronunciation hint for "Kyrie, eleison" / "Christe, eleison".
- **Disclosure:** OpenAI's usage policies require telling listeners the voice is AI-generated. The Listen panel says so.

**Regenerating after a text change.** Put `OPENAI_API_KEY` in `.env.local` (gitignored), then:

```bash
node scripts/generate-narration.mjs --check                 # list missing or stale recordings; no API calls
node --env-file=.env.local scripts/generate-narration.mjs   # regenerate only those
```

The manifest stores a hash of each recording's text, model, voice, and instructions. A failed request leaves the old file and keeps it marked stale. Generating all 28 costs well under $1.

**Provider retirement.** OpenAI's speech models (`gpt-4o-mini-tts`, `tts-1`, `tts-1-hd`) shut down on **January 6, 2027** (OpenAI deprecations page, announced October 1, 2026). After that the script needs a new model or provider (OpenAI suggests `gpt-realtime-2.1-mini` via its Realtime API), and new recordings may not match the current voices. Finish text reviews and regenerate before that date where possible. The app and the existing files are unaffected.

**Not yet verified by ear:** voice quality, the Mexican Spanish accent, and the pronunciation of "Kyrie, eleison" / "Christe, eleison". Playback on real iPhone and Android devices has not been tested either.

Official dialogue recordings, if licensed later, must stay separate from this educational narration.

## Core requirement: voice practice (first exercise built)

Practicing congregational responses is a core feature. The first exercise (Sign of the Cross, "Amen") is built; the other responses are not yet. The planned flow:

1. Hear the priest's part (audio playback, never automatic). Today this is described by the listening cue; official dialogue audio awaits licensing.
2. See the congregation's response.
3. Optionally speak the response into the microphone. It is transcribed and compared with the expected words.
4. Get feedback on whether the words match, then retry or continue.

Voice is always optional. Every step works with text alone, in English or Spanish. Feedback compares words only. A transcript cannot judge pronunciation, so the app will not claim to assess it. Continuous (non-self-paced) playback is also planned.

### How the practice works

- **Content.** A moment opts in with an optional `practice` field (`prompt`, `hint`, `success`). The expected answer and its meaning come from the people's line in `response`, so they are not duplicated.
- **Checking.** Checking is deterministic, with no AI. Both the answer and the expected words are lowercased, accents and punctuation are removed, and spaces are collapsed. "Amen", "amén." and "¡AMÉN!" all match. There is no fuzzy matching, so "a man" (a common mishearing) is not accepted, but the learner can correct it in the box before checking. An empty answer is not graded.
- **Speech recognition.** `SpeechRecognition` or `webkitSpeechRecognition`, one short session per button press (`continuous = false`), never restarted automatically. The browser asks for microphone permission itself. Errors (permission blocked, no speech, no microphone, network, other) are explained, are never graded, and offer Try again or Type. Recognition is aborted on Cancel, on switching to Type, and when the panel unmounts (navigation, language change, restart, finishing). A session counter makes the panel ignore late callbacks from a stopped session.
- **Privacy.** Catholic Companion does not record, store, upload, or log voice or answers. Answers live only in the panel's memory and are cleared when the learner leaves the moment. Speech-to-text is done by the browser: Chrome sends the audio to Google's speech service, and other browsers may use their provider's service. The panel says this.
- **Browser support.** Chrome and Edge (desktop and Android) and Safari support speech recognition. Firefox does not; it shows a note, and typing works. Recognition accuracy for a single short word varies.

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

- Response practice has not yet been tested with a real microphone or on iPhone and Android.
- The default Next.js favicon is still in place.

## Next milestone

Not yet defined. The natural continuation is the Liturgy of the Word.
