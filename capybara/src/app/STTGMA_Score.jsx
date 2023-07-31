"use client"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function STTGMA_Score(props){
	const {age, gcs_total, ais_head_neck,ais_chest,cci_index,amb_status,covid_value,asa} = props
	const [rounded_sttgma, setRoundedSttgma] = useState(null);
  	const [showResult, setShowResult] = useState(false);

	const calculateSTTGMA = (age, gcs_total, ais_head_neck,ais_chest,cci_index,amb_status,covid_value,asa) => {
		const sttgma_power = -1 * (-15.76 + 0.026 * age + 0.207 * gcs_total + 0.354 * ais_head_neck + 0.441 * ais_chest + 0.165 * cci_index + 0.335 * amb_status + 2.727 * covid_value + 1.65 * asa);
		const sttgma_e_val = Math.exp(sttgma_power);
		const sttgma = 1/(1+ sttgma_e_val)
		setRoundedSttgma(sttgma.toFixed(5));

      };
	
	  const handleCalculateClick = () => {
		calculateSTTGMA(age, gcs_total, ais_head_neck, ais_chest, cci_index, amb_status, covid_value, asa);
		console.log({rounded_sttgma})
	  };

	

	return (
			<Grid container spacing = {2} justifyContent = "center">
				<Grid item xs={3.5}>
						<Button 
							fullWidth 
							variant="contained" 
							size="large" 
							color = "success" 
							onClick = {handleCalculateClick}
							sx={{height: '56px', backgroundColor: '#71D57F'}} >
							Calculate STTGMA
						</Button>
				</Grid>
				<Grid item xs={3.5}>
						<TextField
							fullWidth id="outlined-read-only-input"
							defaultValue="STTGMA Score"
							value={rounded_sttgma}

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
			
	)
    
}