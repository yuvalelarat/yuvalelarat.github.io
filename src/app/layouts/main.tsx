import AboutMe from "../components/AboueMe";
import Experience from "../components/Experience";

export default function Main() {
    return (
        <main className="pt-24 lg:w-[52%] lg:py-24">
            <AboutMe/>
            <Experience/>
        </main>
    )
}