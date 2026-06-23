import Link from "next/link";
import { V4CNav } from "@/components/v4c/V4CNav";
import { V4CDernieresCreations } from "@/components/v4c/V4CDernieresCreations";
import { navigationSeed } from "@/sanity/seed";
import { toNavLinks } from "@/sanity/lib/view-models";

export const metadata = {
  title: "Dernières créations — preview",
};

const garamond = "font-[family-name:var(--font-eb-garamond)]";

export default function DerniereCreationPreview() {
  return (
    <div className="-mt-16 bg-[#f4ede0] text-[#3d2817] antialiased min-h-screen">
      <V4CNav links={toNavLinks(navigationSeed, "fr")} />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-[1440px] px-8 mb-8">
          <Link
            href="/fr/v4c"
            className={`${garamond} italic text-[15px] text-[#a08552] underline underline-offset-4 decoration-[#a08552]/40 hover:decoration-[#a08552] transition-all`}
          >
            ← retour à v4c
          </Link>
        </div>
        <V4CDernieresCreations />
      </main>
    </div>
  );
}
