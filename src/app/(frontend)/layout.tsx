import { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

import { DisableDraftMode } from "@/components/draft/disable-draft-mode";
import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";

import { SanityLive } from "@/sanity/lib/live";
import { sanityFetch } from "@/sanity/lib/live";
import { GP_DETAILS_QUERY } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  const { data: gpDetails } = await sanityFetch({
    query: GP_DETAILS_QUERY,
  });

  return {
    title: {
      template: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"} | %s`,
      default: `${gpDetails?.seo?.title || "IFEMA Madrid Circuit"} | 2026 F1 Spanish Grand Prix`,
    },
    openGraph: {
      title: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"}`,
      description:
        gpDetails?.seo?.description ||
        "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix.",
      url: "https://madrid-f1-gp.vercel.app/",
      siteName: "2026 F1 GP Madrid",
      images: [
        {
          url: "https://madrid-f1-gp.vercel.app/images/og.png",

          width: 1200,
          height: 630,
        },
      ],
      locale: "en-GB",
      type: "website",
    },
    description:
      gpDetails?.seo?.description ||
      "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix.",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: `${gpDetails?.seo?.title || "2026 F1 Spanish Grand Prix"}`,
      site: "https://madrid-f1-gp.vercel.app/",
      card: "summary_large_image",
      description: `${gpDetails?.seo?.description || "After more than 4 decades of absence, the Formula 1 is back in Madrid. From 2026 to 2035, the capital will be the home of the Spanish Grand Prix."}`,
      images: [
        {
          url: "https://madrid-f1-gp.vercel.app/images/og.png",
          alt: "2026 F1 GP Madrid",
          width: 1200,
          height: 630,
        },
      ],
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon/apple-icon.png",
    },
  };
}

export default async function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="m-4 overflow-x-hidden">
      <Header />
      {children}
      <Footer />
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </section>
  );
}
