// import PressableSection from "../components/PressableSection";
import SocialLinks from "../components/SocialLinks";

export default function Header() {
  // const sections: { [key: string]: string } = {
  //   About: "#about",
  //   Experience: "#experience",
  //   Projects: "#projects"
  // };

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24"> 
        <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              Yuval Elarat
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Software Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build, create, and solve real-world problems through code.
            </p>
            <SocialLinks /> {/* this should not be here!!!!!*/} 
            {/* <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {Object.entries(sections).map(([title, href]) => (
                  <PressableSection key={title} title={title} href={href} />
                ))}
              </ul>
            </nav> */}
        </div>
        {/* <SocialLinks /> */}
        </header>
    )
}
