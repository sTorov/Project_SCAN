import React from "react";
import "./style.css";

function InfoTable({account, checkClick}){
  return(
    <div className="account-menu__table" style={{backgroundColor: !checkClick ? "#d9d9d94d" : "#FFFFFF"}}>
      <div>
        <p className="account-menu__table__text">Использовано компаний</p>
        <p className="account-menu__table__number">{account.usedComp}</p>
      </div>
      <div>
        <p className="account-menu__table__text">Лимит по компаниям</p>
        <p className="account-menu__table__number">{account.limitComp}</p>
      </div>
    </div>
  );
}

export default InfoTable;