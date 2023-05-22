import React, { useEffect, useRef } from "react";
import "./style.css"
import cross from "../../img/Cross.svg";

import Navbar from "../navbar";

function Dropdown({onClick, dropdownRef, iconRef, crossIconRef}){

  return(
    <>
      <button className="dropdown-btn" type="button" onClick={() => onClick()}>
        <div className="icon" ref={iconRef}>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
        </div>
        <div className="cross-icon" ref={crossIconRef}>
          <img src={cross} alt="cross_icon"/>
        </div>
      </button>
      <div className="dropdown-menu" ref={dropdownRef}>
        <Navbar/>
      </div>
    </>
  );
}

export default Dropdown;