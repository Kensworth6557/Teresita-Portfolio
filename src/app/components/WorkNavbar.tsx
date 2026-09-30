import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface WorkNavbarProps {
  current : string;
}

export default function WorkNavbar({ current } : WorkNavbarProps) {
  return (
    <>
      <nav className="flex md:flex-row flex-col gap-4 items-center justify-center z-10 md:mt-40 mt-20 mb-20">
        <Link
          href="/portfolio/all"
          className={current === "all" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          All
        </Link>
        <Link
          href="/portfolio/SetDesign"
          className={current === "setdesign" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Set Design
        </Link>
        <Link
          href="/portfolio/Marketing"
          className={current === "marketing" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Marketing Internships
        </Link>
        <Link
          href="/portfolio/Makeup"
          className={current === "makeup" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Makeup
        </Link>

        <Link
          href="/films-and-pitch-decks/Films"
          className="flex flex-col items-center md:ml-8 font-pt-serif hover:text-red-400 hover:translate-x-1 duration-75"
        >
          <ArrowRight className="size-10" />
          <span className="text-sm">Films & Pitch Decks</span>
        </Link>
      </nav>
    </>
  );
}
