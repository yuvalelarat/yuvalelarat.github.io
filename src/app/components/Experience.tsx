import SkillsItem from "./SkillItem";

export default function Experience() {
    const skills = ['TypeScript', 'React', 'React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];

    return (
         <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" id="experience" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                    <ol className="group/list">
                        <li className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 - Present">
                                    2024 - Present
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-slate-200">
                                        <div>
                                            <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                                <p>Software Developer ·&nbsp;</p>
                                                <p className="inline-block">IDF (J6 & Cyber Defense)</p>
                                            </div>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal">
                                        Improved mobile app performance and significantly reduced its size. Enhanced backend efficiency by optimizing legacy systems. Delivered scalable features across web and mobile while working in an agile, fast-paced environment with continuous integration and deployment
                                    </p>
                                    <SkillsItem skills={skills} />
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </section>
    )
}