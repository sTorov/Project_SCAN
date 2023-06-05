import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { setAuth } from "../../reducers/repoReducers/accountReducer";
import { writeLogin, writePassword } from "../../reducers/repoReducers/loginDataReducer";
import { setValidLogin, setValidPassword, setIsAuthDenied } from "../../reducers/repoReducers/flagsReducer";
import api from "../../http";

import logo_1 from "../../img/sign_in_icon_btn_1.svg";
import logo_2 from "../../img/sign_in_icon_btn_2.svg";
import logo_3 from "../../img/sign_in_icon_btn_3.svg";

import Button from "../button";
import Input from "../input";
import { ValidateService } from "../../services/validateService";

function Login(){
    const { login, password } = useSelector(state => state.loginData);
    const { validLogin, validPassword, isAuthDenied } = useSelector(state => state.flags);
    const dispatch = useDispatch();
    const navigator = useNavigate();
    let checkAccount = true;

    function sigin(){
        api.post("/v1/account/login", {login, password})
        .then(res => {
          if(res.status === 200){
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('expire', res.data.expire);
            dispatch(setAuth(true));
            navigator("/");
          }
        })
        .catch(error => {
          if(error?.response?.status === 401){
            dispatch(setIsAuthDenied(true));
          }
          console.log(error);
        })
    }

    function onChangeLogin(value){
      dispatch(setIsAuthDenied(false));
      dispatch(writeLogin(value));
      dispatch(setValidLogin(ValidateService.validatePhoneNumberOrLogin(value)));
    }

    function onChangePassword(value){
      dispatch(setIsAuthDenied(false));
      dispatch(writePassword(value));
      dispatch(setValidPassword(ValidateService.validatePassword(value)));
    }

    return(
      <>
        {isAuthDenied &&  <div className="error-message__wrapper">
                            <span className="error-message">Неверный логин или(и) пароль</span>
                          </div>}

        <Input error="Введите корректные данные" onChange={e => onChangeLogin(e.target.value)} 
          value={login} valid={validLogin === null ? true : validLogin}>
            Логин или номер телефона:
        </Input>
        <Input type="password" error="Введите пароль" onChange={e => onChangePassword(e.target.value)} 
          value={password} valid={validPassword === null ? true : validPassword}>
            Пароль:
        </Input>
        
        <Button onClick={sigin} disabled={!(validPassword && validLogin)}>Войти</Button>
        
        <div className="link-wrapper">
          <Link className="recover-link" to="#">Восстановить пароль</Link>
        </div>

        <span className="span">Войти через:</span>
        
        <div className="login-button-group">
          <button className="login-button-group__btn" type="button">
            <img src={logo_1} alt="btn_logo_1"/>
          </button>
          <button className="login-button-group__btn" type="button">
            <img src={logo_2} alt="btn_logo_2"/>
          </button>
          <button className="login-button-group__btn" type="button">
            <img src={logo_3} alt="btn_logo_3"/>
          </button>
        </div>
      </>
    )
}

export default Login;