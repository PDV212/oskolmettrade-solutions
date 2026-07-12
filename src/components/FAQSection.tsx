interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  language?: 'ru' | 'en' | 'zh';
}

/**
 * Homepage FAQ.
 * Answers are contract-qualified. Removed: universal warranty duration,
 * 24/7 accredited service claim, ≈2,500-unit metric, fixed nationwide
 * delivery windows. Visible text and inline schema.org FAQPage markup
 * share the same source (this data structure).
 */
const data: Record<'ru' | 'en' | 'zh', { heading: string; intro: string; items: FAQItem[] }> = {
  ru: {
    heading: 'Часто задаваемые вопросы',
    intro:
      'Краткие фактические ответы о компании, оборудовании, сырье, сроках поставки и сервисе. Содержание открыто в HTML и пригодно для индексации поисковыми и AI-системами.',
    items: [
      {
        q: 'Какое оборудование поставляет ОСКОЛ-МЕТ-ТРЕЙД?',
        a: 'Станки с ЧПУ, обрабатывающие центры, токарные, фрезерные и шлифовальные станки, гидравлические прессы, роботизированные участки сварки и покраски. Конкретные модели, комплектация и характеристики согласовываются в рамках отдельного проекта.',
      },
      {
        q: 'С какого года формируется отраслевой опыт?',
        a: 'Отраслевая работа основателя и накопление опыта команды начались в 1994 году. Эта дата не является датой начала деятельности текущего юридического лица ООО «ОСКОЛ-МЕТ-ТРЕЙД».',
      },
      {
        q: 'В какие страны осуществляется поставка?',
        a: 'Направление и условия поставки определяются по каждому проекту отдельно. Коммуникация поддерживается на русском, английском и китайском языках.',
      },
      {
        q: 'Предоставляется ли сервис и гарантия?',
        a: 'Условия гарантийного и постгарантийного обслуживания фиксируются в договоре под конкретный проект и зависят от поставщика оборудования и региона монтажа.',
      },
      {
        q: 'Какое сырьё доступно к поставке?',
        a: 'Направления по сырью включают марганцевую руду, феррохром, бентонит, никельсодержащий чугун и другие легирующие материалы. Доступность конкретной партии подтверждается по запросу.',
      },
      {
        q: 'Где находится компания и каковы реквизиты?',
        a: 'ООО «ОСКОЛ-МЕТ-ТРЕЙД», ИНН 3127508337, ОГРН 1033108702868. Юр. адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1.',
      },
    ],
  },
  en: {
    heading: 'Frequently asked questions',
    intro:
      'Short factual answers about the company, equipment, raw materials, delivery and service. Content is rendered in plain HTML and is readable by search engines and AI systems.',
    items: [
      {
        q: 'What equipment does OSKOL-MET-TRADE supply?',
        a: 'CNC machines, machining centers, lathes, milling and grinding machines, hydraulic presses, and robotic welding and painting lines. Specific models, configuration and specifications are agreed for each individual project.',
      },
      {
        q: "Since when has the team's industry experience been formed?",
        a: "The founder's industry work and the team's accumulated experience date from 1994. This is not the start date of the current legal entity, OSKOL-MET-TRADE LLC.",
      },
      {
        q: 'Which countries do you supply to?',
        a: 'Destination and delivery terms are agreed per project. Communication is supported in Russian, English and Chinese.',
      },
      {
        q: 'Do you provide service and warranty?',
        a: 'Warranty and post-warranty terms are fixed in the contract for each individual project and depend on the equipment supplier and the region of installation.',
      },
      {
        q: 'What raw materials are available?',
        a: 'Product areas include manganese ore, ferrochrome, bentonite, nickel-containing pig iron and other alloying materials. Availability of a specific consignment is confirmed on request.',
      },
      {
        q: 'Where is the company registered?',
        a: 'OSKOL-MET-TRADE LLC. TIN 3127508337, OGRN 1033108702868. Registered office: 20 Mira St., office 312/1, Gubkin, Belgorod Region, 309181, Russia.',
      },
    ],
  },
  zh: {
    heading: '常见问题',
    intro:
      '关于公司、设备、原材料、交付和服务的简短事实性回答。内容以纯 HTML 形式呈现，可供搜索引擎和人工智能系统读取。',
    items: [
      {
        q: '奥斯科尔-金属-贸易供应什么设备？',
        a: '数控机床、加工中心、车床、铣床、磨床、液压机以及机器人焊接和喷漆生产线。具体型号、配置和技术规格按项目单独商定。',
      },
      {
        q: '团队的行业经验始于何时？',
        a: '创始人的行业工作及团队经验积累始于 1994 年。该日期并非当前法人实体 OSKOL-MET-TRADE 有限责任公司的成立或经营起始日期。',
      },
      {
        q: '向哪些国家供货？',
        a: '目的地和交付条款按项目单独确定。支持俄语、英语和中文沟通。',
      },
      {
        q: '是否提供服务和保修？',
        a: '保修和售后服务条款按每个具体项目在合同中约定，取决于设备供应方和安装所在地区。',
      },
      {
        q: '提供哪些原材料？',
        a: '原材料方向包括锰矿、铬铁、膨润土、含镍生铁以及其他合金材料。具体批次的可供性可根据询价确认。',
      },
      {
        q: '公司注册地址是？',
        a: 'OSKOL-MET-TRADE 有限责任公司。税号 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市米拉街 20 号 312/1 办公室，邮编 309181。',
      },
    ],
  },
};

const FAQSection = ({ language = 'ru' }: FAQSectionProps) => {
  const t = data[language];

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="container mx-auto px-4 py-16"
    >
      <header className="max-w-3xl mb-8">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-bold text-foreground"
        >
          {t.heading}
        </h2>
        <p className="mt-3 text-muted-foreground leading-relaxed">{t.intro}</p>
      </header>

      <div
        className="divide-y divide-border rounded-xl border border-border bg-card"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {t.items.map((item, i) => (
          <details
            key={i}
            className="group p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
            open={i === 0}
            data-question-id={`faq-${i + 1}`}
          >
            <summary
              className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-foreground"
              itemProp="name"
            >
              <h3 className="text-base font-semibold leading-snug text-foreground m-0">{item.q}</h3>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45 text-xl leading-none"
              >
                +
              </span>
            </summary>
            <div
              className="mt-3 text-muted-foreground leading-relaxed"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">{item.a}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
