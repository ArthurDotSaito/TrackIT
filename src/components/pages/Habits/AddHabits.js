import axios from "axios";
import Header from "../../Header";
import { UserDataContext } from "../../UseDataContext";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WeekDayButtons from "./WeekDayButtons";

const AddHabits = ({setHabitList, newHabit, setNewHabit}) =>{
    const [habitsRequest, setHabitsRequest] = React.useState({name:"", days:[]});
    const [enableEvent, setEnableEvent] = React.useState(null);
    const {userData}=useContext(UserDataContext);
    console.log(userData);
    function keyboardEvent(e){
        setHabitsRequest({...habitsRequest, name:e})
    }

    function getHabits(token) {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", {
          headers: { Authorization: `Bearer ${token}` },
        });
        return request;
      }

      function updateHabits(setListHabit, token) {
        const request = getHabits(token);
        request.then((response) => setListHabit(response.data));
      }

      function saveHabits(token, habit) {
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit//habits", habit, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return request;
      }



    function sendRequestAddHabit(e){
        e.preventDefault();
        const getHabitsRequest = saveHabits(userData.token, habitsRequest);
        setEnableEvent(getHabitsRequest);
        getHabitsRequest.then(()=>{
            updateHabits(setHabitsRequest, userData.token);
            setEnableEvent(null);
            setHabitsRequest({name:"", days:[]});
            setNewHabit(!newHabit);
        });
        getHabitsRequest.catch((response) =>{
            alert(`Não foi possível salvar esse Hábito! ${response.data}`);
            setEnableEvent(null);
        })

    }
    
    return(
        <HabitForm onSubmit={sendRequestAddHabit}> 
            <TextInput
                type='text'
                placeholder="nome do hábito"
                value={habitsRequest.name}
                onChange={(event) => keyboardEvent(event.target.value)}
                disabled={enableEvent !== null ? true: false}
                >
            </TextInput>
            <WeekDayButtons
                habitsRequest={habitsRequest}
                setHabitsRequest={setHabitsRequest}
                possibleToClick = {enableEvent !== null ? true: false}
                >
            </WeekDayButtons>
            <ButtonContainer>
                <SubmitButton 
                    onClick={() => setNewHabit(false)}
                    type="button"
                    value="Cancelar">
                </SubmitButton>
                <SubmitButton 
                    type="submit"
                    value="Salvar">
                </SubmitButton>

            </ButtonContainer>
        </HabitForm>
    )

}

const HabitForm=styled.form`
    box-sizing: border-box;
    width: 90%;
    max-width: 700px;
    height: 180px;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    margin-bottom: 20px;
`

const TextInput = styled.input`
    box-sizing: border-box;
    width: 100%;
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

const ButtonContainer = styled.section`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const SubmitButton = styled.input`
    box-sizing: border-box;
    margin: 0 5px;
    width: 25%;
    height: 30px;
    border: none;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 15px;
    line-height: 20px;
    font-weight: 400;
    color: ${props => props.value === "Cancelar" ? "#52B6FF" : "#FFFFFF"};
    background-color: ${props => props.value === "Cancelar" ? "#FFFFFF" : "#52B6FF"};`

export default AddHabits;