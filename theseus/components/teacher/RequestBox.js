import React from 'react'
import styles from './RequestBox.module.css'

import { HiChevronRight } from 'react-icons/hi'
import { MdDoneOutline, MdClose } from 'react-icons/md'

const RequestBox = ({ title }) => {
  return (
    <div
      className={styles.request_box}
      style={{ backgroundColor: 'var(--light-yellow-color)' }}
    >
      <div>
        <label className={styles.label}>Title: </label>
        <span>{title}</span>
      </div>

      <label className={styles.label}>Συσχετιζόμενο Μάθημα: </label>
      <span> Προηγμένες Τεχνολογίες Κινητού Υπολογισμού</span>
      <br />
      <label className={styles.label}>Όνομα Φοιτητή: </label>
      <span> Κωνσταντίνος Τριπαλιτάκης</span>
      <br />
      <label className={styles.label}>Κωδικός Φοιτητή: </label>
      <span> 03114818</span>
      <br />
      <HiChevronRight size={30} className={styles.arrow_icon} />
      <MdDoneOutline
        size={30}
        className={styles.done_icon}
        onClick={() => alert('Accepted')}
      />
      <MdClose
        size={33}
        className={styles.close_icon}
        onClick={() => alert('Rejected')}
      />
    </div>
  )
}
export default RequestBox
