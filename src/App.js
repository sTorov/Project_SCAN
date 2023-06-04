import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";
import AccountManagerPage from "./components/accountManagerPage";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { setAuth } from "./reducers/repoReducers/accountReducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    dispatch(setAuth(token && Date.parse(localStorage.getItem('expire')) > Date.now()));
  }, [])

  return (
    <Router>
      <Header/>

      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/account/*" element={<AccountManagerPage/>}/>
          <Route path="/notfound" element={<div>Ресурс не найден</div>}/>
          <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </div>

      <Footer/>
    </Router>    
  );
}

export default App;
