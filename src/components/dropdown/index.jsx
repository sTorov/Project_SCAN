import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../reducers/repoReducers/accountReducer";
import "./style.css"
import cross from "../../img/Cross.svg";

import Navbar from "../navbar";
import AuthenticationMenu from "../authenticationMenu";
import { useNavigate } from "react-router-dom";

function Dropdown({onClick}){
  const { isAuth } = useSelector(state => state.account);
  const { isDropdownOpen } = useSelector(state => state.flags);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
    dispatch(setAuth(false));
    navigator("/")
  }

  return(
    <>
      <button className="dropdown-btn" type="button" onClick={() => onClick(true)}>
        <div className={`icon ${isDropdownOpen ? "inactive" : "active"}`}>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
        </div>
        <div className={`cross-icon ${isDropdownOpen ? "active" : "inactive"}`}>
          <img src={cross} alt="cross_icon"/>
        </div>
      </button>
      <div className={`dropdown-menu ${isDropdownOpen
         ? "active" : "inactive"}`}>
        <Navbar onClick={() => onClick(true, false)}/>
        {isAuth ? <div className="wrapper">
                    <button className="auth-btn dropdown-cancel-btn" type="button" onClick={logout}>Выйти</button>
                  </div>
                : <AuthenticationMenu/>}
      </div>
    </>
  );
}

export default Dropdown;