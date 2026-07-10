import { useLocation } from 'react-router-dom';

const labels = {
  ru: 'Перейти к основному содержанию',
  en: 'Skip to main content',
  zh: '跳至主要内容',
} as const;

const detectLang = (pathname: string): 'ru' | 'en' | 'zh' => {
  if (pathname.startsWith('/en')) return 'en';
  if (pathname.startsWith('/zh')) return 'zh';
  return 'ru';
};

const SkipLink = () => {
  const { pathname } = useLocation();
  const label = labels[detectLang(pathname)];
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg"
    >
      {label}
    </a>
  );
};

export default SkipLink;
