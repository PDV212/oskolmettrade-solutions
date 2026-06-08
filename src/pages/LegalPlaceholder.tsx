import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

type Lang = 'ru' | 'en' | 'zh';
type Topic = 'privacy' | 'consent' | 'cookies';

interface Props {
  lang: Lang;
  topic: Topic;
}

const SITE = 'https://oskolmettrade-solutions.lovable.app';

const content: Record<Topic, Record<Lang, { title: string; intro: string; body: string[] }>> = {
  privacy: {
    ru: {
      title: 'Информация об обработке персональных данных',
      intro:
        'Сайт ООО «ОСКОЛ-МЕТ-ТРЕЙД» — статичный B2B-ресурс без форм сбора данных. Документ будет дополнен.',
      body: [
        'Сайт не содержит форм обратной связи, регистрации, корзины или иных механизмов сбора персональных данных.',
        'Используются только технические файлы, необходимые для отображения страниц.',
        'Полный текст политики будет опубликован в ближайшее время.',
      ],
    },
    en: {
      title: 'Personal data processing notice',
      intro:
        'The OSKOL-MET-TRADE LLC website is a static B2B information resource that does not collect personal data. This page is a placeholder and will be completed.',
      body: [
        'The website does not contain feedback forms, registration, shopping cart, or any other mechanism for collecting personal data.',
        'Only technical files required to display the pages are used.',
        'The full policy text will be published soon.',
      ],
    },
    zh: {
      title: '个人数据处理说明',
      intro:
        'OSKOL-MET-TRADE 有限责任公司网站为静态 B2B 信息资源，不收集个人数据。本页面为占位内容，稍后将完善。',
      body: [
        '本网站不包含反馈表单、注册、购物车或任何其他个人数据收集机制。',
        '仅使用展示页面所需的技术文件。',
        '完整政策文本将于近期公布。',
      ],
    },
  },
  consent: {
    ru: {
      title: 'Согласие на обработку персональных данных',
      intro:
        'Документ-заглушка. Полный текст согласия на обработку персональных данных будет опубликован позднее.',
      body: [
        'Поскольку сайт не содержит форм, согласие требуется только при добровольном обращении по телефону, e-mail или мессенджерам.',
        'Полный текст согласия и правовые основания обработки (ст. 6 ФЗ-152) будут добавлены здесь.',
      ],
    },
    en: {
      title: 'Consent for personal data processing',
      intro:
        'Placeholder document. The full consent text will be published here later.',
      body: [
        'Since the website has no forms, consent is only required when you voluntarily reach out via phone, email or messengers.',
        'The full consent wording and legal basis for processing will be added here.',
      ],
    },
    zh: {
      title: '个人数据处理同意书',
      intro: '占位文档。完整的同意书文本稍后将在此发布。',
      body: [
        '由于网站不含任何表单，仅当您主动通过电话、电子邮件或即时通讯工具联系我们时才需要同意。',
        '完整的同意书文本及处理的法律依据将于此处补充。',
      ],
    },
  },
  cookies: {
    ru: {
      title: 'Использование файлов cookie',
      intro:
        'На сайте используются исключительно технические cookie, необходимые для корректной работы страниц. Документ будет дополнен.',
      body: [
        'Рекламные пиксели, системы веб-аналитики и сторонние трекеры не подключены.',
        'Вы можете отключить cookie в настройках браузера — это может повлиять на корректность отображения сайта.',
      ],
    },
    en: {
      title: 'Cookies policy',
      intro:
        'The website uses only technical cookies required for the pages to function correctly. This page is a placeholder and will be completed.',
      body: [
        'No advertising pixels, analytics systems or third-party trackers are connected.',
        'You may disable cookies in your browser settings — this may affect how the website is displayed.',
      ],
    },
    zh: {
      title: 'Cookie 使用政策',
      intro:
        '本网站仅使用页面正常运行所需的技术性 cookie。本页面为占位内容，稍后将完善。',
      body: [
        '未接入任何广告像素、网站分析系统或第三方跟踪器。',
        '您可以在浏览器设置中禁用 cookie，这可能会影响网站的显示效果。',
      ],
    },
  },
};

const pathFor = (topic: Topic, lang: Lang) => {
  const slug = topic === 'privacy' ? 'privacy' : topic === 'consent' ? 'personal-data-consent' : 'cookies';
  return lang === 'ru' ? `/${slug}` : `/${lang}/${slug}`;
};

const LegalPlaceholder = ({ lang, topic }: Props) => {
  const c = content[topic][lang];
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${c.title} | OSKOL-MET-TRADE`}
        description={c.intro}
        language={lang}
        canonicalUrl={`${SITE}${pathFor(topic, lang)}`}
      />
      <Header language={lang} />
      <main className="py-16">
        <section className="container mx-auto max-w-4xl px-4">
          <article className="space-y-6 rounded-lg border border-border bg-card p-6 shadow-sm sm:p-8">
            <h1 className="heading-section text-left">{c.title}</h1>
            <p className="text-base leading-relaxed text-muted-foreground">{c.intro}</p>
            <div className="space-y-3">
              {c.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
              ))}
            </div>
          </article>
        </section>
      </main>
      <Footer language={lang} />
    </div>
  );
};

export default LegalPlaceholder;
