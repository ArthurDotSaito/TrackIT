import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Login from "./components/pages/SingInPages/Login";
import SignUp from "./components/pages/SingInPages/SignUp";
import Context from "./components/Context"

function App() {
  const [userData,setUserData] = React.useState({});

  console.log(userData);

  return(
    <BrowserRouter>
      <AppMainContainer>
        <GlobalStyle></GlobalStyle>
        <Context.Provider value={userData}>
          <Routes>
              <Route path="/" element={<Login setUserData={setUserData}></Login>}/>
              <Route path="/signUp" element={<SignUp></SignUp>}/>
              
          </Routes>
        </Context.Provider>
      </AppMainContainer>
    </BrowserRouter>
  )
}

const AppMainContainer = styled.main`
  width: 100%;
`

export default App;
