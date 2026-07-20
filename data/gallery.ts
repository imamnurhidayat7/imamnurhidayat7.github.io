export type GalleryItem = {
  /** Path to the image, relative to /public. Put photos in /public/images/gallery/. */
  src: string;
  /** Alt text / caption shown below or over the image. */
  caption: string;
  /** Optional category for filtering, e.g. "Hiking", "Travel", "Events". */
  category?: string;
};

/**
 * Gallery photos shown in the Gallery section.
 *
 * HOW TO ADD A PHOTO:
 * 1. Drop the image file into /public/images/gallery/ (e.g. photo-1.jpg).
 * 2. Add an entry below with src: '/images/gallery/photo-1.jpg'.
 * 3. Save — the photo appears on the site (hot reload).
 *
 * Supported formats: .jpg, .png, .webp, .avif.
 * Tip: keep images reasonably sized (< 500 KB) for fast loading.
 */
export const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/IMG_3260.JPG', caption: 'Moment 3260' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.56.jpeg', caption: 'Moment 4110' },
  { src: '/images/gallery/G1.JPG', caption: 'Gallery 1' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.43.jpeg', caption: 'Moment 4103' },
  { src: '/images/gallery/IMG_3771.JPG', caption: 'Moment 3771' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.59 (1).jpeg', caption: 'Moment 4114' },
  { src: '/images/gallery/IMG_0671.JPG', caption: 'Moment 0671' },
  { src: '/images/gallery/G4.JPG', caption: 'Gallery 4' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.41.03.jpeg', caption: 'Moment 4117' },
  { src: '/images/gallery/IMG_3433.JPG', caption: 'Moment 3433' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.49.jpeg', caption: 'Moment 4105' },
  { src: '/images/gallery/IMG_3238.JPG', caption: 'Moment 3238' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.55.jpeg', caption: 'Moment 4109' },
  { src: '/images/gallery/IMG_0297.JPG', caption: 'Moment 0297' },
  { src: '/images/gallery/G2.JPG', caption: 'Gallery 2' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.58.jpeg', caption: 'Moment 4112' },
  { src: '/images/gallery/IMG_3973.JPG', caption: 'Moment 3973' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.52.jpeg', caption: 'Moment 4108' },
  { src: '/images/gallery/IMG_3311.JPG', caption: 'Moment 3311' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.41.jpeg', caption: 'Moment 4101' },
  { src: '/images/gallery/IMG_9585.JPG', caption: 'Moment 9585' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.41.01.jpeg', caption: 'Moment 4115' },
  { src: '/images/gallery/IMG_0075.JPG', caption: 'Moment 0075' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.56 (1).jpeg', caption: 'Moment 4111' },
  { src: '/images/gallery/G3.JPG', caption: 'Gallery 3' },
  { src: '/images/gallery/IMG_3526.JPG', caption: 'Moment 3526' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.51.jpeg', caption: 'Moment 4107' },
  { src: '/images/gallery/IMG_3751.JPG', caption: 'Moment 3751' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.41.04.jpeg', caption: 'Moment 4118' },
  { src: '/images/gallery/IMG_3414.JPG', caption: 'Moment 3414' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.42.jpeg', caption: 'Moment 4102' },
  { src: '/images/gallery/IMG_3241.JPG', caption: 'Moment 3241' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.41.02.jpeg', caption: 'Moment 4116' },
  { src: '/images/gallery/IMG_3836.JPG', caption: 'Moment 3836' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.44.jpeg', caption: 'Moment 4104' },
  { src: '/images/gallery/IMG_4157.JPG', caption: 'Moment 4157' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.59.jpeg', caption: 'Moment 4113' },
  { src: '/images/gallery/IMG_3229.JPG', caption: 'Moment 3229' },
  { src: '/images/gallery/WhatsApp Image 2026-07-20 at 23.40.49 (1).jpeg', caption: 'Moment 4106' },
];
