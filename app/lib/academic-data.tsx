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
        institution: 'Dario Bernabeu eLearning',
        academicTitle: 'Pentaho Data Integration',
        lastSeen: '230hr, oct. 2024',
        url: 'https://troyanx.com/certificados/10429178A.jpg',
        icon: <AcademicCapIcon/>,
    },
    {
        id: 2,
        institution: 'MESF',
        academicTitle: 'Habilidades para el Abordaje Constructivo de Conflictos - 3° Edición.',
        lastSeen: 'sep. 2024',
        //url: 'https://www.santafe.gov.ar/formacionrrhh/site/output.php?idC=121091&hash=b59d4b78d8135d7451f104d23633d5eb19c1b870e704554d531944a0ddb0a896',
        url: null,
        icon: <AcademicCapIcon/>,
        description: 'Ministerio de Economía de la Provincia de  Santa Fe - Sec. de RRHH y Función Pública'
    },
    {
        id: 3,
        institution: 'INAP Instituto Nacional de Administración Pública',
        academicTitle: 'Herramientas para la resolución de conflictos (Plan Federal) (IN-NV-51364)',
        lastSeen: 'sep. 2023',
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
                                < div className="min-w-0 flex-auto">
                                    <p className="text-sm font-semibold leading-6 text-white-900"> {licence.institution} </p>
                                    <p className="mt-1 text-xs leading-5 text-white-500"> {licence.description} </p>
                                    < p>
                                        {
                                            licence.url ? (
                                                    <p className="text-gray-500 dark:text-gray-400">
                                                        Certificate.
                                                        <a
                                                            href={licence.url}
                                                            className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                            <Link href={`/academic/certification/${licence.id}`}>
                                                                <ArrowLeftIcon/>
                                                            </Link>
                                                        </a>
                                                    </p>
                                                ) :
                                                null
                                        }
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                <p className="text-sm leading-6 text-white-900"> {licence.academicTitle} </p>
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
                                                <p className="text-xs leading-5 text-white-500"> Online </p>
                                            </div>
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