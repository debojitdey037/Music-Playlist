import { Link } from "react-router";
import formatDuration from "../utils/formatDuration";

function SongCard({ song, toggleSongInPlaylist }) {
  const isTrending = song.streams >= 1000000;

  return (
    <div className="song-card">
      <div className="card-header">
        <h3 className="song-title">{song.title}</h3>
        {isTrending && <span className="trending-badge">Trending</span>}
      </div>

      <p className="song-artist"><strong>Artist:</strong> {song.artist}</p>
      <p className="song-genre"><strong>Genre:</strong> <span className="genre-tag">{song.genre}</span></p>
      <p className="song-duration"><strong>Duration:</strong> {formatDuration(song.duration)}</p>

      <div className="card-actions">
        <button
          className={song.isInPlaylist ? "toggle-btn btn-remove" : "toggle-btn btn-add"}
          onClick={() => toggleSongInPlaylist(song.id)}
        >
          {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
        </button>

        <Link to={"/songs/" + song.id} className="details-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default SongCard;
