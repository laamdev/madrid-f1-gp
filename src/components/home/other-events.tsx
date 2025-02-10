import React from "react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const OtherEvents = () => {
  return (
    <section className="relative h-[500px] rounded-xl p-8">
      <h2 className="text-2xl font-mono uppercase font-bold">Other Events</h2>
      <Image
        src="/images/music-cover.webp"
        alt="Other Events"
        fill
        className="absolute inset-0 object-center object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-black/50 rounded-xl" />
      <div className="relative z-10 text-center flex mx-auto max-w-prose flex-col items-center justify-center h-[calc(100%-2rem)] mt-2">
        <h3 className="text-4xl font-bold font-mono uppercase text-white">
          A festival of sound and speed
        </h3>
        <p className="text-lg text-neutral-300 mt-4">
          Enjoy epic concerts, world-class DJs, and artistic performances before
          and after the racing action.
        </p>

        <Link
          href="/schedule"
          className={buttonVariants({
            variant: "default",
            className: "mt-8",
            size: "lg",
          })}
        >
          View Schedule
        </Link>
      </div>
    </section>
  );
};
