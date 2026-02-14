import { requireAuth } from '@/lib/auth';
import { signOut } from '@workos-inc/authkit-nextjs';
import Link from 'next/link';
import Header from '@/components/header';


export default async function ProfilePage() {
  const { user, organizationId, role } = await requireAuth();

  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      {/* Header */}
      <Header showDashboard showAdmin={!!organizationId} showSignOut variant="light"/>

      {/* Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl text-black font-bold mb-6">Your Profile</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard label="Email" value={user.email} />
              <InfoCard label="User ID" value={user.id} />
              {user.firstName && <InfoCard label="First Name" value={user.firstName!} />}
              {user.lastName && <InfoCard label="Last Name" value={user.lastName!} />}
              <InfoCard label="Email Verified" value={user.emailVerified ? 'Yes' : 'No'} />
              <InfoCard label="Created At" value={new Date(user.createdAt).toLocaleDateString()} />
              
              {organizationId && role && (
                <>
                  <InfoCard label="Organization ID" value={organizationId} badge="SSO" />
                  <InfoCard label="Role" value={role} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoCard({ label, value, badge }: { label: string; value: string; badge?: string }) {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-1">
        <p className="text-sm text-gray-600 font-medium">{label}</p>
        {badge && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-900 font-mono text-sm break-all">{value}</p>
    </div>
  );
}