//calculate sttgma and display score and risk group
"use client"
import React, { useState } from 'react';
import {Grid, TextField, Button} from "@mui/material"
import RequiredModal from './RequiredModal';


export default function STTGMA_Score(props){

	const {age, selectedEye, selectedVerbal, selectedMotor,  gcs_total, ais_head_neck,ais_chest, ais_extrem, cci_index,amb_status,covid_value,asa, setSttgma, sttgmaScore, risk_group, setRisk, impact, rounded_sttgma, setRoundedSttgma} = props
	const [buttonColor, setButtonColor] = useState('#eaecef');
	const [textColor, setTextColor] = useState('black');
	const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

	// variables that adjust the risk field colors
	//sets default colors
	const buttonAdjuster = rounded_sttgma == "STTGMA Score" ? '#eaecef' : buttonColor;
	//changes text color if risk is Extreme and background is dark red 
	const textAdjuster = risk_group == "Top 5%: Extreme Risk" ? 'white' : 'black';

	const calculateSTTGMA = (age, gcs_total, ais_head_neck,ais_chest, ais_extrem, cci_index,amb_status,covid_value,asa, impact) => {
		// if low impact and all neccessary fields were updated
		if(impact == "low" && age > -1  && selectedEye > -1  && selectedVerbal> -1  && selectedMotor > -1&& gcs_total > -1 &&  ais_head_neck > -1 && ais_chest > -1 && cci_index > -1 && amb_status > -1 && covid_value > -1 && asa> -1){
			let sttgma = -1;
			//calculations
			const sttgma_power = -1 * (-15.76 + 0.026 * age + 0.207 * gcs_total + 0.354 * ais_head_neck + 0.441 * ais_chest + 0.165 * cci_index + 0.335 * amb_status + 2.727 * covid_value + 1.65 * asa);
			const sttgma_e_val = Math.exp(sttgma_power);
			sttgma = 1/(1+ sttgma_e_val)
			setRoundedSttgma(sttgma.toFixed(5));
			setSttgma(sttgma)
			calculateRiskGroup(sttgma)
		}
		//if high impact and all neccesary fields were updated
		else if(impact == "high" && age > -1 && gcs_total > -1 &&  ais_head_neck > -1 && ais_chest > -1 && ais_extrem> -1){
			let sttgma = -1;
			const sttgma_power = -1* (-8.6879545905433+0.11330348266168* age -0.366719730310561*gcs_total+0.567879145824016*ais_head_neck+0.414585007141847*ais_chest+0.462928898984966*ais_extrem)
			const sttgma_e_val = Math.exp(sttgma_power)
			sttgma = 1/(1 + sttgma_e_val)
			setRoundedSttgma(sttgma.toFixed(5));
			setSttgma(sttgma)
			calculateRiskGroup(sttgma)
		}
		else{
			handleOpen()
		}

      };
	  
	  //calculate STTGMA when button is clicked
	  const handleCalculateClick = () => {
		calculateSTTGMA(age, gcs_total, ais_head_neck, ais_chest, ais_extrem, cci_index, amb_status, covid_value, asa, impact);
	  };

	  // calculate Risk Group based on STTGMA Score 
	  const calculateRiskGroup = (sttgmaScore) => {             
			let sttgma_percent = sttgmaScore * 100                                    
			if (sttgma_percent < 0.24)
			{
				//set risk and corresponding field colors
				setButtonColor("#8feba8")
				setRisk("Q1: Low Risk");
			}
			else if (sttgma_percent < 0.68)
			{
				setButtonColor("#fff07a")
				setRisk("Q2: Mild Risk");
			}
			else if (sttgma_percent < 1.32)
			{
				setButtonColor("#ff8d30")
				setRisk("Q3: Moderate Risk");
			}
			else if (sttgma_percent <6.90)
			{
				setButtonColor("#ff765e")
				setRisk("Q4: Highest Risk");
			}
			else 
			{
				setButtonColor("#ad0000")
				setRisk("Top 5%: Extreme Risk");
			}
	  }

	

	return (
			<Grid container spacing = {2} justifyContent = "center">
				{/* Calculate Button */}
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
						<RequiredModal open = {open} setOpen = {setOpen} handleOpen = {handleOpen} />
				</Grid>
				{/* Sttgma Score textfield */}
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
				{/* Risk Group textfield */}
                <Grid item xs={3.5}>
                    <TextField
                      fullWidth id="outlined-read-only-input"
					  value = {risk_group}
                      InputProps={{
                        readOnly: true,
						//set backgroundColor and textColor as variables
                        sx: { backgroundColor: buttonAdjuster,
							color: textAdjuster},
                      }}
                      />
                </Grid>
        </Grid>
			
	)
    
}