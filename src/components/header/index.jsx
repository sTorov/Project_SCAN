import React, { useState, useRef, useEffect } from "react";
import "./style.css";

import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";
import whiteLogo from "../../img/eqw_1.svg";
import {account} from "../../moq";

import Logo from "../logo";
import Navbar from "../navbar";
import AccountMenu from "../accountMenu";
import AuthenticationMenu from "../authenticationMenu";
import InfoTable from "../infoTable";
import Dropdown from "../dropdown";


function Header(){
  const [auth, setAuth] = useState(false);
  const [dropdownClick, setDropdownClick] = useState(false);

  const headerRef = useRef();
  const dropdownRef = useRef();
  const iconRef = useRef();
  const crossIconRef = useRef();

  useEffect(() => {
    window.onresize = resizeWindow;
    return () => {
      window.onresize = null;
    }
  })

  function resizeWindow(){
      if(window.innerWidth > 768){
        setDropdownClick(false);

        headerRef.current.style.backgroundColor = "#FFFFFF";
        dropdownRef.current.style.display = "none";
        iconRef.current.style.display = "block";
        crossIconRef.current.style.display = "none";
      }
  }

  function changeAuth(isAuth){
    setAuth(isAuth);
  }

  function clickHandler(){
    setDropdownClick(!dropdownClick);

    dropdownRef.current.style.display = !dropdownClick 
    ? "block" : "none";
    iconRef.current.style.display = !dropdownClick 
    ? "none" : "block";
    crossIconRef.current.style.display = !dropdownClick 
    ? "block" : "none";
    headerRef.current.style.backgroundColor = !dropdownClick
    ? "#029491" : "#FFFFFF";
  }

  return(
    <>
      <header className="header" ref={headerRef}>
        <div className="container">
          <div className="header-left">
            <Logo src={dropdownClick ? whiteLogo : logo} className="header__logo"/>
            <Navbar/>
          </div>
          <div className="header-right">
            {auth && <InfoTable account={account} checkClick={dropdownClick}/>}
            {auth ? <AccountMenu onClick={changeAuth} account={account}/> : <AuthenticationMenu onClick={changeAuth}/>}
          </div>
        </div>
      </header>
      <Dropdown onClick={clickHandler} dropdownRef={dropdownRef} iconRef={iconRef} crossIconRef={crossIconRef}/>
    </>
  )
}

export default Header;