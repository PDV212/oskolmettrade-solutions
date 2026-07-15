// Post-build: write two deployment manifests into dist/.
//
//   - dist/deploy-version.json   (legacy, used by scripts/verifyProduction.mjs)
//   - dist/version.json          (public runtime endpoint used by
//                                 src/lib/appVersion.ts to detect a newer
//                                 deployment and prompt users to reload)
//
// Content is intentionally minimal — no secrets, no environment dump.

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ROUTES } from "./routeManifest.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = resolve(__dirname, "..", "dist");

if (!existsSync(DIST)) mkdirSync(DIST, { recursive: true });

function resolveCommit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "unknown";
  }
}

const commit = resolveCommit();
const shortCommit = commit === "unknown" ? "unknown" : commit.slice(0, 7);
const builtAt = new Date().toISOString();
const buildId = `${shortCommit}-${builtAt.replace(/[:.]/g, "-")}`;

const manifest = {
  commit,
  shortCommit,
  builtAt,
  prerenderedRoutes: ROUTES.length,
  buildId,
};

writeFileSync(
  resolve(DIST, "deploy-version.json"),
  JSON.stringify(manifest, null, 2) + "\n",
  "utf8",
);

// Public runtime endpoint. Kept small on purpose — the client only needs a
// stable `version` string.
const publicVersion = {
  version: buildId,
  buildTime: builtAt,
  commit: shortCommit,
};
writeFileSync(
  resolve(DIST, "version.json"),
  JSON.stringify(publicVersion, null, 2) + "\n",
  "utf8",
);

console.log(
  `[deploy-version] wrote deploy-version.json + version.json (commit=${shortCommit}, buildId=${buildId})`,
);
