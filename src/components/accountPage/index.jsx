import React from "react";
import "./style.css";
import { Link, Navigate, Route, Routes, useLocation } from "react-router-dom";

function AccountPage(){
  const location = useLocation();
  const partPath = location.pathname.split('/')[1];

  return(
    <main>
      Account page

      <Link to={`/${partPath}/login`}>Login</Link>
      <Link to={`/${partPath}/register`}>Register</Link>

      <Routes>
        <Route path="/login" element={<div>login</div>}/>
        <Route path="/register" element={<div>register</div>}/>
        <Route path="*" element={<Navigate to="/notfound"/>}/>
      </Routes>

    </main>
  )
}

export default AccountPage;