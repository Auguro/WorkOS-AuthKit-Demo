//this one is a hub page. if you are logged in you go to profile if not you go to login.

import { withAuth } from '@workos-inc/authkit-nextjs';
import { redirect } from 'next/navigation';

export default async function Home() {
  //Why not use auth.ts were you may ask (i did it too). The way auth.ts works it would result in a infinite loop not worth trying to solve 
  //a problem that do not exist.
  const { user } = await withAuth();

  if (user) {
    redirect('/profile');
  } else {
    redirect('/login');
  }
}