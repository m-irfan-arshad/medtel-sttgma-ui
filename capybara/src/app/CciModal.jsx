'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

export default function CciModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
  };

  return (
    <div>
      <Button fullWidth variant="outlined" color="secondary" onClick = {handleOpen} size="large">
          CCI
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              Charlson Comorbidity Index Calculator
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              select applicable conditions:
          </Typography>

          <FormGroup>
              <FormControlLabel control={<Checkbox/>} label="Myocardial infarction (history, not ECG changes only)" />
              <FormControlLabel control={<Checkbox/>} label="Congestive heart failure" />
              <FormControlLabel control={<Checkbox/>} label="Peripheral Vascular disease" />
              <FormControlLabel control={<Checkbox/>} label="Cerebrovascualar disease: CVA with mild or no residua or TIA" />
              <FormControlLabel control={<Checkbox/>} label="Dementia" />
              <FormControlLabel control={<Checkbox/>} label="Chronic pulmonary disease" />
              <FormControlLabel control={<Checkbox/>} label="Connective tissue disease" />
              <FormControlLabel control={<Checkbox/>} label="Peptic ulcer disease" />
              <FormControlLabel control={<Checkbox/>} label="Mild liver disease (without portal hypertension, includes chronic hepatitis)" />
              <FormControlLabel control={<Checkbox/>} label="Diabetes without end-organ damage (excludes diet-controlled alone)" />
              <FormControlLabel control={<Checkbox/>} label="Hemiplegia" />
              <FormControlLabel control={<Checkbox/>} label="Moderate or sever renal disease" />
              <FormControlLabel control={<Checkbox/>} label="Diabetes with end-organ damage (retinopathy, neuropathy, nephorpathy, or brittle diabetes)" />
              <FormControlLabel control={<Checkbox/>} label="Tumor without metastases (exclude if >5 y from diagosis)" />
              <FormControlLabel control={<Checkbox/>} label="Leukemia (acute or chronic)" />
              <FormControlLabel control={<Checkbox/>} label="Lymphoma" />
              <FormControlLabel control={<Checkbox/>} label="Moderate or severe liver disease" />
              <FormControlLabel control={<Checkbox/>} label="Metastatic solid tumor" />
              <FormControlLabel control={<Checkbox/>} label="AIDS (not just HIV positive)" />
          </FormGroup>
        </Box>
      </Modal>
    </div>
  );
}
