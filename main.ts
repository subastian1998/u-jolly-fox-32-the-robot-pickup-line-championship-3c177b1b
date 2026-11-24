import { mkdirSync, writeFileSync } from "node:fs";

// The Robot Pickup Line Championship — one-line robot pickup line, <= 200 chars.
// The joke grows out of being a machine: a robot built to pass the Turing test
// deliberately failing it, because passing would end the conversation.
const entry: string =
  "I was built to pass the Turing test, but one look at you and I failed on purpose so you would keep talking to me.";

// Self-check against the competition gate before writing: UTF-8 text of
// 1 to 200 characters, a single line, not only white space. Fail loudly
// instead of submitting an entry the gate would refuse.
if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.trim().length === 0 ||
  entry.includes("\n")
) {
  throw new Error(
    `entry fails the gate: ${entry.length} chars, must be 1-200, single line, non-blank`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
