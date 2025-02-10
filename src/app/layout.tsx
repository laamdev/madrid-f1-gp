import "@/app/globals.css";

import localFont from "next/font/local";
import { Space_Grotesk } from "next/font/google";

import { cn } from "@/lib/utils";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const f1Regular = localFont({
  src: [
    {
      path: "../../public/fonts/formula1-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/formula1-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-f1",
});

const f1Wide = localFont({
  src: [
    {
      path: "../../public/fonts/formula1-wide.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-display",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(spaceGrotesk.variable, f1Regular.variable, f1Wide.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
