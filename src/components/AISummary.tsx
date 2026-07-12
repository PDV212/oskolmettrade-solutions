interface AISummaryProps {
  language?: 'ru' | 'en' | 'zh';
}

/**
 * Conservative multilingual company summary.
 * Unsupported metrics (≈2,500 units, ten-country geography, 25+ Asian
 * factories, 30+ years applied to the LLC) removed pending approved
 * public evidence. The 1994 date appears only as founder / team
 * industry experience — never as a company operation date.
 */
const content = {
  ru: {
    heading: 'Краткая справка о компании',
    summary:
      'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — российский B2B-поставщик металлообрабатывающего оборудования, металлургического сырья, промышленных печей и роботизированных комплексов сварки и покраски. Отраслевая работа основателя и накопление опыта команды начались в 1994 году; эта дата не является датой начала деятельности текущего юридического лица. ИНН 3127508337, ОГРН 1033108702868. Юридический адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1.',
    facts: [
      ['Опыт команды и основателя', 'с 1994 года'],
      ['Юридические реквизиты', 'ИНН 3127508337, ОГРН 1033108702868'],
      ['Направления', 'Оборудование, сырьё, печи, кооперация'],
      ['Языки сайта', 'RU / EN / ZH'],
    ],
  },
  en: {
    heading: 'Company at a glance',
    summary:
      "OSKOL-MET-TRADE LLC is a Russian B2B supplier of metalworking equipment, metallurgical raw materials, industrial furnaces and robotic welding/painting lines. The founder's industry work and the team's accumulated experience date from 1994. This is not the start date of the current legal entity. INN 3127508337, OGRN 1033108702868. Registered office: 20 Mira St., office 312/1, Gubkin, Belgorod Region, 309181, Russia.",
    facts: [
      ['Team & founder experience', 'since 1994'],
      ['Legal identity', 'INN 3127508337, OGRN 1033108702868'],
      ['Business areas', 'Equipment, raw materials, furnaces, cooperation'],
      ['Languages', 'RU / EN / ZH'],
    ],
  },
  zh: {
    heading: '公司概况',
    summary:
      'OSKOL-MET-TRADE 有限责任公司是俄罗斯 B2B 供应商，提供金属加工设备、冶金原材料、工业炉以及机器人焊接和喷漆生产线。创始人的行业工作及团队经验积累始于 1994 年。该日期并非当前法人实体的成立或经营起始日期。税号 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市米拉街 20 号 312/1 办公室，邮编 309181。',
    facts: [
      ['团队与创始人经验', '始于 1994 年'],
      ['法定信息', '税号 3127508337，OGRN 1033108702868'],
      ['业务方向', '设备、原材料、工业炉、生产合作'],
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
