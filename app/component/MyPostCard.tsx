import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface Post {
    _id: string
    title: string
    topic: string
    content: string
    author: string
    createdAt: string
    updatedAt: string
}

export default function MyPostCard({ post, handleDeletePost }: { post: Post; handleDeletePost: (postId: string) => void; }) {
    const router = useRouter()
    const [author, setAuthor] = useState('');

    useEffect(() => {
        const storedAuthor = localStorage.getItem('author') || '';
        setAuthor(storedAuthor);
    }, []);

    return (
        <div className="p-10 w-1/4 max-w-1/2 flex-nowrap">
            <div className="flex flex-col border border-orange-500 rounded-lg p-10">
                <p className="grow-0 text-center truncate items-center text-ellipsis border border-orange-500 rounded-lg p-4">{post.topic}</p>
                <div className="flex flex-col">
                    <h1 className="text-2xl text-orange-500 rounded-lg truncate p-2">{post.title}</h1>
                    <p className="truncate p-3">{post.content}</p>
                    <div className="flex justify-between mt-4 w-full">
                        <button onClick={() => router.push(`/myPost/${author}/${post._id}`)} className="border border-orange-500 p-4 text-sm rounded-full">VIEW</button>
                        <button onClick={() => handleDeletePost(post._id)} className="border border-orange-500 p-4 text-sm rounded-full">DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
