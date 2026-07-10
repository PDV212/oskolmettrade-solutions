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

  // Resolve the equivalent path in the target language using known route groups.
  const resolveTarget = (target: SupportedLanguage, homePath: string): string => {
    const pathname = location.pathname;
    for (const group of Object.values(HREFLANG_GROUPS)) {
      if (pathname === group.ru || pathname === group.en || pathname === group.zh) {
        return group[target];
      }
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
