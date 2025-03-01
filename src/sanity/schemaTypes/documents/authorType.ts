import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  title: "Author",
  name: "author",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "Bio",
      name: "bio",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
