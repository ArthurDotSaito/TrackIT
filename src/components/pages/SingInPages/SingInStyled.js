import styled from "styled-components"

export const MainContainer = styled.main`
    width:100%;
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
    a{
        width: 100%;
        display: flex;
        justify-content: center;
    }
`
export const FieldArea = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
box-sizing: border-box;
margin: 5px 0px 0px 0px;
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

export const Button = styled.button`
width: 60%;
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
cursor: pointer;
`
