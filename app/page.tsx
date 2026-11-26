import Form from "next/form";
import Link from "next/link";
import { CardLink, SectionTitle } from "@/components/cards";

// Three ways in, one for each kind of reader; each opens its path on the Where to begin page.
const journeys = [
  { href: "/start#curious", title: "I'm curious about Catholicism", description: "What Catholics believe and why, starting from the basics." },
  { href: "/start#becoming", title: "I'm becoming Catholic", description: "OCIA, finding a parish, the Mass, and the sacraments, step by step." },
  { href: "/start#new-catholic", title: "I'm a new Catholic", description: "Mass, Confession, prayer, and the Church year in everyday life." },
];

const quickLinks = [
  { href: "/category/mass", title: "Understanding the Mass" },
  { href: "/topic/how-to-go-to-confession", title: "How to go to Confession" },
  { href: "/category/prayer", title: "Prayer" },
  { href: "/apologetics#questions", title: "Common Questions" },
  { href: "/apologetics#arguments", title: "Common Arguments" },
  { href: "/resources", title: "Trusted Resources" },
];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="font-serif text-[2.75rem] leading-[1.1] font-semibold text-ink sm:text-6xl">
          Discover the Catholic faith
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
          A friendly guide for anyone curious about Catholicism, preparing to become Catholic, or
          newly Catholic.
        </p>

        {/* A real search field: type here, press Enter, and land on the results. */}
        <Form action="/search" role="search" className="relative mx-auto mt-8 max-w-lg">
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

      <section aria-labelledby="journeys">
        <SectionTitle id="journeys">Where are you on your journey?</SectionTitle>
        <ul className="space-y-3">
          {journeys.map((j) => (
            <li key={j.href}>
              <Link
                href={j.href}
                className="flex items-center gap-4 rounded-2xl border border-line bg-card px-5 py-5 transition-colors hover:border-gold"
              >
                <span className="flex-1">
                  <span className="block font-serif text-2xl font-semibold text-ink">{j.title}</span>
                  <span className="mt-1 block leading-snug text-ink-soft">{j.description}</span>
                </span>
                <span aria-hidden="true" className="text-2xl text-gold-ink">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="quick">
        <SectionTitle id="quick">Quick links</SectionTitle>
        <ul className="grid grid-cols-2 gap-3">
          {quickLinks.map((link) => (
            <li key={link.href}>
              <CardLink {...link} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
