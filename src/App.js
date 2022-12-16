import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components'
import React from "react";
import GlobalStyle from "./components/GlobalStyles";
import Login from "./components/pages/Login";

function App() {


  return(
    <BrowserRouter>
      <AppMainContainer>
        <GlobalStyle> 
          <Routes>
            <Route path="/" element={<Login></Login>}/>

          </Routes>
        </GlobalStyle>
      </AppMainContainer>
    </BrowserRouter>
  )

}

const AppMainContainer = styled.main`
`

export default App;
