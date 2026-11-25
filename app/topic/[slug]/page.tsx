import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, CardLink, ResourceList, SectionTitle, TopicList } from "@/components/cards";
import { DebateSections, Fathers } from "@/components/debate";
import { SaveButton } from "@/components/save-button";
import { getCategory, getTopic, massNeighbors, massSections, resourcesFor, topics, topicsFor } from "@/content";

export const dynamicParams = false; // Unknown topics are a 404.

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/topic/[slug]">): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return { title: topic?.question, description: topic?.summary };
}

const MASS_HUB = "what-happens-at-mass";

const refLink =
  "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 font-medium text-accent hover:border-gold";

// One page layout for every topic: answer, more detail, (for apologetics) the debate,
// Church teaching, resources, related.
export default async function TopicPage({ params }: PageProps<"/topic/[slug]">) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const category = getCategory(topic.category)!;
  const back = topic.debate
    ? { href: "/apologetics", label: "Apologetics" }
    : { href: `/category/${category.slug}`, label: category.title };
  const { catechism = [], scripture = [], documents = [] } = topic.teaching;
  const fathers = topic.debate?.fathers;
  const massStep = massNeighbors(topic.slug);
  // Skip related questions already offered as the previous or next part of the Mass.
  const related = topicsFor(topic.related).filter((t) => t !== massStep?.previous && t !== massStep?.next);

  return (
    <article>
      <div className="flex items-center justify-between gap-4">
        <BackLink {...back} />
        <SaveButton kind="topic" id={topic.slug} title={topic.question} />
      </div>
      <h1 className="mt-4 font-serif text-[2.5rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
        {topic.question}
      </h1>
      {topic.alsoKnownAs && (
        <p className="mt-3 text-ink-soft">
          Also called: <span className="font-medium text-ink">{topic.alsoKnownAs.join(", ")}</span>
        </p>
      )}

      <section aria-label="Short answer" className="mt-6">
        <p className="text-lg leading-relaxed text-ink sm:text-xl">{topic.summary}</p>
      </section>

      {topic.explanation && (
        <details className="group mt-8 rounded-2xl border border-line bg-card">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 font-medium text-accent">
            <span className="group-open:hidden">Learn more</span>
            <span className="hidden group-open:inline">Show less</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>
          <div className="space-y-4 px-5 pb-6 leading-relaxed text-ink">
            {topic.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
      )}

      {/* The Mass overview is the hub: every part, in the order it happens. */}
      {topic.slug === MASS_HUB && (
        <section aria-labelledby="steps" className="mt-12">
          <SectionTitle id="steps">The Mass, step by step</SectionTitle>
          <div className="space-y-8">
            {massSections.map(({ section, topics: parts }) => (
              <div key={section}>
                <h3 className="mb-3 font-medium text-ink">{section}</h3>
                <ol className="space-y-3">
                  {parts.map((part) => (
                    <li key={part.slug}>
                      <CardLink href={`/topic/${part.slug}`} title={part.title} />
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>
      )}

      {topic.debate && <DebateSections debate={topic.debate} />}

      <section aria-labelledby="teaching" className="mt-12">
        <SectionTitle id="teaching">What the Church teaches</SectionTitle>
        <div className="space-y-6">
          {catechism.length > 0 && (
            <div>
              <h3 className="mb-3 font-medium text-ink">Catechism of the Catholic Church</h3>
              <ul className="flex flex-wrap gap-2">
                {catechism.map((ref) => (
                  <li key={ref.paragraphs}>
                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className={refLink}>
                      {/[–,]/.test(ref.paragraphs) ? "Paragraphs" : "Paragraph"} {ref.paragraphs}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {documents.length > 0 && (
            <div>
              <h3 className="mb-3 font-medium text-ink">Church documents</h3>
              <ResourceList resources={resourcesFor(documents)} />
            </div>
          )}
          {/* Supporting references stay one tap away so the page stays short on phones. */}
          {(scripture.length > 0 || fathers) && (
            <details className="group rounded-2xl border border-line bg-card">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 font-medium text-accent">
                {fathers ? "Scripture and the early Church" : "Scripture"}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <div className="space-y-6 px-5 pb-5">
                {scripture.length > 0 && (
                  <div>
                    <h3 className="mb-3 font-medium text-ink">Scripture</h3>
                    <ul className="flex flex-wrap gap-2">
                      {scripture.map((ref) => (
                        <li key={ref.passage}>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer" className={refLink}>
                            {ref.passage}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {fathers && <Fathers fathers={fathers} />}
              </div>
            </details>
          )}
        </div>
      </section>

      {topic.resources && (
        <section aria-labelledby="deeper" className="mt-12">
          <SectionTitle id="deeper">Recommended resources</SectionTitle>
          <ResourceList resources={resourcesFor(topic.resources)} />
        </section>
      )}

      {massStep && (
        <nav aria-labelledby="follow" className="mt-12">
          <SectionTitle id="follow">Follow the Mass</SectionTitle>
          <ul className="space-y-3">
            {massStep.previous && (
              <li>
                <CardLink href={`/topic/${massStep.previous.slug}`} eyebrow="Previous part" title={massStep.previous.title} />
              </li>
            )}
            {massStep.next && (
              <li>
                <CardLink href={`/topic/${massStep.next.slug}`} eyebrow="Next part" title={massStep.next.title} />
              </li>
            )}
            <li>
              <CardLink href={`/topic/${MASS_HUB}`} eyebrow="Overview" title="All parts of the Mass, in order" />
            </li>
          </ul>
        </nav>
      )}

      {related.length > 0 && (
        <section aria-labelledby="related" className="mt-12">
          <SectionTitle id="related">Related questions</SectionTitle>
          <TopicList topics={related} />
        </section>
      )}
    </article>
  );
}
