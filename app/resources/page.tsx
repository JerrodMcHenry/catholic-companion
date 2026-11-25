import type { Metadata } from "next";
import { BackLink, ResourceList, SectionTitle } from "@/components/cards";
import { resources, type ResourceType } from "@/content";

export const metadata: Metadata = { title: "Resources" };

const groups: { type: ResourceType; title: string }[] = [
  { type: "document", title: "Official Church documents" },
  { type: "source", title: "Sources from other traditions" },
  { type: "article", title: "Articles" },
  { type: "video", title: "Videos" },
  { type: "podcast", title: "Podcasts" },
  { type: "book", title: "Books" },
  { type: "course", title: "Courses" },
  { type: "directory", title: "Directories" },
];

export default function ResourcesPage() {
  return (
    <>
      <BackLink href="/explore" label="Explore" />
      <h1 className="mt-4 font-serif text-5xl font-semibold text-ink">Resources</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Trusted sources, each linked directly to the original.
      </p>

      <div className="mt-10 space-y-12">
        {groups.map(({ type, title }) => {
          const items = resources.filter((r) => r.type === type);
          return (
            items.length > 0 && (
              <section key={type} aria-labelledby={type}>
                <SectionTitle id={type}>{title}</SectionTitle>
                <ResourceList resources={items} />
              </section>
            )
          );
        })}
      </div>
    </>
  );
}
