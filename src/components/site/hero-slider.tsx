"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Slide = { src: string; alt: string };

const RING_RADIUS = 18;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const SLIDES: Slide[] = [
  {
    src: "/slider1-01.webp",
    alt: "Advisor reviewing a client's financials on a laptop in a bright, plant-filled office",
  },
  {
    src: "/slider1-02.webp",
    alt: "Senior accountant reviewing figures on a laptop late in the evening",
  },
  {
    src: "/slider1-03.webp",
    alt: "Consultant working through client documents on a laptop in a lounge setting",
  },
];

const AUTOPLAY_MS = 5500;

export function HeroSlider({
  onIndexChange,
}: {
  onIndexChange?: (index: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (event: MediaQueryListEvent) =>
      setReducedMotion(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, reducedMotion]);

  const goTo = useCallback((next: number) => {
    setIndex(((next % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Solanki Singh & CO. at work"
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${SLIDES.length}`}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-[75%_center]"
          />
        </div>
      ))}

      {/* readability + brand overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-surface-base/40" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-surface-base/90 via-surface-base/35 to-surface-base/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,154,77,0.18),transparent_60%)]"
      />

      <div className="absolute inset-x-0 bottom-5 z-10 flex flex-row items-center justify-center gap-5 sm:inset-x-auto sm:top-1/2 sm:right-8 sm:bottom-auto sm:flex-col sm:-translate-y-1/2 sm:gap-6">
        {SLIDES.map((_, i) => {
          const isActive = i === index;
          return (
            <button
              key={SLIDES[i].src}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
              aria-current={isActive || undefined}
              className="group relative flex size-11 shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105 sm:size-12"
            >
              <svg
                viewBox="0 0 40 40"
                className="absolute inset-0 -rotate-90"
                aria-hidden="true"
              >
                <circle
                  cx="20"
                  cy="20"
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth="2"
                  className="stroke-white/20"
                />
                <circle
                  key={isActive ? (reducedMotion ? "static" : `${i}-${index}`) : `idle-${i}`}
                  cx="20"
                  cy="20"
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={
                    isActive && reducedMotion ? 0 : RING_CIRCUMFERENCE
                  }
                  className={`stroke-current text-surface-strong transition-colors duration-300 ${
                    isActive && !reducedMotion ? "animate-circle-progress" : ""
                  }`}
                  style={
                    isActive && !reducedMotion
                      ? {
                          animationDuration: `${AUTOPLAY_MS}ms`,
                          animationPlayState: paused ? "paused" : "running",
                        }
                      : undefined
                  }
                />
              </svg>
              <span
                className={`relative text-[11px] font-semibold tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-text-inverse"
                    : "text-white/40 group-hover:text-white/70"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
