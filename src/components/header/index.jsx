import React, {useState} from "react";
import "./style.css";
import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";

import Logo from "../logo";
import Navbar from "../navbar";
import AccountMenu from "../accountMenu";
import AuthenticationMenu from "../authenticationMenu";


function Header(){
  const [auth, setAuth] = useState(false);

  
  function changeAuth(isAuth){
    setAuth(isAuth);
  } 

  return(
    <header className="header">
      <div className="container">
        <div className="header-left">
          <Logo src={logo}/>
          <Navbar/>
        </div>
        <div className="header-right">
          {auth ? <AccountMenu onClick={changeAuth}/> : <AuthenticationMenu onClick={changeAuth}/>}
        </div>        
      </div>
    </header>
  )
}

export default Header;