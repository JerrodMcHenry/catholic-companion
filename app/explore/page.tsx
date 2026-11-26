import type { Metadata } from "next";
import { CardLink } from "@/components/cards";
import { categoriesIn, getTopic, pillars, topicsIn, type PillarId } from "@/content";

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
      return [
        { href: "/apologetics#questions", title: "Common questions", description: "Mary and the saints, Confession, the pope, the Bible, and more." },
        { href: "/apologetics#arguments", title: "Common arguments and Catholic responses", description: "Objections people often meet, answered with Scripture, history, and Church teaching." },
      ];
    case "deeper":
      return [...withTopics, { href: "/apologetics#traditions", title: "Other traditions and religions", description: "How Catholic belief compares with other churches and religions." }];
    case "resources":
      return [{ href: "/resources", title: "All resources", description: "Articles, videos, and official Church documents." }];
    default:
      return withTopics;
  }
}

// Confession is not a category of its own; its key topics are gathered here so it is easy to find.
const confessionSlugs = ["how-to-go-to-confession", "confession", "why-confess-to-a-priest", "mortal-and-venial-sin", "returning-after-mortal-sin"];
const confession = {
  id: "confession",
  title: "Confession",
  description: "How to go, why Catholics confess to a priest, and God's forgiveness.",
  links: confessionSlugs.map((slug) => ({ href: `/topic/${slug}`, title: getTopic(slug)!.question })),
};

// Each area is a native disclosure, closed by default, so the whole directory fits on one screen.
const areas = pillars.flatMap((p) => {
  const area = { id: p.id, title: p.title, description: p.description, links: linksFor(p.id) };
  return p.id === "mass" ? [area, confession] : [area];
});

export default function ExplorePage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Explore</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">Open a section to see what it covers.</p>

      <div className="mt-8 space-y-3">
        {areas.map((area) => (
          <details key={area.id} id={area.id} className="group scroll-mt-6 rounded-2xl border border-line bg-card">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
              <span>
                <span className="block font-serif text-2xl font-semibold text-ink">{area.title}</span>
                <span className="mt-0.5 block text-[0.9375rem] leading-snug text-ink-soft">{area.description}</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <ul className="space-y-3 px-5 pb-5">
              {area.links.map((link) => (
                <li key={link.href}>
                  <CardLink {...link} />
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </>
  );
}
