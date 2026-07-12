/**
 * DEVELOPMENT-ONLY CLAIM REGISTER — NOT IMPORTED BY PRODUCTION CODE.
 *
 * Kept under /docs so bundlers do not include it in any JavaScript
 * shipped to visitors. Do not import from src/. Move review here
 * when tracking which unsupported claims still need approved
 * evidence before they can be restored to public content.
 */

/* ============================================================
 * DEVELOPMENT-ONLY CLAIM REGISTER
 * ============================================================
 * Not rendered in HTML, not emitted in JSON-LD. Intended for
 * internal review of what evidence must be gathered before any of
 * these claims can be restored to public content.
 */

export type ClaimStatus =
  | "verified-public"
  | "verified-internal-not-public"
  | "requires-owner-verification"
  | "unsupported"
  | "placeholder";

export interface ClaimRecord {
  id: string;
  category:
    | "customer"
    | "project"
    | "metric"
    | "technical-specification"
    | "partnership"
    | "certification"
    | "service-condition"
    | "historical-experience";
  statement: string;
  sourceUrl?: string;
  sourceFile?: string;
  status: ClaimStatus;
  publicDisclosureApproved: boolean;
}

export const CLAIM_REGISTER: ClaimRecord[] = [
  { id: "metric-2500-units", category: "metric", statement: "≈2,500 units cumulative experience", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "metric-10-countries", category: "metric", statement: "10 countries in geography of experience", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "metric-30-years-company", category: "historical-experience", statement: "OSKOL-MET-TRADE LLC has operated 30+ years", status: "unsupported", publicDisclosureApproved: false },
  { id: "founder-since-1994", category: "historical-experience", statement: "Founder's / team industry experience since 1994", status: "requires-owner-verification", publicDisclosureApproved: true },
  { id: "case-avtopromdetal", category: "customer", statement: "JSC AvtoPromDetal CNC modernization, Togliatti, 2023, 24 units, +35%, 8 mo", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "case-nlmk", category: "customer", statement: "Novolipetsk Metallurgical Plant raw material supply, 48,000 t, 2022, 6 mo", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "case-uraltyazhmash", category: "customer", statement: "PJSC UralTyazhMash robotic welding cell, 4 units, +60%, 10 mo, 2024", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "case-titanium-plant", category: "customer", statement: "Titanium alloys plant VDU-10 vacuum-arc furnace, Sverdlovsk Region, 2023, +22%, 14 mo, Rostekhnadzor supervision", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "spec-ck6140-accuracy", category: "technical-specification", statement: "CK6140 accuracy ±0.008 mm", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "spec-vmc-855-accuracy", category: "technical-specification", statement: "VMC-855 accuracy ±0.005 mm", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "spec-hmc-630-accuracy", category: "technical-specification", statement: "HMC-630 accuracy ±0.006 mm", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "spec-mk1320-accuracy", category: "technical-specification", statement: "MK1320 accuracy ±0.002 mm", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "spec-dk7745-accuracy", category: "technical-specification", statement: "DK7745 accuracy ±0.003 mm", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "partner-cnc-manufacturer-1", category: "partnership", statement: "CNC manufacturer No. 1", status: "placeholder", publicDisclosureApproved: false },
  { id: "partner-cnc-manufacturer-2", category: "partnership", statement: "CNC manufacturer No. 2", status: "placeholder", publicDisclosureApproved: false },
  { id: "partner-metallurgical-plant", category: "partnership", statement: "Metallurgical plant partner", status: "placeholder", publicDisclosureApproved: false },
  { id: "partner-engineering-group", category: "partnership", statement: "Engineering group partner", status: "placeholder", publicDisclosureApproved: false },
  { id: "partner-leasing-company", category: "partnership", statement: "Leasing company partner", status: "placeholder", publicDisclosureApproved: false },
  { id: "partner-ural-service-center", category: "partnership", statement: "Accredited Ural service center", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-warranty-12-24", category: "service-condition", statement: "Universal warranty 12–24 months", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-turnkey-across-russia", category: "service-condition", statement: "Turnkey delivery across all Russia", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-spare-parts-warehouse", category: "service-condition", statement: "Own spare-parts warehouse in Russia", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-delivery-2-4-weeks", category: "service-condition", statement: "Fixed delivery from stock in 2–4 weeks", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-delivery-8-14-weeks", category: "service-condition", statement: "Made-to-order delivery in 8–14 weeks", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-install-included", category: "service-condition", statement: "Installation always included in delivery price", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-controllers-fixed-list", category: "service-condition", statement: "Fixed controller list Siemens/Fanuc/Mitsubishi on every machine", status: "unsupported", publicDisclosureApproved: false },
  { id: "cond-installments-repeat", category: "service-condition", statement: "Installment plans for repeat customers", status: "unsupported", publicDisclosureApproved: false },
  { id: "cert-expert-degree", category: "certification", statement: "Named expert holds Candidate of Technical Sciences degree with Docent title", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "claim-leading-manufacturers-sea", category: "partnership", statement: "Direct supply from leading manufacturers of Southeast Asia", status: "unsupported", publicDisclosureApproved: false },

  /* -------- Catalog positions — owner-confirmed as offered, but
   * technical parameters / manufacturer / country of origin / image
   * identity / certificates require approved public documents before
   * they may be re-published. -------- */
  { id: "catalog-vmc-850-specs", category: "technical-specification", statement: "VMC-850 working area 850×500×500 mm, accuracy ±0.005 mm, spindle 7.5 kW", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-cnc-320-specs", category: "technical-specification", statement: "CNC-320 machining diameter 320 mm, length 750 mm, Fanuc 0i-TD control", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-robotic-welding-specs", category: "technical-specification", statement: "Robotic welding cell reach 2100 mm, payload 20 kg, ±0.08 mm positioning, 'fully automated'", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-mr25-chemistry", category: "technical-specification", statement: "МР-25 manganese ore Mn 25–30%, moisture ≤8%, fraction 0–40 mm, universal quality claim", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-fecr60-chemistry", category: "technical-specification", statement: "FeCr60 ferrochrome Cr 60–65%, C 6–8%, size 10–50 mm as universal composition", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-ip10-capacity", category: "technical-specification", statement: "ИП-10 induction furnace 10 t capacity, 6000 kW, 250 Hz, 'high efficiency'", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-manufacturer-identity", category: "partnership", statement: "Manufacturer identity for each catalog position (VMC-850, CNC-320, robotic cell, МР-25, FeCr60, ИП-10)", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-country-of-origin", category: "partnership", statement: "Country of origin for each catalog position", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-image-identity", category: "certification", statement: "Whether each catalog image depicts the exact model/grade offered vs. category illustration", status: "requires-owner-verification", publicDisclosureApproved: false },
  { id: "catalog-public-documents", category: "certification", statement: "Public manufacturer catalogues, passports, test reports and certificates for each position", status: "requires-owner-verification", publicDisclosureApproved: false },
];
