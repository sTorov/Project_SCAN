import React from "react";
import "./style.css";

function InfoTable({account}){
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
    </>
  );
}

export default InfoTable;