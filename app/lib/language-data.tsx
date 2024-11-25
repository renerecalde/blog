import { DiSymfony} from "react-icons/di";
import {
   FaPhp,
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const languages = [
    {
        id: 1,
        description: 'Native',
        name: 'Spanish',
        icon: <ReactCountryFlag countryCode="AR"/>,
    },
    {
        id: 2,
        description: 'Basic professional competence',
        name: 'English',
        icon: <ReactCountryFlag countryCode="US"/>,
    },
    {
        id: 3,
        description: 'Basic competence',
        name: 'French',
        icon: <ReactCountryFlag countryCode="FR"/>,
    },
    {
        id: 4,
        description: 'Basic competence',
        name: 'Guarani',
        icon: <ReactCountryFlag countryCode="PY" />,
    },
];

export function LanguagesList() {
    return (
        <ul role="list" className="divide-y divide-gray-100">
            {languages.map((language) => (
                <li key={language.description} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                        <div className="h-12 w-12 flex-none runded-full bg-gray-10">
                            {language.icon}
                        </div>
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-white-900">{language.name}</p>
                            <p className="mt-1 text-xs leading-5 text-white-500"> {language.description} </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}
