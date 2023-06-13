import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Logo({src, className, imgRef, onClick}){
  const navigate = useNavigate();

  function clickHandler(){
    if(typeof onClick === "function"){
      onClick();
    }
    navigate("/");
  }

  return <img className={`logo ${className}`} src={src} alt="scan_logo" ref={imgRef} onClick={clickHandler}/>
}

export default Logo;