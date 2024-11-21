import {AcademicCapIcon} from "../components/icons";

const skills = [
    {
        id: 1,
        description: 'Universidad Nacional del Litoral',
        name: 'B2B Sylium for ecommerce',
        icon: <AcademicCapIcon/>,
    }
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
