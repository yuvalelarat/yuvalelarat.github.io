import SectionListItem from "./SectionListItem";
import SkillsItem from "./SkillItem";

type ExperienceEntry = {
    period: string;
    role: string;
    company: string;
    description: string[];
    skills: string[];
};

const experiences: ExperienceEntry[] = [
    {
        period: '2025 - Present',
        role: 'Software Engineer',
        company: 'Upwind Security',
        description: [
            'Specializing in architecting and developing scalable,',
            'high-performance software systems integrated into real-time operational environments,',
            'with an emphasis on reliability, distributed architectures, and efficient execution at scale.',
        ],
        skills: ['Python', 'Multithreading', 'Multiprocessing', 'AWS', 'Kubernetes', 'RabbitMQ', 'Redis cache'],
    },
    {
        period: '2023 - 2025',
        role: 'Software Engineer',
        company: 'IDF (J6 & Cyber Defense)',
        description: [
            'Focused on modernizing legacy systems and building scalable backend services,',
            'leveraging Node.js alongside AWS infrastructure such as S3, Lambda, and SQS,',
            'with an emphasis on containerized workloads and reliable delivery through Docker, Kubernetes, and CI/CD pipelines.',
        ],
        skills: ['TypeScript', 'Node.js', 'React', 'React Native', 'AWS', 'Docker', 'Kubernetes'],
    },
];

export default function Experience() {
    return (
        <SectionListItem title="Experience" id="experience">
            {experiences.map((experience) => (
                <li className="mb-12" key={`${experience.company}-${experience.period}`}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={experience.period}>
                            {experience.period}
                        </header>
                        <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                                <div>
                                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                        <p>{experience.role} ·&nbsp;</p>
                                        <p className="inline-block">{experience.company}</p>
                                    </div>
                                </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                                {experience.description.map((line, index) => (
                                    <span key={line}>
                                        {line}
                                        {index < experience.description.length - 1 && <br />}
                                    </span>
                                ))}
                            </p>

                            <SkillsItem skills={experience.skills} />
                        </div>
                    </div>
                </li>
            ))}
        </SectionListItem>
    )
}
