// src/App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import HeartRain from "./components/HeartRain";
import Cartas from "./components/Cartas";
import Galeria from "./components/Galeria";
import Player from "./components/Player"; // ya importado
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <HeartRain />
      <Navbar />
      <Inicio />
      <Cartas />
      <Galeria />
      <Player />
      <Footer />
    </div>
  );
};

export default App;
