import OptimizedImage from '@/components/ui/optimized-image';
import staticMapImage from '@/assets/static-map-yandex.png';

interface MapComponentProps {
  language?: 'ru' | 'en' | 'zh';
}

const mapContent = {
  ru: {
    alt: 'Статичная карта проезда к офису ОСКОЛ-МЕТ-ТРЕЙД',
    title: 'Адрес офиса в Москве',
    address: '109004, г. Москва, ул. А. Солженицына, д. 40, стр. 1',
    linkLabel: 'Открыть в Яндекс.Картах',
  },
  en: {
    alt: 'Static location map of the OSKOL-MET-TRADE office',
    title: 'Moscow office address',
    address: '109004, Moscow, Aleksandra Solzhenitsyna Street, 40 building 1',
    linkLabel: 'Open in Yandex Maps',
  },
  zh: {
    alt: '奥斯科尔-金属-贸易办公室静态地图',
    title: '莫斯科办公室地址',
    address: '109004，莫斯科，亚历山大·索尔仁尼琴街40号1栋',
    linkLabel: '在 Yandex 地图中打开',
  },
} as const;

const mapLink = 'https://yandex.ru/maps/?text=109004%2C+%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%83%D0%BB.+%D0%90.+%D0%A1%D0%BE%D0%BB%D0%B6%D0%B5%D0%BD%D0%B8%D1%86%D1%8B%D0%BD%D0%B0%2C+%D0%B4.+40%2C+%D1%81%D1%82%D1%80.+1';

const MapComponent = ({ language = 'ru' }: MapComponentProps) => {
  const content = mapContent[language];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <OptimizedImage
          src={staticMapImage}
          alt={content.alt}
          className="w-full h-auto"
          aspectRatio="video"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="space-y-2">
        <p className="text-base font-semibold text-foreground">{content.title}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{content.address}</p>
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-sm font-medium text-primary transition-colors hover:text-primary-hover"
        >
          {content.linkLabel}
        </a>
      </div>
    </div>
  );
};

export default MapComponent;