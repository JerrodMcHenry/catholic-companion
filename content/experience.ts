// The Introductory Rites in Experience Mass: the eight moments of content/mass.ts, played after Before
// Mass (content/before-mass.ts). Content only; the player is app/experience/player.tsx. The approved
// script, with every line's role and permission status, is docs/introductory-rites-narration.md.
//
// The Mass is a flat list of beats. Each beat belongs to one moment (a content/mass.ts id) and has
// one role:
//   narrator  the approved educational narration (English), one recording, captions by sentence
//   priest    the priest's words; only CLEARED text is recorded
//   leader    the priest or a cantor leading the Kyrie (CLEARED Greek)
//   people    the people's response (CLEARED: Amen / Amén, Kyrie, Christe), a simulated congregation
//   silence   a liturgical silence, shown with a caption
//   pending   an official text (ICEL / Misal Romano). This tracked file never holds its words: it
//             names the text and its source. If the official words have been pasted into the
//             git-ignored public/local/liturgical-texts.json and recorded (scripts/generate-narration.mjs),
//             the player voices them from public/local/; otherwise it shows a labeled, silent placeholder.
// The player plays each beat's recording (if any) to its end, holds for `hold` ms, and moves on.
//
// Only imports types, so scripts/generate-narration.mjs and the tests can read this file with Node.
//
// LITURGICAL TEXT. Only the CLEARED texts appear here: the Trinitarian invocation, Amen / Amén, and the
// Greek Kyrie, eleison / Christe, eleison (README, licensing). Everything else in the liturgy is a
// `pending` beat naming where the text is found, never its words, and never a paraphrase presented as
// the liturgy. Narrator lines are original teaching, not liturgical text.

import type { PlaceholderScene } from "./before-mass";
import type { MomentId, Posture, SceneId, Text } from "./mass";

export type Role = "narrator" | "priest" | "leader" | "people" | "silence" | "pending";

export type Beat = {
  id: string; // stable id (used for saved progress)
  moment: MomentId;
  role: Role;
  scene: SceneId | PlaceholderScene | MassPlaceholder;
  posture: { position: Posture; note: Text };
  chip?: Text; // posture chip text when more specific than the position (e.g. "Strike the breast")
  narration?: string[]; // narrator: approved paragraphs, word for word from the script
  text?: Text; // priest / leader / people: the CLEARED words; silence: its caption
  pending?: { what: Text; source: string; speaker: "priest" | "people" }; // pending: the official text's name, source, and who says it
  audio?: string | { en: string; es: string }; // recording under public/audio/ (one for every language, or per language)
  hold: number; // ms to stay on the beat, after its recording (if any) ends
};

// The simulated priest: a fictional AI-generated voice, distinct from the teacher narrators.
export const PRIEST_VOICE = { en: "priest-en-US-onyx", es: "priest-es-MX-onyx" } as const;

// Scenes for which the existing image is inaccurate (docs/illustrations.md §8) and no new image exists
// yet. The player shows a labeled "Illustration in progress" card, as for Before Mass.
export type MassPlaceholder = "procession" | "assembly-standing";
export const MASS_PLACEHOLDERS: Record<MassPlaceholder, { title: string; description: string }> = {
  procession: {
    title: "The entrance procession",
    description: "A server with the cross and candles, a reader with the Book of the Gospels, and the priest last.",
  },
  "assembly-standing": {
    title: "The people standing in prayer",
    description: "The congregation stands with hands joined; the priest is at his chair.",
  },
};

const STAND: Beat["posture"] = { position: "stand", note: { en: "Stand.", es: "De pie." } };
const SIT: Beat["posture"] = {
  position: "sit",
  note: { en: "Sit for the first reading.", es: "Siéntate para la primera lectura." },
};
const AMEN = { en: "Amen.", es: "Amén." };
const AMEN_AUDIO = { en: "congregation/amen-en.wav", es: "congregation/amen-es.wav" };
const PENDING_HOLD = 3000;
const NARRATOR_GAP = 600; // short breath after a narrator recording

// Narrator recordings: public/audio/en-US-marin/intro-<id>-narration.mp3 (English for now, every mode).
const narrator = (id: string, moment: MomentId, scene: Beat["scene"], narration: string[], extra: Partial<Beat> = {}): Beat => ({
  id,
  moment,
  role: "narrator",
  scene,
  posture: STAND,
  narration,
  audio: `en-US-marin/intro-${id}-narration.mp3`,
  hold: NARRATOR_GAP,
  ...extra,
});
const pending = (id: string, moment: MomentId, scene: Beat["scene"], speaker: "priest" | "people", what: Text, source: string, extra: Partial<Beat> = {}): Beat => ({
  id,
  moment,
  role: "pending",
  scene,
  posture: STAND,
  pending: { what, source, speaker },
  hold: PENDING_HOLD,
  ...extra,
});
const KYRIE_CHIP = { en: "Repeat after the leader", es: "Repite después de quien dirige" };

export const EXPERIENCE: Beat[] = [
  // 1. Entrance Procession
  narrator("entrance", "entrance", "procession", [
    "In our simulated Mass, a Sunday in Ordinary Time, the opening hymn now begins and everyone stands. You won't hear the music here; at a real Mass, the whole church would be singing. This is the Entrance Procession, and with it, Mass begins.",
    "In this church, a server leads with the cross, with candles on either side, and a reader carries the Book of the Gospels. The priest comes last. Processions differ from parish to parish: some are simpler, and when a deacon is present, he carries the Book of the Gospels.",
    "Why a procession? The Church is a people on a journey toward God, and Christ, shown by the cross, leads the way. Singing together gathers many voices into one.",
    "At Mass, sing if you can; the hymn is usually listed in the worship aid or on a board near the front. From here on, we'll pause the action now and then to explain what you're seeing. At a real Mass, of course, no one narrates.",
  ]),

  // 2. Reverence to the Altar
  narrator("reverence", "reverence", "altar-reverence", [
    "At the front, the priest and the ministers bow deeply to the altar. Then the priest, and the deacon if there is one, kisses it.",
    "Remember, the altar is a sign of Christ himself, and the table where his sacrifice will be made present. The kiss is a greeting of love and reverence.",
    "At some Masses, the priest also incenses the altar and the cross; there's no incense at the Mass we're simulating. The rising smoke is a picture of our prayer rising to God.",
    "Meanwhile, the people keep standing, and the singing continues. Only the ministers make this gesture.",
  ]),

  // 3. Sign of the Cross
  narrator("sign-of-the-cross-1", "sign-of-the-cross", "sign-of-the-cross", [
    "When the hymn ends, the priest goes to his chair. Now everyone makes the Sign of the Cross together, as he says the opening words.",
  ], { chip: { en: "Make the Sign of the Cross", es: "Haz la señal de la cruz" } }),
  {
    id: "sign-of-the-cross-priest",
    moment: "sign-of-the-cross",
    role: "priest",
    scene: "sign-of-the-cross",
    posture: STAND,
    chip: { en: "Make the Sign of the Cross", es: "Haz la señal de la cruz" },
    text: {
      en: "In the name of the Father, and of the Son, and of the Holy Spirit.",
      es: "En el nombre del Padre, y del Hijo, y del Espíritu Santo.",
    },
    audio: { en: `${PRIEST_VOICE.en}/sign-of-the-cross-invocation.mp3`, es: `${PRIEST_VOICE.es}/sign-of-the-cross-invocation.mp3` },
    hold: 400,
  },
  { id: "sign-of-the-cross-people", moment: "sign-of-the-cross", role: "people", scene: "sign-of-the-cross", posture: STAND, text: AMEN, audio: AMEN_AUDIO, hold: 600 },
  narrator("sign-of-the-cross-2", "sign-of-the-cross", "sign-of-the-cross", [
    "That Amen is the people's first spoken response at Mass. It means, \"Yes, it is so.\" You'll say it again and again, and each time you make the prayer your own.",
  ]),

  // 4. Greeting
  narrator("greeting-1", "greeting", "opening-greeting", [
    "Next, the priest opens his hands and greets everyone, wishing them the Lord's grace and presence. The people answer him together.",
  ]),
  pending("greeting-priest", "greeting", "opening-greeting", "priest",
    { en: "Priest: the Greeting", es: "Sacerdote: el saludo" },
    "The Roman Missal, Order of Mass, Introductory Rites (Greeting; several forms). English: ICEL. Spanish: Misal Romano."),
  pending("greeting-people", "greeting", "opening-greeting", "people",
    { en: "People: the reply to the Greeting", es: "Pueblo: la respuesta al saludo" },
    "The Roman Missal, Order of Mass, Introductory Rites. English: ICEL. Spanish: Misal Romano (U.S., 2018)."),
  narrator("greeting-2", "greeting", "opening-greeting", [
    "The priest's words come from Scripture, often from the letters of Saint Paul. The Missal offers him several greetings, so what you hear may vary. The people's reply is usually printed in the worship aid.",
    "This exchange is more than \"good morning.\" It declares that Christ is present among his gathered people. Many understand the people's reply as a prayer for the priest himself, and for the gift of the Holy Spirit he received at his ordination.",
    "Sometimes the priest, a deacon, or another minister then says a few words to introduce the Mass of the day.",
  ]),

  // 5. Penitential Act (form A, as used in this simulated Ordinary Time Sunday)
  narrator("penitential-act-1", "penitential-act", "assembly-standing", [
    "Now we prepare our hearts. Before hearing God's word and celebrating the Eucharist, we admit honestly that we are sinners who need his mercy.",
    "In the form used today, the priest invites everyone to call their sins to mind. After a short silence, all pray a confession together, to God and to one another. At the words that admit our own fault, many people strike their breast.",
  ]),
  pending("penitential-invitation", "penitential-act", "assembly-standing", "priest",
    { en: "Priest: the invitation to the Penitential Act", es: "Sacerdote: la invitación al acto penitencial" },
    "The Roman Missal, Order of Mass, Penitential Act. English: ICEL. Spanish: Misal Romano."),
  {
    id: "penitential-silence",
    moment: "penitential-act",
    role: "silence",
    scene: "assembly-standing",
    posture: STAND,
    text: { en: "Silence. Call your sins to mind.", es: "Silencio. Recuerda tus pecados." },
    hold: 5000,
  },
  pending("confiteor", "penitential-act", "assembly-standing", "people",
    { en: "All: the Confiteor (“I confess”)", es: "Todos: el Yo confieso" },
    "The Roman Missal, Order of Mass, Penitential Act, form A. English: ICEL. Spanish: Misal Romano.",
    { chip: { en: "Strike the breast at the words of one's own fault", es: "Golpéate el pecho al reconocer tu culpa" } }),
  pending("penitential-mercy", "penitential-act", "assembly-standing", "priest",
    { en: "Priest: the prayer for mercy", es: "Sacerdote: la oración por la misericordia" },
    "The Roman Missal, Order of Mass, Penitential Act (concluding prayer). English: ICEL. Spanish: Misal Romano."),
  { id: "penitential-people", moment: "penitential-act", role: "people", scene: "assembly-standing", posture: STAND, text: AMEN, audio: AMEN_AUDIO, hold: 600 },
  narrator("penitential-act-2", "penitential-act", "assembly-standing", [
    "That prayer asks God's mercy for all of us. It isn't the Sacrament of Confession, which Catholics need for serious sins. It prepares us to celebrate.",
    "This was one of several forms of the Penitential Act, all of them valid. The priest may instead use a short exchange of verses, or a series of invocations to Christ, each answered with a plea for mercy. And on some Sundays, especially in Easter Time, he blesses water and sprinkles the people instead, recalling their Baptism.",
  ]),

  // 6. Kyrie (said, in Greek, as in this simulated Mass)
  narrator("kyrie-1", "kyrie", "assembly-standing", [
    "Next comes the Kyrie, one of the oldest prayers of the Mass. The priest or a cantor says or sings each line, and everyone repeats it. In our simulated Mass, it's said in the original Greek.",
  ], { chip: KYRIE_CHIP }),
  ...(
    [
      ["kyrie-a", { en: "Kyrie, eleison.", es: "Kyrie, eleison." }, "kyrie-eleison"],
      ["christe", { en: "Christe, eleison.", es: "Christe, eleison." }, "christe-eleison"],
      ["kyrie-b", { en: "Kyrie, eleison.", es: "Kyrie, eleison." }, "kyrie-eleison"],
    ] as const
  ).flatMap(([id, text, file]): Beat[] => [
    {
      id: `${id}-leader`,
      moment: "kyrie",
      role: "leader",
      scene: "assembly-standing",
      posture: STAND,
      chip: KYRIE_CHIP,
      text,
      audio: `${PRIEST_VOICE.en}/${file}.mp3`, // Greek: the same recording in every language
      hold: 300,
    },
    {
      id: `${id}-people`,
      moment: "kyrie",
      role: "people",
      scene: "assembly-standing",
      posture: STAND,
      chip: KYRIE_CHIP,
      text,
      audio: `congregation/${file}.wav`,
      hold: 500,
    },
  ]),
  narrator("kyrie-2", "kyrie", "assembly-standing", [
    "Kyrie, eleison means \"Lord, have mercy.\" Christe, eleison means \"Christ, have mercy.\" It both praises the Lord and asks his mercy: a cry of trust.",
    "Many parishes sing it in English or Spanish instead, and some musical settings repeat each line more often. It's left out when the invocations to Christ were already used, or after the sprinkling with water.",
  ]),

  // 7. Gloria (sung on this Ordinary Time Sunday; omitted in Advent and Lent)
  narrator("gloria-1", "gloria", "assembly-standing", [
    "Because this is a Sunday in Ordinary Time, everyone now joins in the Gloria, an ancient hymn of praise.",
    "It opens with the song the angels sang at Jesus' birth. Then it praises God the Father. It calls on Jesus as the Lamb of God, who takes away the sins of the world, and it gives glory to the Holy Spirit.",
  ]),
  pending("gloria", "gloria", "assembly-standing", "people",
    { en: "All: the Gloria (text and music)", es: "Todos: el Gloria (texto y música)" },
    "The Roman Missal, Order of Mass, Gloria. English: ICEL. Spanish: Misal Romano. Usually sung: a musical setting is also needed.",
    { chip: { en: "Bow the head at the name of Jesus", es: "Inclina la cabeza al nombre de Jesús" } }),
  narrator("gloria-2", "gloria", "assembly-standing", [
    "There's no back-and-forth here: it's one hymn, sung by everyone together, alternating with the choir, or said aloud. Its words are fixed, so no other song may replace it. If it's new to you, follow along in the worship aid, or simply listen and pray in your heart.",
    "Many people bow their head when the name of Jesus is sung. The Gloria belongs to Sundays outside Advent and Lent and to great feasts. In Advent and Lent it's left out, so it can ring out with fresh joy at Christmas and Easter.",
  ]),

  // 8. Collect
  narrator("collect-1", "collect", "collect", [
    "Now the priest invites everyone to pray, and then he pauses. Use that silence. Bring God your own intentions: the people you love, your worries, your thanks.",
  ]),
  pending("collect-invitation", "collect", "collect", "priest",
    { en: "Priest: the invitation to pray", es: "Sacerdote: la invitación a orar" },
    "The Roman Missal, Order of Mass, Collect (three words in English; possibly free as a short phrase, not yet decided)."),
  {
    id: "collect-silence",
    moment: "collect",
    role: "silence",
    scene: "collect",
    posture: STAND,
    text: { en: "Silence. Bring your own intentions to God.", es: "Silencio. Presenta a Dios tus intenciones." },
    hold: 6000,
  },
  pending("collect-prayer", "collect", "collect", "priest",
    { en: "Priest: the Collect of the day", es: "Sacerdote: la oración colecta del día" },
    "The Roman Missal, Proper of Time, Fifteenth Sunday in Ordinary Time (the Sunday simulated here; the Collect changes with the liturgical day), with its Trinitarian conclusion. English: ICEL. Spanish: Misal Romano."),
  { id: "collect-people", moment: "collect", role: "people", scene: "collect", posture: STAND, text: AMEN, audio: AMEN_AUDIO, hold: 600 },
  narrator("collect-2", "collect", "collect", [
    "That prayer is called the Collect, because it gathers everyone's prayers into one. Its words follow the liturgical day: each Sunday, feast, and season has its own Collect.",
    "With that Amen, the Introductory Rites are complete. Everyone sits down, ready to listen to the word of God.",
  ], { posture: SIT }),
];
