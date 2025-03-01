import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const CTALink = ({
  href,
  text,
  variant = "default",
  isCentered = false,
}: {
  href: string;
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  isCentered?: boolean;
}) => {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant,
        size: "lg",
        className: `mt-8 w-fit ${isCentered && "mx-auto"}`,
      })}
    >
      {text}
    </Link>
  );
};
