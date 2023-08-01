"use client"
import React, {useEffect, useState} from "react"
import BasicDatePicker from "./BasicDatePicker";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'



export default function AgeCalculator(props){
  const [age,setAge] = [props.age,props.setAge]  
  const [dob, setDOB] = useState('');
  

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
    console.log(typeof setAge)
    setAge(calculatedAge.toString());
  };

  useEffect(()=>{
    if(dob){
      calculateAge();
    }
  },[dob])

    return(
      <div style={{ display: 'flex', justifyContent: 'center' ,width: '100%' }}>
        <Grid container spacing={2} justifyContent = "center" alignItems={"center"}  style={{ marginTop: '15px', marginRight: '4px',marginLeft: '4px'  }}>
    
          <Grid item xs={5.25}>
            <BasicDatePicker dob = {dob} handleDOBChange={handleDOBChange}></BasicDatePicker>
          </Grid>
          <Grid item xs={5.25}>

            <TextField
              fullWidth id="outlined-read-only-input"
              defaultValue= {age}
              label = "age"
              InputProps={{
                readOnly: true,
                sx: { backgroundColor: '#eaecef'},
              }}
            />
          </Grid>
        </Grid>
      </div>

    )
}
