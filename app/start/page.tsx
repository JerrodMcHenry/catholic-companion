import type { Metadata } from "next";
import Link from "next/link";
import { BackLink, SectionTitle } from "@/components/cards";
import { becomingPath, newCatholicPath, startHere, topicsFor } from "@/content";

export const metadata: Metadata = { title: "Where to begin" };

// One suggested reading order for each kind of reader. Nothing here is required:
// follow a path in order, or open whichever question matters most to you.
const paths = [
  { id: "curious", title: "I'm curious about Catholicism", intro: "The questions people usually ask first: who God is, who Jesus is, and what the Church believes.", slugs: startHere },
  { id: "becoming", title: "I'm becoming Catholic", intro: "What OCIA involves, how to find a parish, what happens at Mass, and the teachings and sacraments you will prepare for.", slugs: becomingPath },
  { id: "new-catholic", title: "I'm a new Catholic", intro: "Practical next steps for living the faith: Sunday Mass, Confession, prayer, and the rhythm of the Church year.", slugs: newCatholicPath },
];

export default function StartPage() {
  return (
    <>
      <BackLink href="/" label="Home" />
      <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink">Where to begin</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Welcome. Choose the path that fits you. Read the guides in order, or begin with whichever
        question you are most curious about.
      </p>

      <div className="mt-10 space-y-12">
        {paths.map((path) => (
          <section key={path.id} id={path.id} aria-labelledby={`${path.id}-title`} className="scroll-mt-6">
            <SectionTitle id={`${path.id}-title`}>{path.title}</SectionTitle>
            <p className="-mt-2 mb-4 leading-relaxed text-ink-soft">{path.intro}</p>
            <ol className="space-y-3">
              {topicsFor(path.slugs).map((topic, index) => (
                <li key={topic.slug}>
                  <Link
                    href={`/topic/${topic.slug}`}
                    className="flex min-h-16 items-center gap-4 rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-gold"
                  >
                    <span
                      aria-hidden="true"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-lg font-semibold text-gold-ink"
                    >
                      {index + 1}
                    </span>
                    <span className="font-medium text-ink">{topic.question}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}
