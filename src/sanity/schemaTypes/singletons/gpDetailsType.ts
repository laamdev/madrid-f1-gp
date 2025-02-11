import { defineField, defineType } from "sanity";

import { FlagCheckered } from "@phosphor-icons/react/dist/ssr";

export const gpDetailsType = defineType({
  name: "gpDetails",
  title: "GP Details",
  description: "Details of the 2026 F1 Spanish GP.",
  type: "document",
  icon: FlagCheckered,
  groups: [
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      description: "Name of the GP.",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location",
      description: "Location of the GP.",
      type: "object",
      fields: [
        defineField({
          name: "circuit",
          title: "Circuit",
          type: "string",
        }),
        defineField({
          name: "country",
          title: "Country",
          type: "string",
        }),
        defineField({
          name: "city",
          title: "City",
          type: "string",
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
    defineField({
      name: "raceDate",
      title: "Race Date",
      description: "Date of the GP.",
      type: "date",
    }),
    defineField({
      name: "track",
      title: "Track Details",
      description: "Details of the circuit.",
      type: "array",
      of: [{ type: "stat" }],
    }),
    defineField({
      name: "racingSchedule",
      title: "Racing Schedule",
      description: "Racing schedule for the GP weekend.",
      type: "array",
      of: [{ type: "raceEvent" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      description: "Metadata details for the GP's home page.",
      type: "seo",
      group: "editorial",
    }),
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare(selection) {
      const { name } = selection;
      return {
        title: name,
      };
    },
  },
});
