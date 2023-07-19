import Image from 'next/image'
import styles from './page.module.css'
import BasicSelect from './BasicSelect'
import BasicDatePicker from './BasicDatePicker'
import { Box, Select } from '@mui/material'
import Grid from '@mui/material/Grid'

import React from 'react';

export default function Home() {
  return (
    <main>
      <div
        className={styles.gradientBackground}
        // You can adjust the gradient colors and angle as needed
        style={{
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: '8px', // Optional: add border-radius for rounded corners
          padding: '20px', // Optional: add padding to the container
        }}
      >
      
      <BasicSelect> </BasicSelect>
      <BasicDatePicker></BasicDatePicker>
      <Grid container spacing = {2}>
        <Grid>
          <Image src = "/images/X-ray_of_hip.jpg" height = {500} width = {500} alt = "XRay"></Image>
        </Grid>
        <Grid>
          <Grid container direction = "column" spacing = {3}>
            <BasicSelect></BasicSelect>
          </Grid>

          <Grid>
            <BasicSelect></BasicSelect>
          </Grid>

          <Grid>
            <Box>Recomendation</Box>
          </Grid>
        </Grid>
      </Grid>
      
      </div> {/* end gradient :) */}
    </main>
  )
}
