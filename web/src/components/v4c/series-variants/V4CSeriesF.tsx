"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  V4CSeriesFCard,
  type PieceVM,
} from "@/components/v4c/series-variants/V4CSeriesFCard";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

const INTERVAL_MS = 7000;

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

type SlideRole = "focus" | "peek-left" | "peek-right" | "hidden";

function getRoleFor(i: number, current: number, n: number): SlideRole {
  const diff = mod(i - current, n);
  if (diff === 0) return "focus";
  if (diff === 1) return "peek-right";
  if (diff === n - 1) return "peek-left";
  return "hidden";
}

export function V4CSeriesF({ pieces }: { pieces: PieceVM[] }) {
  const PRODUCTS = pieces;
  const N = PRODUCTS.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Detect prefers-reduced-motion au mount
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const goNext = useCallback(() => setCurrent((c) => mod(c + 1, N)), [N]);
  const goPrev = useCallback(() => setCurrent((c) => mod(c - 1, N)), [N]);
  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!reducedMotion) {
      timerRef.current = setInterval(goNext, INTERVAL_MS);
    }
  }, [goNext, reducedMotion]);

  // Auto-play
  useEffect(() => {
    if (reducedMotion || paused) return;
    timerRef.current = setInterval(goNext, INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, paused, reducedMotion]);

  const handleGoNext = useCallback(() => { goNext(); resetTimer(); }, [goNext, resetTimer]);
  const handleGoPrev = useCallback(() => { goPrev(); resetTimer(); }, [goPrev, resetTimer]);
  const handleGoTo = useCallback((i: number) => { goTo(i); resetTimer(); }, [goTo, resetTimer]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") handleGoNext();
    if (e.key === "ArrowLeft") handleGoPrev();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const delta = (e.changedTouches[0]?.clientX ?? 0) - touchStartX;
    if (Math.abs(delta) >= 50) {
      delta < 0 ? handleGoNext() : handleGoPrev();
    }
    setTouchStartX(null);
  };

  const currentProduct = PRODUCTS[current];
  if (!currentProduct) return null;

  const annotationNum = current + 1;

  return (
    <section
      className="relative bg-[var(--site-bg)] py-14 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-[var(--site-text)]"
      aria-roledescription="carousel"
      aria-label="Collection — Coverflow premium"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
    >
      <div className="mx-auto max-w-[1440px] px-0 lg:px-12">
        {/* En-tête */}
        <div className="mb-8 px-8 lg:px-0 flex items-end justify-between">
          <div>
            <h2 className={`${garamond} italic text-[40px] text-[var(--site-text)] leading-none mb-1`}>
              La Collection
            </h2>
            <p className={`${caveat} text-[18px] text-[var(--site-caveat)]`}>
              — cliquer ou swiper pour explorer
            </p>
          </div>
          <span className={`${garamond} italic text-[13px] text-[var(--site-accent)] hidden md:block`}>
            p. 04
          </span>
        </div>

        {/* Wrapper coverflow */}
        <div className="relative overflow-hidden h-[520px] sm:h-[600px] lg:h-[660px]">
          {PRODUCTS.map((product, i) => (
            <V4CSeriesFCard
              key={product.slug}
              product={product}
              index={i}
              role={getRoleFor(i, current, N)}
              reducedMotion={reducedMotion}
              onClickPeek={() => handleGoTo(i)}
            />
          ))}

          {/* Annotation marginale — à droite du wrapper */}
          <div className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 flex-col items-center gap-1 z-30 pointer-events-none">
            <span
              className={`${caveat} text-[13px] text-[var(--site-caveat)] [writing-mode:vertical-rl] rotate-180 tracking-wide`}
            >
              — pièce {annotationNum} / {N}
            </span>
          </div>
        </div>

        {/* Contrôles : flèches + dots */}
        <div className="mt-6 px-8 lg:px-0 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4" role="group" aria-label="Navigation carousel">
            <button
              onClick={handleGoPrev}
              aria-label="Pièce précédente"
              className={`${caveat} w-8 h-8 flex items-center justify-center text-[var(--site-caveat)] hover:opacity-70 transition-opacity`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <polyline points="10,2 4,8 10,14" stroke="var(--site-caveat)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="flex gap-3" role="tablist" aria-label="Indicateurs de slide">
              {PRODUCTS.map((p, i) => (
                <button
                  key={p.slug}
                  role="tab"
                  aria-selected={i === current}
                  aria-current={i === current ? "true" : undefined}
                  aria-label={`Aller à la pièce ${i + 1} : ${p.name}`}
                  onClick={() => handleGoTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-[var(--site-accent)] w-5"
                      : "bg-[var(--site-accent)]/25 hover:bg-[var(--site-accent)]/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleGoNext}
              aria-label="Pièce suivante"
              className={`${caveat} w-8 h-8 flex items-center justify-center text-[var(--site-caveat)] hover:opacity-70 transition-opacity`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <polyline points="6,2 12,8 6,14" stroke="var(--site-caveat)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
