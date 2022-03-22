import { Button } from '@chakra-ui/react'
import styles from './ProjectInfo.module.css'
import { getProjectById } from '../../dummy_data'

function ProjectInfo({ projectId }) {
  // pathColorizer connects path value with box color

  const pathColorizer = {
    electronics: { color: '#fe7c7c' },
    software: { color: '#7e9af6' },
    communications: { color: '#f4a65e' },
    energy: { color: '#9bde90' },
  }

  // returnStyling returns the CSS object with the correct background color

  const returnStyling = (path) => ({
    backgroundColor: pathColorizer[path].color,
  })

  const project = getProjectById(projectId)
  // console.log('project is:', project)

  if (project === undefined) return <h1>Loading Gif</h1>

  return (
    <div className={styles.project_ctn}>
      {/* Τίτλος */}
      <h1 className={styles.title}>Τίτλος</h1>
      <p className={styles.txt}>{project.title}</p>
      {/* Αναγνωριστικό Διπλωματικής */}
      <h1 className={styles.title}>Αναγνωριστικό Διπλωματικής</h1>
      <p className={styles.txt}>{project.id}</p>

      {/* Επιβλέπων */}
      <h1 className={styles.title}>Επιβλέπων</h1>
      <p className={styles.txt}>{project.teacher}</p>

      {/* Συσχετιζόμενο Μάθημα */}
      <h1 className={styles.title}>Συσχετιζόμενο μάθημα</h1>
      <div className={styles.lesson_ctn}>
        <p
          className={styles.txt}
          style={{
            marginTop: '0.5rem',
            paddingTop: '8px',
            borderRadius: '10px',
            color: 'white',
            width: '200px',
            height: '40px',
            textAlign: 'center',
            backgroundColor: `${returnStyling(project.path).backgroundColor}`,
          }}
        >
          {project.lesson}
        </p>
      </div>
      {/* Περιγραφή */}
      <h1 className={styles.title}>Περιγραφή</h1>
      <p className={styles.txt}>{project.description}</p>

      {/* Στόχοι */}
      <h1 className={styles.title}>Στόχοι</h1>
      <p className={styles.txt}>{project.goals}</p>
      {/* Προτεινόμενη Βιβλιογραφία */}
      <h1 className={styles.title}>Προτεινόμενη Βιβλιογραφία</h1>
      <p className={styles.txt}>{project.bibliography}</p>
      {/* Προαπαιτούμενα */}
      <h1 className={styles.title}>Προαπαιτούμενα</h1>
      <ul className={styles.txt}>
        <li>Python 1.0</li>
        <li>Python 2.0</li>
        <li>Python 3.0</li>
      </ul>
      {/* Επικοινωνία */}
      <h1 className={styles.title}>Επικοινωνία</h1>
      <p className={styles.txt}>{project.communication}</p>
      <Button colorScheme='blue' width='200px' className={styles.test}>
        Αίτηση
      </Button>
    </div>
  )
}

export default ProjectInfo
