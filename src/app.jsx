import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Home, About, Projects, Contact } from "./pages";
import MusicPlayer from "./components/MusicPlayer";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />

{/* Music player stays mounted across all pages */}
        <MusicPlayer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </main>
  );
};

export default App;