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
npm test           # content, timing, and private-text checks (Node's built-in test runner)
```

### Official texts (private, local only)

Catholic Companion is a private, personal educational project: it is run only on this machine and is not distributed. The official prayers and responses (ICEL English, *Misal Romano* Spanish) are never stored in a tracked file. You supply them yourself:

1. `node scripts/generate-narration.mjs` creates `public/local/liturgical-texts.json`, an empty template with one entry per official text in the Introductory Rites. Each entry names what the text is, its source, and who says it.
2. Paste the exact wording from your own Roman Missal, or from the USCCB's published text, into each entry's `"en"` (and optionally `"es"`) field. Don't retype from memory and don't paraphrase. For the Greeting, choose one of the Missal's forms. The Collect is the one for the **Fifteenth Sunday in Ordinary Time** (the fixed example Sunday; Year B for the readings).
3. Run `node --env-file=.env.local scripts/generate-narration.mjs` again. Each text is recorded by the simulated priest or congregation and then checked word for word. The recording, its manifest, and its timings (with the verified text, used for captions) are written to `public/local/`.

The player then voices those texts, labeled "Official text from your private local copy". A text recorded only in English is also used in Spanish mode. Without a local copy, each one stays a labeled, silent placeholder.

**Kept out of Git:** `/public/local/` is in `.gitignore`. `npm test` (`scripts/private-texts.test.mjs`) fails in three cases:
- that folder stops being ignored;
- anything in it is tracked or staged;
- the first line of any text in your local copy appears in a tracked or staged file.

The only way around this is a deliberate `git add -f`, and the tests then fail.

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

**Milestone 5A/5B: response practice** (`app/simulation/practice.tsx`)

- An optional "Practice your response" panel, collapsed by default, at three moments:
  - **Sign of the Cross:** Amen / Amén.
  - **Kyrie:** the people's first response, "Kyrie, eleison", repeating the leader's Greek invocation. The prompt notes that the Kyrie may also be in English or Spanish.
  - **Collect:** Amen / Amén.
- No other moment has practice. The **Greeting** is deferred until the official response wording, the Spanish missal to follow, and permission to quote are settled (see licensing questions).
- **Speak** (browser speech recognition, U.S. English or Mexican Spanish) or **Type**. Typing always works.
- Spoken answers appear in an editable box. Nothing is checked until the learner presses Check, so a wrong transcription is never graded.
- Feedback: "That's right" with the meaning of Amen, or a gentle hint. Try again, Show answer, and Skip practice are always available. There are no scores, and navigation is never blocked.
- In bilingual mode, a practice-language choice sets the recognition language (English by default, not saved).
- Starting to speak pauses the narration so the microphone doesn't hear it.

**Milestone 6A: Experience Mass prototype** (`/experience`, `app/experience/`). *Superseded in part by 7B:* the response step (items 4–5 and the Speech bullet below) was removed from Experience Mass. The people's Amen is now shown automatically, and there is no microphone or typing.

The primary experience: a continuous, simulated opening of Mass. The learner presses **Begin Mass** and does not press Next again. The existing guided walkthrough is now presented as **Learn the Mass** (`/simulation`, unchanged). The homepage offers both.

1. **Start:** title, language choice, the simulation disclosure, and Begin Mass. Nothing plays before Begin.
2. **Entrance Procession** (5 s) and **Reverence to the Altar** (4.5 s): scenes crossfade, with a Stand cue and a descriptive caption (our words; no hymn audio).
3. **Sign of the Cross:** the simulated priest says the invocation (AI-generated audio, English or Spanish, captioned). The Mass waits for the audio's real `ended` event, never a timer.
4. **Response:** a compact bar opens. The learner types and presses Enter or Respond, or presses Speak. It never times out. Hint, Show answer, and Continue without answering are always there.
5. **Continuation:** after a correct answer (or Continue), "People: ✓ Amen." shows for 1.8 s, then the Mass moves on by itself.
6. **Greeting transition:** the Greeting scene with a descriptive caption. The prototype ends **before** any Greeting dialogue.
7. **End:** Restart Experience, Learn about the Greeting (opens the existing explanation), Return Home.

Always available: Pause/Resume, Restart, **What's happening?** (opens the existing explanation from `content/mass.ts` in a dialog; opening it pauses the Mass and closing it resumes), and the English / Español / EN + ES switch. In bilingual mode, captions show both languages and a "Mass in" choice sets the priest's language and the speech-recognition language.

- **Timeline:** `content/experience.ts` is a flat list of four beats (scene, posture, caption, optional priest audio, hold time, and whether to wait for a response). The expected answer, hint, and explanations come from `content/mass.ts`.
- **Player:** one reducer with the states `ready`, `playing`, `waiting`, `acknowledging`, `paused`, `audioError`, `ended`. A `take` counter makes stale timers and audio callbacks harmless after a restart, pause, or language change. One `<audio>` element, so sounds never overlap.
- **Audio rules:** Begin (a user gesture) briefly plays the priest file muted, so iOS Safari allows it later. Pausing keeps the position and Resume continues from it. Restart, a language change, a hidden tab, leaving the page, and unmounting all stop it. If the audio can't play, a message offers Play again or Continue without audio.
- **Speech:** reuses the recognition helpers of `practice.tsx`. The microphone starts only on Speak. Only the final result is used. An exact match after normalizing continues the Mass; anything else stays in the box to edit and is never marked wrong. Typed answers are checked only on Enter or Respond. Recognition stops on Cancel, Pause, Restart, a language change, a hidden tab, and unmount, and late results are ignored.
- **Nothing is saved:** no progress, answers, or audio. The Learn the Mass progress key is never touched.

**Milestone 7B: Before Mass** (the start of `/experience`)

Experience Mass now begins before Mass. After one press of **Begin Mass**, six narrated moments play straight through, then lead directly into the Entrance Procession, with no other button presses:

1. **B1. Why Catholics gather on Sunday:** worship, thanksgiving, mercy, petition, and the Eucharist.
2. **B2. Arriving and preparing.**
3. **B3. Holy water and the Sign of the Cross.**
4. **B4. Genuflecting toward the tabernacle.**
5. **B5. Finding a seat and praying quietly.**
6. **B6. Who's who, and what the colors mean.** It ends: "Let's stand, and begin."

After B6 come the Milestone 6A beats: Entrance, Reverence, the priest's invocation, then the people's Amen shown automatically, and the Greeting scene. An honest end screen follows: "The guided Mass pauses here for now."

The narration text is in `docs/before-mass-narration.md`, which is the approved script. The app copy is in `content/before-mass.ts`, and `npm test` checks that the two match.

- **One player, one list.** `app/experience/player.tsx` plays one list of steps: the six Before Mass moments followed by the beats in `content/experience.ts`. It uses the same reducer, `take` guard, and single `<audio>` element as 6A. The states are now `ready`, `playing`, `acknowledging`, `paused`, `audioError`, and `ended`; `waiting` is gone with the response step.
- **Audio.** There is one recording per moment: `public/audio/en-US-marin/<moment id>-narration.mp3`, six files, about 6½ minutes in all. Each step advances only on the recording's real `ended` event, then pauses 1 s while the next scene fades in. While one recording plays, the next one is loaded in the background (it is never played).
- **Captions.** Captions are sentence by sentence, not word by word. `content/narration-timings.json` holds the start time of each sentence for each recording. The generation script makes these by transcribing the recording once with word timestamps (`whisper-1`) and aligning the words to the script. The player shows the script's own sentence whose start time has passed, as reported by the audio's `timeupdate` events (about four times a second). If timings were ever missing, it would spread the sentences over the recording by length.
- **Cues.** Each moment lists cues tied to a phrase in a sentence (`at`). When that sentence begins, a cue changes the scene, shows a short label, or shows the posture chip (Genuflect, Bow, Kneel or sit, Stand). For example, B4 switches from the genuflection image to the aisle scene at "The altar is honored too…".
- **Scenes.** B1–B5 use the cinematic images in `public/images/mass/before-mass/`, mapped in `BEFORE_MASS_IMAGES` (`content/before-mass.ts`).
  - They are rendered with `next/image`, so phones download resized WebP (about 15–80 KB) rather than the 2–3 MB PNG originals.
  - The 16:9 images are cover-cropped into the 3:2 stage, with a per-image focus point.
  - Two scenes still show a labeled "Illustration in progress" card: B6 (`b6-ministers-DRAFT.png` has text baked in and is deliberately not used) and the B4 aisle scene (genuflect and bow). The checklist is in `docs/illustrations.md` §9.
  - No image showing Mass underway is used for Before Mass.
- **Learn more.** This pauses playback and opens the moment's deeper explanation, references, and the full narration text, which also serves as a transcript. Closing it resumes from the same point.
- **Languages.** The Before Mass narration is English only for now. In Spanish and bilingual modes it plays in English with English captions, and a notice says so. The rest of the interface follows the chosen language, and the 6A beats remain bilingual.
- **Accessibility.**
  - All controls are keyboard-reachable buttons.
  - Pause, Resume, Restart, and Learn more are always available.
  - Crossfades are disabled under reduced motion.
  - Placeholders have descriptive labels.
  - Narration captions are not a live region (the audio already speaks them, and screen readers would repeat them); the full text is under Learn more.
  - Focus moves to the end heading at the end.

**Request flow:**

1. Begin (a user gesture) plays the B1 file muted for a moment, so iOS allows audio.
2. The reducer sets `playing`, step 0.
3. The effect sets `<audio src>` and calls `play()`.
4. `timeupdate` → sentence index → caption, scene, label, and posture.
5. `ended` → a 1 s hold → `stepDone(take)` → next step.
6. After B6, the 6A beats play the same way.
7. The people's Amen is shown for 1.8 s, then the Greeting scene, then `ended`.

At any point, Pause, Learn more, a hidden tab, or leaving the page pauses; Restart begins again at B1.

**Provisional, not yet complete:**

- two illustrations (B6, and the B4 aisle scene), plus the image issues listed in `docs/illustrations.md` §9;
- Spanish narration;
- a listening review of the voice;
- the narrated Mass after the Sign of the Cross, which is still the 6A preview with descriptive captions and ends before the Greeting;
- liturgical review of the items flagged in `docs/before-mass-narration.md` §7–8 (especially F3, the side-chapel genuflect-or-bow guidance).

The 6A response bar (`app/experience/respond.tsx`) was removed after 7B made it unused; Learn the Mass keeps its own optional practice.

**Playback controls and chapter navigation** (`/experience`)

The learner can still just press Begin and listen, but can now also move around freely:

- **Timeline.** A seekable bar covers the whole walkthrough (about 7 minutes). It shows elapsed and total time, with a mark where each moment begins and a stronger mark where a new section begins.
  - Dragging previews the place: the caption, scene, and header follow the thumb.
  - Releasing goes there. Arrow keys move 1 s.
  - The bar's accessible description names the time, section, and moment.
- **Transport.** Previous moment (or the start of the current one, if more than 3 s in), back 15 s, play/pause, forward 15 s, next moment. These are 48–56 px touch targets, labeled for screen readers.
- **Chapters.** The list follows the sections of the Mass from `MASS_PARTS` in `content/mass.ts`: Before Mass, Introductory Rites, Liturgy of the Word, Liturgy of the Eucharist, Communion Rite, Concluding Rites.
  - Moment titles come from the content itself: `BEFORE_MASS` and `INTRODUCTORY_RITES`.
  - Introductory Rites moments that Experience Mass does not play yet (Penitential Act, Kyrie, Gloria, Collect) are listed as not yet available.
  - Sections with no content yet show "Not yet available".
  - The current section ("Now") and moment are highlighted.
  - Choosing a chapter jumps to its start at once and returns focus to the Chapters button.
- **How the timeline is built.** Each step's length comes from data: its recording's duration (`content/narration-timings.json`, written by the generation script, which now also verifies the priest's two recordings), its hold, and the people's answer. Adding these up gives every step a start time. A seek resolves to a step and a second within it, and becomes a `jump` action in the existing reducer.
  - `jump` keeps play or pause as it was.
  - It starts a new `take`, so timers and audio callbacks from before the seek are ignored.
  - The single `<audio>` element is repositioned with `currentTime`, also while paused, so captions and scenes update without playing.
- **Seek boundaries, so a seek never triggers an unexpected advance:**
  - A seek into the last 1.5 s of a recording or timed scene lands 1.5 s before its end.
  - A seek into the 1 s silence between Before Mass moments goes to the start of the next moment.
  - Pausing during a hold or the people's Amen now resumes where it stopped (before, a hold restarted).
- **Saved progress.** Only the current step id and second are kept, under `catholic-companion:experience-progress`. They are saved every 5 s while playing, on pause, on any jump, and when the page is left. The start screen then offers **Resume** (showing the section, moment, and time) or **Start from the beginning**. Progress is cleared when the experience ends. No answers, audio, or personal data are stored.
- **Files.** `app/experience/controls.tsx` (new) is presentational: timeline, transport, and chapter list. `app/experience/player.tsx` owns all state.

**Milestone 8B-1: the Introductory Rites** (`/experience`, after Before Mass)

All eight moments of `content/mass.ts` (Entrance, Reverence, Sign of the Cross, Greeting, Penitential Act, Kyrie, Gloria, Collect) now play after Before Mass as one sequence. It follows the approved script `docs/introductory-rites-narration.md`, a simulated Sunday in Ordinary Time: Penitential Act form A, then the Kyrie (said, in Greek), then the Gloria. Other valid forms and seasonal changes are explained in the narration and in Learn more.

- **Beats by role** (`content/experience.ts`). Each moment is a short run of beats:
  - **narrator:** one recording per block of the approved narration, captioned sentence by sentence like Before Mass;
  - **priest / leader:** the simulated priest voice, CLEARED words only;
  - **people:** a simulated congregation;
  - **silence:** captioned;
  - **pending.**
- **Official-text beats** (`pending` role). These cover the Greeting and its reply, the invitation to the Penitential Act, the Confiteor, the prayer for mercy, the Gloria, the invitation to pray, and the Collect.
  - In the tracked code, each has only a name, its Missal source, and its speaker (priest or people).
  - The player voices it from the private local copy (see "Official texts" above). Without one, it shows a 3-second labeled, silent placeholder ("Official text · not in your local copy").
  - The chapter list marks moments that still have a placeholder "some texts pending".
  - `npm test` fails if a tracked pending beat ever gets audio or words, or if a voiced beat uses anything but the cleared texts.
- **Simulated congregation.** Each response (*Amen*, *Amén*, *Kyrie, eleison*, *Christe, eleison*) is six different AI voices. Each voice is requested as raw PCM and mixed by `scripts/generate-narration.mjs` into one WAV in `public/audio/congregation/`, with fixed small offsets and levels: no extra tools. The caption label reads "People (simulated congregation, AI voices)".
- **Posture.** The chip follows each beat: Stand, Make the Sign of the Cross, Strike the breast (Confiteor), Repeat after the leader (Kyrie), Bow the head at the name of Jesus (Gloria), and Sit after the Collect.
- **Player changes** (`app/experience/player.tsx`).
  - Several steps per moment: chapters, timeline marks, and previous/next work by moment.
  - The separate "acknowledging" state is gone, because the people's answers are now audible beats of their own.
  - Seeking, ±15 s, pause/resume, saved progress, and autoplay are unchanged and work across Before Mass and the Introductory Rites.
  - The whole experience is now about 14 minutes.
- **Scenes.** `altar-reverence`, `sign-of-the-cross`, `opening-greeting`, and `collect` are reused (accurate, though a different church from Before Mass). The Entrance and the Penitential Act, Kyrie, and Gloria use labeled placeholders, because `entrance-procession` and `congregation-prayer` are flagged inaccurate in `docs/illustrations.md` §8.
- **Not yet included:** official texts awaiting permission; music (entrance hymn, a sung Gloria); Spanish narration (the cleared responses are bilingual); the Liturgy of the Word.

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
  experience/page.tsx   Experience Mass route (waits for the saved language)
  experience/player.tsx the continuous player: Before Mass and the Mass beats, state, audio, captions,
                        cues, placeholders, controls, Learn more dialog
  experience/controls.tsx playback controls: seekable timeline with moment marks, transport, chapters by section
content/
  mass.ts               liturgical content for the Introductory Rites, scene alt text, and the source list
  experience.ts         the Introductory Rites beats (narrator, priest, leader, people, silence, pending)
  before-mass.ts        the six Before Mass moments: approved narration, cues, placeholder scenes, Learn more
  narration-timings.json  generated: duration of each Before Mass and priest recording, and when each
                          Before Mass caption sentence starts
public/
  scenes/               the six illustrated scenes (1536 × 1024 WebP)
  audio/                prerecorded narration (one folder per narrator) and simulated priest dialogue
                        (priest-en-US-onyx/, priest-es-MX-onyx/)
scripts/
  generate-narration.mjs     makes the narration, priest, and Before Mass MP3s, and the Before Mass caption
                             timings (run by hand, never by the app)
  before-mass.test.mjs       `npm test`: narration matches the approved document; cues and timings are valid
  introductory-rites.test.mjs `npm test`: narration matches its script; eight moments in order; only cleared
                             words voiced; pending beats silent; recordings and timings present
  private-texts.test.mjs     `npm test`: public/local/ is ignored, untracked, unstaged, and no local official
                             text appears in a tracked or staged file
  narration-manifest.json    what each MP3 was generated from, to detect stale recordings
public/local/                git-ignored: your official texts, their recordings, manifest, and timings
docs/
  illustrations.md      scene specifications, prompts, accuracy checklist, image review, Before Mass checklist
  mass-curriculum.md    the whole Mass as a teaching plan (Milestone 6B)
  before-mass-narration.md  the approved Before Mass script, sources, and review flags (Milestone 7A)
  introductory-rites-narration.md  the approved Introductory Rites script, licensing inventory, and open questions (8A)
```

To edit or add liturgical content, change `content/mass.ts`. The player renders whatever moments it finds there, in order. If you change an explanation, posture note, or cue, regenerate the narration (below).

## Audio: how it works and its limits

The narration is prerecorded. The app only plays static files from `public/audio/` with a native `<audio>` element. It calls no service at runtime, and no API key is ever in the app.

- **Files:** `public/audio/<narrator>/<moment id>-explanation.mp3` and `…-cue.mp3`. There are 28: 8 explanations and 6 cues, in English and Spanish. The explanation recording is the explanation plus the posture note, the same text shown on the page.
- **Narrators:** `en-US-marin` (English, U.S.) and `es-MX-cedar` (Spanish, Mexico). There is one narrator per language. A second narrator per language is planned but not yet chosen, and the app offers no narrator choice.
- **Generation:** OpenAI `gpt-4o-mini-tts` with a "warm Catholic teacher" style instruction, and a pronunciation hint for "Kyrie, eleison" / "Christe, eleison".
- **Disclosure:** OpenAI's usage policies require telling listeners the voice is AI-generated. The Listen panel says so.
- **Before Mass (Experience Mass):** `public/audio/en-US-marin/<id>-narration.mp3`, six files, one per moment, read by the same English narrator with a slower, calm pace. They use the **`gpt-4o-mini-tts-2025-03-20` snapshot**: in testing, the current `gpt-4o-mini-tts` version repeatedly dropped the final sentence of these longer inputs (for example "Let's stand, and begin."), and this snapshot did not. OpenAI lists the same January 6, 2027 shutdown for both. After each recording, the script transcribes it once (`whisper-1`, word timestamps) and writes `content/narration-timings.json`. A recording is rejected and made again on the next run if any sentence wasn't heard, if most of the last sentence is missing, or if fewer than 95% of the words match. The current six matched 99–100% of words. The one difference: in B2 the transcription heard "gearing" for "hearing". Probably a transcription slip, but listen to confirm.
- **Simulated priest (Experience Mass):** `public/audio/priest-en-US-onyx/` and `priest-es-MX-onyx/`, one file each: `sign-of-the-cross-invocation.mp3` (about 5 s). Same model, voice `onyx`, with a "fictional priest, reverent, spoken not chanted, no music, say exactly the given words" instruction. The input is exactly the priest caption in `content/experience.ts`. Both files were transcribed back with OpenAI `whisper-1` after generation and matched the captions word for word. The voice is fictional and does not imitate any real person. Experience Mass labels it "simulated AI voice" on every priest caption, and shows the disclosure "This is an educational simulation using an AI-generated voice. It is not a celebration of Mass." The teacher narration is never used as the priest.

**Regenerating after a text change.** Put `OPENAI_API_KEY` in `.env.local` (gitignored), then:

```bash
node scripts/generate-narration.mjs --check                 # list missing or stale recordings; no API calls
node --env-file=.env.local scripts/generate-narration.mjs   # regenerate only those
```

The manifest stores a hash of each recording's text, model, voice, and instructions. A failed request leaves the old file and keeps it marked stale. There are 56 recordings in all: 28 Learn the Mass narration, 6 Before Mass, 14 Introductory Rites narration, 4 priest or leader lines, and 4 congregation mixes. Generating all of them costs well under $1.

**Provider retirement.** OpenAI's speech models (`gpt-4o-mini-tts`, `tts-1`, `tts-1-hd`) shut down on **January 6, 2027** (OpenAI deprecations page, announced October 1, 2026). After that the script needs a new model or provider (OpenAI suggests `gpt-realtime-2.1-mini` via its Realtime API), and new recordings may not match the current voices. Finish text reviews and regenerate before that date where possible. The app and the existing files are unaffected.

**Not yet verified by ear:** voice quality, the Mexican Spanish accent, and the pronunciation of "Kyrie, eleison" / "Christe, eleison". Playback on real iPhone and Android devices has not been tested either.

Official dialogue recordings, if licensed later, must stay separate from this educational narration.

## Core requirement: voice practice (first exercise built)

Practicing congregational responses is a core feature. Three exercises are built (Sign of the Cross, Kyrie, Collect); the others are not yet. The planned flow:

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
- **Kyrie and Greek.** U.S. English and Mexican Spanish recognizers may mishear "Kyrie, eleison". The learner corrects it in the box before checking. Only the Greek is accepted in this exercise, because the prompt gives the leader's line in Greek. Only the first of the three responses is practiced.
- **Browser support.** Chrome and Edge (desktop and Android) and Safari support speech recognition. Firefox does not; it shows a note, and typing works. Recognition accuracy for a single short word varies.

The `response` lines in `content/mass.ts` (speaker, exact words when available, meaning) are shaped for this flow.

## Liturgical sources

- General Instruction of the Roman Missal (GIRM), USCCB English translation (2011), especially nos. 43, 46–54, 120, 274, 275
- The Roman Missal, Third Edition (2011): The Order of Mass, Introductory Rites; Appendix II (Rite for the Blessing and Sprinkling of Water)

Each moment in `content/mass.ts` lists the specific references it relies on.

## Liturgical text and licensing questions (private use)

*This is our reading of the published policies, not legal advice.*

**Scope.** This is a private, personal, non-commercial educational project. It is not distributed, deployed, sold, or listed anywhere.

**Private use is not itself a permission.**
- ICEL's copyright page directs all requests to its Secretariat and says nothing about personal use.
- The USCCB's permissions page doesn't address it either.
- What remains is U.S. fair use: a case-by-case defense, strongest here because the use is personal and non-commercial, nothing is distributed, the text comes from a copy the owner has, and there is no effect on the market for missals.

Contacting ICEL is not a prerequisite for continued private development (owner's decision).

### Rights inventory

| Material | Holder | How it is handled |
|---|---|---|
| Order of Mass and the Collect, English | ICEL | Only in the git-ignored local copy, supplied by the owner from an authoritative source. |
| Order of Mass and the Collect, Spanish | *Misal Romano* (USCCB, 2018 edition, or another edition) | Same as English. Optional. |
| Lectionary readings (next milestone) | USCCB / CCD (NABRE Lectionary) | Its policy allows use without written permission under 5,000 words and under 40% of a rite's or season's readings, verbatim, with the acknowledgment. It does not allow posting or podcasting. Readings go in the local copy as well. |
| Music (hymns, a sung Gloria, psalm settings) | Various publishers | Not included. The AI voices speak and do not sing. |
| Amen, the Greek Kyrie, the Trinitarian invocation | Treated as free (item 2 below) | Tracked and recorded. |
| Narration, illustrations | The project owner | Tracked. |

### Open legal questions (unresolved, flagged)

1. Whether fair use covers keeping full recorded audio of ICEL texts for personal study, as distinct from reading them from a printed missal.
2. Whether sending the texts to OpenAI's speech and transcription APIs to record them is consistent with the rights holders' terms. OpenAI's API data-use terms also apply.
3. Whether the Lectionary allowance ("one-time use") covers a private app that replays the readings.
4. Whether short responses (the reply to the Greeting, the three-word invitation to pray) are free as short phrases. They are treated as licensed for now.

If the project's scope ever changes (sharing, deployment, distribution), all of the above must be settled with ICEL and the USCCB first.

**Earlier notes, kept for reference:**

   **Greeting practice depends on this.** Before it can be added, three things are needed: permission to quote the people's response, the exact wording from a licensed copy, and confirmation of which Spanish missal to follow (U.S. 2018 or Mexico) and whether its greetings have more than one response. Once settled, add the `words` to the Greeting's people line in `content/mass.ts`; the lesson then shows them, and practice works with no code change.
2. **Quoted words.** Only "Amen" / "Amén", the Greek "Kyrie, eleison" / "Christe, eleison", and (in Experience Mass) the priest's opening Trinitarian invocation are quoted. Amen and the Kyrie are ancient acclamations, not translations, and are widely treated as free to use. Confirm this before release.

   **The opening invocation (Milestone 6A).** The wording, as spoken by the simulated priest and captioned:
   - English: "In the name of the Father, and of the Son, and of the Holy Spirit." This is the wording of the Order of Mass, Introductory Rites, in *The Roman Missal* (2010 ICEL translation; confirmed against the Liturgy Office of England and Wales's published Order of Mass text). It was the same in the 1973 translation.
   - Spanish: "En el nombre del Padre, y del Hijo, y del Espíritu Santo." This is the traditional Spanish formula used in the *Misal Romano*. The exact U.S. (2018) and Mexican editions were **not** checked against a printed copy.

   **Basis for using it.** (a) It is a seven-word formula from Matthew 28:19 that the Church used for centuries before ICEL or the *Misal Romano* existed, not original writing by either. (b) The identical Spanish wording is in Matthew 28:19 of the Reina-Valera 1909 Bible, which is in the public domain. The identical English wording appears in public-domain texts, such as the baptismal formula of the 1979 *Book of Common Prayer*, which its publisher has released to the public domain. (c) Under U.S. law, words and short phrases are not protected by copyright (37 CFR 202.1(a)). We therefore believe it may be used without permission. **This is our assessment, not legal advice.**

   **Still open:** ICEL's copyright page (icelweb.org/copyright.htm) directs all permission requests to its Secretariat and does not address short phrases or apps. Before public release, ask ICEL and the USCCB to confirm, or add the standard acknowledgment as a courtesy. A priest or liturgy office should also confirm that presenting this line in an AI voice is pastorally acceptable, and a reviewer should check the Spanish against the printed U.S. *Misal Romano*.
3. **Order of Mass paragraph numbers.** The content cites the Order of Mass by section, not by paragraph number. Add paragraph numbers after checking a printed Roman Missal. (The USCCB Order of Mass page could not be fetched automatically.)
4. **Review.** A priest or diocesan liturgy office should review the explanations, and a native-speaking catechist should review the Spanish.
5. **Illustrations.** The six scenes were supplied by the project owner. Confirm their usage rights before release. Open accuracy items are listed in `docs/illustrations.md`, section 8.

## Known issues

- Response practice (Learn the Mass) has not yet been tested with a real microphone or on iPhone and Android. Experience Mass no longer uses the microphone.
- Experience Mass has been tested in desktop Chrome only, including 320 and 390 px widths in frames. It has not been tested on real iPhone or Android devices, and the iOS audio unlock is untested on a real iPhone.
- The Before Mass narration has not been reviewed by ear (pace, tone, "hearing" in B2). Its seven illustrations are placeholders.
- The congregation recordings were trimmed (no new TTS). They had kept up to 1.7 s of near-silence after the voices; now 0.25 s remains after the last audible sound, and `mixToWav` trims new mixes the same way.
- Introductory Rites audio: listen to confirm words the transcription check heard differently. These are probably transcription slips, but "invocations" was heard as "indications" in two separate recordings (Penitential Act and Kyrie closing narration). Also "Sign" (heard "side"), "some" ("sun"), and "that" ("at"). Check the Greek pronunciation and whether the congregation mixes sound natural.
- `whisper-1`, used only by the generation script to check words and time captions, shuts down on February 26, 2027 (OpenAI deprecations page); the text-to-speech models on January 6, 2027.
- The priest voice and its Spanish accent have not been reviewed by ear.
- The default Next.js favicon is still in place.

## Next milestone

First, record the official texts of the Introductory Rites from the local copy, and finish the listening checks above. Then comes the Liturgy of the Word for the fixed example, the **Fifteenth Sunday in Ordinary Time, Year B**: the script first, for review, with the readings and psalm in the local copy only.
