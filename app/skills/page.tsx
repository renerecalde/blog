import ReactCountryFlag from "react-country-flag"
import {DocumentTextIcon, NextJsIcon} from "../components/icons";

export const metadata = {
    title: 'Skills',
    description: 'Skills.',
}

function SkillGrid() {
    return (
        <>
            <div className="grid grid-flow-row-dense grid-cols-6 grid-rows-6 ...">
                <div><ReactCountryFlag countryCode="ar"/></div>
                <div><ReactCountryFlag countryCode="us"/></div>
                <div><ReactCountryFlag countryCode="py"/></div>
                <div><ReactCountryFlag countryCode="fr"/></div>
                <div><DocumentTextIcon/></div>
                <div><NextJsIcon/></div>
                <div>05</div>
            </div>
        </>
    )
}

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
            Skills
            </h1>
            <p className="mb-4">
                {`Im Applied Computer Science Analyst and senior full-stack Software Developer with 15+ years fosforeced 
                on web software systems. In addition, I have experience in Data Science projects and some Soft Skills.`}
            </p>
            <SkillGrid />
       </section>
    )
}
