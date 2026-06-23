import { LegalPage } from "@/components/sections/LegalPage";
import { getLegalPage } from "@/sanity/lib/content";
import { pickLocale } from "@/sanity/lib/i18n";

export const metadata = { title: "CGV" };

const L = "fr" as const;

export default async function CgvPage() {
  const page = await getLegalPage("cgv");
  const title = pickLocale(page?.title, L) || "Conditions générales de vente";
  return (
    <LegalPage
      title={title}
      overline="Conditions de commande"
    >
      <h2>Objet</h2>
      <p>
        Les présentes conditions régissent les ventes de bijoux Précieuse,
        qu&apos;il s&apos;agisse de pièces de la collection ou de créations
        sur-mesure.
      </p>
      <h2>Commande</h2>
      <p>
        Toute commande est précédée d&apos;un échange (mail, téléphone,
        rendez-vous) permettant de valider le choix du modèle, des matériaux
        et du prix. Un devis détaillé est ensuite émis.
      </p>
      <h2>Acompte et fabrication</h2>
      <p>
        Un acompte de 50% est demandé à la validation du devis. La fabrication
        commence après réception. Le solde est dû à la livraison.
      </p>
      <h2>Délais</h2>
      <p>
        Les pièces de la collection sont livrées sous 4 à 6 semaines. Les
        créations sur-mesure sous 6 à 10 semaines selon la complexité.
      </p>
      <h2>Garantie</h2>
      <p>
        Chaque bijou bénéficie d&apos;une garantie de fabrication de 2 ans
        couvrant tout défaut d&apos;ouvrage. Les défauts liés à un usage
        anormal ne sont pas couverts.
      </p>
      <h2>Rétractation</h2>
      <p>
        Conformément à la loi, les pièces personnalisées (sur-mesure ou
        modèles de la collection avec personnalisation) ne sont pas
        éligibles au droit de rétractation.
      </p>
    </LegalPage>
  );
}
