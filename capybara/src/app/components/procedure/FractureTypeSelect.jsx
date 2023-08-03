//draw Fracture Type select
"use client"

import React, { useState, useEffect } from 'react';
import BasicSelect from '../design_helpers/BasicSelect';
import Grid from '@mui/material/Grid';

export default function FractureTypeSelect({ selectedLocation, setSelectedType, calcProcedureRec }) {
  const [menuItems, setMenuItems] = useState([]);

  //Set Fracture Type from Fracture Form and calculate procedure recommendations
  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    calcProcedureRec(selectedOption);
  };

  // update menuItems whenever selectedLocation changes
  useEffect(() => {
    setMenuItems(getMenuItems(selectedLocation));

  }, [selectedLocation]);

  //set menuItems based on selectedLocation
  const getMenuItems = (location) => {    
    //Femoral
    if (location === "F") 
    {
      return ["displaced", "non-displaced"];
    } 
    //Intertrochanteric
    else if (location === "I") 
    {
      return ["Stable", "Unstable", "Reverse Obliguidity"];
    } 
    else 
    {
      return [];
    }
  };

  return (
    <Grid style={{ marginBottom: '20px' }}>
      <BasicSelect
        label="fracture type"
        menuItems={menuItems}
        onChange = {handleTypeChange}
      />
    </Grid>
  );
}
