import { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";

import { DisableDraftMode } from "@/components/draft/disable-draft-mode";
import { Footer } from "@/components/nav/footer";
import { Header } from "@/components/nav/header";

import { SanityLive } from "@/sanity/lib/live";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | PTR`,
      default: "IT Technical Training, Consultancy, Solutions | PTR",
    },
    openGraph: {
      title: "IT Technical Training, Consultancy, Solutions | PTR",
      description:
        "IT Technical Training, Consultancy, Solutions with tailored solutions and expert insights.",
      url: "https://ptr.co.uk",
      siteName: "PTR",
      images: [
        {
          url: "https://ptr.co.uk/images/og.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en-GB",
      type: "website",
    },
    description:
      "IT Technical Training, Consultancy, Solutions with tailored solutions and expert insights.",
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
      title: "PTR",
      site: "https://ptr.co.uk",
      card: "summary_large_image",
      description:
        "IT Technical Training, Consultancy, Solutions with tailored solutions and expert insights.",
      images: [
        {
          url: "https://ptr.co.uk/images/og.png",
          alt: "PTR Associates LTD.",
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
    <section className="m-4">
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
