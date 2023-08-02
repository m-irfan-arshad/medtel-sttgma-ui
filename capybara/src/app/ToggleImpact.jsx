import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

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