import { AiOutlineFolder } from 'react-icons/ai'
import { BsBook } from 'react-icons/bs'
import { FiGrid } from 'react-icons/fi'
import styles from './DesktopStudentMenu.module.css'

function DesktopStudentMenu() {
  return (
    <div>
      <div className={styles.menu_box}>
        <AiOutlineFolder className={styles.menu_icon} />
        <h1 className={styles.menu_title}>Όλες οι διπλωματικές</h1>
      </div>
      <BsBook />
      <FiGrid />
    </div>
  )
}

export default DesktopStudentMenu
