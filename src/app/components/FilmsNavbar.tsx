import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface FilmsNavbarProps {
  current : string;
}

export default function FilmsNavbar({ current } : FilmsNavbarProps) {
  return (
    <>
      <nav className="flex md:flex-row flex-col gap-4 items-center justify-center z-10 md:mt-40 mt-20 mb-20">
        <Link
          href="/portfolio/all"
          className="flex flex-col items-center md:mr-8 font-pt-serif hover:text-red-400 hover:-translate-x-1 duration-75"
        >
          <ArrowLeft className="size-10" />
          <span className="text-sm">My Works</span>
        </Link>

        <Link
          href="/films-and-pitch-decks/Films"
          className={current === "films" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Films
        </Link>
        <Link
          href="/films-and-pitch-decks/pitch-decks"
          className={current === "pitch-decks" ? "text-3xl underline font-pt-serif text-red-500" : "text-3xl font-pt-serif hover:text-red-400"}
        >
          Pitch Decks
        </Link>
      </nav>
    </>
  );
}
