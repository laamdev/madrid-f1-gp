import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "title",
      description: "If provided, this will override the title field",
      type: "string",
    }),
    defineField({
      name: "description",
      description: "If provided, this will override the description field",
      type: "text",
    }),

    defineField({
      name: "image",
      type: "image",
      description: "If provided, this will override the OG image field",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
    }),
  ],
});
