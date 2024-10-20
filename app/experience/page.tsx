import {StackOverflowIcon, MobileIcon} from "../components/icons";

export const metadata = {
    title: 'Experience',
    description: 'Professional experience.',
}

const people = [
    {
        name: 'Leslie Alexander',
        email: 'leslie.alexander@example.com',
        role: 'Co-Founder / CEO',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <MobileIcon/>,
    },
    {
        name: 'Michael Foster',
        email: 'michael.foster@example.com',
        role: 'Co-Founder / CTO',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <StackOverflowIcon/>,
    },
    {
        name: 'Dries Vincent',
        email: 'dries.vincent@example.com',
        role: 'Business Relations',
        lastSeen: null,
        icon: <StackOverflowIcon/>,
    },
    {
        name: 'Lindsay Walton',
        email: 'lindsay.walton@example.com',
        role: 'Front-end Developer',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <StackOverflowIcon/>,
    },
    {
        name: 'Courtney Henry',
        email: 'courtney.henry@example.com',
        role: 'Designer',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
        icon: <StackOverflowIcon/>,
    },
    {
        name: 'Tom Cook',
        email: 'tom.cook@example.com',
        role: 'Director of Product',
        lastSeen: null,
        icon: <MobileIcon/>,
    },
];

export function Example() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {people.map((person) => (
                <li key={person.email} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {person.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{person.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-white-500">{person.email}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-white-900">{person.role}</p>
                        {person.lastSeen ? (
                            <p className="mt-1 text-xs leading-5 text-white-500">
                                Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                            </p>
                        ) : (
                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
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
