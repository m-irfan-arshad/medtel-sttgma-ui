//draws Covid select and updates covid_index variable
'use client'

import React, {useState} from 'react';
import BasicSelect from '../../design_helpers/BasicSelect';

export default function CovidSelect({setCovidIndex}) 
{
 // function gets selected choice and updates covid value from main
const handleCovid = (selectedCovid) => {

    if (selectedCovid == 'P') //Positive
    {
        setCovidIndex(1)
    }
    else if (selectedCovid == 'N') //Negative
    {
        setCovidIndex(0)
    }
  };

    return (
        <BasicSelect
            label = {"Covid"}
            menuItems = {["Negative", "Positive/Suspected"]} 
            onChange = {handleCovid}        
        /> 
    )

}


