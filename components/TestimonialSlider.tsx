"use client";

import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/lib/site";
import { ArrowIcon, StarIcon } from "./icons";

export function TestimonialSlider({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-advance; any index change (including manual navigation) resets the timer.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      const track = trackRef.current;
      if (!track) return;
      track.scrollTo({
        left: ((index + 1) % items.length) * track.clientWidth,
        behavior: "smooth",
      });
    }, 4500);
    return () => clearInterval(id);
  }, [paused, index, items.length]);

  function scrollTo(i: number) {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + items.length) % items.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: next * track.clientWidth,
      behavior: reduce ? "auto" : "smooth",
    });
  }

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
      onTouchStart={() => setPaused(true)}
    >
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="no-scrollbar flex snap-x snap-mandatory items-center overflow-x-auto"
      >
        {items.map((t, i) => (
          <figure
            key={t.author}
            role="group"
            aria-label={`Review ${i + 1} of ${items.length}`}
            className="w-full shrink-0 snap-center px-1"
          >
            <div className="mx-auto max-w-3xl text-center">
              <div
                className="flex items-center justify-center gap-1 text-sand"
                aria-hidden
              >
                {Array.from({ length: 5 }, (_, s) => (
                  <StarIcon key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-xl leading-snug text-fg sm:text-2xl md:text-[1.7rem]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                <span className="font-semibold text-fg">{t.author}</span>
                {t.detail ? ` · ${t.detail}` : ""}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => scrollTo(index - 1)}
          aria-label="Previous review"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-border text-fg transition-colors hover:border-sand hover:text-sand"
        >
          <ArrowIcon className="h-4 w-4 rotate-180" />
        </button>
        <div className="flex items-center gap-2.5">
          {items.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? "bg-sand" : "bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollTo(index + 1)}
          aria-label="Next review"
          className="inline-flex h-11 w-11 items-center justify-center rounded border border-border text-fg transition-colors hover:border-sand hover:text-sand"
        >
          <ArrowIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
