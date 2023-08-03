//calls all the drop downs in the procedure box
"use client"
import React, { useState } from 'react';
import {Grid, TextField}  from '@mui/material';
import FractureLocationSelect from './FractureLocationSelect';
import FractureTypeSelect from './FractureTypeSelect';
import ProcedureSelect from './ProcedureSelect';


export default function FractureForm({risk_group}) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [procedureRec, setProcedureRec] = useState(["Recommended Procedure"])
  const [backgroundColor, setBackgroundColor] = useState("white")

  // set procedure dropdown background depending on choice
  const handleProcedureChoice = (selectedProcedure) => {
    // only set color if FractureType is not blank or selectedLocation was Subtrochanteric 
    if (selectedType != "" || selectedLocation == 'S')
    { 
      //default background to yellow warning 
      setBackgroundColor("#FFEEA1")
      //check if selectedProcedure matches any of the values in the reccomended procedures array 
      for (let i = 0; i < procedureRec.length; i++) {
        if (procedureRec[i] == selectedProcedure)
        {
          //if selectedProcedure matches reccommended set the background to green 
          setBackgroundColor("#E5FCE9")
        }
      } 
    }
  };

  //check if Subtroch was selected >> skip FractureType 
  const checkSubtroch = (selectedLocation) =>{
    setBackgroundColor("white")
    if (selectedLocation == 'S' )
    {
      setProcedureRec(["Long Nail"])
    }
  }

  //calculate reccomended procedure 
  const calcProcedureRec = (selectedType) => {
    setBackgroundColor("white")

    //FEMORAL NECK
    // if fracture type = nondisplaced
    if (selectedType == 'n' )
    {
      setProcedureRec (["CRPP"])

    } 
    // if fracture type = displaced 
    else if (selectedType == 'd')
    {
      // if risk_group from STTGMA score is Q1 or Q2
      if (risk_group == "Q1: Low Risk" || risk_group== "Q2: Mild Risk" )
      {
        setProcedureRec(["THA"])
      } 
      // if risk_group from STTGMA score is Q3
      else if (risk_group == "Q3: Moderate Risk")
      {
        setProcedureRec(["Hemi"])
      }
      // if risk_group from STTGMA score is Q4
      else if (risk_group== "Q4: Highest Risk")
      {
        setProcedureRec(["Hemi", "CRPP"])
      }
    } 

    // INTERTROCHANTERIC
    // if fracture type = Stable
    else if (selectedType == 'S') 
    {
      setProcedureRec(["Sliding Hip Screw", "Short Nail"])
    } 
    //if fracture type = Unstable
    else if (selectedType == "U")
    {
      setProcedureRec(["Short Nail"])
    } 
    //if fracture type = Reverse Obliquidity
    else if (selectedType == "R")
    {
      setProcedureRec(["Short Nail", "Long Nail"])
    }

    // * Subtroch accounted for in checkSubtroch
  };

  return (
    <Grid container item xs= {5} direction = "column">
      
      {/* Draw Fracture Location Select  */}
      <FractureLocationSelect setSelectedLocation={setSelectedLocation} checkSubtroch = {checkSubtroch} />
      {/* Draw Fracture Type select if selectedLocation is not Subtrochanteric */}
      {selectedLocation !== "S" && <FractureTypeSelect selectedLocation={selectedLocation} setSelectedType = {setSelectedType} calcProcedureRec = {calcProcedureRec} />}
      <hr/>
      {/* Draw Procedure Select */}
      <Grid style= {{marginTop: '20px', marginBottom: '20px'}}>
        <ProcedureSelect
          label = "Procedure"
          menuItems = {["CRPP", "THA", "Hemi" , "Sliding Hip Screw", "Short Nail", "Long Nail"]}
          procedureRec = {procedureRec}
          backgroundColor = {backgroundColor}
          onChange = {handleProcedureChoice}
        />
      </Grid>  

      {backgroundColor == "#FFEEA1" &&
      <TextField
          require="true"
          id="outlined-multiline-static"
          label="Reason for chosen procedure"
          multiline
          rows={4}
      /> }  
          
    </Grid>
  );
}
