import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import ParticleBackground from "./pages/Particle";
import Preloader from "./pages/Pre";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import "./App.css";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <ParticleBackground />
          <NavBar />
          <Routes>
            <Route path="header" element={<Header />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
