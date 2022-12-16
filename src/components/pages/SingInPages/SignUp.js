import axios from "axios"
import React from "react"
import styled from "styled-components"
import {useNavigate, Link} from 'react-router-dom'
import { FieldArea, MainContainer,Input, Button } from "./SingInStyled"
import { ThreeDots } from "react-loader-spinner"

const SignUp = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");
    const [enableButton, setEnableButton] = React.useState(false);

    function createAccount(e){
        e.preventDefault();
        setEnableButton(true);
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const accountDetails = {email:email, name:name, image:image, password:password};
        const accountPromise = axios.post(URL, accountDetails);
        accountPromise.then((response) =>{
            alert("Cadastro realizado!");
            navigate("/");
        })
        accountPromise.catch((error) =>{
            alert(error.response.data.message);
            setEnableButton(false);
        })
        console.log(accountDetails);
    }


    return(
        <MainContainer>
            <h1>Track It</h1>
            <FieldArea onSubmit={createAccount}>
            <Input
                    type="email"
                    value={email}
                    placeholder="Email"
                    disabled=""
                    onChange={(event) => setEmail(event.target.value)}
                    required>
                </Input>
                <Input
                    type="password"
                    value={password}
                    placeholder="Password"
                    disabled=""
                    onChange={(event) => setPassword(event.target.value)}
                    required>
                </Input>
                <Input
                    type="name"
                    value={name}
                    placeholder="Nome"
                    disabled=""
                    onChange={(event) => setName(event.target.value)}
                    required>
                </Input>
                <Input
                    type="url"
                    value={image}
                    placeholder="URL da Foto"
                    disabled=""
                    onChange={(event) => setImage(event.target.value)}
                    required>
                </Input>
                <Button
                type="submit"
                >{(!enableButton) ? "Cadastrar" :
                <ThreeDots
                    width="13"
                    height="13"
                    radius="9"
                    color='FFFFFF'></ThreeDots>}</Button>
            </FieldArea>
            <Link to="/">
                <p>Já tem uma conta? Faça Login!</p>
            </Link>
        </MainContainer>
    )
}

export default SignUp