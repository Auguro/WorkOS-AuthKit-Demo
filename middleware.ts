//TODO: change this name to proxy.ts (middleware may be outdated)
//REMEMBER: This one runs on the URL before the page renders

import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
  middlewareAuth: {
    enabled: true,
    unauthenticatedPaths: ['/', '/callback', '/login'],
  },
});

//Watch out. when i removed this line it started to process the css files (this is my theory) so i just add all
export const config = {
  matcher: ['/', '/public_dashboard', '/enterprise_dashboard', '/callback', '/login', '/profile', '/unauthorized'] 
};