import styled from 'styled-components'
import React from "react";
import axios from 'axios';
import {ThreeDots } from 'react-loader-spinner'
import {useNavigate, Link} from 'react-router-dom'
import { Input, Button, LoginFieldArea, LoginMainContainer, MainContainer,FieldArea } from './SingInStyled';

const Login = ({setUserData}) => {
    const navigate = useNavigate();
    const [enableLogin, setEnableLogin] = React.useState(false)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    function login(event){
        event.preventDefault();
        setEnableLogin(true);
        const loginData = {email:email, password:password}
        const loginPromise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", loginData);
        loginPromise.then((response) => {
            setUserData(response.data);
            navigate("/Today");
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
                    value={email}
                    placeholder="Email"
                    disabled={enableLogin}
                    onChange={(event) => setEmail(event.target.value)}
                    required>
                </Input>
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    disabled={enableLogin}
                    onChange={(event) => setPassword(event.target.value)}
                    required>
                </Input>
                <Button
                type='submit'
                disabled={enableLogin}>{(!enableLogin) ? "Entrar" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}
                </Button>
            </FieldArea>
            <Link to='/signUp'>
                <Button>Não tem uma conta? Cadastre-se!</Button>
            </Link>
                
        </MainContainer>
    )
}

export default Login;