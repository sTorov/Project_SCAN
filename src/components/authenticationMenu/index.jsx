import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

function AuthenticationMenu({onClick}){
  const navigate = useNavigate();

  function clickHandler(){
    if(onClick !== null && onClick !== undefined){
      onClick();
    }
    navigate("/account/login");
  }

  return(
    <div className="auth-menu">
      <Link className="auth-menu__link" to="#" onClick={onClick}>Зарегистрироваться</Link>
      <div className="vr"></div>
      <button className="auth-btn" onClick={clickHandler}>Войти</button>
    </div>
  );
}

export default AuthenticationMenu;