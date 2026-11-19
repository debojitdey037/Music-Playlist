import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import songs from "./data/songs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Songs from "./pages/Songs";
import SongDetails from "./pages/SongDetails";
import Playlist from "./pages/Playlist";

function App() {
  const [songList, setSongList] = useState(songs);

  function toggleSongInPlaylist(id) {
    const updatedSongs = songList.map((song) => {
      if (song.id === id) {
        return { ...song, isInPlaylist: !song.isInPlaylist };
      }
      return song;
    });

    setSongList(updatedSongs);
  }

  const playlistCount = songList.filter((song) => song.isInPlaylist === true).length;

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar playlistCount={playlistCount} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home songList={songList} />} />
            <Route
              path="/songs"
              element={
                <Songs
                  songList={songList}
                  toggleSongInPlaylist={toggleSongInPlaylist}
                />
              }
            />
            <Route
              path="/songs/:id"
              element={
                <SongDetails
                  songList={songList}
                  toggleSongInPlaylist={toggleSongInPlaylist}
                />
              }
            />
            <Route
              path="/playlist"
              element={
                <Playlist
                  songList={songList}
                  toggleSongInPlaylist={toggleSongInPlaylist}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
