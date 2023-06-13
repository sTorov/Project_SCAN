import React from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDropdownOpen } from "../../reducers/repoReducers/flagsReducer";

function AuthenticationMenu(){
  const { isDropdownOpen } = useSelector(state => state.flags);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function clickHandler(){
    dispatch(setDropdownOpen(false));
    navigate("/account/login");
  }

  return(
    <div className="auth-menu">
      <Link className="auth-menu__link" to="#" onClick={isDropdownOpen ? () => dispatch(setDropdownOpen(false)) : null}>Зарегистрироваться</Link>
      <div className="vr"></div>
      <button className="auth-btn" onClick={clickHandler}>Войти</button>
    </div>
  );
}

export default AuthenticationMenu;