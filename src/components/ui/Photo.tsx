import type { MediaImage } from '../../data/media';
import { cn } from '../../lib/cn';

interface PhotoProps {
  image: MediaImage;
  /** Classes merged onto the <img> — size the wrapper, not this. */
  className?: string;
  /** Responsive sizes hint for the browser's srcset selection. */
  sizes?: string;
  /** Load eagerly with a high fetch priority (above-the-fold art only). */
  priority?: boolean;
}

/** Candidate widths for the responsive srcset, in CSS pixels. */
const SRCSET_WIDTHS = [640, 960, 1280, 1600, 2000];

function buildUrl(base: string, width: number, quality: number) {
  return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

/**
 * Responsive, lazy-loaded photograph served from the Unsplash CDN.
 * Renders with `object-cover` to fill its (sized) parent, and carries
 * intrinsic width/height so the browser reserves space before load.
 */
export function Photo({ image, className, sizes = '100vw', priority = false }: PhotoProps) {
  const { src, alt, width, height } = image;

  return (
    <img
      src={buildUrl(src, 1280, 80)}
      srcSet={SRCSET_WIDTHS.map((w) => `${buildUrl(src, w, 78)} ${w}w`).join(', ')}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn('h-full w-full object-cover', className)}
    />
  );
}
