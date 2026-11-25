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
// edited by hand in the §11 table; the script only recounts it. Exits with status 1 on any problem.

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
  });
}
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
  batches += `| ${b.n} | ${b.name} | ${rs.filter((r) => !r.built).length} | ${rs.filter((r) => r.built).length} | ${rs.map((r) => `\`${r.slug}\`${r.built ? " ✓" : ""}`).join(", ")} |\n`;
}
for (const r of rows) if (r.pri === "P1" && !batchOf.has(r.slug)) problems.push(`P1 topic ${r.slug} is in no batch`);

const p1 = rows.filter((r) => r.pri === "P1");
console.log(counts);
console.log(`P1 launch progress: ${p1.filter((r) => r.built).length} of ${p1.length} built; ${built.size} topics in the app.`);

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
  writeFileSync(DOC, doc);
  console.log("Updated docs/master-curriculum.md.");
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s):\n- ${problems.join("\n- ")}`);
  process.exit(1);
}
console.log("Inventory checks passed.");
