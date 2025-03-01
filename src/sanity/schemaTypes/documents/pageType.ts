import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const pageType = defineType({
  title: "Page",
  name: "page",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      title: "Content",
      name: "content",
      type: "pageBuilder",
    }),
    defineField({
      title: "Main Image",
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: "SEO",
      name: "seo",
      type: "seo",
    }),
    defineField({
      title: "Social",
      name: "social",
      type: "social",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
    },
  },
});
