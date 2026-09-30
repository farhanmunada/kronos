/**
 * Photographic asset registry for the landing page.
 *
 * Every image is sourced from Unsplash and covered by the Unsplash License
 * (free for commercial and non-commercial use, no permission required).
 * `src` holds the Unsplash CDN base path WITHOUT query parameters — the
 * <Photo /> component appends format/sizing parameters at render time so
 * transport concerns stay out of this file.
 */
export interface MediaImage {
  /** Unsplash CDN base path, e.g. https://images.unsplash.com/photo-... */
  src: string;
  /** Intrinsic dimensions, used to reserve layout space and avoid CLS. */
  width: number;
  height: number;
  /** Descriptive alternative text for assistive technology. */
  alt: string;
  credit: { name: string; url: string };
}

export const media = {
  heroMonolith: {
    src: 'https://images.unsplash.com/photo-1782392429107-fd725ad8d10a',
    width: 2500,
    height: 2500,
    alt: 'A monolithic dark dwelling standing on rocky terrain beneath a heavy storm sky',
    credit: { name: 'Maverick Frame', url: 'https://unsplash.com/@maverickframe' },
  },
  heroCliffside: {
    src: 'https://images.unsplash.com/photo-1748741765391-33fffa0e548d',
    width: 4500,
    height: 3000,
    alt: 'A cantilevered modern villa perched on a cliffside',
    credit: { name: 'mostafa meraji', url: 'https://unsplash.com/@mostafa_meraji' },
  },
  podVapourLine: {
    src: 'https://images.unsplash.com/photo-1781795485048-3d98b53632db',
    width: 2176,
    height: 2560,
    alt: 'A modern concrete dwelling raised on slender stilts above rocky terrain',
    credit: { name: 'Maverick Frame', url: 'https://unsplash.com/@maverickframe' },
  },
  podMonolithX: {
    src: 'https://images.unsplash.com/photo-1663349348136-9aee7145766e',
    width: 4719,
    height: 3464,
    alt: 'A sealed modern building standing alone on a snow-covered alpine slope',
    credit: { name: 'Alphonse Dupuis', url: 'https://unsplash.com/@dalfo' },
  },
  projectVolcanicAtrium: {
    src: 'https://images.unsplash.com/photo-1777451406878-a58bc6c4a69f',
    width: 4183,
    height: 3141,
    alt: 'A modern residence framed by a lavender field with an active volcano behind it',
    credit: { name: 'Regi Munandar', url: 'https://unsplash.com/@regimunandar' },
  },
  projectFjallSanctuary: {
    src: 'https://images.unsplash.com/photo-1772550609917-f596281fa147',
    width: 4000,
    height: 2667,
    alt: 'A low-profile structure on a snow-covered Nordic coastline beside dark water',
    credit: { name: 'Ahab Sun', url: 'https://unsplash.com/@panchiosd' },
  },
} satisfies Record<string, MediaImage>;

/** Pod id → photograph. Keeps the mapping in one place, out of the components. */
export const podImages: Record<string, MediaImage> = {
  'vapour-line': media.podVapourLine,
  'monolith-x': media.podMonolithX,
};

/** Project id → photograph. */
export const projectImages: Record<string, MediaImage> = {
  'volcanic-atrium': media.projectVolcanicAtrium,
  'fjall-sanctuary': media.projectFjallSanctuary,
};
