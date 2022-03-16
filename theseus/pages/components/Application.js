import styles from './Application.module.css'
import { FaHourglassHalf } from 'react-icons/fa'
import { BiWindowClose } from 'react-icons/bi'

function Application({ name }) {
  return (
    <>
      <div className={styles.application_ctn}>
        <h1 className={styles.content}>L076890756</h1>
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
