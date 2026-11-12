export type ResolvedVideo =
  | { kind: 'embed'; src: string }
  | { kind: 'file'; src: string }
  | null;

/**
 * Convierte una URL de YouTube, Vimeo o MP4 en una fuente reproducible.
 * Devuelve null si la URL está vacía o no es reconocible.
 */
export function resolveVideo(url: string): ResolvedVideo {
  const value = url.trim();
  if (!value) return null;

  const youtube = value.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{6,})/i,
  );
  if (youtube?.[1]) {
    return {
      kind: 'embed',
      src: `https://www.youtube-nocookie.com/embed/${youtube[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
    };
  }

  const vimeo = value.match(/vimeo\.com\/(?:video\/)?(\d+)/i);
  if (vimeo?.[1]) {
    return {
      kind: 'embed',
      src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`,
    };
  }

  if (/^https?:\/\/.+\.mp4(?:[?#].*)?$/i.test(value) || /^\/.+\.mp4(?:[?#].*)?$/i.test(value)) {
    return { kind: 'file', src: value };
  }

  return null;
}
