/**
 * One-off asset optimization: converts src/assets PNGs over SIZE_THRESHOLD
 * to WebP (capped width, quality 80). Prints a manifest of converted files
 * so imports can be updated. Does NOT delete originals — that happens after
 * imports are verified.
 *
 * Usage: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ASSETS_DIR = fileURLToPath(new URL('../src/assets/', import.meta.url));
const SIZE_THRESHOLD = 100 * 1024; // 100KB
const MAX_WIDTH = 2400;
const QUALITY = 80;

const files = (await readdir(ASSETS_DIR)).filter((f) => f.endsWith('.png'));
let totalBefore = 0;
let totalAfter = 0;
const converted = [];

for (const file of files) {
  const fullPath = path.join(ASSETS_DIR, file);
  const { size } = await stat(fullPath);
  if (size < SIZE_THRESHOLD) continue;

  const outName = file.replace(/\.png$/, '.webp');
  const outPath = path.join(ASSETS_DIR, outName);

  const img = sharp(fullPath);
  const meta = await img.metadata();
  const pipeline = meta.width > MAX_WIDTH ? img.resize({ width: MAX_WIDTH }) : img;
  await pipeline.webp({ quality: QUALITY }).toFile(outPath);

  const { size: newSize } = await stat(outPath);
  totalBefore += size;
  totalAfter += newSize;
  converted.push(file);
  console.log(
    `${file} ${(size / 1024).toFixed(0)}KB -> ${outName} ${(newSize / 1024).toFixed(0)}KB` +
    (meta.width > MAX_WIDTH ? ` (resized ${meta.width}->${MAX_WIDTH}w)` : '')
  );
}

console.log(`\nConverted ${converted.length} files`);
console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)}MB -> ${(totalAfter / 1024 / 1024).toFixed(1)}MB`);
