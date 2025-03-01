import { Metadata } from "next";
import { notFound } from "next/navigation";

import { Hero } from "@/components/shared/hero";
import { TicketCard } from "@/components/tickets/ticket-card";
import { SectionHeading } from "@/components/shared/section-heading";
import { SectionBody } from "@/components/shared/section-text";
import { TextWrapper } from "@/components/shared/text-wrapper";

import { TICKETS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export const metadata: Metadata = {
  title: "Tickets",
  description:
    "Checkout the tickets that are available for the 2026 Madrid GP.",
};

export default async function TicketsPage() {
  const { data: tickets } = await sanityFetch({
    query: TICKETS_QUERY,
  });

  if (!tickets) {
    notFound();
  }
  console.log(tickets, "xxxxxxxxxxx");

  return (
    <div>
      <Hero heading="Tickets" image="/images/tickets-cover.webp" />

      <div className="mt-4 bg-neutral-200 p-4 md:p-8 rounded-xl">
        <TextWrapper isCentered>
          <SectionHeading heading="Tickets" isCentered />
          <SectionBody isCentered>
            Checkout the tickets that are available for the 2026 Madrid GP.
          </SectionBody>
        </TextWrapper>

        <div className="grid mt-8 grid-cols-1 md:grid-cols-4 gap-4">
          {tickets.map((ticket) => (
            <TicketCard key={ticket._id} ticket={ticket} />
          ))}
        </div>
      </div>
    </div>
  );
}
