import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { CONCERT_BY_SLUG_QUERY } from "@/sanity/lib/queries";

export default async function ConcertPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: concert } = await sanityFetch({
    query: CONCERT_BY_SLUG_QUERY,
    params: { slug: params.slug },
  });

  if (!concert) {
    notFound();
  }

  return (
    <div>
      <Hero heading={concert.name} image={concert.image} />
    </div>
  );
}
