import {
    AcademicCapIcon,
} from "../components/icons";

export const metadata = {
    title: 'Academic',
    description: 'Academic Background.',
}

const titles = [
    {
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'Computer Engineering.',
        lastSeen: null,
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'Applied Informatics Analyst.',
        lastSeen: 'may. 2021',
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'University Bachelor\'s Degree in Engineering.',
        lastSeen: 'may. 2015',
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Escuela de Educación Técnica Nº1',
        academicTitle: 'Electrical Mechanical Technician.',
        lastSeen: 'feb. 1995 - nov. 2001. · 6 years',
        icon: <AcademicCapIcon/>,
    },
];

const licences = [
    {
        institution: 'Dario Bernabeu eLearning',
        academicTitle: 'Pentaho Data Integration',
        lastSeen: 'oct. 2024',
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'Applied Informatics Analyst.',
        lastSeen: 'may. 2021',
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Universidad Nacional del Litoral',
        academicTitle: 'University Bachelor\'s Degree in Engineering.',
        lastSeen: 'may. 2015',
        icon: <AcademicCapIcon/>,
    },
    {
        institution: 'Escuela de Educación Técnica Nº1',
        academicTitle: 'Electrical Mechanical Technician.',
        lastSeen: 'feb. 1995 - nov. 2001. · 6 years',
        icon: <AcademicCapIcon/>,
    },
];

export function LicenceList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {licences.map((licence) => (
                <li key={licence.institution} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {licence.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{licence.institution}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">{licence.academicTitle}</p>
                        {licence.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-white-500">
                                Last seen <time>{licence.lastSeen}</time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                </div>
                                <p className="text-xs leading-5 text-white-500">Online</p>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export function TitlesList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {titles.map((title) => (
                <li key={title.institution} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {title.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{title.institution}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">{title.academicTitle}</p>
                        {title.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-white-500">
                                Last seen <time>{title.lastSeen}</time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"/>
                                </div>
                                <p className="text-xs leading-5 text-white-500">Online</p>
                            </div>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Academic Background
            </h1>
            <p className="mb-4">
                {`Im Applied Computer Science Analyst and senior full-stack Software Developer with 15+ years fosforeced 
                on web software systems. In addition, I have experience in Data Science projects and some Soft Skills.`}
            </p>
            <div className="my-8">
                <TitlesList/>
            </div>

            <h2 className="mb-8 text-2xl font-semibold tracking-tighter">
                Licenses and Certifications
            </h2>

            <div className="my-8">
                <LicenceList/>
            </div>
        </section>
    )
}
