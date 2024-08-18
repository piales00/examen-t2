import React, { Component } from "react";
import Cliente1 from "../assets/img/Cliente1.jpeg";
import Cliente2 from "../assets/img/Cliente2.jpg";
import Cliente3 from "../assets/img/Cliente3.jpg";
import Fd from "../assets/img/flechaDerecha.png";
import Fi from "../assets/img/flechaizquierda.png";

class Cliente extends Component {
  constructor(props) {
    super(props);

    this.state = {
      indice: 0,
      testimonios: [
        {
          imagen: Cliente1,
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quis, doloremque saepe reprehenderit optio, sapiente corrupti voluptatem nostrum a magnam eligendi iste eum veniam quod unde vel ab. Perferendis, similique!(cliente 1)",
          nombre: "Emma",
        },

        {
          imagen: Cliente2,
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quis, doloremque saepe reprehenderit optio, sapiente corrupti voluptatem nostrum a magnam eligendi iste eum veniam quod unde vel ab. Perferendis, similique!(cliente 2)",
          nombre: "Sergio",
        },

        {
          imagen: Cliente3,
          texto:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem quis, doloremque saepe reprehenderit optio, sapiente corrupti voluptatem nostrum a magnam eligendi iste eum veniam quod unde vel ab. Perferendis, similique!(cliente 3)",
          nombre: "Terciopelo",
        },
      ],
    };
  }

  siguienteTestimonio = () => {
    this.setState((previa) => ({
      indice:
        previa.indice === previa.testimonios.length - 1 ? 0 : previa.indice + 1,
    }));
  };

  previoTestimonio = () => {
    this.setState((previa) => ({
      indice:
        previa.indice === 0 ? previa.testimonios.length - 1 : previa.indice - 1,
    }));
  };

  render() {
    const { indice, testimonios } = this.state;
    const { imagen, texto, nombre } = testimonios[indice];
    return (
      <section className="conocimiento">
        <div className="conocimiento__container container">
          <figure className="conocimiento__picture">
            <img src={imagen} className="conocimiento__img" />
          </figure>
          <div className="conocimiento__texts">
            <h3 className="subtitle1">Testimonio de</h3>
            <h2 className="subtitle">NUESTROS CLIENTES</h2>
            <p className="conocimiento__parrafo">{texto}</p>
            <a href="#" className="cta">
              {nombre}
            </a>
          </div>
        </div>

        <div className="conocimiento__controls">
          <button onClick={this.previoTestimonio} className="botonT">
            {" "}
            <img src={Fi} className="imgF" />{" "}
          </button>

          <button onClick={this.siguienteTestimonio} className="botonT">
            {" "}
            <img src={Fd} className="imgF" />{" "}
          </button>
        </div>
      </section>
    );
  }
}

export default Cliente;
