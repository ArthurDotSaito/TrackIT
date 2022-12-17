import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Login from "./components/pages/SingInPages/Login";
import SignUp from "./components/pages/SingInPages/SignUp";
import Context from "./components/Context"
import Today from "./components/pages/Today/Today";
import Habits from "./components/pages/Habits/Habits";

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
              <Route path="/today" element={<Today></Today>}/>
              <Route path="habits" element={<Habits></Habits>}/>
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
