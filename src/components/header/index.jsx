import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";
import whiteLogo from "../../img/eqw_1.svg";

import Logo from "../logo";
import Navbar from "../navbar";
import AccountMenu from "../accountMenu";
import AuthenticationMenu from "../authenticationMenu";
import InfoTable from "../infoTable";
import Dropdown from "../dropdown";


function Header({auth, changeAuth, account}){
  const [dropdownClick, setDropdownClick] = useState();

  const imgRef = useRef();

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  function resizeWindow(){
    if(window.innerWidth > 768){
      closeMenu(false, false);
    }
  }

  function closeMenu(isLogoPaused, value){
    setDropdownClick(value !== undefined ? value : !dropdownClick);
    if(isLogoPaused){
      pauseLogoChange();
    }
  }

  function pauseLogoChange(){
    imgRef.current.className = "header__logo hidden";
    setTimeout(() => imgRef.current.className = "header__logo viewed", 600);
  }

  return(
    <header className={`header ${dropdownClick ? "opened" : ""}`}>
      <div className="container">
        <div className="header-left">
          <Logo src={dropdownClick ? whiteLogo : logo} className="header__logo" imgRef={imgRef}/>
          <Navbar/>
        </div>
        <div className="header-right">
          {auth && <InfoTable account={account} checkClick={dropdownClick}/>}
          {auth ? <AccountMenu onClick={changeAuth} account={account}/> : <AuthenticationMenu onClick={changeAuth}/>}
        </div>
      </div>
      <Dropdown onClick={closeMenu} changeAuth={changeAuth} isAuth={auth} isOpen={dropdownClick}/>
    </header>
  )
}

export default Header;