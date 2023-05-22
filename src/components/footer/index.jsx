import React from "react";
import "./style.css";
import logo from "../../img/eqw_1.svg";

import Logo from "../logo";

function Footer(){
  return(
    <footer className="footer">
      <div className="container">
        <Logo className="footer-logo" src={logo}/>
        <div className="footer__info">
          <p className="footer__info__address">
            г. Москва, Цветной б-р, 40<br/>
            +7 495 771 21 11<br/>
            info@skan.ru
          </p>
          <p className="footer__info__copyright">
            Copyright. 2022
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;