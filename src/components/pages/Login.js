import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import {LoadingImage } from 'react-loader-spinner'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [enableLogin, setEnableLogin] = React.useState(false)
    const [loginData, setLoginData] = React.useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
        setEnableLogin(true);
        const loginPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginData);
        loginPromise.then((response) => {
            navigate("/Hoje");
        })
    }

    return(
        <LoginMainContainer>
            <h1>TrackIt</h1>
            <LoginFieldArea onSubmit={login}>
                <UserName
                    type="email"
                    value={loginData.email}
                    placeholder="email"
                    disabled={enableLogin}
                    onChange={(event) => setLoginData.email(event.target.value)}
                    required>
                </UserName>
                <Password
                    type="password"
                    value={loginData.password}
                    disabled={enableLogin}
                    onChange={(event) => setLoginData.password(event.target.password)}
                    required>
                </Password>
            </LoginFieldArea>
        </LoginMainContainer>
    )
}

const LoginMainContainer = styled.main`
`

const LoginFieldArea = styled.form`
`

const UserName = styled.input`
`

const Password = styled.input`
`

export default Login;