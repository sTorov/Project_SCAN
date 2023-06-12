import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import api from "../../http";
import { setObserveInfoLoaded, write } from "../../reducers/repoReducers/observeInfoReducer";

import Loader from "../loader";

function InfoTable(){
  const { isDropdownOpen } = useSelector(state => state.flags);
  const { isObserveInfoLoaded, data } = useSelector(state => state.observeInfo);
  const dispatch = useDispatch();
  
  useEffect(() => {
    api.get("/v1/account/info")
    .then(res => {
      dispatch(write(res.data.eventFiltersInfo));
      dispatch(setObserveInfoLoaded(true));
    })
    .catch(error => console.log(error));
  }, []);

  return(
    <div className="account-menu__table" style={{backgroundColor: !isDropdownOpen ? "#d9d9d94d" : "#FFFFFF"}}>
      {isObserveInfoLoaded
        ?
        <>
          <div>
            <p className="account-menu__table__text">Использовано компаний</p>
            <p className="account-menu__table__number">{data.usedCompanyCount}</p>
          </div>
          <div>
            <p className="account-menu__table__text">Лимит по компаниям</p>
            <p className="account-menu__table__number">{data.companyLimit}</p>
          </div>
        </>
        :
        <Loader/>}
    </div>
  );
}

export default InfoTable;