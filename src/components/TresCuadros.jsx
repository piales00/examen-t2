import React, { Component } from "react";
import CuadroImagen from "./CuadroImagen";
import mueble1 from "../assets/img/mueble1.jpg";
import mueble2 from "../assets/img/mueble2.jpeg";
import mueble3 from "../assets/img/mueble3.jpg";
import mueble4 from "../assets/img/mueble4.jpeg";
import mueble5 from "../assets/img/mueble5.jpeg";
import mueble6 from "../assets/img/mueble6.jpeg";

class TresCuadros extends Component {
  render() {
    return (
      <div id="reparacion_equipos">
        <div className="reparacion">
          <h2>Mueble 1</h2>
          <p>hecho con madera</p>
          <CuadroImagen img={mueble1} imgHover={mueble2} />
        </div>

        <div className="reparacion">
          <h2>Mueble 2</h2>
          <p>hecho con madera</p>
          <CuadroImagen
            img={mueble3}
            imgHover={mueble4}
            className="imagenCuadro"
          />
        </div>

        <div className="reparacion">
          <h2>Mueble 3</h2>
          <p>hecho con madera</p>
          <CuadroImagen
            img={mueble5}
            imgHover={mueble6}
            className="imagenCuadro"
          />
        </div>
      </div>
    );
  }
}

export default TresCuadros;
