import type { Metadata } from "next";
import { CardLink } from "@/components/cards";
import { categoriesIn, pillars, topicsIn, type PillarId } from "@/content";

export const metadata: Metadata = { title: "Explore" };

// What each pillar links to: its categories, or for Apologetics and Resources, their own pages.
function linksFor(pillar: PillarId) {
  if (pillar === "apologetics") {
    return [
      { href: "/apologetics#religions", title: "By religion", description: "Other Christian traditions, other religions, and worldviews." },
      { href: "/apologetics#questions", title: "By question", description: "Common objections and how Catholics respond." },
    ];
  }
  if (pillar === "resources") {
    return [{ href: "/resources", title: "All resources", description: "Church documents, articles, videos, and sources." }];
  }
  return categoriesIn(pillar).map((c) => ({
    href: `/category/${c.slug}`,
    title: c.title,
    description: topicsIn(c.slug).length ? c.description : `${c.description} Coming soon.`,
  }));
}

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
              {linksFor(pillar.id).map((link) => (
                <li key={link.href}>
                  <CardLink {...link} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
