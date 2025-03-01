import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionBodyProps {
  children: ReactNode;
  isCentered?: boolean;
  isLight?: boolean;
}

export const SectionBody = ({
  children,
  isCentered,
  isLight,
}: SectionBodyProps) => {
  return (
    <p
      className={cn(
        "text-lg text-neutral-700 mt-4",
        isCentered && "text-center",
        isLight && "text-neutral-300"
      )}
    >
      {children}
    </p>
  );
};
