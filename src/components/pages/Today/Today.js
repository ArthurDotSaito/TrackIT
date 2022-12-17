import axios from "axios";
import styled from "styled-components";
import { useContext } from "react";
import Context from "../../Context";
import Header from "../../Header";

const Today = () =>{

    return(
        <TodayContainer>
            <Header></Header>
        </TodayContainer>
    )
}

const TodayContainer=styled.main`
`

export default Today;