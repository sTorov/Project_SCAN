import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar( {onClick} ){
  return(
    <navbar className="navbar">
      <ul className="navbar-list">
        <li><Link className="navbar-link" to="/" onClick={onClick}>Главная</Link></li>
        <li><Link className="navbar-link" to="#" onClick={onClick}>Тарифы</Link></li>
        <li><Link className="navbar-link" to="#" onClick={onClick}>FAQ</Link></li>
      </ul>
    </navbar>      
  );
}

export default Navbar;