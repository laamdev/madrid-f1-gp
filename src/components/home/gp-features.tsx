"use client";

import Image from "next/image";
import { motion } from "motion/react";

export const GPFeatures = () => {
  return (
    <div className="flex mt-16 flex-col items-center justify-center mx-auto max-w-5xl">
      <div>
        <h2 className="text-2xl font-mono uppercase font-bold">
          Welcoming a new F1 generation
        </h2>
        <p className="text-lg text-neutral-700 text-center mt-4">
          High-octane days, epic nights. After 45 years, Formula 1 returns to
          Madrid for a 4-day festival unlike any other. Where speed meets sound,
          and history is made once again. Explore our 2026 ticket options and be
          part of the unforgettable return of the Madrid Grand Prix.
        </p>
      </div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="w-[50rem] aspect-[5/3] mx-auto relative"
      >
        <Image
          src="/images/car-model.webp"
          alt="2026 Madrid GP"
          fill
          className="object-contain w-full h-full"
        />
      </motion.div>

      {/* <div className="mx-auto px-4 py-8 grid gap-4 md:grid-cols-3">
        <ExpandableSection
          title="Street + Permanent Blend"
          description="We have prepared a blueprint subject to FIA homologation that proposes a state-of-the-art track, with vibrant moments and sections designed to captivate fans and elevate the TV production. Get ready for a unique experience where excitement and innovation merge, creating a show that goes beyond racing."
          imageUrl="/path/to/circuit-image.jpg"
          className="min-h-[200px]"
        />
        <ExpandableSection
          title="Hyper-hybrid cars"
          description="Experience F1 at IFEMA MADRID, where the excitement doesn't stop the city! The circuit will offer fans never seen facilities and will incorporate a premium Paddock building with a new race tower and office spaces, VIP hospitality and entertainment areas."
          imageUrl="/path/to/facilities-image.jpg"
          className="min-h-[200px]"
        />
        <ExpandableSection
          title="Net-zero emitions"
          description="Experience F1 at IFEMA MADRID, where the excitement doesn't stop the city! The circuit will offer fans never seen facilities and will incorporate a premium Paddock building with a new race tower and office spaces, VIP hospitality and entertainment areas."
          imageUrl="/path/to/facilities-image.jpg"
          className="min-h-[200px]"
        />
      </div> */}
    </div>
  );
};
