export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const BESPOKE_PROCESS: ProcessStep[] = [
  {
    number: "01",
    title: "Vous m'appelez",
    description:
      "Nous discutons de votre vision, vos préférences, votre budget, votre délai. Un moment privilégié, sans engagement.",
  },
  {
    number: "02",
    title: "Je dessine",
    description:
      "Je crée deux ou trois esquisses à partir de votre brief. Chaque croquis explore une direction différente.",
  },
  {
    number: "03",
    title: "Vous validez",
    description:
      "Vous choisissez une esquisse, nous affinons ensemble les détails — pierre finale, taille, finitions.",
  },
  {
    number: "04",
    title: "Je fabrique",
    description:
      "Fabrication complète à Bordeaux, en fonte à cire perdue, selon les techniques artisanales. Quatre à huit semaines.",
  },
  {
    number: "05",
    title: "Vous recevez",
    description:
      "Livraison sécurisée, accompagnée d'un certificat d'authenticité et de conseils d'entretien.",
  },
];
