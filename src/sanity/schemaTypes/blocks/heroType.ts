import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  title: "Hero",
  name: "hero",
  type: "object",
  icon: TextIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Text",
      name: "text",
      type: "blockContent",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Hero",
        media: media ?? TextIcon,
      };
    },
  },
});
