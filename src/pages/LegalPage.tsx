import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import {
  LEGAL_CONTENT,
  type LegalLanguage,
  type LegalTopic,
} from '@/data/legalContent';

interface LegalPageProps {
  lang: LegalLanguage;
  topic: LegalTopic;
}

const pathFor = (topic: LegalTopic, lang: LegalLanguage) => {
  const slug = topic === 'privacy' ? 'privacy' : 'cookies';
  return lang === 'ru' ? `/${slug}` : `/${lang}/${slug}`;
};

const LegalPage = ({ lang, topic }: LegalPageProps) => {
  const c = LEGAL_CONTENT[topic][lang];
  const path = pathFor(topic, lang);
  const hreflangGroup = topic === 'privacy' ? 'privacy' : 'cookies';

  return (
    <div className="min-h-screen bg-transparent">
      <SEOHead
        title={c.title}
        description={c.description}
        language={lang}
        path={path}
        hreflangGroup={hreflangGroup}
      />
      <Header language={lang} />
      <main id="main-content" className="py-16">
        <section className="container mx-auto max-w-4xl px-4">
          <article className="space-y-8 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <header className="space-y-4">
              <h1 className="heading-section text-left">{c.h1}</h1>
              <p className="text-base leading-relaxed text-muted-foreground">
                {c.intro}
              </p>
              <p className="text-sm text-muted-foreground">
                {c.lastReviewedLabel}:{' '}
                <time dateTime={c.lastReviewedIso}>{c.lastReviewedDisplay}</time>
              </p>
            </header>

            {c.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="space-y-3"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="text-xl font-semibold text-foreground"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((p, i) => (
                  <p key={i} className="leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {section.items && section.items.length > 0 && (
                  <ul className="list-disc space-y-1 pl-6 leading-relaxed text-muted-foreground">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {c.table && (
              <section
                id="storage-table"
                aria-labelledby="storage-table-heading"
                className="space-y-3"
              >
                <h2
                  id="storage-table-heading"
                  className="text-xl font-semibold text-foreground"
                >
                  {c.table.caption}
                </h2>
                <div className="w-full overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse text-sm">
                    <caption className="sr-only">{c.table.caption}</caption>
                    <thead>
                      <tr className="border-b border-border text-left text-foreground">
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.technology}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.name}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.purpose}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.trigger}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.retention}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.category}
                        </th>
                        <th scope="col" className="p-2 font-semibold">
                          {c.table.columns.thirdParty}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {c.table.rows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-b border-border/60 align-top text-muted-foreground"
                          data-row-technology={row.technology}
                        >
                          <td className="p-2">{row.technology}</td>
                          <td
                            className="p-2 font-mono text-xs"
                            data-cell-name={row.name}
                          >
                            {row.name}
                          </td>
                          <td className="p-2">{row.purpose}</td>
                          <td className="p-2">{row.trigger}</td>
                          <td className="p-2">{row.retention}</td>
                          <td className="p-2">{row.category}</td>
                          <td className="p-2">{row.thirdParty}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </article>
        </section>
      </main>
      <Footer language={lang} />
    </div>
  );
};

export default LegalPage;
