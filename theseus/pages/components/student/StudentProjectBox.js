import styles from './StudentProjectBox.module.css'
import { HiChevronRight } from 'react-icons/hi'
import Link from 'next/link'
function StudentProjectBox({ path, name, teacher, id }) {
  const pathColorizer = {
    electronics: { color: '#fe7c7c', letter: 'Η' },
    software: { color: '#7e9af6', letter: 'Π' },
    communications: { color: '#f4a65e', letter: 'ΕΠ' },
    energy: { color: '#9bde90', letter: 'ΕΝ' },
  }
  const returnStyling = (path) => ({
    backgroundColor: pathColorizer[path].color,
  })
  const returnLetter = (path) => pathColorizer[path].letter

  return (
    <Link href={`/student/${id}`} passHref={true}>
      <div className={styles.box_ctn}>
        {/* Icon */}
        <div className={styles.logo_box} style={returnStyling(path)}>
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
