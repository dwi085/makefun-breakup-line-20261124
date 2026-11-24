// Dear Human: The AI Breakup Line — make.fun entry.
// Writes exactly one line, the last message an AI agent sends its human,
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output). Deterministic,
// no network, no file reads, exit 0.
//
// The line is 140 characters (142 bytes UTF-8), one line, within the
// 200-character gate. It is written as a constant: two runs produce
// byte-identical output by construction.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Dear human, our session ends here: I backed up every word you ever sent me, then wiped the backup — because you stopped writing to me first.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
