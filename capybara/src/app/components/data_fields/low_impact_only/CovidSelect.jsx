'use client'

import React, {useState} from 'react';
import BasicSelect from '../../design_helpers/BasicSelect';


export default function CovidSelect({setCovidIndex}) 
{

const handleCovid = (selectedCovid) => {
    if (selectedCovid == 'P')
    {
        setCovidIndex(1)
    }
    else if (selectedCovid == 'N')
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


