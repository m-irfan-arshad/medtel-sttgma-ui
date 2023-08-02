'use client'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/system';


export default function BasicDatePicker(props) {
  const CenteredFormControl = styled(FormControl)({
    display: 'flex',
    justifyContent: 'center',
  });

  return (

<FormControl fullWidth>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Date of Birth" 
        value = {props.dob}
        
        onChange = {(newValue) => props.handleDOBChange(newValue)}/>
      
    </LocalizationProvider>
</FormControl>

  );
}