import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import { Concert } from "@/sanity/types";
import { formatDate } from "@/lib/utils";

type ConcertWithExpandedStage = Omit<Concert, "stage"> & {
  stage?: { name?: string } | null;
};

export const ConcertCard = ({
  concert,
}: {
  concert: ConcertWithExpandedStage;
}) => {
  return (
    <Link href={`/concerts/${concert.slug}`}>
      <div className="relative w-full aspect-square rounded-xl group overflow-hidden">
        <Image
          src={
            concert.image
              ? urlFor(concert.image).width(1080).height(1080).url()
              : "/images/concerts-cover.webp"
          }
          alt={concert.name || "Concert Image"}
          fill
          className="object-center rounded-xl object-cover bg-white group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div>
        <h3 className="text-lg font-serif font-bold mt-1">{concert.name}</h3>
        <p className="text-base text-accent uppercase font-sans font-medium">
          {formatDate(concert.date!).day} {formatDate(concert.date!).month}
        </p>
        <p className="text-sm text-neutral-600 font-sans capitalize">
          {concert.location === "internal"
            ? concert.stage?.name
            : concert.location}
        </p>
      </div>
    </Link>
  );
};
