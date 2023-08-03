//MRN user entry 
'use client'
import React from 'react';
import TextField from '@mui/material/TextField';

export default function MrnField() {

  //only take numbers as input 
  const handleInputChange = (event) => {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  return (
    <TextField
      required
      fullWidth
      id="mrn"
      type = "number"
      label="MRN"
      name="mrn"
      autoComplete="MRN"
      onInput={handleInputChange}
    />
  );
}







