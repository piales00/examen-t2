import React, { Component } from "react";

import icono from "../assets/img/icono.jpg";

class Header extends Component {
  EntrarMouse = (event) => {
    event.target.style.color = "orange";
  };

  SacarMouse = (event) => {
    event.target.style.color = "black";
  };
  render() {
    return (
      <header id="header">
        <div className="logo">
          <img src={icono} alt="app-logo" />
          <h2 className="nombre-empresa">MueblesFAST</h2>
        </div>

        <nav>
          <a
            href="#"
            className="nav-link"
            onMouseEnter={this.EntrarMouse}
            onMouseLeave={this.SacarMouse}
          >
            Quiénes somos
          </a>
          <a
            href="#"
            className="nav-link"
            onMouseEnter={this.EntrarMouse}
            onMouseLeave={this.SacarMouse}
          >
            Tienda
          </a>
          <a
            href="#"
            className="nav-link"
            onMouseEnter={this.EntrarMouse}
            onMouseLeave={this.SacarMouse}
          >
            Servicios
          </a>
          <a
            href="#"
            className="nav-link"
            onMouseEnter={this.EntrarMouse}
            onMouseLeave={this.SacarMouse}
          >
            Ofertas
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
