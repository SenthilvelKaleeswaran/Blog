"user client"
import Image from 'next/image'
import LoginButton from './component/LoginButton'
import Link from 'next/link'

export default function Home() {




  return (
    <div className='flex h-full'>
      <div className='border border-orange-500 hover:bg-orange-500 rounded-r-full h-full w-20'>
      </div>
      <div className='flex flex-col items-center justify-center h-full w-full'>
        <p className='text-4xl'><span className='text-5xl'>&lt; </span><span className='text-orange-500 text-5xl font-bold'>CODE</span> BLOG / &gt; </p>
        <p className='text-2xl text-gray-400 w-3/4 mt-10 '>Step into the realm of captivating stories and insightful perspectives. Unleash your creativity and embark on a journey of words with our immersive blogging platform</p>
        <Link
          href='/newPost'
          className='border  border-orange-500 rounded-full mt-10 p-4'
        >CREATE</Link>
      </div>
    </div>

  )
}
