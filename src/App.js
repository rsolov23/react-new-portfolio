import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import ParticleBackground from "./pages/particle";

function App() {
  return (
    <ChakraProvider>
      <ParticleBackground />
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
