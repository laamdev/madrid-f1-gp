import React from "react";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { SectionHeading } from "../shared/section-heading";
import { SectionBody } from "../shared/section-text";

export const Concerts = () => {
  return (
    <section className="relative h-[500px] rounded-xl p-8">
      <Image
        src="/images/music-cover.webp"
        alt="Other Events"
        fill
        className="absolute inset-0 object-center object-cover bg-card rounded-xl"
      />
      <div className="absolute inset-0 bg-black/50 rounded-xl" />
      <div className="relative z-10 text-center flex mx-auto max-w-prose flex-col items-center justify-center h-[calc(100%-2rem)] mt-2">
        <SectionHeading heading="A festival of sound and speed" isLight />
        <SectionBody isLight>
          Enjoy epic concerts, world-class DJs, and artistic performances before
          and after the racing action.
        </SectionBody>
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
