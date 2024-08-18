import React, { Component } from "react";
import facebook from "../assets/img/facebook.png";
import instagram from "../assets/img/social.png";
import youtube from "../assets/img/youtube.png";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="div__footer__texto">
          <h2 className="nombre-empresa1">MueblesFAST</h2>
        </div>

        <div className="iconos">
          <a href="https://es-la.facebook.com/">
            <img src={facebook} alt="facebook" className="iconos1" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="instagram" className="iconos1" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={youtube} alt="youtube" className="iconos1" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
