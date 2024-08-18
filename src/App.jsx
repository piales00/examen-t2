import { useState } from "react";

import "./assets/css/App.css";

import Header from "./components/Header";
import Carrusel from "./components/Carrusel";
import Coleccion from "./components/Coleccion";
import TresCuadros from "./components/TresCuadros";
import Cliente from "./components/Cliente";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Carrusel />
      <Coleccion />
      <TresCuadros />
      <Cliente />
      <Footer />
    </>
  );
}

export default App;
