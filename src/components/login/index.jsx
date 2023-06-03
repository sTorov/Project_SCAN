import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../reducers/repoReducers/accountReducer";
import { writeLogin, writePassword } from "../../reducers/repoReducers/loginDataReducer";
import { useNavigate } from "react-router-dom";
import api from "../../http";
import "./style.css";

function Login(){
    // const [login, setLogin] = useState();
    // const [password, setPassword] = useState();
    const { login, password } = useSelector(state => state.loginData);
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
        <div>
            <input type="text" placeholder="login" onChange={e => dispatch(writeLogin(e.target.value))} value={login}/>
            <input type="password" placeholder="password" onChange={e => dispatch(writePassword(e.target.value))} value={password}/>
            <button onClick={sigin}>Войти</button>
        </div>
    )
}

export default Login;