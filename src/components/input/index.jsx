import React from "react";
import "./style.css"

function Input({children, error, type, onChange, value}){
  return(
    <label className="label"> 
      <span className="label-text">{children}</span>
      <input className="input" type={type} onChange={onChange} value={value} required/>
      <span className="error-message">{error}</span>
    </label>
  )
}

export default Input;