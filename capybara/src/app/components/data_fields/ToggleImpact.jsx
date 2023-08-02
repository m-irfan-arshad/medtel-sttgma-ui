import * as React from 'react';
import {ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';

export default function ToggleImpact({impact, setImpact}) {


  const handleImpact = (event, selectedImpact) => {
    setImpact(selectedImpact);
  };

  return (
    <ToggleButtonGroup
      value={impact}
      exclusive
      onChange={handleImpact}
      aria-label="equation"
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