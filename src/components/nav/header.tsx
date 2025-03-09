"use client";
import { useRef } from "react";
import Link from "next/link";
import { useScroll, motion, useTransform } from "motion/react";

export const Header = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();

  // Transform the margin-top value based on scroll position
  // Start with 8 (mt-8) and reduce to 4 (mt-4) as user scrolls down
  const marginTop = useTransform(
    scrollY,
    [0, 100], // scroll values (0px to 100px)
    ["2rem", "1rem"] // corresponding margin values (8 to 4)
  );

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 right-0 z-20 bg-white/70 p-4 backdrop-blur-md mx-8 rounded-xl border border-white/20"
      style={{
        marginTop,
      }}
    >
      <header className="flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="relative font-mono font-black flex items-center uppercase"
        >
          <span className="text-red-600">{`Mad`}</span>
          <span className="text-sm">{`GP`}</span>
        </Link>
        <ul className="flex items-center text-slate-700 gap-8 text-base font-medium">
          <li>
            <Link
              className="hover:text-accent transition-colors"
              href="/tickets"
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-accent transition-colors"
              href="/schedule"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-accent transition-colors"
              href="/concerts"
            >
              Concerts
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-colors" href="/news">
              News
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent transition-colors" href="/faqs">
              FAQs
            </Link>
          </li>
        </ul>
      </header>
    </motion.div>
  );
};
