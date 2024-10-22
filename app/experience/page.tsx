import {BuildingLibraryIcon, StackOverflowIcon, MobileIcon, WebIcon} from "../components/icons";

export const metadata = {
    title: 'Experience',
    description: 'Professional experience.',
}

const jobs = [
    {
        cargo: 'Leslie Alexander',
        company: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <MobileIcon/>,
        description: 'I worked in mobile device programming with J2ME. Among the systems I developed, a notable one was a voting survey system.'
    },
    {
        cargo: 'Michael Foster',
        company: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <StackOverflowIcon/>,
        description: 'I worked in mobile device programming with J2ME. Among the systems I developed, a notable one was a voting survey system.'
    },
    {
        cargo: 'Dries Vincent',
        company: 'dries.vincent@example.com',
        role: 'Business Relations',
        lastSeen: null,
        icon: <StackOverflowIcon/>,
        description: 'I worked in mobile device programming with J2ME. Among the systems I developed, a notable one was a voting survey system.'
    },
    {
        cargo: 'Ministerio de la Producción, Ciencia y Tecnología de la Provincia de Santa Fe.',
        company: 'Part time',
        role: 'Web developer contracted.',
        lastSeen: 'sept. 2016 - mar. 2022 · 5 years and 7 months',
        icon: <BuildingLibraryIcon/>,
        description: 'Development of systems related to entrepreneurship and the social economy.'
    },
    {
        cargo: 'Freelance',
        company: 'Full time',
        role: 'Web Project Development.',
        lastSeen: 'mar. 2009 - sep. 2015 · 6 years and 7 months',
        icon: <WebIcon/>,
        description: 'I worked on the development of websites, mostly e-commerce platforms with Symfony for local businesses.'
    },
    {
        cargo: 'Freelance',
        company: 'Full time',
        role: 'Mobile Device Programming',
        lastSeen: 'mar. 2008 - dec. 2008 · 10 months',
        icon: <MobileIcon/>,
        description: 'I worked in mobile device programming with J2ME. Among the systems I developed, a notable one was a voting survey system.'
    },
];

export function Example() {
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

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Professional Experience</h1>
            <Example/>
        </section>

    )
}
