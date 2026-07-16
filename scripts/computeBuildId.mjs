// Compute the build id ONCE per build and persist it to .buildid at the
// repo root. Both vite.config.ts (client + SSR builds) and
// scripts/writeDeployVersion.mjs read this file so the value embedded in
// the JS bundle (__APP_VERSION__) is byte-for-byte identical to
// dist/version.json's `version` field.
//
// Without this shared source, each caller ran `new Date()` independently
// and produced different timestamps — the running client would then
// perpetually detect a "new version" and prompt for reload.

import { writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, "..", ".buildid");

function resolveCommit() {
  if (process.env.GITHUB_SHA) return process.env.GITHUB_SHA;
  try {
    return execSync("git rev-parse HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "";
  }
}

const commit = resolveCommit();
const shortCommit = commit ? commit.slice(0, 7) : "local";
const builtAt = new Date().toISOString();
const buildId = `${shortCommit}-${builtAt.replace(/[:.]/g, "-")}`;

writeFileSync(
  OUT,
  JSON.stringify({ commit, shortCommit, builtAt, buildId }, null, 2) + "\n",
  "utf8",
);

console.log(`[computeBuildId] buildId=${buildId}`);
