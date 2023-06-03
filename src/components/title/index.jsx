import React from "react";
import "./style.css";

function Title({type, children}){
    return <h1 className={type}>{children}</h1>
}

export default Title;