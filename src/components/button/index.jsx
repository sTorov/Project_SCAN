import React from "react";
import "./style.css";

function Button({children, isSigned, onClick}){
    return <button type="button" className={`button ${ isSigned ? "signed_button" : "" }`} onClick={onClick}>{children}</button> 
}

export default Button;