import styles from './ApplicationBox.module.css'
import ApplicationList from './ApplicationList'

function ApplicationBox() {
  return (
    <div className={styles.box_ctn}>
      <div className={styles.header}>
        <h1 className={styles.title}>Αναγνωριστικό</h1>
        <h1 className={styles.title}>Καθηγητής</h1>
        <h1 className={styles.title}>Κατάσταση</h1>
      </div>
      <ApplicationList />
    </div>
  )
}

export default ApplicationBox
