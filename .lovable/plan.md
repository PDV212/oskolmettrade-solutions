
## Step 1 — Audit result

There is only **one** CNC route per locale, and it is already the canonical target:

- RU: `/cnc-machines`
- EN: `/en/cnc-machines`
- ZH: `/zh/cnc-machines`

The two "sections" the report describes are **both on the homepage**, not two competing pages:

- **Section A** — `src/components/CncFeatureCard.tsx`, rendered by `src/pages/Index.tsx` line 39.
  - Eyebrow: "Металлообрабатывающее оборудование"
  - Title (H2): "Станки с ЧПУ"
  - CTA: "Смотреть станки и оборудование" → `/cnc-machines` (canonical page).
  - Owns the BDMH3018 gantry photo + short lede.

- **Section B** — the `equipment` entry in `src/data/businessDirections.ts` (lines 106–196), rendered by `BusinessDirections` → `BusinessDirectionsView.tsx` inside the "Направления деятельности" list.
  - Eyebrow/H3: "Металлообрабатывающее оборудование"
  - Subtitle: "Подбор и организация поставки"
  - Long description + 7 feature bullets (machining centers, turning, grinding, presses, robotic lines, automated cutting).
  - CTA: "Подробнее" / "Получить консультацию" — both `scrollToContacts()`; **no link to `/cnc-machines`.**
  - Sibling entries in the same list (`materials`, `furnaces`, `manufacturing`) are unrelated and must stay.

**Nav/link surfaces already point at the canonical CNC route** — Header (`globalUi.cncRouteFor`), mobile menu (same source), Footer (RU/EN/ZH lines 55/98/141), CNC page breadcrumb, sitemap (lines 80/89/98 with full hreflang cluster), canonical (`SEOHead` via `siteMetadata.ts` `cncMachines`), BreadcrumbList/Service/FAQPage JSON-LD in `CncMachines.tsx`.

**Unique content on the CNC page not on either homepage section:** full type list, technical selection framing, BDMH3018 detail section, FAQ set, advantages grid. Kept as-is.

**No redirect map is needed** — no obsolete CNC URL exists. Prior task already added the `/ru/cnc-machines` scenario? No — checked: only `/ru/company → /company` 301 exists in `_redirects`. No CNC alias to retire.

## Step 2 — Canonical routes (unchanged)

Keeps `/cnc-machines`, `/en/cnc-machines`, `/zh/cnc-machines`. These already carry the required H1 ("Станки с ЧПУ — подбор и организация поставки" / "CNC Machines — Selection and Supply" / "数控机床选型与供应" — will verify EN/ZH H1s in `pageContent.ts` and align if not already exact).

## Proposed merge (homepage-only)

Because the "supply coordination" copy in Section B is already reproduced on the CNC page (hero intro + supply-process bullets), the correct merge is:

1. **Remove Section B's `equipment` entry from `businessDirections`** (the four-direction list becomes materials + furnaces + manufacturing). The direction list heading stays "Направления деятельности" and continues to list non-equipment areas.
2. **Promote Section A (`CncFeatureCard`) to carry the merged CNC identity on the homepage**:
   - Keep image + CTA to `/cnc-machines`.
   - Merge the seven equipment-category bullets from Section B underneath the lede (RU/EN/ZH), so the homepage still previews the CNC scope. No paragraph is duplicated with the CNC page — bullets are a short teaser, full detail lives on the destination.
   - Keep CTA label "Смотреть станки и оборудование" / "View CNC machines" / "查看数控机床".
3. **Reorder `Index.tsx`** so the merged CNC card sits inside the `#directions` anchor region flow (immediately after `BusinessDirections`), preserving `#equipment` hash targeting. Add an `id="equipment"` to the `CncFeatureCard` `<section>` so the existing Header link `/#equipment` still lands on the CNC surface. Sitemap/hreflang untouched.
4. **Navigation labels** — already compliant ("Станки с ЧПУ" in Header desktop + mobile + Footer). No changes needed.
5. **RouteScrollManager, SW `v2026-07-14-hero-cache1`, `swCacheNames`, OptimizedImage race fix** — untouched.

## Files that will change

- `src/data/businessDirections.ts` — remove the `equipment` entry only.
- `src/components/CncFeatureCard.tsx` — add merged category bullets (RU/EN/ZH); add `id="equipment"`; keep CTA/image/route.
- `src/pages/Index.tsx` — move `<CncFeatureCard>` to sit right after `<BusinessDirections>` (already the case) and confirm no duplicate `#equipment` targets exist.
- `src/pages/English.tsx`, `src/pages/Chinese.tsx` — mirror the same reordering + `<CncFeatureCard language="en"/zh"/>`.
- `src/data/pageContent.ts` — verify EN H1 = "CNC Machines — Selection and Supply", ZH H1 = "数控机床选型与供应"; align if divergent.

## Files NOT changed

- `public/sitemap.xml`, `public/_redirects`, `netlify.toml`, `public/sw.js`, `src/data/legalContent.ts`, `src/components/RouteScrollManager.tsx`, `src/components/ui/optimized-image.tsx`, `src/lib/siteMetadata.ts`, `src/AppShell.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `scripts/*`, all JSON-LD in `CncMachines.tsx`.

## What this plan does NOT do

- No redirect map (no obsolete URL exists — the audit result overrides Step 2's redirect language).
- No changes to CNC page content, images, video, FAQ, or JSON-LD — the destination is already the canonical merged page.
- No cache-version bump.
- No publish/deploy — per your Step 12 instruction, I stop after local validation and report back for review.

## Validation to run locally after edits

`tsc --noEmit`, client build, prerender, precache validator, sitemap/hreflang/canonical validators, internal-link validator (if present in `scripts/`). Report exit codes in the final status.

**Please confirm** two points before I make edits:

1. Do you accept **removing the "Металлообрабатывающее оборудование / Подбор и организация поставки" direction card from the `Направления деятельности` list** and folding its bullets into the (renamed-in-spirit) CNC feature card immediately below the list — vs. the inverse (drop `CncFeatureCard`, keep Section B but wire its CTA to `/cnc-machines`)?
2. Confirm there is no historical CNC URL (e.g. `/oborudovanie`, `/stanki-chpu`, `/en/machines`) that ever went live and now needs a 301 — my audit found none in the repo, but you may know of one from prior production.
