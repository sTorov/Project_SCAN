import React, { useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { account as moqAccount } from "./moq";

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
          <Route path="/" Component={() => <MainPage auth={auth} account={auth ? account : null} changeSigned={auth ? changeSigned : null}/>}/>
          <Route path="/auth" Component={() => (<div>Регистрация</div>)}/>
          <Route path="/rates" Component={() => (<div>Тарифы</div>)}/>
          <Route path="/faq" Component={() => (<div>FAQ</div>)}/>
        </Routes>
      </div>

      <Footer/>
    </Router>    
  );
}

export default App;
