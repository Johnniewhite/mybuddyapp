// components/ProtectedRoute.tsx
"use client"
import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated, e.g., based on your Hanko authentication session.
    const isAuthenticated = true; // Replace with actual authentication check.

    if (!isAuthenticated) {
      // If not authenticated, redirect to the login page or any other page.
      router.push('/login');
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
