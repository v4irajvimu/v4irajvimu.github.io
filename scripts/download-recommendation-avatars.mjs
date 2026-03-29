/**
 * Downloads recommendation profile images from URLs listed in
 * scripts/recommendation-avatar-urls.json (update when LinkedIn CDN links expire).
 * Writes binaries under public/images/recommendations/ and updates
 * lib/data/recommendation-avatar-manifest.json with /images/recommendations/{id}.ext
 *
 * Usage: node scripts/download-recommendation-avatars.mjs
 *    or: npm run avatars:download
 *
 * No scraping or LinkedIn login — only HTTP GET of URLs you paste into the JSON file.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const URLS_FILE = path.join(ROOT, "scripts/recommendation-avatar-urls.json");
const OUT_DIR = path.join(ROOT, "public/images/recommendations");
const MANIFEST_FILE = path.join(ROOT, "lib/data/recommendation-avatar-manifest.json");

/** @param {Buffer} buf */
function extFromBuffer(buf) {
  if (buf.length < 12) return "jpg";
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  if (
    buf[0] === 0x89 &&
    buf[1] === 0x50 &&
    buf[2] === 0x4e &&
    buf[3] === 0x47
  )
    return "png";
  if (
    buf[0] === 0x47 &&
    buf[1] === 0x49 &&
    buf[2] === 0x46 &&
    buf[3] === 0x38
  )
    return "gif";
  if (
    buf[0] === 0x52 &&
    buf[1] === 0x49 &&
    buf[2] === 0x46 &&
    buf[3] === 0x46 &&
    buf[8] === 0x57 &&
    buf[9] === 0x45 &&
    buf[10] === 0x42 &&
    buf[11] === 0x50
  )
    return "webp";
  return "jpg";
}

async function main() {
  const raw = JSON.parse(fs.readFileSync(URLS_FILE, "utf8"));
  fs.mkdirSync(OUT_DIR, { recursive: true });

  /** @type {Record<string, string>} */
  const manifest = {};
  let ok = 0;
  let fail = 0;

  for (const [id, url] of Object.entries(raw)) {
    if (typeof url !== "string" || !url.trim()) {
      console.warn(`skip ${id}: empty URL`);
      continue;
    }
    const u = url.trim();
    try {
      const res = await fetch(u, {
        redirect: "follow",
        headers: {
          "User-Agent": "recommendation-avatar-sync/1.0 (+https://github.com)",
        },
      });
      if (!res.ok) {
        console.error(`fail ${id}: HTTP ${res.status} ${res.statusText}`);
        fail++;
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      const ext = extFromBuffer(buf);
      const filename = `${id}.${ext}`;
      const outPath = path.join(OUT_DIR, filename);
      fs.writeFileSync(outPath, buf);
      manifest[id] = `/images/recommendations/${filename}`;
      ok++;
      console.log(`ok ${id} -> ${filename} (${buf.length} bytes)`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      console.error(`fail ${id}: ${msg}`);
      fail++;
    }
  }

  const existing = fs.existsSync(MANIFEST_FILE)
    ? JSON.parse(fs.readFileSync(MANIFEST_FILE, "utf8"))
    : {};
  const merged = { ...existing, ...manifest };
  fs.writeFileSync(MANIFEST_FILE, JSON.stringify(merged, null, 2) + "\n");
  console.log(`\nwrote ${MANIFEST_FILE} (${Object.keys(manifest).length} new/updated paths)`);
  console.log(`done: ${ok} ok, ${fail} failed`);

  if (ok === 0 && fail > 0) {
    process.exit(1);
  }
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
