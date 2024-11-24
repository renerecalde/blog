import {DiSymfony} from "react-icons/di";
import {SiAzuredevops, SiMetabase, SiWoocommerce, SiMoodle, SiWebgl, SiMaterialdesign} from "react-icons/si";
import { RiJavascriptLine, RiNextjsLine} from "react-icons/ri";
import {AiOutlinePython} from "react-icons/ai";
import {
    FaHtml5,
    FaGit,
    FaDocker,
    FaLanguage,
    FaPeopleArrows,
    FaJava,
    FaReact,
    FaPhp,
    FaCss3,
    FaBootstrap
} from "react-icons/fa";
import { BiLogoGoLang } from "react-icons/bi";
import {MdOutlineSecurity} from "react-icons/md";
import {CiSatellite1, CiText} from "react-icons/ci";
import {GiBrainstorm} from "react-icons/gi";

const skills = [
    {
        id: 1,
        description: 'Web Project Development in GSF, UNL, Freelance, etc',
        name: 'Symfony',
        icon: <DiSymfony size="2x"/>,
    },
    {
        id: 2,
        description: 'Web Project Development in Independent / FreelanceWeb Project Development in Independent / Freelance',
        name: 'B2B Sylium for ecommerce',
        icon: <DiSymfony size="2x"/>,
    },
    {
        id: 3,
        description: 'Project development at Universidad Nacional del Litoral',
        name: 'S.O.L.I.D principles',
        icon: <DiSymfony size="2x"/>,
    },
    {
        id: 4,
        description: 'Project development at GSF, UNL, Freelance, etc ',
        name: 'PHP',
        icon: <FaPhp size="2x"/>,
    },
    {
        id: 5,
        description: 'Project development at GSF, UNL, Freelance, etc ',
        name: 'Javascript',
        icon: <RiJavascriptLine size="2x"/>,
    },
    {
        id: 6,
        description: 'Curses',
        name: 'Golang',
        icon: <BiLogoGoLang size="2x"/>,
    },
    {
        id: 7,
        description: 'Taller WordPress Multilingüe/ FreelanceWeb Project Development in Independent',
        name: 'Wordpress, Woocommerce',
        icon: <SiWoocommerce size="2x"/>,
    },
    {
        id: 8,
        description: 'GSF, UNL, Freelance',
        name: 'Git',
        icon: <FaGit size="2x"/>,
    },
    {
        id: 9,
        description: 'GSF, UNL, Freelance',
        name: 'Docker',
        icon: <FaDocker size="2x"/>,
    },
    {
        id: 10,
        description: 'UNL, Freelance',
        name: 'Azure DevOps',
        icon: <SiAzuredevops size="2x"/>,
    },
    {
        id: 11,
        description: 'Courses',
        name: 'English, French, Spanish, Guaraní.',
        icon: <FaLanguage size="2x"/>,
    },
    {
        id: 12,
        description: 'Capacitación Introducción a la Plataforma MoodleCapacitación Introducción a la Plataforma Moodle',
        name: 'Moodle',
        icon: <SiMoodle size="2x"/>,
    },
    {
        id: 13,
        description: 'GSF, UNL, Freelance',
        name: 'Html5',
        icon: <FaHtml5 size="2x"/>,
    },
    {
        id: 14,
        description: 'GSF, UNL, Freelance',
        name: 'Css3',
        icon: <FaCss3 size="2x"/>,
    },
    {
        id: 15,
        description: 'GSF, UNL, Freelance',
        name: 'Boostrap',
        icon: <FaBootstrap size="2x"/>,
    },
    {
        id: 16,
        description: 'GSF, UNL, Freelance',
        name: 'Material design',
        icon: <SiMaterialdesign size="2x"/>,
    },
    {
        id: 17,
        description: 'Desarrollo fullstack simplificado con NextJS 13.5: App Router y Side Components',
        name: 'NextJs',
        icon: <RiNextjsLine size="2x"/>,
    },
    {
        id: 18,
        description: 'Freelance',
        name: 'ReactJs',
        icon: <FaReact size="2x"/>,
    },
    {
        id: 19,
        description: 'Desarrollo de encuesta para docentes.',
        name: 'J2me',
        icon: <FaJava size="2x"/>,
    },
    {
        id: 20,
        description: 'Curses',
        name: 'WebGl',
        icon: <SiWebgl size="2x"/>,
    },
   {
        id: 21,
        description: 'Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Data Science',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 22,
        description: 'Cursos Metabase y Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Metabase',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 23,
        description: 'Cursos Pentaho y Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Pentaho',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 24,
        description: 'Courses UNTREF',
        name: 'IA',
        icon: <AiOutlinePython size="2x"/>,
    },
    {
        id: 25,
        description: 'Courses INVAP, UNL',
        name: 'Ciberseguridad',
        icon: <MdOutlineSecurity size="2x"/>,
    },
    {
        id: 26,
        description: 'Courses INVAP',
        name: 'Protección de textos',
        icon: <CiText size="2x"/>,
    },
    {
        id: 27,
        description: 'Courses',
        name: 'Brainstorming',
        icon: <GiBrainstorm size="2x"/>,
    },
    {
        id: 28,
        description: 'Courses INVAP, GSF, UNLZ',
        name: 'Comunicación, Negociación y resolución de conflictos',
        icon: <FaPeopleArrows size="2x"/>,
    },
    {
        id: 29,
        description: 'Courses UNL',
        name: 'Sistemas satelitales',
        icon: <CiSatellite1 size="2x"/>,
    },
];

export function SkillsList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {skills.map((skill) => (
                <li key={skill.description} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {skill.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{skill.name}</p>
                            <p className="mt-1 text-xs leading-5 text-white-500"> {skill.description} </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
