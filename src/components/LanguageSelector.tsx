import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺', path: '/' },
    { code: 'en', name: 'English', flag: '🇺🇸', path: '/en' },
    { code: 'zh', name: '中文', flag: '🇨🇳', path: '/zh' }
  ];

  const getCurrentLanguage = () => {
    if (location.pathname.startsWith('/en')) return 'en';
    if (location.pathname.startsWith('/zh')) return 'zh';
    return 'ru';
  };

  const currentLang = getCurrentLanguage();
  const currentLanguage = languages.find(lang => lang.code === currentLang);

  const handleLanguageChange = (path: string, newLang: string) => {
    navigate(path);
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
            onClick={() => handleLanguageChange(language.path, language.code)}
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