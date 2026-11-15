// Official liturgical texts and their recordings stay out of Git. Run with `npm test`.
//
// They live only in public/local/ (scripts/generate-narration.mjs, "Official texts"). These checks fail if
// that folder stops being ignored, if anything in it is tracked or staged, or if any official text from
// your local copy appears in a tracked or staged file.
// (`git add -f` can still force a file in on purpose; the second and third checks then fail.)

import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" });
const LOCAL_FILES = ["public/local/liturgical-texts.json", "public/local/timings.json", "public/local/manifest.json", "public/local/confiteor-en.wav", "public/local/collect-prayer-en.mp3"];

test("public/local/ is ignored by Git", () => {
  for (const file of LOCAL_FILES) assert.ok(git("check-ignore", "--no-index", file).trim(), `${file} is not ignored`);
});

test("nothing in public/local/ is tracked or staged", () => {
  assert.equal(git("ls-files", "--", "public/local").trim(), "", "tracked files in public/local/");
  assert.equal(git("diff", "--cached", "--name-only", "--", "public/local").trim(), "", "staged files in public/local/");
});

test("no official text from the local copy appears in a tracked or staged file", (t) => {
  const file = new URL("public/local/liturgical-texts.json", root);
  if (!existsSync(file)) return t.skip("no local copy yet");
  const texts = Object.values(JSON.parse(readFileSync(file, "utf8"))).flatMap((e) => [e.en, e.es]).filter((s) => s?.trim());
  for (const text of texts) {
    // Its first line or 60 characters: enough to recognize it, short enough to survive reformatting.
    const probe = text.trim().split("\n")[0].slice(0, 60);
    for (const where of [[], ["--cached"]]) {
      let found = "";
      try {
        found = git("grep", "-l", "-F", ...where, "-e", probe);
      } catch (error) {
        if (error.status !== 1) throw error; // 1 = no match
      }
      assert.equal(found.trim(), "", `an official text appears in ${where.length ? "staged" : "tracked"} file(s): ${found.trim()}`);
    }
  }
});
