import { Link } from "react-router";

function Home({ songList }) {
  const totalSongs = songList.length;
  const songsInPlaylist = songList.filter((song) => song.isInPlaylist === true).length;
  const trendingSongs = songList.filter((song) => song.streams >= 1000000).length;

  return (
    <div>
      <div>
        <h1>Welcome to Music Playlist App</h1>
        <p>A simple app to browse songs and manage your playlist.</p>
      </div>

      <div>
        <div>
          <h3>Total Songs</h3>
          <p>{totalSongs}</p>
          <Link to="/songs">Go to Songs</Link>
        </div>

        <div>
          <h3>Songs in Playlist</h3>
          <p>{songsInPlaylist}</p>
          <Link to="/playlist">Go to Playlist</Link>
        </div>

        <div>
          <h3>Trending Songs</h3>
          <p>{trendingSongs}</p>
          <Link to="/songs">Browse Songs</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
