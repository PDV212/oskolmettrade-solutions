import { Phone, Mail, MapPin, ArrowUp, Factory, Wrench, Flame, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/optimized-image';
import {
  companyIdentity,
  legalIdentifiers,
  t as tField,
} from '@/data/companyRegistry';

type Lang = 'ru' | 'en' | 'zh';

interface FooterProps {
  language?: Lang;
}

const translations = {
  ru: {
    sinceLabel: 'С',
    sinceSuffix: 'года',
    description:
      'Надежный партнер в области поставки металлообрабатывающего оборудования, металлургического сырья и собственного производства.',
    commercialEmail: 'Для коммерческих и технических запросов',
    directionsTitle: 'Наши направления',
    quickLinksTitle: 'Полезные ссылки',
    requisitesTitle: 'Реквизиты',
    requisitesText:
      'ООО «ОСКОЛ-МЕТ-ТРЕЙД» — статичная информационная B2B-визитка без веб-форм и без сбора персональных данных.',
    legalTitle: 'Юридические данные:',
    legalLines: [
      '• ООО «ОСКОЛ-МЕТ-ТРЕЙД»',
      '• ИНН: 3127508337',
      '• ОГРН: 1033108702868',
      '• Юр. адрес: 309181, Белгородская область, Губкин, ул. Мира, 20, оф. 312/1',
    ],
    foundedLabel: 'Год основания:',
    workingHoursTitle: 'Режим работы:',
    workdays: 'Пн-Пт',
    saturday: 'Сб',
    sundayOff: 'Вс: выходной',
    contactsButton: 'Перейти к контактам',
    backToTop: 'Наверх',
    copyright: (year: number) =>
      `© ${year} ООО «ОСКОЛ-МЕТ-ТРЕЙД» · ИНН 3127508337 · ОГРН 1033108702868`,
    foundedShort: 'Год основания: 1994',
    legalLinksTitle: 'Конфиденциальность и комплаенс',
    legalLinks: [
      { name: 'Информация об обработке данных', href: '/privacy' },
      { name: 'Согласие на обработку персональных данных', href: '/personal-data-consent' },
      { name: 'Использование cookie', href: '/cookies' },
    ],
    services: [
      'Металлообрабатывающее оборудование',
      'Металлургическое сырьё',
      'Металлургические печи',
      'Производство ВСЗ',
    ],
    quickLinks: [
      { name: 'О компании', href: '#directions' },
      { name: 'Преимущества', href: '#advantages' },
      { name: 'Контакты', href: '#contacts' },
      { name: 'Реквизиты компании', href: '/ru/company', isRoute: true },
    ],
  },
  en: {
    sinceLabel: 'Since',
    sinceSuffix: '',
    description:
      'Reliable B2B partner for metalworking equipment, metallurgical raw materials, and our own production lines.',
    commercialEmail: 'For commercial and technical inquiries',
    directionsTitle: 'Our directions',
    quickLinksTitle: 'Useful links',
    requisitesTitle: 'Company details',
    requisitesText:
      'OSKOL-MET-TRADE LLC is a static B2B information page with no web forms and no collection of personal data.',
    legalTitle: 'Legal information:',
    legalLines: [
      '• OSKOL-MET-TRADE LLC',
      '• INN: 3127508337',
      '• OGRN: 1033108702868',
      '• Registered address: 309181, Belgorod region, Gubkin, Mira str., 20, office 312/1',
    ],
    foundedLabel: 'Founded:',
    workingHoursTitle: 'Working hours:',
    workdays: 'Mon-Fri',
    saturday: 'Sat',
    sundayOff: 'Sun: closed',
    contactsButton: 'Go to contacts',
    backToTop: 'Top',
    copyright: (year: number) =>
      `© ${year} OSKOL-MET-TRADE LLC · INN 3127508337 · OGRN 1033108702868`,
    foundedShort: 'Founded in 1994',
    legalLinksTitle: 'Privacy & compliance',
    legalLinks: [
      { name: 'Personal data processing notice', href: '/en/privacy' },
      { name: 'Consent for personal data processing', href: '/en/personal-data-consent' },
      { name: 'Cookies policy', href: '/en/cookies' },
    ],
    services: [
      'Metalworking equipment',
      'Metallurgical raw materials',
      'Industrial furnaces',
      'VSZ in-house production',
    ],
    quickLinks: [
      { name: 'About the company', href: '#directions' },
      { name: 'Advantages', href: '#advantages' },
      { name: 'Contacts', href: '#contacts' },
      { name: 'Company details', href: '/en/company', isRoute: true },
    ],
  },
  zh: {
    sinceLabel: '自',
    sinceSuffix: '年起',
    description:
      'OSKOL-MET-TRADE 是金属加工设备、冶金原材料供应及自有生产的可靠 B2B 合作伙伴。',
    commercialEmail: '商务与技术咨询',
    directionsTitle: '业务方向',
    quickLinksTitle: '常用链接',
    requisitesTitle: '公司信息',
    requisitesText:
      'OSKOL-MET-TRADE 有限责任公司是一个静态 B2B 信息页面，不含任何网页表单，也不收集个人数据。',
    legalTitle: '法律信息：',
    legalLines: [
      '• OSKOL-MET-TRADE 有限责任公司',
      '• 纳税人识别号 (INN): 3127508337',
      '• 国家注册号 (OGRN): 1033108702868',
      '• 注册地址: 俄罗斯别尔哥罗德州古布金市 Mira 街 20 号 312/1 办公室，邮编 309181',
    ],
    foundedLabel: '成立年份：',
    workingHoursTitle: '工作时间：',
    workdays: '周一至周五',
    saturday: '周六',
    sundayOff: '周日：休息',
    contactsButton: '查看联系方式',
    backToTop: '返回顶部',
    copyright: (year: number) =>
      `© ${year} OSKOL-MET-TRADE LLC · INN 3127508337 · OGRN 1033108702868`,
    foundedShort: '成立于 1994 年',
    legalLinksTitle: '隐私与合规',
    legalLinks: [
      { name: '个人数据处理说明', href: '/zh/privacy' },
      { name: '个人数据处理同意书', href: '/zh/personal-data-consent' },
      { name: 'Cookie 使用政策', href: '/zh/cookies' },
    ],
    services: [
      '金属加工设备',
      '冶金原材料',
      '工业熔炉',
      'VSZ 自有生产',
    ],
    quickLinks: [
      { name: '关于公司', href: '#directions' },
      { name: '优势', href: '#advantages' },
      { name: '联系我们', href: '#contacts' },
      { name: '公司资料', href: '/zh/company', isRoute: true },
    ],
  },
} as const;

const serviceIcons = [Wrench, Factory, Flame, Building2];

const Footer = ({ language = 'ru' }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const t = translations[language];

  // Central registry-driven values (single source of truth)
  const registryShortName = tField(companyIdentity.shortName.value, language);
  const registryLegalName = tField(companyIdentity.legalName.value, language);
  const registryAddress = tField(companyIdentity.address.value, language);
  const registryFounded = companyIdentity.foundedYear.value;
  const registryINN = legalIdentifiers.INN.value;
  const registryOGRN = legalIdentifiers.OGRN.value;

  const legalLines =
    language === 'en'
      ? [
          `• ${registryLegalName}`,
          `• INN: ${registryINN}`,
          `• OGRN: ${registryOGRN}`,
          `• Registered address: ${registryAddress}`,
        ]
      : language === 'zh'
      ? [
          `• ${registryLegalName}`,
          `• 纳税人识别号 (INN): ${registryINN}`,
          `• 国家注册号 (OGRN): ${registryOGRN}`,
          `• 注册地址: ${registryAddress}`,
        ]
      : [
          `• ${registryLegalName}`,
          `• ИНН: ${registryINN}`,
          `• ОГРН: ${registryOGRN}`,
          `• Юр. адрес: ${registryAddress}`,
        ];

  const copyrightLine =
    language === 'en'
      ? `© ${currentYear} ${registryLegalName} · INN ${registryINN} · OGRN ${registryOGRN}`
      : language === 'zh'
      ? `© ${currentYear} ${registryLegalName} · INN ${registryINN} · OGRN ${registryOGRN}`
      : `© ${currentYear} ${registryLegalName} · ИНН ${registryINN} · ОГРН ${registryOGRN}`;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer
      className="bg-gradient-hero text-white relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-gear-rotate"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-gear-rotate"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 border border-white rounded-full animate-gear-rotate"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            {/* Section 1: Company identity + Section 5: Contact channels */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <OptimizedImage
                  src="/lovable-uploads/b3c22956-096b-4475-8619-90ea784e020b.png"
                  alt="OSKOL-MET-TRADE"
                  className="w-12 h-12 rounded-xl"
                  aspectRatio="square"
                  loading="lazy"
                  sizes="48px"
                  itemProp="logo"
                />
                <div>
                  <h3 className="text-xl font-bold" itemProp="name">
                    {registryShortName}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {t.sinceLabel} <time dateTime={String(registryFounded)} itemProp="foundingDate">{registryFounded}</time> {t.sinceSuffix}
                  </p>
                </div>

              </div>

              <p className="text-white/80 mb-6 leading-relaxed" itemProp="description">
                {t.description}
              </p>

              <div className="space-y-4" itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold" itemProp="telephone">+7 495 240 91 99</p>
                    <p className="text-white/70 text-sm" itemProp="telephone">+7 909 097 71 74</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <div>
                    <p className="font-semibold" itemProp="email">89090977174@mail.ru</p>
                    <p className="text-white/70 text-sm">{t.commercialEmail}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-5 h-5 text-accent mt-1" />
                  <div>
                    <p className="font-semibold" itemProp="streetAddress">
                      {registryAddress}
                    </p>
                  </div>

                </div>
              </div>
            </div>

            {/* Section 3: Navigation links — services */}
            <div>
              <h4 className="text-lg font-bold mb-6">{t.directionsTitle}</h4>
              <nav className="space-y-4" itemScope itemType="https://schema.org/SiteNavigationElement">
                {t.services.map((name, index) => {
                  const Icon = serviceIcons[index];
                  return (
                    <a
                      key={index}
                      href={['#equipment', '#materials', '#furnaces', '#manufacturing'][index]}
                      className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors group"
                      itemProp="url"
                    >
                      <Icon className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                      <span className="text-sm" itemProp="name">{name}</span>
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Section 3: Quick navigation + Section 4: Legal & compliance */}
            <div>
              <h4 className="text-lg font-bold mb-6">{t.quickLinksTitle}</h4>
              <nav className="space-y-3 mb-8" itemScope itemType="https://schema.org/SiteNavigationElement">
                {t.quickLinks.map((link, index) =>
                  'isRoute' in link && link.isRoute ? (
                    <Link
                      key={index}
                      to={link.href}
                      className="block text-white/80 hover:text-accent transition-colors text-sm"
                      itemProp="url"
                    >
                      <span itemProp="name">{link.name}</span>
                    </Link>
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-white/80 hover:text-accent transition-colors text-sm"
                      itemProp="url"
                    >
                      <span itemProp="name">{link.name}</span>
                    </a>
                  )
                )}
              </nav>

              <h4 className="text-lg font-bold mb-4">{t.legalLinksTitle}</h4>
              <nav className="space-y-3 mb-8">
                {t.legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="block text-white/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div>
                <h5 className="font-semibold mb-3">{t.workingHoursTitle}</h5>
                <div className="space-y-1 text-sm text-white/70" itemScope itemType="https://schema.org/OpeningHoursSpecification">
                  <p>{t.workdays}: <span>8:00</span> - <span>18:00</span></p>
                  <p>{t.saturday}: <span>9:00</span> - <span>15:00</span></p>
                  <p>{t.sundayOff}</p>
                </div>
              </div>
            </div>

            {/* Section 2: Legal details */}
            <div>
              <h4 className="text-lg font-bold mb-6">{t.requisitesTitle}</h4>
              <p className="text-white/80 mb-6 text-sm">{t.requisitesText}</p>

              <div className="space-y-4">
                <Button
                  className="w-full bg-accent hover:bg-accent-muted text-white font-semibold"
                  onClick={() => {
                    const element = document.querySelector('#contacts');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t.contactsButton}
                </Button>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <h5 className="font-semibold mb-2">{t.legalTitle}</h5>
                <div className="space-y-1 text-sm text-white/80">
                  {t.legalLines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Copyright */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-white/70 text-sm">{t.copyright(currentYear)}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-xs text-white/60">
                  <span>{t.foundedShort}</span>
                </div>
              </div>

              <Button
                onClick={scrollToTop}
                variant="outline"
                size="sm"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <ArrowUp className="w-4 h-4 mr-2" />
                {t.backToTop}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
