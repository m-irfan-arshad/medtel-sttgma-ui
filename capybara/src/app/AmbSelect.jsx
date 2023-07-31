'use client'

import React, {useState} from 'react';
import BasicSelect from './BasicSelect';


export default function AmbSelect({setAmb}) 
{

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


