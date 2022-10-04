import styles from './Application.module.css'
import { FaHourglassHalf } from 'react-icons/fa'
import Link from 'next/link'

function Application({ name }) {
  return (
    <>
      <div className={styles.application_ctn}>
        <Link href={`/student/L04328948`} passHref={true}>
          <h1 className={styles.content} style={{ cursor: 'pointer' }}>
            L04328948
          </h1>
        </Link>
        <h1 className={[styles.name_ctn, styles.content].join(' ')}>{name}</h1>
        <div className={[styles.icon_ctn, styles.content].join(' ')}>
          <FaHourglassHalf style={{ color: '#d78c2a' }} />
        </div>
      </div>
      <div className={styles.border_bottom}></div>
    </>
  )
}

export default Application
