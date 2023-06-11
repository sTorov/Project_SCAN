import React from "react";
import "./style.css";
import loaderIcon from "../../img/loader.svg";

function Loader({ label }){
    return (
      <div className="loader-wrapper">
        <img className="loader" src={loaderIcon} alt="loader_icon"/>
        {label && <p>{label}</p>}
      </div>
    )
}

export default Loader;