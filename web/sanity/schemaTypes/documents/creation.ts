import { defineField, defineType } from "sanity";

export const creation = defineType({
  name: "creation",
  title: "Création (Carnet / Galerie)",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "subtitle", title: "Sous-titre", type: "localizedString" }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "localizedString",
        }),
      ],
    }),
    defineField({
      name: "story",
      title: "Récit (paragraphes)",
      type: "object",
      fields: [
        defineField({
          name: "fr",
          title: "Français",
          type: "array",
          of: [{ type: "text", rows: 3 }],
        }),
        defineField({
          name: "en",
          title: "English",
          type: "array",
          of: [{ type: "text", rows: 3 }],
        }),
      ],
    }),
    defineField({ name: "matiere", title: "Matières", type: "localizedString" }),
    defineField({ name: "year", title: "Année", type: "string" }),
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "Vendue", value: "vendue" },
          { title: "Disponible", value: "disponible" },
          { title: "Signature", value: "signature" },
        ],
        layout: "radio",
      },
      initialValue: "disponible",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Ordre d'affichage",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "year", media: "image" },
  },
});
