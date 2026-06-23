import { LegalPage } from "@/components/sections/LegalPage";
import { getLegalPage, getSiteSettings } from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";

export const metadata = { title: "Mentions légales" };

const L = "fr" as const;

export default async function MentionsLegalesPage() {
  const [settings, page] = await Promise.all([
    getSiteSettings(),
    getLegalPage("mentions-legales"),
  ]);
  const brand = settings.brand;
  const email = settings.email;
  const title = pickLocale(page?.title, L) || "Mentions légales";
  return (
    <LegalPage title={title} overline="Informations légales">
      <h2>Éditeur</h2>
      <p>
        Le site {brand} est édité par Emeline [Nom de famille], joaillière
        artisanale, immatriculée [SIRET — à compléter].
      </p>
      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA —
        <a href="https://vercel.com"> vercel.com</a>.
      </p>
      <h2>Contact</h2>
      <p>
        Email : <a href={`mailto:${email}`}>{email}</a>
      </p>
      <h2>Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble des contenus (textes, photographies, dessins, logos)
        présents sur ce site sont la propriété exclusive de {brand}, sauf
        mention contraire. Toute reproduction sans autorisation est interdite.
      </p>
    </LegalPage>
  );
}
