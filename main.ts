// Writes the checked-in news image to /output for the make.fun grader.
// Deterministic: the grader runs twice and compares bytes, so no clock, network or randomness.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');
copyFileSync(source, target);
