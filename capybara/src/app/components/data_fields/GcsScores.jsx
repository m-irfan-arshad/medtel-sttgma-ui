"use client"

import BasicSelect from "../design_helpers/BasicSelect";
import React, { useState } from 'react';
import {Grid, TextField} from '@mui/material';

export default function GcsScores({ gcs_total, setGcsTotal }) {
    const [selectedEyeOption, setSelectedEyeOption] = useState(0);
    const [selectedVerbalOption, setSelectedVerbalOption] = useState(0);
    const [selectedMotorOption, setSelectedMotorOption] = useState(0);
    const [local_gcs_total, setLocalGcsTotal] = useState(0);


    const handleEyeChange = (selectedEyeOption) => {
        let eye_int = parseInt(selectedEyeOption);
        setSelectedEyeOption(eye_int);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
      };
    const handleVerbalChange = (selectedVerbalOption) => {
        let verbal_int = parseInt(selectedVerbalOption);
        setSelectedVerbalOption(verbal_int);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
      };
    const handleMotorChange = (selectedMotorOption) => {
        let motor_int = parseInt(selectedMotorOption);
        setSelectedMotorOption(motor_int);
        calculateTotalScore(selectedEyeOption, selectedVerbalOption, selectedMotorOption);
    };
    const calculateTotalScore = (eye, verbal, motor) => {
        let eye_int = parseInt(eye);
        let verbal_int = parseInt(verbal);
        let motor_int = parseInt(motor);
        setLocalGcsTotal(eye_int + verbal_int + motor_int);
        setGcsTotal(eye_int + verbal_int + motor_int);
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
                    value= {local_gcs_total}
                    label = "GCS Total"
                    InputProps={{
                    readOnly: true,
                    sx: { backgroundColor: '#eaecef'},
                    }}
                      />
                </Grid>
        </Grid>
    
        
);
}