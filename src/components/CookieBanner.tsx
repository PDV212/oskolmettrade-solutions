import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const COOKIE_CONSENT_KEY = 'cookieConsent';

type Lang = 'ru' | 'en' | 'zh';

const detectLang = (pathname: string): Lang => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/zh')) return 'zh';
  return 'ru';
};

const copy = {
  ru: {
    message:
      'Мы используем файлы cookie для работы сайта. Подробнее — в Политике конфиденциальности.',
    accept: 'Принять все',
    necessary: 'Только необходимые',
    more: 'Подробнее',
    privacyHref: '/privacy',
  },
  en: {
    message: 'We use cookies to operate this site. See our Privacy Policy.',
    accept: 'Accept all',
    necessary: 'Only necessary',
    more: 'More',
    privacyHref: '/en/privacy',
  },
  zh: {
    message: '我们使用 Cookie 来运营本网站。请参阅我们的隐私政策。',
    accept: '全部接受',
    necessary: '仅必要',
    more: '更多',
    privacyHref: '/zh/privacy',
  },
} as const;

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const lang = detectLang(location.pathname);
  const t = copy[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    setIsVisible(!stored);
  }, []);

  const store = (choice: 'all' | 'necessary') => {
    window.localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ choice, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-4 z-40 px-4"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-lg border border-border bg-background/95 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">{t.message}</p>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to={t.privacyHref}>{t.more}</Link>
          </Button>
          <Button variant="outline" size="sm" onClick={() => store('necessary')}>
            {t.necessary}
          </Button>
          <Button variant="default" size="sm" onClick={() => store('all')}>
            {t.accept}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
