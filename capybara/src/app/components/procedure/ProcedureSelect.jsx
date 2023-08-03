//select component specifically designed for Procedure Select 
'use client'

import React, {useState} from 'react';
import {Box, InputLabel, MenuItem, FormControl, Select} from "@mui/material"


export default function ProcedureSelect(props) {
  const {label, menuItems, onChange, backgroundColor, procedureRec} = props
  const [temp_val, setValue] = React.useState('');

  // pass the selected option back to the onChange handler
  const handleChange = (event) => {
    setValue(event.target.value);
    if (onChange)
    {
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
          //set background color of drop down using backgroundColor variable from FractureForm
          sx={{
            backgroundColor: {backgroundColor}, 
          }}
        >
        {menuItems && menuItems.map((item, index) => {
            //highlight menuItem in green if it matches procedureRec
            const isHighlighted = procedureRec.includes(item);
            return (
                <MenuItem 
                    value={item} 
                    key={index}
                    //set green background for reccomended items
                    sx={{
                        backgroundColor: isHighlighted ? '#E5FCE9' : 'inherit', 
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