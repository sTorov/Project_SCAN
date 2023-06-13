import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { writeLogin, writePassword, setValidLogin, setValidPassword, setIsAuthDenied } from "../../reducers/repoReducers/loginDataReducer";
import api from "../../http";

import logo_1 from "../../img/sign_in_icon_btn_1.svg";
import logo_2 from "../../img/sign_in_icon_btn_2.svg";
import logo_3 from "../../img/sign_in_icon_btn_3.svg";

import Button from "../button";
import Input from "../input";
import { ValidateService } from "../../services/validateService";
import { WebService } from "../../services/webService";

function Login(){
    const { validLogin, validPassword, isAuthDenied, data } = useSelector(state => state.loginData);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    function sigin(){
        api.post("/v1/account/login", {login: data.login, password: data.password})
        .then(res => {
          if(res.status === 200){
            WebService.login(dispatch, navigator, res);
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

        <Input error="Введите корректные данные" label="Логин или номер телефона:" 
          onChange={e => onChangeLogin(e.target.value)} value={data.login} valid={validLogin === null ? true : validLogin}/>
        <Input type="password" error="Введите пароль" label="Пароль:"
          onChange={e => onChangePassword(e.target.value)} value={data.password} valid={validPassword === null ? true : validPassword}/>
        
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