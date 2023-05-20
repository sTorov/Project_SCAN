import React from "react";
import "./style.css";
import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";

function Header(){
  return(
    <header className="header">
      <div className="container">
        <img className="header__logo" src={logo} alt="scan_logo"/>
      </div>
    </header>
  )
}

export default Header;