import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

function AuthenticationMenu({onClick}){
  return(
    <div className="auth-menu">
      <NavLink className="auth-menu__link" to="/auth">Зарегистрироваться</NavLink>
      <div className="vr"></div>
      <button className="auth-btn" onClick={() => onClick(true)}>Войти</button>
    </div>
  );
}

export default AuthenticationMenu;