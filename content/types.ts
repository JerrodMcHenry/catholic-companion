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

// "document" is an official Catholic Church document; "source" is a primary source
// from another tradition, used to state that tradition's views in its own words.
export type ResourceType = "document" | "source" | "article" | "video" | "podcast" | "book" | "course";

// Kept here, beside the type and away from the content data, so browser code can use
// it without pulling the whole content registry into the JavaScript bundle.
export const resourceTypeLabel: Record<ResourceType, string> = {
  document: "Church document",
  source: "Source",
  article: "Article",
  video: "Video",
  podcast: "Podcast",
  book: "Book",
  course: "Course",
};

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
  alsoKnownAs?: string[]; // Theological names for the question: "Sola Scriptura".
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
  debate?: Debate; // Apologetics topics only.
};

// Apologetics: one debate topic can hold several opposing perspectives,
// each with its own position, arguments, Catholic responses, and sources.
// Traditions are never stored on the topic itself: a tradition page lists every
// topic with a perspective from that tradition, so nothing is duplicated.

// How authoritative a Catholic claim is, so doctrine is never confused with opinion.
// Labels are assigned conservatively; anything uncertain is flagged for theological review.
export type Authority =
  | "dogma" // Solemnly defined (e.g. by an ecumenical council).
  | "doctrine" // Taught by the Church, e.g. in the Catechism.
  | "theological-opinion"
  | "pastoral-reflection" // A reflection drawing on Church teaching, not a formal teaching itself.
  | "apologetic-argument";

export type Debate = {
  catholicPosition: { summary: string; authority: Authority };
  perspectives: Perspective[];
  fathers?: { name: string; work: string; note: string; url: string }[]; // Early Church witnesses.
};

export type Perspective = {
  tradition: string; // Tradition slug.
  position: string; // A fair statement of the view, as its holders would put it.
  variations?: string; // How views differ within the tradition.
  arguments: { claim: string; response: string; authority: Authority }[]; // Strongest first.
  sources: string[]; // Resource ids of the tradition's own primary sources.
};

export type Tradition = {
  slug: string;
  name: string;
  group: "christian" | "religion" | "worldview";
  parent?: string; // Denominations point to "protestantism".
  keywords?: string[]; // Other names people search for: "Muslim", "Watchtower".
  // Everything below is optional: a tradition gets a page only once it has an overview.
  overview?: string[];
  differences?: string[]; // Main points where Catholics and this tradition differ.
  sources?: string[]; // Resource ids of primary sources from the tradition.
  resources?: string[]; // Resource ids of recommended Catholic resources.
  related?: string[]; // Non-debate topic slugs worth reading alongside.
};
