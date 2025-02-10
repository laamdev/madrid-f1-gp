import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatNumber = (value: number) => {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: value.toString().split(".")[1]?.length || 0,
    maximumFractionDigits: value.toString().split(".")[1]?.length || 0,
  }).format(value);
};
