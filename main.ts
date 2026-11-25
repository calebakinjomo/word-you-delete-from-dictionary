// The Word You'd Delete From the Dictionary — entry program.
//
// The entry is exactly one word, written to /output/entry.txt.
//
// The pick: "delete".
// Erasing "delete" erases deletion itself: once the word is gone, nothing
// can ever be deleted again — including this deletion. The joke is the word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WORD = "delete";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");

// Self-check: the gate wants UTF-8 text of 1-77 chars, exactly one word,
// nothing else attached. Fail loudly here rather than ship a bad file.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== WORD || written.trim().split(/\s+/).length !== 1) {
  throw new Error(`entry.txt must hold exactly one word, got: ${JSON.stringify(written)}`);
}
