import { defineField, defineType } from "sanity";
import { Calendar } from "@phosphor-icons/react/dist/ssr";

interface TicketPrice {
  price: number;
  isEarlyBird?: boolean;
}

export const ticketOptionType = defineType({
  title: "Ticket Option",
  name: "ticketOption",
  type: "object",
  icon: Calendar,
  fields: [
    defineField({
      title: "Duration",
      name: "duration",
      type: "string",
      options: {
        list: [
          { title: "Thursday", value: "thursday" },
          { title: "Thursday Evening", value: "thursday-evening" },
          { title: "Friday", value: "friday" },
          { title: "Saturday", value: "saturday" },
          { title: "Sunday", value: "sunday" },
          { title: "3-Day Pass (Fri-Sun)", value: "3-day" },
          { title: "4-Day Pass (Thu-Sun)", value: "4-day" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: "Prices",
      name: "prices",
      type: "array",
      of: [{ type: "ticketPrice" }],
      description:
        "Different pricing tiers for this duration (e.g. early bird, regular)",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      duration: "duration",
      prices: "prices",
    },
    prepare({
      duration,
      prices = [],
    }: {
      duration: string;
      prices: TicketPrice[];
    }) {
      const durationNames = {
        thursday: "Thursday",
        "thursday-evening": "Thursday Evening",
        friday: "Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        "3-day": "3-Day Pass",
        "4-day": "4-Day Pass",
      };

      let priceDisplay = "No prices set";
      if (prices.length === 1) {
        // If there's only one price, show it with early bird indicator if applicable
        const price = prices[0];
        priceDisplay = `€${price.price}${price.isEarlyBird ? " (Early Bird)" : ""}`;
      } else if (prices.length > 1) {
        // If there are multiple prices, show the range
        const minPrice = Math.min(...prices.map((p) => p.price));
        const maxPrice = Math.max(...prices.map((p) => p.price));
        priceDisplay =
          minPrice === maxPrice
            ? `€${minPrice}`
            : `€${minPrice} - €${maxPrice}`;
      }

      return {
        title:
          durationNames[duration as keyof typeof durationNames] || duration,
        subtitle: priceDisplay,
      };
    },
  },
});
