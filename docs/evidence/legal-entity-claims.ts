/**
 * NON-PUBLIC CLAIM REGISTER EXTENSION — legal-entity claims.
 * ==========================================================
 * Not imported by production code. Sits alongside
 * docs/claim-register.ts. Records how each legal-entity claim is
 * supported by the official EGRUL extract identified by
 * sourceDocumentId "egrul-1033108702868-2026-07-13", and explicitly
 * marks historical/team/brand claims that the extract does NOT
 * support.
 *
 * Do NOT import from src/. Do NOT ship to dist/.
 */

export type LegalClaimStatus =
  | "official-document-confirmed"
  | "needs-manual-review"
  | "not-supported-by-this-extract"
  | "do-not-publish";

export interface LegalClaimRecord {
  id: string;
  category:
    | "legal-identity"
    | "legal-registration"
    | "legal-activity"
    | "legal-address"
    | "historical-experience"
    | "brand-history"
    | "team-history";
  statement: string;
  evidenceStatus: LegalClaimStatus;
  sourceDocumentId?: string;
  sourcePage?: number;
  approvedWording?: { ru?: string; en?: string; zh?: string };
  permittedSurfaces: string[];
  reviewDate: string;
  reason?: string;
  publicAction:
    | "publish-as-approved"
    | "keep-internal-only"
    | "keep-removed"
    | "attribute-only-if-later-evidenced";
}

export const LEGAL_CLAIM_REGISTER: LegalClaimRecord[] = [
  {
    id: "legal-full-name",
    category: "legal-identity",
    statement:
      'Полное наименование юридического лица — ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ОСКОЛ-МЕТ-ТРЕЙД".',
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    permittedSurfaces: ["/company", "/en/company", "/zh/company", "legal pages", "Organization JSON-LD legalName"],
    reviewDate: "2026-07-13",
    publicAction: "publish-as-approved",
  },
  {
    id: "legal-short-name",
    category: "legal-identity",
    statement: 'Сокращённое наименование — ООО "ОСКОЛ-МЕТ-ТРЕЙД".',
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    permittedSurfaces: ["all pages"],
    reviewDate: "2026-07-13",
    publicAction: "publish-as-approved",
  },
  {
    id: "legal-ogrn",
    category: "legal-registration",
    statement: "ОГРН 1033108702868.",
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    permittedSurfaces: [
      "/company",
      "/en/company",
      "/zh/company",
      "Organization JSON-LD identifier",
    ],
    reviewDate: "2026-07-13",
    publicAction: "publish-as-approved",
  },
  {
    id: "legal-inn",
    category: "legal-registration",
    statement: "ИНН 3127508337.",
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    permittedSurfaces: [
      "/company",
      "/en/company",
      "/zh/company",
      "Organization JSON-LD taxID",
    ],
    reviewDate: "2026-07-13",
    publicAction: "publish-as-approved",
  },
  {
    id: "legal-kpp",
    category: "legal-registration",
    statement: "КПП (exact value).",
    evidenceStatus: "needs-manual-review",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "The KPP value was not captured with confidence in this parse. Site currently does not display a KPP field; no visible content change is proposed until the value is visually re-read from the source page.",
    publicAction: "keep-internal-only",
  },
  {
    id: "legal-registered-address",
    category: "legal-address",
    statement:
      "Адрес юридического лица — 309181, Белгородская область, г. Губкин, ул. Мира, д. 20, офис 312/1.",
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    permittedSurfaces: [
      "/company",
      "/en/company",
      "/zh/company",
      "Organization JSON-LD PostalAddress",
      "footer legal block",
    ],
    reviewDate: "2026-07-13",
    publicAction: "publish-as-approved",
  },
  {
    id: "legal-entity-status",
    category: "legal-registration",
    statement:
      "Currently active — inferred from the presence of 2026 ЕГРЮЛ record entries; the explicit printed status wording was not confidently captured.",
    evidenceStatus: "needs-manual-review",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "No public 'status' statement is currently displayed on the site; keep it that way until the exact EGRUL wording is quoted verbatim.",
    publicAction: "keep-internal-only",
  },
  {
    id: "legal-primary-okved",
    category: "legal-activity",
    statement:
      "Основной вид деятельности — ОКВЭД 46.72 «Торговля оптовая металлами и металлическими рудами».",
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 4,
    permittedSurfaces: [
      "internal reference for site-content alignment",
      "/company legal block (if owner later approves display)",
    ],
    reviewDate: "2026-07-13",
    publicAction: "keep-internal-only",
    reason:
      "Site does not currently list OKVED codes; no visible change proposed under Option A.",
  },
  {
    id: "legal-registration-date",
    category: "legal-registration",
    statement:
      "Дата регистрации юридического лица — 18.07.2003. This is the state-registration date only.",
    evidenceStatus: "official-document-confirmed",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 2,
    approvedWording: {
      ru: "Юридическое лицо зарегистрировано 18 июля 2003 года.",
      en: "The legal entity was registered on 18 July 2003.",
      zh: "该法人实体于2003年7月18日完成注册。",
    },
    permittedSurfaces: [
      "/company legal block (Option B only — requires separate owner approval)",
    ],
    reviewDate: "2026-07-13",
    publicAction: "keep-internal-only",
    reason:
      "Owner selected Option A (evidence-only). No visible change is made. This wording is stored only as the approved sentence if Option B is ever authorised. Must never be converted into 'работает с 2003 года' / 'operates since 2003' / 'founded in 2003' or any calculated years-in-market figure.",
  },
  {
    id: "founder-since-1994",
    category: "historical-experience",
    statement:
      "Founder's / team industry experience dates from 1994.",
    evidenceStatus: "not-supported-by-this-extract",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [
      "current site copy already attributes this claim to founder/team, not to the LLC",
    ],
    reviewDate: "2026-07-13",
    reason:
      "The EGRUL extract confirms only the 2003 registration date of the legal entity. It does not evidence 1994 team, founder or brand history. Existing site copy is already correctly attributed (RU/EN/ZH hero and Company pages state that 1994 refers to the founder/team, not the current LLC). A separate historical source is required before this claim may be strengthened.",
    publicAction: "attribute-only-if-later-evidenced",
  },
  {
    id: "brand-history-since-1994",
    category: "brand-history",
    statement: "OSKOL-MET-TRADE brand history since 1994.",
    evidenceStatus: "not-supported-by-this-extract",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "Predates the 2003 state-registration date of the legal entity. Not supported by this extract; keep removed.",
    publicAction: "keep-removed",
  },
  {
    id: "team-history-since-1994",
    category: "team-history",
    statement: "Team continuity of OSKOL-MET-TRADE LLC since 1994.",
    evidenceStatus: "not-supported-by-this-extract",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "The extract does not evidence continuity of a specific team since 1994. Only the founder/team industry-experience attribution (see founder-since-1994) is retained on-site.",
    publicAction: "keep-removed",
  },
  {
    id: "metric-30-years-company",
    category: "historical-experience",
    statement: "'30+ years' / '25+ years' company-history calculations.",
    evidenceStatus: "not-supported-by-this-extract",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "Confirmed 2003 registration date does not justify any '25+/30+ years' derivation. Must remain removed regardless of subsequent evidence about founder/team history.",
    publicAction: "keep-removed",
  },
  {
    id: "legal-personal-data",
    category: "legal-identity",
    statement:
      "Director/participant natural-person data present in the extract.",
    evidenceStatus: "do-not-publish",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    permittedSurfaces: [],
    reviewDate: "2026-07-13",
    reason:
      "Names, personal INNs, positions, gender, citizenship, participant OGRN/INN/name and share breakdowns are personal or sensitive. Not stored in the evidence record; not published anywhere on the site. Requires a separate owner decision and privacy review before any surface may show them.",
    publicAction: "keep-internal-only",
  },
];
