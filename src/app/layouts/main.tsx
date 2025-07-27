import AboutMe from "../components/AboueMe";
import Education from "../components/Education";
import Experience from "../components/Experience";

export default function Main() {
    return (
        <main className="pt-24 lg:w-[52%] lg:py-24">
            <AboutMe/>
            <Experience/>
            <Education/>
        </main>
    )
}