import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Login from "./components/pages/Login";

function App() {


  return(
    <BrowserRouter>
      <AppMainContainer>
        <GlobalStyle></GlobalStyle>
          <Routes>
            <Route path="/" element={<Login></Login>}/>
          </Routes>
      </AppMainContainer>
    </BrowserRouter>
  )

}

const AppMainContainer = styled.main`
  width: 100%;
`

export default App;
