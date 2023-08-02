'use client'

import React, {useState} from 'react';
import BasicSelect from '../../design_helpers/BasicSelect';


export default function AsaSelect({setAsa}) 
{

const handleAsa = (selectedAsa) => {
    let asa_int = parseInt(selectedAsa);
        setAsa(asa_int);
  };

    return (
        <BasicSelect
            label = {"ASA"}
            menuItems = {["1 - A normal healthy patient",
              "2 - A patient with mild systemic disease",
              "3 - A patient with severe systemic disease",
              "4 - A patient with severe systemic disease that is a constant threat to life",
              "5 - A moribund patient who is not expected to survive without the operation",
              "6 -A declared brain-dead patient whose organs are being removed for donor purposes"]}
            onChange = {handleAsa}
          />
    )

}


