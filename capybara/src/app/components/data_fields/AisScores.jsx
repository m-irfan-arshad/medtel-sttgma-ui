//draw AIS head and neck, chest, and extrema and update those variables
'use client'

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import BasicSelect from '../design_helpers/BasicSelect';
import StyledBox from '../design_helpers/StyledBox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';



export default function AisScores({ setAisHeadNeck, setAisChest, setAisExtrem, impact }){

    // updates ais_head_neck from main with selected option
    const handleHeadNeck = (selectedAisHN) => {
        let hn_int = parseInt(selectedAisHN);
        setAisHeadNeck(hn_int);
      };
    
    // updates ais_chest from main with selected option
    const handleChest = (selectedAisC) => {
        let chest_int = parseInt(selectedAisC);
        setAisChest(chest_int);
      };
    
    // updates ais_extrem from main with selected option
    const handleExtrem = (selectedAisEx) => {
        let extrem_int = parseInt(selectedAisEx);
        setAisExtrem(extrem_int);
      };
    

    return (
    <Grid container justifyContent="center" alignItems="center">
        <Box sx={{ paddingTop: '20px', width: '100%'}}>
            <StyledBox backgroundColor="#f8f9fa">
                <Grid item xs={12} style={{ mar: '10px' }} sx={{ marginBottom: '10px'}}>
                    <Typography align="center"> AIS </Typography>
                </Grid>

            {/* AIS Head and Neck Select */}
            <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <BasicSelect
                    label = {"AIS Head and Neck"}
                    menuItems = {["0 - No injury to head or neck",
                        "1 - Loss of consciousness; facial fracture non-displaced",
                        "2 - Skull fracture non-displaced; facial fractures displaced; c-spine transverse or spinous process fracture, stable vertebral body fracture",
                        "3 - Traumatic brain injury (SAH); facial fracture requiring admission, transient spinal cord injury; unstable vertebral body fx",
                        "4 - Traumatic brain injury (ICH, SDH); facial fracture requiring OR; incomplete spinal cord injury or c-spine fracture requiring surgery",
                        "5 - Traumatic brain injury; possible brain death; complete spinal cord injury; c-spine fractures with spinal cord injury",
                        "6 - Brain death; un-survivable spinal cord injury"]}
                    onChange = {handleHeadNeck}
                    /> 
                </Grid>
            </Grid>
            {/* AIS Chest Select */}
            <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
                <Grid item xs={12}>
                    <BasicSelect
                    label = {"AIS Chest"}
                    menuItems = {["0 - No chest injury",
                        "1 - 1 to 3 rib fractures; closed clavicle fracture, minor cardiac contusion",
                        "2 - more than 3 adjacent ribs; displaced clavicle; scapular fracture; t-spine transverse or spinous process fracture; stable vertebral body fracture",
                        "3 - Pneumothorax; open/displaced sternum; transient spinal cord injury; unstable t-spine vertebral body fx; unilateral lung contusion;",
                        "4 - Pneumothorax; unilateral flail segment; incomplete spinal cord injury or t-spine fracture requiring surgery; bilateral lung contusion; major cardiac contusion (EF<25% without heart disease )",
                        "5 - Pneumothorax, bilateral flail segment; t-spine fractures with spinal cord injury",
                        "6 - Unsurvivable injury"]}
                    onChange = {handleChest}
                    /> 
                </Grid>
            </Grid>
            {/* AIS Extrem Select */}
            <Grid container spacing = {2} justifyContent = "center" sx={{ marginBottom: '20px' }}>
                {impact === 'high' && ( // Conditionally render AIS extrem if impact is 'low'
                    <Grid item xs={12}>
                        <BasicSelect
                        label = {"AIS Extremity/Pelvis"}
                        menuItems = {["0 - No Injury",
                            "1 - Contusion or sprain",
                            "2 - Closed Dislocation, Closed fracture does not need ORIF. Cast/splint",
                            "3 - Fracture requiring ORIF, Closed acetabulum fx Open dislocations all hip fractures",
                            "4 - All Open Fractures, Open book pelvis, femur fracture.",
                            "5 - Open pelvic fracture, retroperitoneal hematoma, traumatic amputation, mangled extremity",
                            "6 - Fatal Injury "]}
                            onChange = {handleExtrem}
                        />              
                    </Grid>
                )}
            </Grid>
        </StyledBox>
    </Box>
</Grid>
)
}