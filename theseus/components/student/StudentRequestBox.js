import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { MdPendingActions, MdClose, MdDoneOutline } from 'react-icons/md'
import styles from './StudentRequestBox.module.css'

const returnBackgroundColor = (status) => {
  if (status === 'Σε αναμονή')
    return { backgroundColor: 'var(--yellow-color)', opacity: 0.9 }
  if (status === 'Απορρίφθηκε')
    return { backgroundColor: 'var(--red-color)', opacity: 0.9 }
  if (status === 'Επιτυχία')
    return { backgroundColor: 'var(--green-color)', opacity: 0.9 }
}

const returnIcon = (status) => {
  if (status === 'Σε αναμονή')
    return (
      <MdPendingActions
        className={styles.status_icon}
        style={{ color: 'white' }}
      />
    )
  if (status === 'Απορρίφθηκε')
    return <MdClose className={styles.status_icon} style={{ color: 'white' }} />

  if (status === 'Επιτυχία')
    return (
      <MdDoneOutline
        className={styles.status_icon}
        style={{ color: 'white' }}
      />
    )
}

const StudentRequestBox = ({ status = 'Σε αναμονή', title, teacher }) => {
  return (
    <div className={styles.thesis_box}>
      <div>
        <label className={styles.label}>Τίτλος: </label>
        <span>{title}</span>
      </div>

      <label className={styles.label}>Επιβλέπων: </label>
      <span> {teacher}</span>
      <br />
      <label className={styles.label}>Ημερομηνία Αίτησης: </label>
      <span> 22/05/2022</span>
      <br />

      <div className={styles.status} style={returnBackgroundColor(status)}>
        <label className={styles.label}>{status} </label>
        {returnIcon(status)}
      </div>
      <HiChevronRight size={30} className={styles.icon} />
    </div>
  )
}
export default StudentRequestBox
