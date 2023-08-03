"use client"
import React, {useEffect, useState} from "react"
import BasicDatePicker from "../design_helpers/BasicDatePicker"
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'



export default function AgeCalculator(props){
  //Age is passed in from page.js
  const [age,setAge] = [props.age,props.setAge]  
  //The DOB used to calculate age
  const [dob, setDOB] = useState('');
  
  //handler for button
  const handleDOBChange = (event) => {
    setDOB(event);
  };

  

  const calculateAge = () => {
    //Get current Date and turns DOB into a date
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

    //sets age 
    setAge(calculatedAge.toString());
  };

  //runs calculate age any time DOB is changed
  useEffect(()=>{
    if(dob){
      calculateAge();
    }
  },[dob])

    return(
      // sets up the spaceing so the two boxes are in the middle
      <div style={{ display: 'flex', justifyContent: 'center' ,width: '100%' }}>
        <Grid container spacing={2} justifyContent = "center" alignItems={"center"}  style={{ marginTop: '15px', marginRight: '4px',marginLeft: '4px'  }}>
    
          <Grid item xs={5.25}>
            {/* the actual dob picker */}
            <BasicDatePicker dob = {dob} handleDOBChange={handleDOBChange}></BasicDatePicker>
          </Grid>
          <Grid item xs={5.25}>

            <TextField
            // Text field for age
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
