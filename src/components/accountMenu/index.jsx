import React from "react";
import "./style.css";
import {account} from "../../moq";
import photo from "../../img/avatar.jpg";

function AccountMenu({onClick}){
  return(
      <>
        <div className="account-menu__table">
          <div>
            <p className="account-menu__table__text">Использовано компаний</p>
            <p className="account-menu__table__number">{account.usedComp}</p>
          </div>
          <div>
            <p className="account-menu__table__text">Лимит по компаниям</p>
            <p className="account-menu__table__number">{account.limitComp}</p>
          </div>
        </div>

        <div className="account-menu__profile">
          <div className="account-menu__profile__info">
            <p className="account-menu__profile__info__text">{account.name}</p>
            <button className="account-menu__profile__info__btn" type="button" onClick={() => onClick(false)}>Выйти</button>
          </div>
          <img className="account-menu__profile__info__avatar" src={photo} alt="avatar"/>
        </div>
      </>
  );
}

export default AccountMenu;