import { DiSymfony } from "react-icons/di";
import { SiMetabase, SiWoocommerce, SiMoodle } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { FaPeopleArrows, FaJava } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { GiBrainstorm } from "react-icons/gi";

const skills = [
    {
        id: 1,
        description: 'Web Project Development in Independent / FreelanceWeb Project Development in Independent / Freelance',
        name: 'B2B Sylium for ecommerce',
        icon: <DiSymfony size="2x"/>,
    },
   {
        id: 2,
        description: 'Project development at Universidad Nacional del LitoralDesarrollo de proyectos at Universidad Nacional del Litoral',
        name: 'S.O.L.I.D principles',
        icon: <DiSymfony size="2x"/>,
    },
    {
        id: 3,
        description: 'Taller WordPress Multilingüe/ FreelanceWeb Project Development in Independent',
        name: 'Wordpress, Woocommerce',
        icon: <SiWoocommerce size="2x"/>,
    },

    {
        id: 4,
        description: 'Capacitación Introducción a la Plataforma MoodleCapacitación Introducción a la Plataforma Moodle',
        name: 'Moodle',
        icon: <SiMoodle size="2x"/>,
    },
    {
        id: 5,
        description: 'Desarrollo de encuesta para docentes.',
        name: 'J2me',
        icon: <FaJava size="2x"/>,
    },
    {
        id: 6,
        description: 'Desarrollo fullstack simplificado con NextJS 13.5: App Router y Side Components',
        name: 'NextJs',
        icon: <RiNextjsLine size="2x"/>,
    },
    {
        id: 7,
        description: 'Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Data Science',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 8,
        description: 'Cursos Metabase y Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Metabase',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 9,
        description: 'Cursos UNTREF',
        name: 'IA',
        icon: <AiOutlinePython size="2x"/>,
    },
    {
        id: 10,
        description: 'Cursos Pentaho y Desarrollo de dashboard para toma de decisiones en tiempo real para proyectos del Ministero de Desarrollo Productivo de la Provincia de Santa Fe',
        name: 'Pentaho',
        icon: <SiMetabase size="2x"/>,
    },
    {
        id: 11,
        description: 'Cursos INVAP, UNL',
        name: 'Ciberseguridad',
        icon: <MdOutlineSecurity size="2x"/>,
    },
    {
        id: 12,
        description: 'Cursos INVAP',
        name: 'Protección de textos',
        icon: <CiText size="2x"/>,
    },
    {
        id: 13,
        description: 'Cursos',
        name: 'Brainstorming',
        icon: <GiBrainstorm size="2x"/>,
    },
    {
        id: 14,
        description: 'Cursos INVAP, GSF, UNLZ',
        name: 'Negociación y resolución de conflictos',
        icon: <FaPeopleArrows size="2x"/>,
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
