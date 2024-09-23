import {db} from '@/db'
import {notFound} from "next/navigation";

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
                    <button className="p-2 border rounded">Edit</button>
                    <button className="p-2 border rounded">Delete</button>
                </div>
            </div>
            <pre className="mx-4 border rounded bg-gray-200 border-gray-200 p-4">
                <code>{snippet.code}</code>
            </pre>
        </div>
    );


}