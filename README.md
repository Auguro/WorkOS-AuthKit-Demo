# WorkOS AuthKit Demo

Enterprise authentication demo showcasing SSO integration, OAuth, and API integrations built with Next.js and WorkOS.

🔗 **Live Demo:** https://work-os-auth-kit-demo.vercel.app

## Features

### Authentication
- ✅ OAuth social login (Google)
- ✅ Enterprise SSO with SAML
- ✅ Organization-based access control
- ✅ Role-based permissions
- ✅ Protected routes with middleware

### Pages
- **Login** - Authentication interface
- **Profile** - User information and organization details
- **Dashboard** - Personal dashboard with NASA APOD and Spotify integration
- **Admin Panel** - Enterprise-only area (SSO users)
- **Unauthorized** - Access denied page

### Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- WorkOS AuthKit
- NASA APOD API
- Spotify Web API

## Architecture Highlights

### Security
- Server-side authentication with `withAuth()`
- API keys protected via environment variables
- Route protection with custom `requireAuth()` middleware
- Organization-level access control

### Code Organization
```
app/
├── login/                  # Public login page
├── profile/                # Protected user profile
├── public_dashboard/       # Protected dashboard with APIs
├── enterprise_dashboard/   # SSO-only admin area
└── unauthorized/           # Access denied page

lib/
├── auth.ts                 # Authentication helpers
└── api.ts                  # External API integrations

components/
└── Header.tsx              # Reusable navigation header
```

## Getting Started

### Prerequisites
- Node.js 22+
- WorkOS account
- NASA API key
- Spotify Developer credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/workos-authkit-demo.git
cd workos-authkit-demo
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables

Create `.env.local`:
```env
WORKOS_API_KEY=your_workos_api_key
WORKOS_CLIENT_ID=your_client_id
NEXT_PUBLIC_WORKOS_REDIRECT_URI=http://localhost:3000/callback
WORKOS_COOKIE_PASSWORD=minimum-32-character-random-string

NASA_API_KEY=your_nasa_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
```

4. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Usage

### Regular User Flow
1. Click "Sign In" or "Sign Up"
2. Authenticate with Google
3. Access Profile and Dashboard

### Enterprise SSO Flow
1. Click "Employee Login"
2. Authenticate via test SSO provider
3. Access Profile, Dashboard, and Admin Panel

### If you want to have fun
1. Try accessing pages without doing login
2. Try accessing enterprise pages with non enterprise login
3. Break everything

### Enterprise Login
- email: john@doe.com
- name: john
- last name: doe
- group: admin

## License

MIT
