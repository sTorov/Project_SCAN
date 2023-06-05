import React from "react";
import "./style.css"

function Input({children, error, type, onChange, value, valid}){
  return(
    <label className="label"> 
      <span className="label-text">{children}</span>
      <input className={`input ${valid ? "" : "invalid"}`} type={type === "password" ? "password" : "text"} onChange={onChange} value={value}/>
      {!valid && <span className="error-message">{error}</span>}
    </label>
  )
}

export default Input;