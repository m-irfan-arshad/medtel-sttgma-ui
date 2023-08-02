import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px', // Customize the corner radius here
    maxHeight: '80vh', // Set the maximum height to make the modal scrollable
    overflow: 'auto', // Enable scrolling if content overflows
  };

export default function RequiredModal(props) {
    const [open, setOpen] = [props.open, props.setOpen]
    const handleOpen = () => props.handleOpen
    const handleClose = () => setOpen(false)
  
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Please fill out all required fields
            </Typography>
            
          </Box>
        </Modal>
      </div>
    );
  }