import { useState } from "react";
import { Award, GraduationCap, Users, Wrench, CheckCircle2, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  engineeringExpertise as C,
  aboutPathFor,
  type ContentLanguage,
} from "@/data/engineeringExpertise";

interface Props {
  lang: ContentLanguage;
}

interface DocProps {
  lang: ContentLanguage;
  src: string;
  width: number;
  height: number;
  caption: string;
  triggerLabel: string;
}

const AccessibleDocumentModal = ({
  lang,
  src,
  width,
  height,
  caption,
  triggerLabel,
}: DocProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition-colors"
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          {triggerLabel}
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-base font-semibold">{triggerLabel}</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            {caption}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-2">
          <img
            src={src}
            width={width}
            height={height}
            alt={caption}
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain rounded-md border border-border bg-white"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

const EvidenceDocumentCard = ({
  lang,
  src,
  width,
  height,
  caption,
}: {
  lang: ContentLanguage;
  src: string;
  width: number;
  height: number;
  caption: string;
}) => (
  <figure className="rounded-lg border border-border bg-card p-4 flex flex-col">
    <div className="bg-muted/40 rounded-md p-2 mb-3 flex items-center justify-center">
      <img
        src={src}
        width={width}
        height={height}
        alt={caption}
        loading="lazy"
        decoding="async"
        className="w-full h-auto max-h-64 object-contain"
      />
    </div>
    <figcaption className="text-sm text-muted-foreground leading-relaxed flex-1">
      {caption}
    </figcaption>
    <div className="mt-3">
      <AccessibleDocumentModal
        lang={lang}
        src={src}
        width={width}
        height={height}
        caption={caption}
        triggerLabel={C.viewDocument[lang]}
      />
    </div>
  </figure>
);

/* -------- Compact home block -------- */
export const EngineeringExpertiseCompact = ({ lang }: Props) => (
  <section
    aria-labelledby="ee-compact-heading"
    className="container mx-auto px-4 py-12 max-w-6xl"
  >
    <div className="rounded-xl border border-border bg-card p-6 md:p-8">
      <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-2">
        {C.eyebrow[lang]}
      </p>
      <h2
        id="ee-compact-heading"
        className="text-2xl md:text-3xl font-bold text-foreground mb-4"
      >
        {C.home.heading[lang]}
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-4xl">
        {C.home.text[lang]}
      </p>
      <ul className="grid sm:grid-cols-2 gap-3 mb-6 list-none p-0">
        {C.home.trustSignals[lang].map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm text-foreground">
            <CheckCircle2
              className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <a
        href={`${aboutPathFor(lang)}#${C.sectionId}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        {C.home.link[lang]} →
      </a>
    </div>
  </section>
);

/* -------- Full About section -------- */
export const EngineeringExpertiseSection = ({ lang }: Props) => (
  <section
    id={C.sectionId}
    aria-labelledby="ee-heading"
    className="mb-16 scroll-mt-24"
  >
    <header className="mb-8">
      <p className="text-xs font-semibold tracking-wider text-primary uppercase mb-2">
        {C.eyebrow[lang]}
      </p>
      <h2 id="ee-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">
        {C.heading[lang]}
      </h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-4xl">
        {C.lead[lang]}
      </p>
    </header>

    {/* Expert profile card */}
    <article
      className="rounded-lg border border-border bg-card p-6 mb-10"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <GraduationCap className="w-7 h-7 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-foreground" itemProp="name">
            {C.expert.name[lang]}
          </h3>
          <p className="text-sm font-medium text-primary mb-3" itemProp="jobTitle">
            {C.expert.position[lang]}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {C.expert.profile[lang]}
          </p>
        </div>
      </div>
    </article>

    {/* Credentials */}
    <div className="mb-10">
      <h3 className="text-xl font-bold text-foreground mb-5">
        {C.credentialsHeading[lang]}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        {C.credentials.map((cr) => (
          <div
            key={cr.title.en}
            className="rounded-lg border border-border bg-card p-5"
          >
            <div className="flex items-start gap-3">
              <Award
                className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              <div>
                <h4 className="text-base font-semibold text-foreground mb-1">
                  {cr.title[lang]}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cr.text[lang]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Staffing */}
    <div className="mb-10 rounded-lg border border-border bg-card p-6">
      <div className="flex items-start gap-3 mb-3">
        <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
        <h3 className="text-xl font-bold text-foreground">
          {C.staffingHeading[lang]}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
        {C.staffingText[lang]}
      </p>
      <p className="text-xs text-muted-foreground italic">
        {C.staffingClarification[lang]}
      </p>
    </div>

    {/* Capabilities */}
    <div className="mb-10">
      <h3 className="text-xl font-bold text-foreground mb-3">
        {C.capabilitiesHeading[lang]}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-4xl">
        {C.capabilitiesIntro[lang]}
      </p>
      <ul className="grid sm:grid-cols-2 gap-2 mb-5 list-none p-0">
        {C.capabilities[lang].map((cap) => (
          <li
            key={cap}
            className="flex items-start gap-2 text-sm text-foreground rounded-md border border-border bg-card px-3 py-2"
          >
            <Wrench
              className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
              aria-hidden="true"
            />
            <span>{cap}</span>
          </li>
        ))}
      </ul>
      <p className="text-sm text-foreground leading-relaxed mb-3">
        {C.capabilityStatement[lang]}
      </p>
      <p className="text-xs text-muted-foreground italic leading-relaxed">
        {C.contractQualification[lang]}
      </p>
    </div>

    {/* Evidence */}
    <div>
      <h3 className="text-xl font-bold text-foreground mb-5">
        {C.evidenceHeading[lang]}
      </h3>
      <div className="grid md:grid-cols-2 gap-5 mb-4">
        <EvidenceDocumentCard
          lang={lang}
          src={C.academicDocument.src}
          width={C.academicDocument.width}
          height={C.academicDocument.height}
          caption={C.academicDocument.caption[lang]}
        />
        <EvidenceDocumentCard
          lang={lang}
          src={C.staffingDocument.src}
          width={C.staffingDocument.width}
          height={C.staffingDocument.height}
          caption={C.staffingDocument.caption[lang]}
        />
      </div>
      <p className="text-xs text-muted-foreground italic">
        {C.evidenceStatement[lang]}
      </p>
    </div>
  </section>
);
