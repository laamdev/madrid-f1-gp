import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  heading: string;
  isCentered?: boolean;
  isLight?: boolean;
}

export const SectionHeading = ({
  heading,
  isCentered,
  isLight,
}: SectionHeadingProps) => {
  return (
    <h2
      className={cn(
        "text-3xl uppercase font-serif font-bold",
        isCentered && "text-center",
        isLight && "text-white"
      )}
    >
      {heading}
    </h2>
  );
};
