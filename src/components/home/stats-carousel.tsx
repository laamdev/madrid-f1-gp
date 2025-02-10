"use client";

import * as React from "react";
import Autoscroll from "embla-carousel-auto-scroll";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { formatNumber } from "@/lib/utils";
import { Stat } from "@/sanity/types";

export const StatsCarousel = ({
  trackStats,
}: {
  trackStats?: Array<{ _key: string } & Stat>;
}) => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoscroll()]}
      className="w-full mt-4"
    >
      <CarouselContent>
        {trackStats?.map((stat, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
            <div className="p-1">
              <Card className="bg-white">
                <CardContent className="flex items-center flex-col gap-y-2 aspect-[5/3] justify-center p-6">
                  <span>
                    <span className="text-black font-mono text-lg font-semibold">
                      {formatNumber(stat.value!)}
                    </span>
                    {stat.unit && (
                      <span className="text-neutral-600 ml-1 text-xs text-center">
                        {stat.unit}
                      </span>
                    )}
                  </span>
                  <span className="text-red-600 uppercase font-medium font-sans text-sm text-center">
                    {stat.title}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
