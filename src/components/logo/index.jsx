import React from "react";
import "./style.css";

function Logo({src, className}){
  return(
    <>
      <img className={className} src={src} alt="scan_logo"/>
    </>
  );
}

export default Logo;