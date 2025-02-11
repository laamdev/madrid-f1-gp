"use client";

import { AnimatePresence, motion } from "framer-motion";

import { EmptySchedule } from "@/components/schedule/empty-schedule";

import { RaceEvent } from "@/sanity/types";
import { formatEventTime } from "@/lib/utils";

interface ScheduleInfoProps {
  filteredEvents: RaceEvent[];
  selectedCompetition: string;
}

export const ScheduleInfo = ({
  filteredEvents,
  selectedCompetition,
}: ScheduleInfoProps) => {
  return (
    <AnimatePresence mode="wait">
      {filteredEvents.length > 0 ? (
        <motion.div
          key={selectedCompetition as string}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {filteredEvents.map((event: RaceEvent, idx: number) => {
            const { day, month, timeStr } = formatEventTime(
              event.startTime!,
              event.hasEndTime ? event.endTime : undefined
            );

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.1 }}
                className="flex items-start gap-6 p-4 bg-white rounded-xl"
              >
                <div className="text-center border-r-2 pr-4">
                  <div className="text-2xl font-bold">{day}</div>
                  <div className="text-neutral-500 text-sm font-sans">
                    {month}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-bold uppercase font-mono text-red-600">
                    {event.name?.split("-").join(" ")}
                  </h3>
                  <p className="text-serif">{timeStr}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      ) : (
        <motion.div
          key="empty"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <EmptySchedule />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
