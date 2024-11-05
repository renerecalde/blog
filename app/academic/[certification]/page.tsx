import { useRouter } from 'next/router'

export default function Page() {
    const router = useRouter();
    return <p>Certification Page {router.query.id}</p>;
}