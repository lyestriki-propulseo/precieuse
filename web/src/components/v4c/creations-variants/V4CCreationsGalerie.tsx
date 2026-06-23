import Image from "next/image";
import { FONT } from "./data";

const { garamond, caveat, inter } = FONT;

const STATUS_LABEL: Record<"vendue" | "disponible" | "signature", string> = {
  vendue: "Vendue",
  disponible: "Disponible",
  signature: "Signature",
};

export type GalerieVM = {
  id: string;
  name: string;
  image?: string;
  matiere: string;
  year: string;
  status: "vendue" | "disponible" | "signature";
  story?: string;
};

export function V4CCreationsGalerie({ galerie }: { galerie: GalerieVM[] }) {
  const GALERIE = galerie;
  const photoPieces = GALERIE.filter((p) => p.image);
  const textPieces = GALERIE.filter((p) => !p.image);

  return (
    <div className="relative px-8 lg:px-16 py-20 lg:py-28 bg-[var(--site-surface)]/40">
      <div className="mx-auto max-w-[1340px]">
        <header className="flex items-end justify-between mb-14 flex-wrap gap-4">
          <div>
            <span className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)] block mb-3`}>
              ARCHIVES — GALERIE D&apos;ATELIER
            </span>
            <h3 className={`${garamond} italic text-[36px] lg:text-[44px] text-[var(--site-text)]`}>
              D&apos;autres pièces du carnet.
            </h3>
          </div>
          <p className={`${caveat} text-[18px] text-[var(--site-caveat)] max-w-[320px] text-right`}>
            chaque pièce part avec un nom — celles-ci sont déjà parties
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-7">
          {/* Pièces avec photo */}
          {photoPieces.map((piece) => (
            <article
              key={piece.id}
              className="group relative aspect-square overflow-hidden bg-[var(--site-bg)]"
            >
              <Image
                src={piece.image!}
                alt={`Bague ${piece.name} — ${piece.matiere}`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />

              {/* Status pastille */}
              {piece.status === "vendue" && (
                <div className="absolute top-3 left-3 z-10">
                  <span className={`${garamond} italic text-[10px] tracking-[0.25em] bg-[var(--site-bg)]/90 backdrop-blur-sm text-[var(--site-text)] px-2 py-1`}>
                    {STATUS_LABEL[piece.status]}
                  </span>
                </div>
              )}

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-text)]/85 via-[var(--site-text)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <h4 className={`${garamond} italic text-[28px] text-[var(--site-bg)] leading-tight mb-1`}>
                  {piece.name}
                </h4>
                <p className={`${caveat} text-[15px] text-[var(--site-bg)]/90`}>
                  {piece.matiere}
                </p>
                <p className={`${inter} text-[11px] font-light tracking-wider text-[var(--site-bg)]/70 mt-1`}>
                  {piece.year.toUpperCase()}
                </p>
              </div>
            </article>
          ))}

          {/* Vignettes texte (pièces orphelines) */}
          {textPieces.map((piece) => (
            <article
              key={piece.id}
              className="relative bg-[var(--site-bg)] border border-[var(--site-text)]/15 p-6 flex flex-col justify-between min-h-[280px] hover:border-[var(--site-accent)]/40 transition-colors duration-300"
            >
              {/* En-tête vignette */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span aria-hidden className={`${garamond} italic text-[20px] text-[var(--site-accent)]/70 leading-none`}>
                    ⁂
                  </span>
                  <span className={`${garamond} italic text-[11px] tracking-[0.3em] text-[var(--site-accent)]`}>
                    SANS PHOTO — RÉCIT SEUL
                  </span>
                </div>

                <h4 className={`${garamond} italic text-[24px] text-[var(--site-text)] leading-tight mb-3`}>
                  {piece.name}
                </h4>

                {piece.story && (
                  <p className={`${caveat} text-[17px] text-[var(--site-caveat)] leading-snug`}>
                    « {piece.story} »
                  </p>
                )}
              </div>

              {/* Pied vignette */}
              <div className="pt-5 mt-5 border-t border-dashed border-[var(--site-text)]/20">
                <p className={`${garamond} italic text-[12px] text-[var(--site-text)]/70 leading-snug mb-1`}>
                  {piece.matiere}
                </p>
                <div className="flex items-baseline justify-between">
                  <span className={`${inter} text-[10px] font-light tracking-wider text-[var(--site-text)]/60`}>
                    {piece.year.toUpperCase()}
                  </span>
                  <span className={`${garamond} italic text-[11px] tracking-widest text-[var(--site-accent)]`}>
                    ◆ {STATUS_LABEL[piece.status]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note bas */}
        <p className={`${caveat} text-[15px] text-[var(--site-caveat)]/70 italic mt-10 text-center max-w-[640px] mx-auto`}>
          chaque pièce a son histoire — quelques-unes attendent encore leur photo, d&apos;autres ont déjà rejoint des mains qui les portent
        </p>
      </div>
    </div>
  );
}
