interface Post {
  title: string
  topic: string
  content: string
  author: string
  createdAt: string
}


export default function PostCard({ post }: { post: Post }) {
  
  const {topic, title,content,author,createdAt} = post

  return (
    <>
      <div className="p-10">

        <div className="flex border border-orange-500 rounded-lg  p-10  ">
          
          <div className="max-w-1/2 h-3/4">
          <p className="h-1/2 grow-0 w-36 text-center truncate text-ellipsis border border-orange-500 rounded-lg p-10">{topic}</p>
          </div>

          <div className="flex flex-col grow-1 md: w-3/4  ml-20 ">
            <h1 className="text-2xl text-orange-500 rounded-lg truncate">{title}</h1>
            <p className="truncate py-3">{content}</p>

            <div className="flex justify-between mt-4 w-full">
              <p className=" text-sm text-orange-100 ">{author}</p>
              <p className=" text-sm text-orange-100 ">{createdAt.slice(0,10)}</p>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}


