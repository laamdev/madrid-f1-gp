import React from "react";

export const EmptySchedule = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold">To be confirmed</h1>
      <p className="text-sm text-neutral-500">
        The schedule will be announced closer to the event date.
      </p>
    </div>
  );
};
