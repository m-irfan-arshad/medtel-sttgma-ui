"use client"

import BasicSelect from "./BasicSelect"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid'

export default function FractureLocationSelect({ onSelect }) {
    const handleLocationChange = (selectedOption) => {
      onSelect(selectedOption);
      console.log({selectedOption})
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