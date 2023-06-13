import React from "react";
import { useSelector } from "react-redux";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";
import AccountManagerPage from "./components/accountManagerPage";
import SearchPage from "./components/searchPage";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ResultPage from "./components/resultPage";
import NotFound from "./components/notFound";

function App() {
  const { data } = useSelector(state => state.search);
  const { isAuth } = useSelector(state => state.account);

  return (
    <Router>
      <Header/>

      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/account/*" element={<AccountManagerPage/>}/>
          <Route path="/search" element={isAuth ? <SearchPage/> : <Navigate to="/"/>}/>
          <Route path="/result" element={isAuth && (!data.inn || !data.dateStart || !data.dateEnd || !data.countDoc) ? <Navigate to="/search"/> : !isAuth ? <Navigate to="/"/> : <ResultPage/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </div>

      <Footer/>
    </Router>    
  );
}

export default App;
