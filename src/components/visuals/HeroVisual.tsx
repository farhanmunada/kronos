import { media } from '../../data/media';
import { Photo } from '../ui/Photo';

/**
 * HeroVisual — editorial split composition built from two photographs.
 * Left: the Monolith-X exterior under a storm sky. Right: the Vapour-Line
 * cliffside villa. Both panels stay intentionally caption-first so the
 * image reads as documentation, not decoration.
 */
export function HeroVisual() {
  return (
    <div className="grid grid-cols-1 border border-border md:grid-cols-2">
      {/* Panel 01 — Monolith-X ------------------------------------------ */}
      <figure className="media-zoom relative aspect-[4/5] overflow-hidden border-b border-border bg-surface md:border-b-0 md:border-r">
        <Photo image={media.heroMonolith} sizes="(min-width: 768px) 50vw, 100vw" priority />
        {/* Scrim keeps the caption legible over any exposure */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
          aria-hidden="true"
        />
        <figcaption className="absolute left-5 top-5 z-10 eyebrow text-white">
          Fig. 01 — Monolith-X / Alpine
        </figcaption>
      </figure>

      {/* Panel 02 — Vapour-Line ----------------------------------------- */}
      <figure className="media-zoom relative aspect-[4/5] overflow-hidden bg-ink">
        <Photo image={media.heroCliffside} sizes="(min-width: 768px) 50vw, 100vw" priority />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
          aria-hidden="true"
        />
        <figcaption className="absolute left-5 top-5 z-10 eyebrow text-white">
          Fig. 02 — Vapour-Line / Cliffside
        </figcaption>
      </figure>
    </div>
  );
}
