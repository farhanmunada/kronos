import { projectImages } from '../../data/media';
import { Photo } from '../ui/Photo';

interface ProjectVisualProps {
  id: string;
  title: string;
}

/**
 * Photographic visual for each commission, keyed by project id.
 * Renders nothing but the image — the parent <figure> owns the frame.
 */
export function ProjectVisual({ id, title }: ProjectVisualProps) {
  const image = projectImages[id];

  if (!image) {
    return (
      <div className="flex aspect-[4/3] items-center justify-center bg-ink">
        <span className="eyebrow text-white/60">{title.toUpperCase()} — IMAGE PENDING</span>
      </div>
    );
  }

  return (
    <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[360px]">
      <Photo image={image} sizes="(min-width: 1024px) 60vw, 100vw" />
    </div>
  );
}
