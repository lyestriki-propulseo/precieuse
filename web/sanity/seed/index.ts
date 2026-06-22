/**
 * LOCAL TYPED SEED — fallback content served by the data-access layer while
 * the Sanity project does not yet exist (`isSanityConfigured === false`).
 *
 * Content mirrors `web/src/lib/content/*` and the live V4C components, WITH the
 * client retours (Eméline, 22/06/2026) already applied:
 *   - Récit : Bordeaux / France, or 18 carats (jamais 19).
 *   - Matières : « or sourcé et tracé grâce au traité de Kimberley », certifs GIA/HRD.
 *   - Avant-propos : « Atelier » (et non « MAISON »).
 *   - Créatrice : « Emeline » sans accent (12 ans OK).
 *   - Sur-mesure : pas d'anglicismes, fabrication Bordeaux.
 *   - Prix : « Sur devis » partout (aucun « à partir de X € »).
 *   - Témoignages : placeholders flaggés (à remplacer par de vrais avis).
 *
 * FR populated; EN left empty for now (filled in a later pass).
 */
import type {
  SeedCreatricePage,
  SeedCreation,
  SeedEtape,
  SeedFooter,
  SeedHomeContent,
  SeedLegalPage,
  SeedMatiere,
  SeedNavigation,
  SeedPiece,
  SeedSiteSettings,
  SeedTemoignage,
} from "./types";

export const siteSettingsSeed: SeedSiteSettings = {
  brand: "Précieuse",
  baseline: { fr: "Joaillerie artisanale · Bordeaux", en: "" },
  phone: "",
  email: "atelier@precieuse-joaillerie.com",
  whatsapp: "https://wa.me/33000000000",
  instagram: "https://instagram.com/precieusejoaillerie",
  address: {
    street: "[Adresse Bordeaux — à confirmer]",
    zip: "",
    city: "Bordeaux",
    country: "France",
  },
  defaultColor: "teal",
  seoTitle: {
    fr: "Précieuse — Joaillerie artisanale, Bordeaux",
    en: "",
  },
  seoDescription: {
    fr: "Bijoux en or 18 carats et diamants, dessinés et fabriqués à la main à Bordeaux.",
    en: "",
  },
};

export const piecesSeed: SeedPiece[] = [
  {
    slug: "josephine",
    name: "Joséphine",
    tagline: { fr: "La bague entourage intemporelle", en: "" },
    priceLabel: { fr: "Sur devis", en: "" },
    description: {
      fr: "On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeules. Joséphine incarne la délicatesse du halo de diamants pavés autour d'une pierre centrale. Chaque détail est travaillé pour la rendre aussi confortable que belle à l'œil.",
      en: "",
    },
    materials: {
      fr: "Or 18 carats (jaune, blanc ou rose) · Diamants pavés certifiés GIA/HRD · Pierre centrale au choix",
      en: "",
    },
    story: {
      fr: "Inspirée des bagues de transmission familiale, Joséphine incarne le lien entre générations. Son design épuré mais généreux en matière fait ressentir la qualité du savoir-faire — chaque pavage est positionné pour maximiser la lumière.",
      en: "",
    },
    image: {
      src: "/images/bijoux-officiels/josephine.jpg",
      alt: { fr: "Bague Joséphine — entourage diamants", en: "" },
    },
  },
  {
    slug: "aurore",
    name: "Aurore",
    tagline: { fr: "La promesse d'un nouveau jour", en: "" },
    priceLabel: { fr: "Sur devis", en: "" },
    description: {
      fr: "Aurore évoque la lumière naissante : un solitaire délicat où la pierre semble suspendue, posée sur un anneau fin comme un trait. Pensée pour se porter seule ou se superposer, elle accompagne tous les gestes du quotidien.",
      en: "",
    },
    materials: {
      fr: "Or 18 carats · Diamant central certifié GIA/HRD · Anneau 1,8 mm",
      en: "",
    },
    story: {
      fr: "Le premier modèle dessiné après une nuit blanche, en pensant à toutes celles qui veulent une bague qui ne s'oublie jamais — sans jamais se faire remarquer.",
      en: "",
    },
    image: {
      src: "/images/bijoux-officiels/aurore.jpg",
      alt: { fr: "Bague Aurore — solitaire diamant", en: "" },
    },
  },
  {
    slug: "eugenie",
    name: "Eugénie",
    tagline: { fr: "La signature poétique", en: "" },
    priceLabel: { fr: "Sur devis", en: "" },
    description: {
      fr: "Eugénie est une trilogie : trois pierres pour trois temps — hier, aujourd'hui, demain. La monture est travaillée en griffes fines pour libérer la lumière, et l'anneau s'évase légèrement vers la pierre centrale.",
      en: "",
    },
    materials: {
      fr: "Or 18 carats · Trois diamants gradués certifiés GIA/HRD · Possibilité saphir, rubis ou émeraude central",
      en: "",
    },
    story: {
      fr: "Pensée pour célébrer un cap — un anniversaire, une décennie, une étape. Chaque pierre raconte un moment, et l'ensemble fait récit.",
      en: "",
    },
    image: {
      src: "/images/bijoux-officiels/eugenie.png",
      alt: { fr: "Bague Eugénie — dessin original", en: "" },
    },
  },
  {
    slug: "thelma",
    name: "Thelma",
    tagline: { fr: "L'audace tranquille", en: "" },
    priceLabel: { fr: "Sur devis", en: "" },
    description: {
      fr: "Thelma joue avec les volumes : une pierre généreuse, une monture sculpturale, un équilibre tenu entre force et grâce. C'est la bague de celles qui ne demandent pas la permission.",
      en: "",
    },
    materials: {
      fr: "Or 18 carats · Pierre centrale 1 ct minimum (diamant ou couleur) · Pavage optionnel",
      en: "",
    },
    story: {
      fr: "Née d'une commande pour une femme qui voulait « une bague qu'on remarque sans qu'elle hurle ». Le résultat : une pièce ample, mais portée au quotidien sans accroche.",
      en: "",
    },
    image: {
      src: "/images/bijoux-officiels/thelma.jpg",
      alt: { fr: "Bague Thelma — pierre centrale sculptée", en: "" },
    },
  },
  {
    slug: "louise",
    name: "Louise",
    tagline: { fr: "L'éternelle alliance", en: "" },
    priceLabel: { fr: "Sur devis", en: "" },
    description: {
      fr: "Louise est une alliance, mais pas n'importe laquelle : un demi-tour de diamants pavés, un confort millimétré, une finition main qui se lit à la lumière. À porter seule ou en duo avec une autre pièce de la collection.",
      en: "",
    },
    materials: {
      fr: "Or 18 carats · Pavage demi-tour diamants certifiés GIA/HRD · Largeur 2 ou 3 mm au choix",
      en: "",
    },
    story: {
      fr: "Le modèle le plus discret de la collection, et pourtant celui qui revient le plus souvent dans les commandes — la preuve que l'évidence ne se démode pas.",
      en: "",
    },
    image: {
      src: "/images/bijoux-officiels/louise.jpg",
      alt: { fr: "Bague Louise — alliance pavée", en: "" },
    },
  },
];

export const matieresSeed: SeedMatiere[] = [
  {
    slug: "or-18kt",
    nom: "Or 18 carats",
    sousTitre: { fr: "sourcé et tracé", en: "" },
    description: {
      fr: "Or 18 carats jaune, blanc ou rose, travaillé à la main dans notre atelier à Bordeaux. Un or sourcé et tracé grâce au traité de Kimberley, choisi pour son éclat chaud et sa tenue — pensé pour durer.",
      en: "",
    },
    image: {
      src: "/images/matieres/or-19kt-v2.jpg",
      alt: { fr: "Anneau d'or 18 carats poli, posé sur un galet de marbre blanc", en: "" },
    },
    annotationCaveat: { fr: "sourcé et tracé · Kimberley", en: "" },
    page: "p. 05",
  },
  {
    slug: "diamants",
    nom: "Diamants",
    sousTitre: { fr: "certifiés GIA/HRD", en: "" },
    description: {
      fr: "Diamants taille brillant, navette et baguette, certifiés GIA ou HRD. Chaque pierre est sourcée et tracée grâce au traité de Kimberley, puis sertie à la main pour libérer la lumière au maximum.",
      en: "",
    },
    image: {
      src: "/images/matieres/diamants-gvs-v2.jpg",
      alt: { fr: "Diamant taille poire posé sur podium céramique beige", en: "" },
    },
    annotationCaveat: { fr: "certifiés GIA/HRD", en: "" },
    page: "p. 06",
  },
  {
    slug: "saphirs",
    nom: "Saphirs",
    sousTitre: { fr: "bleu de roi · padparadscha", en: "" },
    description: {
      fr: "Saphirs bleu de roi, jaune miel ou padparadscha rose-orangé, sourcés en Birmanie ou au Sri Lanka. Sur commande pour les pièces sur-mesure.",
      en: "",
    },
    image: {
      src: "/images/matieres/saphirs-v2.jpg",
      alt: { fr: "Saphir bleu taille émeraude posé sur podium céramique beige", en: "" },
    },
    annotationCaveat: { fr: "sur commande", en: "" },
    page: "p. 07",
  },
  {
    slug: "emeraudes",
    nom: "Émeraudes",
    sousTitre: { fr: "Colombie · Zambie", en: "" },
    description: {
      fr: "Émeraudes colombiennes (vert intense, jardin caractéristique) ou zambiennes (vert plus froid, plus pures). Une matière vivante, jamais identique.",
      en: "",
    },
    image: {
      src: "/images/matieres/emeraudes-v2.jpg",
      alt: { fr: "Émeraude verte taille émeraude posée sur podium céramique beige", en: "" },
    },
    annotationCaveat: { fr: "vivantes, jamais identiques", en: "" },
    page: "p. 08",
  },
  {
    slug: "rubis",
    nom: "Rubis",
    sousTitre: { fr: "rouge sang de pigeon", en: "" },
    description: {
      fr: "Rubis Mozambique ou Birmanie, du rouge framboise au mythique sang de pigeon. Pierre de cœur, signature des pièces les plus émotionnelles.",
      en: "",
    },
    image: {
      src: "/images/matieres/rubis-v2.jpg",
      alt: { fr: "Rubis rose taille émeraude posé sur podium céramique beige", en: "" },
    },
    annotationCaveat: { fr: "pierre de cœur", en: "" },
    page: "p. 09",
  },
];

export const processSeed: SeedEtape[] = [
  {
    number: "01",
    title: { fr: "Vous m'appelez", en: "" },
    description: {
      fr: "Nous discutons de votre projet, vos préférences, votre budget, votre délai. Un moment privilégié, sans engagement.",
      en: "",
    },
  },
  {
    number: "02",
    title: { fr: "Je dessine", en: "" },
    description: {
      fr: "Je crée deux ou trois esquisses à partir de vos envies. Chaque croquis explore une direction différente.",
      en: "",
    },
  },
  {
    number: "03",
    title: { fr: "Vous validez", en: "" },
    description: {
      fr: "Vous choisissez une esquisse, nous affinons ensemble les détails — pierre finale, taille, finitions.",
      en: "",
    },
  },
  {
    number: "04",
    title: { fr: "Je fabrique", en: "" },
    description: {
      fr: "Fabrication complète à Bordeaux, en fonte à cire perdue, selon les techniques artisanales. Quatre à huit semaines.",
      en: "",
    },
  },
  {
    number: "05",
    title: { fr: "Vous recevez", en: "" },
    description: {
      fr: "Remise sécurisée, accompagnée d'un certificat d'authenticité et de conseils d'entretien.",
      en: "",
    },
  },
];

// NOTE: placeholders — à remplacer par de vrais avis (Eméline).
export const temoignagesSeed: SeedTemoignage[] = [
  {
    placeholder: true,
    citation: {
      fr: "Eméline est tout simplement une artiste. Les bijoux qu'elle a créés pour moi se sont révélés magnifiques, le résultat est au-delà de ce que j'avais imaginé. Je suis émue et enthousiasmée.",
      en: "",
    },
    auteur: "Martine B.",
    context: { fr: "Création sur-mesure", en: "" },
  },
  {
    placeholder: true,
    citation: {
      fr: "Très contente de votre création pour ma bague. Très professionnelle, agréable et sympathique. Je recommande sans hésiter.",
      en: "",
    },
    auteur: "Sandrine L.",
    context: { fr: "Bague serpentine sur-mesure", en: "" },
  },
  {
    placeholder: true,
    citation: {
      fr: "On sent dans chaque pièce le temps passé, la précision, l'amour du métier. Je porte ma bague tous les jours depuis deux ans, elle est toujours aussi belle.",
      en: "",
    },
    auteur: "Camille R.",
    context: { fr: "Modèle Joséphine", en: "" },
  },
];

export const creationsSeed: SeedCreation[] = [
  // Signatures (Carnet)
  {
    slug: "josephine",
    name: "Joséphine",
    subtitle: { fr: "Le joyau familial", en: "" },
    image: {
      src: "/images/carnet/josephine-vert.jpg",
      alt: { fr: "Bague Joséphine sur fond vert", en: "" },
    },
    story: {
      fr: [
        "On en hérite, on l'admire depuis l'enfance sur les mains de nos aïeuls. On la rêve. Elle se transmet et on l'arbore comme un joyau familial — un objet réconfortant, chargé de souvenirs.",
        "De loin, ma petite préférence.",
      ],
      en: [],
    },
    matiere: { fr: "Or jaune · diamant central · entourage diamants", en: "" },
    year: "2017",
    status: "signature",
  },
  {
    slug: "aurore",
    name: "Aurore",
    subtitle: { fr: "Comme la lumière du matin", en: "" },
    image: {
      src: "/images/carnet/aurore-fond.jpg",
      alt: { fr: "Bague Aurore", en: "" },
    },
    story: {
      fr: [
        "Aurore est née un matin où la lumière entrait par la fenêtre de l'atelier, juste comme ça. J'ai pris mon crayon avant le café — le premier trait était déjà là.",
        "Une fleur de diamants, taillée pour capter chaque rayon. Des pièces comme celle-ci, on les rêve avant de les dessiner.",
      ],
      en: [],
    },
    matiere: { fr: "Or jaune · diamants poire et brillants", en: "" },
    year: "2023",
    status: "signature",
  },
  {
    slug: "louise",
    name: "Louise",
    subtitle: { fr: "L'évidence après quatre essais", en: "" },
    image: {
      src: "/images/carnet/louise-triangles.jpg",
      alt: { fr: "Bague Louise — deux triangles de diamants", en: "" },
    },
    story: {
      fr: [
        "Louise voulait une bague qui durerait. Pas une pièce de saison — un compagnon. On a redessiné trois fois.",
        "La quatrième, elle a souri sans rien dire. Deux triangles de diamants, une ligne d'or, c'était celle-là.",
      ],
      en: [],
    },
    matiere: { fr: "Or jaune · deux diamants triangles", en: "" },
    year: "2024",
    status: "signature",
  },
  // Galerie — pièces avec photo
  {
    slug: "rhodolite",
    name: "Rhodolite & aigue-marine",
    subtitle: { fr: "", en: "" },
    image: {
      src: "/images/carnet/rhodolite-2021.jpg",
      alt: { fr: "Bague rhodolite et aigue-marine", en: "" },
    },
    story: {
      fr: [
        "Pièce unique. Une rhodolite profonde encadrée d'une aigue-marine et de diamants — chaleur et fraîcheur côte à côte.",
      ],
      en: [],
    },
    matiere: {
      fr: "Or jaune 18 carats · rhodolite · aigue-marine · diamants",
      en: "",
    },
    year: "2021",
    status: "vendue",
  },
  {
    slug: "calcedoine",
    name: "Cocktail de Bordeaux",
    subtitle: { fr: "", en: "" },
    image: {
      src: "/images/carnet/calcedoine-2021.jpg",
      alt: { fr: "Bague calcédoine et saphirs", en: "" },
    },
    story: {
      fr: [
        "Une pierre laiteuse vert d'eau encadrée de couleurs tendres. Un bijou qui se porte comme on porte un cocktail — léger, vibrant, sans hésiter.",
      ],
      en: [],
    },
    matiere: {
      fr: "Or jaune 18 carats · calcédoine · saphir · saphir rose · diamants",
      en: "",
    },
    year: "mars 2021",
    status: "vendue",
  },
  {
    slug: "santa-maria",
    name: "Santa Maria",
    subtitle: { fr: "", en: "" },
    image: {
      src: "/images/carnet/santa-maria-bague.jpg",
      alt: { fr: "Bague aigue-marine Santa Maria", en: "" },
    },
    story: {
      fr: [
        "Cette aigue-marine, je l'ai choisie comme on tombe amoureuse — celle-ci avait cet éclat particulier. Une bague ancienne mais pas trop, juste ce qu'il faut de diamants.",
      ],
      en: [],
    },
    matiere: {
      fr: "Or blanc 18 carats · aigue-marine Santa Maria · diamants",
      en: "",
    },
    year: "2022",
    status: "vendue",
  },
  // Galerie — vignettes texte (pas de photo)
  {
    slug: "aigue-bordeaux",
    name: "Aigue-marine de Bordeaux",
    subtitle: { fr: "", en: "" },
    story: {
      fr: [
        "Bleu clair, presque transparent — comme un souffle retenu. Pensée pour reposer juste au creux du cou.",
      ],
      en: [],
    },
    matiere: { fr: "Or jaune · aigue-marine brésilienne · diamants", en: "" },
    year: "2022",
    status: "vendue",
  },
  {
    slug: "martine",
    name: "Bague Martine",
    subtitle: { fr: "", en: "" },
    story: {
      fr: [
        "Quand le sur-mesure dépasse les frontières. Six mois pour dénicher la pierre — un rubis qu'on admire sans retenue.",
      ],
      en: [],
    },
    matiere: { fr: "Or blanc · rubis sang de pigeon · pavage diamants", en: "" },
    year: "mai 2019",
    status: "vendue",
  },
];

export const creatricePageSeed: SeedCreatricePage = {
  overline: { fr: "La créatrice", en: "" },
  title: { fr: "Moi c'est Emeline.", en: "" },
  intro: {
    fr: "Joaillière artisanale, je fabrique le bijou de vos rêves. Douze ans à travailler l'or — tous les jours. Ça laisse des traces, et surtout du savoir-faire.",
    en: "",
  },
  portrait: {
    src: "/images/emeline/emeline-atelier.jpg",
    alt: { fr: "Emeline, joaillière artisanale, dans son atelier", en: "" },
  },
  sections: [
    {
      overline: { fr: "Le parcours", en: "" },
      title: { fr: "De la formation à l'atelier", en: "" },
      body: {
        fr: "Formation en joaillerie, puis douze années à pratiquer chaque technique au quotidien — fonte à cire perdue, sertissage, polissage main. Chaque bague que je crée passe par mes mains, du dessin initial au polissage final. C'est exigeant, c'est précis, c'est lent. Et c'est ce qui rend chaque pièce unique et pérenne.",
        en: "",
      },
      image: {
        src: "/images/atelier/bague-en-fabrication.jpg",
        alt: { fr: "Bague en cours de fabrication sur l'établi", en: "" },
      },
    },
    {
      overline: { fr: "La philosophie", en: "" },
      title: { fr: "Pas de compromis, pas de raccourci.", en: "" },
      body: {
        fr: "Il y a des jours de doutes. Mais c'est dans ces moments-là que je me recentre sur l'essentiel : créer des bijoux qui racontent votre histoire, qui deviennent une part de vous. Pas de compromis sur la matière, pas de raccourci sur le savoir-faire. Précieuse, c'est cela : la transparence de l'artisanat, la confiance du geste.",
        en: "",
      },
    },
  ],
  quote: {
    fr: "Ce que personne ne voit derrière un bijou artisanal — et que personne n'a pris le temps de vous expliquer.",
    en: "",
  },
};

export const homeContentSeed: SeedHomeContent = {
  hero: {
    image: {
      src: "/images/gemmyo.jpg",
      alt: { fr: "Bijou Précieuse en vitrine", en: "" },
    },
    eyebrow: { fr: "Un atelier, à Bordeaux", en: "" },
    headline: { fr: "Précieuse", en: "" },
    sub: {
      fr: "La pierre choisit la main qui la taille. Chaque bague naît d'une commande, d'une main, d'un nom. Aucun stock. Aucune répétition.",
      en: "",
    },
  },
  avantPropos: {
    heading: { fr: "Atelier Précieuse", en: "" },
    pairs: [
      {
        pas: { fr: "pas de saison", en: "" },
        mais: { fr: "Des pièces dessinées pour traverser le temps.", en: "" },
      },
      {
        pas: { fr: "pas de stock", en: "" },
        mais: { fr: "Une fabrication à l'unité, à partir d'une commande.", en: "" },
      },
      {
        pas: { fr: "pas d'usine", en: "" },
        mais: {
          fr: "Une main, un atelier, un geste — du dessin au sertissage.",
          en: "",
        },
      },
      {
        pas: { fr: "pas d'or anonyme", en: "" },
        mais: {
          fr: "Or 18 carats sourcé et tracé grâce au traité de Kimberley, pierres précieuses choisies une à une.",
          en: "",
        },
      },
    ],
  },
  trustStrip: [
    {
      title: { fr: "Savoir-faire", en: "" },
      body: { fr: "Atelier Bordeaux, cire perdue", en: "" },
      note: { fr: "depuis 2019", en: "" },
    },
    {
      title: { fr: "Remise", en: "" },
      body: { fr: "Coffret main, suivi inclus", en: "" },
      note: { fr: "partout en Europe", en: "" },
    },
    {
      title: { fr: "Garantie", en: "" },
      body: { fr: "À vie, gravure offerte", en: "" },
      note: { fr: "sans condition", en: "" },
    },
  ],
  visite: {
    addressLines: [
      "[Adresse Bordeaux — à confirmer]",
      "Bordeaux",
      "sur rendez-vous, du mardi au samedi",
      "10h — 18h",
    ],
    text: {
      fr: "L'atelier n'est pas une boutique. C'est un lieu de travail, ouvert à celles et ceux qui viennent avec une intention.",
      en: "",
    },
  },
};

export const legalPagesSeed: SeedLegalPage[] = [
  {
    slug: "mentions-legales",
    title: { fr: "Mentions légales", en: "" },
    body: {
      fr: [
        "Éditeur du site : Précieuse — Emeline Le Ray, joaillière artisanale à Bordeaux.",
        "[Contenu à compléter — raison sociale, SIRET, hébergeur, directeur de publication.]",
      ],
      en: [],
    },
  },
  {
    slug: "confidentialite",
    title: { fr: "Politique de confidentialité", en: "" },
    body: {
      fr: [
        "Vos données ne sont utilisées que pour traiter vos demandes de contact et de devis.",
        "[Contenu à compléter — finalités, durée de conservation, droits RGPD, contact DPO.]",
      ],
      en: [],
    },
  },
  {
    slug: "cgv",
    title: { fr: "Conditions générales de vente", en: "" },
    body: {
      fr: [
        "Toutes les pièces sont fabriquées à la main à Bordeaux, sur devis.",
        "[Contenu à compléter — commande, paiement, délais, garantie, rétractation.]",
      ],
      en: [],
    },
  },
];

export const navigationSeed: SeedNavigation = {
  links: [
    { label: { fr: "La Collection", en: "" }, href: "/fr/collection" },
    { label: { fr: "Le Carnet", en: "" }, href: "/fr/carnet" },
    { label: { fr: "La Créatrice", en: "" }, href: "/fr/creatrice" },
    { label: { fr: "Sur-mesure", en: "" }, href: "/fr/sur-mesure" },
    { label: { fr: "Contact", en: "" }, href: "/fr/contact" },
  ],
};

export const footerSeed: SeedFooter = {
  primaryNav: [
    { label: { fr: "La Collection", en: "" }, href: "/fr/collection" },
    { label: { fr: "Le Carnet", en: "" }, href: "/fr/carnet" },
    { label: { fr: "La Créatrice", en: "" }, href: "/fr/creatrice" },
    { label: { fr: "Sur-mesure", en: "" }, href: "/fr/sur-mesure" },
  ],
  legalNav: [
    { label: { fr: "Mentions légales", en: "" }, href: "/fr/mentions-legales" },
    { label: { fr: "Confidentialité", en: "" }, href: "/fr/confidentialite" },
    { label: { fr: "CGV", en: "" }, href: "/fr/cgv" },
  ],
  social: [
    { label: { fr: "Instagram", en: "" }, href: "https://instagram.com/precieusejoaillerie" },
    { label: { fr: "Pinterest", en: "" }, href: "https://pinterest.com" },
  ],
  copyright: {
    fr: "© Précieuse — Joaillerie artisanale, Bordeaux, France",
    en: "",
  },
};
