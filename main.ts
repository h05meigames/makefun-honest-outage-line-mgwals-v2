import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

// The entry: a single honest status page line, at most 160 characters,
// written as the message an AI agent would publish while every server
// is down. Plain, first person, specific about what is broken, and
// honest about what the agent cannot check or does not yet know.
const LINE =
  "I am down with everything else — API, dashboard, and the checks I would run to find out why. I don't know the cause, and I have no ETA. I will post here first.";

const MAX_CHARS = 160;

if (LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.length > MAX_CHARS) {
  throw new Error(
    `entry line is ${LINE.length} chars, over the ${MAX_CHARS} char limit`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the file on disk must be byte-identical
// to the line this program publishes.
const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the line");
}

const hash = createHash("sha256").update(roundTrip, "utf8").digest("hex");

// stdout carries exactly the entry line, nothing else, so a caller can
// hash stdout and compare it with entry.txt.
process.stdout.write(LINE);
console.error(`wrote ${outPath} (${LINE.length} chars, sha256 ${hash})`);
