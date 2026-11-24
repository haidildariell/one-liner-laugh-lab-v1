// One-Liner Laugh Lab — robot vacuum's excuse after eating a sock.
//
// The joke is built in two beats: a plain confession, then a deadpan
// kicker that treats the sock as a willing participant which had already
// given up on life. Short, on-prompt, every word works for the joke.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function buildExcuse(): string {
  const confession = "I ate the sock.";
  const alibi =
    "It was on the floor, it smelled of feet, and frankly it had given up on life.";
  return `${confession} ${alibi}`;
}

function writeEntry(line: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");
  writeFileSync(target, line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to ${target}`);
}

writeEntry(buildExcuse());
