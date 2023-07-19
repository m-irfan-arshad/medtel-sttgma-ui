
import React from 'react';
import Box from '@mui/material/Box';

export default function StyledBox(props) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        maxWidth: {
          xs: '550px',
          sm: '900px',
          md: '1200px',
          lg: '1300px',
          xl: '1400px',
        },
        margin: '0 auto',
        borderRadius: '8px',
      }}
    >
      {props.children}
    </Box>
  );
}
