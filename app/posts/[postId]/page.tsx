"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function SinglePost({ params }: { params: { postId : string } }) {

    const router = useRouter()

    const  { postId } = params

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
            setSinglePost(res.post)
        }
        getSinglePost()
    }, [postId])


    const { author } = singlePost
    return (
        <div>
            {singlePost ?
                <div className="p-10">

                    <div className="flex justify-between border border-white p-2 align-items">
                        <button onClick={() => router.push('/posts')} className="border border-orange-500 p-2 text-sm rounded-lg">&lt; BACK</button>
                        <p>Blogged by : {author}</p>
                        <p>Created at :{singlePost.createdAt.slice(0, 10)}</p>
                        <p>Last update : {singlePost.updatedAt.slice(0, 10)}</p>
                    </div>

                    <p className="text-5xl text-center">{singlePost.title}</p>
                    <p className="text-3xl text-center">{singlePost.topic}</p>
                    <p className="p-8">{singlePost.content}</p>
                </div>
                :
                "Loading ..."
            }
        </div>
    )
}
