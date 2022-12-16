import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import {LoadingImage } from 'react-loader-spinner'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [enableLogin, setEnableLogin] = React.useState(false)
    const [loginDataEmail, setLoginDataEmail] = React.useState("");
    const [loginDataPassword, setLoginDataPassword] = React.useState("");
    const [loginData, setLoginData] = React.useState({
        email:loginDataEmail,
        password:loginDataPassword
    })
    const navigate = useNavigate();

    function login(event){
        event.preventDefault();
        setEnableLogin(true);
        const loginPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginData);
        loginPromise.then((response) => {
            navigate("/Hoje");
        })
        loginPromise.catch((response) =>{
            alert(response.response.data.message);
            setEnableLogin(false);
        })
    }

    console.log(loginData);
    console.log(loginData.password);

    return(
        <LoginMainContainer>
            <h1>TrackIt</h1>
            <LoginFieldArea onSubmit={login}>
                <UserName
                    type="email"
                    value={loginDataEmail}
                    placeholder="Email"
                    disabled={enableLogin}
                    onChange={(event) => setLoginDataEmail(event.target.value)}
                    required>
                </UserName>
                <Password
                    type="password"
                    value={loginDataPassword}
                    placeholder="Password"
                    disabled={enableLogin}
                    onChange={(event) => setLoginDataPassword(event.target.value)}
                    required>
                </Password>
            </LoginFieldArea>
            <EnterButton
                type='submit'
                disabled={enableLogin}>Entrar
            </EnterButton>
            <SignUpButton>Não tem uma conta? Cadastre-se!</SignUpButton>
        </LoginMainContainer>
    )
}

const LoginMainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1{
        margin-bottom: 30px;
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 69px;
        line-height: 86px;
        text-align: center;
        color: #126BA5;
    }
`
const LoginFieldArea = styled.form`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const UserName = styled.input`
       box-sizing: border-box;
        margin: 5px 0;
        width: 80%;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 21px;
            line-height: 26px;
            font-weight: 400;
            color: #DBDBDB;
        }
`

const Password = styled.input`
       box-sizing: border-box;
        margin: 5px 0;
        width: 80%;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        &::placeholder{
            font-family: 'Lexend Deca', sans-serif;
            font-size: 21px;
            line-height: 26px;
            font-weight: 400;
            color: #DBDBDB;
        }
`

const EnterButton = styled.button`
        width: 80%;
        height: 45px;
        background: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        line-height: 26px;
        font-weight: 400;
        border-radius: 5px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px 20px 0px;
`

const SignUpButton = styled.button`
        width: 80%;
        height: 45px;
        background: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 21px;
        line-height: 26px;
        font-weight: 400;
        border-radius: 5px;
        text-align: center;
        color: #FFFFFF;
`

export default Login;