import "./App.css";
import { Routes, Route } from "react-router-dom";
import { AnaSayfa } from "./routes/AnaSayfa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
      </Routes>
    </>
  );
}

export default App;
