'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import BasicSelect from './BasicSelect'
import BasicDatePicker from './BasicDatePicker'
import Grid from '@mui/material/Grid'
import { Select } from '@mui/material'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import StyledBox from './StyledBox'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CciModal from './CciModal'
import AisScores from './AisScores'

import AgeCalculator from './AgeCalculator'

import Head from "next/head"
import NextHead from './NextHead'



import MrnField from './MrnField'
import FractureForm from './FractureForm'
import GcsScores from './GcsScores'




export default function Home() {
  const [gcs_total, setGcsTotal] = useState(-1);
  const [ais_head_neck, setAisHeadNeck] = useState(-1);
  const [ais_chest, setAisChest] = useState(-1);
  const [ais_extrem, setAisExtrem] = useState(-1);

  console.log(ais_extrem)




  return (
    <div>
    <NextHead/>
    <main>
      <div
        className={styles.gradientBackground}
        // You can adjust the gradient colors and angle as needed
        style={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: '8px', // Optional: add border-radius for rounded corners
          padding: '20px', // Optional: add padding to the container
        }}
      >

  <Grid style={{ marginTop: '50px' }}/>
  <StyledBox> 

      <Grid container spacing={2} justifyContent = "center">

        <Grid item xs={10} style={{ marginTop: '30px' }}>

          <Typography align="center" variant="h4" gutterBottom> STTGMA </Typography>
        </Grid>

          <Grid item xs={10.5}>
              <MrnField />
          </Grid>
          <AgeCalculator/>
        </Grid>
          
          
          {/* GCS Box */}
        <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
          <Box sx={{ paddingTop: '20px', width: '100%'}}>

          <StyledBox backgroundColor="#f8f9fa">
            <Grid item xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>

              <Typography align="center"> GCS Score </Typography>
            </Grid>

            <GcsScores gcs_total={gcs_total} setGcsTotal={setGcsTotal} /> 
            
        </StyledBox>
      </Box>
      </Grid>
      {/* CLOSE GCS Box */}

      

      {/* AIS Box */}
       < AisScores 
          setAisHeadNeck={setAisHeadNeck}
          setAisChest={setAisChest}
          setAisExtrem = {setAisExtrem}
        />

      {/* CLOSE AIS Box */}

      {/* ASA */}
      <Grid container justifyContent = "center" alignItems = "center" sx= {{marginTop: '40px'}}>
        <Grid item xs={10.5}>
          <BasicSelect
            label = {"ASA"}
            menuItems = {["1 - A normal healthy patient",
              "2 - A patient with mild systemic disease",
              "3 - A patient with severe systemic disease",
              "4 - A patient with severe systemic disease that is a constant threat to life",
              "5 - A moribund patient who is not expected to survive without the operation",
              "6 -A declared brain-dead patient whose organs are being removed for donor purposes"]}
          />
        </Grid>
      </Grid>

      {/* CCI, AMB, COVID */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        

        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={3.5}>
                   <CciModal></CciModal>
                </Grid>
                <Grid item xs={3.5}>
                  <BasicSelect
                    label = {"Amb Status"}
                    menuItems = {["1 - Community ambulator",
                    "2 - Household ambulator",
                    "3 - Minimal/non-ambulatory"]}
                  />
                </Grid>
                <Grid item xs={3.5}>
                  <BasicSelect
                    label = {"Covid"}
                    menuItems = {["Negative", "Positive/Suspected"]}
                  /> 
                </Grid>
        </Grid>
        
      </Box>
      </Grid>

      {/* CLOSE CCI, AMB, COVID */}

      {/* CAlCULATE STTGMA AND RISK LEVEL  */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      

        <Grid container spacing = {2} justifyContent = "center">
                <Grid item xs={3.5}>
                  <Button fullWidth variant="contained" size="large" color = "success" sx={{height: '56px', backgroundColor: '#71D57F'}}>
                      Calculate STTGMA
                  </Button>
                </Grid>
                <Grid item xs={3.5}>
                  <TextField
                    fullWidth id="outlined-read-only-input"
                    defaultValue="STTGMA Score"

                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: '#eaecef'},
                    }}
                    />
                </Grid>
                <Grid item xs={3.5}>
                    <TextField
                      fullWidth id="outlined-read-only-input"
                      defaultValue="Risk Level"

                      InputProps={{
                        readOnly: true,
                        sx: { backgroundColor: '#eaecef'},
                      }}
                      />
                </Grid>
        </Grid>

      </Grid>





  </StyledBox>  {/* Close STTGMA CALC BOX */}

  <Grid style={{ marginTop: '20px' }}/>

  {/* Procedure BOX */}
  <StyledBox>
        <Grid item xs={10} style={{ marginTop: '30px' ,marginBottom: '30px'}}>
          <Typography align="center" variant="h4" gutterBottom> Recommended Procedure </Typography>
        </Grid>
      
      <Grid container spacing = {2} style={{ marginBottom: '20px'}} justifyContent="left">
        <Grid item xs = {7} sm = {7}>
          <Typography align="left" color = "#BEBEBE" style= {{marginLeft: '20px'}}> X-RAY Upload </Typography>
          <StyledBox backgroundColor="#f8f9fa" borderRadius= '10px'  width= '100%' height= '100%' >
            <div style={{ position: 'relative', width: '100%', height: '100%', paddingTop: '100%' }}>
              <Image src = "/images/X-ray_of_hip.jpg" objectFit="layout" layout= "fill" alt = "XRay"></Image>
            </div> 
           </StyledBox>
        </Grid>

        
        <Grid container item xs= {5} direction = "column">
          <FractureForm/>
          <hr/>
          <Grid style= {{marginTop: '20px', marginBottom: '20px'}}>
              <TextField
                    fullWidth id="outlined-read-only-input"
                    defaultValue="Recommended Procedure"
                    InputProps={{
                    readOnly: true,
                    sx: { backgroundColor: '#eaecef'},
                    }}
              />
          </Grid>
        </Grid>
        
      </Grid>
    </StyledBox> 
    {/* Close Procedure Box */}

      </div> {/* end gradient :) */}
    </main>
    </div>
  )
}
