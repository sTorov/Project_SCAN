import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

function DateRange({error, valid, label, onChangeStart, onChangeEnd, required}){
  const { data } = useSelector(state => state.search);

  let startDateInput;
  let endDateInput;
  
  function showPicker(elem){
      if(elem.type !== "date"){
          elem.type = "date";
          elem.value = getValueDate();;
      }
      elem.showPicker();
  }

  function getValueDate(string){
    const date = string === undefined ? new Date() : new Date(string);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${year}-${`${month < 10 ? "0" : ""}${month}`}-${`${day < 10 ? "0" : ""}${day}`}`;
  }

  function dateHandler(event, input, value, func){
    showPicker(input);
    if(value === null || event.target.value === ''){
      func(event.target.value);
    }
  }

  return(
    <>
      <span className={`label-text ${required ? "required" : ""} ${required && valid ? "" : "invalid"}`}>{label}</span>
      <div className="data-range-wrapper">
        <div className="select-wrapper">
         <input type={data.dateStart === null ? "text" : "date"} className={`input date ${valid ? "" : "invalid"}`} ref={el => startDateInput = el} placeholder="Дата начала" 
           onClick={e => dateHandler(e, startDateInput, data.dateStart, onChangeStart)} 
           onChange={e => onChangeStart(e.target.value)}
           onFocus={e => dateHandler(e, startDateInput, data.dateStart, onChangeStart)}
           defaultValue={data.dateStart === null ? null : getValueDate(data.dateStart)}/>
        </div>
        <div className="select-wrapper">
          <input type={data.dateEnd === null ? "text" : "date"} className={`input date ${valid ? "" : "invalid"}`} ref={el => endDateInput = el} placeholder="Дата конца"
            onClick={e => dateHandler(e, endDateInput, data.dateEnd, onChangeEnd)} 
            onChange={e => onChangeEnd(e.target.value)}
            onFocus={e => dateHandler(e, endDateInput, data.dateEnd, onChangeEnd)} 
            defaultValue={data.dateEnd === null ? null : getValueDate(data.dateEnd)}/>
        </div>
        {!valid && <div className="error-message__wrapper">
                      <span className="error-message">{error}</span>
                    </div>}
      </div>
    </>  
  )
}

export default DateRange;