import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { TrackIcon } from "@/components/icons/track";

export const TrackInfo = () => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-x-8 mt-4 rounded-xl bg-neutral-200">
        <div className="col-span-1 p-8">
          <h2 className="text-2xl font-mono uppercase font-bold">
            Madrid is back to The Circus!
          </h2>
          <p className="text-lg text-neutral-700 mt-4">
            High-octane days, epic nights. After 45 years, Formula 1 returns to
            Madrid for a 4-day festival unlike any other. Where speed meets
            sound, and history is made once again. Explore our 2026 ticket
            options and be part of the unforgettable return of the Madrid Grand
            Prix.
          </p>
          <Link
            href="/tickets"
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className: "mt-8",
            })}
          >
            Book Now
          </Link>
        </div>
        <div className="col-span-1">
          <TrackIcon />
        </div>
      </div>
    </section>
  );
};
