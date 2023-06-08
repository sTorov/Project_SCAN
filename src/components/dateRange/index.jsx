import React from "react";
import "./style.css";

function DateRange({error, valid, label, onChange, required}){
  let startDateInput;
  let endDateInput;
  
  function clickHandler(elem){
      if(elem.type !== "date"){
          elem.type = "date";
          const date = new Date();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const day = date.getDate();
          elem.value = `${year}-${`${month < 10 ? "0" : ""}${month}`}-${`${day < 10 ? "0" : ""}${day}`}`;
      }
      elem.showPicker();
  }

  return(
    <>
      <span className={`label-text ${required ? "required" : ""} ${required && valid ? "" : "invalid"}`}>{label}</span>
      <div className="data-range-wrapper">
        <div className="select-wrapper">
         <input type="text" className={`input date ${valid ? "" : "invalid"}`} ref={el => startDateInput = el} placeholder="Дата начала" onChange={onChange} 
           onClick={() => clickHandler(startDateInput)}/>
        </div>
        <div className="select-wrapper">
          <input type="text" className={`input date ${valid ? "" : "invalid"}`} ref={el => endDateInput = el} placeholder="Дата конца" onChange={onChange}
            onClick={() => clickHandler(endDateInput)}/>
        </div>
        {!valid && <div className="error-message__wrapper">
                      <span className="error-message">{error}</span>
                    </div>}
      </div>
    </>  
  )
}

export default DateRange;