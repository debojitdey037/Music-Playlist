import { Link } from "react-router";

function Home({ songList }) {
  const totalSongs = songList.length;
  const songsInPlaylist = songList.filter((song) => song.isInPlaylist === true).length;
  const trendingSongs = songList.filter((song) => song.streams >= 1000000).length;

  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <h1>Welcome to Music Playlist App</h1>
        <p className="subtitle">
          Explore songs, filter by genres, manage your personal playlist, and view details.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h2 className="stat-number">{totalSongs}</h2>
          <p className="stat-label">Total Songs</p>
          <Link to="/songs" className="stat-link">Browse All Songs</Link>
        </div>

        <div className="stat-card">
          <h2 className="stat-number">{songsInPlaylist}</h2>
          <p className="stat-label">Songs in Playlist</p>
          <Link to="/playlist" className="stat-link">View Playlist</Link>
        </div>

        <div className="stat-card">
          <h2 className="stat-number">{trendingSongs}</h2>
          <p className="stat-label">Trending Songs</p>
          <Link to="/songs" className="stat-link">Explore Trending</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
