export type Film = {
  slug: string;
  title: string;
  description: string;
  year: string;
  role: string;
  runtime: string;
  poster: string;
  preview: string;
  video: string;
};

export const films: Film[] = [
  {
    slug: "Coffee_Spills",
    title: "Coffee Spills",
    description:
      "...",
    year: "2026", 
    role: "Director",
    runtime: "9:45",
    poster: "/preview/CoffeeSpills_Poster.png",
    preview: "https://xmssuezlrekarpvw.public.blob.vercel-storage.com/Coffee%20Spills.mp4",
    video: "https://xmssuezlrekarpvw.public.blob.vercel-storage.com/Coffee%20Spills.mp4",
  },
  {
    slug: "spring-runway-26",
    title: "Spring Runway '26",
    description: "...",
    year: "2026",
    role: "Director",
    runtime: "3:35",
    poster: "/preview/FSUCI_Spring_Runway_'26_Teaser_Poster.png",
    preview: "https://xmssuezlrekarpvw.public.blob.vercel-storage.com/FSUCI%20Spring%20Runway%20%2726%20Teaser.mov",
    video: "https://xmssuezlrekarpvw.public.blob.vercel-storage.com/FSUCI%20Spring%20Runway%20%2726%20Teaser.mov",
  }
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}