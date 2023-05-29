import React from "react";
import "./style.css";

function Button({children, onClick}){
    return <button type="button" className="button" onClick={onClick}>{children}</button> 
}

export default Button;