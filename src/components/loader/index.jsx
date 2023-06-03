import React from "react";
import "./style.css";
import loaderIcon from "../../img/loader.svg";

function Loader(){
    return <img className="loader" src={loaderIcon} alt="loader_icon"/>
}

export default Loader;