import { Routes, Route } from "react-router";
import NavBar from "./UI/NavBar";
import Footer from "./UI/Footer";
import WelcomePage from "./pages/Welcome";
import ContactPage from "./pages/Contact";
import ReactGA from "react-ga";
const TRACKING_ID = "UA-237779882-1";
ReactGA.initialize(TRACKING_ID);
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
