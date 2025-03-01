import { defineField, defineType } from "sanity";
import { Gear } from "@phosphor-icons/react/dist/ssr";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: Gear,
  fields: [
    defineField({
      name: "aboutPage",
      type: "reference",
      to: [{ type: "page" }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings",
      };
    },
  },
});
