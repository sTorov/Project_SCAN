import React from "react";
import "./style.css"

function Input({children, error, label, type, onChange, value, valid, required}){
  return(
    <label className="label"> 
      <span className={`label-text ${required ? "required" : ""} ${required && valid ? "" : "invalid"}`}>{label}</span>
      {
        type === "select"
          ?
            <div className="select-wrapper">
              <select className={`select input ${valid ? "" : "invalid"}`} onChange={onChange}>{children}</select>
            </div>
          :
            <input className={`input ${valid ? "" : "invalid"}`} type={type === "password" ? "password" : "text"} onChange={onChange} value={value}/>
      }
      {!valid && <span className="error-message">{error}</span>}
    </label>
  )
}

export default Input;