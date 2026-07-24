import SectionListItem from "./SectionListItem";
import TimelineItem, { TimelineEntry } from "./TimelineItem";

const experiences: TimelineEntry[] = [
    {
        period: '2025 - Present',
        title: 'Software Engineer',
        subtitle: 'Upwind Security',
        description: [
            'Specializing in architecting and developing scalable,',
            'high-performance software systems integrated into real-time operational environments,',
            'with an emphasis on reliability, distributed architectures, and efficient execution at scale.',
        ],
        skills: ['Python', 'Multithreading', 'Multiprocessing', 'AWS', 'Kubernetes', 'RabbitMQ', 'Redis cache'],
    },
    {
        period: '2023 - 2025',
        title: 'Software Engineer',
        subtitle: 'IDF (J6 & Cyber Defense)',
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
                <TimelineItem key={`${experience.subtitle}-${experience.period}`} {...experience} />
            ))}
        </SectionListItem>
    )
}
