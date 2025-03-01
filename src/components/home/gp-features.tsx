"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { SectionHeading } from "@/components/shared/section-heading";
import { SectionBody } from "@/components/shared/section-text";
import { TextWrapper } from "@/components/shared/text-wrapper";
import { CTALink } from "@/components/shared/cta-link";

export const GPFeatures = () => {
  return (
    <div className="flex my-16 flex-col items-center justify-center mx-auto max-w-5xl">
      <TextWrapper>
        <SectionHeading heading="Welcoming a new F1 generation" isCentered />
        <SectionBody isCentered>
          {`Madrid is set to become a game-changer in Formula 1! With a thrilling new circuit, cutting-edge sustainability, and unbeatable access in the heart of Spain's capital, this race is set to deliver high-speed action like never before.`}
        </SectionBody>
        <CTALink href="/about" text="Discover More" isCentered />
      </TextWrapper>
      <motion.div
        initial={{ x: "-100%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true }}
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
