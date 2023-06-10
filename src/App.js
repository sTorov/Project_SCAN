import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";
import AccountManagerPage from "./components/accountManagerPage";
import SearchPage from "./components/searchPage";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { setAuth } from "./reducers/repoReducers/accountReducer";
import ResultPage from "./components/resultPage";

function App() {
  const { isAuth } = useSelector(state => state.account);
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
          <Route path="/search" element={isAuth ? <SearchPage/> : <Navigate to="/"/>}/>
          <Route path="/result" element={isAuth ? <ResultPage/> : <Navigate to="/"/>}/>
          <Route path="/notfound" element={<div>Ресурс не найден</div>}/>
          <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </div>

      <Footer/>
    </Router>    
  );
}

export default App;
