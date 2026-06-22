import Image from "next/image";
import Link from "next/link";
import { BrilliantCutScheme, DecoCornerFrame, ArtDecoFrieze, SunburstFan } from "@/components/v4c/_ornaments";

const garamond = "font-[family-name:var(--font-eb-garamond)]";
const caveat = "font-[family-name:var(--font-caveat)]";
const inter = "font-[family-name:var(--font-inter)]";

export function V4CHero() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex flex-col">
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/gemmyo.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover"
          style={{
            filter: "saturate(1.20) brightness(0.85) contrast(1.05)",
            objectPosition: "center 72%",
            transform: "scale(1.04)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 38%, rgba(8,4,2,0.55) 0%, rgba(8,4,2,0.20) 38%, rgba(8,4,2,0) 60%), linear-gradient(180deg, rgba(8,4,2,0.25) 0%, rgba(8,4,2,0.05) 30%, rgba(8,4,2,0.0) 60%, rgba(8,4,2,0.45) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 py-6 flex items-baseline justify-between border-b border-[#f4d8a0]/20">
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/85 drop-shadow-md`}>Vitrine · décembre · Bordeaux</span>
        <span className={`${caveat} text-[16px] italic text-[#f4d8a0] drop-shadow-md`}>derrière la vitre —</span>
        <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/85 drop-shadow-md`}>MMXXVI · I</span>
      </div>

      <SunburstFan
        className="pointer-events-none absolute z-[5] left-1/2 top-[14%] -translate-x-1/2 w-[520px] max-w-[90%] h-[320px] text-[#f4d8a0] opacity-[0.18]"
        stroke="#f4d8a0"
      />
      <BrilliantCutScheme
        className="pointer-events-none absolute z-[5] left-[7%] top-[34%] w-[120px] h-[120px] text-[#f4d8a0] opacity-[0.30] hidden lg:block"
        stroke="#f4d8a0"
      />
      <BrilliantCutScheme
        className="pointer-events-none absolute z-[5] right-[7%] top-[34%] w-[120px] h-[120px] text-[#f4d8a0] opacity-[0.30] hidden lg:block"
        stroke="#f4d8a0"
      />

      <div className="relative z-10 flex-1 flex items-center justify-center px-4 lg:px-12">
        <div className="relative w-full max-w-[1100px] mx-auto motion-safe:animate-[glassRise_1.6s_cubic-bezier(0.2,0.8,0.2,1)_120ms_both]">
          <DecoCornerFrame className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 text-[#f4d8a0]/85 z-10" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 text-[#f4d8a0]/85 z-10 -scale-x-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-16 lg:h-16 text-[#f4d8a0]/85 z-10 -scale-y-100" stroke="#f4d8a0" />
          <DecoCornerFrame className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 text-[#f4d8a0]/85 z-10 rotate-180" stroke="#f4d8a0" />

          <div className="relative px-6 py-12 lg:py-20">
            <ArtDecoFrieze className="absolute top-2 left-1/2 -translate-x-1/2 w-[55%] h-3 text-[#f4d8a0] opacity-65" stroke="#f4d8a0" />
            <ArtDecoFrieze className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[55%] h-3 text-[#f4d8a0] opacity-65" stroke="#f4d8a0" />

            <h1
              aria-label="Précieuse — joaillerie artisanale, Bordeaux"
              className={`${garamond} italic leading-[0.85] tracking-[-0.045em] text-center select-none relative text-[#fff8e6]`}
              style={{
                fontSize: "clamp(80px, 14vw, 220px)",
                textShadow:
                  "0 1px 0 rgba(255,255,255,0.40), 0 0 32px rgba(255,225,170,0.55), 0 4px 18px rgba(20,10,4,0.85), 0 16px 60px rgba(20,10,4,0.7)",
              }}
            >
              Précieuse
            </h1>
          </div>

          <span aria-hidden="true" className={`${caveat} italic absolute -top-4 right-6 lg:-top-2 lg:right-12 text-[#f4d8a0] text-[18px] lg:text-[22px] rotate-[-4deg] drop-shadow-md`}>
            ne pas toucher
          </span>
        </div>

        <style>{`
          @keyframes glassRise { 0% { opacity: 0; transform: translateY(28px); filter: blur(10px); } 60% { opacity: 1; } 100% { opacity: 1; transform: translateY(0); filter: blur(0); } }
          @keyframes fadeUp { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        `}</style>

        <Link
          href="/fr/carnet"
          className={`group ${garamond} italic absolute bottom-8 left-1/2 -translate-x-1/2 inline-flex items-center gap-3 text-[15px] lg:text-[17px] text-[#fff7e3] px-7 py-3 border border-[#f4d8a0]/65 backdrop-blur-[6px] bg-black/20 hover:bg-[#f4d8a0] hover:text-[#1a0c04] transition-all duration-300 motion-safe:animate-[fadeUp_1.4s_ease-out_900ms_both]`}
        >
          <span>Pousser la porte</span>
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] w-full px-8 lg:px-16 pb-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/85 block drop-shadow-md`}>001 ·</span>
            <p className={`${garamond} italic text-[20px] lg:text-[24px] text-[#fff7e3] leading-snug mt-2 drop-shadow-md`}>La pierre choisit la main qui la taille.</p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:col-start-7">
            <span className={`${caveat} text-[14px] text-[#f4d8a0] italic drop-shadow-md`}>— un atelier, à Bordeaux</span>
            <p className={`${inter} text-[11px] text-[#fff7e3]/85 leading-relaxed mt-3 max-w-[28ch] drop-shadow-md`}>Chaque bague naît d&apos;une commande, d&apos;une main, d&apos;un nom. Aucun stock. Aucune répétition.</p>
          </div>
          <div className="col-span-12 lg:col-span-2 lg:col-start-11 self-end text-right">
            <span className={`${garamond} italic text-[14px] text-[#f4d8a0] block drop-shadow-md`}>voir</span>
            <span className={`${inter} text-[10px] uppercase tracking-[0.4em] text-[#f4d8a0]/85 block mt-1 drop-shadow-md`}>↓ collection</span>
          </div>
        </div>
      </div>
    </section>
  );
}
