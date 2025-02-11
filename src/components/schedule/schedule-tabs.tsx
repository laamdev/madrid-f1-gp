"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const ScheduleTabs = () => {
  const searchParams = useSearchParams();
  const competition = searchParams.get("competition") || "f1";

  const getTabStyles = (tabCompetition: string) => {
    return `relative border-2 w-16 md:w-20 rounded-xl aspect-square cursor-pointer transition-all duration-200 ${
      competition === tabCompetition
        ? "bg-white border-transparent ring-2 ring-primary"
        : "hover:bg-neutral-200"
    }`;
  };

  return (
    <div className="flex md:flex-col flex-row gap-4">
      <Link
        href="?competition=f1"
        className={getTabStyles("f1")}
        scroll={false}
      >
        <Image
          src="/images/f1-logo.webp"
          alt="Formula 1"
          fill
          className="object-cover object-center"
        />
      </Link>
      <Link
        href="?competition=f2"
        className={getTabStyles("f2")}
        scroll={false}
      >
        <Image
          src="/images/f2-logo.webp"
          alt="Formula 2"
          fill
          className="object-cover object-center"
        />
      </Link>
      <Link
        href="?competition=f3"
        className={getTabStyles("f3")}
        scroll={false}
      >
        <Image
          src="/images/f3-logo.webp"
          alt="Formula 3"
          fill
          className="object-cover object-center"
        />
      </Link>
    </div>
  );
};
