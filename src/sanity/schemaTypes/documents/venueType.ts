import { defineField, defineType } from "sanity";

export const venueType = defineType({
  title: "Venue",
  name: "venue",
  type: "document",
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
  ],
});
