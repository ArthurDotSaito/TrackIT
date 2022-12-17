import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterMenu = () =>{
    return(
        <FooterContainer>
            <Link to="/habits">
                <UL>Habitos</UL>
            </Link>
            <Link to="/today">
                 <CircleBar type="button" value="Hoje"></CircleBar>
            </Link>
            <Link to="/history">
                <UL>Historico</UL>
            </Link>
        </FooterContainer>
    );
}

const FooterContainer=styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-sizing: border-box;
    padding: 0px 30px;
    cursor: pointer;
`

const UL = styled.p`
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400px;
    font-size: 18px;
    line-height: 22px;
    color: #52B6FF;
    cursor: pointer;
`

const CircleBar = styled.input`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #52B6FF;
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
    margin-bottom: 35px;
    cursor: pointer;
`

export default FooterMenu