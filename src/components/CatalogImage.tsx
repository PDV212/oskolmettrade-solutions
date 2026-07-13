// Responsive catalog image using AVIF/WebP/JPEG derivatives generated from
// the original 1024×1024 source illustrations under src/assets/catalog/.
// Vite hashes the URLs and the same files are emitted by both client and SSR
// builds under /assets/images/. No local retouching is applied — derivatives
// are uniform Lanczos resizes of the source, with EXIF stripped.

const variantUrls = import.meta.glob(
  '@/assets/catalog/*.{avif,webp,jpg}',
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const WIDTHS = [480, 800, 1024] as const;

type Fmt = 'avif' | 'webp' | 'jpg';

function urlFor(name: string, w: number, fmt: Fmt): string | undefined {
  const suffix = `/catalog/${name}-${w}.${fmt}`;
  const key = Object.keys(variantUrls).find((k) => k.endsWith(suffix));
  return key ? variantUrls[key] : undefined;
}

function srcset(name: string, fmt: Fmt): string {
  return WIDTHS
    .map((w) => {
      const u = urlFor(name, w, fmt);
      return u ? `${u} ${w}w` : null;
    })
    .filter(Boolean)
    .join(', ');
}

interface Props {
  name: string;
  alt: string;
  /** Sizes attribute matching the card layout. */
  sizes?: string;
  /** Intrinsic aspect ratio of the source (1 for the current square set). */
  aspectRatio?: number;
  className?: string;
}

const CatalogImage = ({
  name,
  alt,
  sizes = '(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 30vw',
  aspectRatio = 1,
  className = '',
}: Props) => {
  const fallback = urlFor(name, 800, 'jpg') ?? urlFor(name, 1024, 'jpg');
  if (!fallback) {
    // Unknown catalog image name — render nothing rather than a broken img.
    return null;
  }
  const intrinsicW = 1024;
  const intrinsicH = Math.round(intrinsicW / aspectRatio);
  return (
    <picture>
      <source type="image/avif" srcSet={srcset(name, 'avif')} sizes={sizes} />
      <source type="image/webp" srcSet={srcset(name, 'webp')} sizes={sizes} />
      <img
        src={fallback}
        srcSet={srcset(name, 'jpg')}
        sizes={sizes}
        width={intrinsicW}
        height={intrinsicH}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={className}
      />
    </picture>
  );
};

export default CatalogImage;
