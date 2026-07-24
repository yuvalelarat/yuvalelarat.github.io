import Section from "./Section";

export default function SectionListItem({ title, id, children }: { title: string, id: string, children: React.ReactNode }) {
    return (
        <Section title={title} id={id}>
            <div>
                <ol className="group/list">
                    {children}
                </ol>
            </div>
        </Section>
    )
}
