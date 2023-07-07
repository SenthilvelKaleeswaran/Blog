"use client"

import { useEffect, useState } from "react";
import PostCard from "../component/PostCard";
import Link from "next/link";

export default function Posts() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getAllPost = async () => {
      const posts = await fetch('/api/posts')
      const res = await posts.json()
      setPosts(res.posts)
    }
    getAllPost()

  }, [])

  return (
    <div>

      {posts && posts.length > 0 ? (
        posts.map((data) => (
          <Link href={`/posts/${data['_id']}`} key={data['_id']}>
            <PostCard post={data} />
          </Link>
        ))
      ) : (
        <p>No posts found.</p>
      )}

    </div>
  )
}
