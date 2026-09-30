import { podImages } from '../../data/media';
import { Photo } from '../ui/Photo';

interface PodVisualProps {
  id: string;
  name: string;
}

/**
 * Photographic visual for each pod, keyed by pod id.
 * Falls back to a labelled empty frame if an image is not registered,
 * so the tab panel never collapses.
 */
export function PodVisual({ id, name }: PodVisualProps) {
  const image = podImages[id];

  if (!image) {
    return (
      <div className="flex h-full min-h-[280px] items-center justify-center bg-surface">
        <span className="eyebrow">{name.toUpperCase()} — IMAGE PENDING</span>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[280px] w-full">
      <Photo image={image} sizes="(min-width: 1024px) 55vw, 100vw" className="absolute inset-0" />
    </div>
  );
}
