import {
    AcademicCapIcon,
    BackNotesIcon,
    BuildingLibraryIcon,
    MobileIcon,
    UserGroupIcon,
    WebIcon
} from "../components/icons";

const jobs = [
    {
        id: 1,
        cargo: 'Ministerio de Desarrollo Productivo de la Provincia de Santa Fe.',
        company: 'Full time',
        role: 'Applied Informatics Analyst.',
        lastSeen: null,
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <BuildingLibraryIcon/>,
        description: 'I perform web development tasks, data science, and applied informatics analyst tasks.'
    },
    {
        id: 2,
        cargo: 'COPRINF',
        company: 'Part time',
        role: 'Web developer',
        lastSeen: null,
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <UserGroupIcon/>,
        description: 'Web systems development.'
    },
    {
        id: 3,
        cargo: 'Universidad Nacional del Litoral',
        company: 'Part time',
        role: 'Project development.',
        lastSeen: 'feb. 2020 - mar. 2022 · 2 years 2 months',
        icon: <AcademicCapIcon/>,
        description: 'Development of a thesis and dissertations management system.'
    },
    {
        id: 4,
        cargo: 'Ministerio de la Producción, Ciencia y Tecnología de la Provincia de Santa Fe.',
        company: 'Part time',
        role: 'Web developer contracted.',
        lastSeen: 'sept. 2016 - mar. 2022 · 5 years and 7 months',
        icon: <BuildingLibraryIcon/>,
        description: 'Development of systems related to entrepreneurship and the social economy.'
    },
    {
        id: 5,
        cargo: 'Credifiar',
        company: 'Full time',
        role: 'Applied Informatics Analyst.',
        lastSeen: 'jan. 2020 - mar. 2020 · 3 months',
        icon: <BackNotesIcon/>,
        description: 'Development tasks and general IT.'
    },
    {
        id: 6,
        cargo: 'Freelance',
        company: 'Full time',
        role: 'Web Project Development.',
        lastSeen: 'mar. 2009 - sep. 2015 · 6 years and 7 months',
        icon: <WebIcon/>,
        description: 'I worked on the development of websites, mostly e-commerce platforms with Symfony for local businesses.'
    },
    {
        id: 7,
        cargo: 'Freelance',
        company: 'Full time',
        role: 'Mobile Device Programming',
        lastSeen: 'mar. 2008 - dec. 2008 · 10 months',
        icon: <MobileIcon/>,
        description: 'I worked in mobile device programming with J2ME. Among the systems I developed, a notable one was a voting survey system.'
    },
];

export function JobList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {jobs.map((job) => (
                <li key={job.company} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {job.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{job.cargo}</p>
                            <p className="mt-1 text-xs leading-5 text-white-500"> {job.description} </p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">{job.role}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-white-500">{job.company}</p>
                        {job.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-white-500">
                                Last seen <time dateTime={job.lastSeenDateTime}>{job.lastSeen}</time>
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
