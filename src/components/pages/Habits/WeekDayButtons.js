import axios from "axios";
import Header from "../../Header";
import Context from "../../Context";
import React, { useEffect,useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const WeekDayButtons = ({habitsRequest, setHabitsRequest, possibleToClick}) =>{
    const DAYS = [
        {id: 0, day:"D"},
        {id: 0, day:"S"},
        {id: 0, day:"T"},
        {id: 0, day:"Q"},
        {id: 0, day:"Q"},
        {id: 0, day:"S"},
        {id: 0, day:"S"}
    ]

    function click(e){
        const dayList = habitsRequest.days;
        if (dayList.includes(e)) {
          const filterDays = dayList.filter((days) => days !== e);
          setHabitsRequest({ ...habitsRequest, days: filterDays });
        } else {
          setHabitsRequest({ ...habitsRequest, days: [...dayList, e] });
        }
    }

    return(
        <>
            {DAYS.map((e) => <DaysButton
                key={e.id}
                type='button'
                id={e.id}
                value={e.day}
                days={habitsRequest.days}
                onClick={() => (possibleToClick ? click(e.id):false)}/>
                )}
        </>
    )
}

const DaysButton = styled.input`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  background: ${({ days, id }) => (days.includes(id) ? "#CFCFCF" : "white")};
  color: ${({ days, id }) => (days.includes(id) ? "white" : "#DBDBDB")};
`
export default WeekDayButtons;