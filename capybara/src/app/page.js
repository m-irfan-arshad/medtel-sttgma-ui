import Image from 'next/image'
import styles from './page.module.css'
import BasicSelect from './BasicSelect'
import BasicDatePicker from './BasicDatePicker'
import Grid from '@mui/material/Grid'
import { Select } from '@mui/material'
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import StyledBox from './StyledBox'
import DialogSelect from './DialogSelect'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CciModal from './CciModal'




export default function Home() {
  return (
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

  <StyledBox> 

          
      <Grid container spacing={2} justifyContent = "center">
        <Grid xs={10} style={{ marginTop: '20px' }}>
          <Typography align="center" variant="h4" gutterBottom> STTGMA </Typography>
        </Grid>

          <Grid item xs={11}>
                    <TextField
                      required
                      fullWidth
                      id="mrn"
                      label="MRN"
                      name="mrn"
                      autoComplete="family-name"
                    />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent = "center"  style={{ marginTop: '15px' }}>
          <Grid item xs={5}>
            <BasicDatePicker></BasicDatePicker>
          </Grid>
          <Grid item xs={5}>
          <TextField
          fullWidth id="outlined-read-only-input"
          defaultValue="Age"

          InputProps={{
            readOnly: true,
            sx: { backgroundColor: '#F5F5F5'},
          }}
          />
          </Grid>
        </Grid>

      {/* GCS Box */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <StyledBox backgroundColor="#F5F5F5">
            <Grid xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
              <Typography align="center"> GCS Score </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={3}>
                  <BasicSelect
                    label = {"eye opening response"}
                    menuItems = {["hello", "hi", "goose"]}
                  /> 
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect
                    label = {"best verbal response"}
                  /> 
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect
                    label = {"best motor response"}
                  /> 
                </Grid>
                <Grid item xs={3}>
                <TextField
                    fullWidth id="outlined-read-only-input"
                    defaultValue="GCS total score"

                    InputProps={{
                    readOnly: true,
                    sx: { backgroundColor: '#F5F5F5'},
                    }}
                      />
                </Grid>
        </Grid>
        </StyledBox>
      </Box>
      </Grid>
      {/* CLOSE GCS Box */}

      {/* AIS Box */}
            <Grid container justifyContent="center" alignItems="center">
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <StyledBox backgroundColor="#F5F5F5">
            <Grid xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
              <Typography align="center"> AIS </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Head and Neck"}
                  /> 
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Chest"}
                  /> 
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Extremity/Pelvis"}
                  /> 
              </Grid>
        </Grid>


        </StyledBox>
      </Box>
      </Grid>
      {/* CLOSE AIS Box */}

      {/* CCI, AMB, COVID */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <StyledBox backgroundColor="#F5F5F5">

        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={4}>
                   <CciModal></CciModal>
                </Grid>
                <Grid item xs={4}>
                  <BasicSelect
                    label = {"Amb Status"}
                  />
                </Grid>
                <Grid item xs={4}>
                  <BasicSelect
                    label = {"Covid"}
                  /> 
                </Grid>
        </Grid>
        </StyledBox>
      </Box>
      </Grid>

      {/* CLOSE CCI, AMB, COVID */}

      {/* CAlCULATE STTGMA AND RISK LEVEL  */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      

        <Grid container spacing = {2} justifyContent = "center">
                <Grid item xs={4}>
                  <Button fullWidth variant="contained" size="large">
                      Calculate STTGMA
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth id="outlined-read-only-input"
                    defaultValue="STTGMA Score"

                    InputProps={{
                      readOnly: true,
                      sx: { backgroundColor: '#F5F5F5'},
                    }}
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                      fullWidth id="outlined-read-only-input"
                      defaultValue="Risk Level"

                      InputProps={{
                        readOnly: true,
                        sx: { backgroundColor: '#F5F5F5'},
                      }}
                      />
                </Grid>
        </Grid>

      </Grid>





  </StyledBox> 
  <Grid style={{ marginTop: '20px' }}/>
  <StyledBox>
      <Grid container spacing = {2} style={{ marginTop: '20px' , marginBottom: '20px'}} justifyContent="space-evenly">
        <Grid item xs = {12} sm = {6}>
          <div style={{ position: 'relative', width: '100%', paddingTop: '100%' }}>
            <Image src = "/images/X-ray_of_hip.jpg" objectFit="layout" layout= "fill" alt = "XRay"></Image>
           </div> 
          
        </Grid>
        <Grid>
          <Grid container spacing = {2} item xs = {12} sm = {6} style={{ marginTop: '20px' , marginBottom: '20px'}} direction = "column" alignItems = "center" justifyContent= "space-between" height = "300px">
              
                  <BasicSelect> </BasicSelect>
                
                
                  <BasicSelect> </BasicSelect>
                
                  <BasicSelect> </BasicSelect>
                
          </Grid>
        </Grid>
      </Grid>
    </StyledBox>

      </div> {/* end gradient :) */}
    </main>
  )
}
