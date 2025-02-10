import { defineField, defineType } from "sanity";

export const faqType = defineType({
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
    defineField({
      name: "isGlobal",
      title: "Is Global?",
      description: "If true, the FAQ will be shown on the global FAQ page.",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
