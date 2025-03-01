import { defineField, defineType } from "sanity";
import { Clock } from "@phosphor-icons/react/dist/ssr";

export const raceEventType = defineType({
  title: "Race Event",
  name: "raceEvent",
  type: "object",
  icon: Clock,
  fields: [
    defineField({
      title: "Name",
      name: "name",
      type: "string",
      options: {
        list: [
          { title: "Practice 1", value: "practice-1" },
          { title: "Practice 2", value: "practice-2" },
          { title: "Practice 3", value: "practice-3" },
          { title: "Qualifying", value: "qualifying" },
          { title: "Race", value: "race" },
          { title: "Sprint", value: "sprint" },
          { title: "Sprint Shootout", value: "sprint-shootout" },
        ],
      },
    }),
    defineField({
      title: "Competition",
      name: "competition",
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
      title: "Start Time",
      name: "startTime",
      description: "Start time of the event.",
      type: "datetime",
    }),
    defineField({
      title: "Has End Time?",
      name: "hasEndTime",
      type: "boolean",
      hidden: ({ parent }) => parent?.hasStartTime,
    }),
    defineField({
      title: "End Time",
      name: "endTime",
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
        "practice-1": "Practice 1",
        "practice-2": "Practice 2",
        "practice-3": "Practice 3",
        qualifying: "Qualifying",
        race: "Race",
        sprint: "Sprint",
        "sprint-shootout": "Sprint Shootout",
      };

      return {
        title: eventNames[name as keyof typeof eventNames] || name,
        subtitle: competition,
      };
    },
  },
});
