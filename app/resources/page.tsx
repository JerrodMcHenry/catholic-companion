import type { Metadata } from "next";
import { BackLink } from "@/components/cards";
import { ResourceDirectory } from "@/components/resource-directory";
import { resources, resourceSubjects, type ResourceType } from "@/content";

export const metadata: Metadata = { title: "Resources" };

// Formats in the order readers are offered them: official teaching first.
const formatOrder: ResourceType[] = ["document", "source", "article", "video", "podcast", "book", "course", "directory"];

// Alphabetical by title, ignoring a leading article or quotation mark.
const sortKey = (title: string) => title.replace(/^[“"‘']+/, "").replace(/^(the|a|an) /i, "");

export default function ResourcesPage() {
  const subjectsById = resourceSubjects();
  const items = [...resources]
    .sort((a, b) => sortKey(a.title).localeCompare(sortKey(b.title), "en", { sensitivity: "base" }))
    .map((resource) => ({ resource, subjects: subjectsById.get(resource.id) ?? [] }));
  const subjects = [...new Set(items.flatMap((i) => i.subjects))].sort();
  const formats = formatOrder.filter((f) => resources.some((r) => r.type === f));

  return (
    <>
      <BackLink href="/explore" label="Learn the Faith" />
      <h1 className="mt-4 font-serif text-5xl font-semibold text-ink">Resources</h1>
      <p className="mt-3 leading-relaxed text-ink-soft">
        Trusted sources, each linked directly to the original. Narrow the list by subject or format, or
        search by title or publisher.
      </p>
      <div className="mt-8">
        <ResourceDirectory items={items} subjects={subjects} formats={formats} />
      </div>
    </>
  );
}
