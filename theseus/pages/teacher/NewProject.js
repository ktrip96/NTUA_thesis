import Header from '../../components/Header'
import styles from './NewProject.module.css'
import { Button, Input, Textarea, Box, Tag, TagLabel } from '@chakra-ui/react'
import { useState } from 'react'

function NewProject() {
  const [skills, setSkills] = useState(['MongoDB'])
  const [goals, setGoals] = useState(['Έρευνα'])

  const [skillValue, setSkillValue] = useState('')
  const [skillsArray, setSkillsArray] = useState(['MongoDB'])

  const [goalValue, setGoalValue] = useState('')
  const [goalArray, setGoalArray] = useState(['Έρευνα'])

  function handleForm(e) {
    e.preventDefault()
    const newArray = [...skillsArray, skillValue]
    setSkillsArray(newArray)
    setSkillValue('')
  }

  function handleGoalsForm(e) {
    e.preventDefault()
    const newArray = [...goalArray, goalValue]
    setGoalArray(newArray)
    setGoalValue('')
  }

  return (
    <div className={styles.main_ctn}>
      <Header category={'teacher'} />
      <h1 className={styles.title}>Δημιουργία Νέας Διπλωματικής</h1>
      <div className={styles.box_ctn}>
        <h2 className={styles.subtitle}>Τίτλος</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Επιβλέπων</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>1o μέλος επιτροπής</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>2ο μέλος επιτροπής</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Περιγραφή</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Δεξιότητες</h2>

        {/* Random Stuff Beneath */}

        <form onSubmit={handleForm}>
          <Input
            type='text'
            onChange={(e) => setSkillValue(e.target.value)}
            value={skillValue}
            bg='white'
          />
        </form>
        <Box mb={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {skillsArray.map((i, j) => (
            <div className={styles.tag} key={j}>
              <Tag
                borderRadius='full'
                variant='solid'
                colorScheme='green'
                mr={3}
                mt={3}
                pr={3}
                pl={3}
                onClick={(e) =>
                  setSkillsArray(
                    skillsArray.filter((data) => data !== e.target.innerText)
                  )
                }
              >
                <TagLabel>{i}</TagLabel>
              </Tag>
            </div>
          ))}
        </Box>

        {/* Random Stuff Above */}
        <h2 className={styles.subtitle}>Συσχετιζόμενο Μάθημα</h2>
        <Input bg='white' className={styles.input} />
        <h2 className={styles.subtitle}>Προτεινόμενη βιβλιογραφία</h2>
        <Textarea bg='white' className={styles.textarea} />
        <h2 className={styles.subtitle}>Στόχοι</h2>

        <form onSubmit={handleGoalsForm}>
          <Input
            type='text'
            onChange={(e) => setGoalValue(e.target.value)}
            value={goalValue}
            bg='white'
          />
        </form>
        <Box mb={3} style={{ display: 'flex', flexWrap: 'wrap' }}>
          {goalArray.map((i, j) => (
            <div className={styles.tag} key={j}>
              <Tag
                borderRadius='full'
                variant='solid'
                colorScheme='green'
                mr={3}
                mt={3}
                pr={3}
                pl={3}
                key={j}
                onClick={(e) =>
                  setGoalArray(
                    goalArray.filter((data) => data !== e.target.innerText)
                  )
                }
              >
                <TagLabel>{i}</TagLabel>
              </Tag>
            </div>
          ))}
        </Box>
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
