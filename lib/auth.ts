//--This one is responsable to not let people enter where they are not allowed
//--You might think: Why should i use this instead of middleware.ts? Well, middleware may not let anyone enter anywhere while
//this one will let me decide who enters where (useful for admin places where normal login cannot enter)

import { withAuth } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export async function requireAuth(options?: { requireSSO?: boolean }) {
  const authData = await withAuth();
  const { user, organizationId } = authData;

  if (!user) {
    redirect('/');
  }

  if (options?.requireSSO && !organizationId) {
    redirect('/unauthorized');
  }

  return authData;
}