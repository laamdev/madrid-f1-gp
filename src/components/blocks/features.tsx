import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import { PAGE_QUERYResult } from "@/sanity/types";

import { SectionHeading } from "../shared/section-heading";

type FeaturesProps = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["content"]>[number],
  { _type: "features" }
>;

export const Features = ({ features, title }: FeaturesProps) => {
  return (
    <section className="mx-auto flex flex-col gap-8 py-16">
      {title ? <SectionHeading heading={title} isCentered /> : null}

      {Array.isArray(features) ? (
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature._key}
              className="flex flex-col text-center items-center"
            >
              <Image
                src={urlFor(feature.icon!).url()}
                alt={feature.title || ""}
                width={100}
                height={100}
                className="size-12"
              />
              <h3 className="text-lg mt-4 font-serif font-bold uppercase text-accent">
                {feature.title}
              </h3>
              <p className="text-base mt-2 text-neutral-700">{feature.text}</p>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
};
