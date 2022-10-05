import Header from '../../components/Header'
import styles from './newProject.module.css'
import { Button, Input, Textarea, useBreakpointValue } from '@chakra-ui/react'

//TODO: Πολλά από τα Inputs θα πρέπει να τα κάνω Autocomplete.
// π.χ. θέλω ο Σιόλας και ο σιόλας να είναι το ίδιο άτομο. Δεν πρέπει να επιτρέπω ορθογραφικά

//TODO: Πολλές διπλωματικές στα real data δεν θα έχουν όλα τα πεδία. Πρέπει να το τσεκάρω πριν κάνω render
//TODO: Αντίστοιχα πολλές θα έχουν κάποια έξτρα πεδία

function NewProject() {
  return (
    <div className='main_ctn'>
      <Header category={'teacher'} />
      <h1 className={styles.title}>Δημιουργία Νέας Διπλωματικής</h1>
      <div className={styles.box_ctn}>
        <h2 className={styles.subtitle}>Τίτλος</h2>
        <Input mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>Επιβλέπων</h2>
        <Input mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>1o μέλος επιτροπής</h2>
        <Input mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>2ο μέλος επιτροπής</h2>
        <Input mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>Περιγραφή</h2>
        <Textarea mt={2} mb={2} bg='white' />

        <h2 className={styles.subtitle}>Συσχετιζόμενο Μάθημα</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Προτεινόμενη βιβλιογραφία</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Επικοινωνία</h2>
        <Textarea bg='white' />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            colorScheme={'whatsapp'}
            size={useBreakpointValue(['sm', 'md', 'lg'])}
            mt={5}
          >
            Δημιουργία διπλωματικής
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewProject
