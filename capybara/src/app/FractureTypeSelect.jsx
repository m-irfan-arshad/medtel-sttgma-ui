"use client"

import React, { useState, useEffect } from 'react';
import BasicSelect from './BasicSelect';
import Grid from '@mui/material/Grid';

export default function FractureTypeSelect({ selectedLocation }) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Update menuItems whenever selectedLocation changes
    setMenuItems(getMenuItems(selectedLocation));

  }, [selectedLocation]);

  const getMenuItems = (location) => {
    // Add your logic here to set menuItems based on the selectedLocation
    // For example:
    
    if (location === "Femoral Neck Fx") {
      return ["Option 1 for Femoral Neck Fx", "Option 2 for Femoral Neck Fx", "Option 3 for Femoral Neck Fx"];
    } else if (location === "Intertrochanteric Fx") {
      return ["Option 1 for Intertrochanteric Fx", "Option 2 for Intertrochanteric Fx"];
    } else if (location === "Subtrochanteric Fx") {
      return ["Option 1 for Subtrochanteric Fx", "Option 2 for Subtrochanteric Fx", "Option 3 for Subtrochanteric Fx"];
    } else {
      return [];
    }
  };

  return (
    <Grid style={{ marginBottom: '20px' }}>
      <BasicSelect
        label="fracture type"
        menuItems={menuItems}
      />
    </Grid>
  );
}
