"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

function NavBar() {
    const [author, setAuthor] = useState('');

    // const router = useRouter()

    const handleLogout = () => {

            localStorage.setItem('author', '')
            setAuthor('')
    }

    
    useEffect(() => {
        const storedAuthor = localStorage.getItem('author') || '';
        setAuthor(storedAuthor);
    }, []);

    return (
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <Link href="/" passHref>
                        <p className="text-orange-600 text-xl font-bold">Code Blog</p>
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/" passHref>
                        <p className="text-white hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md">Home</p>
                    </Link>
                    <Link href="/posts" passHref>
                        <p className="text-white hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md">Posts</p>
                    </Link>
                    <Link href="/newPost" passHref>
                        <p className="text-white hover:bg-orange-600 hover:text-white  px-3 py-2 rounded-md">New Post</p>
                    </Link>
                    {author && (
                        <Link href={`/myPost/${author}`} passHref>
                            <p className="text-white hover:bg-orange-600 hover:text-white  px-3 py-2 rounded-md">My Post</p>
                        </Link>
                    )}
                    {author && (
                        <Link href={`/api/auth/logout`} passHref>
                            <p onClick={handleLogout} className="text-white hover:bg-orange-600 hover:text-white  px-3 py-2 rounded-md">Log Out</p>
                        </Link>
                    )}
                    {!author && (
                        <Link href={`/api/auth/login`} passHref>
                            <p className="text-white hover:bg-orange-600 hover:text-white  px-3 py-2 rounded-md">Log In</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
