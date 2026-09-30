import FilmsNavbar from "@/app/components/FilmsNavbar";
import FilmCard from "@/components/ui/filmcard";
import { films } from "@/utils/films";

export default function Film() {

    return (
        <>
            <FilmsNavbar current="films" />
            <main className="bg-black">
                {films.map((film, index) => (
                    <FilmCard
                        key={film.slug}
                        film={film}
                        priority={index === 0}
                    />
                ))}
            </main>
        </>
    )

}