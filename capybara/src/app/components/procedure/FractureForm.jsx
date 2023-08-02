"use client"
import React, { useState } from 'react';
import  Grid  from '@mui/material/Grid';
import FractureLocationSelect from './FractureLocationSelect';
import FractureTypeSelect from './FractureTypeSelect';
import ProcedureSelect from '../../ProcedureSelect';


export default function FractureForm({risk_group}) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [procedureRec, setProcedureRec] = useState(["Recommended Procedure"])
  const [backgroundColor, setBackgroundColor] = useState("white")

  const handleProcedureChoice = (selectedProcedure) => {
    console.log("selected: " + selectedProcedure)
    if (selectedType != "" || selectedLocation == 'S')
    { 
      setBackgroundColor("#FFFDA3")
      for (let i = 0; i < procedureRec.length; i++) {
        console.log(procedureRec[i])
        if (procedureRec[i] == selectedProcedure)
        {
          setBackgroundColor("#E5FCE9")
        }
      } 
    }
  };

  const checkSubtroch = (selectedLocation) =>{
    setBackgroundColor("white")
    console.log(selectedLocation)
    if (selectedLocation == 'S' )
    {
      setProcedureRec(["Long Nail"])
    }
  }

  const calcProcedureRec = (selectedType) => {
    setBackgroundColor("white")
    if (selectedType == 'n' )
    {
      setProcedureRec (["CRPP"])

    } 
    else if (selectedType == 'd')
    {
      if (risk_group == "Q1: Low Risk" || risk_group== "Q2: Mild Risk" )
      {
        setProcedureRec(["THA"])
      } 
      else if (risk_group == "Q3: Moderate Risk")
      {
        setProcedureRec(["Hemi"])
      }
      else if (risk_group== "Q4: Highest Risk")
      {
        setProcedureRec(["Hemi", "CRPP"])
      }
      
    } 
    else if (selectedType == 'S') 
    {
      setProcedureRec(["Sliding Hip Screw", "Short Nail"])
    } 
    else if (selectedType == "U")
    {
      setProcedureRec(["Short Nail"])
    } 
    else if (selectedType == "R")
    {
      setProcedureRec(["Short Nail", "Long Nail"])
    }
  };

  return (
    <Grid container item xs= {5} direction = "column">
      
      <FractureLocationSelect onSelect={setSelectedLocation} checkSubtroch = {checkSubtroch} />
      {selectedLocation !== "S" && <FractureTypeSelect selectedLocation={selectedLocation} setSelectedType = {setSelectedType} calcProcedureRec = {calcProcedureRec} />}
      <hr/>
          <Grid style= {{marginTop: '20px', marginBottom: '20px'}}>
            <ProcedureSelect
              label = "Procedure"
              menuItems = {["CRPP", "THA", "Hemi" , "Sliding Hip Screw", "Short Nail", "Long Nail"]}
              procedureRec = {procedureRec}
              backgroundColor = {backgroundColor}
              onChange = {handleProcedureChoice}
            />
          </Grid>        
          
    </Grid>
  );
}
