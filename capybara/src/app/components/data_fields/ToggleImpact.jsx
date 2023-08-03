//toggle between low impact and high impact 
import * as React from 'react';
import {ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';

export default function ToggleImpact({impact, setImpact, setRoundedSttgma, setRisk}) {

  //update impact variable from main based on toggle selection 
  const handleImpact = (event, selectedImpact) => {
    setImpact(selectedImpact);
    setRoundedSttgma ("STTGMA Score")
    setRisk ("Risk Level")
    
  };

  return (
    // draw toggle
    <ToggleButtonGroup
      value={impact}
      exclusive
      onChange={handleImpact}
      aria-label="impact"
    >
      <ToggleButton value="high" aria-label="high">
        <Typography> High Impact </Typography>
      </ToggleButton>
      <ToggleButton value="low" aria-label="low">
        <Typography> Low Impact </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}