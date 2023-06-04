import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

import { setAuth } from "../../reducers/repoReducers/accountReducer";
import { writeLogin, writePassword } from "../../reducers/repoReducers/loginDataReducer";
import { setValidLogin, setValidPassword } from "../../reducers/repoReducers/flagsReducer";
import api from "../../http";

import logo_1 from "../../img/sign_in_icon_btn_1.svg";
import logo_2 from "../../img/sign_in_icon_btn_2.svg";
import logo_3 from "../../img/sign_in_icon_btn_3.svg";

import Button from "../button";
import Input from "../input";

function Login(){
    const { login, password } = useSelector(state => state.loginData);
    const { validLogin, validPassword } = useSelector(state => state.flags);
    const dispatch = useDispatch();
    const navigator = useNavigate();

    function sigin(){
        api.post("/v1/account/login", {login, password})
        .then(res => {
            localStorage.setItem('token', res.data.accessToken);
            localStorage.setItem('expire', res.data.expire);
            dispatch(setAuth(true));
            navigator("/");
        })
        .catch(error => console.log(error));
    }

    return(
      <>
        <Input type="text" error="Введите корректные данные" onChange={e => {
            dispatch(writeLogin(e.target.value));
            dispatch(setValidLogin(e.target.validity.valid));
        }} value={login}>
          Логин или номер телефона:
        </Input>
        <Input type="password" error="Неверный пароль" onChange={e => {
            dispatch(writePassword(e.target.value));
            dispatch(setValidPassword(e.target.validity.valid));
        }} value={password}>
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