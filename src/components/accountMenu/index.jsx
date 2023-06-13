import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { WebService } from "../../services/webService";
import { setDropdownOpen } from "../../reducers/repoReducers/flagsReducer";

function AccountMenu(){
  const { info } = useSelector(state => state.account);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  function clickHandler(){
    dispatch(setDropdownOpen(false));
    WebService.logout(dispatch, navigator)
  }

  return(
    <div className="account-menu__profile">
      <div className="account-menu__profile__info">
        <p className="account-menu__profile__info__text">{info.name}</p>
        <button className="account-menu__profile__info__btn" type="button" onClick={clickHandler}>Выйти</button>
      </div>
      <img className="account-menu__profile__info__avatar" src={info.photo} alt="avatar"/>
    </div>
  );
}

export default AccountMenu;