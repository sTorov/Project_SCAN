import React from "react";
import "./style.css"

function Input({children, error, label, type, onChange, value, valid, required, placeholder}){
  return(
    <label className="label"> 
      <span className={`label-text ${required ? "required" : ""} ${required && valid ? "" : "invalid"}`}>{label}</span>
      <div className="input-wrapper">
        {
          type === "select"
            ?
              <div className="select-wrapper">
                <select className={`select input ${valid ? "" : "invalid"}`} onChange={onChange} value={value}>
                  {children}
                </select>
              </div>
            :
              <input className={`input ${valid ? "" : "invalid"}`} type={type === "password" ? "password" : "text"} 
                onChange={onChange} value={value} placeholder={placeholder}/>
        }
        {!valid && <span className="error-message">{error}</span>}
      </div>
    </label>
  )
}

export default Input;