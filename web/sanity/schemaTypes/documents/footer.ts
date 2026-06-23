import { defineField, defineType } from "sanity";

const linkObject = defineField({
  name: "link",
  title: "Lien",
  type: "object",
  fields: [
    defineField({ name: "label", title: "Libellé", type: "localizedString" }),
    defineField({ name: "href", title: "URL / chemin", type: "string" }),
  ],
  preview: { select: { title: "label.fr", subtitle: "href" } },
});

export const footer = defineType({
  name: "footer",
  title: "Pied de page",
  type: "document",
  fields: [
    defineField({
      name: "primaryNav",
      title: "Navigation principale",
      type: "array",
      of: [linkObject],
    }),
    defineField({
      name: "legalNav",
      title: "Navigation légale",
      type: "array",
      of: [linkObject],
    }),
    defineField({
      name: "social",
      title: "Réseaux sociaux",
      type: "array",
      of: [linkObject],
    }),
    defineField({ name: "copyright", title: "Copyright", type: "localizedString" }),
  ],
  preview: {
    prepare: () => ({ title: "Pied de page" }),
  },
});
