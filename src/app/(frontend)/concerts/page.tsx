import { Metadata } from "next";

import { Hero } from "@/components/shared/hero";
import { ConcertCard } from "@/components/concerts/concert-card";

import { CONCERTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";
import { Concert } from "@/sanity/types";

export const metadata: Metadata = {
  title: "Concerts",
  description: "Checkout the concerts that will take place during the weekend.",
};

export default async function ConcertsPage() {
  const { data: concerts } = await sanityFetch({
    query: CONCERTS_QUERY,
  });

  return (
    <div>
      <Hero heading="Concerts" image="/images/concerts-cover.webp" />

      <div className="mt-4 bg-neutral-200 p-4 md:p-8 rounded-xl">
        <div className="flex flex-col items-center text-center justify-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-serif uppercase">
            A weekend full of Music
          </h2>
          <p className="text-neutral-700 mt-4 text-lg font-sans">
            Enjoy four days of arena concerts from some of the best musicians in
            the world. Checkout our stellar line-up of top-class artists and the
            full schedule the artistic activities available for GP ticket
            holders.
          </p>
        </div>
        <div className="grid mt-8 grid-cols-1 md:grid-cols-4 gap-4">
          {concerts?.map((concert: Concert) => (
            <ConcertCard key={concert._id} concert={concert} />
          ))}
        </div>
      </div>
    </div>
  );
}
