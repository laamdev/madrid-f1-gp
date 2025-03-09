import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  isCentered?: boolean;
  isLight?: boolean;
  className?: string;
}

export const SectionHeading = ({
  heading,
  isCentered,
  isLight,
  className,
}: SectionHeadingProps) => {
  return (
    <h2
      className={cn(
        "text-3xl uppercase font-serif font-bold",
        className,
        isCentered && "text-center",
        isLight && "text-white"
      )}
    >
      {heading}
    </h2>
  );
};
