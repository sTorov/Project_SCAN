import React from "react";
import "./style.css";

function Checkbox({children}){
    return(
        <label className="checkbox-block">
            <input className="hidden-check" type="checkbox"/>
            <div className="fake-bg"></div>
            <span className="checkbox-label__text">{children}</span>
        </label>
    )
}

export default Checkbox;