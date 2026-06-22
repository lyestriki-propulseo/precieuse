import { defineField, defineType } from "sanity";

export const temoignage = defineType({
  name: "temoignage",
  title: "Témoignage",
  type: "document",
  // NOTE seed: placeholders actuels — à remplacer par de vrais avis (Eméline).
  fields: [
    defineField({
      name: "placeholder",
      title: "Placeholder ?",
      type: "boolean",
      description: "À remplacer par un vrai avis. À décocher une fois validé.",
      initialValue: true,
    }),
    defineField({
      name: "citation",
      title: "Citation",
      type: "localizedText",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "auteur",
      title: "Auteur",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "ville", title: "Ville", type: "string" }),
    defineField({ name: "date", title: "Date", type: "date" }),
    defineField({
      name: "piece",
      title: "Pièce associée",
      type: "reference",
      to: [{ type: "piece" }],
    }),
    defineField({
      name: "context",
      title: "Contexte (libre)",
      type: "localizedString",
      description: "Ex. « Création sur-mesure » si aucune pièce n'est liée.",
    }),
  ],
  preview: {
    select: { title: "auteur", subtitle: "citation.fr" },
  },
});
