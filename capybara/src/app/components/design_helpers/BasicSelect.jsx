//select template
'use client'

import React, {useState} from 'react';
import {Box, InputLabel, MenuItem, FormControl, Select} from '@mui/material';



export default function BasicSelect(props) {
  const {label, menuItems, onChange} = props
  const [temp_val, setValue] = React.useState('');


  //sets value to the first character of the option (most often a number)
  const handleChange = (event) => {
    setValue(event.target.value.charAt(0));
    if (onChange)
    {
      // pass the selected option back to the onChange handler
      onChange(event.target.value); 
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
        >
        {/* iterate through the menuItems that were passed through */}
        {menuItems && menuItems.map((item, index) => {
          return (
            <MenuItem value={item.charAt(0)} key={index} style={{ whiteSpace: 'normal' }} > {item}  </MenuItem>
          );
        })
        }         

        </Select>
      </FormControl>

    </Box>

  );
}