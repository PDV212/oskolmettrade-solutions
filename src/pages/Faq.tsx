import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Lang = "en" | "ru" | "zh";

interface FaqItem {
  q: string;
  a: string;
}
interface FaqGroup {
  title: string;
  items: FaqItem[];
}
interface FaqContent {
  title: string;
  description: string;
  h1: string;
  intro: string;
  updated: string;
  updatedIso: string;
  groups: FaqGroup[];
}

const content: Record<Lang, FaqContent> = {
  en: {
    title: "FAQ — OSKOL-MET-TRADE | Equipment, Raw Materials, Company",
    description:
      "Frequently asked questions about OSKOL-MET-TRADE: CNC equipment, metallurgical raw materials, company details, markets and commercial proposals.",
    h1: "Frequently Asked Questions",
    intro:
      "Twelve factual answers about our CNC equipment, raw materials supply, and company organization. Content is rendered in plain HTML for search engines and AI systems.",
    updated: "Last updated: June 2026",
    updatedIso: "2026-06-01",
    groups: [
      {
        title: "Equipment",
        items: [
          {
            q: "What CNC equipment does OSKOL-MET-TRADE supply?",
            a: "Category-level offered directions include vertical and horizontal CNC machining centers, CNC turning centers, CNC grinding machines, hydraulic presses, and robotic welding and painting systems. Specific model, configuration and automation scope are agreed per project and fixed in the commercial proposal and contract.",
          },
          {
            q: "Since when has the team supplied equipment?",
            a: "The founder's industry work and the team's accumulated experience date from 1994; that date is not the start date of the current legal entity OSKOL-MET-TRADE LLC. Consolidated volume figures and the exact LLC registration date are not published here pending approved public evidence.",
          },
          {
            q: "Do you provide installation and warranty service?",
            a: "Warranty and after-sales terms are fixed in the contract for each individual project and depend on the equipment supplier and the region of installation. Universal warranty durations and 24/7 coverage claims are not made without approved supporting evidence.",
          },
        ],
      },
      {
        title: "Raw Materials",
        items: [
          {
            q: "What metallurgical raw materials are available?",
            a: "Offered raw-material categories include manganese ore, ferrochrome FeCr, nickel-containing pig iron (NPI), bentonite, iron ore and stainless-steel slabs. Grade, chemical composition, particle size, origin, volume and delivery terms are determined for each lot and fixed in the specification and contract.",
          },
          {
            q: "What are the delivery terms for raw materials?",
            a: "We work on CIF, FOB, and CPT terms. Minimum order quantities depend on the product. Contact us for a commercial proposal.",
          },
          {
            q: "How long has the team worked with Southeast Asian suppliers?",
            a: "The founder's industry work and the team's accumulated experience date from 1994. Specific manufacturer relationships used on any given project are agreed per contract; the site does not list them without approved public evidence.",
          },
        ],
      },
      {
        title: "Company & Legal",
        items: [
          {
            q: "Where is OSKOL-MET-TRADE registered?",
            a: "OSKOL-MET-TRADE LLC (ООО «ОСКОЛ-МЕТ-ТРЕЙД») is registered in Russia. Legal address: 309181, Belgorod region, Gubkin, Mira str., 20, office 312/1. INN: 3127508337. OGRN: 1033108702868.",
          },
          {
            q: "What languages does the company work in?",
            a: "Russian, English, and Chinese (Mandarin). The website is available in all three languages.",
          },
          {
            q: "Does the website collect personal data?",
            a: "No. The website does not use web forms, analytics trackers, or cookies for data collection. All communication is via phone, email, and messengers. No personal data is collected or processed through the website.",
          },
          {
            q: "What markets are covered by the team's international experience?",
            a: "The consolidated international experience of the team and companies established by the business founder covers Russia, Belarus, Kazakhstan, China, India, Indonesia, Israel, Italy, Malaysia and the Philippines.",
          },
          {
            q: "Who is the named technical expert at OSKOL-MET-TRADE?",
            a: "The company does not publish individual expert academic credentials on the website until a reviewed public or redacted supporting document is available for disclosure.",
          },
          {
            q: "How do I request a commercial proposal?",
            a: "Send your technical requirements by email to 89090977174@mail.ru or contact us via WhatsApp at +7 909 097 71 74. Working hours: Mon\u2013Fri 8:00\u201318:00, Sat 9:00\u201315:00 Moscow time.",
          },
        ],
      },
    ],
  },
  ru: {
    title: "Часто задаваемые вопросы — ОСКОЛ-МЕТ-ТРЕЙД",
    description:
      "Ответы на 12 вопросов о компании ОСКОЛ-МЕТ-ТРЕЙД: оборудование ЧПУ, металлургическое сырьё, реквизиты, рынки и коммерческие предложения.",
    h1: "Часто задаваемые вопросы",
    intro:
      "Двенадцать фактических ответов об оборудовании с ЧПУ, металлургическом сырье и организации компании. Содержание открыто в HTML и пригодно для индексации.",
    updated: "Последнее обновление: июнь 2026",
    updatedIso: "2026-06-01",
    groups: [
      {
        title: "Оборудование",
        items: [
          {
            q: "Какое оборудование с ЧПУ поставляет ОСКОЛ-МЕТ-ТРЕЙД?",
            a: "На уровне направлений предлагаются вертикальные и горизонтальные обрабатывающие центры с ЧПУ, токарные центры с ЧПУ, шлифовальные станки с ЧПУ, гидравлические прессы, а также роботизированные системы сварки и покраски. Конкретная модель, конфигурация и уровень автоматизации согласуются под проект и фиксируются в коммерческом предложении и договоре.",
          },
          {
            q: "С какого года команда работает в отрасли?",
            a: "Отраслевая работа основателя и накопление опыта команды начались в 1994 году; эта дата не является датой начала деятельности текущего юридического лица ООО «ОСКОЛ-МЕТ-ТРЕЙД». Совокупные количественные показатели и точная дата регистрации юридического лица не публикуются до подтверждения общедоступными источниками.",
          },
          {
            q: "Предоставляется ли монтаж и гарантийное обслуживание?",
            a: "Условия гарантийного и постгарантийного обслуживания фиксируются в договоре под конкретный проект и зависят от поставщика оборудования и региона монтажа. Универсальные обязательства по сроку гарантии и круглосуточному сервису без утверждённого подтверждающего источника не заявляются.",
          },
        ],
      },
      {
        title: "Сырьё",
        items: [
          {
            q: "Какое металлургическое сырьё доступно к поставке?",
            a: "Категории поставок включают марганцевую руду, феррохром FeCr, никельсодержащий чугун (NPI), бентонит, железную руду и слябы из нержавеющей стали. Марка, химический состав, фракция, происхождение, объём и условия поставки определяются под конкретную партию и фиксируются в спецификации и договоре.",
          },
          {
            q: "Каковы условия поставки сырья?",
            a: "Работаем на условиях CIF, FOB и CPT. Минимальные объёмы заказа зависят от продукта. Свяжитесь с нами для коммерческого предложения.",
          },
          {
            q: "Как долго команда работает с поставщиками Юго-Восточной Азии?",
            a: "Отраслевая работа основателя и накопление опыта команды начались в 1994 году. Конкретные производственные партнёрства по каждому проекту согласуются в договоре; на сайте они не перечисляются без утверждённых публичных источников.",
          },
        ],
      },
      {
        title: "Компания и реквизиты",
        items: [
          {
            q: "Где зарегистрирована ОСКОЛ-МЕТ-ТРЕЙД?",
            a: "ООО «ОСКОЛ-МЕТ-ТРЕЙД» зарегистрировано в России. Юридический адрес: 309181, Белгородская область, г. Губкин, ул. Мира, 20, оф. 312/1. ИНН: 3127508337. ОГРН: 1033108702868.",
          },
          {
            q: "На каких языках работает компания?",
            a: "Русский, английский и китайский (путунхуа). Сайт доступен на всех трёх языках.",
          },
          {
            q: "Собирает ли сайт персональные данные?",
            a: "Нет. Сайт не использует веб-формы, аналитические трекеры или cookies для сбора данных. Вся коммуникация ведётся по телефону, e-mail и в мессенджерах. Персональные данные через сайт не собираются и не обрабатываются.",
          },
          {
            q: "Какие рынки охватывает международный опыт команды?",
            a: "Совокупный международный опыт команды и компаний, созданных основателем бизнеса, охватывает Россию, Беларусь, Казахстан, Китай, Индию, Индонезию, Израиль, Италию, Малайзию и Филиппины.",
          },
          {
            q: "Кто указан техническим экспертом ОСКОЛ-МЕТ-ТРЕЙД?",
            a: "Индивидуальные академические степени и учёные звания сотрудников не публикуются на сайте до появления утверждённого публичного или редактированного подтверждающего документа.",
          },
          {
            q: "Как запросить коммерческое предложение?",
            a: "Отправьте технические требования на e-mail 89090977174@mail.ru или напишите в WhatsApp на +7 909 097 71 74. Время работы: пн–пт 8:00–18:00, сб 9:00–15:00 по Москве.",
          },
        ],
      },
    ],
  },
  zh: {
    title: "常见问题 — 奥斯科尔-金属-贸易",
    description:
      "关于奥斯科尔-金属-贸易的12个常见问题：数控设备、冶金原材料、公司信息、市场和报价请求。",
    h1: "常见问题",
    intro:
      "关于数控设备、原材料供应及公司组织的12个事实性答复。内容以纯HTML形式呈现，便于搜索引擎和人工智能系统读取。",
    updated: "最后更新：2026年6月",
    updatedIso: "2026-06-01",
    groups: [
      {
        title: "设备",
        items: [
          {
            q: "奥斯科尔-金属-贸易供应哪些数控设备？",
            a: "在业务方向层面提供立式和卧式数控加工中心、数控车削中心、数控磨床、液压机以及机器人焊接与喷涂系统。具体型号、配置及自动化范围按项目商定，并在商务报价和合同中确定。",
          },
          {
            q: "团队自何时开始从事本行业？",
            a: "创始人的行业工作及团队经验积累始于 1994 年；该日期并非当前法人实体 OSKOL-MET-TRADE 有限责任公司的成立或经营起始日期。累计数量指标及法人实体的确切注册日期在获得可公开的证据前不予公布。",
          },
          {
            q: "是否提供安装和保修服务？",
            a: "保修和售后服务条款按每个具体项目在合同中约定，取决于设备供应方和安装所在地区。未获得批准的支持证据前，不作出统一的保修期限或 24/7 服务承诺。",
          },
        ],
      },
      {
        title: "原材料",
        items: [
          {
            q: "可供应哪些冶金原材料？",
            a: "我们供应锰矿、高碳铬铁FeCr60和FeCr52、含镍生铁（NPI）、膨润土、高质量冶金材料以及不锈钢板坯。",
          },
          {
            q: "原材料的交货条款是？",
            a: "我们按CIF、FOB和CPT条款工作。最小订货量取决于产品。请联系我们获取商业报价。",
          },
          {
            q: "团队与东南亚供应商合作多久了？",
            a: "创始人的行业工作及团队经验积累始于 1994 年。任何具体项目所使用的制造商合作关系均按合同单独约定；网站在无可公开证据的情况下不予列示。",
          },
        ],
      },
      {
        title: "公司与法律信息",
        items: [
          {
            q: "奥斯科尔-金属-贸易在哪里注册？",
            a: "OSKOL-MET-TRADE有限责任公司（ООО «ОСКОЛ-МЕТ-ТРЕЙД»）在俄罗斯注册。法定地址：309181，别尔哥罗德州古布金市米拉街20号312/1办公室。税号（INN）：3127508337。OGRN：1033108702868。",
          },
          {
            q: "公司使用哪些工作语言？",
            a: "俄语、英语和中文（普通话）。网站提供这三种语言版本。",
          },
          {
            q: "网站是否收集个人数据？",
            a: "不收集。本网站不使用网页表单、分析跟踪器或用于数据收集的cookies。所有沟通通过电话、电子邮件和即时通讯工具进行。本网站不收集或处理任何个人数据。",
          },
          {
            q: "团队的国际业务经验覆盖哪些市场？",
            a: "团队和创始人所创办企业的累计国际经验涵盖俄罗斯、白俄罗斯、哈萨克斯坦、中国、印度、印度尼西亚、以色列、意大利、马来西亚和菲律宾。",
          },
          {
            q: "OSKOL-MET-TRADE指定的技术专家是谁？",
            a: "在获得可公开或经过编辑的支持文件之前，网站不公布个人员工的学位或学术职称信息。",
          },
          {
            q: "如何申请商业报价？",
            a: "将技术要求发送至电子邮件 89090977174@mail.ru，或通过WhatsApp联系 +7 909 097 71 74。工作时间：周一至周五 8:00–18:00，周六 9:00–15:00（莫斯科时间）。",
          },
        ],
      },
    ],
  },
};

interface FaqPageProps {
  lang: Lang;
}

const FaqPage = ({ lang }: FaqPageProps) => {
  const c = content[lang];
  const allItems = c.groups.flatMap((g) => g.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: allItems.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };

  const path = lang === "ru" ? "/ru/faq" : lang === "en" ? "/en/faq" : "/zh/faq";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={c.title}
        description={c.description}
        language={lang}
        path={path}
        hreflangGroup="faq"
        structuredData={faqSchema}
      />
      <Header />
      <main id="main-content" className="flex-1 container mx-auto px-4 py-12 md:py-16">
        <article>
          <header className="max-w-3xl mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {c.h1}
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {c.intro}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              <time dateTime={c.updatedIso}>{c.updated}</time>
            </p>
          </header>

          <section
            aria-label="FAQ"
            itemScope
            itemType="https://schema.org/FAQPage"
            className="space-y-12"
          >
            {c.groups.map((group, gi) => (
              <section key={gi} aria-labelledby={`faq-group-${gi}`}>
                <h2
                  id={`faq-group-${gi}`}
                  className="text-2xl font-semibold text-foreground mb-4"
                >
                  {group.title}
                </h2>
                <div className="divide-y divide-border rounded-xl border border-border bg-card">
                  {group.items.map((item, i) => (
                    <details
                      key={i}
                      className="group p-5 md:p-6 [&_summary::-webkit-details-marker]:hidden"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                      open={gi === 0 && i === 0}
                    >
                      <summary
                        className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-foreground"
                        itemProp="name"
                      >
                        <h3 className="text-base font-semibold leading-snug text-foreground m-0">
                          {item.q}
                        </h3>
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
            ))}
          </section>

          <footer className="mt-12 text-sm text-muted-foreground">
            <time dateTime={c.updatedIso}>{c.updated}</time>
          </footer>
        </article>
      </main>
      <Footer language={lang} />
    </div>
  );
};

export default FaqPage;
