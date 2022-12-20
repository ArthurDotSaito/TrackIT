import axios from "axios";
import Header from "../../Header";
import { UserDataContext } from "../../UserDataContext";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddHabits from "./AddHabits.js";
import ShowHabits from "./ShowHabits";

const Habits = () =>{
    const user = useContext(UserDataContext);
    const navigate = useNavigate();
    const [habitList, setHabitList] = React.useState([]);
    const [newHabit, setNewHabit] = React.useState(true);
    console.log(user);

    function getHabits(token) {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
          headers: { Authorization: `Bearer ${token}` },
        });
        return promise;
      }

      function updateHabits(setListHabit, token) {
        const promise = getHabits(token);
        promise.then((response) => setListHabit(response.data));
      }

     useEffect(() =>{
        if(!user.token){
            alert("Cadastre-se ou faça o Login!")
            navigate("/");
        }else{
            updateHabits(setHabitList, user.token)
        }
    }) 

    return(
        <>
            <Header></Header>
            <HabitPageContainer className="habitPageContainer">
                <HeaderMenu className="headerMenu">
                    <h1>Meus hábitos</h1>
                    <AddHabitButton className="addHabitButton"
                        type="button"
                        value="+"
                        onClick={() => setNewHabit(!newHabit)}
                        >
                    </AddHabitButton>
                </HeaderMenu>
                <AddHabits
                    setHabitList={setHabitList}
                    newHabit={newHabit}
                    setNewHabit={setNewHabit}>
                </AddHabits>
                {habitList.length == 0 ?(
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
                    começar a trackear!</p>
                ) : (
                    <ShowHabits habitList={habitList} setHabitList={setHabitList}>

                    </ShowHabits>
                )}

            </HabitPageContainer>
        </>

    )
}

const HabitPageContainer=styled.main`
    box-sizing: border-box;
    padding: 70px 0 110px 0;
    width: 100%;
    min-height: 100vh;
    background-color: #E5E5E5;
    display: flex;
    align-items: center;
    flex-direction: column;
    p{
        margin-top: 28px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

`
const HeaderMenu=styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  h1 {
    width: 90%;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 20px;
  }
`
const AddHabitButton=styled.input`
    width: 40px;
    height: 40px;
    background: #52B6FF;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 27px;
    line-height: 34px;
    color: #FFFFFF;
    margin: 20px 20px;
`

export default Habits;