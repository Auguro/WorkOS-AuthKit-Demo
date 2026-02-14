import { requireAuth } from '@/lib/auth';
import Header from '@/components/header';

export default async function AdminPage() {
  const { user, organizationId, role } = await requireAuth({ requireSSO: true });

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Header */}
      <Header showBack showSignOut variant="light"/>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-3xl text-black font-bold mb-4">Admin Panel</h1>
            <p className="text-gray-600 mb-6">Enterprise SSO users only</p>
          
            <div className="bg-purple-50 border border-purple-200 p-4 rounded mb-4">
              <p className="text-purple-900 font-semibold">Organization Access</p>
              <p className="text-sm text-purple-700 mt-2">Organization ID: {organizationId}</p>
              <p className="text-sm text-purple-700">Your role: {role}</p>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded">
              <p className="text-green-900 font-semibold">Admin Features</p>
              <p className="text-sm text-green-700 mt-2">Only SSO users can access this page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}