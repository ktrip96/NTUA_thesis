import { MdDoneOutline, MdPendingActions } from 'react-icons/md'
import { HiChevronRight } from 'react-icons/hi'
import { FaLaptopCode } from 'react-icons/fa'
import styles from './TeacherProjectBox.module.css'

function TeacherProjectBox({ status, name }) {
  function conditionalIcon() {
    if (status === 'done')
      return (
        <MdDoneOutline
          className={styles.first_icon}
          style={{ color: '#7de32d' }}
        />
      )
    else if (status === 'doing')
      return (
        <FaLaptopCode
          className={styles.first_icon}
          style={{ color: '#5e81f4' }}
        />
      )
    else if (status === 'pending')
      return (
        <MdPendingActions
          className={styles.first_icon}
          style={{ color: '#cda000' }}
        />
      )
  }

  function conditionalBackground() {
    if (status === 'done') return { backgroundColor: '#f4fde9' }
    else if (status === 'doing') return { backgroundColor: '#f1f9fe' }
    else if (status === 'pending') return { backgroundColor: '#faf5e5' }
  }
  return (
    <div className={styles.box_ctn} style={conditionalBackground()}>
      {conditionalIcon()}
      {/* Title */}
      <h1 className={[styles.txt, styles.title].join(' ')}>{name}</h1>
      <div style={{ flexGrow: 1 }}></div>

      {/* Arrow */}
      <HiChevronRight className={[styles.icon, styles.gray_color].join(' ')} />
    </div>
  )
}

export default TeacherProjectBox
