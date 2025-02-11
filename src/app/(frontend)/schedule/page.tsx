import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { ScheduleTabs } from "@/components/schedule/schedule-tabs";
import { ScheduleInfo } from "@/components/schedule/schedule-info";

import { SCHEDULE_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { RaceEvent } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Racing Schedule",
  description:
    "Checkout the schedule for the F1, F2 and F3 competitions that will take place throught the weekend.",
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
  const selectedCompetition =
    (Array.isArray(competition) ? competition[0] : competition) || "f1";

  const filteredEvents =
    schedule?.racingSchedule?.filter(
      (event: RaceEvent) => event.competition === selectedCompetition
    ) || [];

  return (
    <div>
      <Hero heading="Racing Schedule" image="/images/schedule-cover.webp" />
      <div className="mt-4 bg-neutral-100 p-4 md:p-8 rounded-xl">
        <div className="flex md:flex-row flex-col gap-4">
          <ScheduleTabs />
          <div className="flex-1">
            <ScheduleInfo
              filteredEvents={filteredEvents}
              selectedCompetition={selectedCompetition}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
