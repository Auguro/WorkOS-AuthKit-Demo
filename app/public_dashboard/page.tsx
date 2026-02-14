import { requireAuth } from '@/lib/auth';
import { getNasaAPOD, searchSpotifyTrack } from '@/lib/api';
import Header from '@/components/header';

export default async function DashboardPage() {
  {/*Just checking if you can be here*/}
  const { user } = await requireAuth();
  
  const nasaData = await getNasaAPOD();
  const spotifyTrack = await searchSpotifyTrack('Black Hole Sun');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-black">
      {/* Header */}
      <Header showBack showSignOut />

      {/* Content */}
      <div className="p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Spotify */}
          <div className="bg-black rounded-lg shadow-2xl p-8 border border-green-500/30">
            <h2 className="text-2xl font-bold mb-6 text-[#1DB954]">Spotify Track</h2>
            
            {spotifyTrack && (
              <div className="space-y-4">
                <img 
                  src={spotifyTrack.album.images[0]?.url} 
                  alt={spotifyTrack.name}
                  className="w-full max-w-[350px] mx-auto rounded-lg shadow-md"
                />
                <div className="text-white">
                  <h3 className="text-xl font-semibold">{spotifyTrack.name}</h3>
                  <p className="text-gray-300">{spotifyTrack.artists.map((a: any) => a.name).join(', ')}</p>
                  <p className="text-sm text-gray-400 mt-2">Album: {spotifyTrack.album.name}</p>
                  <p className="text-sm text-gray-400">Release: {spotifyTrack.album.release_date}</p>
                  <p className="text-sm text-gray-400">Duration: {Math.floor(spotifyTrack.duration_ms / 60000)}:{String(Math.floor((spotifyTrack.duration_ms % 60000) / 1000)).padStart(2, '0')}</p>
                
                  <a 
                    href={spotifyTrack.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-4 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full transition font-semibold"
                  >
                    Open in Spotify
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* NASA */}
          <div className="bg-[#0B3D91] rounded-lg shadow-2xl p-8 border border-blue-400/30">
            <h2 className="text-2xl font-bold mb-6 text-white">NASA - Astronomy Picture of the Day</h2>
            
            <div className="space-y-4">
              <img 
                src={nasaData.url} 
                alt={nasaData.title}
                className="w-full max-w-[350px] mx-auto rounded-lg shadow-md"
              />
              <div className="text-white">
                <h3 className="text-xl font-semibold">{nasaData.title}</h3>
                <p className="text-sm text-blue-200 mb-2">{nasaData.date}</p>
                <p className="text-sm text-blue-100 leading-relaxed line-clamp-6">
                  {nasaData.explanation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}