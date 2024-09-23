import {db} from '@/db'
import {notFound} from "next/navigation";
import Link from "next/link";

interface SnippetShowPageProps {
    params: {
        id: string,
    }
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
    const snippet = await db.snippet.findFirst({
        where: {
            id: parseInt(props.params.id)
        }
    });

    if (!snippet) {
        notFound();
    }
    return (
        <div>
            <div className="flex m-4 flex-col justify-between items-center sm:flex-row">
                <h1 className="text-xl font-bold pb-4 sm:pb-0">{snippet.title}</h1>
                <div className="flex gap-4">
                    <Link href={`/snippets/${snippet.id}/edit`} className="p-2 border rounded">Edit</Link>
                    <button className="p-2 border rounded">Delete</button>
                </div>
            </div>
            <pre className="mx-4 border rounded bg-gray-200 border-gray-200 p-4">
                <code>{snippet.code}</code>
            </pre>
        </div>
    );


}