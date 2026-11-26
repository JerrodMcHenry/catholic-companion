import type { Metadata } from "next";
import { BackLink, CardLink, SectionTitle, TopicList } from "@/components/cards";
import { commonArguments, commonQuestions, comparisonTopics, debateTopics, getTopic, hasPage, topicsFor, topicsIn, traditions } from "@/content";

// Route and internal ids stay "apologetics"; readers see "Common Questions".
export const metadata: Metadata = {
  title: "Common Questions and Arguments",
  description: "Clear, respectful answers to common questions and arguments about the Catholic faith, with Scripture, early Christian sources, and Church teaching.",
};

const otherChristians = ["catholic-and-protestant-differences", "catholic-and-orthodox-differences"];

export default function CommonQuestionsPage() {
  const featured = new Set([...commonQuestions, ...comparisonTopics]);
  // Everything else with objections and responses stays reachable, below the main lists.
  const more = [...debateTopics, ...topicsIn("objections")].filter(
    (t, i, all) => !featured.has(t.slug) && all.indexOf(t) === i,
  );
  const traditionPages = traditions.filter((t) => !t.parent && hasPage(t));

  return (
    <>
      <BackLink href="/explore" label="Explore" />
      <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink">Common Questions and Arguments</h1>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Answers to the questions and objections people most often meet when they look into the
        Catholic faith. Each answer explains what the Church actually teaches and points you to the
        Scripture, early Christian writings, and Church documents, so you can weigh the evidence yourself.
      </p>

      <section id="questions" aria-labelledby="questions-title" className="mt-10 scroll-mt-6">
        <SectionTitle id="questions-title">Questions people often ask</SectionTitle>
        <TopicList topics={topicsFor(commonQuestions)} />
      </section>

      <section id="arguments" aria-labelledby="arguments-title" className="mt-12 scroll-mt-6">
        <SectionTitle id="arguments-title">Common arguments and Catholic responses</SectionTitle>
        <p className="-mt-2 mb-4 leading-relaxed text-ink-soft">
          Open a group to see the arguments it covers. Each links to a full answer.
        </p>
        <div className="space-y-3">
          {commonArguments.map((g) => (
            <details key={g.group} className="group rounded-2xl border border-line bg-card">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
                <span className="font-medium text-ink">{g.group}</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <ul className="space-y-3 px-5 pb-5">
                {g.items.map((item) => (
                  <li key={item.claim}>
                    <CardLink
                      href={`/topic/${item.slug}`}
                      title={`“${item.claim}”`}
                      description={`Answered in: ${getTopic(item.slug)!.question}`}
                    />
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="christians-title" className="mt-12">
        <SectionTitle id="christians-title">Catholics and other Christians</SectionTitle>
        <TopicList topics={topicsFor(otherChristians)} />
      </section>

      {more.length > 0 && (
        <section aria-labelledby="more-title" className="mt-12">
          <details className="group rounded-2xl border border-line bg-card">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
              <span id="more-title" className="font-serif text-2xl font-semibold text-ink">More questions</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="px-5 pb-5">
              <TopicList topics={more} />
            </div>
          </details>
        </section>
      )}

      <section id="traditions" aria-labelledby="traditions-title" className="mt-12 scroll-mt-6">
        <h2 id="traditions-title" className="mb-2 font-serif text-2xl font-semibold text-ink">
          Other traditions and religions
        </h2>
        <p className="mb-4 leading-relaxed text-ink-soft">
          What other churches, religions, and worldviews believe, and how Catholic belief compares.
        </p>
        <TopicList topics={topicsFor(comparisonTopics.filter((s) => !otherChristians.includes(s)))} />
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {traditionPages.map((t) => (
            <li key={t.slug}>
              <CardLink href={`/apologetics/${t.slug}`} title={t.name} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
