import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { HREFLANG_GROUPS, type SupportedLanguage } from '@/lib/siteMetadata';

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const languages: { code: SupportedLanguage; name: string; flag: string; homePath: string }[] = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺', homePath: '/' },
    { code: 'en', name: 'English', flag: '🇺🇸', homePath: '/en' },
    { code: 'zh', name: '中文', flag: '🇨🇳', homePath: '/zh' },
  ];

  const getCurrentLanguage = (): SupportedLanguage => {
    if (location.pathname.startsWith('/en')) return 'en';
    if (location.pathname.startsWith('/zh')) return 'zh';
    return 'ru';
  };

  const currentLang = getCurrentLanguage();
  const currentLanguage = languages.find((l) => l.code === currentLang);

  // Explicit route-equivalence map for pages that are intentionally excluded
  // from public hreflang metadata (e.g. temporary noindex Cases notices).
  // Keeping this separate from HREFLANG_GROUPS lets the language switch send
  // visitors to the equivalent language page without publishing hreflang.
  const EXPLICIT_EQUIVALENTS: ReadonlyArray<Record<SupportedLanguage, string>> = [
    { ru: '/cases', en: '/en/cases', zh: '/zh/cases' },
    // /ru/company is a duplicate alias that permanently redirects to /company.
    { ru: '/company', en: '/en/company', zh: '/zh/company' },
  ];

  // Resolve the equivalent path in the target language using known route groups
  // and the explicit non-hreflang equivalents above.
  const resolveTarget = (target: SupportedLanguage, homePath: string): string => {
    const pathname = location.pathname;
    for (const group of Object.values(HREFLANG_GROUPS)) {
      if (pathname === group.ru || pathname === group.en || pathname === group.zh) {
        return group[target];
      }
    }
    for (const group of EXPLICIT_EQUIVALENTS) {
      if (pathname === group.ru || pathname === group.en || pathname === group.zh) {
        return group[target];
      }
    }
    // Legacy /ru/company alias — treat as canonical /company for switching.
    if (pathname === '/ru/company') {
      return target === 'ru' ? '/company' : target === 'en' ? '/en/company' : '/zh/company';
    }
    return homePath;
  };

  const handleLanguageChange = (target: SupportedLanguage, homePath: string) => {
    navigate(resolveTarget(target, homePath));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background border border-border">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code, language.homePath)}
            className={`cursor-pointer hover:bg-muted ${
              currentLang === language.code ? 'bg-muted' : ''
            }`}
          >
            <span className="text-base mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
