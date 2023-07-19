
import React from 'react';
import Box from '@mui/material/Box';

export default function StyledBox(props) {
  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        backgroundColor: props.backgroundColor || 'white',
        padding: '20px',
        width: '95%',
        height: '95%',
        margin: '0 auto',
        borderRadius: '8px',
      }}
    >
      {props.children}
    </Box>
  );
}
