import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import styles from './RequestId.module.css'
import { MdDoneOutline } from 'react-icons/md'

function RequestPage({ category = 'teacher' }) {
  const router = useRouter()
  const requestId = router.query.requestId
  // On First Render, the page will make an api call to database
  // and will get the info of the particular thesis
  return (
    <div className='main_ctn' style={{ position: 'relative' }}>
      <h1 className={styles.header}>Πληροφοριές Αίτησης</h1>

      <div className={styles.box_ctn}>
        <AiOutlineArrowLeft
          className={styles.icon}
          onClick={() => router.back()}
        />
        <h1 className={styles.title}>
          Ανάπτυξη web εφαρμογής για αναγνώριση δευτεροταγούς δομής αλληλουχιών
          RNA
        </h1>
        <div className={styles.same_line}>
          <h2>Επιβλέπων:</h2>{' '}
          <a
            href='https://www.ece.ntua.gr/gr/staff/39'
            target='_blank'
            rel='noreferrer'
            style={{ width: '250px' }}
          >
            {' '}
            Παναγιώτης Τσανάκας
          </a>
        </div>
        <div className={styles.same_line}>
          <h2>Όνομα φοιτητή:</h2>{' '}
          <p style={{ width: '250px' }}> Κωνσταντίνος Τριπαλιτάκης</p>
        </div>
        <div className={styles.same_line}>
          <h2>Αριθμός Μητρώου:</h2> <p style={{ width: '250px' }}> 03114818</p>
        </div>
        <div className={styles.same_line}>
          <h2>Email φοιτητή:</h2>{' '}
          <p style={{ width: '250px' }}> ktrip96@gmail.com</p>
        </div>
        <div className={styles.same_line}>
          <h2>Συσχετιζόμενο μάθημα:</h2>{' '}
          <a
            href='https://www.ece.ntua.gr/gr/undergraduate/diploma/217'
            target='_blank'
            rel='noreferrer'
            style={{ width: '250px' }}
          >
            {' '}
            Λειτουργικά Συστήματα Υπολογιστών
          </a>
        </div>
        <div className={styles.same_line}>
          <h2>Status:</h2>{' '}
          <div
            style={{
              display: 'flex',
              color: 'var(--green-color)',
              gap: '10px',
            }}
          >
            {' '}
            Accepted <MdDoneOutline size={20} />{' '}
          </div>
        </div>

        <h2>Περιγραφή</h2>
        <p>
          Το RNA είναι απαραίτητο για διάφορες βιολογικές διεργασίες, από τη
          μεταφορά γενετικής πληροφορίας μέχρι τη ρύθμιση της γονιδιακής
          έκφρασης. Υπάρχει ισχυρή συσχέτιση μεταξύ της δομής ενός μορίου RNA
          και της λειτουργίας του. Ο πειραματικός προσδιορισμός των δομών του
          RNA είναι δύσκολος και οι ακριβείς μέθοδοι προσδιορισμού της δομής
          ενός μορίου RNA είναι χρονοβόρες, με μεγάλο κόστος και η ακρίβειά τους
          περιορίζεται από το μήκος του RNA. Μια βασική δομή του RNA είναι αυτή
          του ψευδοκόμβου (pseudoknot).
        </p>

        <h2>Επικοινωνία</h2>
        <p>
          Παυλάτος Χρήστος pavlatosc@gmail.com Γραφείο 0.0.3 στο Κτήριο
          Υπολογιστών (Ισόγειο) Τσανάκας Παναγιώτης, panag@cs.ntua.gr, Καθηγητής
        </p>
      </div>

      {category !== 'student' && (
        <div className={styles.button_container}>
          <button
            className={[styles.button, styles.accept].join(' ')}
            id='edit'
          >
            Αποδοχή
          </button>
          <button className={[styles.button, styles.delete].join(' ')}>
            Απόρριψη
          </button>
        </div>
      )}
    </div>
  )
}

export default RequestPage
