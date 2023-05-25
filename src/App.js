import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import MainPage from "./components/mainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      <div className="container">
        <Routes>
          <Route path="/" Component={() => <MainPage/>}/>
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
