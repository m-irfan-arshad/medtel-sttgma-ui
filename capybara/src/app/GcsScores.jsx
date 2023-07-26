"use client"

import BasicSelect from "./BasicSelect";
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; // Import Box component from MUI
import Typography from '@mui/material/Typography'; // Import Typography component from MUI
import TextField from '@mui/material/TextField'; // Import TextField component from MUI

export default function GcsScores() {
    const [selectedEyeOption, setSelectedEyeOption] = useState(0);
    const [selectedVerbalOption, setSelectedVerbalOption] = useState(0);
    const [selectedMotorOption, setSelectedMotorOption] = useState(0);
    const [gcs_total, setGcsTotal] = useState(0);

    const handleEyeChange = (selectedEyeOption) => {
        console.log({selectedEyeOption})
        setSelectedEyeOption(selectedEyeOption);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
      };
    const handleVerbalChange = (selectedVerbalOption) => {
        console.log({selectedVerbalOption})
        setSelectedVerbalOption(selectedVerbalOption);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
      };
    const handleMotorChange = (selectedMotorOption) => {
        console.log({selectedMotorOption})
        setSelectedMotorOption(selectedMotorOption);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
    };
    const calculateTotalScore = (eye, verbal, motor) => {
        setGcsTotal(eye + verbal + motor);
        console.log({gcs_total})
      };

return (
    <Grid container spacing = {2} justifyContent = "center">

            {/* EYE */}
              <Grid item xs={3}>
                  <BasicSelect
                    label = {"eye opening response"}
                    menuItems = {["4 - spontaneously",
                    "3 - to speech",
                    "2 - to pain",
                    "1 - no response"]}
                    onChange={handleEyeChange}
                  /> 
                </Grid>


                <Grid item xs={3}>
                  <BasicSelect
                    label = {"best verbal response"}
                    menuItems = {["5- oriented to time, place, & person",
                      "4 - confused",
                      "3 - inappropriate words",
                      "2 - incomprehensible sounds",
                      "1 - no response"]}
                      onChange={handleVerbalChange}
                  /> 
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect
                    label = {"best motor response"}
                    menuItems = {["6- obeys commands",
                      "5 - moves to localized pain",
                      "4 - flexion withdrawal from pain",
                      "3 - abnormal flexion (decorticate)",
                      "2 - abnormal extension (decerebrate)",
                      "1 - no response"]}
                    onChange={handleMotorChange}
                  /> 
                </Grid>
                <Grid item xs={3}>
                <TextField
                    fullWidth id="outlined-read-only-input"
                    defaultValue="GCS total score"
                    InputProps={{
                    readOnly: true,
                    sx: { backgroundColor: '#eaecef'},
                    }}
                      />
                </Grid>
        </Grid>
    
        
);
}