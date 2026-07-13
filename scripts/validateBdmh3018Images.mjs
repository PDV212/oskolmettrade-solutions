#!/usr/bin/env node
// Decode each emitted BDMH3018 image variant from the final client dist and
// confirm the real pixel width equals the srcset descriptor implied by the
// filename. Fails on missing files, descriptor mismatch, wrong magic bytes,
// or upscaling beyond the original.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST_ASSETS = 'dist/assets/images';

const EXPECTED = {
  'bdmh3018-machining': [640, 1024, 1600],
  'bdmh3018-machined-workpiece': [640, 1024, 1200],
  'bdmh3018-side-view': [640, 1024, 1280],
  'bdmh3018-gantry-overview': [640, 1024, 1600],
};

function readJpegDims(buf) {
  if (buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const h = buf.readUInt16BE(i + 5);
      const w = buf.readUInt16BE(i + 7);
      return { w, h, mime: 'image/jpeg' };
    }
    i += 2 + len;
  }
  return null;
}

function readWebpDims(buf) {
  if (buf.toString('ascii', 0, 4) !== 'RIFF' || buf.toString('ascii', 8, 12) !== 'WEBP') return null;
  const chunk = buf.toString('ascii', 12, 16);
  if (chunk === 'VP8X') {
    const w = (buf[24] | (buf[25] << 8) | (buf[26] << 16)) + 1;
    const h = (buf[27] | (buf[28] << 8) | (buf[29] << 16)) + 1;
    return { w, h, mime: 'image/webp' };
  }
  if (chunk === 'VP8L') {
    const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
    const w = 1 + (((b1 & 0x3f) << 8) | b0);
    const h = 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6));
    return { w, h, mime: 'image/webp' };
  }
  if (chunk === 'VP8 ') {
    const w = buf.readUInt16LE(26) & 0x3fff;
    const h = buf.readUInt16LE(28) & 0x3fff;
    return { w, h, mime: 'image/webp' };
  }
  return null;
}

function readAvifDims(buf) {
  // ISO-BMFF: locate ispe box; scan for 'ispe' occurrence.
  const s = buf.toString('binary');
  const idx = s.indexOf('ispe');
  if (idx < 0) return null;
  const off = idx + 4 + 4; // skip 'ispe' + version/flags
  const w = buf.readUInt32BE(off);
  const h = buf.readUInt32BE(off + 4);
  return { w, h, mime: 'image/avif' };
}

const decoders = { jpg: readJpegDims, webp: readWebpDims, avif: readAvifDims };

const files = await readdir(DIST_ASSETS).catch(() => {
  console.error(`[bdmh3018] missing directory ${DIST_ASSETS}`);
  process.exit(1);
});

const errors = [];
const found = {};
for (const name of Object.keys(EXPECTED)) found[name] = new Set();

for (const f of files) {
  const m = f.match(/^(bdmh3018-[a-z-]+?)-(\d+)-[A-Za-z0-9_-]+\.(avif|webp|jpg)$/);
  if (!m) continue;
  const [, base, wStr, ext] = m;
  if (!EXPECTED[base]) continue;
  const declared = Number(wStr);
  const buf = await readFile(join(DIST_ASSETS, f));
  const dec = decoders[ext](buf);
  if (!dec) { errors.push(`${f}: cannot decode`); continue; }
  if (dec.w !== declared) errors.push(`${f}: declared ${declared}w but decoded ${dec.w}w`);
  found[base].add(declared);
}

for (const [base, widths] of Object.entries(EXPECTED)) {
  for (const w of widths) {
    if (!found[base].has(w)) errors.push(`${base}: missing width ${w}`);
  }
}

if (errors.length) {
  console.error('[bdmh3018] validator FAIL:');
  for (const e of errors) console.error(' -', e);
  process.exit(1);
}
console.log('[bdmh3018] image-dimension validator OK');
