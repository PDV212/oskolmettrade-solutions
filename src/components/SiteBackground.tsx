import heroImage from '@/assets/hero-industrial.jpg';

/**
 * Global site background layer.
 *
 * Renders the accepted homepage Hero source once, fixed to the viewport,
 * behind every route. Route content sits on top; individual page wrappers
 * use bg-transparent (or their own translucent surfaces) so the image is
 * visible without overwhelming legibility.
 *
 * SSR-safe: no window/document access, deterministic markup.
 * Cache-friendly: same imported URL as the Hero — the browser reuses the
 * cached response and does not re-download.
 * A restrained overlay guarantees readable text on every route, and a
 * solid fallback color underneath prevents blank-flash if the image is
 * still loading, fails, or is served from a stale cache.
 */
const SiteBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none bg-background"
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        // Low priority — the Hero <img> takes precedence for first paint;
        // this reuses the same cached asset.
        // @ts-expect-error fetchpriority is a valid HTML attribute
        fetchpriority="low"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      {/* Readability overlay: strong enough for body copy on any route,
          light enough to keep the industrial imagery visible. */}
      <div className="absolute inset-0 bg-background/85" />
    </div>
  );
};

export default SiteBackground;
