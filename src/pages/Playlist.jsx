import SongCard from "../components/SongCard";
import formatDuration from "../utils/formatDuration";

function Playlist({ songList, toggleSongInPlaylist }) {
  const playlistSongs = songList.filter((song) => song.isInPlaylist === true);

  let totalSeconds = 0;
  for (let i = 0; i < playlistSongs.length; i++) {
    totalSeconds = totalSeconds + playlistSongs[i].duration;
  }

  return (
    <div>
      <h2>My Playlist</h2>

      {playlistSongs.length > 0 && (
        <p>
          <b>Total Duration:</b> {formatDuration(totalSeconds)}
        </p>
      )}

      {playlistSongs.length === 0 ? (
        <p>Your playlist is empty</p>
      ) : (
        <div>
          {playlistSongs.map((song) => {
            return (
              <SongCard
                key={song.id}
                song={song}
                toggleSongInPlaylist={toggleSongInPlaylist}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Playlist;
