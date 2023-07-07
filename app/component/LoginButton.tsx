'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';

export default function LoginButton() {
    const router = useRouter();
    const { user, error, isLoading } = useUser();
    console.log(user)

    const handleLogin = () => {
        router.push('/api/auth/login');
    };

    const handleLogout = () => {
        router.push('/api/auth/logout');
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <div>User: {user.name}</div>
                    <button type="button" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
                <button type="button" onClick={handleLogin}>
                    Login
                </button>
            )}
        </div>
    )
}
