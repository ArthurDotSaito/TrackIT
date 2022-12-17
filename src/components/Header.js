import Context from "./Context";
import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
    const userData = useContext(Context);
    return(
        <HeaderContainer>
            <Link to = "/">
                <h1>Track It</h1>
            </Link>
            <img src={userData.image} alt="profile"></img>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.main`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.15);
    h1{
        font-family: "Playball";
        font-weight: 400;
        font-size: 39px;
        line-height: 49px;
        text-align: center;
        color: #FFFFFF;
        margin-left: 10px ;
    }
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        box-sizing: border-box;
        border: 1px solid black;
        margin-right: 10px;
    }
`

export default Header;