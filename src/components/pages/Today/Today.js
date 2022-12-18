import axios from "axios";
import styled from "styled-components";
import React, { useContext } from "react";
import Context from "../../UseDataContext";
import Header from "../../Header";
import FooterMenu from "../../FooterMenu";

const Today = () =>{
    const WEEK = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sabado"];
    const date = new Date();
    const day = date.getDay();

    return(
        <TodayContainer>
            <Header></Header>
            <FooterMenu/>
            <h2>{WEEK[day]}, {date.toLocaleDateString()}</h2>
        </TodayContainer>
    )
}

const TodayContainer=styled.main`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #E5E5E5;
    margin:95px 0px 110px 0px;
    h2{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }
`

export default Today;