import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ParticleBackground from "./pages/Background";
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
    <Router>
      <ChakraProvider>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Preloader load={load} />
          <ParticleBackground />
          <NavBar />
          <Route exact path="/header" component={Header} />
          <div>
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
