import { defineField, defineType } from "sanity";

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
  ],
});
