"use client"

import React, { useState, useEffect } from 'react';
import BasicSelect from '../design_helpers/BasicSelect';
import Grid from '@mui/material/Grid';

export default function FractureTypeSelect({ selectedLocation, setSelectedType, calcProcedureRec }) {
  const [menuItems, setMenuItems] = useState([]);

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    calcProcedureRec(selectedOption);
  };

  useEffect(() => {
    // Update menuItems whenever selectedLocation changes
    setMenuItems(getMenuItems(selectedLocation));

  }, [selectedLocation]);

  const getMenuItems = (location) => {
    // Add your logic here to set menuItems based on the selectedLocation
    // For example:
    
    if (location === "F") {
      return ["displaced", "non-displaced"];
    } else if (location === "I") {
      return ["Stable", "Unstable", "Reverse Obliguidity"];
    } else if (location === "S") {
      return [];
    } else {
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
