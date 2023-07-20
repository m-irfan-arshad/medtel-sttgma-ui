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
            <Grid xs={12} style={{ mar: '10px' }}>
              <Typography align="center"> GCS Score </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={3}>
                  <BasicSelect
                  /> 
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect> </BasicSelect>
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect> </BasicSelect>
                </Grid>
                <Grid item xs={3}>
                  <BasicSelect> </BasicSelect>
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
            <Grid xs={12} style={{ mar: '10px' }}>
              <Typography align="center"> AIS </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect> </BasicSelect>
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect> </BasicSelect>
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect> </BasicSelect>
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
                  <DialogSelect> </DialogSelect>
                </Grid>
                <Grid item xs={4}>
                  <BasicSelect> </BasicSelect>
                </Grid>
                <Grid item xs={4}>
                  <BasicSelect> </BasicSelect>
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

      <BasicSelect> </BasicSelect>
      <BasicDatePicker></BasicDatePicker>
      <Grid container spacing = {2}>
        <Grid>
          <Image src = "/images/X-ray_of_hip.jpg" height = {500} width = {500} alt = "XRay"></Image>
        </Grid>
        <Grid>
          <Grid container direction = "column" spacing = {3}>
            <BasicSelect></BasicSelect>
          </Grid>

          <Grid>
            <BasicSelect></BasicSelect>
          </Grid>

          <Grid>
            <Box>Recomendation</Box>
          </Grid>
        </Grid>
      </Grid>
      

      </div> {/* end gradient :) */}
    </main>
  )
}
