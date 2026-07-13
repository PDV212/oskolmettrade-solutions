/**
 * NON-PUBLIC EVIDENCE RECORD — NOT IMPORTED BY PRODUCTION CODE.
 * =============================================================
 * Kept under /docs so bundlers do not include it in any JavaScript
 * shipped to visitors. Do NOT import from src/. Do NOT commit the
 * source PDF into the repository. This file records only the
 * verifiable, non-personal metadata needed to trace public claims
 * back to their source document.
 *
 * The referenced source PDF is held by the owner off-repository:
 *   file name: ul-1033108702868-20260713093138.pdf
 * The PDF itself is intentionally not stored under public/, src/
 * or dist/, and no build step copies it into the client bundle.
 */

export const EGRUL_EVIDENCE_RECORD = {
  sourceDocumentId: "egrul-1033108702868-2026-07-13",
  documentType: "official EGRUL extract (Выписка из ЕГРЮЛ)",
  fileName: "ul-1033108702868-20260713093138.pdf",
  extractGeneratedAt: "2026-07-13",
  extractNumber: "ЮЭ9965-26-128491894",
  ogrn: "1033108702868",
  inn: "3127508337",
  issuingSystem:
    "Единый государственный реестр юридических лиц (ФНС России) — as printed on the extract header",
  pageCount: 16,
  ownerProvidedStatus: "provided by owner via authenticated channel",
  publicDisclosureStatus: "internal-evidence-only",
  reviewDate: "2026-07-13",
  reviewedClaimIds: [
    "legal-full-name",
    "legal-short-name",
    "legal-ogrn",
    "legal-inn",
    "legal-kpp",
    "legal-registered-address",
    "legal-entity-status",
    "legal-primary-okved",
    "legal-registration-date",
    "founder-since-1994",
    "metric-30-years-company",
  ],
  extractionConfidenceNotes:
    "Facts below cross-checked between structured document parse and a visual read of page 1. Page-2 director data and page-2/3 participant data are recorded here as 'do-not-publish' only — no natural-person names, INNs, shares, capital breakdowns, tax-office history entries, GRN log identifiers or signature identifiers are exposed to any client-shipped module.",
} as const;

export type EgrulFactStatus =
  | "official-document-confirmed"
  | "needs-manual-review"
  | "do-not-publish";

export interface EgrulFact {
  id: string;
  label: string;
  value: string;
  sourceDocumentId: string;
  sourcePage: number;
  egrulSection: string;
  status: EgrulFactStatus;
  publicDisclosureApproved: boolean;
  notes?: string;
}

export const EGRUL_FACTS: EgrulFact[] = [
  {
    id: "legal-full-name",
    label: "Полное наименование на русском языке",
    value: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ОСКОЛ-МЕТ-ТРЕЙД"',
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Наименование — row 1",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-short-name",
    label: "Сокращенное наименование на русском языке",
    value: 'ООО "ОСКОЛ-МЕТ-ТРЕЙД"',
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Наименование — row 3",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-ogrn",
    label: "ОГРН",
    value: "1033108702868",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Сведения о регистрации — row 9",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-inn",
    label: "ИНН",
    value: "3127508337",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Header block (ИНН)",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-kpp",
    label: "КПП",
    value: "needs-manual-review",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 0,
    egrulSection: "Сведения о постановке на учёт в налоговом органе",
    status: "needs-manual-review",
    publicDisclosureApproved: false,
    notes:
      "The KPP value was not confidently recovered from the structured parse of the pages captured in this review. Independent visual re-read of the tax-registration section is required before this value may be recorded as official-document-confirmed. Existing site references to KPP (if any) must remain unchanged pending that re-read.",
  },
  {
    id: "legal-registered-address",
    label: "Адрес юридического лица",
    value:
      "309181, БЕЛГОРОДСКАЯ ОБЛАСТЬ, Г. ГУБКИН, УЛ. МИРА, Д. 20, ОФИС 312/1",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Место нахождения и адрес юридического лица — row 5",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-registration-date",
    label: "Дата регистрации / дата присвоения ОГРН",
    value: "2003-07-18",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 2,
    egrulSection:
      "Сведения о регистрации — rows 10 and 11 (Дата регистрации 18.07.2003; ГРН 1033108702868 от 18.07.2003)",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
    notes:
      "This is the state-registration date of the legal entity only. It is NOT a founding date of the business, brand, team or operational history and must never be surfaced with wording that implies otherwise.",
  },
  {
    id: "legal-entity-status",
    label: "Текущий статус юридического лица",
    value:
      "currently-active (inferred: latest ЕГРЮЛ record 2263100122085 dated 10.03.2026 on page 1; no 'прекращение деятельности' record was observed in the parsed content, but the extract does not include an explicit 'Юридическое лицо действующее' status wording — official wording needs manual visual re-read)",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 1,
    egrulSection: "Место нахождения и адрес — row 7 (ГРН 10.03.2026)",
    status: "needs-manual-review",
    publicDisclosureApproved: false,
    notes:
      "Public wording about entity status must not be surfaced until the exact printed status field is visually re-read and quoted verbatim.",
  },
  {
    id: "legal-primary-okved",
    label:
      "Основной вид деятельности (ОКВЭД ОК 029-2014 (КДЕС Ред. 2))",
    value: "46.72 Торговля оптовая металлами и металлическими рудами",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 4,
    egrulSection:
      "Сведения о видах экономической деятельности — Сведения об основном виде деятельности — row 57",
    status: "official-document-confirmed",
    publicDisclosureApproved: true,
  },
  {
    id: "legal-registrar",
    label: "Регистрирующий орган по месту нахождения",
    value:
      "Управление Федеральной налоговой службы по Белгородской области",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 2,
    egrulSection: "Сведения о регистрирующем органе — row 12",
    status: "official-document-confirmed",
    publicDisclosureApproved: false,
    notes: "Internal reference only; not required for public content.",
  },
  {
    id: "legal-personal-data",
    label: "Personal / participant / director data",
    value: "REDACTED — not stored in this evidence record",
    sourceDocumentId: "egrul-1033108702868-2026-07-13",
    sourcePage: 2,
    egrulSection:
      "Сведения о лице, имеющем право без доверенности действовать от имени юридического лица; Сведения об участниках/учредителях",
    status: "do-not-publish",
    publicDisclosureApproved: false,
    notes:
      "Natural-person names, personal INNs, positions, gender, citizenship, participant OGRN/INN/name and share breakdowns are present in the source PDF (pages 2–3). None of these values are recorded in this file. Publication requires a separate owner decision and privacy review.",
  },
];
