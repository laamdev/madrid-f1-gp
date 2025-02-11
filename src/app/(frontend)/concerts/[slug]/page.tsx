import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";

import { sanityFetch } from "@/sanity/lib/live";
import { CONCERT_BY_SLUG_QUERY } from "@/sanity/lib/queries";

interface ConcertPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ConcertPage({ params }: ConcertPageProps) {
  const { slug } = await params;

  const { data: concert } = await sanityFetch({
    query: CONCERT_BY_SLUG_QUERY,
    params: { slug: slug },
  });

  if (!concert) {
    notFound();
  }

  return (
    <div>
      <Hero heading={concert.name!} image={concert.image!} />
    </div>
  );
}
