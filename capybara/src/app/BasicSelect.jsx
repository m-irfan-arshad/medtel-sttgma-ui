'use client'

import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const {label, menuItems} = props
  const [temp_val, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value.charAt(0));
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
        {menuItems && menuItems.map((item, index) => {
          return (
            <MenuItem value={item.charAt(0)} key={index}> {item} </MenuItem>
          );
        })
        }         

        </Select>
      </FormControl>

    </Box>

  );
}