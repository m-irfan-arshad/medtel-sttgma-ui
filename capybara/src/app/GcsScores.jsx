"use client"

import BasicSelect from "./BasicSelect";
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box'; // Import Box component from MUI
import Typography from '@mui/material/Typography'; // Import Typography component from MUI
import TextField from '@mui/material/TextField'; // Import TextField component from MUI

export default function GcsScores({ onSelect }) {

    return (
    {/* GCS Box */}
          <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      <Box sx={{ paddingTop: '20px', width: '100%'}}>

        <StyledBox backgroundColor="#f8f9fa">
            <Grid item xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>

              <Typography align="center"> GCS Score </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={3}>
                  <BasicSelect
                    label = {"eye opening response"}
                    menuItems = {["4 - spontaneously",
                    "3 - to speech",
                    "2 - to pain",
                    "1 - no response"]}
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
        </StyledBox>
      </Box>
      </Grid>
        
)
}