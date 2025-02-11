import Image from "next/image";
import Link from "next/link";
import dayjs from "dayjs";

import { Concert } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";

export const ConcertCard = ({ concert }: { concert: Concert }) => {
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
        <p className="text-base text-blue-700 uppercase font-sans font-medium">
          {dayjs(concert.date).format("ddd DD MMM")}
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
