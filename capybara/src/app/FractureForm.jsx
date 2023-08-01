"use client"
import React, { useState } from 'react';
import FractureLocationSelect from './FractureLocationSelect';
import FractureTypeSelect from './FractureTypeSelect';
import  Grid  from '@mui/material/Grid';
import TextField from '@mui/material/TextField'

export default function FractureForm({risk_group}) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [procedure, setProcedure] = useState("Recommended Procedure")

  const checkSubtroch = (selectedLocation) =>{
    console.log(selectedLocation)
    if (selectedLocation == 'S' )
    {
      setProcedure("Long Nail")
    }
  }

  const calcProcedure = (selectedType) => {
    if (selectedType == 'n' )
    {
      setProcedure ("CRPP")

    } 
    else if (selectedType == 'd')
    {
      if (risk_group == "Q1: Low Risk" || risk_group== "Q2: Mild Risk" )
      {
        setProcedure("THA")
      } 
      else if (risk_group == "Q3: Moderate Risk" || risk_group== "Q4: Highest Risk")
      {
        setProcedure("CRPP")
      }
    } 
    else if (selectedType == 'S') 
    {
      setProcedure("Sliding hip screw (SHS) or Short Nail")
    } 
    else if (selectedType == "U")
    {
      setProcedure("Short Nail")
    } 
    else if (selectedType == "R")
    {
      setProcedure("Short or Long Nail")
    }
  };

  return (
    <Grid container item xs= {5} direction = "column">
      
      <FractureLocationSelect onSelect={setSelectedLocation} checkSubtroch = {checkSubtroch} />
      {selectedLocation !== "S" && <FractureTypeSelect selectedLocation={selectedLocation} setSelectedType = {setSelectedType} calcProcedure = {calcProcedure} />}
      <hr/>
          <Grid style= {{marginTop: '20px', marginBottom: '20px'}}>
              <TextField
                    fullWidth id="outlined-read-only-input"
                    value= {procedure}
                    label = "procedure"
                    InputProps={{
                    readOnly: true,
                    sx: { backgroundColor: '#eaecef'},
                    }}
              />
          </Grid>
          
    </Grid>
  );
}
