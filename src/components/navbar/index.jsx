import React from "react";
import {NavLink} from "react-router-dom";
import "./style.css";

function Navbar(){
  return(
    <navbar className="navbar">
      <ul className="navbar-list">
        <li><NavLink className="navbar-link" to="/">Главная</NavLink></li>
        <li><NavLink className="navbar-link" to="/rates">Тарифы</NavLink></li>
        <li><NavLink className="navbar-link" to="/faq">FAQ</NavLink></li>
      </ul>
    </navbar>      
  );
}

export default Navbar;