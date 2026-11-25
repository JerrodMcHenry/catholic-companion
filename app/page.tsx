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

        {/* Opens the search page; the field itself lives there. */}
        <Link
          href="/search"
          className="mx-auto mt-8 flex min-h-14 max-w-lg items-center gap-3 rounded-full border-2 border-line bg-card px-5 text-left text-ink-soft transition-colors hover:border-gold"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 shrink-0 text-gold-ink" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20.5 20.5-4.5-4.5" />
          </svg>
          Search a question or topic
        </Link>
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
