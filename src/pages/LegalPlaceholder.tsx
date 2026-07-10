import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

type Lang = 'ru' | 'en' | 'zh';
type Topic = 'privacy' | 'consent' | 'cookies';

interface Props {
  lang: Lang;
  topic: Topic;
}

const SITE = 'https://www.xn-----llccbycikqb3afub.xn--p1ai';

const content: Record<Topic, Record<Lang, { title: string; intro: string; body: string[] }>> = {
  privacy: {
    ru: {
      title: 'Информация об обработке данных',
      intro:
        'На сайте отсутствуют формы обратной связи, рекламные трекеры и подключённые компанией системы веб-аналитики. Для доставки содержимого и обеспечения безопасности хостинг-провайдер может обрабатывать необходимые технические данные. При переходе по ссылкам на email, WhatsApp, WeChat или Яндекс Карты применяются правила соответствующего внешнего сервиса.',
      body: [],
    },
    en: {
      title: 'Personal data processing notice',
      intro:
        'The website contains no contact forms, advertising trackers or web analytics systems enabled by the company. The hosting provider may process technical data required to deliver content and maintain security. When following links to email, WhatsApp, WeChat or Yandex Maps, the respective external service rules apply.',
      body: [],
    },
    zh: {
      title: '个人数据处理说明',
      intro:
        '本网站不含联系表单、广告跟踪器或由本公司启用的网站分析系统。托管服务商可能会处理提供网站内容和保障安全所必需的技术数据。当访问电子邮件、WhatsApp、微信或Yandex地图链接时，适用相应外部服务的规则。',
      body: [],
    },
  },
  consent: {
    ru: {
      title: 'Согласие на обработку персональных данных',
      intro:
        'На сайте нет форм для сбора персональных данных, поэтому отдельное согласие через сайт не собирается.',
      body: [
        'Если вы добровольно обращаетесь по телефону, электронной почте или в WhatsApp, применяются правила соответствующего внешнего сервиса.',
      ],
    },
    en: {
      title: 'Consent for personal data processing',
      intro:
        'The website has no forms for collecting personal data, so no separate consent is collected via the website.',
      body: [
        'If you voluntarily reach out by phone, email or WhatsApp, the rules of the respective external service apply.',
      ],
    },
    zh: {
      title: '个人数据处理同意书',
      intro:
        '本网站不含用于收集个人数据的表单，因此不会通过本网站单独收集同意。',
      body: [
        '如您主动通过电话、电子邮件或WhatsApp联系我们，则适用相应外部服务的规则。',
      ],
    },
  },
  cookies: {
    ru: {
      title: 'Использование файлов cookie',
      intro:
        'Сайт не устанавливает собственных cookie для аналитики или рекламы. Хостинг-провайдер и браузер могут использовать технические cookie/локальное хранилище, необходимые для корректной работы страниц и безопасности.',
      body: [
        'Вы можете отключить cookie в настройках браузера — это может повлиять на корректность отображения сайта.',
      ],
    },
    en: {
      title: 'Cookies policy',
      intro:
        'The website does not set its own cookies for analytics or advertising. The hosting provider and the browser may use technical cookies or local storage required for the pages to function correctly and securely.',
      body: [
        'You may disable cookies in your browser settings — this may affect how the website is displayed.',
      ],
    },
    zh: {
      title: 'Cookie 使用政策',
      intro:
        '本网站不设置用于分析或广告的自有 cookie。托管服务商和浏览器可能会使用页面正常运行和安全所必需的技术性 cookie 或本地存储。',
      body: [
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
  // Consent page is legacy — hide from search indexes.
  if (topic === 'consent' && typeof document !== 'undefined') {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'robots');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', 'noindex, nofollow');
  }
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${c.title} | OSKOL-MET-TRADE`}
        description={c.intro}
        language={lang}
        canonicalUrl={`${SITE}${pathFor(topic, lang)}`}
      />
      <Header language={lang} />
      <main id="main-content" className="py-16">
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
