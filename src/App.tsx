import { Routes, Route } from "react-router";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";
import WelcomePage from "./pages/Welcome";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
