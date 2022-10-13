import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Button from '../../components/Button'
import styles from './ThesisId.module.css'

function ThesisPage({ category }) {
  const router = useRouter()
  const thesisId = router.query.thesisId
  // On First Render, the page will make an api call to database
  // and will get the info of the particular thesis
  return (
    <div className='main_ctn' style={{ position: 'relative' }}>
      <h1 className={styles.header}>Πληροφοριές Διπλωματικής</h1>

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
            style={{ width: '200px' }}
          >
            {' '}
            Παναγιώτης Τσανάκας
          </a>
        </div>
        <div className={styles.same_line}>
          <h2>Συσχετιζόμενο μάθημα:</h2>{' '}
          <a
            href='https://www.ece.ntua.gr/gr/undergraduate/diploma/217'
            target='_blank'
            rel='noreferrer'
            style={{ width: '200px' }}
          >
            {' '}
            Λειτουργικά Συστήματα Υπολογιστών
          </a>
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
        <h2>Επιπρόσθετες πληροφορίες</h2>
        <p>Εδώ θα μπεί το html text που θα λαμβάνουμε από τον κάθε καθηγητή</p>
        <h2>Επικοινωνία</h2>
        <p>
          Παυλάτος Χρήστος pavlatosc@gmail.com Γραφείο 0.0.3 στο Κτήριο
          Υπολογιστών (Ισόγειο) Τσανάκας Παναγιώτης, panag@cs.ntua.gr, Καθηγητής
        </p>
      </div>

      {category !== 'student' ? (
        <div className={styles.button_container}>
          <button className={[styles.button, styles.apply].join(' ')}>
            Αίτηση
          </button>
        </div>
      ) : (
        <div className={styles.button_container}>
          <button className={[styles.button, styles.edit].join(' ')} id='edit'>
            Eπεξεργασία
          </button>
          <button className={[styles.button, styles.delete].join(' ')}>
            Διαγραφή
          </button>
        </div>
      )}
    </div>
  )
}

export default ThesisPage
