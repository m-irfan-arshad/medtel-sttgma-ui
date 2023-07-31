'use client'
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FormGroup } from '@mui/material';
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import Grid from '@mui/material/Grid'


export default function CciModal() {
  const [open, setOpen] = useState(false);
  const [tempCheckedItems, setTempCheckedItems] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [cci_total, setCciTotal] = useState(0);
  const [buttonSaved, setButtonSaved] = useState(false);


  const checkboxValues = {
    'Myocardial infarction': 1,
    'Congestive heart failure': 1,
    'Peripheral Vascular disease': 1,
    'Cerebrovascualar disease': 1,
    'Dementia': 1,
    'Chronic pulmonary disease': 1,
    'Connective tissue disease': 1,
    'Peptic ulcer disease': 1,
    'Mild liver disease': 1,
    'Diabetes without': 1,
    'Hemiplegia': 2,
    'renal disease': 2,
    'Diabetes with': 2,
    'Tumor without metastases': 2,
    'Leukemia': 2,
    'Lymphoma': 2,
    'Moderate or severe liver disease': 3,
    'Metastatic solid tumor': 6,
    'AIDS': 6,
  };
  
  

  const handleOpen = () => {
    setOpen(true);
    setTempCheckedItems(checkedItems); // Copy the current checked state to a temporary state when the modal opens
  };

  const handleClose = () => {
    setOpen(false);
    // Reset the temporary state when the modal is closed without saving
    setTempCheckedItems({});
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setTempCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [name]: checked,
    }));
  };

  const handleSave = () => {
    // Save the temporary checked state to the main state when the "Save" button is clicked
    setCheckedItems(tempCheckedItems);
    localStorage.setItem('checkedItems', JSON.stringify(tempCheckedItems));
    handleClose();

    // Calculate the total score based on the selected checkboxes
    let totalScore = 0;
    for (const [name, isChecked] of Object.entries(tempCheckedItems)) {
      if (isChecked) {
        totalScore += checkboxValues[name];
      }
    }
    setCciTotal(totalScore);
    setButtonSaved(true);
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
    maxHeight: '80vh', // Set the maximum height to make the modal scrollable
    overflow: 'auto', // Enable scrolling if content overflows
  };

  return (
    <div>
      <Button 
        fullWidth variant="outlined" onClick = {handleOpen} size="large" sx={{height: '56px'}}>
           {buttonSaved ? `${cci_total}` : 'CCI'}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
              Charlson Comorbidity Index Calculator
          </Typography>
          <Grid container>
            <Grid item xs = {11}>
              <Typography  variant="h6" component="h6" sx={{ mt: 1,  color: 'grey'}}>
                  select applicable conditions:
              </Typography>
            </Grid>
            <Grid item xs = {1}>
              <Typography  variant="h6" component="h6" sx={{ mt: 1,  color: 'grey'}}>
                  score
              </Typography>
            </Grid>
          </Grid>
          <hr />

          <FormGroup>
            <Grid container spacing={1}>
              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Myocardial infarction'] || false}
                    onChange={handleCheckboxChange}
                    name="Myocardial infarction"
                  />
                }
                label="Myocardial infarction (history, not ECG changes only)" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                  checked={tempCheckedItems['Congestive heart failure'] || false}
                  onChange={handleCheckboxChange}
                  name="Congestive heart failure"
                  />
                } 
                label="Congestive heart failure" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                <Checkbox
                  checked={tempCheckedItems['Peripheral Vascular disease'] || false}
                  onChange={handleCheckboxChange}
                  name="Peripheral Vascular disease"
                />
                } 
                label="Peripheral Vascular disease" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Cerebrovascualar disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Cerebrovascualar disease"
                  />
                }  label="Cerebrovascualar disease: CVA with mild or no residua or TIA" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Dementia'] || false}
                    onChange={handleCheckboxChange}
                    name="Dementia"
                  />
                  } 
                label="Dementia" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>


              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Chronic pulmonary disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Chronic pulmonary disease"
                  />
                  } 
                label="Chronic pulmonary disease" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Connective tissue disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Connective tissue disease"
                  />
                  } 
                label="Connective tissue disease" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Peptic ulcer disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Peptic ulcer disease"
                  />
                  } 
                label="Peptic ulcer disease" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Mild liver disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Mild liver disease"
                  />
                  } 
                label="Mild liver disease (without portal hypertension, includes chronic hepatitis)" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Diabetes without'] || false}
                    onChange={handleCheckboxChange}
                    name="Diabetes without"
                  />
                  } 
                label="Diabetes without end-organ damage (excludes diet-controlled alone)" />
              </Grid>
              <Grid item xs={1} alignItems = 'center'>
                <Typography component = "h6" variant = "h6"> 1 </Typography>
              </Grid>



              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Hemiplegia'] || false}
                    onChange={handleCheckboxChange}
                    name="Hemiplegia"
                  />
                  } 
                label="Hemiplegia" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}> 
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['renal disease'] || false}
                    onChange={handleCheckboxChange}
                    name="renal disease"
                  />
                  } 
                label="Moderate or sever renal disease" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Diabetes with'] || false}
                    onChange={handleCheckboxChange}
                    name="Diabetes with"
                  />
                  }  
                label="Diabetes with end-organ damage (retinopathy, neuropathy, nephorpathy, or brittle diabetes)" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Tumor without metastases'] || false}
                    onChange={handleCheckboxChange}
                    name="Tumor without metastases"
                  />
                  }  
                label="Tumor without metastases (exclude if >5 y from diagosis)" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Leukemia'] || false}
                    onChange={handleCheckboxChange}
                    name="Leukemia"
                  />
                  } 
                label="Leukemia (acute or chronic)" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Lymphoma'] || false}
                    onChange={handleCheckboxChange}
                    name="Lymphoma"
                  />
                  } 
                label="Lymphoma" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 2 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Moderate or severe liver disease'] || false}
                    onChange={handleCheckboxChange}
                    name="Moderate or severe liver disease"
                  />
                  } 
                label="Moderate or severe liver disease" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 3 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['Metastatic solid tumor'] || false}
                    onChange={handleCheckboxChange}
                    name="Metastatic solid tumor"
                  />
                  } 
                label="Metastatic solid tumor" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 6 </Typography>
              </Grid>

              <Grid item xs={11}>
                <FormControlLabel control={
                  <Checkbox
                    checked={tempCheckedItems['AIDS'] || false}
                    onChange={handleCheckboxChange}
                    name="AIDS"
                  />
                  } 
                label="AIDS (not just HIV positive)" />
              </Grid>
              <Grid item xs={1}>
                <Typography component = "h6" variant = "h6"> 6 </Typography>
              </Grid>
            </Grid>
          </FormGroup>

          <hr />
          <DialogActions>
            <Button size = "large" onClick={handleClose}>Cancel</Button>
            <Button size = "large" variant="contained" onClick={handleSave}>Save</Button>
        </DialogActions>

        </Box>
      </Modal>
    </div>
  );
}
