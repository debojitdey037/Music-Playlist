import { useParams, Link } from "react-router";
import formatDuration from "../utils/formatDuration";

function SongDetails({ songList, toggleSongInPlaylist }) {
  const params = useParams();
  const songId = Number(params.id);

  const song = songList.find((item) => {
    return item.id === songId;
  });

  if (!song) {
    return (
      <div>
        <h2>Song not found</h2>
        <Link to="/songs">Back to Songs</Link>
      </div>
    );
  }

  return (
    <div>
      <div>
        <Link to="/songs">Back to Songs</Link>
      </div>

      <div>
        <h2>{song.title}</h2>
        {song.streams >= 1000000 && <p><b>[Trending]</b></p>}

        <p><b>Artist:</b> {song.artist}</p>
        <p><b>Album:</b> {song.album}</p>
        <p><b>Genre:</b> {song.genre}</p>
        <p><b>Year:</b> {song.year}</p>
        <p><b>Duration:</b> {formatDuration(song.duration)}</p>
        <p><b>Streams:</b> {song.streams}</p>
        <p><b>In Playlist:</b> {song.isInPlaylist ? "Yes" : "No"}</p>

        <button onClick={() => toggleSongInPlaylist(song.id)}>
          {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        </button>
      </div>
    </div>
  );
}

export default SongDetails;
