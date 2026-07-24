import SkillsItem from "./SkillItem";

export type TimelineEntry = {
    period: string;
    title: string;
    subtitle: string;
    description?: string[];
    skills?: string[];
};

export default function TimelineItem({ period, title, subtitle, description, skills }: TimelineEntry) {
    return (
        <li className="mb-12">
            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={period}>
                    {period}
                </header>
                <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                        <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
                            <p>{title}</p>
                            <p className="inline-block">&nbsp;·&nbsp;</p>
                            <p className="inline-block">{subtitle}</p>
                        </div>
                    </h3>
                    {description && description.length > 0 && (
                        <p className="mt-2 text-sm leading-normal">
                            {description.map((line, index) => (
                                <span key={line}>
                                    {line}
                                    {index < description.length - 1 && <br />}
                                </span>
                            ))}
                        </p>
                    )}
                    {skills && skills.length > 0 && <SkillsItem skills={skills} />}
                </div>
            </div>
        </li>
    );
}
