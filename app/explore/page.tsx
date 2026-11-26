import type { Metadata } from "next";
import { CardLink } from "@/components/cards";
import { categoriesIn, getTopic, pillars, topicsIn, type PillarId } from "@/content";

export const metadata: Metadata = { title: "Learn the Faith" };

// The route stays /explore so existing links and bookmarks keep working.

const topicLink = (slug: string, description?: string) => ({ href: `/topic/${slug}`, title: getTopic(slug)!.question, description });

// Confession is not a category of its own; its key topics lead the Sacraments section so it is easy to find.
const confessionSlugs = ["how-to-go-to-confession", "confession", "why-confess-to-a-priest", "mortal-and-venial-sin", "returning-after-mortal-sin"];

// What each section links to: its categories that have topics, plus a few direct links.
function linksFor(pillar: PillarId) {
  const withTopics = categoriesIn(pillar)
    .filter((c) => topicsIn(c.slug).length > 0)
    .map((c) => ({ href: `/category/${c.slug}`, title: c.title, description: c.description }));
  switch (pillar) {
    case "scripture":
      return [...withTopics, topicLink("who-are-the-church-fathers", "Who they were, and why their writings matter."), topicLink("early-church")];
    case "becoming":
      return [
        { href: "/start#becoming", title: "Your path into the Church", description: "A suggested order, from first questions to the Easter Vigil." },
        ...withTopics.map((c) => ({ ...c, title: "All questions about becoming Catholic", description: "OCIA, sponsors, family, previous marriages, and returning to the Church." })),
      ];
    case "mass":
      return [
        { href: "/topic/what-happens-at-mass", title: "The Mass, step by step", description: "Every part of the Mass in order, with what it means." },
        ...withTopics.map((c) => ({ ...c, title: "Questions about the Mass", description: "Your first Mass, what to say, when to stand or kneel, and Communion." })),
      ];
    case "sacraments":
      return [...confessionSlugs.map((slug) => topicLink(slug)), ...withTopics.map((c) => ({ ...c, title: "All seven sacraments" }))];
    case "apologetics":
      return [
        { href: "/apologetics#questions", title: "Common questions", description: "Mary and the saints, Confession, the pope, the Bible, and more." },
        { href: "/apologetics#arguments", title: "Common objections and Catholic responses", description: "Objections people often meet, answered with Scripture, history, and Church teaching." },
      ];
    case "spiritual-warfare":
      return [...withTopics.map((c) => ({ ...c, title: "All spiritual warfare questions" })), topicLink("temptation"), topicLink("virtues"), topicLink("how-to-go-to-confession")];
    case "deeper":
      return [...withTopics, { href: "/apologetics#traditions", title: "Other traditions and religions", description: "How Catholic belief compares with other churches and religions." }];
    default:
      return withTopics;
  }
}

// Each section is a native disclosure, closed by default, so the whole directory fits on one screen.
const sections = pillars.filter((p) => p.id !== "resources").map((p) => ({ id: p.id, title: p.title, description: p.description, links: linksFor(p.id) }));

export default function LearnPage() {
  return (
    <>
      <h1 className="font-serif text-5xl font-semibold text-ink">Learn the Faith</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">Open a section to see what it covers.</p>

      <div className="mt-8 space-y-3">
        {sections.map((section) => (
          <details key={section.id} id={section.id} className="group scroll-mt-6 rounded-2xl border border-line bg-card">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4">
              <span>
                <span className="block font-serif text-2xl font-semibold text-ink">{section.title}</span>
                <span className="mt-0.5 block text-[0.9375rem] leading-snug text-ink-soft">{section.description}</span>
              </span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 shrink-0 text-gold-ink transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <ul className="space-y-3 px-5 pb-5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <CardLink {...link} />
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        <li>
          <CardLink href="/start" title="Guided Learning" description="Follow a step-by-step introduction to Catholicism at your own pace." />
        </li>
        <li>
          <CardLink href="/resources" title="Trusted Catholic Resources" description="Scripture, Church documents, the Church Fathers, books, articles, and videos." />
        </li>
      </ul>
    </>
  );
}
