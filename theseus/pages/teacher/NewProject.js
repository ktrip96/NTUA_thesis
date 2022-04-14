import Header from '../components/Header'
import styles from './NewProject.module.css'
import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

function NewProject() {
  const [skills, setSkills] = useState(['MongoDB'])
  const [goals, setGoals] = useState(['Έρευνα'])

  return (
    <div className={styles.main_ctn}>
      <Header category={'teacher'} />
      <h1 className={styles.title}>Δημιουργία Νέας Διπλωματικής</h1>
      <div className={styles.box_ctn}>
        <h2 className={styles.subtitle}>Τίτλος</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Περιγραφή</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Δεξιότητες</h2>
        <Input bg='white' className={styles.input} />
        <Button>Προσθήκη</Button>
        {skills.map((i) => (
          <h1 key={i}>{i}</h1>
        ))}
        <h2 className={styles.subtitle}>Συσχετιζόμενο Μάθημα</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Προτεινόμενη βιβλιογραφία</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Στόχοι</h2>
        <Input bg='white' className={styles.input} />
        <Button>Προσθήκη</Button>
        {goals.map((i) => (
          <h1 key={i}>{i}</h1>
        ))}
        <h2 className={styles.subtitle}>Επικοινωνία</h2>
        <Textarea bg='white' />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button colorScheme={'telegram'} className={styles.button}>
            Δημιουργία διπλωματικής
          </Button>
        </div>
      </div>
    </div>
  )
}

export default NewProject
