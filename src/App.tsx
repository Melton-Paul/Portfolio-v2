import React from "react";
import { Routes, Route } from "react-router";
import Default from "./components/pages/Default/Default";
import Work from "./components/pages/Work/Work";
import Contact from "./components/pages/Contact/Contact";
import About from "./components/pages/About/About";
import NavBar from "./components/UI/NavBar";
import Footer from "./components/UI/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Default />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
