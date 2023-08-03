'use client'
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';

//takes a muit date picker and exports it as a function
export default function BasicDatePicker(props) {
  const CenteredFormControl = styled(FormControl)({
    display: 'flex',
    justifyContent: 'center',
  });

  return (

<FormControl fullWidth>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Labels the date picker as Date of Birth */}
        <DatePicker label="Date of Birth" 
        value = {props.dob}
        
        onChange = {(newValue) => props.handleDOBChange(newValue)}/>
      
    </LocalizationProvider>
</FormControl>

  );
}