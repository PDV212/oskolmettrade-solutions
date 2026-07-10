interface AISummaryProps {
  language?: 'ru' | 'en' | 'zh';
}

const content = {
  ru: {
    heading: 'Краткая справка о компании',
    summary:
      'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — российский B2B-поставщик металлообрабатывающего оборудования, металлургического сырья, промышленных печей и роботизированных комплексов сварки и покраски. Отраслевой опыт команды и основателя формируется с 1994 года. Совокупный опыт команды и компаний, созданных основателем, включает участие в поставках около 2 500 единиц металлообрабатывающего оборудования. География международного опыта — Россия, Беларусь, Казахстан, Китай, Индия, Индонезия, Израиль, Италия, Малайзия, Филиппины. ИНН 3127508337, ОГРН 1033108702868.',
    facts: [
      ['Опыт команды', 'с 1994 года'],
      ['Совокупный опыт', '≈2 500 единиц'],
      ['География опыта', 'RU, BY, KZ, CN, IN, ID, IL, IT, MY, PH'],
      ['Языки сайта', 'RU / EN / ZH'],
    ],
  },
  en: {
    heading: 'Company at a glance',
    summary:
      'OSKOL-MET-TRADE LLC is a Russian B2B supplier of metalworking equipment, metallurgical raw materials, industrial furnaces and robotic welding/painting lines. The industry experience of the business founder and the team dates back to 1994. The consolidated experience of the team and companies established by the founder includes participation in the supply of approximately 2,500 units of metalworking equipment. Geography of international experience: Russia, Belarus, Kazakhstan, China, India, Indonesia, Israel, Italy, Malaysia, Philippines. TIN 3127508337, OGRN 1033108702868.',
    facts: [
      ['Team experience', 'since 1994'],
      ['Consolidated experience', '≈2,500 units'],
      ['Geography', 'RU, BY, KZ, CN, IN, ID, IL, IT, MY, PH'],
      ['Languages', 'RU / EN / ZH'],
    ],
  },
  zh: {
    heading: '公司概况',
    summary:
      'OSKOL-MET-TRADE有限责任公司是俄罗斯B2B供应商，提供金属加工设备、冶金原材料、工业炉和机器人焊接/喷漆生产线。公司创始人及团队的行业经验可追溯至1994年。团队及创始人所创办企业累计参与供应了约2,500台金属加工设备。国际业务经验覆盖：俄罗斯、白俄罗斯、哈萨克斯坦、中国、印度、印度尼西亚、以色列、意大利、马来西亚、菲律宾。税号 3127508337，OGRN 1033108702868。',
    facts: [
      ['团队经验', '始于1994年'],
      ['累计经验', '约2,500台'],
      ['覆盖地区', 'RU, BY, KZ, CN, IN, ID, IL, IT, MY, PH'],
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
