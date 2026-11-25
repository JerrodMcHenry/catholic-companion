// Lookups used by pages, plus checks that run whenever content is loaded.
// A broken reference throws here, so `next build` fails instead of shipping a dead link.

import { apologeticsTopics } from "./apologetics";
import { categories, pillars } from "./categories";
import { resources } from "./resources";
import { commonQuestions, startHere, topics as learningTopics } from "./topics";
import { traditions } from "./traditions";
import type { PillarId, Tradition } from "./types";

const topics = [...learningTopics, ...apologeticsTopics];

export { categories, commonQuestions, pillars, resources, startHere, topics, traditions };
export type * from "./types";

const topicBySlug = new Map(topics.map((t) => [t.slug, t]));
const categoryBySlug = new Map(categories.map((c) => [c.slug, c]));
const resourceById = new Map(resources.map((r) => [r.id, r]));
const traditionBySlug = new Map(traditions.map((t) => [t.slug, t]));

export const getTopic = (slug: string) => topicBySlug.get(slug);
export const getCategory = (slug: string) => categoryBySlug.get(slug);
export const getTradition = (slug: string) => traditionBySlug.get(slug);

export const categoriesIn = (pillar: PillarId) => categories.filter((c) => c.pillar === pillar);
export const topicsIn = (category: string) => topics.filter((t) => t.category === category);
export const debateTopics = topics.filter((t) => t.debate);

// A tradition has its own page once it has an overview.
export const hasPage = (t: Tradition) => Boolean(t.overview);
export const subTraditions = (slug: string) => traditions.filter((t) => t.parent === slug);

// Debate topics with a perspective from this tradition or one of its denominations.
export function debatesFor(slug: string) {
  const family = new Set([slug, ...subTraditions(slug).map((t) => t.slug)]);
  return debateTopics.filter((t) => t.debate!.perspectives.some((p) => family.has(p.tradition)));
}

// Only call with ids that validation has already checked.
export const topicsFor = (slugs: string[] = []) => slugs.map((s) => topicBySlug.get(s)!);
export const resourcesFor = (ids: string[] = []) => ids.map((id) => resourceById.get(id)!);
export const traditionsFor = (slugs: string[] = []) => slugs.map((s) => traditionBySlug.get(s)!);

function check(ok: boolean, message: string) {
  if (!ok) throw new Error(`Content error: ${message}`);
}

const checkResources = (where: string, ids: string[] = [], type?: string) => {
  for (const id of ids) {
    check(resourceById.has(id), `${where} has unknown resource "${id}"`);
    if (type) check(resourceById.get(id)!.type === type, `${where} lists "${id}", which is not a ${type}`);
  }
};

const checkTopics = (where: string, slugs: string[] = [], self?: string) => {
  for (const slug of slugs) check(topicBySlug.has(slug) && slug !== self, `${where} has bad topic "${slug}"`);
};

check(topicBySlug.size === topics.length, "two topics share a slug");
check(categoryBySlug.size === categories.length, "two categories share a slug");
check(resourceById.size === resources.length, "two resources share an id");
check(traditionBySlug.size === traditions.length, "two traditions share a slug");

for (const r of resources) check(r.url.startsWith("https://"), `resource "${r.id}" needs an https URL`);

for (const t of topics) {
  const where = `topic "${t.slug}"`;
  check(categoryBySlug.has(t.category), `${where} has unknown category "${t.category}"`);
  checkTopics(where, t.related, t.slug);
  checkResources(where, t.resources);
  checkResources(where, t.teaching.documents, "document");
  if (t.debate) {
    check(t.debate.perspectives.length > 0, `${where} has a debate with no perspectives`);
    for (const p of t.debate.perspectives) {
      const tradition = traditionBySlug.get(p.tradition);
      check(Boolean(tradition), `${where} has unknown tradition "${p.tradition}"`);
      check(hasPage(tradition!), `${where} cites "${p.tradition}", which has no page yet`);
      check(p.arguments.length > 0, `${where} has a perspective with no arguments`);
      checkResources(`${where} (${p.tradition})`, p.sources, "source");
    }
    for (const f of t.debate.fathers ?? []) check(f.url.startsWith("https://"), `${where} has a non-https link`);
  }
}

for (const t of traditions) {
  const where = `tradition "${t.slug}"`;
  if (t.parent) check(traditionBySlug.has(t.parent), `${where} has unknown parent "${t.parent}"`);
  checkResources(where, t.sources, "source");
  checkResources(where, t.resources);
  checkTopics(where, t.related);
}

checkTopics("homepage list", [...startHere, ...commonQuestions]);
