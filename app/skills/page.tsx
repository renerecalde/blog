import ReactCountryFlag from "react-country-flag"
import {DocumentTextIcon } from "../components/icons";
import { RiNextjsLine, RiKakaoTalkLine  } from "react-icons/ri";
import { MdOutlineSecurity,MdOutlineSatelliteAlt  } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaJava, FaWordpress, FaPeopleArrows } from "react-icons/fa";
import { SiMicrosoftazure, SiMetabase, Si365Datascience,  SiMoodle, SiKakaotalk } from "react-icons/si";
import { DiSymfony } from "react-icons/di";

export const metadata = {
    title: 'Skills',
    description: 'Skills.',
}

function SkillGrid() {
    return (
        <>
            <div
                className="grid grid-flow-row-dense grid-cols-6 grid-rows-6 hover:grid-flow-row md:grid-flow-row gap-3">
                <div><ReactCountryFlag countryCode="ar"/></div>
                <div><ReactCountryFlag countryCode="us"/></div>
                <div><ReactCountryFlag countryCode="py"/></div>
                <div><ReactCountryFlag countryCode="fr"/></div>
                <div><DocumentTextIcon/></div>
                <div><RiNextjsLine/></div>
                <div><MdOutlineSecurity/></div>
                <div><GiArtificialIntelligence/></div>
                <div><FaPeopleArrows/></div>
                <div><RiKakaoTalkLine/></div>
                <div><SiKakaotalk/></div>
                <div><MdOutlineSatelliteAlt/></div>
                <div><SiMoodle/></div>
                <div><FaWordpress/></div>
                <div><FaJava/></div>
                <div><Si365Datascience/></div>
                <div><SiMetabase/></div>
                <div><SiMicrosoftazure/></div>
                <div><DiSymfony/></div>

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
