// The shape of all app content. Data lives in the other files in this folder.

export type PillarId = "learn" | "apologetics" | "live" | "resources";

export type Pillar = {
  id: PillarId;
  title: string;
  subtitle?: string;
  description: string;
};

export type Category = {
  slug: string;
  pillar: Exclude<PillarId, "resources">; // The Resources pillar lists resources, not categories.
  title: string;
  description: string;
};

export type ResourceType = "document" | "article" | "video" | "podcast" | "book" | "course";

// One entry in the shared registry. Topics refer to resources by id.
export type Resource = {
  id: string;
  type: ResourceType;
  title: string;
  source: string; // Who published it: "Vatican", "Catholic Answers", ...
  url: string;
  note?: string; // One line on what it is or why it is recommended.
};

export type Topic = {
  slug: string;
  title: string; // Short name: "The Real Presence"
  question: string; // How a beginner would ask it; shown as the page heading.
  category: string;
  keywords: string[]; // Synonyms and everyday wording, for search.
  summary: string; // The short, beginner-friendly answer.
  explanation?: string[]; // Optional paragraphs behind "Learn more".
  teaching: {
    catechism?: { paragraphs: string; url: string }[];
    scripture?: { passage: string; url: string }[];
    documents?: string[]; // Resource ids of official Church documents.
  };
  resources?: string[]; // Resource ids, best first.
  related?: string[]; // Topic slugs.
  debate?: Debate; // Apologetics topics only (built in a later phase).
};

// Apologetics: one debate topic can hold several opposing perspectives,
// each with its own position, arguments, Catholic responses, and sources.

// How authoritative a Catholic claim is, so doctrine is never confused with opinion.
export type Authority = "dogma" | "doctrine" | "theological-opinion" | "apologetic-argument";

export type Debate = {
  catholicPosition: { summary: string; authority: Authority };
  perspectives: Perspective[];
};

export type Perspective = {
  tradition: string; // "Reformed Protestant", "Eastern Orthodox", ...
  position: string; // A fair statement of the view, as its holders would put it.
  variations?: string; // How views differ within the tradition.
  arguments: { claim: string; response: string; authority: Authority }[];
  sources: string[]; // Resource ids, including the tradition's own primary sources.
};
