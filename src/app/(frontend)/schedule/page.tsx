import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { ScheduleTabs } from "@/components/schedule/schedule-tabs";
import { EmptySchedule } from "@/components/schedule/empty-schedule";

import { SCHEDULE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { RaceEvent } from "@/sanity/types";

const formatEventTime = (startTime: string, endTime?: string) => {
  const start = new Date(startTime);
  const dateStr = start.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
  });

  const timeStr = start.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  if (!endTime) return { dateStr, timeStr };

  const end = new Date(endTime);
  const endTimeStr = end.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    dateStr,
    timeStr: `${timeStr} - ${endTimeStr}`,
  };
};

interface SchedulePageProps {
  searchParams: { [key: string]: string | string[] | undefined };
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
      <div className="my-16">
        <div className="flex gap-4">
          <ScheduleTabs />
          <div className="flex-1">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredEvents.map((event: RaceEvent, idx: number) => {
                  const { dateStr, timeStr } = formatEventTime(
                    event.startTime!,
                    event.hasEndTime ? event.endTime : undefined
                  );

                  return (
                    <div key={idx} className="p-4 bg-neutral-200 rounded-xl">
                      <h3 className="uppercase text-red-600 font-semibold">
                        {event.name?.split("-").join(" ")}
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-neutral-600">{dateStr}</p>
                        <p className="font-medium">{timeStr}</p>
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
