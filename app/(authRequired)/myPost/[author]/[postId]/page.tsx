"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function GetMySinglePost({ params }: { params: { postId: string } }) {

    const { postId } = params
    const router = useRouter()

    const [singlePost, setSinglePost] = useState({
        title: '',
        topic: '',
        content: '',
        author: '',
        createdAt: '',
        updatedAt: ''
    })

    useEffect(() => {
        const getSinglePost = async () => {
            const posts = await fetch(`/api/posts/${postId}`)
            const res = await posts.json()
            console.log(res.post)
            setSinglePost(res.post)
        }
        getSinglePost()
    }, [postId])

    const { title, topic, createdAt, updatedAt, content } = singlePost

    return (
        
        <div>

            {singlePost ?
                <div className="p-10">

                    <div className="flex justify-between">
                        <p>Created at :{createdAt.slice(0, 10)}</p>
                        <p>Last update : {updatedAt.slice(0, 10)}</p>
                    </div>


                    <p className="text-5xl text-center">{title}</p>
                    <button onClick={() => router.push(`${postId}/edit`)} className="border border-orange-500 p-3 rounded-full">EDIT</button>

                    <p className="text-3xl text-center">{topic}</p>
                    <p className="p-4">{content}</p>
                </div>
                : 
                "Loading ..."
            }

        </div>
    )
}
