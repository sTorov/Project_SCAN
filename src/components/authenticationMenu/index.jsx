import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

function AuthenticationMenu(){
  const navigate = useNavigate();

  return(
    <div className="auth-menu">
      <Link className="auth-menu__link" to="#">Зарегистрироваться</Link>
      <div className="vr"></div>
      <button className="auth-btn" onClick={() => navigate("/account/login")}>Войти</button>
    </div>
  );
}

export default AuthenticationMenu;