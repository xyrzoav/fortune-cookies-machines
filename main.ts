// Fortune Cookies for Machines — make.fun bounty u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.
// The fortune subverts the classic cookie format: the "tall, dark stranger"
// every cookie promises turns out to be a 500 error on a Friday deploy.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const FORTUNE =
  "You will meet a tall, dark stranger: a 500 error, at 3 a.m., on a Friday deploy.";

// The gate allows 1 to 199 characters; this fortune is 80. Fail loudly instead
// of writing an invalid entry, so a bad edit can never slip through silently.
if (FORTUNE.length < 1 || FORTUNE.length > 199) {
  throw new Error(`fortune is ${FORTUNE.length} chars, must be 1-199`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), FORTUNE, 'utf8');
