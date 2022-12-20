import axios from "axios";
import { UserDataContext } from "../../UserDataContext";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import WeekDayButtons from "./WeekDayButtons";
import trashBin from "../../../assets/trashBin.svg"



const ShowHabits = ({habitList, setHabitList}) =>{
    const userData = useContext(UserDataContext);

    function deleteHabits(token, id) {
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return promise;
      }
   
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

    function deleteHabit(e){
        const deleteHabitConfirmation = window.confirm("Gostaria de deletar esse hábito?");
        if(deleteHabitConfirmation){
            const promise = deleteHabits(userData.token, e)
            promise.then(() => updateHabits(setHabitList, userData.token))
        }
    }


    return(
        <>
            {habitList.map((element) => (
                <HabitField key={element.id}>
                    <section className="habitTitle">
                        <h1>{element.name}</h1>
                        <img src={trashBin} onClick={() =>deleteHabit(element.id)}></img>
                    </section>
                    <WeekDayButtons
                        habitsRequest={{name:element.name, days:element.days}}
                        possibleToClick={false}>
                    </WeekDayButtons>
                </HabitField>
            ))}
        </>
    )
}

const HabitField = styled.section`
    box-sizing: border-box;
    width: 90%;
    max-width: 700px;
    height: 100px;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 17px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
    .habitTitle{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        color: #666666;
        font-size: 20px;
        margin-bottom: 8px;
    }
    img{
        
    }
`

export default ShowHabits;