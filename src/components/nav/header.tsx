import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white/70 p-4 backdrop-blur-md mx-8 rounded-xl border border-white/20 mt-8">
      <header className="flex font-bold text-slate-700 text-base uppercase font-serif items-center justify-between mx-auto">
        <Link href="/" className="relative aspect-video h-16">
          <Image
            src="/images/gp-logo.webp"
            alt="2025 F1 Spanish Grand Prix logo."
            fill
          />
        </Link>
        <ul className="flex items-center gap-4">
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
    </div>
  );
};
