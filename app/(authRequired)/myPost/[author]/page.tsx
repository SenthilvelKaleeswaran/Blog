"use client"
import { useEffect, useState } from "react"
import MyPostCard from "@/app/component/MyPostCard"

interface Post {
  _id: string
  title: string
  topic: string
  author: string
  content: string
  createdAt: string
  updatedAt: string
}


export default function MyPost({ params }: { params: { author : any } }) {
  const [authorPost, setAuthorPost] = useState<Post[]>([])
  const [message,setMessage]  = useState(true)

  const {author} = params

  useEffect(() => {
    const getUserPost = async () => {
      try {
        if (author) {
          const req = await fetch(`/api/myPost/${author}`)
          const data = await req.json()
          setAuthorPost(data.posts)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getUserPost()
  }, [message,author])

  const handleDeletePost = async (postId : string)=> {

    const req = await fetch(`/api/posts/${postId}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    })

    const data = await req.json()

    if(data.message)
      setMessage(!message)

  }

  return (
    <div className="flex flex-row h-full">
      {authorPost && authorPost.length > 0 ? (
        authorPost.map((data) => (
            <MyPostCard post={data} key={data._id} handleDeletePost={handleDeletePost} />
        ))
      ) : (
        <p>No Post found.</p>
      )}
    </div>
  )
}
