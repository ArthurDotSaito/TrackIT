import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Login from "./components/pages/SingInPages/Login";
import SignUp from "./components/pages/SingInPages/SignUp";
import UserLoginProvider from "./components/UseDataContext"
import Today from "./components/pages/Today/Today";
import Habits from "./components/pages/Habits/Habits";

function App() {
  const [userData,setUserData] = React.useState({});

  console.log(userData);
  console.log(userData.token);

  return(
    <BrowserRouter>
      <AppMainContainer>
        <GlobalStyle></GlobalStyle>
        <UserLoginProvider>
          <Routes>
              <Route path="/" element={<Login setUserData={setUserData}></Login>}/>
              <Route path="/signUp" element={<SignUp></SignUp>}/>
              <Route path="/today" element={<Today></Today>}/>
              <Route path="habits" element={<Habits></Habits>}/>
          </Routes>
        </UserLoginProvider>
      </AppMainContainer>
    </BrowserRouter>
  )
}

const AppMainContainer = styled.main`
  width: 100%;
`

export default App;
