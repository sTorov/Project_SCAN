import React, { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { account as moqAccount } from "./moq";
import AccountPage from "./components/accountPage";

function App() {
  const [auth, setAuth] = useState(false);
  const [account, setAccount] = useState(moqAccount);

  function changeAuth(isAuth){
    setAuth(isAuth);
  }

  function changeSigned(planName){
    setAccount({ ...account, signed: planName });
  }

  return (
    <Router>
      <Header auth={auth} changeAuth={changeAuth} account={auth ? account : null}/>

      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage auth={auth} account={auth ? account : null} changeSigned={auth ? changeSigned : null}/>}/>
          <Route path="/account/*" element={<AccountPage/>}/>
          <Route path="/notfound" element={<div>Ресурс не найден</div>}/>
          <Route path="*" element={<Navigate to="/notfound"/>}/>
        </Routes>
      </div>

      <Footer/>
    </Router>    
  );
}

export default App;
