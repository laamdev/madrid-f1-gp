import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TextWrapperProps {
  children: ReactNode;
  isCentered?: boolean;
}

export const TextWrapper = ({ children, isCentered }: TextWrapperProps) => {
  return (
    <div className={cn("max-w-2xl flex flex-col", isCentered && "mx-auto")}>
      {children}
    </div>
  );
};
