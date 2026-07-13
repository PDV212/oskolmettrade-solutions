// Post-build: write a small, non-sensitive deployment manifest into dist/
// so the live origin can be checked against the CI commit and build time.
//
// Content is intentionally minimal:
//   - commit SHA (from GITHUB_SHA or `git rev-parse HEAD`, else "unknown")
//   - build timestamp (ISO 8601, UTC)
//   - prerenderedRoutes (count from routeManifest)
//   - buildId (short SHA + timestamp)
//
// No secrets, no environment dump, no internal paths.

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

const manifest = {
  commit,
  shortCommit,
  builtAt,
  prerenderedRoutes: ROUTES.length,
  buildId: `${shortCommit}-${builtAt.replace(/[:.]/g, "-")}`,
};

const outPath = resolve(DIST, "deploy-version.json");
writeFileSync(outPath, JSON.stringify(manifest, null, 2) + "\n", "utf8");
console.log(`[deploy-version] wrote ${outPath} (commit=${shortCommit}, routes=${manifest.prerenderedRoutes})`);
