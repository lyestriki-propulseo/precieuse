const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";

function IconEtoile() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="none" className="w-7 h-7 opacity-60 text-[var(--site-text)]">
      <path
        d="M16 4 L18.5 12 L27 12 L20 17.5 L22.5 25 L16 20.5 L9.5 25 L12 17.5 L5 12 L13.5 12Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPaquet() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="none" className="w-7 h-7 opacity-60 text-[var(--site-text)]">
      <rect x="5" y="12" width="22" height="16" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 12 L16 6 L27 12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 6 L16 28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M5 16 L27 16" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
    </svg>
  );
}

function IconSceau() {
  return (
    <svg aria-hidden viewBox="0 0 32 32" fill="none" className="w-7 h-7 opacity-60 text-[var(--site-text)]">
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" />
      <path d="M12 16 L15 19 L20 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type TrustItemVM = {
  titre: string;
  corps: string;
  annotation: string;
};

const ICONS = [<IconEtoile key="etoile" />, <IconPaquet key="paquet" />, <IconSceau key="sceau" />];

export function V4CTrustStrip({ items }: { items: TrustItemVM[] }) {
  const ITEMS = items.map((it, i) => ({ ...it, icon: ICONS[i % ICONS.length] }));
  return (
    <section className="relative bg-[var(--site-bg)] py-14 px-8 lg:px-16 border-t-2 border-double border-[var(--site-text)]/15">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--site-text)]/10">
          {ITEMS.map((item) => (
            <div key={item.titre} className="flex flex-col items-center gap-3 py-8 md:py-0 md:px-12 text-center">
              {item.icon}
              <span className={`${garamond} text-[11px] tracking-[0.2em] text-[var(--site-text)] uppercase`}>
                {item.titre}
              </span>
              <span className="font-[family-name:var(--font-inter)] text-[13px] font-light text-[var(--site-text)]/80">
                {item.corps}
              </span>
              <span className={`${caveat} text-[14px] text-[var(--site-caveat)]`}>
                {item.annotation}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
