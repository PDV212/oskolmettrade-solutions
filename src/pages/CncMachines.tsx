import { Cog, ShieldCheck, Truck, Wrench } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import {
  cncContent,
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
} from '@/data/pageContent';

const iconMap = {
  shield: ShieldCheck,
  truck: Truck,
  cog: Cog,
  wrench: Wrench,
} as const;

interface CncMachinesProps {
  lang?: ContentLanguage;
}

const pathFor = (lang: ContentLanguage) =>
  lang === 'ru' ? '/cnc-machines' : lang === 'en' ? '/en/cnc-machines' : '/zh/cnc-machines';

const equipmentAnchorFor = (lang: ContentLanguage) => `${homePathFor(lang)}#equipment`;

const CncMachines = ({ lang = 'ru' }: CncMachinesProps) => {
  const path = pathFor(lang);
  const canonical = SITE_ORIGIN_URL + path;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + homePathFor(lang) },
      {
        '@type': 'ListItem',
        position: 2,
        name: uiStrings.equipment[lang],
        item: SITE_ORIGIN_URL + equipmentAnchorFor(lang),
      },
      { '@type': 'ListItem', position: 3, name: uiStrings.cnc[lang], item: canonical },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: cncContent.hero.h1[lang],
    serviceType: uiStrings.cnc[lang],
    areaServed: { '@type': 'Country', name: lang === 'ru' ? 'Россия' : lang === 'en' ? 'Russia' : '俄罗斯' },
    provider: { '@type': 'Organization', name: 'ОСКОЛ-МЕТ-ТРЕЙД', url: SITE_ORIGIN_URL },
    description: cncContent.meta.description[lang],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cncContent.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q[lang],
      acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={cncContent.meta.title[lang]}
        description={cncContent.meta.description[lang]}
        language={lang}
        path={path}
        hreflangGroup="cncMachines"
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />
      <StructuredData type="Service" data={serviceSchema} />
      <StructuredData type="FAQPage" data={faqSchema} />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-10">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={homePathFor(lang)} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <a href={equipmentAnchorFor(lang)} className="hover:text-primary">{uiStrings.equipment[lang]}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{uiStrings.cnc[lang]}</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {cncContent.hero.h1[lang]}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {cncContent.hero.intro[lang]}
            </p>
          </header>

          <section aria-labelledby="types-heading" className="mb-12">
            <h2 id="types-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.types[lang]}
            </h2>
            <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-muted-foreground mb-6">
              {cncContent.machineTypes.map((t) => (
                <li key={t.ru}>{t[lang]}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground italic leading-relaxed max-w-3xl">
              {cncContent.categoriesNote[lang]}
            </p>
          </section>


          <section aria-labelledby="why-heading" className="mb-12">
            <h2 id="why-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.why[lang]}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cncContent.advantages.map((a) => {
                const Icon = iconMap[a.iconKey];
                return (
                  <article key={a.title.ru} className="rounded-lg border border-border bg-card p-5">
                    <Icon className="w-8 h-8 text-primary mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-2">{a.title[lang]}</h3>
                    <p className="text-sm text-muted-foreground">{a.text[lang]}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="faq-heading" className="mb-8">
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {cncContent.sections.faq[lang]}
            </h2>
            <div className="space-y-3">
              {cncContent.faqs.map((f, i) => (
                <details
                  key={f.q.ru}
                  data-question-id={`cnc-faq-${i + 1}`}
                  className="group rounded-lg border border-border bg-card p-4"
                >
                  <summary className="cursor-pointer list-none flex justify-between items-center">
                    <h3 className="font-semibold text-foreground">{f.q[lang]}</h3>
                    <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted-foreground">{f.a[lang]}</p>
                </details>
              ))}
            </div>
          </section>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default CncMachines;
