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

export const formatEventTime = (startTime: string, endTime?: string) => {
  const start = new Date(startTime);
  const day = start.getDate();
  const month = start
    .toLocaleDateString("en-GB", {
      month: "short",
    })
    .toUpperCase();

  const timeStr = start.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  if (!endTime) return { day, month, timeStr };

  const end = new Date(endTime);
  const endTimeStr = end.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return {
    day,
    month,
    timeStr: `${timeStr} - ${endTimeStr}`,
  };
};
