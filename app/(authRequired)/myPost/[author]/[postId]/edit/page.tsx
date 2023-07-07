"use client"

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react"

export default function EditPost() {

  const params = useParams()
  const router = useRouter()

  const { postId } = params || {}
  const [editPost, setEditPost] = useState({

    title: '',
    topic: '',
    content: '',
    author: ''
  })

  useEffect(() => {
    const getPost = async () => {
      const posts = await fetch(`/api/posts/${postId}`)
      const res = await posts.json()
      console.log("iuytr",res)
      setEditPost(res.post)

    }

    if(postId)
      getPost()

  },[postId])


  const onChange = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setEditPost({
      ...editPost,
      [name]: value,
    });
  };


  const handleSubmitEditedPost = async () => {

    const req = await fetch(`/api/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(editPost)
    })

    console.log(req)

    if(req.status===200)
      router.push('../')


  }

  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full h-full p-6">
      <input
        type='text'
        value={editPost.title}
        name="title"
        placeholder="Enter title"
        onChange={onChange}
        required
        className=" border  border-orange-500 bg-black  hover:ring ring-orange-500 hover:ring-orange-500 max-h-12 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />

      <input
        type='text'
        value={editPost.topic}
        name="topic"
        placeholder="enter title"
        onChange={onChange}
        required
        className=" border  border-orange-500 bg-black  hover:ring ring-orange-500 hover:ring-orange-500 max-h-12 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />

      <textarea
        maxLength={50}
        value={editPost.content}
        name="content"
        placeholder="enter content"
        onChange={onChange}
        required
        className=" border  border-orange-500 bg-black hover:ring ring-orange-500 hover:ring-orange-500 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />


      <button
        onClick={handleSubmitEditedPost}
        className="border border-white hover:border-none hover:bg-orange-500 text-orange-500 hover:text-white rounded-lg  tetx-center w-1/6  p-4 font-bold"
      >UPDATE POST</button>

    </div>
  )
}
