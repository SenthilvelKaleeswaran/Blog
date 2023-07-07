"use client"

import { useUser } from '@auth0/nextjs-auth0/client'
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Loading from './loading';

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    const { user, error, isLoading } = useUser()

    const [author,setAuthor] = useState(false) 
    const router = useRouter()

    useEffect(() => {
        if (!isLoading && user) 
            localStorage.setItem('author', user?.name ?? '');

        if (!isLoading && !user) 
            router.push('/api/auth/login')

    }, [isLoading, user, router]);

    console.log(error)

    if (error) {
       return <div>Error: {error.message}</div>
   }

    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}
