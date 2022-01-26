import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";
import ParticleBackground from "./pages/particle";

function App() {
  return (
    <ChakraProvider>
      <ParticleBackground />
      <NavBar />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
