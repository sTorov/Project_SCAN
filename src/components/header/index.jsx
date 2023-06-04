import React, { useRef, useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";

import logo from "../../img/SGN_09_24_2022_1663968217400 1.svg";
import whiteLogo from "../../img/eqw_1.svg";

import Logo from "../logo";
import Navbar from "../navbar";
import AccountMenu from "../accountMenu";
import AuthenticationMenu from "../authenticationMenu";
import InfoTable from "../infoTable";
import Dropdown from "../dropdown";
import { setDropdownOpen } from "../../reducers/repoReducers/flagsReducer";


function Header(){
  const { isDropdownOpen } = useSelector(state => state.flags);
  const { isAuth } = useSelector(state => state.account);
  const dispatch = useDispatch();

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
    dispatch(setDropdownOpen(value !== undefined ? value : !isDropdownOpen));
    if(isLogoPaused){
      pauseLogoChange();
    }
  }

  function pauseLogoChange(){
    imgRef.current.className = "header__logo hidden";
    setTimeout(() => imgRef.current.className = "header__logo viewed", 600);
  }

  return(
    <header className={`header ${isDropdownOpen ? "opened" : ""}`}>
      <div className="container">
        <div className="header-left">
          <Logo src={isDropdownOpen ? whiteLogo : logo} className="header__logo" imgRef={imgRef}/>
          <Navbar/>
        </div>
        <div className={`header-right ${isAuth ? "d-flex-sb" : "d-flex-e"}`}>
          {isAuth && <InfoTable/>}
          {isAuth ? <AccountMenu/> : <AuthenticationMenu/>}
        </div>
      </div>
      <Dropdown onClick={closeMenu}/>
    </header>
  )
}

export default Header;