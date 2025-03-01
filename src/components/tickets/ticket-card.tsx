import { Ticket } from "@/sanity/lib/types";
import Image from "next/image";
import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <div className="bg-neutral-200 rounded-xl p-4">
      <Image src={ticket.image} alt={ticket.name} />
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{ticket.name}</h3>
        <p className="text-sm text-neutral-500">{ticket.description}</p>
      </div>
    </div>
  );
};
