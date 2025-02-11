import { defineField, defineType } from "sanity";
import { MicrophoneStage } from "@phosphor-icons/react/dist/ssr";

export const artistType = defineType({
  name: "artist",
  title: "Artist",
  description: "An artist that will be performing at a concert during the GP",
  icon: MicrophoneStage,
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      description: "The image will be used as the to identify the artist",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
    defineField({
      name: "bio",
      type: "blockContent",
    }),
    defineField({
      name: "spotify",
      type: "url",
    }),
  ],
});
