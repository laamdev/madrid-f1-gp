import { defineField, defineType } from "sanity";
import { Money } from "@phosphor-icons/react/dist/ssr";

export const ticketPriceType = defineType({
  title: "Price Option",
  name: "ticketPrice",
  type: "object",
  icon: Money,
  fields: [
    defineField({
      title: "Price",
      name: "price",
      type: "number",
      description: "Price in euros (€)",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      title: "Early Bird Price",
      name: "isEarlyBird",
      type: "boolean",
      description: "Whether this is an early bird pricing",
      initialValue: false,
    }),
    defineField({
      title: "Available From",
      name: "availableFrom",
      type: "datetime",
      description: "When this price becomes available for purchase",
    }),
    defineField({
      title: "Available Until",
      name: "availableUntil",
      type: "datetime",
      description: "When this price is no longer available for purchase",
    }),
    defineField({
      title: "Maximum Quantity",
      name: "maxQuantity",
      type: "number",
      description:
        "Maximum number of tickets that can be purchased at this price (leave empty for unlimited)",
    }),
  ],
  preview: {
    select: {
      price: "price",
      isEarlyBird: "isEarlyBird",
    },
    prepare({ price, isEarlyBird }) {
      return {
        title: `€${price}${isEarlyBird ? " (Early Bird)" : ""}`,
      };
    },
  },
});
