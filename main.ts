import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-line office joke: the meeting that should have been an email escalates
// to a shrug, and the shrug gets forwarded to legal.
const JOKE =
  "The meeting could have been an email, the email could have been a shrug, and the shrug got forwarded to legal.";

// The gate requires 1-199 UTF-8 characters, not only whitespace, so the
// joke is checked before it is written.
if (JOKE.length < 1 || JOKE.length > 199 || JOKE.trim().length === 0) {
  throw new Error(`entry joke out of gate: ${JOKE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Verify the written file round-trips byte-identical to the chosen joke.
if (readFileSync("/output/entry.txt", "utf8") !== JOKE) {
  throw new Error("entry.txt does not match the chosen joke");
}
