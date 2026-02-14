import Link from 'next/link';
import { signOut } from '@workos-inc/authkit-nextjs';

type HeaderProps = {
  showDashboard?: boolean;
  showAdmin?: boolean;
  showSignOut?: boolean;
  showBack?: boolean;
  backHref?: string;
  variant?: 'dark' | 'light';
};

export default function Header({ 
  showDashboard, 
  showAdmin, 
  showSignOut,
  showBack,
  backHref = '/profile',
  variant = 'dark'
}: HeaderProps) {
  const headerBg = variant === 'light' 
    ? 'bg-[#E8DCC4]/80 backdrop-blur-sm border-b border-[#D4C5A9]' 
    : 'bg-black/50 backdrop-blur-sm border-b border-white/10';


  return (
    <header className={headerBg}>
      <div className="w-full px-8 py-4 flex items-center justify-between">
        <div className="flex gap-3">
          {showBack && (
            <Link 
              href={backHref}
              className="px-4 py-2 bg-black hover:bg-black text-white rounded-lg transition border border-white/20 text-lg"
            >
              Back
            </Link>
          )}
          
          {showDashboard && (
            <Link 
              href="/public_dashboard"
              className="px-4 py-2 bg-[#8B7355] hover:bg-[#6B5D52] text-white rounded-lg transition border border-white/20 text-lg"
            >
              Public Page
            </Link>
          )}
          
          {showAdmin && (
            <Link 
              href="/enterprise_dashboard"
              className="px-4 py-2 bg-[#9B8B7E] hover:bg-[#6B5D52] text-white rounded-lg transition border border-white/20 text-lg"
            >
              Enterprise Page
            </Link>
          )}
        </div>

        {showSignOut && (
          <form action={async () => {
            'use server';
            await signOut({ returnTo: '/' });
          }}>
            <button 
              type="submit"
              className="px-4 py-2 bg-[#C65D4F] hover:bg-[#A84A3D] text-white rounded-lg transition border border-white/20 text-lg"
            >
              Sign Out
            </button>
          </form>
        )}
      </div>
    </header>
  );
}