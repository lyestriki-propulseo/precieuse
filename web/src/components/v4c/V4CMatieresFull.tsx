"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type MatiereVM = {
  slug: string;
  nom: string;
  sous_titre: string;
  description_courte: string;
  image: string;
  image_alt: string;
  annotation_caveat: string;
  page: string;
};

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

const REVEAL_BASE =
  "transition-all duration-[1100ms] ease-[cubic-bezier(0.32,0.72,0,1)]";

export function V4CMatieresFull({ matieres }: { matieres: MatiereVM[] }) {
  const MATIERES = matieres;
  const sectionRef = useRef<HTMLElement>(null);
  const [titleIn, setTitleIn] = useState(false);
  const [cardsIn, setCardsIn] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let cardsTimer: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleIn(true);
          cardsTimer = setTimeout(() => setCardsIn(true), 280);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (cardsTimer) clearTimeout(cardsTimer);
    };
  }, []);

  const titleAnim = `${REVEAL_BASE} ${
    titleIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
  }`;
  const cardAnim = `${REVEAL_BASE} ${
    cardsIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
  }`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[var(--site-bg)] py-20 sm:py-28"
    >
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div
        className={`${titleAnim} mx-auto mb-14 sm:mb-16 max-w-[1440px] px-6 sm:px-10 lg:px-16 flex items-end justify-between`}
      >
        <div>
          <h2
            className={`${garamond} italic text-[48px] sm:text-[56px] lg:text-[64px] text-[var(--site-text)] leading-none mb-3`}
          >
            Nos Matières
          </h2>
          <p className={`${caveat} text-[20px] sm:text-[22px] text-[var(--site-caveat)]`}>
            — choisies une à une, avec intention
          </p>
        </div>
        <span
          className={`${caveat} text-[13px] text-[var(--site-caveat)]/40 hidden md:block -rotate-[0.5deg]`}
        >
          aucun compromis sur la matière
        </span>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {MATIERES.map((m) => (
          <article
            key={m.slug}
            className={`${cardAnim} group flex h-full flex-col border-r border-b border-[var(--site-text)]/10 last:border-r-0`}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[var(--site-surface)]">
              <Image
                src={m.image}
                alt={m.image_alt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              />
              <span
                className={`${garamond} italic text-[12px] text-[var(--site-surface)]/85 absolute bottom-3 right-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]`}
              >
                {m.page}
              </span>
            </div>

            <div className="flex flex-col gap-3 p-6 lg:p-8 flex-1">
              <h3
                className={`${garamond} italic text-[30px] lg:text-[34px] text-[var(--site-text)] leading-none`}
              >
                {m.nom}
              </h3>
              <p className={`${caveat} text-[18px] text-[var(--site-caveat)]`}>
                {m.sous_titre}
              </p>
              <p
                className={`${inter} text-[13px] font-light text-[var(--site-text)]/80 leading-relaxed mt-1`}
              >
                {m.description_courte}
              </p>
              <span
                className={`${caveat} text-[13px] text-[var(--site-caveat)]/55 mt-auto pt-4 -rotate-[0.5deg]`}
              >
                — {m.annotation_caveat}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
