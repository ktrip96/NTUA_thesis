import Application from './Application'
import styles from './ApplicationBox.module.css'

function ApplicationBox() {
  return (
    <div className={styles.box_ctn}>
      <div className={styles.header}>
        <h1 className={styles.title}>Αναγνωριστικό</h1>
        <h1 className={styles.title}>Καθηγητής</h1>
        <h1 className={styles.title}>Κατάσταση</h1>
      </div>
      <Application name='Παναγιώτης Τσανάκας' />
      <Application name='Νίκος Νίκος' />
      <Application name='Βασίλης  Παπαβασιλακόπουλος' />
    </div>
  )
}

export default ApplicationBox
