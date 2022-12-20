import axios from "axios";
import Header from "../../Header";
import Context from "../../UserDataContext";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WeekDayButtons = ({habitsRequest, setHabitsRequest, possibleToClick}) =>{
    const DAYS = [
        {id: 0, day:"D"},
        {id: 1, day:"S"},
        {id: 2, day:"T"},
        {id: 3, day:"Q"},
        {id: 4, day:"Q"},
        {id: 5, day:"S"},
        {id: 6, day:"S"},
    ];

    function click(id){
        const days = habitsRequest.days;
        if (days.includes(id)) {
          const filterDays = days.filter((days) => days !== id);
          setHabitsRequest({ ...habitsRequest, days: filterDays });
        } else {
          setHabitsRequest({ ...habitsRequest, days: [...days, id] });
        }
    }

    console.log(habitsRequest.days);

    return(
        <WeekDayContainer>
                {DAYS.map((e) => (
                <DaysButton
                  key={e.id}
                  type='button'
                  id={e.id}
                  onClick={() => (possibleToClick ? click(e.id) : false)}
                  days={habitsRequest.days}>
                    {e.day}
                </DaysButton>
                ))}

        </WeekDayContainer>

    )
}

const WeekDayContainer=styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const DaysButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  background: ${({ days, id }) => (days.includes(id) ? "#CFCFCF" : "white")};
  color: ${({ days, id }) => (days.includes(id) ? "white" : "#DBDBDB")};
  margin: 0px 5px 0px 5px;
`
export default WeekDayButtons;