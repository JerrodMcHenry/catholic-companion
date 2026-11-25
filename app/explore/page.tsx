import type { Metadata } from "next";
import { CardLink } from "@/components/cards";
import { categoriesIn, pillars, topicsIn } from "@/content";

export const metadata: Metadata = { title: "Explore" };

export default function ExplorePage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Explore</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">Everything in Catholic Companion, by subject.</p>

      <div className="mt-10 space-y-12">
        {pillars.map((pillar) => (
          <section key={pillar.id} id={pillar.id} aria-labelledby={`${pillar.id}-title`} className="scroll-mt-6">
            <h2 id={`${pillar.id}-title`} className="font-serif text-3xl font-semibold text-ink">
              {pillar.title}
              {pillar.subtitle && (
                <span className="mt-1 block font-sans text-base font-medium text-gold-ink">{pillar.subtitle}</span>
              )}
            </h2>
            <p className="mt-2 mb-4 leading-relaxed text-ink-soft">{pillar.description}</p>
            <ul className="space-y-3">
              {pillar.id === "resources" ? (
                <li>
                  <CardLink href="/resources" title="All resources" description="Church documents, articles, and videos." />
                </li>
              ) : (
                categoriesIn(pillar.id).map((category) => (
                  <li key={category.slug}>
                    <CardLink
                      href={`/category/${category.slug}`}
                      title={category.title}
                      description={topicsIn(category.slug).length ? category.description : `${category.description} Coming soon.`}
                    />
                  </li>
                ))
              )}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
