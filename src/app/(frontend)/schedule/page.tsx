import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { ScheduleTabs } from "@/components/schedule/schedule-tabs";
import { EmptySchedule } from "@/components/schedule/empty-schedule";

import { SCHEDULE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { RaceEvent } from "@/sanity/types";

const formatEventTime = (startTime: string, endTime?: string) => {
  const start = new Date(startTime);
  const day = start.getDate();
  const month = start
    .toLocaleDateString("en-GB", {
      month: "short",
    })
    .toUpperCase();

  const timeStr = start.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (!endTime) return { day, month, timeStr };

  const end = new Date(endTime);
  const endTimeStr = end.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    day,
    month,
    timeStr: `${timeStr} - ${endTimeStr}`,
  };
};

interface SchedulePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SchedulePage({
  searchParams,
}: SchedulePageProps) {
  const { data: schedule } = await sanityFetch({
    query: SCHEDULE_QUERY,
  });

  if (!schedule) {
    notFound();
  }

  const { competition } = await searchParams;

  const filteredEvents =
    schedule?.racingSchedule?.filter(
      (event: RaceEvent) => event.competition === competition
    ) || [];

  return (
    <div>
      <Hero heading="Racing Schedule" image="/images/schedule-cover.webp" />
      <div className="mt-4 bg-neutral-100 p-8 rounded-xl">
        <div className="flex gap-4">
          <ScheduleTabs />
          <div className="flex-1">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredEvents.map((event: RaceEvent, idx: number) => {
                  const { day, month, timeStr } = formatEventTime(
                    event.startTime!,
                    event.hasEndTime ? event.endTime : undefined
                  );

                  return (
                    <div
                      key={idx}
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
                    </div>
                  );
                })}
              </div>
            ) : (
              <EmptySchedule />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
