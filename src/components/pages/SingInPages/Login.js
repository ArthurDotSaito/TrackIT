import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import {ThreeDots } from 'react-loader-spinner'
import {useNavigate, Link} from 'react-router-dom'
import { Input, Button, LoginFieldArea, LoginMainContainer, MainContainer,FieldArea } from './SingInStyled';

const Login = () => {
    const navigate = useNavigate();
    const [enableLogin, setEnableLogin] = React.useState(false)
    const [loginDataEmail, setLoginDataEmail] = React.useState("");
    const [loginDataPassword, setLoginDataPassword] = React.useState("");
    const [loginData, setLoginData] = React.useState({
        email:loginDataEmail,
        password:loginDataPassword
    })
    
    function login(event){
        event.preventDefault();
        setEnableLogin(true);
        console.log("Olá Marilene!")
        const loginPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginData);
        loginPromise.then((response) => {
            navigate("/Hoje");
        })
        loginPromise.catch((response) =>{
            alert(response.response.data.message);
            setEnableLogin(false);
        })
    }

    return(
        <MainContainer>
            <h1>TrackIt</h1>
            <FieldArea onSubmit={login}>
                <Input
                    type="email"
                    value={loginDataEmail}
                    placeholder="Email"
                    disabled={enableLogin}
                    onChange={(event) => setLoginDataEmail(event.target.value)}
                    required>
                </Input>
                <Input
                    type="password"
                    value={loginDataPassword}
                    placeholder="Password"
                    disabled={enableLogin}
                    onChange={(event) => setLoginDataPassword(event.target.value)}
                    required>
                </Input>
            </FieldArea>
            <Button
                type='submit'
                disabled={enableLogin}>{(!enableLogin) ? "Entrar" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}
            </Button>
            <Link to='/signUp'>
                <Button>Não tem uma conta? Cadastre-se!</Button>
            </Link>
                
        </MainContainer>
    )
}

export default Login;