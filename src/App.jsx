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
        return {
          id: song.id,
          title: song.title,
          artist: song.artist,
          album: song.album,
          genre: song.genre,
          year: song.year,
          duration: song.duration,
          streams: song.streams,
          isInPlaylist: !song.isInPlaylist
        };
      } else {
        return song;
      }
    });

    setSongList(updatedSongs);
  }

  const playlistSongs = songList.filter((song) => song.isInPlaylist === true);
  const playlistCount = playlistSongs.length;

  return (
    <BrowserRouter>
      <div>
        <Navbar playlistCount={playlistCount} />

        <div>
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
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
