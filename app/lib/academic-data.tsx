import {AcademicCapIcon, ArrowLeftIcon} from "../components/icons";
import Link from 'next/link'

const titles = [
    {
        id: 1,
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'Computer Engineering.',
        lastSeen: null,
        icon: <AcademicCapIcon/>,
    },
    {
        id: 2,
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'Applied Informatics Analyst.',
        lastSeen: 'may. 2021',
        icon: <AcademicCapIcon/>,
    },
    {
        id: 3,
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'University Bachelor\'s Degree in Engineering.',
        lastSeen: 'may. 2015',
        icon: <AcademicCapIcon/>,
    },
    {
        id: 4,
        institution: 'Escuela de Educación Técnica Nº1',
        academicTitle: 'Electrical Mechanical Technician.',
        lastSeen: 'feb. 1995 - nov. 2001. · 6 years',
        icon: <AcademicCapIcon/>,
    },
];

export const licences = [
    {
        id: 1,
        institution: 'Donweb',
        academicTitle: 'Taller WordPress Multilingüe',
        lastSeen: '29 oct. 2024',
        icon: <AcademicCapIcon/>,
        description: 'Talleres DonWeb'
    },
    {
        id: 2,
        institution: 'Leafnoise',
        academicTitle: 'Curso Desarrollador Metabase',
        lastSeen: '230hr, oct. 2024',
        icon: <AcademicCapIcon/>,
        description: 'Leafnoise - Secretaría de Tecnologías para la Gestión - Gobierno de la Provincia de Santa Fe'
    },
    {
        id: 3,
        institution: 'Dario Bernabeu eLearning',
        academicTitle: 'Pentaho Data Integration',
        lastSeen: '230hr, oct. 2024',
        url: 'https://troyanx.com/certificados/10429178A.jpg',
        icon: <AcademicCapIcon/>,
        description: 'Dario Bernabeu eLearning'
    },
    {
        id: 4,
        institution: 'MESF',
        academicTitle: 'Habilidades para el Abordaje Constructivo de Conflictos - 3° Edición.',
        lastSeen: 'sep. 2024',
        //url: 'https://www.santafe.gov.ar/formacionrrhh/site/output.php?idC=121091&hash=b59d4b78d8135d7451f104d23633d5eb19c1b870e704554d531944a0ddb0a896',
        url: null,
        icon: <AcademicCapIcon/>,
        description: 'Ministerio de Economía de la Provincia de  Santa Fe - Sec. de RRHH y Función Pública'
    },
    {
        id: 5,
        institution: 'Donweb',
        academicTitle: 'Desarrollo fullstack simplificado con NextJS 13.5: App Router y Side Components',
        lastSeen: 'dic. 2023',
        url: null,
        icon: <AcademicCapIcon/>,
        description: 'Talleres DonWeb'
    },

    {
        id: 6,
        institution: 'INAP',
        academicTitle: 'Herramientas para la resolución de conflictos (Plan Federal) (IN-NV-51364)',
        lastSeen: 'sep. 2023',
        icon: <AcademicCapIcon/>,
        description: 'Instituto Nacional de Administración Pública'
    },
    {
        id: 7,
        institution: 'Donweb',
        academicTitle: 'Taller Desarrollo Creativo, Bainstorming y Design Thinking',
        lastSeen: '13 mar. 2023',
        icon: <AcademicCapIcon/>,
        description: 'Talleres DonWeb'
    },
    {
        id: 8,
        institution: 'UNLZ-IME-INAP',
        academicTitle: 'Comunicación de las acciones estatales con perspectiva de género',
        lastSeen: 'jun. 2023',
        icon: <AcademicCapIcon/>,
        description: 'Universidad Nacional de Lomas de Zamora - Plan Federal de Formación y Capacitación en Gestión Pública'
    },
    {
        id: 9,
        institution: 'UNLZ-IME-INAP',
        academicTitle: 'Negociación y resolución de conflictos como habilidad directiva',
        lastSeen: 'jun. 2023',
        icon: <AcademicCapIcon/>,
        description: 'Universidad Nacional de Lomas de Zamora - Plan Federal de Formación y Capacitación en Gestión Pública'
    },
    {
        id: 10,
        institution: 'INAP',
        academicTitle: 'Introducción a la Gestión de Incidentes de Seguridad Informática',
        lastSeen: '27 may. 2023',
        icon: <AcademicCapIcon/>,
        description: 'Instituto Nacional de Administración Pública - Secretaría de Gestión y Empleo Público'
    },
    {
        id: 12,
        institution: 'INAP',
        academicTitle: 'Producción de textos administrativos (Plan Federal) (IN-NT-48107)',
        lastSeen: '22 nov. 2022',
        icon: <AcademicCapIcon/>,
        description: 'Instituto Nacional de Administración Pública - Secretaría de Gestión y Empleo Público'
    },
    {
        id: 13,
        institution: 'UNTREF-IME-INAP',
        academicTitle: 'Introducción a la Inteligencia Artificial y su Aplicación en la Generación de la Información para la Planificación y Toma de Desición de Políticas Públicas',
        lastSeen: 'sep. 2022',
        icon: <AcademicCapIcon/>,
        description: 'Universidad Nacional de Tres de Febrero - Plan Federal de Formación y Capacitación en Gestión Pública'
    },
    {
        id: 14,
        institution: 'MIGD',
        academicTitle: 'Ley Micaela. Curso de Capacitación Obligatoria en Género para las Trabajadoras y los Trabajadores de la Administración Pública Provincial',
        lastSeen: 'dic. 2021',
        icon: <AcademicCapIcon/>,
        description: 'Ministerio de Igualdad, Género y Diversidad de la Provincia de Santa Fe'
    },
    {
        id: 15,
        institution: 'Udemy',
        academicTitle: 'Beginner English: Practical Foundational English Training',
        lastSeen: '25 jun. 2021',
        icon: <AcademicCapIcon/>,
        description: 'Udemy'
    },
    {
        id: 16,
        institution: 'CEICH - FICH UNL',
        academicTitle: 'MISIONES SATELITALES aplicadas a la enseñanza de la Ciencia y la Tecnología',
        lastSeen: '8 may. 2020',
        icon: <AcademicCapIcon/>,
        description: 'Centro de Estudiantes de la Facultad de Ingeniería y Ciencias Hídricas de la Universidad Nacional del Litoral (CEICH - FICH UNL)'
    },
    {
        id: 17,
        institution: 'CEICH - FICH UNL',
        academicTitle: 'Ciberseguridad en tiempos de Covid-19',
        lastSeen: '27 apr. 2020',
        icon: <AcademicCapIcon/>,
        description: 'Centro de Estudiantes de la Facultad de Ingeniería y Ciencias Hídricas de la Universidad Nacional del Litoral (CEICH - FICH UNL)'
    },
    {
        id: 18,
        institution: 'STG',
        academicTitle: 'Capacitación Introducción a la Plataforma Moodle',
        lastSeen: '18 agu. 2019',
        icon: <AcademicCapIcon/>,
        description: 'Gobierno de la Provincia de Santa Fe - Secretaría de Tecnologías para la Gestión'
    },
];

export function LicenceList() {
    return (
        <>
            <ul role="list" className="divide-y divide-gray-100">
                {
                    licences.map((licence) => (
                        <li key={licence.institution} className="flex justify-between gap-x-6 py-5">
                            <div className="flex min-w-0 gap-x-4">
                                <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                                    {licence.icon}
                                </div>
                                <div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-white-900">
                                        {licence.academicTitle}
                                    </p>
                                                   <p className="text-gray-500 text-sm dark:text-gray-400">
                                                        Details
                                                        <a
                                                            href="#"
                                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                        >
                                                            <Link href={`/academic/certification/${licence.id}`}>
                                                                <ArrowLeftIcon/>
                                                            </Link>
                                                        </a>
                                                    </p>
                                </div>
                            </div>
                            <div
                                className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-white-900"> {licence.institution} </p>
                                {
                                    licence.lastSeen ? (
                                            <p className="mt-1 text-xs leading-5 text-white-500">
                                                Last seen <time> {licence.lastSeen} </time>
                                            </p>
                                        ) :
                                        (
                                            <div className="mt-1 flex items-center gap-x-1.5">
                                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                </div>
                                                <p className="text-xs leading-5 text-white-500"> Online </p>
                                            </div>
                                        )
                                }
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export function TitlesList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {
                titles.map((title) => (
                    <li key={title.institution} className="flex justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <div className="h-12 w-12 flex-none runded-full bg-gray-10"> {title.icon} </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-white-900"> {title.institution} </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                            <p className="text-sm leading-6 text-white-900"> {title.academicTitle} </p>
                            {
                                title.lastSeen ? (
                                        <p className="mt-1 text-xs leading-5 text-white-500">
                                            Last seen <time> {title.lastSeen} </time>
                                        </p>
                                    ) :
                                    (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                            </div>
                                            <p className="text-xs leading-5 text-white-500"> Online </p>
                                        </div>
                                    )
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}