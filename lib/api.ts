// NASA APOD API
export async function getNasaAPOD() {
  const apiKey = process.env.NASA_API_KEY;
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
  );
  
  if (!response.ok) {
    throw new Error('Failed to fetch NASA APOD');
  }
  
  return response.json();
}

// Spotify - Get Access Token (necessário antes de qualquer chamada)
async function getSpotifyToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
    },
    body: 'grant_type=client_credentials'
  });
  
  const data = await response.json();
  return data.access_token;
}

// Spotify - Search Track
export async function searchSpotifyTrack(query: string) {
  const token = await getSpotifyToken();
  
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`,
    {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );
  
  if (!response.ok) {
    throw new Error('Failed to search Spotify');
  }
  
  const data = await response.json();
  return data.tracks.items[0]; // Retorna a primeira música encontrada
}