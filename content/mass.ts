// Liturgical content for the guided Mass simulation.
//
// This file holds content only, no rendering logic. Explanations are original writing.
// Official liturgical texts (ICEL English, USCCB Misal Romano Spanish) are copyrighted and
// are NOT reproduced here. Where the official words are not included, `meaning` describes
// what is said in our own words. Only the people's "Amen" and the Greek "Kyrie, eleison /
// Christe, eleison" are quoted: these are ancient, untranslated acclamations in common use.
// Open text and licensing questions are tracked in README.md.

export type Text = { en: string; es: string };

export type MomentId =
  | "entrance"
  | "reverence"
  | "sign-of-the-cross"
  | "greeting"
  | "penitential-act"
  | "kyrie"
  | "gloria"
  | "collect";

export type Posture = "stand" | "sit" | "kneel";

// One line of dialogue for response practice (and, later, voice practice).
export type ResponseLine = {
  speaker: "priest" | "people" | "all";
  words?: Text; // exact words, only when verified as free to reproduce
  meaning: Text; // original description of what is said and what it means
};

export type MassMoment = {
  id: MomentId;
  order: number;
  title: Text;
  explanation: Text;
  deeper?: Text;
  posture: { position: Posture; note: Text };
  response?: ResponseLine[];
  illustration: { id: string; caption: Text };
  condition?: Text; // set when this rite does not happen at every Mass
  variations?: Text;
  sources: string[];
};

// The path shown in the simulation.
export const TYPICAL_PATH: Text = {
  en: "Shown here: a typical Sunday Mass in Ordinary Time, using the Penitential Act with the “I confess” prayer, followed by the Kyrie and the Gloria. Other options are explained along the way.",
  es: "Aquí se muestra una Misa dominical típica del Tiempo Ordinario, con el Acto penitencial del «Yo confieso», seguido del Kyrie y el Gloria. Las otras opciones se explican en el camino.",
};

export const INTRODUCTORY_RITES: MassMoment[] = [
  {
    id: "entrance",
    order: 1,
    title: { en: "Entrance Procession", es: "Procesión de entrada" },
    explanation: {
      en: "Mass begins as the priest and ministers walk up the aisle toward the altar. A cross and candles usually lead the way, and the deacon or a reader may carry the Book of the Gospels. Everyone joins in the opening song, which gathers the many people present into one praying community.",
      es: "La Misa comienza cuando el sacerdote y los ministros avanzan por el pasillo hacia el altar. Normalmente van delante una cruz y velas, y el diácono o un lector puede llevar el Evangeliario. Todos se unen al canto de entrada, que reúne a las muchas personas presentes en una sola comunidad de oración.",
    },
    deeper: {
      en: "The Church gives the Entrance Chant four purposes: to open the celebration, to foster the unity of those gathered, to lead their thoughts into the mystery of the season or feast, and to accompany the procession. The procession itself is an image of the whole Church on pilgrimage, walking together toward God, with Christ, represented by the cross, going ahead.",
      es: "La Iglesia da al canto de entrada cuatro propósitos: abrir la celebración, fomentar la unidad de los reunidos, introducir su mente en el misterio del tiempo litúrgico o de la fiesta, y acompañar la procesión. La procesión misma es una imagen de toda la Iglesia peregrina, que camina unida hacia Dios, con Cristo, representado por la cruz, al frente.",
    },
    posture: {
      position: "stand",
      note: {
        en: "Stand when the opening song begins or when the procession starts.",
        es: "Ponte de pie cuando comience el canto de entrada o cuando empiece la procesión.",
      },
    },
    illustration: {
      id: "entrance-procession",
      caption: {
        en: "The procession moves up the aisle, led by the cross.",
        es: "La procesión avanza por el pasillo, encabezada por la cruz.",
      },
    },
    variations: {
      en: "The opening song may be a chant from the Church’s official books or another suitable hymn. If there is no singing, the entrance antiphon is recited instead: by the people, some of them, a reader, or the priest himself. At smaller Masses the procession may be very short.",
      es: "El canto de entrada puede ser un canto de los libros oficiales de la Iglesia u otro canto adecuado. Si no se canta, se recita la antífona de entrada: por el pueblo, por algunos fieles, por un lector o por el mismo sacerdote. En Misas más pequeñas la procesión puede ser muy breve.",
    },
    sources: ["GIRM 43, 47–48, 120", "Order of Mass: Introductory Rites"],
  },
  {
    id: "reverence",
    order: 2,
    title: { en: "Reverence to the Altar", es: "Veneración del altar" },
    explanation: {
      en: "When they reach the sanctuary, the priest and ministers make a deep bow to the altar. The priest, and the deacon if present, then kiss the altar. The altar is the place of Christ’s sacrifice and the table of the Lord, so it is greeted first.",
      es: "Al llegar al presbiterio, el sacerdote y los ministros hacen una inclinación profunda ante el altar. Luego el sacerdote, y el diácono si lo hay, besan el altar. El altar es el lugar del sacrificio de Cristo y la mesa del Señor, por eso se le saluda primero.",
    },
    deeper: {
      en: "In Christian tradition the altar is a sign of Christ himself. The kiss is an ancient gesture of love and respect, much like greeting a family member. When incense is used, its rising smoke recalls the psalm in which prayer rises before God like incense (Psalm 141:2).",
      es: "En la tradición cristiana el altar es signo de Cristo mismo. El beso es un gesto antiguo de amor y respeto, como el saludo a un ser querido. Cuando se usa incienso, el humo que sube recuerda el salmo en que la oración se eleva ante Dios como incienso (Salmo 141, 2).",
    },
    posture: {
      position: "stand",
      note: {
        en: "Keep standing. Simply watch and pray; the congregation does not make this gesture.",
        es: "Sigue de pie. Simplemente observa y ora; la asamblea no hace este gesto.",
      },
    },
    illustration: {
      id: "altar-reverence",
      caption: {
        en: "The priest bows and kisses the altar.",
        es: "El sacerdote se inclina y besa el altar.",
      },
    },
    variations: {
      en: "The priest may also incense the cross and the altar. If the tabernacle with the Blessed Sacrament is in the sanctuary, the ministers genuflect to it as they arrive.",
      es: "El sacerdote también puede incensar la cruz y el altar. Si el sagrario con el Santísimo Sacramento está en el presbiterio, los ministros hacen genuflexión al llegar.",
    },
    sources: ["GIRM 49, 274", "Order of Mass: Introductory Rites"],
  },
  {
    id: "sign-of-the-cross",
    order: 3,
    title: { en: "Sign of the Cross", es: "La señal de la cruz" },
    explanation: {
      en: "When the song ends, the priest goes to his chair. He and the whole congregation make the Sign of the Cross together as he begins the Mass in the name of the Father, the Son, and the Holy Spirit. Everyone answers “Amen.”",
      es: "Al terminar el canto, el sacerdote va a la sede. Él y toda la asamblea hacen juntos la señal de la cruz mientras él comienza la Misa en el nombre del Padre, del Hijo y del Espíritu Santo. Todos responden «Amén».",
    },
    deeper: {
      en: "This is the same name in which every Christian was baptized (Matthew 28:19). Beginning Mass this way reminds us whose we are and that the whole celebration is offered to the Father, through the Son, in the Holy Spirit. “Amen” is a Hebrew word of agreement: “Yes, it is so.”",
      es: "Es el mismo nombre en el que todo cristiano fue bautizado (Mateo 28, 19). Comenzar así la Misa nos recuerda a quién pertenecemos y que toda la celebración se ofrece al Padre, por el Hijo, en el Espíritu Santo. «Amén» es una palabra hebrea de asentimiento: «Sí, así es».",
    },
    posture: {
      position: "stand",
      note: {
        en: "Stand and trace the cross: forehead, chest, left shoulder, right shoulder.",
        es: "De pie, haz la señal de la cruz: frente, pecho, hombro izquierdo, hombro derecho.",
      },
    },
    response: [
      {
        speaker: "priest",
        meaning: {
          en: "Begins in the name of the Father, the Son, and the Holy Spirit.",
          es: "Comienza en el nombre del Padre, del Hijo y del Espíritu Santo.",
        },
      },
      {
        speaker: "people",
        words: { en: "Amen.", es: "Amén." },
        meaning: {
          en: "We agree and make this beginning our own.",
          es: "Asentimos y hacemos nuestro este comienzo.",
        },
      },
    ],
    illustration: {
      id: "sign-of-the-cross",
      caption: {
        en: "Priest and people sign themselves with the cross.",
        es: "El sacerdote y el pueblo se santiguan.",
      },
    },
    sources: ["GIRM 50", "Order of Mass: Introductory Rites"],
  },
  {
    id: "greeting",
    order: 4,
    title: { en: "Greeting", es: "Saludo" },
    explanation: {
      en: "The priest extends his hands and greets the people with words drawn from Scripture, wishing them the Lord’s presence and grace. The people return the greeting. This short exchange shows that Christ is present among his gathered people.",
      es: "El sacerdote extiende las manos y saluda al pueblo con palabras tomadas de la Escritura, deseándole la presencia y la gracia del Señor. El pueblo devuelve el saludo. Este breve diálogo manifiesta que Cristo está presente en medio de su pueblo reunido.",
    },
    deeper: {
      en: "The greetings echo the openings of St. Paul’s letters (for example 2 Corinthians 13:13) and the greeting “The Lord is with you” found in the Bible (Ruth 2:4; Luke 1:28). The people’s reply prays that the Lord be with the priest’s spirit, which many understand as a reference to the gift of the Holy Spirit he received at ordination for this service.",
      es: "Los saludos recuerdan el inicio de las cartas de san Pablo (por ejemplo, 2 Corintios 13, 13) y el saludo bíblico «el Señor está contigo» (Rut 2, 4; Lucas 1, 28). La respuesta del pueblo pide que el Señor esté con el espíritu del sacerdote, lo que muchos entienden como referencia al don del Espíritu Santo que recibió en su ordenación para este servicio.",
    },
    posture: {
      position: "stand",
      note: {
        en: "Keep standing and answer the priest together with everyone.",
        es: "Sigue de pie y responde al sacerdote junto con todos.",
      },
    },
    response: [
      {
        speaker: "priest",
        meaning: {
          en: "Greets the people, wishing them the grace, love, or presence of the Lord.",
          es: "Saluda al pueblo, deseándole la gracia, el amor o la presencia del Señor.",
        },
      },
      {
        speaker: "people",
        meaning: {
          en: "Return the greeting, asking that the Lord be with the priest’s spirit as well.",
          es: "Devuelven el saludo, pidiendo que el Señor esté también con el espíritu del sacerdote.",
        },
      },
    ],
    illustration: {
      id: "opening-greeting",
      caption: {
        en: "From the chair, the priest greets the people with open hands.",
        es: "Desde la sede, el sacerdote saluda al pueblo con las manos abiertas.",
      },
    },
    variations: {
      en: "The Missal offers several greetings for the priest; a bishop uses his own. After the greeting, the priest, a deacon, or another minister may briefly introduce the Mass of the day.",
      es: "El Misal ofrece varios saludos para el sacerdote; el obispo usa uno propio. Después del saludo, el sacerdote, el diácono u otro ministro puede introducir brevemente la Misa del día.",
    },
    sources: ["GIRM 50", "Order of Mass: Introductory Rites"],
  },
  {
    id: "penitential-act",
    order: 5,
    title: { en: "Penitential Act", es: "Acto penitencial" },
    explanation: {
      en: "The priest invites everyone to remember their sins and prepare to celebrate. After a brief silence, everyone together prays a general confession, asking forgiveness from God and the prayers of the saints and of one another. The priest then prays that God have mercy on us, and the people answer “Amen.”",
      es: "El sacerdote invita a todos a reconocer sus pecados y a prepararse para la celebración. Tras un breve silencio, todos juntos hacen una confesión general, pidiendo perdón a Dios y la oración de los santos y de los hermanos. Luego el sacerdote pide que Dios tenga misericordia de nosotros, y el pueblo responde «Amén».",
    },
    deeper: {
      en: "We come before God honestly, as the tax collector did in Jesus’ parable (Luke 18:13). The priest’s closing prayer is not sacramental absolution: it does not replace the Sacrament of Penance for serious sins. It prepares our hearts to hear the Word and receive the Eucharist.",
      es: "Nos presentamos ante Dios con sinceridad, como el publicano de la parábola de Jesús (Lucas 18, 13). La oración final del sacerdote no es la absolución sacramental: no sustituye al sacramento de la Penitencia para los pecados graves. Prepara nuestro corazón para escuchar la Palabra y recibir la Eucaristía.",
    },
    posture: {
      position: "stand",
      note: {
        en: "Stand. During the confession, many strike their breast at the words admitting their own fault.",
        es: "De pie. Durante la confesión, muchos se golpean el pecho al reconocer su propia culpa.",
      },
    },
    response: [
      {
        speaker: "priest",
        meaning: {
          en: "Invites everyone to acknowledge their sins. A brief silence follows.",
          es: "Invita a todos a reconocer sus pecados. Sigue un breve silencio.",
        },
      },
      {
        speaker: "all",
        meaning: {
          en: "The confession (“I confess”): we admit to God and to one another that we have sinned in thought, word, action, and omission, and ask Mary, the angels, the saints, and our brothers and sisters to pray for us.",
          es: "La confesión («Yo confieso»): reconocemos ante Dios y ante los hermanos que hemos pecado de pensamiento, palabra, obra y omisión, y pedimos a María, a los ángeles, a los santos y a los hermanos que oren por nosotros.",
        },
      },
      {
        speaker: "priest",
        meaning: {
          en: "Prays that almighty God have mercy on us, forgive our sins, and bring us to everlasting life.",
          es: "Pide que Dios todopoderoso tenga misericordia de nosotros, perdone nuestros pecados y nos lleve a la vida eterna.",
        },
      },
      {
        speaker: "people",
        words: { en: "Amen.", es: "Amén." },
        meaning: {
          en: "We join in the priest’s prayer.",
          es: "Nos unimos a la oración del sacerdote.",
        },
      },
    ],
    illustration: {
      id: "penitential-act",
      caption: {
        en: "A moment of silence as the people examine their hearts.",
        es: "Un momento de silencio mientras el pueblo examina su corazón.",
      },
    },
    condition: {
      en: "Usual, but on some Sundays (especially in Easter Time) it is replaced by the blessing and sprinkling of holy water.",
      es: "Es lo habitual, pero algunos domingos (sobre todo en Pascua) se sustituye por la bendición y aspersión del agua bendita.",
    },
    variations: {
      en: "There are three forms. This guide shows the first, the “I confess” prayer. The second is a short exchange of verses between priest and people. The third is a series of invocations praising Christ, each answered with a plea for mercy, in English, Spanish, or the Greek “Kyrie, eleison” / “Christe, eleison”. On Sundays the Rite of Blessing and Sprinkling of Water may take the place of the Penitential Act, recalling our baptism.",
      es: "Hay tres formas. Esta guía muestra la primera, el «Yo confieso». La segunda es un breve diálogo de versículos entre el sacerdote y el pueblo. La tercera es una serie de invocaciones que alaban a Cristo, cada una respondida con una súplica de misericordia, en español, en inglés o en griego («Kyrie, eleison» / «Christe, eleison»). Los domingos, el rito de bendición y aspersión del agua puede ocupar el lugar del Acto penitencial, como recuerdo de nuestro bautismo.",
    },
    sources: ["GIRM 51", "Order of Mass: Introductory Rites", "Roman Missal, Appendix II"],
  },
  {
    id: "kyrie",
    order: 6,
    title: { en: "Kyrie (Lord, Have Mercy)", es: "Kyrie (Señor, ten piedad)" },
    explanation: {
      en: "Next comes a short, ancient chant that calls on the Lord, then on Christ, then on the Lord again, asking for mercy each time. The priest or a cantor sings or says each line, and the people repeat it. It may be in English, Spanish, or the original Greek, shown here.",
      es: "Luego viene un canto breve y antiguo que invoca al Señor, luego a Cristo y de nuevo al Señor, pidiendo misericordia cada vez. El sacerdote o un cantor canta o dice cada línea, y el pueblo la repite. Puede ser en inglés, en español o en el griego original, que se muestra aquí.",
    },
    deeper: {
      en: "“Kyrie, eleison” is Greek for “Lord, have mercy.” It is one of the few Greek phrases kept in the Latin liturgy, a reminder of the earliest Christian communities. It is more a cry of praise and trust than of fear, like the blind men who called out to Jesus for mercy (Matthew 20:30).",
      es: "«Kyrie, eleison» significa en griego «Señor, ten piedad». Es una de las pocas frases griegas conservadas en la liturgia latina, recuerdo de las primeras comunidades cristianas. Es más un grito de alabanza y confianza que de temor, como los ciegos que pedían misericordia a Jesús (Mateo 20, 30).",
    },
    posture: {
      position: "stand",
      note: {
        en: "Keep standing and repeat each line after the leader.",
        es: "Sigue de pie y repite cada línea después de quien la dirige.",
      },
    },
    response: [
      {
        speaker: "priest",
        words: { en: "Kyrie, eleison.", es: "Kyrie, eleison." },
        meaning: { en: "“Lord, have mercy.”", es: "«Señor, ten piedad»." },
      },
      {
        speaker: "people",
        words: { en: "Kyrie, eleison.", es: "Kyrie, eleison." },
        meaning: { en: "We repeat the cry to the Lord.", es: "Repetimos la súplica al Señor." },
      },
      {
        speaker: "priest",
        words: { en: "Christe, eleison.", es: "Christe, eleison." },
        meaning: { en: "“Christ, have mercy.”", es: "«Cristo, ten piedad»." },
      },
      {
        speaker: "people",
        words: { en: "Christe, eleison.", es: "Christe, eleison." },
        meaning: { en: "We call on Christ by name.", es: "Invocamos a Cristo por su nombre." },
      },
      {
        speaker: "priest",
        words: { en: "Kyrie, eleison.", es: "Kyrie, eleison." },
        meaning: { en: "“Lord, have mercy.”", es: "«Señor, ten piedad»." },
      },
      {
        speaker: "people",
        words: { en: "Kyrie, eleison.", es: "Kyrie, eleison." },
        meaning: { en: "We end as we began.", es: "Terminamos como empezamos." },
      },
    ],
    illustration: {
      id: "kyrie",
      caption: {
        en: "A cantor leads the people in the Kyrie.",
        es: "Un cantor guía al pueblo en el Kyrie.",
      },
    },
    condition: {
      en: "Omitted when the third form of the Penitential Act already included these invocations, or when the sprinkling rite was used.",
      es: "Se omite cuando la tercera forma del Acto penitencial ya incluyó estas invocaciones, o cuando se hizo el rito de aspersión.",
    },
    variations: {
      en: "Many parishes sing or say it in English or Spanish translation rather than Greek. Musical settings may repeat each line more than twice.",
      es: "Muchas parroquias lo cantan o recitan traducido al español o al inglés en lugar del griego. Algunas versiones musicales repiten cada línea más de dos veces.",
    },
    sources: ["GIRM 52", "Order of Mass: Introductory Rites"],
  },
  {
    id: "gloria",
    order: 7,
    title: { en: "Gloria (Glory to God)", es: "Gloria" },
    explanation: {
      en: "On most Sundays, the whole Church now sings or says the Gloria, a joyful ancient hymn. It begins with the angels’ song at Jesus’ birth, praises God the Father, calls on Christ as the Lamb of God who takes away the sins of the world, and ends by glorifying the Holy Spirit with the Father and the Son.",
      es: "La mayoría de los domingos, toda la Iglesia canta o recita ahora el Gloria, un himno antiguo y gozoso. Comienza con el canto de los ángeles en el nacimiento de Jesús, alaba a Dios Padre, invoca a Cristo como el Cordero de Dios que quita el pecado del mundo, y termina glorificando al Espíritu Santo con el Padre y el Hijo.",
    },
    deeper: {
      en: "The Gloria opens with the words of the angels over Bethlehem (Luke 2:14) and has been sung by Christians since at least the fourth century. Its text is fixed: it may not be replaced by another song. It is left out during Advent and Lent, so that it bursts forth again with special joy at Christmas and Easter.",
      es: "El Gloria comienza con las palabras de los ángeles sobre Belén (Lucas 2, 14) y los cristianos lo cantan desde al menos el siglo IV. Su texto es fijo: no puede sustituirse por otro canto. Se omite en Adviento y Cuaresma, para que resuene con alegría especial en Navidad y en Pascua.",
    },
    posture: {
      position: "stand",
      note: {
        en: "Stand. Many bow their head when the name of Jesus is said.",
        es: "De pie. Muchos inclinan la cabeza cuando se pronuncia el nombre de Jesús.",
      },
    },
    response: [
      {
        speaker: "all",
        meaning: {
          en: "The hymn of praise: glory to God in the highest and peace on earth; praise and thanks to the Father; a plea to Christ, the Lamb of God, to show us mercy and listen to us; and glory to Jesus Christ, together with the Holy Spirit, sharing the Father’s glory. It ends with “Amen.”",
          es: "El himno de alabanza: gloria a Dios en el cielo y paz en la tierra; alabanza y acción de gracias al Padre; una petición a Cristo, Cordero de Dios, para que se compadezca de nosotros y escuche nuestra oración; y gloria a Jesucristo, junto con el Espíritu Santo, en la gloria del Padre. Termina con «Amén».",
        },
      },
    ],
    illustration: {
      id: "gloria",
      caption: {
        en: "The congregation and choir sing the Gloria.",
        es: "La asamblea y el coro cantan el Gloria.",
      },
    },
    condition: {
      en: "Sung or said on Sundays outside Advent and Lent, on solemnities and feasts, and at some special celebrations.",
      es: "Se canta o se recita los domingos fuera de Adviento y Cuaresma, en las solemnidades y fiestas, y en algunas celebraciones especiales.",
    },
    variations: {
      en: "It may be sung by everyone, by the people alternating with the choir, or by the choir alone. If it is not sung, it is recited by all together or in two alternating groups.",
      es: "Puede cantarlo toda la asamblea, el pueblo alternando con el coro, o el coro solo. Si no se canta, lo recitan todos juntos o dos grupos alternándose.",
    },
    sources: ["GIRM 53, 275", "Order of Mass: Introductory Rites"],
  },
  {
    id: "collect",
    order: 8,
    title: { en: "Collect (Opening Prayer)", es: "Oración colecta" },
    explanation: {
      en: "The priest invites everyone to pray, and all keep a short silence to bring their own intentions before God. Then, with hands extended, the priest says the Collect, a prayer proper to that day, gathering everyone’s prayers into one. The people answer “Amen.” This concludes the Introductory Rites.",
      es: "El sacerdote invita a todos a orar, y todos guardan un breve silencio para presentar a Dios sus propias intenciones. Luego, con las manos extendidas, el sacerdote dice la colecta, una oración propia de ese día, que reúne en una las oraciones de todos. El pueblo responde «Amén». Así terminan los Ritos iniciales.",
    },
    deeper: {
      en: "“Collect” comes from the Latin for “gathering.” The prayer usually addresses the Father, through Christ, in the Holy Spirit, and expresses the character of the day or season. Only one Collect is said at each Mass. The silence beforehand is part of the prayer: it is your moment to place your own needs into the Church’s prayer.",
      es: "«Colecta» viene del latín y significa «reunir». La oración suele dirigirse al Padre, por Cristo, en el Espíritu Santo, y expresa el carácter del día o del tiempo litúrgico. En cada Misa se dice una sola colecta. El silencio previo forma parte de la oración: es tu momento para poner tus propias necesidades en la oración de la Iglesia.",
    },
    posture: {
      position: "stand",
      note: {
        en: "Stand through the prayer. Afterward, everyone sits for the first reading.",
        es: "Permanece de pie durante la oración. Después, todos se sientan para la primera lectura.",
      },
    },
    response: [
      {
        speaker: "priest",
        meaning: {
          en: "Invites everyone to pray. All pause in silence.",
          es: "Invita a todos a orar. Todos guardan silencio.",
        },
      },
      {
        speaker: "priest",
        meaning: {
          en: "Says the prayer of the day, which closes by naming Jesus Christ and the Holy Spirit, praising the Trinity without end.",
          es: "Dice la oración del día, que concluye nombrando a Jesucristo y al Espíritu Santo, alabando a la Trinidad sin fin.",
        },
      },
      {
        speaker: "people",
        words: { en: "Amen.", es: "Amén." },
        meaning: {
          en: "We make the prayer our own.",
          es: "Hacemos nuestra la oración.",
        },
      },
    ],
    illustration: {
      id: "collect",
      caption: {
        en: "The priest prays the Collect with hands extended.",
        es: "El sacerdote reza la colecta con las manos extendidas.",
      },
    },
    variations: {
      en: "The words of the Collect change with each Sunday, feast, and season.",
      es: "Las palabras de la colecta cambian con cada domingo, fiesta y tiempo litúrgico.",
    },
    sources: ["GIRM 43, 54", "Order of Mass: Introductory Rites"],
  },
];

export const SOURCES = [
  {
    label: "General Instruction of the Roman Missal (GIRM), USCCB English translation, 2011",
    url: "https://www.usccb.org/prayer-and-worship/the-mass/general-instruction-of-the-roman-missal",
  },
  {
    label: "The Roman Missal, Third Edition (2011): The Order of Mass, Introductory Rites; Appendix II",
    url: "https://www.usccb.org/prayer-and-worship/the-mass/order-of-mass",
  },
];
