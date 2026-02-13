import { getSignInUrl, getSignUpUrl, withAuth, signOut } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
  const { user } = await withAuth();
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-3xl font-bold mb-6">WorkOS AuthKit Demo</h1>
          <p className="text-gray-600 mb-8">Demonstração de autenticação enterprise</p>
          
          <div className="space-y-4">
            <a 
              href={signInUrl} 
              className="block w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Sign In
            </a>
            <a 
              href={signUpUrl}
              className="block w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo!</h1>
        <p className="text-gray-700 mb-2">Email: <strong>{user.email}</strong></p>
        <p className="text-gray-700 mb-6">ID: <code className="bg-gray-100 px-2 py-1 rounded">{user.id}</code></p>
        
        <form action={async () => {
          'use server';
          await signOut();
        }}>
          <button 
            type="submit"
            className="w-full bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}