'use client'
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from '@mui/material/FormControl';


export default function BasicDatePicker() {
  return (

    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        
          <DatePicker label="Date of Birth" />
        
      </LocalizationProvider>
    </FormControl>

  );
}