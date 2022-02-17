import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";
import ParticleBackground from "./pages/Particle";
import Preloader from "./pages/Pre";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./pages/Contact";
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
          <Route path="/header" component={Header} />
          <div>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </div>
          {/* <Contact /> */}
          <Footer />
        </div>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
