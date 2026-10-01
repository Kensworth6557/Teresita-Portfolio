import WorkNavbar from "@/app/components/WorkNavbar";
import FilmCard from "@/components/ui/filmcard";
import { films } from "@/utils/films";

export default function Film() {

    return (
        <>
            <WorkNavbar current="films" />
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