export const metadata = {
    title: 'Overview',
    description: 'Professional Overview.',
}

export default function Page() {
    return (
        <section className="mb-28 max-w-[50rem]">
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Professional Overview
            </h1>
            <p className="mb-4">
                {`I am René, an Analyst in Applied Informatics. 
                I started developing for mobile devices with J2ME in 2008.
                 Shortly after, I switched to web development with PHP using the Symfony framework, 
                 starting with version 1.2 and continuing with the current version. 
                 I have worked for the government of Santa Fe, the National University of the Litoral, 
                 a financial company, and cooperatives. 
                 I have also freelanced, building e-commerce platforms and other projects.
                 I have worked for companies both inside and outside the country.
                 I enjoy reading, and while working at UNL Cetul, 
                 I developed a taste for reading theses and scientific articles,
                 which keeps me informed about scientific advancements.
                 I have taken part in development projects, both individually and with teams.
                 I constantly seek to acquire knowledge in different technologies. Over the past year, 
                 I have started participating in data science projects. To work effectively in teams, 
                 I have trained in various soft skills, such as communication, Harvard negotiation techniques, 
                 conflict resolution, and non-violent communication.
                 I have basic training in languages, including English, Guaraní, and French.`}
            </p>

            <h2 className="mb-8 text-xl font-semibold tracking-tighter">Current job position</h2>
            <p className={"mb-4"}>
                {`Software developer at the Ministry of Productive Development of the Province of Santa Fe. 
                In the same place, I perform data science tasks. Additionally, I am a freelance web developer.`}
            </p>

            <h2 className="mb-8 text-xl font-semibold tracking-tighter">General Skills</h2>
            <ul className="list-disc">
                <li className="mb-4">Applied Informatics Analyst</li>
                <li className="mb-4">Web development,</li>
                <li className="mb-4">Data Science,</li>
                <li className="mb-4">Project Management,</li>
                <li className="mb-4">Soft Skills,</li>
            </ul>

            <h2 className="mb-8 text-xl font-semibold tracking-tighter">Location</h2>
            <p className={"mb-4"}>
                {`Santa Fe, Argentina.`}
            </p>
        </section>
    )
}