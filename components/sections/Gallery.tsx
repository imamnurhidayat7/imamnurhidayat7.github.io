'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { galleryItems } from '@/data/gallery';

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isEmpty = galleryItems.length === 0;
  const total = galleryItems.length;
  const maxIndex = Math.max(0, total - itemsPerView);
  const pageCount = Math.ceil(total / itemsPerView);

  // Responsive items per view
  useEffect(() => {
    const updatePerView = () => {
      const w = window.innerWidth;
      setItemsPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, []);

  // Keep current within bounds when itemsPerView changes
  useEffect(() => {
    setCurrent((c) => Math.min(c, Math.max(0, total - itemsPerView)));
  }, [itemsPerView, total]);

  const scrollToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(index, maxIndex));
      setCurrent(clamped);
      const container = scrollRef.current;
      if (container) {
        const child = container.children[clamped] as HTMLElement | undefined;
        if (child) {
          container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
        }
      }
    },
    [maxIndex]
  );

  const goPrev = useCallback(() => {
    scrollToIndex(current - itemsPerView);
  }, [current, itemsPerView, scrollToIndex]);

  const goNext = useCallback(() => {
    if (current >= maxIndex) {
      scrollToIndex(0);
    } else {
      scrollToIndex(current + itemsPerView);
    }
  }, [current, itemsPerView, maxIndex, scrollToIndex]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  }, [goPrev, goNext]);

  // Keyboard nav (only when lightbox closed)
  useEffect(() => {
    if (isEmpty || activeIndex !== null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isEmpty, activeIndex, goPrev, goNext]);

  // Lightbox keyboard nav
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft')
        setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));
      if (e.key === 'ArrowRight')
        setActiveIndex((i) => (i === null ? i : (i + 1) % total));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [activeIndex, total]);

  if (isEmpty) {
    return (
      <section id="gallery" className="bg-white py-20 dark:bg-gray-900 md:py-28">
        <div className="container-narrow">
          <SectionTitle
            title="Gallery"
            subtitle="A glimpse into my life beyond the screen — hiking, outdoors, and more."
          />
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
            <ImageIcon className="mb-3 h-10 w-10 text-gray-400" />
            <p className="text-sm text-gray-500">
              No photos yet. Add images to <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">public/images/gallery/</code> and register them in <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs">data/gallery.ts</code>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="bg-white py-20 dark:bg-gray-900 md:py-28">
      <div className="container-narrow">
        <SectionTitle
          title="Gallery"
          subtitle="A glimpse into my life beyond the screen — hiking, outdoors, and more."
        />

        <div className="mt-12">
          {/* Multi-photo scroll-snap carousel */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto rounded-2xl bg-gray-100 p-3 shadow-lg [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden dark:bg-gray-800"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="relative shrink-0 snap-start cursor-pointer overflow-hidden rounded-xl bg-gray-200"
                  style={{
                    width: `calc((100% - ${itemsPerView > 1 ? (itemsPerView - 1) * 16 : 0}px) / ${itemsPerView})`,
                    aspectRatio: '3 / 2',
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    draggable={false}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3 md:p-4">
                    <span className="line-clamp-2 text-xs font-medium text-white drop-shadow md:text-sm">
                      {item.caption}
                    </span>
                  </div>
                  {item.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-gray-700">
                      {item.category}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Prev button */}
            <button
              type="button"
              onClick={goPrev}
              disabled={current === 0}
              aria-label="Previous"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md backdrop-blur transition hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 md:left-5 md:p-3"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next button */}
            <button
              type="button"
              onClick={goNext}
              aria-label="Next"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-gray-800 shadow-md backdrop-blur transition hover:scale-105 hover:bg-white md:right-5 md:p-3"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Counter */}
          <div className="mt-4 flex items-center justify-center">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {current + 1}–{Math.min(current + itemsPerView, total)} / {total}
            </span>
          </div>

          {/* Page dots */}
          {pageCount > 1 && (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
              {Array.from({ length: pageCount }).map((_, pageIndex) => {
                const pageStart = pageIndex * itemsPerView;
                return (
                  <button
                    key={pageIndex}
                    type="button"
                    aria-label={`Go to page ${pageIndex + 1}`}
                    onClick={() => scrollToIndex(pageStart)}
                    className={`h-2 rounded-full transition-all ${
                      pageStart === current
                        ? 'w-6 bg-blue-600'
                        : 'w-2 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500'
                    }`}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i - 1 + total) % total));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex((i) => (i === null ? i : (i + 1) % total));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].caption}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            {galleryItems[activeIndex].caption && (
              <p className="mt-3 text-center text-sm text-white">
                {galleryItems[activeIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
