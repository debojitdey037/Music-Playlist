import { Link } from "react-router";

function Navbar({ playlistCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Music Playlist</Link>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/songs" className="nav-link">Songs</Link>
        <Link to="/playlist" className="nav-link playlist-link">
          Playlist <span className="playlist-badge">({playlistCount})</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
