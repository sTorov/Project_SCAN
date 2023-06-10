import React from "react";
import "./style.css";

function Checkbox({children, onClick, checked}){
    return(
        <label className="checkbox-block">
            <input className="hidden-check" type="checkbox" onClick={onClick} defaultChecked={checked}/>
            <div className="fake-bg"></div>
            <span className="checkbox-label__text">{children}</span>
        </label>
    )
}

export default Checkbox;