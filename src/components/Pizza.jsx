import React, { Component } from "react";

class Pizza extends Component {
  render() {
    let receta = {
      nombre: "Pizza",
      ingredientes: ["tomate", "queso"],
    };

    return (
      <div className="mi-componente">
        {/* Muestra el nombre de la receta */}
        <h1>{receta.nombre}</h1>
        <ol>
          {receta.ingredientes.map((ingrediente, i) => {
            console.log(ingrediente);

            // Usa 'i' como key en lugar de 'o'
            return <li key={i}>{ingrediente}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default Pizza;
