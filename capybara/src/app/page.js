
// Home page

'use client'
import React, { useState } from 'react';
import {Grid, Typography, Box, Button} from '@mui/material'
import styles from './page.module.css'
import NextHead from './NextHead'
import ClearIcon from "@mui/icons-material/Clear"

import StyledBox from './components/design_helpers/StyledBox'
import ToggleImpact from './components/data_fields/ToggleImpact';
import MrnField from './components/data_fields/MrnField'
import AgeCalculator from './components/data_fields/AgeCalculator'
import GcsScores from './components/data_fields/GcsScores'
import AisScores from './components/data_fields/AisScores'
import AsaSelect from './components/data_fields/low_impact_only/AsaSelect';
import CciModal from './components/data_fields/CciModal'
import AmbSelect from './components/data_fields/low_impact_only/AmbSelect';
import CovidSelect from './components/data_fields/low_impact_only/CovidSelect'
import STTGMA_Score from './components/STTGMA_Score'


import FractureForm from './components/procedure/FractureForm'
import FileUpload from './components/procedure/FileUpload';



export default function Home() {

  // useState variables
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
  const [rounded_sttgma, setRoundedSttgma] = useState("STTGMA Score");
  const [risk_group, setRisk] = useState("Risk Level");
  const [impact, setImpact] = useState("low")



    // Function to handle page refresh
    const handleRefresh = () => {
      window.location.reload();
    };



  return (
    <div>
      <NextHead/>
      <main>
      

      {/* set background gradient */}
      <div
        className={styles.gradientBackground}
        style={{
          background: 'linear-gradient(45deg, #37b9f7 30%, #3a62f7 90%)',
          borderRadius: '8px',
          padding: '20px',
        }}
      >
  
  <Grid style={{ marginTop: '50px' }}/>

  {/* STTGMA Box */}
  <StyledBox> 

    {/* Clear All Button */}
    <Grid container justifyContent = "right">
      <Grid style = {{marginRight: '10px'}}>
        <Button  onClick = {handleRefresh} variant = "outlined" endIcon={<ClearIcon />}>
          Clear All 
        </Button>
      </Grid>
    </Grid>
        
    <Grid container spacing={2} justifyContent = "center">
        <Grid item xs={10} style={{ marginTop: '30px', marginBottom: '10px'}}>
          <Typography align="center" variant="h4" gutterBottom> STTGMA </Typography>
        </Grid>
        {/* Low Impact vs. High Impact Toggle  */}
        <Grid item xs={4} container justifyContent="center"> 
          <ToggleImpact impact = {impact} setImpact = {setImpact} setRoundedSttgma = {setRoundedSttgma} setRisk = {setRisk}/>
        </Grid>
        
        {/* MRN Field
        <Grid item xs={10.5}>
            <MrnField />
        </Grid> */}

        {/* DOB and Age Fields */}
        <AgeCalculator age = {age} setAge = {setAge} />
      </Grid>
          
          
      {/* GCS Box */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
        <Box sx={{ paddingTop: '20px', width: '100%'}}>
          <StyledBox backgroundColor="#f8f9fa">
            <Grid item xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
              <Typography align="center"> GCS Score </Typography>
            </Grid>

            {/* GCS eye, verbal, motor, and total fields*/}
            <GcsScores gcs_total={gcs_total} setGcsTotal={setGcsTotal} /> 
            
        </StyledBox>
       </Box>
      </Grid> 

      

      {/* AIS Box */}
      {/* Spacing, styledBox, and AIS head and neck, chest, and extremity fields */}
       < AisScores 
          setAisHeadNeck={setAisHeadNeck}
          setAisChest={setAisChest}
          setAisExtrem = {setAisExtrem}
          impact = {impact}
        />


      
      {/* ASA */}
      <Grid container justifyContent = "center" alignItems = "center" sx= {{marginTop: '40px'}}>
        {impact === 'low' && ( // Conditionally render ASA if impact =  'low'
        <Grid item xs={10.5}>
          <AsaSelect setAsa = {setAsa}/>
        </Grid>
        )}
      </Grid>

      {/* CCI, AMB, COVID */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
      {impact === 'low' && ( // Conditionally render the following if impact is 'low'
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


      {/* STTGMA AND RISK LEVEL  */}
      <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
        {/* STTGMA_Score draws buttons/fields and performs calculations using useState variables from main */}
        <STTGMA_Score age= {age} gcs_total = {gcs_total} ais_head_neck = {ais_head_neck} ais_chest = {ais_chest} ais_extrem = {ais_extrem} cci_index = {cci_total} amb_status = {amb} covid_value = {covid_index} asa = {asa} setSttgma = {setSttgma} sttgmaScore = {sttgmaScore} risk_group = {risk_group} setRisk = {setRisk} impact = {impact} rounded_sttgma = {rounded_sttgma} setRoundedSttgma = {setRoundedSttgma}/>
      </Grid>

  </StyledBox>  {/* Close STTGMA Box */}


  {/* space between STTGMA and Procedure Boxes */}
  <Grid style={{ marginTop: '20px' }}/>


  {/* Procedure BOX */}
  <StyledBox>
        <Grid item xs={10} style={{ marginTop: '30px' ,marginBottom: '30px'}}>
          <Typography align="center" variant="h4" gutterBottom> Recommended Procedure </Typography>
        </Grid>
      
      <Grid container spacing = {2} style={{ marginBottom: '20px'}} justifyContent="left">
        <Grid item xs = {7} sm = {7}>
          <Typography align="left" color = "#BEBEBE" style= {{marginLeft: '20px'}}> X-RAY Upload </Typography>

          {/* Image Upload component */}
          <FileUpload/>
        </Grid>
        
        {/* manages fracture location, type, and procedure fields */}
        <FractureForm risk_group = {risk_group}/>
      </Grid>
        
      
    </StyledBox> 
    {/* Close Procedure Box */}

      </div> {/* end gradient :) */}
    </main>
  </div>
  )
}
