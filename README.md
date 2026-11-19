# P6 — Music Playlist
**Course:** WEB 301 Advance Frontend Engineering (Mid-Sem Phase 2)

- **Student Name:** Debojit Dey
- **Roll Number:** 2502201530026
- **Assigned Problem Statement:** P6 — Music Playlist
- **GitHub Repository:** debojitdey-midsem-phase2

---

## Project Overview
A clean, beginner-friendly React application for managing a music playlist. Built with Vite, React (JavaScript), React Router, and plain CSS without external component libraries, Redux, or Context API.

### Key Features
- **Client-Side Routing:** Built with `react-router` using `BrowserRouter`, `Routes`, `Route`, `Link`, and `useParams`.
  - `/` → Home page with summary statistics (Total, Playlist, Trending).
  - `/songs` → Browse songs with search filter and genre dropdown.
  - `/songs/:id` → Detailed view for a specific song with parameters parsed via `useParams()`.
  - `/playlist` → View songs saved in the playlist and total playlist duration.
- **State Management:** Single source of truth in `App.jsx` using `useState`. State updates through `toggleSongInPlaylist(id)` via `map()` and stays intact across page navigation with `Link`.
- **Live Navbar Count:** Dynamic badge in the navigation bar displaying the exact number of songs currently in the playlist.
- **Duration Helper:** Formats durations from seconds into `m:ss` (e.g., 268s → "4:28") with leading zero padding for seconds below 10.
- **Trending Badge:** Conditional display of `Trending 🔥` for tracks with 1,000,000+ streams.
- **Empty States:** Clear messaging ("No songs found" and "Your playlist is empty") when items don't match or the playlist has no tracks.

---

## Getting Started

### 1. Installation
Clone the repository and install all dependencies:
```bash
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser at the local URL (usually `http://localhost:5173/`).

### 3. Production Build
To create an optimized production build:
```bash
npm run build
```
