import { Button } from '@chakra-ui/react'
import styles from './ProjectInfo.module.css'

function ProjectInfo() {
  return (
    <div className={styles.project_ctn}>
      {/* Τίτλος */}
      <h1 className={styles.title}>Τίτλος</h1>
      <p className={styles.txt}>Δημιουργία πλατφόρμας κοινωνικού δικτύου</p>
      {/* Αναγνωριστικό Διπλωματικής */}
      <h1 className={styles.title}>Αναγνωριστικό Διπλωματικής</h1>
      <p className={styles.txt}>L04328947</p>

      {/* Επιβλέπων */}
      <h1 className={styles.title}>Επιβλέπων</h1>
      <p className={styles.txt}>Παναγιώτης Τσανάκας</p>

      {/* Συσχετιζόμενο Μάθημα */}
      <h1 className={styles.title}>Συσχετιζόμενο μάθημα</h1>
      <div className={styles.lesson_ctn}>
        <p className={styles.txt}>Τεχνολογία Λογισμικού</p>
      </div>
      {/* Περιγραφή */}
      <h1 className={styles.title}>Περιγραφή</h1>
      <p className={styles.txt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>

      {/* Στόχοι */}
      <h1 className={styles.title}>Στόχοι</h1>
      <p className={styles.txt}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      {/* Προτεινόμενη Βιβλιογραφία */}
      <h1 className={styles.title}>Προτεινόμενη Βιβλιογραφία</h1>
      <p className={styles.txt}>[1].NextJS, the official handbook</p>
      {/* Προαπαιτούμενα */}
      <h1 className={styles.title}>Προαπαιτούμενα</h1>
      <ul className={styles.txt}>
        <li>Python 1.0</li>
        <li>Python 2.0</li>
        <li>Python 3.0</li>
      </ul>
      {/* Επικοινωνία */}
      <h1 className={styles.title}>Επικοινωνία</h1>
      <p className={styles.txt}>ktrip96@gmail.com</p>
      <Button colorScheme='blue' width='200px' className={styles.test}>
        Αίτηση
      </Button>
    </div>
  )
}

export default ProjectInfo
