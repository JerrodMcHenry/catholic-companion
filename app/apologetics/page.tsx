import type { Metadata } from "next";
import { BackLink, CardLink, SectionTitle, TopicList } from "@/components/cards";
import { debateTopics, hasPage, traditions, type Tradition } from "@/content";

export const metadata: Metadata = {
  title: "Apologetics",
  description: "Questions and objections: what others believe, and how Catholics respond.",
};

const groups: { id: Tradition["group"]; title: string }[] = [
  { id: "christian", title: "Other Christian traditions" },
  { id: "religion", title: "Other religions" },
  { id: "worldview", title: "Philosophical worldviews" },
];

const option =
  "flex min-h-24 flex-col justify-center rounded-2xl border border-line bg-card px-5 py-4 transition-colors hover:border-gold";

export default function ApologeticsPage() {
  // Denominations are listed on their parent tradition's page, not here.
  const topLevel = traditions.filter((t) => !t.parent);

  return (
    <>
      <BackLink href="/explore" label="Explore" />
      <h1 className="mt-4 font-serif text-5xl font-semibold text-ink">Apologetics</h1>
      <p className="mt-1 text-lg font-medium text-gold-ink">Questions &amp; Objections</p>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Apologetics means giving the reasons for faith. Here you can see what others believe, the
        strongest objections to Catholic teaching, and how Catholics respond.
      </p>

      <nav aria-label="Ways to browse" className="mt-8 grid grid-cols-2 gap-3">
        <a href="#religions" className={option}>
          <span className="font-medium text-ink">By religion</span>
          <span className="mt-1 text-[0.9375rem] leading-snug text-ink-soft">Traditions and worldviews</span>
        </a>
        <a href="#questions" className={option}>
          <span className="font-medium text-ink">By question</span>
          <span className="mt-1 text-[0.9375rem] leading-snug text-ink-soft">Common objections</span>
        </a>
      </nav>

      <section id="religions" aria-labelledby="religions-title" className="mt-12 scroll-mt-6">
        <SectionTitle id="religions-title">By religion</SectionTitle>
        <div className="space-y-8">
          {groups.map((group) => {
            const members = topLevel.filter((t) => t.group === group.id);
            const ready = members.filter(hasPage);
            const soon = members.filter((t) => !hasPage(t));
            return (
              <div key={group.id}>
                <h3 className="mb-3 font-medium text-ink">{group.title}</h3>
                {ready.length > 0 && (
                  <ul className="space-y-3">
                    {ready.map((t) => (
                      <li key={t.slug}>
                        <CardLink href={`/apologetics/${t.slug}`} title={t.name} />
                      </li>
                    ))}
                  </ul>
                )}
                {soon.length > 0 && (
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span className="font-medium">Coming soon:</span> {soon.map((t) => t.name).join(", ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="questions" aria-labelledby="questions-title" className="mt-12 scroll-mt-6">
        <SectionTitle id="questions-title">By question</SectionTitle>
        <TopicList topics={debateTopics} />
      </section>
    </>
  );
}
