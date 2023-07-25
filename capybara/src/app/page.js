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
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CciModal from './CciModal'
import MrnField from './MrnField'



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

  <Grid style={{ marginTop: '50px' }}/>
  <StyledBox> 

      <Grid container spacing={2} justifyContent = "center">
        <Grid xs={10} style={{ marginTop: '30px' }}>
          <Typography align="center" variant="h4" gutterBottom> STTGMA </Typography>
        </Grid>

          <Grid item xs={10.5}>
              <MrnField />
          </Grid>
        </Grid>

        <Grid container spacing={2} justifyContent = "center"  style={{ marginTop: '15px' }}>
          <Grid item xs={5.25}>
            <BasicDatePicker></BasicDatePicker>
          </Grid>
          <Grid item xs={5.25}>
          <TextField
          fullWidth id="outlined-read-only-input"
          defaultValue="Age"

          InputProps={{
            readOnly: true,
            sx: { backgroundColor: '#eaecef'},
          }}
          />
          </Grid>
        </Grid>

      {/* GCS Box */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <StyledBox backgroundColor="#f8f9fa">
            <Grid xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
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
      {/* CLOSE GCS Box */}

      {/* AIS Box */}
            <Grid container justifyContent="center" alignItems="center">
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <StyledBox backgroundColor="#f8f9fa">
            <Grid xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
              <Typography align="center"> AIS </Typography>
            </Grid>

        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Head and Neck"}
                    menuItems = {["0 - no injury to head or neck",
                      "1 - loss of consciousness; facial fracture non-displaced",
                      "2 - Skull fracture non-displaced; facial fractures displaced; c-spine transverse or spinous process fracture, stable vertebral body fracture",
                      "3 - traumatic brain injury (SAH); facial fracture requiring admission, transient spinal cord injury; unstable vertebral body fx",
                      "4 - traumatic brain injury (ICH, SDH); facial fracture requiring OR; incomplete spinal cord injury or c-spine fracture requiring surgery",
                      "5 - traumatic brain injury; possible brain death; complete spinal cord injury; c-spine fractures with spinal cord injury",
                      "6 - brain death; un-survivable spinal cord injury"]}
                  /> 
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Chest"}
                    menuItems = {["0 - no chest injury",
                      "1 - 1-3 rib fractures; closed clavicle fracture, minor cardiac contusion",
                      "2 - >3 adjacent ribs; displaced clavicle; scapular fracture; t-spine transverse or spinous process fracture; stable vertebral body fracture",
                      "3 - Pneumothorax; open/displaced sternum; transient spinal cord injury; unstable t-spine vertebral body fx; unilateral lung contusion;",
                      "4 - Pneumothorax; unilateral flail segment; incomplete spinal cord injury or t-spine fracture requiring surgery; bilateral lung contusion; major cardiac contusion (EF<25% without heart disease )",
                      "5 - Pneumothorax, bilateral flail segment; t-spine fractures with spinal cord injury",
                      "6 - Un-survivable injury"]}
                  /> 
              </Grid>
        </Grid>
        <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
              <Grid item xs={12}>
                  <BasicSelect
                    label = {"AIS Extremity/Pelvis"}
                    menuItems = {["0 - No Injury",
                      "1 - Un-survivable injury",
                      "2 - Closed Dislocation, Closed fracture does not need ORIF. Cast/splint",
                      "3 - Fracture requiring ORIF, Closed acetabulum fx Open dislocations all hip fractures",
                      "4 - All Open Fractures, Open book pelvis, femur fracture.",
                      "5 - Open pelvic fracture, retroperitoneal hematoma, traumatic amputation, mangled extremity",
                      "6 - Fatal Injury "]}
                  /> 
              </Grid>
        </Grid>


        </StyledBox>
      </Box>
      </Grid>
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
        <Grid xs={10} style={{ marginTop: '30px' ,marginBottom: '30px'}}>
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
        <Grid item xs= {5} direction = "column">
          <Grid style= {{marginBottom: '20px', marginTop: '30px'}}>
            <BasicSelect
              label = "fracture location"
              menuItems = {["Femoral Neck Fx", "Intertrochanteric Fx", "Subtrochanteric Fx"]}
            />
          </Grid>
          <Grid style= {{marginBottom: '20px'}}>
            <BasicSelect
              label = "fracture type"
            />
          </Grid>
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
  )
}
