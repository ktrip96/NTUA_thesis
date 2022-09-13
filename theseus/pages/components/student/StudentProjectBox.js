import styles from './StudentProjectBox.module.css'
import { HiChevronRight } from 'react-icons/hi'
import Link from 'next/link'
function StudentProjectBox({ path, name, teacher, id }) {
  const pathColorizer = {
    electronics: {
      color: '#fe7c7c',
      letter: 'Η',
      background: 'rgba(254, 124, 124,0.1)',
    },
    software: {
      color: '#7e9af6',
      letter: 'Π',
      background: 'rgba(126, 154, 246, 0.1)',
    },
    communications: {
      color: '#f4a65e',
      letter: 'ΕΠ',
      background: 'rgba(244, 166, 94, 0.1)',
    },
    energy: {
      color: '#9bde90',
      letter: 'ΕΝ',
      background: 'rgba(155, 222, 145, 0.1)',
    },
  }
  const returnIconStyling = (path) => ({
    backgroundColor: pathColorizer[path].color,
  })
  const returnBoxStyling = (path) => ({
    backgroundColor: pathColorizer[path].background,
  })
  const returnLetter = (path) => pathColorizer[path].letter

  return (
    <Link href={`/student/${id}`} passHref={true}>
      <div className={styles.box_ctn} style={returnBoxStyling(path)}>
        {/* Icon */}
        <div className={styles.logo_box} style={returnIconStyling(path)}>
          <h1 className={styles.logo_ltr}>{returnLetter(path)}</h1>
        </div>
        {/* Title */}
        <h1 className={[styles.txt, styles.title].join(' ')}>{name}</h1>
        <div style={{ flexGrow: 1 }}></div>
        {/* Teacher */}
        <p className={[styles.txt, styles.gray_color].join(' ')}>{teacher}</p>
        {/* Arrow */}
        <HiChevronRight
          className={[styles.icon, styles.gray_color].join(' ')}
        />
      </div>
    </Link>
  )
}

export default StudentProjectBox
