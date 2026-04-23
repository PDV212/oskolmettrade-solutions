import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const COOKIE_BANNER_KEY = 'omt-cookie-banner-dismissed';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = window.localStorage.getItem(COOKIE_BANNER_KEY) === 'true';
    setIsVisible(!isDismissed);
  }, []);

  const handleClose = () => {
    window.localStorage.setItem(COOKIE_BANNER_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 rounded-lg border border-border bg-background/95 p-4 shadow-sm backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Сайт использует технические файлы cookie, необходимые для работы страниц. Рекламные и аналитические трекеры не используются.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Button asChild variant="outline" size="sm">
            <Link to="/privacy">Подробнее</Link>
          </Button>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Закрыть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;