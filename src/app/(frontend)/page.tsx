import { notFound } from "next/navigation";

import { HomeHero } from "@/components/home/hero";
import { GPFeatures } from "@/components/home/gp-features";
import { TrackInfo } from "@/components/home/track-info";
import { StatsCarousel } from "@/components/home/stats-carousel";
import { Concerts } from "@/components/home/concerts";
import { Newsletter } from "@/components/shared/newsletter";

import { GP_DETAILS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function HomePage() {
  const { data: gpDetails } = await sanityFetch({
    query: GP_DETAILS_QUERY,
  });

  if (!gpDetails) {
    notFound();
  }

  return (
    <div>
      <HomeHero gpDetails={gpDetails} />
      <StatsCarousel trackStats={gpDetails.track || undefined} />
      <TrackInfo />
      <GPFeatures />
      <Concerts />
      <Newsletter />
    </div>
  );
}

// // import { sanityFetch } from "@/sanity/lib/live";
// // import { HOME_PAGE_QUERY } from "@/sanity/lib/queries";

// // import { PageBuilder } from "@/components/page-builder";

// // export default async function HomePage() {
// //   const { data: page } = await sanityFetch({
// //     query: HOME_PAGE_QUERY,
// //   });

// //   return page?.homePage?.content ? (
// //     <PageBuilder
// //       documentId={page?.homePage._id}
// //       documentType={page?.homePage._type}
// //       content={page?.homePage.content}
// //     />
// //   ) : null;
// // }
