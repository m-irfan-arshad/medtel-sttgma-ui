"use client"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import RequiredModal from './RequiredModal';

export default function STTGMA_Score(props){
	const {age, gcs_total, ais_head_neck,ais_chest,cci_index,amb_status,covid_value,asa, setSttgma, sttgmaScore, risk_group, setRisk} = props
	const [buttonColor, setButtonColor] = useState('#eaecef');
	const [textColor, setTextColor] = useState('black');
	const [rounded_sttgma, setRoundedSttgma] = useState("STTGMA Score");
	const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


	const calculateSTTGMA = (age, gcs_total, ais_head_neck,ais_chest,cci_index,amb_status,covid_value,asa) => {
		const sttgma_power = -1 * (-15.76 + 0.026 * age + 0.207 * gcs_total + 0.354 * ais_head_neck + 0.441 * ais_chest + 0.165 * cci_index + 0.335 * amb_status + 2.727 * covid_value + 1.65 * asa);
		const sttgma_e_val = Math.exp(sttgma_power);
		const sttgma = 1/(1+ sttgma_e_val)
		setRoundedSttgma(sttgma.toFixed(5));
		setSttgma(sttgma)
		calculateRiskGroup(sttgma)

      };
	
	  const handleCalculateClick = () => {
		if(age > -1 && gcs_total > -1 &&  ais_head_neck > -1 && ais_chest > -1 && cci_index > -1 && amb_status > -1 && covid_value > -1 && asa> -1){
			calculateSTTGMA(age, gcs_total, ais_head_neck, ais_chest, cci_index, amb_status, covid_value, asa);
		}
		else{
			handleOpen()
		}
		
	  };

	  const calculateRiskGroup = (sttgmaScore) => {             
			let sttgma_percent = sttgmaScore * 100  
			console.log("sttgma_score:" + sttgmaScore)
			console.log("sttgma_percent:" + sttgma_percent)                                     
			if (sttgma_percent < 0.24)
			{
				setButtonColor("#8feba8")
				setTextColor ("black")
				setRisk("Q1: Low Risk");
			}
			else if (sttgma_percent < 0.68)
			{
				setButtonColor("#fff07a")
				setTextColor ("black")
				setRisk("Q2: Mild Risk");
			}
			else if (sttgma_percent < 1.32)
			{
				setButtonColor("#ff8d30")
				setTextColor ("black")
				setRisk("Q3: Moderate Risk");
			}
			else if (sttgma_percent <6.90)
			{
				setButtonColor("#ff765e")
				setTextColor ("black")
				setRisk("Q4: Highest Risk");
			}
			else 
			{
				setButtonColor("#ad0000")
				setTextColor ("white")
				setRisk("Top 5%: Extreme Risk");
			}
	  }

	

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
						<RequiredModal open = {open} setOpen = {setOpen} handleOpen = {handleOpen} handleClose = {handleClose}/>
				</Grid>
				<Grid item xs={3.5}>
						<TextField
							fullWidth id="outlined-read-only-input"
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
					  value = {risk_group}
                      InputProps={{
                        readOnly: true,
                        sx: { backgroundColor: buttonColor,
							color: textColor},
                      }}
                      />
                </Grid>
        </Grid>
			
	)
    
}