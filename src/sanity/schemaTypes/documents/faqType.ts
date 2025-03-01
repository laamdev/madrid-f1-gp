import { defineField, defineType } from "sanity";

export const faqType = defineType({
  title: "FAQ",
  name: "faq",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Body",
      name: "body",
      type: "blockContent",
    }),
    defineField({
      title: "Is Global?",
      name: "isGlobal",
      description: "If true, the FAQ will be shown on the global FAQ page.",
      type: "boolean",
      initialValue: true,
    }),
  ],
});
