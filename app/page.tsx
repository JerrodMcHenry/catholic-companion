import Form from "next/form";
import Link from "next/link";
import { CardLink, SectionTitle, TopicList } from "@/components/cards";
import { commonQuestions, pillars, topicsFor } from "@/content";

const pillarHref = (id: string) =>
  id === "resources" ? "/resources" : id === "apologetics" ? "/apologetics" : `/explore#${id}`;

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="font-serif text-[2.75rem] leading-[1.1] font-semibold text-ink sm:text-6xl">
          Discover the Catholic faith
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-ink-soft">
          Clear answers about what Catholics believe and why, with trusted resources when you want
          to go deeper.
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

      <Link
        href="/start"
        className="block rounded-3xl bg-accent px-6 py-6 text-on-accent transition-colors hover:bg-accent-strong sm:px-8"
      >
        <span className="block font-medium opacity-90">New to Catholicism?</span>
        <span className="mt-1 flex items-center gap-2 font-serif text-4xl font-semibold">
          Start here
          <span aria-hidden="true">→</span>
        </span>
        <span className="mt-2 block leading-snug opacity-90">
          A short path through the questions most people ask first.
        </span>
      </Link>

      <section aria-labelledby="explore">
        <SectionTitle id="explore">Explore</SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <li key={pillar.id}>
              <CardLink
                href={pillarHref(pillar.id)}
                title={pillar.subtitle ? `${pillar.title} · ${pillar.subtitle}` : pillar.title}
                description={pillar.description}
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="questions">
        <SectionTitle id="questions">Common questions</SectionTitle>
        <TopicList topics={topicsFor(commonQuestions)} />
      </section>
    </div>
  );
}
