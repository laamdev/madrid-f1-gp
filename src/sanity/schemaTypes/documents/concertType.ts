import { defineField, defineType } from "sanity";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";

import { DoorsOpenInput } from "@/components/sanity/doors-open-input";

export const concertType = defineType({
  name: "concert",
  title: "Concert",
  type: "document",
  icon: CalendarBlank,
  groups: [
    { name: "details", title: "Details" },
    { name: "editorial", title: "Editorial" },
  ],
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
      hidden: ({ document }) => !document?.name,
    }),
    defineField({
      name: "location",
      type: "string",
      options: {
        list: ["internal", "external"],
        layout: "radio",
      },
      initialValue: "internal",
    }),
    defineField({
      name: "venue",
      type: "reference",
      to: [{ type: "venue" }],
      hidden: ({ document }) => document?.location === "internal",
      // // readOnly: ({ value, document }) => {
      // //   if (document?.location === "internal") {
      // //     return true;
      // //   }
      // //   return false;
      // // },
      // // initialValue: async () => {
      // //   return {
      // //     _type: "reference",
      // //     _ref: "2902319e-c17d-49c7-9354-228d8a507df0",
      // //   };
      // // },
      // // validation: (rule) =>
      // //   rule.custom((value, context) => {
      // //     if (value && context?.document?.location === "internal") {
      // //       return "Only external concerts can have a venue";
      // //     }
      // //     return true;
      // //   }),
    }),
    defineField({
      name: "stage",
      type: "reference",
      to: [{ type: "stage" }],
      hidden: ({ document }) => document?.location === "external",
    }),
    defineField({
      name: "date",
      type: "datetime",
    }),
    defineField({
      name: "doorsOpen",
      description: "Number of minutes before the start time for admission",
      type: "number",
      initialValue: 60,
      group: "details",
      components: {
        input: DoorsOpenInput,
      },
    }),
    defineField({
      name: "lineup",
      type: "array",
      description:
        "If there is more than one artist, the one at the top is the headliner",
      of: [{ type: "reference", to: [{ type: "artist" }] }],
    }),
    defineField({
      name: "image",
      type: "image",
      description: "The image will be used as the main image for the concert",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "tickets",
      type: "url",
    }),
    defineField({
      name: "seo",
      type: "seo",
      group: "editorial",
    }),
  ],
  preview: {
    select: {
      name: "name",
      venue: "venue.name",
      artist: "artists[0].name",
      date: "date",
      image: "image",
    },
    prepare({ name, venue, artist, date, image }) {
      const nameFormatted = name || "Untitled concert";
      const dateFormatted = date
        ? new Date(date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          })
        : "No date";

      return {
        title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
        subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
        media: image || CalendarBlank,
      };
    },
  },
});
