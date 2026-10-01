import WorkNavbar from "@/app/components/WorkNavbar"

export default function PitchDecks() {
    return (
        <>
            <WorkNavbar current="pitch-decks"/>
            <h1 className="text-5xl items-center justify-center flex font-pt-serif">My Pitchdecks</h1>
            
            <div className="flex flex-col items-center justify-center mt-12">
                <a className="lg:text-4xl md:text-3xl sm:text-2xl items-center justify-center flex font-pt-serif hover:text-red-500 [transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275)] active:translate-y-1 active:scale-x-110 active:scale-y-90 hover:-translate-y-1 hover:scale-105 hover:cursor-pointer" href="https://www.canva.com/design/DAHA9XQwJpg/Ubhnjrs7mPfgl_CJjHGXoA/view?embed" target="_blank">Gentle Monster x Bon Bon 🔗</a>
                <iframe className="w-3/4 h-screen" src="https://www.canva.com/design/DAHA9XQwJpg/Ubhnjrs7mPfgl_CJjHGXoA/view?embed" allowFullScreen></iframe>
            </div>
        </>
    )
}