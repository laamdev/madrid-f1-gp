import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-white/70 p-4 backdrop-blur-md mx-8 rounded-xl border border-white/20 mt-8">
      <header className="flex items-center justify-between mx-auto">
        <Link href="/" className="relative aspect-video h-16">
          <Image
            src="/images/gp-logo.webp"
            alt="2025 F1 Spanish Grand Prix logo."
            fill
          />
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              href="/posts"
            >
              Tickets
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              href="/studio"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              href="/studio"
            >
              Concerts
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              href="/studio"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-blue-700 transition-colors"
              href="/studio"
            >
              FAQs
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
