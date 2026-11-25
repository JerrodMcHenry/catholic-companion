// Lookups used by pages, plus checks that run whenever content is loaded.
// A broken reference throws here, so `next build` fails instead of shipping a dead link.

import { categories, pillars } from "./categories";
import { resources } from "./resources";
import { commonQuestions, startHere, topics } from "./topics";
import type { PillarId } from "./types";

export { categories, commonQuestions, pillars, resources, startHere, topics };
export type * from "./types";

const topicBySlug = new Map(topics.map((t) => [t.slug, t]));
const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
const resourceById = new Map(resources.map((r) => [r.id, r]));

export const getTopic = (slug: string) => topicBySlug.get(slug);
export const getCategory = (slug: string) => categoryBySlug.get(slug);

export const categoriesIn = (pillar: PillarId) => categories.filter((c) => c.pillar === pillar);
export const topicsIn = (category: string) => topics.filter((t) => t.category === category);

// Only call with ids that validation has already checked.
export const topicsFor = (slugs: string[] = []) => slugs.map((s) => topicBySlug.get(s)!);
export const resourcesFor = (ids: string[] = []) => ids.map((id) => resourceById.get(id)!);

function check(ok: boolean, message: string) {
  if (!ok) throw new Error(`Content error: ${message}`);
}

check(topicBySlug.size === topics.length, "two topics share a slug");
check(categoryBySlug.size === categories.length, "two categories share a slug");
check(resourceById.size === resources.length, "two resources share an id");

for (const r of resources) {
  check(r.url.startsWith("https://"), `resource "${r.id}" needs an https URL`);
}

for (const t of topics) {
  const where = `topic "${t.slug}"`;
  check(categoryBySlug.has(t.category), `${where} has unknown category "${t.category}"`);
  for (const slug of t.related ?? []) {
    check(topicBySlug.has(slug) && slug !== t.slug, `${where} has bad related topic "${slug}"`);
  }
  for (const id of [...(t.resources ?? []), ...(t.teaching.documents ?? [])]) {
    check(resourceById.has(id), `${where} has unknown resource "${id}"`);
  }
  for (const id of t.teaching.documents ?? []) {
    check(resourceById.get(id)?.type === "document", `${where} lists "${id}" as a document`);
  }
  for (const p of t.debate?.perspectives ?? []) {
    for (const id of p.sources) check(resourceById.has(id), `${where} has unknown source "${id}"`);
  }
}

for (const slug of [...startHere, ...commonQuestions]) {
  check(topicBySlug.has(slug), `homepage list has unknown topic "${slug}"`);
}
