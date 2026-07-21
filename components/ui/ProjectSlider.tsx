'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X } from 'lucide-react';

type ProjectSliderProps = {
  images: string[];
  title: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
};

export function ProjectSlider({
  images,
  title,
  autoPlay = false,
  autoPlayInterval = 5000,
}: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set([0]));
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(((index % total) + total) % total);
      setLoadedImages((prev) => {
        const next = new Set(prev);
        next.add(((index % total) + total) % total);
        return next;
      });
    },
    [total],
  );

  const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
  const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') setLightboxOpen(false);
        return;
      }
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, lightboxOpen]);

  // Auto-play
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPlaying, goNext, autoPlayInterval]);

  // Pause on hover
  const pauseAutoPlay = () => setIsPlaying(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (total === 0) return null;

  // Single image — no controls needed
  if (total === 1) {
    return (
      <figure className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="block w-full"
          aria-label={`View ${title} screenshot fullscreen`}
        >
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="eager"
          />
        </button>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/40 p-2 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
          <Maximize2 size={16} />
        </div>
        {lightboxOpen && (
          <Lightbox
            src={images[0]}
            alt={`${title} screenshot`}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </figure>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={pauseAutoPlay}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Main stage */}
      <figure className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} screenshot ${i + 1}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              onLoad={() =>
                setLoadedImages((prev) => {
                  const next = new Set(prev);
                  next.add(i);
                  return next;
                })
              }
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Loading skeleton */}
          {!loadedImages.has(currentIndex) && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-gray-100 to-gray-200" />
          )}

          {/* Gradient overlay for controls */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Navigation arrows */}
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous screenshot"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:left-4 md:p-3"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next screenshot"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-gray-800 shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 md:right-4 md:p-3"
          >
            <ChevronRight size={22} />
          </button>

          {/* Top-right controls: play/pause + fullscreen */}
          <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              {isPlaying ? <Pause size={15} /> : <Play size={15} />}
            </button>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="View fullscreen"
              className="rounded-full bg-black/40 p-2 text-white backdrop-blur-sm transition-all duration-200 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <Maximize2 size={15} />
            </button>
          </div>

          {/* Counter badge */}
          <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {currentIndex + 1} / {total}
          </div>
        </div>
      </figure>

      {/* Thumbnail strip */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {images.map((src, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === currentIndex}
            className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 md:h-20 md:w-32 ${
              i === currentIndex
                ? 'border-accent ring-2 ring-accent/30'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Progress dots (mobile-friendly alternative) */}
      <div className="mt-3 flex justify-center gap-1.5 md:hidden">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          src={images[currentIndex]}
          alt={`${title} screenshot ${currentIndex + 1}`}
          onClose={() => setLightboxOpen(false)}
          onPrev={goPrev}
          onNext={goNext}
          counter={`${currentIndex + 1} / ${total}`}
        />
      )}
    </div>
  );
}

function Lightbox({
  src,
  alt,
  onClose,
  onPrev,
  onNext,
  counter,
}: {
  src: string;
  alt: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  counter?: string;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
      >
        <X size={24} />
      </button>

      {onPrev && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronLeft size={28} />
        </button>
      )}

      <img
        src={src}
        alt={alt}
        className="max-h-[85vh] max-w-full rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {onNext && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        >
          <ChevronRight size={28} />
        </button>
      )}

      {counter && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
          {counter}
        </div>
      )}
    </div>
  );
}
