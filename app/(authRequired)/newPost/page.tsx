"use client"

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react"

export default function NewPost() {

  const [author, setAuthor] = useState('');

  useEffect(() => {
    const storedAuthor = localStorage.getItem('author') || '';
    setAuthor(storedAuthor);
  }, [author]);


  const router =useRouter()

  const [newPost, setNewPost] = useState({

    title: '',
    topic: '',
    content: '',
    author: ''
  })

  const onChange = (event: ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewPost({
      ...newPost,
      [name]: value,
    });
  };


  const handleSubmitPost = async () => {

    newPost['author'] = author

    const req = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })

    if(req.status === 200)
      router.push(`/myPost/${author}`)
    
  }

  return (

    <div className="flex flex-col gap-10 justify-center items-center w-full h-full p-6">
      <input
        type='text'
        value={newPost.title}
        name="title"
        placeholder="Enter title"
        onChange={onChange}
        required
        className=" border  border-orange-500 bg-black  hover:ring ring-orange-500 hover:ring-orange-500 max-h-12 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />

      <input
        type='text'
        value={newPost.topic}
        name="topic"
        placeholder="Enter title"
        onChange={onChange}
        required
        className=" border  border-orange-500 bg-black  hover:ring ring-orange-500 hover:ring-orange-500 max-h-12 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />

      <textarea
        maxLength={5000}
        value={newPost.content}
        name="content"
        placeholder="Enter content"
        onChange={onChange}
        required
        className=" border h-1/2  border-orange-500 bg-black hover:ring ring-orange-500 hover:ring-orange-500 w-1/2 text-white font-bold py-2 px-4 rounded-md cursor-pointer"
      />

      <button
        onClick={handleSubmitPost}
        className="border border-white hover:border-none hover:bg-orange-500 text-orange-500 hover:text-white rounded-lg  tetx-center w-1/6  p-4 font-bold"
      >CREATE POST</button>
      
    </div>
  )
}
