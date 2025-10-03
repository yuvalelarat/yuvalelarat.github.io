import SectionListItem from "./SectionListItem";
import SkillsItem from "./SkillItem";

export default function Experience() {
    const upwindSkills = ['Security Research', 'Python', 'Cloud Security', 'Burp Suite', 'Linux', 'Networking', 'AWS', 'Azure', 'GCP'];
    const idfSkills = ['TypeScript', 'React', 'React Native', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'];

    return (
        <SectionListItem title="Experience" id="experience">
             <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 - Present">
                        2025 - Present
                    </header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                    <p>Cloud Security Research Analyst ·&nbsp;</p>
                                    <p className="inline-block">Upwind</p>
                                </div>
                            </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                            I research cloud misconfigurations and vulnerabilities to strengthen CSPM capabilities and build Python automation to support my team. My work includes API security assessments with Burp Suite, mapping network exposure using nmap and related tools to uncover and validate attack paths.</p>
                        <SkillsItem skills={upwindSkills} />
                    </div>
                </div>
            </li>
            <li className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 - Present">
                        2023 - 2025
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
                        <SkillsItem skills={idfSkills} />
                    </div>
                </div>
            </li>
        </SectionListItem>
    )
}