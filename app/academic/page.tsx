
export const metadata = {
    title: 'Academic',
    description: 'Academic Background.',
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
