import axios from "axios";
import Header from "../../Header";
import Context from "../../Context";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WeekDayButtons from "./WeekDayButtons";

const AddHabits = ({setHabitList, newHabit, setNewHabit}) =>{
    const [habitsRequest, setHabitsRequest] = React.useState({name:"name", days:[]});
    const [enableEvent, setEnableEvent] = React.useState(null);

    function keyboardEvent(e){
        setHabitsRequest({...habitsRequest, name:e})
    }
    
    return(
        <HabitForm> 
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
    justify-content: space-between;
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

export default AddHabits;