import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AnaSayfa } from "./routes/AnaSayfa";
import { Projects } from "./routes/Projects";
import { Reports } from "./routes/Reports";
import { VideoGallery } from "./routes/VideoGallery";
import { PhotoGallery } from "./routes/PhotoGallery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnaSayfa />} />
      <Route path="/projeler" element={<Projects />} />
      <Route path="/raporlar" element={<Reports />} />
      <Route path="/video-galeri" element={<VideoGallery />} />
      <Route path="/foto-galeri" element={<PhotoGallery />} />
    </Routes>
  );
}

export default App;
