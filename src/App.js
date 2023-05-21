import React from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route path="/" Component={() => (<div>Главная</div>)}/>
        <Route path="/auth" Component={() => (<div>Регистрация</div>)}/>
        <Route path="/rates" Component={() => (<div>Тарифы</div>)}/>
        <Route path="/faq" Component={() => (<div>FAQ</div>)}/>
      </Routes>

      <Footer/>
    </Router>    
  );
}

export default App;
