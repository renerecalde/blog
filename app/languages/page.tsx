import {LanguagesList} from "../lib/language-data";

export const metadata = {
    title: 'Languages',
    description: 'Languages and certifications.',
}

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Languages</h1>
            <LanguagesList/>
        </section>
    )
}
