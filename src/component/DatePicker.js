

import React, { useState } from 'react';
import { Paper, List, ListItem, ListItemText, Button, Card, CardContent, Typography, Stack } from '@mui/material';
import "../style.css"
import moment from "moment";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const DateScrollPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dates, setDates] = useState(getInitialDates(startDate));

  function getInitialDates(start) {
    const initialDates = [];
    for (let i = 0; i < 5; i++) {
      initialDates.push(new Date(start.getTime() + i * 24 * 60 * 60 * 1000));
    }
    return initialDates;
  }

  function handleNextClick() {
    const newStartDate = new Date(startDate.getTime() + 6 * 24 * 60 * 60 * 1000);
    setStartDate(newStartDate);
    setDates(getInitialDates(newStartDate));
  }
console.log('dates',dates);
  return (
    <>
      <div className='row'>
        {dates.map((date, index) => ( 
          <>         
            <div className='col-md-3 m-3  dateCard' >
              <Typography variant="body">{moment(date.toDateString()).format('ll').slice(0,6)}</Typography>
            </div>
             </>       
        ))}
        <div className='col-md-3 m-3  dateCard' onClick={handleNextClick}>
        <ArrowForwardIosIcon/>
       </div>
      </div>
    
    </>
  );
};

export default DateScrollPicker;