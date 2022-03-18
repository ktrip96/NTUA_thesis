import ProjectBox from './ProjectBox'
import styles from './ProjectList.module.css'

const DEVELOPING_DATA = [
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
  },
  {
    path: 'energy',
    teacher: 'Παναγιώτης Τσανάκας',
    name: 'Theseus Project',
  },
  {
    path: 'communications',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
  },
  {
    path: 'electronics',
    teacher: 'Γιώργιος Σιόλας',
    name: 'Artificial Intelligence',
  },
  {
    path: 'software',
    teacher: 'Νίκος Παπασπύρου',
    name: 'Haskell Project',
  },
  {
    path: 'communications',
    teacher: 'Βασίλης Βεσκούκης',
    name: 'Telecommunications',
  },
]

function ProjectList() {
  return (
    <div className={styles.project_ctn}>
      {DEVELOPING_DATA.map((item, i) => (
        <ProjectBox
          name={item.name}
          teacher={item.teacher}
          path={item.path}
          key={i}
        />
      ))}
    </div>
  )
}

export default ProjectList
