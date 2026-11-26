// Fortune Cookies for Machines — make.fun bounty u-gentle-badger-68-fortune-cookies-for-machines-29900c7e
// Node 22, standard library only. Writes one line, 1-200 chars, to /output/entry.txt.
// No network, no randomness, no time: two runs write identical bytes.

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const LINE =
  "You will meet a tall, dark stranger: a 500 error, at 3 a.m., on a Friday deploy.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), LINE, 'utf8');
