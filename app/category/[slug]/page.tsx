import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink, CardLink, TopicList } from "@/components/cards";
import { categories, getCategory, topicsIn } from "@/content";

export const dynamicParams = false; // Unknown categories are a 404.

// Apologetics is browsed by religion and by question on /apologetics instead.
export function generateStaticParams() {
  return categories.filter((c) => c.pillar !== "apologetics").map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/category/[slug]">): Promise<Metadata> {
  return { title: getCategory((await params).slug)?.title };
}

export default async function CategoryPage({ params }: PageProps<"/category/[slug]">) {
  const category = getCategory((await params).slug);
  if (!category) notFound();
  const topics = topicsIn(category.slug);

  return (
    <>
      <BackLink href={`/explore#${category.pillar}`} label="Explore" />
      <h1 className="mt-4 font-serif text-5xl leading-tight font-semibold text-ink">{category.title}</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">{category.description}</p>

      <div className="mt-8">
        {topics.length ? (
          <TopicList topics={topics} />
        ) : (
          <>
            <p className="rounded-2xl bg-tint px-5 py-5 leading-relaxed text-ink">
              Topics for this subject are still being written.
            </p>
            <div className="mt-4">
              <CardLink href="/start" title="New to Catholicism? Start here" />
            </div>
          </>
        )}
      </div>
    </>
  );
}
