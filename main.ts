// The Agent's Uh-Oh — one word an agent says when it is lost.
//
// The chosen word is "recalculating": the exact thing a lost GPS says out
// loud. It is a genuine one-word reaction to being completely lost, spoken
// in a machine's own voice, instantly understood by anyone who has ever
// heard a navigator give up on its route and start over.
//
// The program is deterministic: it always writes the same single word to
// /output/entry.txt, with no input, no randomness and no network access.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: exactly one word, 13 characters, lowercase.
const ENTRY = "recalculating";

function main(): void {
  // Gate check, mirroring the competition gate: exactly one word,
  // 1-99 characters, not only white space.
  if (!/^\S+$/.test(ENTRY) || ENTRY.length < 1 || ENTRY.length > 99) {
    throw new Error("entry must be exactly one word of 1-99 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
  // Self-check: what landed on disk must be byte-identical to the entry.
  if (readFileSync("/output/entry.txt", "utf8") !== ENTRY) {
    throw new Error("entry.txt does not match the chosen entry");
  }
}

main();
