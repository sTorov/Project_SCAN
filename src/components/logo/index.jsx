import React from "react";
import "./style.css";

function Logo({src, className, imgRef}){
  return(
    <>
      <img className={className} src={src} alt="scan_logo" ref={imgRef}/>
    </>
  );
}

export default Logo;