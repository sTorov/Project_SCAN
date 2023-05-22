import React, {useState} from "react";
import "./style.css";
import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";
import {account} from "../../moq";

import Logo from "../logo";
import Navbar from "../navbar";
import AccountMenu from "../accountMenu";
import AuthenticationMenu from "../authenticationMenu";
import InfoTable from "../infoTable";
import Dropdown from "../dropdown";


function Header(){
  const [auth, setAuth] = useState(false);

  
  function changeAuth(isAuth){
    setAuth(isAuth);
  } 

  return(
    <header className="header">
      <div className="container">
        <div className="header-left">
          <Logo src={logo} className="header__logo"/>
          <Navbar/>
        </div>
        <div className="header-right">
          {auth && <InfoTable account={account}/>}
          {auth ? <AccountMenu onClick={changeAuth} account={account}/> : <AuthenticationMenu onClick={changeAuth}/>}
          <Dropdown/>
        </div>
      </div>
    </header>
  )
}

export default Header;