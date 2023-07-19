import Image from 'next/image'
import styles from './page.module.css'
import BasicSelect from './BasicSelect'
import { Select } from '@mui/material'
import BasicDatePicker from './BasicDatePicker'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <BasicSelect> </BasicSelect>
        <BasicDatePicker></BasicDatePicker>
      </div>
    </main>
  )
}
