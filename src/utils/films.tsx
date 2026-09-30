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
      "",
    year: "2026", 
    role: "Director",
    runtime: "9:45",
    poster: "/preview/CoffeeSpills_Poster.png",
    preview: "/preview/Coffee_Spill_Preview.mp4",
    video: "https://www.youtube.com/embed/gTQC61xPLYM?si=DbLIHn5lFN_fRODn",
  },
  {
    slug: "spring-runway-26",
    title: "Spring Runway '26",
    description: "",
    year: "2026",
    role: "Director",
    runtime: "3:35",
    poster: "/preview/FSUCI_Spring_Runway_'26_Teaser_Poster.png",
    preview: "/preview/Spring_Runway_'26_Preview.mp4",
    video: "https://www.youtube.com/embed/6HvvGBxQv6M?si=1I6sjXoZQNcbBlH-" ,
  }
];

export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}