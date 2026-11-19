import SongCard from "../components/SongCard";
import formatDuration from "../utils/formatDuration";

function Playlist({ songList, toggleSongInPlaylist }) {
  const playlistSongs = songList.filter((song) => song.isInPlaylist === true);

  let totalSeconds = 0;
  for (let i = 0; i < playlistSongs.length; i++) {
    totalSeconds = totalSeconds + playlistSongs[i].duration;
  }

  return (
    <div className="page-container playlist-page">
      <div className="page-header">
        <h2>My Playlist</h2>
        {playlistSongs.length > 0 && (
          <p className="total-duration">
            <strong>Total Duration:</strong> {formatDuration(totalSeconds)}
          </p>
        )}
      </div>

      {playlistSongs.length === 0 ? (
        <div className="empty-playlist">
          <p className="empty-message">Your playlist is empty</p>
        </div>
      ) : (
        <div className="song-grid">
          {playlistSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              toggleSongInPlaylist={toggleSongInPlaylist}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlist;
