import Form from "next/form";
import Link from "next/link";
import { CardLink, SectionTitle } from "@/components/cards";
import { getTopic } from "@/content";
import { bible, ccc } from "@/content/topics/refs";

type Ref = { label: string; url: string };
type Question = { id: string; question: string; answer: string[]; scripture: Ref[]; catechism: Ref[]; deeper: string[] };

// Life's greatest questions: a real answer when opened, with the sources and the topics that explain more.
// Scripture is explained in our own words (links go to the NABRE on the USCCB site); the opening verse is quoted
// from the public-domain Douay-Rheims. Catechism quotations follow the USCCB guidelines (notice in the footer).
const questions: Question[] = [
  {
    id: "god",
    question: "Does God exist, and does he love me?",
    answer: [
      "The Church teaches that human reason, reflecting on the world and on our own longing for truth and goodness, can come to know with certainty that God exists (CCC 31–36). God has also revealed himself, and revelation tells us what reason alone could not: that God is love (1 John 4:8).",
      "He created you freely, “in a plan of sheer goodness,” to share his own life (CCC 1). His love is not something you earn: it came first, when Christ died for us while we were still sinners (Romans 5:8).",
    ],
    scripture: [{ label: "John 3:16–17", url: bible("john/3") }, { label: "Romans 5:8", url: bible("romans/5") }, { label: "1 John 4:8–19", url: bible("1john/4") }],
    catechism: [{ label: "1", url: ccc("__P2") }, { label: "27", url: ccc("__P9") }, { label: "31–35", url: ccc("__PA") }, { label: "36–38", url: ccc("__PB") }, { label: "218–221", url: ccc("__P16") }],
    deeper: ["does-god-exist", "who-is-god", "what-do-catholics-believe"],
  },
  {
    id: "purpose",
    question: "Why am I here?",
    answer: [
      "God created you in his image, out of love, to know him, to love him, and to share his life forever (CCC 1, 356–357). “The desire for God is written in the human heart, because man is created by God and for God” (CCC 27).",
      "Your dignity comes from being made in God's image, not from wealth, success, or anyone's approval (CCC 357, 1700). Jesus sums up how to live: love God with all your heart, and love your neighbor as yourself (Matthew 22:37–39).",
    ],
    scripture: [{ label: "Genesis 1:26–27", url: bible("genesis/1") }, { label: "Matthew 22:37–39", url: bible("matthew/22") }],
    catechism: [{ label: "1", url: ccc("__P2") }, { label: "27", url: ccc("__P9") }, { label: "355–357", url: ccc("__P1B") }, { label: "1700", url: ccc("__P5F") }, { label: "1721", url: ccc("__P5K") }],
    deeper: ["why-did-god-create-us", "human-life-dignity", "salvation-history"],
  },
  {
    id: "jesus",
    question: "Who is Jesus Christ?",
    answer: [
      "Jesus Christ is the eternal Son of God who became man: truly God and truly human (CCC 464–469; John 1:1, 14).",
      "He came to reveal the Father, to save us from sin, and to reconcile us with God through his death and resurrection (CCC 456–460; Romans 5:8–11). He called himself the way, the truth, and the life (John 14:6).",
    ],
    scripture: [{ label: "John 1:1–14", url: bible("john/1") }, { label: "John 14:6", url: bible("john/14") }, { label: "Romans 5:8–11", url: bible("romans/5") }],
    catechism: [{ label: "422–429", url: ccc("__P1D") }, { label: "456–469", url: ccc("__P1J") }],
    deeper: ["who-is-jesus", "divinity-of-jesus", "why-did-jesus-die", "resurrection"],
  },
  {
    id: "suffering",
    question: "Why is there suffering?",
    answer: [
      "God is good and is in no way the cause of moral evil. He permits it because he respects our freedom, and he can bring good out of it without making evil good (CCC 311–312). We live in a world wounded by sin, where suffering and death are real (CCC 400).",
      "The Church does not claim that every tragedy has a reason we can see, and suffering is not a sign of weak faith. In Jesus, God entered our suffering, and his resurrection gives hope: he is the resurrection and the life (John 11:25).",
    ],
    scripture: [{ label: "Romans 8:18–28", url: bible("romans/8") }, { label: "John 11:25–26", url: bible("john/11") }],
    catechism: [{ label: "309–314", url: ccc("__P19") }, { label: "385–412", url: ccc("__P1C") }],
    deeper: ["problem-of-evil", "catholic-funerals-and-grief"],
  },
  {
    id: "saved",
    question: "How are we saved?",
    answer: [
      "Salvation is God's free gift of grace through Jesus Christ; no one can earn it (Ephesians 2:8–10; CCC 1996, 2010). We respond to his grace by faith, repentance, and Baptism (John 3:5; Romans 6:3–4), and by a life of love, since faith that does not act in love is dead (James 2:26).",
      "Christ gave his Church the sacraments to bring us his grace, and we pray for the grace to remain faithful to the end (CCC 1987–1992, 2016).",
    ],
    scripture: [{ label: "Ephesians 2:8–10", url: bible("ephesians/2") }, { label: "John 3:5", url: bible("john/3") }, { label: "Romans 6:3–4", url: bible("romans/6") }, { label: "James 2:14–26", url: bible("james/2") }],
    catechism: [{ label: "1987–1995", url: ccc("__P6Y") }, { label: "1996–2005", url: ccc("__P6Z") }, { label: "2006–2011", url: ccc("__P70") }, { label: "2012–2016", url: ccc("__P71") }],
    deeper: ["how-are-we-saved", "faith-and-works", "baptism"],
  },
  {
    id: "death",
    question: "What happens when I die?",
    answer: [
      "Death is not the end. Each person meets Christ in judgment at death (CCC 1021–1022; Hebrews 9:27). Those who die in God's grace go to heaven, at once or after purification in purgatory; those who freely and finally refuse God's love separate themselves from him in hell (CCC 1023–1037).",
      "At the end of time the dead will rise, Christ will judge all, and God will make all things new (CCC 988–1004, 1038–1050; Revelation 21:1–4). Our hope is eternal life with God: Jesus promised to prepare a place for us in his Father's house (John 14:2).",
    ],
    scripture: [{ label: "John 11:25–26", url: bible("john/11") }, { label: "John 14:1–3", url: bible("john/14") }, { label: "Hebrews 9:27", url: bible("hebrews/9") }, { label: "Revelation 21:1–4", url: bible("revelation/21") }],
    catechism: [{ label: "988–991", url: ccc("__P2G") }, { label: "992–1004", url: ccc("__P2H") }, { label: "1021–1022", url: ccc("__P2L") }, { label: "1023–1029", url: ccc("__P2M") }, { label: "1033–1037", url: ccc("__P2O") }, { label: "1038–1041", url: ccc("__P2P") }],
    deeper: ["what-happens-when-we-die", "heaven", "purgatory", "hell"],
  },
  {
    id: "closer",
    question: "How can I grow closer to God?",
    answer: [
      "God takes the first step: “prayer is the encounter of God's thirst with ours” (CCC 2560). Start where you are: pray a few minutes each day, read a Gospel, turn away from sin, and love the people around you. As you are ready, take part in the Church's life and sacraments (Acts 2:42).",
      "You do not need to understand everything before you begin. Jesus invites everyone who is weary and weighed down to come to him and find rest (Matthew 11:28).",
    ],
    scripture: [{ label: "John 15:1–11", url: bible("john/15") }, { label: "Matthew 11:28–30", url: bible("matthew/11") }, { label: "Acts 2:42", url: bible("acts/2") }],
    catechism: [{ label: "2558–2565", url: ccc("__P8Z") }, { label: "1812–1829", url: ccc("__P66") }, { label: "2012–2016", url: ccc("__P71") }],
    deeper: ["how-to-pray", "virtues", "how-to-become-catholic", "how-to-go-to-confession"],
  },
];

const discover = [
  { href: "/category/beliefs", title: "What Catholics Believe" },
  { href: "/apologetics", title: "Common Questions & Objections" },
  { href: "/category/bible", title: "Scripture & Sacred Tradition" },
  { href: "/topic/early-church", title: "The Early Church" },
];

const live = [
  { href: "/category/becoming-catholic", title: "Becoming Catholic" },
  { href: "/category/mass", title: "Understanding the Mass" },
  { href: "/category/sacraments", title: "The Seven Sacraments" },
  { href: "/topic/how-to-go-to-confession", title: "How to Go to Confession" },
  { href: "/category/prayer", title: "Prayer & Spiritual Life" },
  { href: "/topic/virtues", title: "Growing in Holiness" },
];

const continueLearning = [
  { href: "/start", title: "Guided Learning", description: "Follow a step-by-step introduction to Catholicism at your own pace." },
  { href: "/resources", title: "Trusted Catholic Resources", description: "Scripture, Church documents, the Church Fathers, books, articles, and videos." },
];

const refLink = "inline-flex min-h-11 items-center rounded-full border border-line px-3 text-[0.9375rem] text-accent hover:border-gold";

function Refs({ label, refs, prefix = "" }: { label: string; refs: Ref[]; prefix?: string }) {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold tracking-wider text-gold-ink uppercase">{label}</h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {refs.map((r) => (
          <li key={r.label}>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className={refLink}>
              {prefix}
              {r.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const chevron = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="font-serif text-[2.75rem] leading-[1.1] font-semibold text-ink sm:text-6xl">Discover the Catholic Faith</h1>
        <p className="mx-auto mt-4 max-w-lg font-serif text-2xl leading-snug text-ink">
          You are loved by God, created with purpose, and invited into eternal life with him through Jesus Christ.
        </p>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-soft">
          Discover what Catholics believe, why they believe it, and how to live the faith.
        </p>
        <figure className="mx-auto mt-5 max-w-md">
          <blockquote className="font-serif text-xl text-ink">“Let us therefore love God, because God first hath loved us.”</blockquote>
          <figcaption className="mt-1 text-[0.9375rem] text-ink-soft">
            <a href={bible("1john/4")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center underline decoration-line underline-offset-4 hover:decoration-accent">
              1 John 4:19 (Douay-Rheims)
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </figcaption>
        </figure>

        {/* A real search field: type here, press Enter, and land on the results. */}
        <Form action="/search" role="search" className="relative mx-auto mt-6 max-w-lg">
          <label htmlFor="home-search" className="sr-only">
            Search Catholic Companion
          </label>
          <input
            id="home-search"
            name="q"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            placeholder="Search a question or topic"
            className="min-h-14 w-full rounded-full border-2 border-line bg-card pr-16 pl-6 text-lg text-ink placeholder:text-ink-soft focus:border-gold-ink focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute top-1/2 right-1.5 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-on-accent hover:bg-accent-strong"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20.5 20.5-4.5-4.5" />
            </svg>
          </button>
        </Form>
      </section>

      <section aria-labelledby="questions">
        <SectionTitle id="questions">Life&rsquo;s Greatest Questions</SectionTitle>
        <ul className="space-y-3">
          {questions.map((q) => (
            <li key={q.id}>
              <details className="group rounded-2xl border border-line bg-card">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
                  <span className="font-serif text-xl font-semibold text-ink">{q.question}</span>
                  {chevron}
                </summary>
                <div className="border-t border-line px-5 pt-4 pb-5">
                  {q.answer.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-3 leading-relaxed first:mt-0">
                      {p}
                    </p>
                  ))}
                  <Refs label="In Scripture" refs={q.scripture} />
                  <Refs label="Catechism" refs={q.catechism} prefix="CCC " />
                  <h3 className="mt-4 text-sm font-semibold tracking-wider text-gold-ink uppercase">Go deeper</h3>
                  <ul className="mt-1 space-y-1">
                    {q.deeper.map((slug) => (
                      <li key={slug}>
                        <Link href={`/topic/${slug}`} className="inline-flex min-h-11 items-center font-medium text-accent underline decoration-line underline-offset-4 hover:decoration-accent">
                          {getTopic(slug)!.question}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="discover">
        <SectionTitle id="discover">Discover and Understand</SectionTitle>
        <ul className="grid grid-cols-2 gap-3">
          {discover.map((link) => (
            <li key={link.href}>
              <CardLink {...link} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="live">
        <SectionTitle id="live">Become and Live as a Catholic</SectionTitle>
        <ul className="grid grid-cols-2 gap-3">
          {live.map((link) => (
            <li key={link.href}>
              <CardLink {...link} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Spiritual Warfare">
        <CardLink
          href="/category/spiritual-warfare"
          title="Spiritual Warfare"
          description="Understand temptation, resist evil, strengthen your spiritual life and grow in holiness through Jesus Christ."
        />
      </section>

      <section aria-labelledby="continue">
        <SectionTitle id="continue">Continue Learning</SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {continueLearning.map((link) => (
            <li key={link.href}>
              <CardLink {...link} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
