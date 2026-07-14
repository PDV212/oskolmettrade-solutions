import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import StructuredData from '@/components/StructuredData';
import {
  casesContent,
  uiStrings,
  homePathFor,
  SITE_ORIGIN_URL,
  type ContentLanguage,
} from '@/data/pageContent';

interface CasesProps {
  lang?: ContentLanguage;
}

const pathFor = (lang: ContentLanguage) =>
  lang === 'ru' ? '/cases' : lang === 'en' ? '/en/cases' : '/zh/cases';

const Cases = ({ lang = 'ru' }: CasesProps) => {
  const path = pathFor(lang);
  const canonical = SITE_ORIGIN_URL + path;

  // Breadcrumb only. No CaseStudy / CreativeWork / ItemList / customer schema
  // while the page is a temporary non-substantive notice.
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: uiStrings.home[lang], item: SITE_ORIGIN_URL + homePathFor(lang) },
      { '@type': 'ListItem', position: 2, name: uiStrings.cases[lang], item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead
        title={casesContent.meta.title[lang]}
        description={casesContent.meta.description[lang]}
        language={lang}
        path={path}
        noindex
      />
      <StructuredData type="BreadcrumbList" data={breadcrumbSchema} />

      <Header language={lang} />

      <main id="main-content" className="pt-20" itemScope itemType="https://schema.org/WebPage">
        <article className="container mx-auto px-4 py-12 max-w-3xl">
          <header className="mb-8">
            <nav aria-label={uiStrings.breadcrumb[lang]} className="text-sm text-muted-foreground mb-4">
              <a href={homePathFor(lang)} className="hover:text-primary">{uiStrings.home[lang]}</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">{uiStrings.cases[lang]}</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {casesContent.notice.h1[lang]}
            </h1>
          </header>

          <section
            aria-labelledby="cases-notice"
            className="rounded-lg border border-border bg-card p-6 md:p-8"
          >
            <h2 id="cases-notice" className="sr-only">
              {casesContent.notice.h1[lang]}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {casesContent.notice.body[lang]}
            </p>
          </section>
        </article>
      </main>

      <Footer language={lang} />
    </div>
  );
};

export default Cases;
