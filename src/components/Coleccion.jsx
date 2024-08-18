import React, { Component } from "react";

class Coleccion extends Component {
  render() {
    return (
      <section className="coleccion">
        <div className="coleccion__container container">
          <div className="coleccion__texts">
            <h1 className="subtitulo1">Colección</h1>
            <h1 className="subtitulo">INVIERNO</h1>
          </div>
          <div className="coleccion__picture">
            <p className="coleccion__picture__parrafo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum non
              esse autem minus eligendi aliquam modi eius distinctio a similique
              quidem, mollitia saepe officiis. Sit ratione labore dolore earum
              hic.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Coleccion;
