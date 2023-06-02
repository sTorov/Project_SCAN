import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function AuthenticationMenu({onClick}){
  return(
    <div className="auth-menu">
      <Link className="auth-menu__link" to="/account/register">Зарегистрироваться</Link>
      <div className="vr"></div>
      <button className="auth-btn" onClick={() => onClick(true)}>Войти</button>
    </div>
  );
}

export default AuthenticationMenu;