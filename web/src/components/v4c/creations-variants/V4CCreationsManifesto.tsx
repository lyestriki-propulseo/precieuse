import { MANIFESTO, FONT } from "./data";

const { garamond, caveat } = FONT;

export function V4CCreationsManifesto() {
  return (
    <div className="relative px-8 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Surtitre */}
        <div className="flex items-center gap-4 mb-12">
          <span className="block w-16 h-px bg-[var(--site-accent)]" />
          <span className={`${garamond} italic text-[12px] tracking-[0.4em] text-[var(--site-accent)]`}>
            {MANIFESTO.surtitle}
          </span>
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
        </div>

        {/* Hook — phrase d'ouverture XL */}
        <h2 className={`${garamond} italic text-[44px] sm:text-[60px] lg:text-[80px] text-[var(--site-text)] leading-[0.98] mb-12 lg:mb-16`}>
          {MANIFESTO.hook}
        </h2>

        {/* Corps — 2 paragraphes + clôture */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
          <div className="space-y-7 max-w-[680px]">
            {MANIFESTO.body.map((p, i) => (
              <p
                key={i}
                className={`${garamond} italic text-[20px] lg:text-[22px] text-[var(--site-text)]/85 leading-[1.65]`}
              >
                {p}
              </p>
            ))}
            <p className={`${garamond} italic text-[20px] lg:text-[22px] text-[var(--site-text)]/85 leading-[1.65] pt-4 border-t border-[var(--site-text)]/15`}>
              {MANIFESTO.closing}
            </p>
          </div>

          {/* Signature manuscrite */}
          <aside className="flex flex-col items-end gap-2 lg:pt-12">
            <span className={`${caveat} text-[16px] text-[var(--site-caveat)]/70 italic`}>
              — Carnet d&apos;atelier
            </span>
            <span className={`${caveat} text-[56px] lg:text-[72px] text-[var(--site-caveat)] leading-none`}>
              {MANIFESTO.signature}
            </span>
            <span className={`${garamond} italic text-[12px] tracking-[0.3em] text-[var(--site-accent)]`}>
              BORDEAUX · MMXXVI
            </span>
          </aside>
        </div>

        {/* Décor bas */}
        <div className="mt-16 flex items-center gap-4">
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
          <span aria-hidden className={`${garamond} italic text-[20px] text-[var(--site-accent)]`}>
            ※
          </span>
          <span className="block flex-1 h-px bg-[var(--site-accent)]/30" />
        </div>
      </div>
    </div>
  );
}
