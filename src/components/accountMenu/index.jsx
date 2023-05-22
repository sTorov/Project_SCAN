import React from "react";
import "./style.css";
import photo from "../../img/avatar.jpg";

function AccountMenu({onClick, account}){
  return(
    <div className="account-menu__profile">
      <div className="account-menu__profile__info">
        <p className="account-menu__profile__info__text">{account.name}</p>
        <button className="account-menu__profile__info__btn" type="button" onClick={() => onClick(false)}>Выйти</button>
      </div>
      <img className="account-menu__profile__info__avatar" src={photo} alt="avatar"/>
    </div>
  );
}

export default AccountMenu;