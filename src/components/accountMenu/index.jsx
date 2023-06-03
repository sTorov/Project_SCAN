import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../reducers/repoReducers/accountReducer";
import { useNavigate } from "react-router-dom";

function AccountMenu(){
  const { info } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expire');
    dispatch(setAuth(false));
    navigator("/");
  }

  return(
    <div className="account-menu__profile">
      <div className="account-menu__profile__info">
        <p className="account-menu__profile__info__text">{info.name}</p>
        <button className="account-menu__profile__info__btn" type="button" onClick={logout}>Выйти</button>
      </div>
      <img className="account-menu__profile__info__avatar" src={info.photo} alt="avatar"/>
    </div>
  );
}

export default AccountMenu;