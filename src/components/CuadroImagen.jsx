import React, { Component } from "react";

class CuadroImagen extends Component {
  constructor(props) {
    super(props);

    this.state = { imgSRC: props.img };
  }

  PasarMouse = () => {
    this.setState({ imgSRC: this.props.imgHover });
  };

  SalirMouse = () => {
    this.setState({ imgSRC: this.props.img });
  };

  render() {
    const { imgSRC } = this.state;

    return (
      <img
        src={imgSRC}
        alt="IMAGEN"
        className="imagenCuadro"
        onMouseEnter={this.PasarMouse}
        onMouseLeave={this.SalirMouse}
      />
    );
  }
}

export default CuadroImagen;
