
import React from 'react';
import Box from '@mui/material/Box';

export default function StyledBox(props) {
  return (
    <Box
      sx={{
        border: '1px solid #E0E0E0',
        backgroundColor: props.backgroundColor || 'white',
        padding: props.padding || '20px',
        width: props.width || '88%',
        height: props.height || '90%',
        margin: props.margin || '0 auto',
        borderRadius: props.borderRadius || '30px',
      }}
    >
      {props.children}
    </Box>
  );
}
