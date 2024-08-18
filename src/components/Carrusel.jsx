import React, { Component } from "react";
import mueble1 from "../assets/img/banner1.jpg";
import mueble2 from "../assets/img/banner2.jpg";
import mueble3 from "../assets/img/banner3.jpg";

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.images = [mueble1, mueble2, mueble3];
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextImage = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.images.length,
    }));
  };

  prevImage = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.images.length) % this.images.length,
    }));
  };
  render() {
    return (
      <div id="slider" className="slider-big">
        <img
          src={this.images[this.state.currentIndex]}
          alt="Mueble"
          id="slider-image"
        />
      </div>
    );
  }
}

export default Carrusel;
