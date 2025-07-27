export default function SkillsItem({ skills }: { skills: string[] }) {
    return (
        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map(skill => (
                <li className="mr-1.5 mt-2" key={skill}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                        {skill}
                    </div>
                </li>
            ))}
        </ul>
    )
}