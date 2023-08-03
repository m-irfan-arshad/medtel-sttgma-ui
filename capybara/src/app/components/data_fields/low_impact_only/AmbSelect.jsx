// draws Amb select and updates Amb variable

'use client'

import React, {useState} from 'react';
import BasicSelect from '../../design_helpers/BasicSelect';


export default function AmbSelect({setAmb}) 
{

// function gets selected choice and updates Amb value from main
const handleAmb = (selectedAmb) => {
    let amb_int = parseInt(selectedAmb);
        setAmb(amb_int);
  };

    return (
        <BasicSelect
            label = {"Amb Status"}
            menuItems = {["1 - Community ambulator",
            "2 - Household ambulator",
            "3 - Minimal/non-ambulatory"]}
            onChange = {handleAmb}
            />
    )

}


