import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 to-black flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-12 max-w-md text-center border border-red-500/30">
        <h1 className="text-4xl font-bold text-white mb-4">Access Denied</h1>
        <p className="text-red-200 mb-8">
          You don't have permission to access this page. This area is restricted.
        </p>
        <Link 
          href="/profile"
          className="inline-block px-6 py-3 bg-white text-red-900 rounded-lg hover:bg-red-50 transition font-semibold"
        >
          Return to Profile
        </Link>
      </div>
    </div>
  );
}