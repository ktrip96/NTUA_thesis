import Link from 'next/link'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi'
import Tag from '../Tag'
import styles from './StudentThesisBox.module.css'

const StudentThesisBox = ({ id, title, teacher, path }) => {
  return (
    <Link href={`/thesis/${id}`} passHref>
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
        <div className={styles.tag}>
          <Tag content={['Ροή ' + path, 'Μηχανική Μάθηση']} path={path} />
        </div>
        <div className={styles.status}>Δες περισσότερα</div>
        <HiChevronRight size={30} className={styles.icon} />
      </div>
    </Link>
  )
}
export default StudentThesisBox
