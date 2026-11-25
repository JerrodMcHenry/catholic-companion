import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, ResourceList, SectionTitle, TopicList } from "@/components/cards";
import { getCategory, getTopic, resourcesFor, topics, topicsFor } from "@/content";

export const dynamicParams = false; // Unknown topics are a 404.

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/topic/[slug]">): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  return { title: topic?.question, description: topic?.summary };
}

const refLink =
  "inline-flex min-h-11 items-center rounded-full border border-line bg-card px-4 font-medium text-accent hover:border-gold";

// One page layout for every topic: answer, more detail, Church teaching, resources, related.
export default async function TopicPage({ params }: PageProps<"/topic/[slug]">) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const category = getCategory(topic.category)!;
  const { catechism = [], scripture = [], documents = [] } = topic.teaching;

  return (
    <article>
      <BackLink href={`/category/${category.slug}`} label={category.title} />
      <h1 className="mt-4 font-serif text-[2.5rem] leading-[1.1] font-semibold text-ink sm:text-5xl">
        {topic.question}
      </h1>

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
                      {ref.paragraphs.includes("–") ? "Paragraphs" : "Paragraph"} {ref.paragraphs}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
          {documents.length > 0 && (
            <div>
              <h3 className="mb-3 font-medium text-ink">Church documents</h3>
              <ResourceList resources={resourcesFor(documents)} />
            </div>
          )}
        </div>
      </section>

      {topic.resources && (
        <section aria-labelledby="deeper" className="mt-12">
          <SectionTitle id="deeper">Go deeper</SectionTitle>
          <ResourceList resources={resourcesFor(topic.resources)} />
        </section>
      )}

      {topic.related && (
        <section aria-labelledby="related" className="mt-12">
          <SectionTitle id="related">Related questions</SectionTitle>
          <TopicList topics={topicsFor(topic.related)} />
        </section>
      )}
    </article>
  );
}
