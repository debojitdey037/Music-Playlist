import { Link } from "react-router";

function Navbar({ playlistCount }) {
  return (
    <nav>
      <div>
        <Link to="/">Music Playlist</Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/songs">Songs</Link>
        {" | "}
        <Link to="/playlist">
          Playlist ({playlistCount})
        </Link>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
