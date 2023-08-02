"use client"

import BasicSelect from "../design_helpers/BasicSelect"
import React, { useState } from 'react';
import Grid from '@mui/material/Grid'

export default function FractureLocationSelect({ onSelect, checkSubtroch }) {
    const handleLocationChange = (selectedOption) => {
      onSelect(selectedOption);
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