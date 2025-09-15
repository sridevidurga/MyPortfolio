import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Homepage";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import About from"./Pages/Aboutpage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
