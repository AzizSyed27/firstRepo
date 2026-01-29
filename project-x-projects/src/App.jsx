import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}
