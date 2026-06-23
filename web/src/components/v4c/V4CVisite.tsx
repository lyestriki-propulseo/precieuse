import Link from "next/link";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function PlanSVG() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[300px] h-auto opacity-70 text-[var(--site-text)]"
    >
      <g className="text-[var(--site-text)]">
        <path d="M20 100 Q 60 80 100 100 Q 140 120 180 95 Q 220 70 280 90"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
        <path d="M140 20 Q 155 60 150 100 Q 145 140 160 180"
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4" />
        <path d="M100 100 Q 110 130 130 150"
          stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.3" />
      </g>
      <g className="text-[var(--site-caveat)]" transform="translate(148, 92)">
        <line x1="-8" y1="0" x2="8" y2="0" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeOpacity="0.8" />
        <line x1="0" y1="-8" x2="0" y2="8" stroke="currentColor" strokeWidth="2.5"
          strokeLinecap="round" strokeOpacity="0.8" />
        <circle cx="0" cy="0" r="12" stroke="currentColor" strokeWidth="1"
          strokeDasharray="2 4" strokeOpacity="0.5" />
      </g>
      <text className="text-[var(--site-caveat)]" x="165" y="88" fontFamily="serif" fontSize="10" fill="currentColor" fillOpacity="0.7"
        fontStyle="italic">ici</text>
      <g className="text-[var(--site-accent)]" transform="translate(265, 30)">
        <circle cx="0" cy="0" r="14" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <text x="-3" y="-5" fontFamily="serif" fontSize="7" fill="currentColor" fillOpacity="0.6">N</text>
        <line x1="0" y1="-10" x2="0" y2="10" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}

type VisiteVM = {
  addressLines: string[];
  text: string;
};

export function V4CVisite({ visite }: { visite: VisiteVM }) {
  return (
    <section className="relative bg-[var(--site-bg)] py-16 px-8 lg:px-16">
      <div className="absolute top-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />

      <div className="mx-auto max-w-[1440px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <PlanSVG />
        </div>

        <div>
          <h2 className={`${garamond} italic text-[42px] text-[var(--site-text)] mb-4`}>
            Venir nous voir
          </h2>

          <address className={`${caveat} text-[22px] text-[var(--site-caveat)] not-italic leading-[1.7] mb-6`}>
            {visite.addressLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < visite.addressLines.length - 1 ? <br /> : null}
              </span>
            ))}
          </address>

          <p className="font-[family-name:var(--font-inter)] text-[14px] font-light text-[var(--site-text)]/80 leading-relaxed mb-6 max-w-sm">
            {visite.text}
          </p>

          <Link
            href="/fr/contact"
            className={`${garamond} italic text-[20px] text-[var(--site-text)] underline underline-offset-4 decoration-[var(--site-text)]/30 hover:decoration-[var(--site-text)]/70 transition-all`}
          >
            Demander un rendez-vous
          </Link>
        </div>
      </div>

      <div className="mt-8 flex justify-end max-w-[1440px] mx-auto">
        <span className={`${garamond} italic text-[13px] text-[var(--site-accent)]`}>p. 12</span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t-2 border-double border-[var(--site-text)]/15" />
    </section>
  );
}
