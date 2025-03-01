import { defineField, defineType } from "sanity";
import { Ticket } from "@phosphor-icons/react/dist/ssr";

export const ticketType = defineType({
  title: "Ticket",
  name: "ticketType",
  type: "document",
  icon: Ticket,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      description:
        "The name of the ticket type (e.g. Grandstand T1, General Admission)",
    }),
    defineField({
      title: "Slug",
      name: "slug",
      type: "slug",
      options: { source: "name" },
    }),
    defineField({
      title: "Description",
      name: "description",
      type: "text",
      description: "A detailed description of what this ticket type includes",
    }),
    defineField({
      title: "Features",
      name: "features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of features/amenities included with this ticket type",
    }),
    defineField({
      title: "Ticket Options",
      name: "options",
      type: "array",
      of: [{ type: "ticketOption" }],
      description:
        "Different day/duration options with their respective prices",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "image",
      description: "An image showing the view or area for this ticket type",
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      title: "Display Order",
      name: "order",
      type: "number",
      description:
        "Order in which this ticket type should be displayed (lower numbers appear first)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
