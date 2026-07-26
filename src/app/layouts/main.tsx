import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Writing from "../components/Writing";

export default function Main() {
    return (
        <main className="pt-24 lg:w-[52%] lg:py-24">
            <AboutMe />
            <Experience />
            <Writing />
            <Education />
        </main>
    )
}