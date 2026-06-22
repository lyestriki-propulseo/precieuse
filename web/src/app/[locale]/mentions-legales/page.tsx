import { LegalPage } from "@/components/sections/LegalPage";
import { SITE } from "@/lib/content/site";

export const metadata = { title: "Mentions légales — Précieuse" };

export default function MentionsLegalesPage() {
  return (
    <LegalPage title="Mentions légales" overline="Informations légales">
      <h2>Éditeur</h2>
      <p>
        Le site {SITE.brand} est édité par Eméline [Nom de famille], joaillière
        artisanale, immatriculée [SIRET — à compléter].
      </p>
      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA —
        <a href="https://vercel.com"> vercel.com</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Email : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus (textes, photographies, dessins, logos)
        présents sur ce site sont la propriété exclusive de {SITE.brand}, sauf
        mention contraire. Toute reproduction sans autorisation est interdite.
      </p>
    </LegalPage>
  );
}
