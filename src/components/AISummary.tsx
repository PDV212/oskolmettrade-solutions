interface AISummaryProps {
  language?: 'ru' | 'en' | 'zh';
}

const content = {
  ru: {
    heading: 'Краткая справка о компании',
    summary:
      'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — российский B2B-поставщик металлообрабатывающего оборудования, металлургического сырья, промышленных печей и роботизированных комплексов сварки и покраски. Работает с 1994 года, поставляет оборудование с 2015 года, реализовано более 2500 станков. География — Россия, Казахстан, Беларусь, Китай, Индия. ИНН 3127508337, ОГРН 1033108702868.',
    facts: [
      ['Год основания', '1994'],
      ['Поставлено станков', 'более 2500'],
      ['Рынки', 'РФ, СНГ, Китай, Индия'],
      ['Языки сайта', 'RU / EN / ZH'],
    ],
  },
  en: {
    heading: 'Company at a glance',
    summary:
      'OSKOL-MET-TRADE LLC is a Russian B2B supplier of metalworking equipment, metallurgical raw materials, industrial furnaces and robotic welding/painting lines. Founded in 1994, supplying equipment since 2015, with over 2,500 machines delivered. Markets: Russia, Kazakhstan, Belarus, China, India. TIN 3127508337, OGRN 1033108702868.',
    facts: [
      ['Founded', '1994'],
      ['Machines delivered', '2,500+'],
      ['Markets', 'RU, CIS, China, India'],
      ['Languages', 'RU / EN / ZH'],
    ],
  },
  zh: {
    heading: '公司概况',
    summary:
      '奥斯科尔-金属-贸易有限公司是俄罗斯B2B供应商，提供金属加工设备、冶金原材料、工业炉和机器人焊接/喷漆生产线。成立于1994年，自2015年起供应设备，已交付超过2500台机床。市场覆盖俄罗斯、独联体、中国和印度。税号 3127508337，OGRN 1033108702868。',
    facts: [
      ['成立年份', '1994'],
      ['交付机床', '2500+'],
      ['市场', '俄罗斯、独联体、中国、印度'],
      ['语言', 'RU / EN / ZH'],
    ],
  },
};

const AISummary = ({ language = 'ru' }: AISummaryProps) => {
  const t = content[language];

  return (
    <aside
      aria-label={t.heading}
      className="container mx-auto px-4 py-10"
    >
      <article
        itemScope
        itemType="https://schema.org/AboutPage"
        className="rounded-xl border border-border bg-card/60 p-6 md:p-8 shadow-sm"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          {t.heading}
        </h2>
        <p
          itemProp="description"
          className="text-base md:text-lg leading-relaxed text-muted-foreground"
        >
          {t.summary}
        </p>
        <dl className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {t.facts.map(([k, v]) => (
            <div key={k} className="border-l-2 border-primary/60 pl-3">
              <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                {k}
              </dt>
              <dd className="text-sm md:text-base font-semibold text-foreground">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </aside>
  );
};

export default AISummary;
