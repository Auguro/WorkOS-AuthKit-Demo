import { getSignInUrl, getSignUpUrl } from '@workos-inc/authkit-nextjs';

export default async function LoginPage() {
  const signInUrl = await getSignInUrl();
  const signUpUrl = await getSignUpUrl();
  const ssoSignInUrl = await getSignInUrl({ 
    organizationId: 'org_01KHCA8XD1KX3XE78CNXTBJSAV' 
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome</h1>
            <p className="text-gray-600">Sign in to access your account</p>
          </div>

          <div className="space-y-4">
            <a 
              href={signInUrl}
              className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Sign In
            </a>
            
            <a 
              href={signUpUrl}
              className="block w-full bg-green-600 text-white text-center px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Sign Up
            </a>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <a 
              href={ssoSignInUrl}
              className="block w-full bg-purple-600 text-white text-center px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              Employee Login (SSO)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}