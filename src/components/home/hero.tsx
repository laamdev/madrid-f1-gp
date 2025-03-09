import Image from "next/image";
import { format } from "date-fns";

import { CountdownTimer } from "@/components/home/countdown-timer";

import { GP_DETAILS_QUERYResult } from "@/sanity/types";

export const HomeHero = ({
  gpDetails,
}: {
  gpDetails: GP_DETAILS_QUERYResult;
}) => {
  const sortedDates = gpDetails?.racingSchedule
    ?.map((event) => new Date(event.startTime!))
    .sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const firstDay = sortedDates![0];
  const lastDay = sortedDates![sortedDates!.length - 1];

  const dateRange = `${format(firstDay, "dd")} - ${format(lastDay, "dd")} ${format(firstDay, "MMM").toUpperCase()}`;

  return (
    <section className="rounded-xl overflow-hidden">
      <div className="relative min-h-[32rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.webp"
            alt="F1 cars racing on a track."
            fill
            className="object-cover object-[25%_90%] bg-card"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between">
        <div className="flex w-full bg-card py-4 sm:py-0 flex-col gap-y-4 sm:flex-row gap-x-8 sm:items-center px-4">
          <h1 className="text-white md:text-lg uppercase font-mono font-bold">
            {gpDetails?.name}
          </h1>
          <h2 className="bg-white font-serif text-slate-900 px-4 py-2 w-fit rounded-full text-sm uppercase  font-bold">
            {dateRange}
          </h2>
        </div>
        <div>
          <CountdownTimer
            raceDate={
              gpDetails?.racingSchedule?.find((event) => event.name === "race")
                ?.startTime || new Date().toISOString()
            }
          />
        </div>
      </div>
    </section>
  );
};
