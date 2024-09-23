import { db } from '@/db'
import {notFound} from "next/navigation";
import SnippetsEditForm from "../../../../components/snippetEditForm";

interface SnippetEditPageProps{
    params:{
        id: string
    }
}
export default async function SnippetEditPage(props: SnippetEditPageProps){
    const id = parseInt(props.params.id);
    const snippet = await db.snippet.findFirst({
        where: { id },
    })

    if(!snippet){
        return notFound();
    }

    return(
        <div>
           <SnippetsEditForm snippet={snippet}/>
        </div>
    )
}