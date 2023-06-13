import React, { useEffect } from "react";
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

  useEffect(() => {
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    }
  }, [])

  function resizeWindow(){
    if(window.innerWidth > 768){
      dispatch(setDropdownOpen(false));
    }
  }

  return(
    <>
    <header className={`header ${isDropdownOpen ? "opened" : ""}`}>
      <div className="container">
        <div className="header-left">
          <Logo src={isDropdownOpen ? whiteLogo : logo} className="header__logo" 
            onClick={isDropdownOpen ? () => dispatch(setDropdownOpen(false)) : null}/>
          <Navbar/>
        </div>
        <div className={`header-right ${isAuth ? "d-flex-sb" : "d-flex-e"}`}>
          {isAuth && <InfoTable/>}
          {isAuth ? <AccountMenu/> : <AuthenticationMenu/>}
        </div>
      </div>
    </header>
    <Dropdown/>
    </>
  )
}

export default Header;