//draw location select
"use client"

import BasicSelect from "../design_helpers/BasicSelect"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid'

//set location variable from FractureForm and run checkSubtroch 
export default function FractureLocationSelect({ setSelectedLocation, checkSubtroch }) {
    const handleLocationChange = (selectedOption) => {
      setSelectedLocation(selectedOption);
      checkSubtroch(selectedOption);
    };

    return (
        <Grid style= {{marginBottom: '20px', marginTop: '30px'}}>
            <BasicSelect
              label = "fracture location"
              menuItems = {["Femoral Neck Fx", "Intertrochanteric Fx", "Subtrochanteric Fx"]}
              onChange={handleLocationChange}
            />
          </Grid>
  )
}