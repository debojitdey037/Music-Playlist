import { useState } from "react";
import SongCard from "../components/SongCard";

function Songs({ songList, toggleSongInPlaylist }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");

  const filteredSongs = songList.filter((song) => {
    const titleMatch = song.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    let genreMatch = false;

    if (selectedGenre === "All") {
      genreMatch = true;
    } else if (song.genre === selectedGenre) {
      genreMatch = true;
    }

    return titleMatch && genreMatch;
  });

  return (
    <div>
      <h2>All Songs</h2>

      <div>
        <label>Search by Title: </label>
        <input
          type="text"
          placeholder="search title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {" "}

        <label>Genre: </label>
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Romantic">Romantic</option>
          <option value="Motivational">Motivational</option>
          <option value="Sufi">Sufi</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>

      <br />

      <div>
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => {
            return (
              <SongCard
                key={song.id}
                song={song}
                toggleSongInPlaylist={toggleSongInPlaylist}
              />
            );
          })
        ) : (
          <p>No songs found</p>
        )}
      </div>
    </div>
  );
}

export default Songs;
