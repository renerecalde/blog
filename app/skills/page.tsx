import {SkillsList} from "../lib/skill-data";

export const metadata = {
    title: 'Skills',
    description: 'Skills.',
}

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter"> Skills </h1>
            <SkillsList/>
        </section>
    )
}
