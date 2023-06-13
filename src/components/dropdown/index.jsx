import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css"
import cross from "../../img/Cross.svg";

import Navbar from "../navbar";
import AuthenticationMenu from "../authenticationMenu";
import { useNavigate } from "react-router-dom";
import { WebService } from "../../services/webService";
import { setDropdownOpen } from "../../reducers/repoReducers/flagsReducer";

function Dropdown(){
  const { isAuth } = useSelector(state => state.account);
  const { isDropdownOpen } = useSelector(state => state.flags);

  const dispatch = useDispatch();
  const navigator = useNavigate();

  return(
    <>
      <button className="dropdown-btn" type="button" onClick={() => dispatch(setDropdownOpen(!isDropdownOpen))}>
        <div className={`icon ${isDropdownOpen ? "inactive" : "active"}`}>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
          <div className="dropdown-btn__icon"></div>
        </div>
        <div className={`cross-icon ${isDropdownOpen ? "active" : "inactive"}`}>
          <img src={cross} alt="cross_icon"/>
        </div>
      </button>
      <div className={`dropdown-menu__wrapper ${isDropdownOpen ? "active" : "inactive"}`}>
        <div className="dropdown-menu">
          <Navbar onClick={() => dispatch(setDropdownOpen(false))}/>
          {isAuth ? <div className="wrapper">
                      <button className="auth-btn dropdown-cancel-btn" type="button" onClick={() => {
                        dispatch(setDropdownOpen(false));
                        WebService.logout(dispatch, navigator); 
                      }}>Выйти</button>
                    </div>
                  : <AuthenticationMenu />}
        </div>
        <div className="div" onClick={() => dispatch(setDropdownOpen(false))}></div>
      </div>
    </>
  );
}

export default Dropdown;