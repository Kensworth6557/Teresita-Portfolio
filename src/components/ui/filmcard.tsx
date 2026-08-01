import Image from "next/image";
import Link from "next/link";

import type { Film } from "@/utils/films.tsx";

type FilmCardProps = {
  film: Film;
  priority?: boolean;
};

export default function FilmCard({
  film,
  priority = false,
}: FilmCardProps) {
  return (
    <Link
      href={`/portfolio/Films/${film.slug}`}
      aria-label={`View ${film.title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-black"
    >
      {/* Video continuously plays behind the poster */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        poster={film.poster}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-focus-visible:scale-105"
      >
        <source src={film.preview} type="video/mp4" />
      </video>

      {/* Poster fades away on hover */}
      <Image
        src={film.poster}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover transition-opacity duration-500 ease-out group-hover:opacity-0 group-focus-visible:opacity-0"
      />

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 transition-colors duration-500 group-hover:bg-black/10 group-focus-visible:bg-black/10" />

      {/* Bottom gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Project information */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 p-6 sm:p-10 lg:p-14">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/70 sm:text-sm">
          {film.role}
        </p>

        <h2 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-8xl">
          {film.title}
        </h2>

        <div className="mt-5 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-white/80 sm:text-sm">
          <span>{film.year}</span>
          <span aria-hidden="true">•</span>
          <span>{film.runtime}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-2 group-focus-visible:translate-x-2"
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}