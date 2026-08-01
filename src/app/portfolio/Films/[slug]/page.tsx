import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FilmPlayer from "@/components/ui/filmplayer";

import { films, getFilmBySlug } from "@/utils/films";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return films.map((film) => ({
    slug: film.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    return {
      title: "Film not found",
    };
  }

  return {
    title: film.title,
    description: film.description,
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const film = getFilmBySlug(slug);

  if (!film) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white mt-40">
      <div className="relative flex min-h-screen items-center justify-center bg-black">
        <video
          controls
          playsInline
          preload="metadata"
          poster={film.poster}
          className="max-h-screen w-full bg-black object-contain"
          muted={false}
        >
          <source src={film.video} type="video/mp4" />

          Your browser does not support HTML video.
        </video>
      </div>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-24">
        <Link
          href="/portfolio/Films"
          className="inline-block text-sm uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
        >
          ← Back
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
              Film
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl">
              {film.title}
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
              {film.description}
            </p>
          </div>

          <dl className="grid content-start gap-8 border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-white/40">
                Role
              </dt>
              <dd className="mt-2 text-lg text-white/90">
                {film.role}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-white/40">
                Year
              </dt>
              <dd className="mt-2 text-lg text-white/90">
                {film.year}
              </dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-[0.25em] text-white/40">
                Runtime
              </dt>
              <dd className="mt-2 text-lg text-white/90">
                {film.runtime}
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}