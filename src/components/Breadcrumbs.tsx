import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbsProps {
  language?: string;
}

const Breadcrumbs = ({ language = 'ru' }: BreadcrumbsProps) => {
  const location = useLocation();
  // Normalize trailing slash so SSR path ("/en") and browser path ("/en/",
  // as produced by directory-index serving) resolve identically. Without
  // this, the comparisons below diverge between server and client render
  // and React reports a hydration mismatch (#418) on /en and /zh.
  const pathname =
    location.pathname.length > 1 && location.pathname.endsWith('/')
      ? location.pathname.slice(0, -1)
      : location.pathname;

  const getHomeText = () => {
    switch (language) {
      case 'en': return 'Home';
      case 'zh': return '首页';
      default: return 'Главная';
    }
  };

  const getCurrentPageText = () => {
    switch (pathname) {
      case '/en': return 'English';
      case '/zh': return '中文';
      default: return '';
    }
  };

  // Don't show breadcrumbs on home page
  if (pathname === '/') {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Home className="w-4 h-4 mr-1" />
              {getHomeText()}
            </Link>
          </li>
          
          {getCurrentPageText() && (
            <>
              <li>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </li>
              <li>
                <span className="text-foreground font-medium">
                  {getCurrentPageText()}
                </span>
              </li>
            </>
          )}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;