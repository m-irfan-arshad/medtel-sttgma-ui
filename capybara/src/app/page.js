
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
import CovidSelect from './CovidSelect'

import AgeCalculator from './AgeCalculator'
import AmbSelect from './AmbSelect';
import Head from "next/head"
import NextHead from './NextHead'
import STTGMA_Score from './STTGMA_Score'
import ToggleImpact from './ToggleImpact';



import MrnField from './MrnField'
import FractureForm from './FractureForm'
import GcsScores from './GcsScores'
import AsaSelect from './AsaSelect';
import FileUpload from './FileUpload';







export default function Home() {

  const [age,setAge] = useState("Age")
  const [gcs_total, setGcsTotal] = useState(-1);
  const [ais_head_neck, setAisHeadNeck] = useState(-1);
  const [ais_chest, setAisChest] = useState(-1);
  const [ais_extrem, setAisExtrem] = useState(-1);
  const [cci_total, setCciTotal] = useState(-1);
  const [covid_index, setCovidIndex] = useState(-1);
  const [asa, setAsa] = useState (-1);
  const [amb, setAmb] = useState(-1);
  const [sttgmaScore, setSttgma] = useState (-1);
  const [risk_group, setRisk] = useState("Risk Level");
  const [impact, setImpact] = useState("low")


  return (
    <div>
    <NextHead/>
    <main>
      <div
        className={styles.gradientBackground}
        // You can adjust the gradient colors and angle as needed
        style={{
          background: 'linear-gradient(45deg, #37b9f7 30%, #3a62f7 90%)',
          borderRadius: '8px', // Optional: add border-radius for rounded corners
          padding: '20px', // Optional: add padding to the container
        }}
      >

  <Grid style={{ marginTop: '50px' }}/>
  <StyledBox> 
        
      <Grid container spacing={2} justifyContent = "center">

        <Grid item xs={10} style={{ marginTop: '30px', marginBottom: '20px'}}>

          <Typography align="center" variant="h4" gutterBottom> STTGMA </Typography>
        </Grid>
        <ToggleImpact impact = {impact} setImpact = {setImpact}/>

          <Grid item xs={10.5}>
            
              <MrnField />
          </Grid>
          <AgeCalculator age = {age} setAge = {setAge} />
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
          impact = {impact}
        />

      {/* CLOSE AIS Box */}

      
      {/* ASA */}
      <Grid container justifyContent = "center" alignItems = "center" sx= {{marginTop: '40px'}}>
        {impact === 'low' && ( // Conditionally render the following content if impactVariable is 'low'
        <Grid item xs={10.5}>
          <AsaSelect setAsa = {setAsa}/>
        </Grid>
        )}
      </Grid>

      {/* CCI, AMB, COVID */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      {impact === 'low' && ( // Conditionally render the following content if impactVariable is 'low'
      <Box sx={{ paddingTop: '20px', width: '100%'}}>
        <Grid container spacing = {2} justifyContent = "center">
              <Grid item xs={3.5}>
                   <CciModal setCciTotal = {setCciTotal}></CciModal>
                </Grid>
                <Grid item xs={3.5}>
                  <AmbSelect setAmb = {setAmb}/>
                </Grid>
                <Grid item xs={3.5}>
                  <CovidSelect setCovidIndex = {setCovidIndex} />
                </Grid>
        </Grid>
      </Box>
      )}
      </Grid>

      {/* CLOSE CCI, AMB, COVID */}

      {/* CAlCULATE STTGMA AND RISK LEVEL  */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      
        <STTGMA_Score age= {age} gcs_total = {gcs_total} ais_head_neck = {ais_head_neck} ais_chest = {ais_chest} ais_extrem = {ais_extrem} cci_index = {cci_total} amb_status = {amb} covid_value = {covid_index} asa = {asa} setSttgma = {setSttgma} sttgmaScore = {sttgmaScore} risk_group = {risk_group} setRisk = {setRisk} impact = {impact} />

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
          
            
          <FileUpload/>


        </Grid>
        
          <FractureForm risk_group = {risk_group}/>
        </Grid>
        
      
    </StyledBox> 
    {/* Close Procedure Box */}

      </div> {/* end gradient :) */}
    </main>
    </div>
  )
}
