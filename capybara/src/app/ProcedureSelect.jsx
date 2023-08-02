'use client'

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProcedureSelect(props) {
  const {label, menuItems, onChange, backgroundColor, procedureRec} = props
  const [temp_val, setValue] = React.useState('');
  console.log(backgroundColor)



  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange)
    {
      onChange(event.target.value); // pass the selected option back to the onChange handler
    }
    
  };

  return (
    
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> {label} </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={temp_val}
          label= {label}
          onChange={handleChange}
          sx={{
            backgroundColor: {backgroundColor}, // Set your desired background color here
          }}
        >
        {menuItems && menuItems.map((item, index) => {
            const isHighlighted = procedureRec.includes(item);
            return (
                <MenuItem 
                    value={item} 
                    key={index}
                    sx={{
                        backgroundColor: isHighlighted ? '#E5FCE9' : 'inherit', // Set green background for matching items
                      }}
                > 
                
                    {item} 
                </MenuItem>
            );
        })
        }         

        </Select>
      </FormControl>

    </Box>

  );
}