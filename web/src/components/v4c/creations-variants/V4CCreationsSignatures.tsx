import Image from "next/image";
import Link from "next/link";
import { SIGNATURES, FONT } from "./data";

const { garamond, caveat, inter } = FONT;

const ROMANS = ["I", "II", "III"] as const;

const STATUS_LABEL: Record<"vendue" | "disponible" | "signature", string> = {
  vendue: "Pièce vendue",
  disponible: "Disponible à la commande",
  signature: "Pièce signature",
};

export function V4CCreationsSignatures() {
  return (
    <div className="relative px-8 lg:px-16 py-20 lg:py-28">
      <div className="mx-auto max-w-[1340px]">
        <header className="mb-20 text-center">
          <span className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)] block mb-3`}>
            TROIS PIÈCES SIGNATURES
          </span>
          <h3 className={`${garamond} italic text-[36px] lg:text-[44px] text-[var(--site-text)]`}>
            Celles qui résument l&apos;atelier.
          </h3>
        </header>

        <div className="space-y-32 lg:space-y-40">
          {SIGNATURES.map((piece, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <article
                key={piece.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  isReverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Photo */}
                <div className="relative">
                  <div className="relative aspect-[4/5] w-full bg-[var(--site-surface)] overflow-hidden shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
                    <Image
                      src={piece.image}
                      alt={`Bague ${piece.name} — ${piece.matiere}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 600px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                      priority={idx === 0}
                    />
                  </div>
                  <span className={`${garamond} italic text-[12px] tracking-[0.3em] text-[var(--site-accent)] mt-4 block`}>
                    {piece.year} · BORDEAUX
                  </span>
                </div>

                {/* Texte */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`${garamond} italic text-[14px] tracking-[0.4em] text-[var(--site-accent)]`}>
                      N° {ROMANS[idx]}
                    </span>
                    <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
                  </div>

                  <h4 className={`${garamond} italic text-[56px] lg:text-[68px] text-[var(--site-text)] leading-[0.98] mb-3`}>
                    {piece.name}.
                  </h4>
                  <p className={`${caveat} text-[24px] text-[var(--site-caveat)] mb-10`}>
                    {piece.subtitle}
                  </p>

                  <div className="space-y-5 mb-10 max-w-[520px]">
                    {piece.story.map((p, i) => (
                      <p
                        key={i}
                        className={`${garamond} italic text-[18px] text-[var(--site-text)]/85 leading-[1.7]`}
                      >
                        {p}
                      </p>
                    ))}
                  </div>

                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-8 max-w-[520px] pt-5 border-t border-[var(--site-text)]/15">
                    <dt className={`${garamond} italic text-[11px] tracking-[0.3em] text-[var(--site-accent)]`}>
                      MATIÈRES
                    </dt>
                    <dd className={`${garamond} italic text-[15px] text-[var(--site-text)]/85`}>
                      {piece.matiere}
                    </dd>
                    <dt className={`${garamond} italic text-[11px] tracking-[0.3em] text-[var(--site-accent)]`}>
                      STATUT
                    </dt>
                    <dd className={`${inter} text-[13px] font-light text-[var(--site-text)]/70`}>
                      ◆ {STATUS_LABEL[piece.status]}
                    </dd>
                  </dl>

                  <Link
                    href="/fr/sur-mesure"
                    className={`${garamond} italic text-[15px] text-[var(--site-text)] inline-flex items-center gap-2 border-b border-[var(--site-accent)] pb-1 hover:gap-3 transition-all duration-300`}
                  >
                    Discuter d&apos;une pièce dans cet esprit
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
