import { TrackIcon } from "@/components/icons/track";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionBody } from "@/components/shared/section-text";
import { TextWrapper } from "@/components/shared/text-wrapper";
import { CTALink } from "@/components/shared/cta-link";

export const TrackInfo = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-x-8 mt-4 rounded-xl bg-neutral-200">
        <div className="col-span-1 p-8">
          <TextWrapper>
            <SectionHeading heading="Madrid is back to The Circus!" />
            <SectionBody>
              High-octane days, epic nights. After 45 years, Formula 1 returns
              to Madrid for a 4-day festival unlike any other. Where speed meets
              sound, and history is made once again. Explore our 2026 ticket
              options and be part of the unforgettable return of the Madrid
              Grand Prix.
            </SectionBody>
            <CTALink href="/tickets" text="Book Now" />
          </TextWrapper>
        </div>
        <div className="col-span-1">
          <TrackIcon />
        </div>
      </div>
    </section>
  );
};
