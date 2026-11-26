import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, CardLink, ResourceList, SectionTitle, TopicList } from "@/components/cards";
import { SaveButton } from "@/components/save-button";
import {
  debatesFor,
  getTradition,
  hasPage,
  resourcesFor,
  subTraditions,
  topicsFor,
  traditions,
} from "@/content";

export const dynamicParams = false; // Traditions without content yet have no page.

export function generateStaticParams() {
  return traditions.filter(hasPage).map((t) => ({ tradition: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/apologetics/[tradition]">): Promise<Metadata> {
  const tradition = getTradition((await params).tradition);
  return { title: tradition?.name, description: tradition?.overview?.[0] };
}

export default async function TraditionPage({ params }: PageProps<"/apologetics/[tradition]">) {
  const tradition = getTradition((await params).tradition);
  if (!tradition?.overview) notFound();
  const parent = tradition.parent ? getTradition(tradition.parent) : undefined;
  const denominations = subTraditions(tradition.slug);
  const questions = debatesFor(tradition.slug);
  const related = topicsFor(tradition.related);

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <BackLink
          href={parent ? `/apologetics/${parent.slug}` : "/apologetics#traditions"}
          label={parent ? parent.name : "Common Questions"}
        />
        <SaveButton kind="tradition" id={tradition.slug} title={tradition.name} />
      </div>
      <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink">{tradition.name}</h1>

      <div className="mt-5 space-y-4 leading-relaxed">
        {tradition.overview.map((paragraph, i) => (
          <p key={paragraph} className={i === 0 ? "text-lg" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>

      {denominations.length > 0 && (
        <div className="mt-5 rounded-2xl bg-tint px-5 py-4 leading-relaxed">
          <p className="font-medium">Traditions within {tradition.name}</p>
          {denominations.some(hasPage) && (
            <ul className="mt-2 space-y-2">
              {denominations.filter(hasPage).map((d) => (
                <li key={d.slug}>
                  <CardLink href={`/apologetics/${d.slug}`} title={d.name} />
                </li>
              ))}
            </ul>
          )}
          {denominations.some((d) => !hasPage(d)) && (
            <p className="mt-2 text-ink-soft">
              <span className="font-medium text-ink">Also covered here:</span>{" "}
              {denominations.filter((d) => !hasPage(d)).map((d) => d.name).join(", ")}
            </p>
          )}
        </div>
      )}

      {tradition.differences && (
        <section aria-labelledby="differences" className="mt-12">
          <SectionTitle id="differences">Main differences</SectionTitle>
          <ul className="space-y-3 rounded-2xl border border-line bg-card px-5 py-5">
            {tradition.differences.map((d) => (
              <li key={d} className="flex gap-3 leading-snug">
                <span aria-hidden="true" className="mt-0.5 text-gold">✦</span>
                {d}
              </li>
            ))}
          </ul>
        </section>
      )}

      {questions.length + related.length > 0 && (
        <section aria-labelledby="questions" className="mt-12">
          <SectionTitle id="questions">Questions to explore</SectionTitle>
          <TopicList topics={[...questions, ...related]} />
        </section>
      )}

      {tradition.sources && (
        <section aria-labelledby="sources" className="mt-12">
          <SectionTitle id="sources">Sources for this view</SectionTitle>
          <ResourceList resources={resourcesFor(tradition.sources)} />
        </section>
      )}

      {tradition.resources && (
        <section aria-labelledby="catholic-resources" className="mt-12">
          <SectionTitle id="catholic-resources">Catholic resources</SectionTitle>
          <ResourceList resources={resourcesFor(tradition.resources)} />
        </section>
      )}
    </>
  );
}
