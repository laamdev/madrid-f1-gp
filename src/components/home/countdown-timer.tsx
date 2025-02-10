"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  raceDate: string;
}

export const CountdownTimer = ({ raceDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const race = new Date(raceDate).getTime();
      const difference = race - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        setTimeLeft({ days, hours, minutes });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Then set up the interval
    const timer = setInterval(calculateTimeLeft, 1000 * 60);

    return () => clearInterval(timer);
  }, [raceDate]);

  const padNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex py-8 bg-red-600 px-4 gap-8 justify-center">
      <div className="text-center">
        <p className="text-3xl text-white font-bold font-mono">
          {timeLeft.days}
        </p>
        <p className="text-sm font-sans text-neutral-300 font-medium uppercase">
          Days
        </p>
      </div>
      <div className="text-center">
        <p className="text-3xl text-white font-bold font-mono">
          {padNumber(timeLeft.hours)}
        </p>
        <p className="text-sm font-sans text-neutral-300 font-medium uppercase">
          Hours
        </p>
      </div>
      <div className="text-center">
        <p className="text-3xl text-white font-bold font-mono">
          {padNumber(timeLeft.minutes)}
        </p>
        <p className="text-sm font-sans text-neutral-300 font-medium uppercase">
          Minutes
        </p>
      </div>
    </div>
  );
};
