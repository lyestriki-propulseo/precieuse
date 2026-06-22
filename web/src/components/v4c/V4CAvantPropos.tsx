import Image from "next/image";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const bodoni = "font-[family-name:var(--font-bodoni)]";
const cormorant = "font-[family-name:var(--font-cormorant)]";

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi"] as const;

type AvantProposVM = {
  heading: string;
  pairs: { pas: string; mais: string }[];
};

function Filigrane() {
  return (
    <svg aria-hidden="true" viewBox="0 0 80 24" className="w-[80px] h-6 text-[var(--site-accent)] opacity-70" fill="none">
      <path d="M40 12 Q 32 4 24 12 Q 16 20 8 12" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M40 12 Q 48 4 56 12 Q 64 20 72 12" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <circle cx="40" cy="12" r="2" stroke="currentColor" strokeWidth="0.6" fill="currentColor" fillOpacity="0.3" />
      <line x1="0" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="0.4" />
      <line x1="74" y1="12" x2="80" y2="12" stroke="currentColor" strokeWidth="0.4" />
    </svg>
  );
}

function Seal() {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" className="w-[88px] h-[88px] text-[var(--site-accent)] opacity-80" fill="none">
      <circle cx="60" cy="60" r="56" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="1 3" />
      <text x="60" y="40" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="1.8">ATELIER</text>
      <text x="60" y="68" textAnchor="middle" fontSize="22" fill="currentColor" fontFamily="serif" fontStyle="italic">P</text>
      <text x="60" y="86" textAnchor="middle" fontSize="9" fill="currentColor" fontFamily="serif" letterSpacing="1.8">BORDEAUX</text>
      <text x="60" y="100" textAnchor="middle" fontSize="7" fill="currentColor" fontFamily="serif" letterSpacing="2">MMXXVI</text>
    </svg>
  );
}

export function V4CAvantPropos({ avantPropos }: { avantPropos: AvantProposVM }) {
  // Heading = mot d'attaque en capitales (« Atelier ») + marque en italique
  // (« Précieuse »). On le pilote depuis le contenu en gardant le traitement.
  const [headingLead, ...headingRest] = avantPropos.heading.trim().split(" ");
  const headingBrand = headingRest.join(" ");
  const PAIRES = avantPropos.pairs.map((p, i) => ({
    roman: ROMAN[i] ?? "",
    pas: p.pas,
    mais: p.mais,
  }));
  return (
    <section className="relative bg-[var(--site-bg)] py-20 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t border-[var(--site-text)]/25" />

      <div className="mx-auto max-w-[1320px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="relative md:order-1 order-2 mx-auto md:mx-0">
          <div className="relative w-full max-w-[460px] aspect-[3/4] border border-[var(--site-text)]/30">
            <Image
              src="/images/emeline-portrait.jpg"
              alt="Portrait d'Eméline Le Ray, fondatrice et joaillière de Précieuse"
              fill
              sizes="(min-width: 768px) 460px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between max-w-[460px]">
            <span className={`${garamond} italic text-[13px] tracking-[0.25em] uppercase text-[var(--site-text)]/70`}>
              Eméline Le Ray
            </span>
            <span className={`${garamond} italic text-[12px] tracking-[0.2em] uppercase text-[var(--site-accent)]`}>
              Bordeaux · MMXXVI
            </span>
          </div>
        </div>

        <div className="md:order-2 order-1">
          <span className={`${bodoni} text-[10px] tracking-[0.45em] uppercase text-[var(--site-accent)] block mb-5`}>
            Avant-propos
          </span>

          <div className="flex flex-col items-start mb-10">
            <span className={`${bodoni} text-[34px] tracking-[0.18em] uppercase text-[var(--site-text)] leading-none`}>
              {headingLead}
            </span>
            <div className="my-3"><Filigrane /></div>
            <span className={`${bodoni} italic text-[52px] text-[var(--site-text)] leading-none`}>
              {headingBrand}
            </span>
          </div>

          <ul className="flex flex-col gap-7">
            {PAIRES.map((p) => (
              <li key={p.roman} className="grid grid-cols-[32px_1fr] gap-5 items-baseline">
                <span className={`${cormorant} italic text-[15px] text-[var(--site-accent)] opacity-80 tracking-wider`}>
                  · {p.roman} ·
                </span>
                <div className="flex flex-col gap-1.5">
                  <span className={`${cormorant} italic text-[15px] text-[var(--site-text)]/65 tracking-wide`}>
                    {p.pas} —
                  </span>
                  <span className={`${bodoni} italic text-[20px] text-[var(--site-text)] leading-[1.45]`}>
                    {p.mais}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex items-center gap-6 pt-6 border-t border-[var(--site-text)]/15">
            <Seal />
            <div className="flex flex-col">
              <span className={`${bodoni} italic text-[18px] text-[var(--site-text)]`}>
                Eméline Le Ray
              </span>
              <span className={`${cormorant} italic text-[13px] text-[var(--site-text)]/65 tracking-wide`}>
                fondatrice — fondée mai · MMXXV
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex justify-end max-w-[1320px] mx-auto">
        <span className={`${bodoni} italic text-[13px] text-[var(--site-accent)]`}>p. 02</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-[var(--site-text)]/25" />
    </section>
  );
}
