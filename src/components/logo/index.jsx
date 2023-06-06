import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Logo({src, className, imgRef}){
  const navigate = useNavigate();

  return <img className={`logo ${className}`} src={src} alt="scan_logo" ref={imgRef} onClick={() => navigate("/")}/>
}

export default Logo;