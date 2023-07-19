import Image from 'next/image'
import styles from './page.module.css'
import BasicSelect from './BasicSelect'
import { Select } from '@mui/material'
import React from 'react';
import Grid from '@mui/material/Grid';


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

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <BasicSelect> </BasicSelect>
        </Grid>
        <Grid item xs={6}>
          <BasicSelect> </BasicSelect>
        </Grid>
        <Grid item xs={6}>
          <BasicSelect> </BasicSelect>
        </Grid>
        <Grid item xs={6}>
          <BasicSelect> </BasicSelect>
        </Grid>
      </Grid>
      
      
      </div> {/* end gradient :) */}
    </main>
  )
}
