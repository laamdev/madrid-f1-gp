import { urlFor } from "@/sanity/lib/image";
import { Ticket } from "@/sanity/types";
import { Check } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div className="bg-white rounded-xl flex flex-col">
      <div className="aspect-[5/3] relative w-full">
        <Image
          src={
            ticket.image
              ? urlFor(ticket.image).width(1080).height(1080).url()
              : "/images/tickets-cover.webp"
          }
          alt={ticket.name || "Ticket image"}
          fill
          className="object-cover rounded-t-xl object-center"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-xl font-serif font-medium uppercase">
          {ticket.name}
        </h3>

        <div className="flex flex-col gap-2">
          {(ticket.features || []).map((feature) => (
            <div key={feature} className="flex gap-2">
              <Check weight="bold" className="text-red-600 size-4 mt-0.5" />
              <p className="text-sm text-neutral-500">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
