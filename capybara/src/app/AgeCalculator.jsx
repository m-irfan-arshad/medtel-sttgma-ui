"use client"
import React, {useEffect, useState} from "react"
import BasicDatePicker from "./BasicDatePicker";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'



export default function AgeCalculator(){
    
  const [dob, setDOB] = useState('');
  const [age, setAge] = useState('Age');

  const handleDOBChange = (event) => {
    setDOB(event);
  };

  

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    let calculatedAge = currentDate.getFullYear() - dobDate.getFullYear();

    // Check if the birthday has occurred this year or not
    const currentMonth = currentDate.getMonth();
    const dobMonth = dobDate.getMonth();
    const currentDay = currentDate.getDate();
    const dobDay = dobDate.getDate();

    if (currentMonth < dobMonth || (currentMonth === dobMonth && currentDay < dobDay)) {
      calculatedAge--;
    }
    setAge(calculatedAge.toString());
  };

  useEffect(()=>{
    if(dob){
      calculateAge();
    }
  },[dob])

    return(
    <div style={{justifyContent: 'center'}}>
    <Grid container spacing={2} justifyContent = "center" alignItems="center" style={{ marginTop: '15px' }}>
          <Grid item xs={5.25}>
            <BasicDatePicker dob = {dob} handleDOBChange={handleDOBChange}></BasicDatePicker>
          </Grid>
          <Grid item xs={5.25}>
            <TextField
            fullWidth id="outlined-read-only-input"
            defaultValue={age}
            label = "age"

            InputProps={{
              readOnly: true,
              sx: { backgroundColor: '#F5F5F5'},
            }}
            />

          </Grid>
      </Grid>
    </div>
    )
}
