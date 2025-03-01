// // import { PortableText } from "next-sanity";
import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

type HeroProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "hero" }
>;

export const Hero = ({ title, image }: HeroProps) => {
  return (
    <section className="rounded-xl overflow-hidden">
      <div className="relative min-h-[32rem] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={urlFor(image!)
              .width(1920)
              .height(1080)
              .quality(80)
              .auto("format")
              .url()}
            alt={
              typeof image === "string"
                ? title || "Concert Image"
                : "About the Madrid F1 GP."
            }
            fill
            className="object-cover object-[25%_90%] bg-card"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h1 className="text-white font-mono uppercase text-5xl font-bold">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
