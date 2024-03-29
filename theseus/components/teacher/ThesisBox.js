import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import { MdDoneOutline, MdPendingActions } from 'react-icons/md'
import { FaLaptopCode } from 'react-icons/fa'
import styles from './ThesisBox.module.css'
import Link from 'next/link'

const returnBackgroundColor = (status) => {
  if (status === 'Ολοκληρωμένη')
    return { backgroundColor: 'var(--light-green-color)' }
  if (status === 'Σε εξέλιξη')
    return { backgroundColor: 'var(--light-blue-color)' }
  if (status === 'Διαθέσιμη')
    return { backgroundColor: 'var(--light-yellow-color)' }
}

const returnIcon = (status) => {
  if (status === 'Ολοκληρωμένη')
    return (
      <MdDoneOutline
        className={styles.status_icon}
        style={{ color: 'var(--green-color)' }}
      />
    )
  if (status === 'Σε εξέλιξη')
    return (
      <FaLaptopCode
        className={styles.status_icon}
        style={{ color: 'var(--blue-color)' }}
      />
    )
  if (status === 'Διαθέσιμη')
    return (
      <MdPendingActions
        className={styles.status_icon}
        style={{ color: 'var(--yellow-color)' }}
      />
    )
}

const ThesisBox = ({ id, path, status, title }) => {
  return (
    <Link href={`/thesis/${id}`} passHref>
      <div className={styles.thesis_box} style={returnBackgroundColor(status)}>
        <div>
          <label className={styles.label}>Τίτλος: </label>
          <span>{title}</span>
        </div>

        <label className={styles.label}>Συσχετιζόμενο Μάθημα: </label>
        <span> Προηγμένες Τεχνολογίες Κινητού Υπολογισμού</span>
        <br />
        <label className={styles.label}>Ημερομηνία: </label>
        <span> 22/05/2022</span>
        <br />
        <div className={styles.status}>
          <label className={styles.label}>{status} </label>
          {returnIcon(status)}
        </div>
        <HiChevronRight size={30} className={styles.icon} />
      </div>
    </Link>
  )
}
export default ThesisBox
