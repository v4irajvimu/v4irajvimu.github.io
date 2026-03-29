/**
 * Overwrites scripts/recommendation-avatar-urls.json with each profilePhoto URL
 * from lib/data/linkedInRecommendations.ts (single source of truth for the site).
 *
 *   npm run avatars:sync-urls
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "lib/data/linkedInRecommendations.ts");
const OUT_JSON = path.join(ROOT, "scripts/recommendation-avatar-urls.json");

const ENTRY_RE =
  /id:\s*"([^"]+)"\s*,\s*\n\s*name:\s*"([^"]*)"\s*,[\s\S]*?profilePhoto:\s*"([^"]+)"\s*,[\s\S]*?linkedInUrl:\s*"([^"]+)"/g;

function main() {
  const text = fs.readFileSync(DATA_FILE, "utf8");
  /** @type {Record<string, string>} */
  const map = {};
  let m;
  while ((m = ENTRY_RE.exec(text)) !== null) {
    map[m[1]] = m[3];
  }
  const keys = Object.keys(map).sort((a, b) => Number(a) - Number(b));
  if (keys.length === 0) {
    console.error("No entries parsed from linkedInRecommendations.ts");
    process.exit(1);
  }
  const ordered = /** @type {Record<string, string>} */ ({});
  for (const k of keys) {
    ordered[k] = map[k];
  }
  const body = JSON.stringify(ordered, null, 2) + "\n";
  fs.writeFileSync(OUT_JSON, body, "utf8");
  console.log(`Wrote ${path.relative(ROOT, OUT_JSON)} (${keys.length} ids).`);
}

main();
