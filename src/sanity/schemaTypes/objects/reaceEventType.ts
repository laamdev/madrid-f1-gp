import { defineField, defineType } from "sanity";

import { Clock } from "@phosphor-icons/react/dist/ssr";

export const raceEventType = defineType({
  name: "raceEvent",
  title: "Race Event",
  type: "object",
  icon: Clock,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      options: {
        list: [
          { title: "Practice 1", value: "practice1" },
          { title: "Practice 2", value: "practice2" },
          { title: "Practice 3", value: "practice3" },
          { title: "Qualifying", value: "qualifying" },
          { title: "Race", value: "race" },
          { title: "Sprint", value: "sprint" },
          { title: "Sprint Shootout", value: "sprintShootout" },
        ],
      },
    }),
    defineField({
      name: "competition",
      title: "Competition",
      description: "Name of the competition.",
      type: "string",
      options: {
        list: [
          { title: "F1", value: "f1" },
          { title: "F2", value: "f2" },
          { title: "F3", value: "f3" },
        ],
      },
    }),
    defineField({
      name: "startTime",
      title: "Start Time",
      description: "Start time of the event.",
      type: "datetime",
    }),
    defineField({
      name: "hasEndTime",
      title: "Has End Time?",
      type: "boolean",
      hidden: ({ parent }) => parent?.hasStartTime,
    }),
    defineField({
      name: "endTime",
      title: "End Time",
      description: "End time of the event.",
      type: "datetime",
      hidden: ({ parent }) => !parent?.hasEndTime,
    }),
  ],
  preview: {
    select: {
      name: "name",
      competition: "competition",
      startTime: "startTime",
    },
    prepare({ name, competition }) {
      const eventNames = {
        practice1: "Practice 1",
        practice2: "Practice 2",
        practice3: "Practice 3",
        qualifying: "Qualifying",
        race: "Race",
        sprint: "Sprint",
        sprintShootout: "Sprint Shootout",
      };

      return {
        title: eventNames[name as keyof typeof eventNames] || name,
        subtitle: competition,
      };
    },
  },
});
