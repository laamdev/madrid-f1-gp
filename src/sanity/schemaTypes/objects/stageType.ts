import { defineField, defineType } from "sanity";
import { SpeakerHifi } from "@phosphor-icons/react/dist/ssr";

export const stageType = defineType({
  name: "stage",
  title: "Stage",
  description: "A stage for a concert that takes place at the GP venue.",
  icon: SpeakerHifi,
  type: "document",
  fields: [
    defineField({
      name: "name",
      description: "The name of the stage",
      type: "string",
    }),
  ],
});
