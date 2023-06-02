import React, { useRef } from "react";
import "./style.css"
import cross from "../../img/Cross.svg";

import Navbar from "../navbar";
import AuthenticationMenu from "../authenticationMenu";

function Dropdown({onClick, isAuth, isOpen, changeAuth}){
  return(
    <>
      <button className="dropdown-btn" type="button" onClick={() => onClick(true)}>
        <div className={`icon ${isOpen ? "inactive" : "active"}`}>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
        </div>
        <div className={`cross-icon ${isOpen ? "active" : "inactive"}`}>
          <img src={cross} alt="cross_icon"/>
        </div>
      </button>
      <div className={`dropdown-menu ${isOpen ? "active" : "inactive"}`}>
        <Navbar onClick={() => onClick(true, false)}/>
        {isAuth ? <div className="wrapper">
                    <button className="auth-btn dropdown-cancel-btn" type="button" onClick={() => changeAuth(false)}>Выйти</button>
                  </div>
                : <AuthenticationMenu onClick={changeAuth}/>}
      </div>
    </>
  );
}

export default Dropdown;