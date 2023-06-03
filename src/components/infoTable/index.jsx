import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { write } from "../../reducers/repoReducers/observeInfoReducer";
import { setObserveInfoLoaded } from "../../reducers/repoReducers/flagsReducer";
import api from "../../http";
import "./style.css";

function InfoTable(){
  const { isObserveInfoLoaded, isDropdownOpen } = useSelector(state => state.flags);
  const info = useSelector(state => state.observeInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("/v1/account/info")
    .then(res => {
      dispatch(write(res.data.eventFiltersInfo));
      dispatch(setObserveInfoLoaded(true));
    })
    .catch(error => console.log(error));
  }, [])

  return(
    <div className="account-menu__table" style={{backgroundColor: !isDropdownOpen ? "#d9d9d94d" : "#FFFFFF"}}>
      {isObserveInfoLoaded ?
        <>
          <div>
            <p className="account-menu__table__text">Использовано компаний</p>
            <p className="account-menu__table__number">{info.usedCompanyCount}</p>
          </div>
          <div>
            <p className="account-menu__table__text">Лимит по компаниям</p>
            <p className="account-menu__table__number">{info.companyLimit}</p>
          </div>
        </>
        :
        <p>Загрузка...</p>}
    </div>
  );
}

export default InfoTable;