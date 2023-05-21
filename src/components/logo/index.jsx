import React from "react";
import "./style.css";

function Logo({src}){
  return(
    <>
      <img className="header__logo" src={src} alt="scan_logo"/>
    </>
  );
}

export default Logo;