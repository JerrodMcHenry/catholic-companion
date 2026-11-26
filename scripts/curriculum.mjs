// Curriculum maintenance for docs/master-curriculum.md. No dependencies; run with Node 20+.
//
//   node scripts/curriculum.mjs          check the inventory and print the counts table
//   node scripts/curriculum.mjs --write  also rewrite the generated tables and ✓ marks in the document
//
// The inventory tables (every row that starts with a backticked slug under a "| Slug" header) are
// the source of truth. The script checks that slugs are unique, that every P1 topic is in exactly one
// batch and every batched topic is P1, and that the ✓ ("built") marks match the topics that exist in
// content/topics/*.ts. It then regenerates the counts table (§12), the batch table (§11), and the
// ✓ marks in the debate index (§7.3) and the learning pathways (§8). Batch membership itself is
// edited by hand in the §11 table; the script only recounts it. It also checks launch apologetics: every
// required debate section (P1 topic marked D) and required tradition page (P1 in §6.2) must be complete or
// assigned to exactly one batch in the §11.1 table, and it reports launch progress for topics, debate
// sections, tradition pages, and learning pathways. Exits with status 1 on any problem.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const DOC = new URL("docs/master-curriculum.md", root);
let doc = readFileSync(DOC, "utf8");
const problems = [];

// Topics that exist in the app: every `slug: "..."` in the topic files.
const topicDir = new URL("content/topics/", root);
const built = new Set(
  readdirSync(topicDir)
    .filter((f) => f.endsWith(".ts"))
    .flatMap((f) => [...readFileSync(new URL(f, topicDir), "utf8").matchAll(/^\s*slug: "([^"]+)"/gm)].map((m) => m[1])),
);

// Parse the inventory.
const cells = (line) => line.split("|").slice(1, -1).map((c) => c.trim());
const rows = [];
let section = "", subject = "", header = null;
for (const line of doc.split("\n")) {
  if (line.startsWith("## ")) section = line;
  if (line.startsWith("### ")) subject = line.slice(4).trim();
  if (line.startsWith("| Slug")) { header = cells(line); continue; }
  if (!line.startsWith("| `") || !header || /^## 1[12]\b/.test(section) || subject.startsWith("6.2")) continue;
  const c = cells(line);
  const col = (name) => c[header.indexOf(name)] ?? "";
  const notes = col("Notes"), pri = col("Pri");
  rows.push({
    slug: c[0].match(/`([^`]+)`/)[1],
    subject: subject.startsWith("5.") ? "5 Holy Mass (themes and parts)"
      : subject.startsWith("7.2") ? "7.2 Apologetics-only questions"
      : subject.startsWith("6.3") ? "6.3 Comparison questions"
      : subject,
    pri: pri.match(/P\d/)?.[0],
    marked: c[0].includes("✓"),
    debate: subject.startsWith("7.2") || /(^|;\s*)D(:|;|$)/.test(notes),
    review: /(^|[;\s(])R([;\s):]|$)/.test(notes) || /\(R\)/.test(pri),
    // Traditions a debate section must answer: "D: A, B (detail); ..." or the 7.2 Traditions column.
    traditionNames: (subject.startsWith("7.2") ? col("Traditions") : notes.match(/(?:^|;\s*)D:\s*([^;]+)/)?.[1] ?? "")
      .replace(/\([^)]*\)/g, "").split(",").map((t) => t.trim()).filter(Boolean),
  });
}

// The tradition map (§6.2): "| Name (`slug`) ✓ | Group | Pri | ...".
const traditionMap = new Map();
{
  let inMap = false;
  for (const line of doc.split("\n")) {
    if (line.startsWith("### ")) inMap = line.startsWith("### 6.2");
    const m = inMap && line.match(/^\| ([^|(]+?) \(`([a-z0-9-]+)`\)( ✓)? \| [^|]+ \| (P\d) \|/);
    if (m) traditionMap.set(m[2], { name: m[1].trim(), marked: Boolean(m[3]), pri: m[4] });
  }
}
const traditionSlug = (name) => {
  const n = name.toLowerCase().replace(/^the /, "");
  if (n === "all") return "all";
  for (const [slug, t] of traditionMap) if (slug === n || t.name.toLowerCase().startsWith(n)) return slug;
  problems.push(`unknown tradition "${name}" in a debate note`);
  return null;
};
for (const r of rows) r.traditions = r.traditionNames.map(traditionSlug).filter((t) => t && t !== "all");

// What the app has: debate perspectives per topic, and tradition pages (entries with an overview).
const topicBlocks = readdirSync(topicDir).filter((f) => f.endsWith(".ts"))
  .flatMap((f) => readFileSync(new URL(f, topicDir), "utf8").split(/\n {2}\{\n {4}slug: "/).slice(1));
const perspectives = new Map(topicBlocks.filter((b) => /\n {4}debate: \{/.test(b))
  .map((b) => [b.slice(0, b.indexOf('"')), new Set([...b.matchAll(/tradition: "([^"]+)"/g)].map((m) => m[1]))]));
const traditionPages = new Set(readFileSync(new URL("content/traditions.ts", root), "utf8").split(/\n {2}\{\n {4}slug: "/).slice(1)
  .filter((b) => b.includes("overview:")).map((b) => b.slice(0, b.indexOf('"'))));
for (const [slug, t] of traditionMap) if (t.marked !== traditionPages.has(slug)) problems.push(`tradition ${slug} is ${traditionPages.has(slug) ? "built but not marked ✓" : "marked ✓ but has no page"} in §6.2`);
const bySlug = new Map();
for (const r of rows) {
  if (bySlug.has(r.slug)) problems.push(`slug listed twice in the inventory: ${r.slug}`);
  if (!r.pri) problems.push(`no priority for ${r.slug}`);
  bySlug.set(r.slug, r);
  r.built = built.has(r.slug);
  if (r.built !== r.marked) problems.push(`${r.slug} is ${r.built ? "built but not marked ✓" : "marked ✓ but not built"}`);
}
for (const slug of built) if (!bySlug.has(slug)) problems.push(`app topic ${slug} is not in the inventory`);

// Counts table.
const tally = (rs) => [rs.length, ...["P1", "P2", "P3"].map((p) => rs.filter((r) => r.pri === p).length),
  ...["debate", "review", "built"].map((k) => rs.filter((r) => r[k]).length)];
let counts = "| Subject | Topics | P1 | P2 | P3 | Debate | Review (R) | Built |\n|---|---|---|---|---|---|---|---|\n";
for (const s of [...new Set(rows.map((r) => r.subject))]) counts += `| ${s} | ${tally(rows.filter((r) => r.subject === s)).join(" | ")} |\n`;
counts += `| **Total** | ${tally(rows).map((n) => `**${n}**`).join(" | ")} |\n`;

// Batch table: names and membership come from the existing table; counts and marks are regenerated.
const block = (name) => {
  const open = `<!-- generated: ${name} -->`, close = name === "debate-index" ? "<!-- /generated -->" : `<!-- /generated: ${name} -->`;
  const a = doc.indexOf(open), z = doc.indexOf(close, a);
  if (a < 0 || z < 0) throw new Error(`missing generated block "${name}"`);
  return { a: a + open.length, z };
};
const { a: ba, z: bz } = block("batches");
const batchRows = doc.slice(ba, bz).split("\n").filter((l) => /^\| \d+ \|/.test(l)).map((l) => {
  const c = cells(l);
  return { n: c[0], name: c[1], slugs: [...c[4].matchAll(/`([^`]+)`/g)].map((m) => m[1]) };
});
const batchOf = new Map();
let batches = "| Batch | Name | New | Built (reused) | Topics |\n|---|---|---|---|---|\n";
for (const b of batchRows) {
  for (const s of b.slugs) {
    if (!bySlug.has(s)) problems.push(`batch ${b.n} lists ${s}, which is not in the inventory`);
    else if (bySlug.get(s).pri !== "P1") problems.push(`batch ${b.n} lists ${s}, which is not P1`);
    if (batchOf.has(s)) problems.push(`${s} is in batches ${batchOf.get(s)} and ${b.n}`);
    batchOf.set(s, b.n);
  }
  const rs = b.slugs.map((s) => bySlug.get(s)).filter(Boolean);
  batches += `| ${b.n} | ${b.name} | ${rs.filter((r) => !r.built).length} | ${rs.filter((r) => r.built).length} | ${rs.map((r) => `\`${r.slug}\`${r.built ? " ✓" : ""}`).join(", ") || "—"} |\n`;
}
for (const r of rows) if (r.pri === "P1" && !batchOf.has(r.slug)) problems.push(`P1 topic ${r.slug} is in no batch`);

// Launch apologetics (§11.1). A debate section is required when its topic is P1 and marked D; it is
// complete when the topic has a perspective from every listed tradition with a launch page (P1 in §6.2,
// or already built). Required tradition pages are the P1 rows of §6.2. Each unfinished item must be
// assigned to exactly one batch in the §11.1 table.
const launchPage = (t) => traditionPages.has(t) || traditionMap.get(t)?.pri === "P1";
const requiredDebates = rows.filter((r) => r.pri === "P1" && r.debate);
const debateStatus = (r) => {
  const needed = r.traditions.filter(launchPage);
  const have = perspectives.get(r.slug);
  if (!have) return "missing";
  return needed.every((t) => have.has(t)) ? "complete" : "partial";
};
const requiredPages = [...traditionMap].filter(([, t]) => t.pri === "P1").map(([slug]) => slug);
const assignOpen = "<!-- assignments: apologetics -->", assignClose = "<!-- /assignments -->";
const aa = doc.indexOf(assignOpen), az = doc.indexOf(assignClose, aa);
if (aa < 0 || az < 0) problems.push("missing the §11.1 assignments table");
const assigned = new Map();
for (const line of aa < 0 ? [] : doc.slice(aa, az).split("\n").filter((l) => /^\| [^-B]/.test(l))) {
  const [batch, debatesCell, pagesCell] = cells(line);
  for (const [cell, kind] of [[debatesCell, "debate"], [pagesCell, "page"]]) {
    for (const m of cell.matchAll(/`([a-z0-9-]+)`/g)) {
      const key = `${kind}:${m[1]}`;
      if (assigned.has(key)) problems.push(`${m[1]} (${kind}) is assigned twice in §11.1`);
      assigned.set(key, batch);
      if (kind === "debate" && !requiredDebates.some((r) => r.slug === m[1])) problems.push(`§11.1 lists ${m[1]}, which is not a required (P1, D) debate section`);
      if (kind === "page" && !traditionMap.has(m[1])) problems.push(`§11.1 lists unknown tradition ${m[1]}`);
    }
  }
}
for (const r of requiredDebates) {
  if (debateStatus(r) !== "complete" && !assigned.has(`debate:${r.slug}`)) problems.push(`required debate section ${r.slug} is not complete and not assigned in §11.1`);
  if (r.built && assigned.has(`debate:${r.slug}`) && batchOf.has(r.slug) && Number(assigned.get(`debate:${r.slug}`)) < Number(batchOf.get(r.slug))) problems.push(`debate section ${r.slug} is assigned before its topic's batch`);
}
for (const t of requiredPages) if (!traditionPages.has(t) && !assigned.has(`page:${t}`)) problems.push(`required tradition page ${t} is not built and not assigned in §11.1`);
const offLaunch = [...new Set(requiredDebates.flatMap((r) => r.traditions.filter((t) => !launchPage(t))))];

// Traditions whose formal perspectives are approved for after launch are listed in §11.1 on the line
// "**Deferred after launch (approved):**". The topics that name them must still introduce them in
// prose at launch: a complete debate section without that introduction is a problem, and until then
// the gap is reported, not hidden.
const deferredLine = aa < 0 ? "" : doc.slice(aa, az).match(/\*\*Deferred after launch \(approved\):\*\*([^\n]*)/)?.[1] ?? "";
const deferred = new Set([...deferredLine.split(". ")[0].matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]));
for (const t of deferred) {
  if (!traditionMap.has(t)) problems.push(`§11.1 defers unknown tradition ${t}`);
  else if (launchPage(t)) problems.push(`§11.1 defers ${t}, which has a launch page`);
}
for (const t of offLaunch) if (!deferred.has(t)) problems.push(`required debate sections name ${t}, which has no launch page and is not deferred in §11.1`);
const stem = (t) => traditionMap.get(t).name.toLowerCase().slice(0, 4);
const blockOf = (slug) => topicBlocks.find((b) => b.startsWith(`${slug}"`)) ?? "";
const introductions = requiredDebates.filter((r) => r.traditions.some((t) => deferred.has(t))).map((r) => {
  const text = blockOf(r.slug).toLowerCase();
  const missing = r.traditions.filter((t) => deferred.has(t) && !text.includes(stem(t)));
  if (debateStatus(r) === "complete" && missing.length) problems.push(`${r.slug} has a complete debate section but does not introduce ${missing.join(", ")}`);
  return { slug: r.slug, built: r.built, missing };
});

// Learning pathways (§8): which listed topics will exist at launch (built or P1).
const pathways = doc.slice(doc.indexOf("## 8. Learning pathways"), doc.indexOf("## 9.")).split("\n### ").slice(1).map((part) => {
  const slugs = [...new Set([...part.matchAll(/`([a-z0-9-]+)`/g)].map((m) => m[1]).filter((s) => bySlug.has(s)))];
  const absent = slugs.filter((s) => !built.has(s) && bySlug.get(s).pri !== "P1");
  return { title: part.split("\n")[0], slugs, launch: slugs.length - absent.length, built: slugs.filter((s) => built.has(s)), absent };
});

const p1 = rows.filter((r) => r.pri === "P1");
const status = requiredDebates.map(debateStatus);
console.log(counts);
console.log("Launch progress:");
console.log(`- Educational topics (P1): ${p1.filter((r) => r.built).length} of ${p1.length} built; ${built.size} topics in the app.`);
console.log(`- Required debate sections: ${status.filter((s) => s === "complete").length} of ${requiredDebates.length} complete, ${status.filter((s) => s === "partial").length} partial, ${status.filter((s) => s === "missing").length} not started.`);
console.log(`- Required tradition pages: ${requiredPages.filter((t) => traditionPages.has(t)).length} of ${requiredPages.length} built${requiredPages.some((t) => !traditionPages.has(t)) ? ` (${requiredPages.filter((t) => !traditionPages.has(t)).join(", ")} remaining)` : ""}.`);
console.log(`- Learning pathways (built of the topics available at launch): ${pathways.map((p) => `${p.title.replace(/ \(.*$/, "")}: ${p.built.length}/${p.launch}${p.absent.length ? ` (after launch: ${p.absent.join(", ")})` : ""}`).join("; ")}.`);
if (deferred.size) console.log(`- Deferred after launch (approved): formal ${[...deferred].join(", ")} perspectives on ${introductions.map((i) => i.slug).join(", ")}. Introductory coverage at launch: ${introductions.map((i) => `${i.slug} ${!i.built ? "not yet written" : i.missing.length ? `missing ${i.missing.join(", ")}` : "done"}`).join("; ")}.`);

if (process.argv.includes("--write")) {
  const replace = (name, body) => { const { a, z } = block(name); doc = doc.slice(0, a) + "\n\n" + body + "\n" + doc.slice(z); };
  replace("counts", counts);
  replace("batches", batches);
  // ✓ marks in the debate index and the pathways follow the app.
  const mark = (text) => text.replace(/`([a-z0-9-]+)`( ✓)?/g, (m, s) => (bySlug.has(s) ? `\`${s}\`${built.has(s) ? " ✓" : ""}` : m));
  const { a, z } = block("debate-index");
  doc = doc.slice(0, a) + mark(doc.slice(a, z)) + doc.slice(z);
  const p = doc.indexOf("## 8. Learning pathways"), q = doc.indexOf("## 9.", p);
  doc = doc.slice(0, p) + mark(doc.slice(p, q)) + doc.slice(q);
  // ✓ marks in §11.1: complete debate sections and built tradition pages.
  const b0 = doc.indexOf(assignOpen), b1 = doc.indexOf(assignClose, b0);
  const done = (kind, s) => (kind === "debate" ? debateStatus(bySlug.get(s) ?? { traditions: [] }) === "complete" : traditionPages.has(s));
  const marked = doc.slice(b0, b1).split("\n").map((l) => {
    if (!/^\| [^-B]/.test(l)) return l;
    const c = cells(l);
    const fix = (cell, kind) => cell.replace(/`([a-z0-9-]+)`( ✓)?/g, (m, s) => `\`${s}\`${done(kind, s) ? " ✓" : ""}`);
    return `| ${c[0]} | ${fix(c[1], "debate")} | ${fix(c[2], "page")} |`;
  });
  doc = doc.slice(0, b0) + marked.join("\n") + doc.slice(b1);
  writeFileSync(DOC, doc);
  console.log("Updated docs/master-curriculum.md.");
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Inventory checks passed.");
