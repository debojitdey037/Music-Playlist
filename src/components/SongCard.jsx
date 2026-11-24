import { Link } from "react-router";
import formatDuration from "../utils/formatDuration";

function SongCard({ song, toggleSongInPlaylist }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <div>
        <h3>{song.title}</h3>
        {song.streams >= 1000000 && <span>[Trending]</span>}
      </div>

      <p><b>Artist:</b> {song.artist}</p>
      <p><b>Genre:</b> {song.genre}</p>
      <p><b>Duration:</b> {formatDuration(song.duration)}</p>

      <div>
        <button onClick={() => toggleSongInPlaylist(song.id)}>
          {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        </button>
        {" "}
        <Link to={"/songs/" + song.id}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
