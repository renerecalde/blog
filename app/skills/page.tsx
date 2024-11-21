import ReactCountryFlag from "react-country-flag"
import {DocumentTextIcon, SyliumIcon} from "../components/icons";
import {RiNextjsLine, RiKakaoTalkLine} from "react-icons/ri";
import {MdOutlineSecurity, MdOutlineSatelliteAlt} from "react-icons/md";
import {GiArtificialIntelligence} from "react-icons/gi";
import {FaJava, FaWordpress, FaPeopleArrows} from "react-icons/fa";
import {SiMicrosoftazure, SiMetabase, Si365Datascience, SiMoodle, SiKakaotalk} from "react-icons/si";
import {DiSymfony} from "react-icons/di";

export const metadata = {
    title: 'Skills',
    description: 'Skills.',
}

function SkillGrid() {
    return (
        <>
            <div
                className="grid grid-flow-row-dense grid-cols-2 grid-rows-6 hover:grid-flow-row md:grid-flow-row gap-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Language</div>
                        <p className="text-gray-700 text-base">
                            English Basic professional competence. Also Spanish, French and Guaraní.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <ReactCountryFlag countryCode="ar"/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <ReactCountryFlag countryCode="us"/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <ReactCountryFlag countryCode="py"/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <ReactCountryFlag countryCode="fr"/>
                        </span>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Soft Skills</div>
                        <p className="text-gray-700 text-base">
                            Production of administrative texts, creativity techniques, negotiation, conflict resolution,
                            etc.
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <DocumentTextIcon/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <FaPeopleArrows/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <SiKakaotalk/>
                        </span>

                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Backend</div>
                        <p className="text-gray-700 text-base"> </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            <SyliumIcon/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <FaPeopleArrows/>
                        </span>
                        <span
                            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <SiKakaotalk/>
                        </span>

                    </div>
                </div>
                <div><RiNextjsLine/></div>
                <div><MdOutlineSecurity/></div>
                <div><GiArtificialIntelligence/></div>
                <div><RiKakaoTalkLine/></div>
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
            <SkillGrid/>
        </section>
    )
}
