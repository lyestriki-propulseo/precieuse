import { defineField, defineType } from "sanity";

const altField = defineField({
  name: "alt",
  title: "Texte alternatif",
  type: "localizedString",
});

export const homeContent = defineType({
  name: "homeContent",
  title: "Page d'accueil",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "image",
          title: "Image plein écran",
          type: "image",
          options: { hotspot: true },
          fields: [altField],
        }),
        defineField({ name: "eyebrow", title: "Surtitre", type: "localizedString" }),
        defineField({ name: "headline", title: "Titre", type: "localizedString" }),
        defineField({ name: "sub", title: "Sous-titre", type: "localizedText" }),
      ],
    }),
    defineField({
      name: "avantPropos",
      title: "Avant-propos",
      type: "object",
      fields: [
        defineField({ name: "heading", title: "Titre", type: "localizedString" }),
        defineField({
          name: "pairs",
          title: "Paires « pas… mais… »",
          type: "array",
          of: [
            defineField({
              name: "pair",
              title: "Paire",
              type: "object",
              fields: [
                defineField({ name: "pas", title: "Pas…", type: "localizedString" }),
                defineField({ name: "mais", title: "Mais…", type: "localizedText" }),
              ],
              preview: { select: { title: "pas.fr", subtitle: "mais.fr" } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "trustStrip",
      title: "Bandeau de confiance",
      type: "array",
      of: [
        defineField({
          name: "trustItem",
          title: "Item",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Titre", type: "localizedString" }),
            defineField({ name: "body", title: "Corps", type: "localizedString" }),
            defineField({ name: "note", title: "Note (manuscrite)", type: "localizedString" }),
          ],
          preview: { select: { title: "title.fr", subtitle: "body.fr" } },
        }),
      ],
    }),
    defineField({
      name: "visite",
      title: "Venir nous voir",
      type: "object",
      fields: [
        defineField({
          name: "addressLines",
          title: "Lignes d'adresse",
          type: "array",
          of: [{ type: "string" }],
        }),
        defineField({ name: "text", title: "Texte", type: "localizedText" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Page d'accueil" }),
  },
});
