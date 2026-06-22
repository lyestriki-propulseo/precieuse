import { defineField, defineType } from "sanity";

export const creatricePage = defineType({
  name: "creatricePage",
  title: "Page Créatrice",
  type: "document",
  fields: [
    defineField({ name: "overline", title: "Surtitre", type: "localizedString" }),
    defineField({ name: "title", title: "Titre", type: "localizedString" }),
    defineField({ name: "intro", title: "Introduction", type: "localizedText" }),
    defineField({
      name: "portrait",
      title: "Portrait",
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
      name: "sections",
      title: "Sections",
      type: "array",
      of: [
        defineField({
          name: "section",
          title: "Section",
          type: "object",
          fields: [
            defineField({
              name: "overline",
              title: "Surtitre",
              type: "localizedString",
            }),
            defineField({ name: "title", title: "Titre", type: "localizedString" }),
            defineField({ name: "body", title: "Texte", type: "localizedText" }),
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
          ],
          preview: {
            select: { title: "title.fr", subtitle: "overline.fr", media: "image" },
          },
        }),
      ],
    }),
    defineField({ name: "quote", title: "Citation", type: "localizedText" }),
  ],
  preview: {
    prepare: () => ({ title: "Page Créatrice" }),
  },
});
