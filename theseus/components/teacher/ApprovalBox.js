import React from 'react'
import styles from './ApprovalBox.module.css'
import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi'
import { MdDoneOutline, MdClose } from 'react-icons/md'

const ApprovalBox = ({ title, id }) => {
  return (
    <Link href={`/requests/${id}`} passHref>
      <div
        className={styles.approval_box}
        style={{ backgroundColor: 'var(--light-green-color)' }}
      >
        <div>
          <label className={styles.label}>Title: </label>
          <span>{title}</span>
        </div>

        <label className={styles.label}>Συσχετιζόμενο Μάθημα: </label>
        <span> Προηγμένες Τεχνολογίες Κινητού Υπολογισμού</span>
        <br />
        <label className={styles.label}>Επιβλέποντας: </label>
        <span>Γιώργιος Σιόλας</span>
        <br />
        <label className={styles.label}>Φοιτητής: </label>
        <span> Κωνσταντίνος Τριπαλιτάκης</span>

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
        <div className={styles.status}>
          <label className={styles.label}> Δες περισσότερα</label>
          <HiChevronRight size={30} className={styles.arrow_icon} />
        </div>
      </div>
    </Link>
  )
}
export default ApprovalBox
