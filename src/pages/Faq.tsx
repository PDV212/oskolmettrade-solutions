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
            a: "We supply vertical and horizontal CNC machining centers (VMC-850 and similar), CNC turning centers (CNC-320), CNC grinding machines, hydraulic presses, and fully automated robotic welding and painting lines with AI-trajectory planning.",
          },
          {
            q: "Since when has the company been supplying equipment?",
            a: "Equipment supply operations began in 2015. Over 2,500 machines have been delivered to enterprises in Russia, Kazakhstan, Belarus, China, and India.",
          },
          {
            q: "Do you provide installation and warranty service?",
            a: "Yes. Post-warranty service is provided through an accredited enterprise in the Ural region. Technical support is available 24/7.",
          },
        ],
      },
      {
        title: "Raw Materials",
        items: [
          {
            q: "What metallurgical raw materials are available?",
            a: "We supply manganese ore, high-carbon ferrochrome FeCr60 and FeCr52, nickel-containing pig iron (NPI), bentonite, high-quality metallurgical materials, and stainless steel slabs.",
          },
          {
            q: "What are the delivery terms for raw materials?",
            a: "We work on CIF, FOB, and CPT terms. Minimum order quantities depend on the product. Contact us for a commercial proposal.",
          },
          {
            q: "How long has the company worked with Southeast Asian suppliers?",
            a: "Since 1994 — over 25 years of direct relationships with manufacturers in India, China, and Southeast Asia.",
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
            q: "What markets does the company serve?",
            a: "Primary markets: Russia, Kazakhstan, Belarus. Export markets: China, India. The company has experience with CIS and international logistics.",
          },
          {
            q: "Who are the technical experts at OSKOL-MET-TRADE?",
            a: "Our technical team includes specialists holding the academic title of Candidate of Technical Sciences (PhD equivalent) in metallurgical engineering, affiliated with leading Russian technical universities.",
          },
          {
            q: "How do I request a commercial proposal?",
            a: "Send your technical requirements by email to 89090977174@mail.ru or contact us via WhatsApp at +7 909 097 71 74. Working hours: Mon–Fri 8:00–18:00, Sat 9:00–15:00 Moscow time.",
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
            a: "Поставляем вертикальные и горизонтальные обрабатывающие центры с ЧПУ (VMC-850 и аналоги), токарные центры с ЧПУ (CNC-320), шлифовальные станки с ЧПУ, гидравлические прессы и полностью автоматизированные роботизированные линии сварки и покраски с AI-расчётом траекторий.",
          },
          {
            q: "С какого года компания поставляет оборудование?",
            a: "Поставки оборудования начались в 2015 году. Более 2 500 станков отгружено предприятиям в России, Казахстане, Беларуси, Китае и Индии.",
          },
          {
            q: "Предоставляется ли монтаж и гарантийное обслуживание?",
            a: "Да. Постгарантийное обслуживание выполняется через аккредитованное предприятие на Урале. Техническая поддержка доступна 24/7.",
          },
        ],
      },
      {
        title: "Сырьё",
        items: [
          {
            q: "Какое металлургическое сырьё доступно к поставке?",
            a: "Поставляем марганцевую руду, высокоуглеродистый феррохром FeCr60 и FeCr52, никельсодержащий чугун (NPI), бентонит, высококачественные металлургические материалы и слябы из нержавеющей стали.",
          },
          {
            q: "Каковы условия поставки сырья?",
            a: "Работаем на условиях CIF, FOB и CPT. Минимальные объёмы заказа зависят от продукта. Свяжитесь с нами для коммерческого предложения.",
          },
          {
            q: "Как долго компания работает с поставщиками Юго-Восточной Азии?",
            a: "С 1994 года — более 25 лет прямых отношений с производителями в Индии, Китае и странах ЮВА.",
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
            q: "Какие рынки обслуживает компания?",
            a: "Основные рынки: Россия, Казахстан, Беларусь. Экспортные рынки: Китай, Индия. Компания имеет опыт работы с СНГ и международной логистикой.",
          },
          {
            q: "Кто технические эксперты ОСКОЛ-МЕТ-ТРЕЙД?",
            a: "В технической команде — специалисты с учёной степенью кандидата технических наук в области металлургии, связанные с ведущими российскими техническими вузами.",
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
            a: "我们供应立式和卧式数控加工中心（VMC-850及同类）、数控车床中心（CNC-320）、数控磨床、液压机以及具有AI轨迹规划的全自动机器人焊接和喷漆生产线。",
          },
          {
            q: "公司从何时开始供应设备？",
            a: "设备供应业务始于2015年。已向俄罗斯、哈萨克斯坦、白俄罗斯、中国和印度的企业交付了超过2500台机床。",
          },
          {
            q: "是否提供安装和保修服务？",
            a: "是的。售后服务通过乌拉尔地区的认证企业提供。技术支持7×24小时可用。",
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
            q: "公司与东南亚供应商合作多久了？",
            a: "自1994年起——与印度、中国及东南亚生产商建立直接关系已超过25年。",
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
            q: "公司服务哪些市场？",
            a: "主要市场：俄罗斯、哈萨克斯坦、白俄罗斯。出口市场：中国、印度。公司具有独联体及国际物流经验。",
          },
          {
            q: "奥斯科尔-金属-贸易的技术专家是谁？",
            a: "我们的技术团队包括拥有冶金工程领域技术科学副博士（相当于PhD）学位的专家，他们与俄罗斯领先的技术大学有合作关系。",
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

  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://oskolmettrade-solutions.lovable.app";
  const path = lang === "ru" ? "/ru/faq" : lang === "en" ? "/en/faq" : "/zh/faq";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title={c.title}
        description={c.description}
        language={lang}
        canonicalUrl={`${origin}${path}`}
        structuredData={faqSchema}
      />
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12 md:py-16">
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
