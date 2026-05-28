interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  language?: 'ru' | 'en' | 'zh';
}

const data: Record<'ru' | 'en' | 'zh', { heading: string; intro: string; items: FAQItem[] }> = {
  ru: {
    heading: 'Часто задаваемые вопросы',
    intro:
      'Краткие фактические ответы о компании, оборудовании, сырье, сроках поставки и сервисе. Содержание открыто в HTML и пригодно для индексации поисковыми и AI-системами.',
    items: [
      {
        q: 'Какое оборудование поставляет ОСКОЛ-МЕТ-ТРЕЙД?',
        a: 'Станки с ЧПУ, обрабатывающие центры, токарные, фрезерные и шлифовальные станки, гидравлические прессы, роботизированные участки сварки и покраски с AI-расчётом траекторий по 3D-чертежам Tekla Structures.',
      },
      {
        q: 'С какого года работает компания?',
        a: 'Компания работает в металлургии с 1994 года. Поставкой оборудования занимается с 2015 года, за это время реализовано более 2 500 станков.',
      },
      {
        q: 'В какие страны осуществляется поставка?',
        a: 'Россия, Казахстан, Беларусь, Китай, Индия. Поддерживается мультиязычная коммуникация на русском, английском и китайском.',
      },
      {
        q: 'Предоставляется ли сервис и гарантия?',
        a: 'Да. Гарантийное и постгарантийное обслуживание осуществляется через аккредитованное предприятие на Урале с круглосуточной технической поддержкой.',
      },
      {
        q: 'Какое сырьё доступно к поставке?',
        a: 'Марганцевая руда, феррохром, бентонит, никельсодержащий чугун и другие легирующие материалы для металлургического производства.',
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
        a: 'CNC machines, machining centers, lathes, milling and grinding machines, hydraulic presses, and robotic welding and painting lines with AI-driven trajectory planning based on Tekla Structures 3D models.',
      },
      {
        q: 'Since when has the company operated?',
        a: 'In metallurgy since 1994 and in equipment supply since 2015. More than 2,500 machines have been delivered.',
      },
      {
        q: 'Which countries do you supply to?',
        a: 'Russia, Kazakhstan, Belarus, China and India. Communication is supported in Russian, English and Chinese.',
      },
      {
        q: 'Do you provide service and warranty?',
        a: 'Yes. Warranty and post-warranty service is provided through an accredited facility in the Urals with 24/7 technical support.',
      },
      {
        q: 'What raw materials are available?',
        a: 'Manganese ore, ferrochrome, bentonite, nickel-containing pig iron and other alloying materials for metallurgical production.',
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
      '关于公司、设备、原材料、交付和服务的简短事实性回答。内容以纯HTML形式呈现，可供搜索引擎和人工智能系统读取。',
    items: [
      {
        q: '奥斯科尔-金属-贸易供应什么设备？',
        a: '数控机床、加工中心、车床、铣床、磨床、液压机以及基于Tekla Structures三维模型进行AI轨迹规划的机器人焊接和喷漆生产线。',
      },
      {
        q: '公司成立多久了？',
        a: '自1994年起从事冶金业务，自2015年起供应设备，已交付超过2500台机床。',
      },
      {
        q: '向哪些国家供货？',
        a: '俄罗斯、哈萨克斯坦、白俄罗斯、中国和印度。支持俄语、英语和中文沟通。',
      },
      {
        q: '是否提供服务和保修？',
        a: '是的。通过乌拉尔地区的认证企业提供保修和售后服务，提供24/7技术支持。',
      },
      {
        q: '提供哪些原材料？',
        a: '锰矿、铬铁、膨润土、含镍生铁以及其他冶金生产用合金材料。',
      },
      {
        q: '公司注册地址是？',
        a: 'OSKOL-MET-TRADE有限责任公司。税号 3127508337，OGRN 1033108702868。注册地址：俄罗斯别尔哥罗德州古布金市米拉街20号312/1办公室，邮编309181。',
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
          >
            <summary
              className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-foreground"
              itemProp="name"
            >
              <span>{item.q}</span>
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
