import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const replacements = [
  ['Copy to clipboard', '클립보드에 복사'],
  ['Copied!', '복사됨!'],
  ['Terminal window', '터미널 창'],
];

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const targetDir = path.join(scriptDir, '..', 'apps', 'guide', 'dist', 'ko');

let updatedFiles = 0;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
      continue;
    }

    if (!entry.isFile() || !fullPath.endsWith('.html')) continue;

    let html = await readFile(fullPath, 'utf8');
    const original = html;

    for (const [from, to] of replacements) {
      html = html.replaceAll(from, to);
    }

    if (html === original) continue;

    await writeFile(fullPath, html);
    updatedFiles += 1;
  }
}

await walk(targetDir);
console.log(`localized ${updatedFiles} Korean guide fallback file(s)`);
