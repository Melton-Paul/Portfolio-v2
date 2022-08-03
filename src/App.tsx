import { Routes, Route } from "react-router";
import Projects from "./components/pages/Projects/Projects";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import NavBar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
