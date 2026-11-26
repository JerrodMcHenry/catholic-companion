import type { Metadata } from "next";
import { CardLink } from "@/components/cards";
import { categoriesIn, pillars, topicsIn, type PillarId } from "@/content";

export const metadata: Metadata = { title: "Explore" };

// What each area links to: its categories that have topics, plus a few direct links.
function linksFor(pillar: PillarId) {
  const withTopics = categoriesIn(pillar)
    .filter((c) => topicsIn(c.slug).length > 0)
    .map((c) => ({ href: `/category/${c.slug}`, title: c.title, description: c.description }));
  switch (pillar) {
    case "becoming":
      return [
        { href: "/start#becoming", title: "Your path into the Church", description: "A suggested order, from first questions to the Easter Vigil." },
        ...withTopics.map((c) => ({ ...c, title: "All questions about becoming Catholic", description: "OCIA, sponsors, previous marriages, and returning to the Church." })),
      ];
    case "mass":
      return [
        { href: "/topic/what-happens-at-mass", title: "The Mass, step by step", description: "Every part of the Mass in order, with what it means." },
        ...withTopics.map((c) => ({ ...c, title: "Questions about the Mass", description: "Your first Mass, what to say, when to stand or kneel, and Communion." })),
      ];
    case "apologetics":
      return [{ href: "/apologetics", title: "Common questions", description: "Mary and the saints, Confession, the pope, the Bible, and more." }];
    case "deeper":
      return [...withTopics, { href: "/apologetics#traditions", title: "Other traditions and religions", description: "How Catholic belief compares with other churches and religions." }];
    case "resources":
      return [{ href: "/resources", title: "All resources", description: "Articles, videos, and official Church documents." }];
    default:
      return withTopics;
  }
}

export default function ExplorePage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Explore</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">Find what you need, from first questions to everyday Catholic life.</p>

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
