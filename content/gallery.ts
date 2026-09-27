/* PERSONAL ARCHIVE — Vignesh's own supplied photographs.
 *
 * `ar` is each file's TRUE aspect ratio (measured from the source JPEGs),
 * so a frame is only ever cropped by object-fit, never scaled non-uniformly.
 *
 * `scale` and `y` are the curation: a little rhythm so the rail reads as a
 * hung archive rather than a filmstrip. g10 is the centrepiece. */

export type Frame = {
  id: string;
  src: string;
  ar: number; /* true width / height */
  scale: number; /* relative height on the rail */
  y: number; /* vertical offset in px, for rhythm */
  hero?: boolean; /* the centrepieces */
};

export const FRAMES: Frame[] = [
  { id: "g01", src: "/images/gallery/g01.jpg", ar: 0.75, scale: 0.94, y: -18 },
  { id: "g02", src: "/images/gallery/g02.jpg", ar: 0.75, scale: 0.88, y: 30 },
  { id: "g03", src: "/images/gallery/g03.jpg", ar: 0.75, scale: 1.0, y: -34 },
  { id: "g04", src: "/images/gallery/g04.jpg", ar: 0.75, scale: 0.86, y: 22 },
  { id: "g05", src: "/images/gallery/g05.jpg", ar: 0.461, scale: 0.97, y: -10 },
  { id: "g06", src: "/images/gallery/g06.jpg", ar: 0.5625, scale: 0.9, y: 34 },
  { id: "g07", src: "/images/gallery/g07.jpg", ar: 0.5625, scale: 1.02, y: -26 },
  { id: "g08", src: "/images/gallery/g08.jpg", ar: 0.75, scale: 0.88, y: 16 },
  { id: "g09", src: "/images/gallery/g09.jpg", ar: 0.5625, scale: 1.0, y: -14 },
  /* — the centre of the archive — */
  { id: "g10", src: "/images/gallery/g10.jpg", ar: 0.75, scale: 1.14, y: 0, hero: true },
];
