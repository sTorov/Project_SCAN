import React from "react";
import "./style.css";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

import Login from "../login";

function Form(){
  const location = useLocation();
  const partPath = location.pathname.split('/')[1];

  return(
    <div className="form">
      <div className="form-header">
        <Link className="form-link" to={`/${partPath}/login`}>Войти</Link>
        <Link className="form-link disabled" to="#">Зарегистрироваться</Link>
      </div>
      <div className="form-main">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </div>          
    </div>
  )
}

export default Form;