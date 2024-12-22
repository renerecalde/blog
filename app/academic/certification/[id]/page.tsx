import {licences} from "../../../lib/academic-data";
import {PaperClipIcon} from "../../../components/icons";

export async function generateStaticParams() {
    // Replace this with logic to fetch or define your dynamic `id` values.
    const ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17']; // Example IDs, replace with your data source.

    return ids.map((id) => ({ id }));
}

function obtainCertification(id: number) {
    return licences[id - 1];
}

export default function Page({params}) {
    const certification = obtainCertification(params.id);
    return <>
        <div>
            <div className="px-4 sm:px-0">
                <h3 className="text-base/7 font-semibold text-gray-200">Certification Information</h3>
                <p className="mt-1 max-w-2xl text-sm/6 text-gray-300">Personal details and application.</p>
            </div>
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-200">Institution</dt>
                        <dd className="mt-1 text-sm/6 text-gray-250 sm:col-span-2 sm:mt-0">
                            {certification.institution}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-200">Title</dt>
                        <dd className="mt-1 text-sm/6 text-gray-250 sm:col-span-2 sm:mt-0">
                            {certification.academicTitle}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-200">Date of issue</dt>
                        <dd className="mt-1 text-sm/6 text-gray-250 sm:col-span-2 sm:mt-0">
                            {certification.lastSeen}
                        </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm/6 font-medium text-gray-200">Description</dt>
                        <dd className="mt-1 text-sm/6 text-gray-250 sm:col-span-2 sm:mt-0">
                            {certification.description}
                        </dd>
                    </div>
                    {
                        certification.url ? (
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-200">Attachments</dt>
                                    <dd className="mt-2 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                        <ul role="list"
                                            className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm/6">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                        <PaperClipIcon/>
                                                        <span className="truncate font-medium">diploma.pdf</span>
                                                    </div>
                                                </div>
                                                <div className="ml-4 shrink-0">
                                                    <a href={certification.url}
                                                       className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            ) :
                            (
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm/6 font-medium text-gray-200">Attachments</dt>
                                    <dd className="mt-1 text-sm/6 text-gray-250 sm:col-span-2 sm:mt-0">
                                        The certificate contains personal data.
                                        Apply to renerecalde2@gmail.com.
                                    </dd>
                                </div>

                        )
                    }
                </dl>
            </div>
        </div>
    </>;
}