import Image from "next/image";

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

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
    }).format(date);
  };

  const formatMonth = (date: Date) => {
    return new Intl.DateTimeFormat("en-GB", {
      month: "long",
    })
      .format(date)
      .toUpperCase();
  };

  const dateRange = `${formatDate(firstDay)} - ${formatDate(lastDay)} ${formatMonth(firstDay)}`;

  return (
    <section className="rounded-xl overflow-hidden">
      <div className="relative min-h-[32rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/home-hero.webp"
            alt="F1 cars racing on a track."
            fill
            className="object-cover object-[25%_90%]"
            priority
          />
        </div>
      </div>

      <div className="bg-card">
        <div className="flex justify-between">
          <div className="flex gap-x-8 items-center px-4">
            <h1 className="text-white text-lg uppercase font-mono font-bold">
              {gpDetails?.name}
            </h1>
            <h2 className="bg-white font-serif text-slate-900 px-4 py-2 w-fit rounded-full text-sm uppercase  font-bold">
              {dateRange}
            </h2>
          </div>
          <div>
            <CountdownTimer
              raceDate={
                gpDetails?.racingSchedule?.find(
                  (event) => event.name === "race"
                )?.startTime || new Date().toISOString()
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
