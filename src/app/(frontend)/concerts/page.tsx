import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { ConcertCard } from "@/components/concerts/concert-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionBody } from "@/components/shared/section-text";
import { TextWrapper } from "@/components/shared/text-wrapper";

import { CONCERTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Concerts",
  description: "Checkout the concerts that will take place during the weekend.",
};

export default async function ConcertsPage() {
  const { data: concerts } = await sanityFetch({
    query: CONCERTS_QUERY,
  });

  if (!concerts) {
    notFound();
  }

  return (
    <div>
      <Hero heading="Concerts" image="/images/concerts-cover.webp" />

      <div className="mt-4 bg-neutral-200 p-4 md:p-8 rounded-xl">
        <TextWrapper isCentered>
          <SectionHeading heading="A weekend full of Music" isCentered />
          <SectionBody isCentered>
            Enjoy four days of arena concerts from some of the best musicians in
            the world. Checkout our stellar line-up of top-class artists and the
            full schedule the artistic activities available for GP ticket
            holders.
          </SectionBody>
        </TextWrapper>

        <div className="grid mt-8 grid-cols-1 md:grid-cols-4 gap-4">
          {concerts.map((concert) => (
            // @ts-expect-error type issue to fix
            <ConcertCard key={concert._id} concert={concert} />
          ))}
        </div>
      </div>
    </div>
  );
}
