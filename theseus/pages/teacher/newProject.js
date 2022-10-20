import Header from '../../components/Header'
import styles from './newProject.module.css'
import { Button, Input, Textarea, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

//TODO: Πολλά από τα Inputs θα πρέπει να τα κάνω Autocomplete.
// π.χ. θέλω ο Σιόλας και ο σιόλας να είναι το ίδιο άτομο. Δεν πρέπει να επιτρέπω ορθογραφικά

//TODO: Πρέπει το κείμενο να εισέρχεται στη βάση με τη μορφή που το δίνει ο κάθε καθηγητής.
//TODO: κάτι αντίστοιχο με το github README δλδ.

function NewProject() {
  const router = useRouter()
  return (
    <div className='main_ctn'>
      <Header category={'teacher'} />

      <h1 className={styles.title}>Δημιουργία Νέας Διπλωματικής</h1>

      <div className={styles.box_ctn}>
        <h2 className={styles.subtitle}>Τίτλος</h2>
        <Input mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>Περιγραφή</h2>
        <Textarea mt={2} mb={2} bg='white' />
        <h2 className={styles.subtitle}>Επιπρόσθετες Πληροφορίες</h2>
        <Textarea mt={2} mb={2} bg='white' />

        <h2 className={styles.subtitle}>Συσχετιζόμενο Μάθημα</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Προτεινόμενη βιβλιογραφία</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Επικοινωνία</h2>
        <Textarea bg='white' />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <Button
            colorScheme={'whatsapp'}
            size={useBreakpointValue(['sm', 'md', 'lg'])}
            mt={5}
          >
            Δημιουργία διπλωματικής
          </Button>
          <Button
            colorScheme={'blackAlpha'}
            size={useBreakpointValue(['sm', 'md', 'lg'])}
            mt={5}
            onClick={() => router.back()}
          >
            Άκυρο
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewProject
