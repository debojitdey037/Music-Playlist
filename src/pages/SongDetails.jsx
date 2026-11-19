import { useParams, Link } from "react-router";
import formatDuration from "../utils/formatDuration";

function SongDetails({ songList, toggleSongInPlaylist }) {
  const { id } = useParams();
  const songId = Number(id);
  const song = songList.find((item) => item.id === songId);

  if (!song) {
    return (
      <div className="page-container song-details-not-found">
        <h2>Song not found</h2>
        <p>The song you are looking for does not exist.</p>
        <Link to="/songs" className="back-link">Back to Songs</Link>
      </div>
    );
  }

  const isTrending = song.streams >= 1000000;

  return (
    <div className="page-container song-details-page">
      <div className="back-nav">
        <Link to="/songs" className="back-link">Back to Songs</Link>
      </div>

      <div className="details-card">
        <div className="details-header">
          <h2>{song.title}</h2>
          {isTrending && <span className="trending-badge">Trending</span>}
        </div>

        <div className="details-info-grid">
          <div className="detail-item">
            <strong>Artist:</strong> <span>{song.artist}</span>
          </div>
          <div className="detail-item">
            <strong>Album:</strong> <span>{song.album}</span>
          </div>
          <div className="detail-item">
            <strong>Genre:</strong> <span className="genre-tag">{song.genre}</span>
          </div>
          <div className="detail-item">
            <strong>Release Year:</strong> <span>{song.year}</span>
          </div>
          <div className="detail-item">
            <strong>Duration:</strong> <span>{formatDuration(song.duration)}</span>
          </div>
          <div className="detail-item">
            <strong>Streams:</strong> <span>{song.streams.toLocaleString()}</span>
          </div>
          <div className="detail-item">
            <strong>In Playlist:</strong> <span>{song.isInPlaylist ? "Yes" : "No"}</span>
          </div>
        </div>

        <div className="details-actions">
          <button
            className={song.isInPlaylist ? "toggle-btn btn-remove" : "toggle-btn btn-add"}
            onClick={() => toggleSongInPlaylist(song.id)}
          >
            {song.isInPlaylist ? "Remove from Playlist" : "Add to Playlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SongDetails;
