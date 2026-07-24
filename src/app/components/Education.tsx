import SectionListItem from "./SectionListItem";
import TimelineItem, { TimelineEntry } from "./TimelineItem";

const education: TimelineEntry[] = [
    {
        period: '2022 - 2025',
        title: 'B.Sc Computer Science',
        subtitle: 'Holon Institute of Technology',
    },
    {
        period: '2019 - 2021',
        title: 'B.A Economy and Management',
        subtitle: 'Bar-Ilan University',
    },
    {
        period: '2017 - 2019',
        title: 'Practical Engineer IEM',
        subtitle: 'Ort College',
    },
];

export default function Education() {
    return (
        <SectionListItem title="Education" id="education">
            {education.map((entry) => (
                <TimelineItem key={`${entry.subtitle}-${entry.period}`} {...entry} />
            ))}
        </SectionListItem>
    )
}
