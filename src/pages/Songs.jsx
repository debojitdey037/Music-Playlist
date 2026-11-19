import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songList, toggleSongInPlaylist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredSongs = songList.filter((song) => {
    const matchesSearch = song.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || song.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="page-container songs-page">
      <div className="page-header">
        <h2>All Songs</h2>
        <p>Search songs by title or filter by genre.</p>
      </div>

      <div className="filter-bar">
        <div className="input-group">
          <label htmlFor="search-input">Search Title:</label>
          <input
            id="search-input"
            type="text"
            placeholder="Type song title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="genre-select">Genre:</label>
          <select
            id="genre-select"
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="genre-select"
          >
            <option value="All">All</option>
            <option value="Romantic">Romantic</option>
            <option value="Motivational">Motivational</option>
            <option value="Sufi">Sufi</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>
      </div>

      <div className="song-grid">
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              toggleSongInPlaylist={toggleSongInPlaylist}
            />
          ))
        ) : (
          <p className="no-songs-message">No songs found</p>
        )}
      </div>
    </div>
  );
}

export default Songs;
