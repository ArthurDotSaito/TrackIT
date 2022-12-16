import axios from "axios"
import React from "react"
import styled from "styled-components"
import {useNavigate, Link} from 'react-router-dom'
import { FieldArea, MainContainer,Input } from "./SingInStyled"

const SignUp = () =>{
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [image, setImage] = React.useState("");

    return(
        <MainContainer>
            <h1>Track It</h1>
            <FieldArea>
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
            </FieldArea>
        </MainContainer>
    )
}

export default SignUp