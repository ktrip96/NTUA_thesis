import styles from './MobileStudentMenu.module.css'
import { useState } from 'react'

function MobileStudentMenu() {
  const [isActive, setIsActive] = useState(1)
  return (
    <div className={styles.menu_ctn}>
      <div
        className={
          isActive === 1 ? styles.menu_box_selected : styles.menu_box_default
        }
        onClick={() => setIsActive(1)}
      >
        <h2>Όλες οι διπλωματικές</h2>
      </div>
      <div
        className={
          isActive === 2 ? styles.menu_box_selected : styles.menu_box_default
        }
        onClick={() => setIsActive(2)}
      >
        <h2>Οι αιτήσεις μου</h2>
      </div>
      <div
        className={
          isActive === 3 ? styles.menu_box_selected : styles.menu_box_default
        }
        onClick={() => setIsActive(3)}
      >
        <h2>Η διπλωματική μου</h2>
      </div>
    </div>
  )
}

export default MobileStudentMenu
