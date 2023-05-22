import React from "react";
import "./style.css"

function Dropdown(){
  return(
    <>
      <button className="dropdown-btn" type="button">
        <div className="dropdown-btn__icon"></div>
        <div className="dropdown-btn__icon"></div>
        <div className="dropdown-btn__icon"></div>
      </button>
    </>
  );
}

export default Dropdown;