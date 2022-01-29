import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import ParticleBackground from "./pages/Particle";
import Preloader from "./pages/Pre";
import About from "./components/About";
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
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ParticleBackground />
        <NavBar />
     <About />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
